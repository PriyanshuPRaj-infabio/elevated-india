"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Helper: get coords for a destination
function getCoords(dest, locations) {
  const loc = locations[dest.locationKey];
  return loc ? loc.coords : [77.2090, 28.6139]; // default Delhi fallback
}

export default function JourneyMap({
  activeDay = 0,
  destinations = [],
  locations = {},
  markerKeys = [],
  routeCoords = [],
  isMini = false
}) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [mapboxLoaded, setMapboxLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const prevDayRef = useRef(activeDay);

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  // Get active revealed route up to the current day based on day's precalculated revealedRouteKeys
  const getRevealedRoute = (dayIndex) => {
    const dest = destinations[dayIndex] || destinations[0];
    if (!dest) return routeCoords.slice(0, 1);
    
    // If the day specifies revealedRouteKeys, use them; otherwise fallback to incremental slice
    if (dest.revealedRouteKeys && dest.revealedRouteKeys.length > 0) {
      return dest.revealedRouteKeys.map(k => locations[k]?.coords).filter(Boolean);
    }
    
    // Fallback: incrementally reveal coordinate markers up to activeDay
    const keysSoFar = [];
    for (let i = 0; i <= dayIndex; i++) {
      const key = destinations[i]?.locationKey;
      if (key && !keysSoFar.includes(key)) {
        keysSoFar.push(key);
      }
    }
    return keysSoFar.map(k => locations[k]?.coords).filter(Boolean);
  };

  // ── Initialize Mapbox ─────────────────────────────────────────────
  useEffect(() => {
    if (useFallback || isMini || destinations.length === 0) return;

    let isCancelled = false;
    let localMap = null;

    import("mapbox-gl")
      .then((module) => {
        if (isCancelled) return;
        
        const mapboxgl = module.default;

        if (!mapboxgl.supported()) {
          setUseFallback(true);
          return;
        }

        mapboxgl.accessToken = mapboxToken;

        try {
          const initCoords = getCoords(destinations[0], locations);

          // Clear map container to prevent WebGL context leaks and overlapping markers
          if (mapContainerRef.current) {
            mapContainerRef.current.innerHTML = "";
          }

          const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/light-v11",
            center: initCoords,
            zoom: destinations[0].zoom || 7.5,
            pitch: 0,
            bearing: 0,
            interactive: true,
            scrollZoom: false,
            attributionControl: false
          });

          map.addControl(
            new mapboxgl.NavigationControl({ showCompass: false }),
            "top-left"
          );

          localMap = map;
          mapRef.current = map;

          map.on("load", () => {
            if (isCancelled) {
              map.remove();
              return;
            }

            // ── Full route (faint ghost line) ────────────────────────
            map.addSource("route-full", {
              type: "geojson",
              data: {
                type: "Feature",
                properties: {},
                geometry: { type: "LineString", coordinates: routeCoords }
              }
            });

            map.addLayer({
              id: "route-full-line",
              type: "line",
              source: "route-full",
              layout: { "line-join": "round", "line-cap": "round" },
              paint: {
                "line-color": "#B8B0A4",
                "line-width": 1.5,
                "line-dasharray": [4, 4],
                "line-opacity": 0.3
              }
            });

            // ── Revealed route (bold active trace) ───────────────────
            map.addSource("route-active", {
              type: "geojson",
              data: {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  coordinates: getRevealedRoute(0)
                }
              }
            });

            map.addLayer({
              id: "route-active-line",
              type: "line",
              source: "route-active",
              layout: { "line-join": "round", "line-cap": "round" },
              paint: {
                "line-color": "#2D2A26",
                "line-width": 2.5,
                "line-dasharray": [3, 3],
                "line-opacity": 0.9
              }
            });

            // ── Place markers ────────────────────────────────────────
            markerKeys.forEach((key) => {
              const loc = locations[key];
              if (!loc) return;
              
              const el = document.createElement("div");
              el.className = `safari-marker-container ${
                key === destinations[0].locationKey ? "active" : ""
              }`;
              el.id = `marker-${key}`;

              const pulse = document.createElement("div");
              pulse.className = "safari-marker-pulse";
              el.appendChild(pulse);

              const dot = document.createElement("div");
              dot.className = "safari-marker-dot";
              el.appendChild(dot);

              const label = document.createElement("div");
              label.className = "safari-marker-label";
              label.innerText = loc.name;
              el.appendChild(label);

              new mapboxgl.Marker({ element: el, anchor: "center" })
                .setLngLat(loc.coords)
                .addTo(map);
            });

            setMapboxLoaded(true);
          });

          map.on("error", () => setUseFallback(true));
        } catch {
          setUseFallback(true);
        }
      })
      .catch(() => setUseFallback(true));

    return () => {
      isCancelled = true;
      if (localMap) {
        localMap.remove();
      }
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [useFallback, mapboxToken]);

  // ── Cinematic camera + route reveal on activeDay change ───────────
  useEffect(() => {
    if (!mapboxLoaded || !mapRef.current || useFallback || destinations.length === 0) return;

    const map = mapRef.current;
    const dest = destinations[activeDay] || destinations[0];
    const destCoords = getCoords(dest, locations);
    const prevDay = prevDayRef.current;
    const prevDest = destinations[prevDay] || destinations[0];
    const prevCoords = getCoords(prevDest, locations);
    prevDayRef.current = activeDay;

    // 1. Update active marker highlights
    markerKeys.forEach((key) => {
      const el = document.getElementById(`marker-${key}`);
      if (el) el.classList.toggle("active", key === dest.locationKey);
    });

    // 2. Update revealed route trace
    const revealedCoords = getRevealedRoute(activeDay);
    const activeSource = map.getSource("route-active");
    if (activeSource && revealedCoords.length > 0) {
      activeSource.setData({
        type: "Feature",
        properties: {},
        geometry: { type: "LineString", coordinates: revealedCoords }
      });
    }

    // 3. Cinematic camera movement
    const isSameLocation = prevDest.locationKey === dest.locationKey;

    if (isSameLocation) {
      map.flyTo({
        center: destCoords,
        zoom: dest.zoom || 8.5,
        essential: true,
        duration: 1800,
        pitch: 0,
        bearing: 0
      });
    } else {
      const midLng = (prevCoords[0] + destCoords[0]) / 2;
      const midLat = (prevCoords[1] + destCoords[1]) / 2;

      map.flyTo({
        center: [midLng, midLat],
        zoom: Math.max(5.0, (dest.zoom || 8.5) - 2.5),
        essential: true,
        duration: 1500,
        pitch: 0,
        bearing: 0
      });

      setTimeout(() => {
        if (!mapRef.current) return;
        map.flyTo({
          center: destCoords,
          zoom: dest.zoom || 8.5,
          essential: true,
          duration: 2500,
          pitch: 0,
          bearing: 0
        });
      }, 1600);
    }
  }, [activeDay, mapboxLoaded, useFallback]);

  // ── SVG Fallback ──────────────────────────────────────────────────
  if (useFallback || isMini || !mapboxToken) {
    if (destinations.length === 0) return null;
    const dest = destinations[activeDay] || destinations[0];

    const svgWidth = 800;
    const svgHeight = 600;

    // Dynamically calculate coordinate bounding box of the entire route
    const lons = routeCoords.map((c) => c[0]);
    const lats = routeCoords.map((c) => c[1]);
    const minLon = Math.min(...lons);
    const maxLon = Math.max(...lons);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);

    const lonDelta = maxLon - minLon || 1;
    const latDelta = maxLat - minLat || 1;
    
    // Add 25% padding margin to keep route markers safely within SVG box
    const padding = 0.25;
    const LNG_MIN = minLon - lonDelta * padding;
    const LNG_MAX = maxLon + lonDelta * padding;
    const LAT_MIN = minLat - latDelta * padding;
    const LAT_MAX = maxLat + latDelta * padding;

    function toSvg(coords) {
      const x = ((coords[0] - LNG_MIN) / (LNG_MAX - LNG_MIN)) * svgWidth;
      const y = ((LAT_MAX - coords[1]) / (LAT_MAX - LAT_MIN)) * svgHeight;
      return { x, y };
    }

    const svgMarkers = markerKeys.map((key) => {
      const loc = locations[key];
      if (!loc) return null;
      return {
        id: key,
        name: loc.name,
        ...toSvg(loc.coords)
      };
    }).filter(Boolean);

    const svgRoute = routeCoords.map(toSvg);
    const svgRevealed = getRevealedRoute(activeDay).map(toSvg);

    const fullPathD = svgRoute
      .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)},${p.y.toFixed(1)}`)
      .join(" ");

    const revealedPathD = svgRevealed
      .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)},${p.y.toFixed(1)}`)
      .join(" ");

    const currentSvg = toSvg(getCoords(dest, locations));
    
    // Zoom focus variables
    const zoomFactor = 1.8;
    const vWidth = svgWidth / zoomFactor;
    const vHeight = svgHeight / zoomFactor;
    const vX = Math.max(0, Math.min(svgWidth - vWidth, currentSvg.x - vWidth / 2));
    const vY = Math.max(0, Math.min(svgHeight - vHeight, currentSvg.y - vHeight / 2));

    return (
      <div className="safari-vector-map" aria-label="Interactive travel map">
        <motion.svg
          className="safari-vector-svg"
          viewBox={`${vX} ${vY} ${vWidth} ${vHeight}`}
          animate={{ viewBox: `${vX} ${vY} ${vWidth} ${vHeight}` }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Topographical contour lines */}
          <path className="safari-vector-contour" d="M 50,50 Q 150,120 200,100 T 400,200 T 700,50" />
          <path className="safari-vector-contour" d="M 80,180 Q 220,180 320,280 T 560,400 T 720,250" />
          <path className="safari-vector-contour" d="M 120,380 Q 250,420 380,380 T 620,520 T 780,480" />

          {/* Full static route (ghost trace) */}
          {fullPathD && (
            <path
              d={fullPathD}
              className="safari-vector-path-under"
              style={{ stroke: "rgba(184, 150, 74, 0.15)", strokeWidth: 2 }}
            />
          )}

          {/* Active progress route (dashed/animation line) */}
          {revealedPathD && (
            <path
              d={revealedPathD}
              className="safari-vector-path-active"
            />
          )}

          {/* Markers & Labels */}
          {svgMarkers.map((m) => {
            const isActive = m.id === dest.locationKey;
            return (
              <g key={m.id} className="svg-marker-group">
                {/* Outer pulse ring for active marker */}
                {isActive && (
                  <circle
                    cx={m.x}
                    cy={m.y}
                    r="12"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                )}
                {/* Center marker dot */}
                <circle
                  cx={m.x}
                  cy={m.y}
                  r={isActive ? "5" : "3.5"}
                  fill={isActive ? "var(--gold)" : "var(--charcoal)"}
                  stroke="var(--ivory)"
                  strokeWidth="1.5"
                />
                {/* Text Label */}
                <text
                  x={m.x + 8}
                  y={m.y + 3}
                  fill={isActive ? "var(--gold)" : "var(--charcoal)"}
                  fontSize={isActive ? "7.5" : "6.5"}
                  fontFamily="var(--font-sans)"
                  fontWeight={isActive ? "700" : "500"}
                  letterSpacing="0.08em"
                >
                  {m.name.toUpperCase()}
                </text>
              </g>
            );
          })}
        </motion.svg>
      </div>
    );
  }

  return (
    <div className="safari-mapbox-container">
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css"
        rel="stylesheet"
        precedence="default"
      />
    </div>
  );
}

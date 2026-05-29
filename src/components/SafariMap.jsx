"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all coordinates.
// Every marker, route line, and camera target references this object.
// Coords format: [Longitude, Latitude]
// ────────────────────────────────────────────────────────────────────
const LOCATIONS = {
  nagpur:      { name: "Nagpur",         coords: [79.0472, 21.0922] },
  pench:       { name: "Pench NP",       coords: [79.2964, 21.6752] },
  kanha:       { name: "Kanha NP",       coords: [80.6230, 22.2850] },
  bandhavgarh: { name: "Bandhavgarh NP", coords: [80.9625, 23.6893] },
};

// Itinerary days — each references a location by key
const destinations = [
  {
    locationKey: "pench",
    name: "Pench National Park",
    zoom: 10.5,
    title: "Into The Heart Of Pench",
    description: "Day 1 — Private transfer from Nagpur Airport to Jamtara Wilderness Camp."
  },
  {
    locationKey: "pench",
    name: "Pench Tiger Reserve",
    zoom: 11.2,
    title: "The Sunrise Patrol",
    description: "Day 2 — Sunrise game drives and Bengal Tiger tracking deep inside Pench."
  },
  {
    locationKey: "kanha",
    name: "Kanha Tiger Reserve",
    zoom: 10.5,
    title: "Walking Safaris & Conservation",
    description: "Day 3 — Guided walking safaris through sal forests and transfer to Kanha Earth Lodge."
  },
  {
    locationKey: "bandhavgarh",
    name: "Bandhavgarh National Park",
    zoom: 10.5,
    title: "The Starry Wilderness Camp",
    description: "Day 4 — Deep safari tracking and private canvas fly camp under the stars."
  },
  {
    locationKey: "nagpur",
    name: "Nagpur Airport",
    zoom: 10,
    title: "Departure Over The Canopy",
    description: "Day 5 — Private helicopter charter back to Nagpur Airport for departures."
  }
];

// Helper: get coords for a destination
function getCoords(dest) {
  return LOCATIONS[dest.locationKey].coords;
}

// Unique marker entries (one per physical location)
const markerKeys = ["nagpur", "pench", "kanha", "bandhavgarh"];

// Full closed-loop route built from the single source
const routeCoords = [
  LOCATIONS.nagpur.coords,
  LOCATIONS.pench.coords,
  LOCATIONS.kanha.coords,
  LOCATIONS.bandhavgarh.coords,
  LOCATIONS.nagpur.coords, // close the loop
];

// ────────────────────────────────────────────────────────────────────
// Progressive route reveal per active day
// ────────────────────────────────────────────────────────────────────
function getRevealedRoute(dayIndex) {
  // Day 0-1 (Pench):      Nagpur → Pench
  // Day 2   (Kanha):      Nagpur → Pench → Kanha
  // Day 3   (Bandhavgarh): Nagpur → Pench → Kanha → Bandhavgarh
  // Day 4   (Departure):  Full loop back to Nagpur
  if (dayIndex <= 1) return routeCoords.slice(0, 2);
  if (dayIndex === 2) return routeCoords.slice(0, 3);
  if (dayIndex === 3) return routeCoords.slice(0, 4);
  return routeCoords; // full loop
}

const DEBUG_ALIGNMENT = false; // Toggle for WebGL alignment debugging

export default function SafariMap({ activeDay = 0, isMini = false }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [mapboxLoaded, setMapboxLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const prevDayRef = useRef(activeDay);

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  // ── Initialize Mapbox ─────────────────────────────────────────────
  useEffect(() => {
    if (useFallback) return;

    let mapboxgl;

    import("mapbox-gl")
      .then((module) => {
        mapboxgl = module.default;

        if (!mapboxgl.supported()) {
          setUseFallback(true);
          return;
        }

        mapboxgl.accessToken = mapboxToken;

        try {
          const initCoords = getCoords(destinations[0]);

          const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/light-v11",
            center: initCoords,
            zoom: destinations[0].zoom,
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

          mapRef.current = map;

          map.on("load", () => {
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
            // Use `anchor: 'center'` so the dot sits exactly on the
            // coordinate, matching the route line intersection.
            markerKeys.forEach((key) => {
              const loc = LOCATIONS[key];
              
              // 0x0 precise anchor container
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

            // ── Debug Alignment Layers ─────────────────────────────────
            if (DEBUG_ALIGNMENT) {
              map.addSource("debug-points", {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: routeCoords.map((coord) => ({
                    type: "Feature",
                    properties: {},
                    geometry: { type: "Point", coordinates: coord },
                  })),
                },
              });

              // Tiny red circle exactly at the coordinate
              map.addLayer({
                id: "debug-circle",
                type: "circle",
                source: "debug-points",
                paint: {
                  "circle-radius": 2,
                  "circle-color": "#FF0000",
                },
              });
            }

            setMapboxLoaded(true);
          });

          map.on("error", () => setUseFallback(true));
        } catch {
          setUseFallback(true);
        }
      })
      .catch(() => setUseFallback(true));

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [useFallback, mapboxToken]);

  // ── Cinematic camera + route reveal on activeDay change ───────────
  useEffect(() => {
    if (!mapboxLoaded || !mapRef.current || useFallback) return;

    const map = mapRef.current;
    const dest = destinations[activeDay] || destinations[0];
    const destCoords = getCoords(dest);
    const prevDay = prevDayRef.current;
    const prevDest = destinations[prevDay] || destinations[0];
    const prevCoords = getCoords(prevDest);
    prevDayRef.current = activeDay;

    // 1. Update active marker highlights
    markerKeys.forEach((key) => {
      const el = document.getElementById(`marker-${key}`);
      if (el) el.classList.toggle("active", key === dest.locationKey);
    });

    // 2. Update revealed route trace
    const revealedCoords = getRevealedRoute(activeDay);
    const activeSource = map.getSource("route-active");
    if (activeSource) {
      activeSource.setData({
        type: "Feature",
        properties: {},
        geometry: { type: "LineString", coordinates: revealedCoords }
      });
    }

    // 3. Cinematic camera movement
    const isSameLocation = prevDest.locationKey === dest.locationKey;

    if (isSameLocation) {
      // Same place (Day 1→2): gentle zoom adjust
      map.flyTo({
        center: destCoords,
        zoom: dest.zoom,
        essential: true,
        duration: 1800,
        pitch: 0,
        bearing: 0
      });
    } else {
      // Different location: zoom out → fly → zoom in
      const midLng = (prevCoords[0] + destCoords[0]) / 2;
      const midLat = (prevCoords[1] + destCoords[1]) / 2;

      // Phase 1: Zoom out to see both locations
      map.flyTo({
        center: [midLng, midLat],
        zoom: 7.8,
        essential: true,
        duration: 1500,
        pitch: 0,
        bearing: 0
      });

      // Phase 2: Fly into exact destination
      setTimeout(() => {
        if (!mapRef.current) return;
        map.flyTo({
          center: destCoords,
          zoom: dest.zoom,
          essential: true,
          duration: 2500,
          pitch: 0,
          bearing: 0
        });
      }, 1600);
    }
  }, [activeDay, mapboxLoaded, useFallback]);

  // ── SVG Fallback ──────────────────────────────────────────────────
  if (useFallback) {
    const dest = destinations[activeDay] || destinations[0];

    const svgWidth = 800;
    const svgHeight = 600;

    // Map real-world coords → SVG pixel space for visual accuracy
    // Longitude range: 79.04 → 80.96 (≈1.92°)
    // Latitude range:  21.09 → 23.69 (≈2.60°)
    const LNG_MIN = 78.8, LNG_MAX = 81.2;
    const LAT_MIN = 20.8, LAT_MAX = 24.0;

    function toSvg(coords) {
      const x = ((coords[0] - LNG_MIN) / (LNG_MAX - LNG_MIN)) * svgWidth;
      const y = ((LAT_MAX - coords[1]) / (LAT_MAX - LAT_MIN)) * svgHeight; // flip Y
      return { x, y };
    }

    const svgMarkers = markerKeys.map((key) => ({
      ...LOCATIONS[key],
      id: key,
      ...toSvg(LOCATIONS[key].coords)
    }));

    const svgRoute = routeCoords.map(toSvg);
    const svgRevealed = getRevealedRoute(activeDay).map(toSvg);

    const fullPathD = svgRoute.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    const revealedPathD = svgRevealed.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");

    const currentSvg = toSvg(getCoords(dest));
    const zoomFactor = 2.2;
    const vWidth = svgWidth / zoomFactor;
    const vHeight = svgHeight / zoomFactor;
    const vX = currentSvg.x - vWidth / 2;
    const vY = currentSvg.y - vHeight / 2;

    return (
      <div className="safari-vector-map" aria-label="Interactive wilderness map">
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
          <path className="safari-vector-contour" d="M 20,480 Q 150,550 300,520 T 550,580 T 790,550" />

          {/* Park boundary indicators */}
          {svgMarkers.filter(m => m.id !== "nagpur").map((m) => (
            <g key={`boundary-${m.id}`}>
              <circle cx={m.x} cy={m.y} r="55" className="safari-vector-boundary" />
              <text
                x={m.x - 30}
                y={m.y - 62}
                fill="rgba(45, 74, 62, 0.25)"
                fontSize="8"
                fontFamily="var(--font-sans)"
                fontWeight="600"
                letterSpacing="0.08em"
              >
                {m.name.toUpperCase()} RESERVE
              </text>
            </g>
          ))}

          {/* Full route (faint) — coordinates match markers exactly */}
          <path d={fullPathD} className="safari-vector-path-under" />

          {/* Revealed active route (bold) — same coordinate source */}
          <motion.path
            key={`revealed-${activeDay}`}
            d={revealedPathD}
            className="safari-vector-path-active"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Location markers — positioned from same toSvg() transform */}
          {svgMarkers.map((m) => {
            const isActive = m.id === dest.locationKey;
            return (
              <g key={m.id}>
                {isActive && (
                  <circle cx={m.x} cy={m.y} r="12" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                    <animate attributeName="r" values="6;18;6" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;0;0.7" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle
                  cx={m.x}
                  cy={m.y}
                  r={isActive ? "6" : "4"}
                  fill={isActive ? "var(--gold)" : "var(--charcoal)"}
                  stroke="var(--ivory)"
                  strokeWidth="1.5"
                />
                <text
                  x={m.x + 12}
                  y={m.y + 4}
                  fill="var(--charcoal)"
                  fontSize="10"
                  fontWeight={isActive ? "700" : "500"}
                  fontFamily="var(--font-sans)"
                  letterSpacing="0.04em"
                >
                  {m.name}
                </text>
              </g>
            );
          })}
        </motion.svg>

        {/* Gradient vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(circle at 50% 50%, transparent 65%, rgba(247,243,238,0.25) 100%)"
        }} />

        {/* Info overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            className="absolute bottom-4 left-4 right-4 bg-ivory/95 backdrop-blur-md border border-gold/25 p-4 rounded text-charcoal z-10 shadow-md"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-gold text-xs font-bold uppercase tracking-wider block mb-1">
              {dest.name}
            </span>
            <h4 className="font-serif text-base mb-1 text-charcoal">{dest.title}</h4>
            <p className="text-charcoal-light text-xs font-light leading-relaxed">
              {dest.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // ── Mapbox live render ────────────────────────────────────────────
  const activeDest = destinations[activeDay] || destinations[0];

  return (
    <div className="safari-mapbox-container">
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />

      <link
        href="https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css"
        rel="stylesheet"
        precedence="default"
      />

      {/* Dynamic info overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay}
          className="absolute bottom-4 left-4 right-4 bg-ivory/95 backdrop-blur-md border border-gold/25 p-4 rounded text-charcoal z-10 shadow-md"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-gold text-xs font-bold uppercase tracking-wider block mb-1">
            {activeDest.name}
          </span>
          <h4 className="font-serif text-base mb-1 text-charcoal">{activeDest.title}</h4>
          <p className="text-charcoal-light text-xs font-light leading-relaxed">
            {activeDest.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

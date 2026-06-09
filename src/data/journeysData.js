// Coordinate registry for all cities and stops in India and Nepal
export const LOCATIONS = {
  delhi: { name: "Delhi", coords: [77.2090, 28.6139] },
  agra: { name: "Agra", coords: [78.0081, 27.1767] },
  jaipur: { name: "Jaipur", coords: [75.7873, 26.9124] },
  kathmandu: { name: "Kathmandu", coords: [85.3240, 27.7172] },
  chitwan: { name: "Chitwan", coords: [84.4284, 27.5317] },
  pokhara: { name: "Pokhara", coords: [83.9856, 28.2096] },
  jodhpur: { name: "Jodhpur", coords: [73.0243, 26.2389] },
  nimaj: { name: "Nimaj", coords: [74.0768, 26.3023] },
  jhansi: { name: "Jhansi", coords: [78.5685, 25.4484] },
  khajuraho: { name: "Khajuraho", coords: [79.9199, 24.8318] },
  varanasi: { name: "Varanasi", coords: [82.9739, 25.3176] },
  chennai: { name: "Chennai", coords: [80.2707, 13.0827] },
  mahabalipuram: { name: "Mahabalipuram", coords: [80.1724, 12.6269] },
  pondicherry: { name: "Pondicherry", coords: [79.8083, 11.9416] },
  tanjore: { name: "Tanjore", coords: [79.1378, 10.7870] },
  madurai: { name: "Madurai", coords: [78.1198, 9.9252] },
  periyar: { name: "Periyar", coords: [77.1685, 9.6105] },
  kumarakom: { name: "Kumarakom", coords: [76.4312, 9.5936] },
  cochin: { name: "Cochin", coords: [76.2673, 9.9312] },
  kolkata: { name: "Kolkata", coords: [88.3639, 22.5726] },
  mumbai: { name: "Mumbai", coords: [72.8777, 19.0760] },
  amanbagh: { name: "Amanbagh", coords: [76.3533, 27.2796] },
  deogarh: { name: "Deogarh", coords: [73.9056, 25.5342] },
  udaipur: { name: "Udaipur", coords: [73.7125, 24.5854] },
  ahmedabad: { name: "Ahmedabad", coords: [72.5714, 23.0225] },
  vadodara: { name: "Vadodara", coords: [73.1812, 22.3072] },
  rajpipla: { name: "Rajpipla", coords: [73.5042, 21.7876] },
  lucknow: { name: "Lucknow", coords: [80.9462, 26.8467] },
  hyderabad: { name: "Hyderabad", coords: [78.4867, 17.3850] },
  alleppey: { name: "Alleppey", coords: [76.3388, 9.4981] },
  munnar: { name: "Munnar", coords: [77.0595, 10.0889] },
  marari: { name: "Marari Beach", coords: [76.2974, 9.6006] },
  goa: { name: "Goa", coords: [73.8278, 15.2993] },
  ranthambore: { name: "Ranthambore", coords: [76.3700, 25.8696] },
  shahpurabagh: { name: "Shahpura Bagh", coords: [74.9317, 25.6306] },
  jaisalmer: { name: "Jaisalmer", coords: [70.9169, 26.9157] },
  mihirgarh: { name: "Mihir Garh", coords: [73.0617, 26.0719] },
  jawai: { name: "Jawai", coords: [73.1678, 25.1058] },
  pushkar: { name: "Pushkar", coords: [74.5554, 26.4892] },
  amritsar: { name: "Amritsar", coords: [74.8723, 31.6340] },
  kovalam: { name: "Kovalam Beach", coords: [76.9906, 8.4020] }
};

export const JOURNEYS = {
  "golden-triangle-kathmandu": {
    id: "golden-triangle-kathmandu",
    title: "Golden Triangle with Kathmandu",
    subtitle: "A majestic journey across Northern India's imperial capitals & Nepal's sacred valleys.",
    duration: "12 Days / 11 Nights",
    regionsVisited: "Delhi, Agra, Jaipur, Kathmandu Valley",
    accommodations: "Royal Palace Suites & Boutique Mountain Lodges",
    transfer: "Private SUV & Scenic Himalayan Flight",
    heroImage: "/images/kathmandu.jpg",
    ctaBgImage: "/images/kathmandu.jpg",
    markerKeys: ["delhi", "agra", "jaipur", "kathmandu"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.jaipur.coords,
      LOCATIONS.delhi.coords,
      LOCATIONS.kathmandu.coords
    ],
    accommodationsList: [
      {
        title: "The Imperial Delhi",
        desc: "An iconic 1930s colonial masterpiece blending Victorian charm with classical art deco architecture.",
        image: "/images/the-imperial-newdelhi.webp"
      },
      {
        title: "The Oberoi Amarvilas",
        desc: "Positioned just 600 meters from the Taj Mahal, featuring direct monument views from every room.",
        image: "/images/The Oberoi Amarvilas.jpg"
      },
      {
        title: "Rambagh Palace Jaipur",
        desc: "The former residence of the Maharaja of Jaipur, featuring opulent gardens and historic royal suites.",
        image: "/images/Rambagh-Palace-jaipur.jpg"
      },
      {
        title: "Dwarika's Hotel Kathmandu",
        desc: "A stunning sanctuary designed around local heritage preservation, housing an exquisite collection of medieval woodcarvings.",
        image: "/images/Dwarika's Hotel Kathmandu.jpeg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrival & Welcome",
        title: "Imperial Beginnings",
        narrative: "Arrive at New Delhi's international airport, where you are received with private VIP tarmac assistance and chauffeured to your legendary heritage hotel. Settle into the timeless grandeur of the capital.",
        details: {
          accommodation: "The Imperial Delhi (Grand Heritage Suite)",
          experiences: "Private welcome orientation, botanical gardens walking tour",
          dining: "Bespoke dinner at Spice Route",
          transport: "Private luxury sedan transfer"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "The Imperial New Delhi" }],
        expertNote: "Delhi is a layered palimpsest of seven historic cities. Take the first day to adjust to the vibrant pace of Northern India.",
        highlights: ["VIP Airport Service", "Lutyens Architecture", "Fireside Lounge Briefing"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Old & New Delhi Tour",
        title: "Chronicles of Empires",
        narrative: "Explore the dramatic contrasts between the walled city of Old Delhi and the imperial avenues of New Delhi. Wind through Chandni Chowk's lanes by private rickshaw and stand before the majestic Humayun's Tomb.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Curated history walk in Old Delhi, private museum access",
          dining: "Royal Mughlai lunch, contemporary Indian tasting menu",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Historic architecture and Mughal monuments of Old Delhi.jpg", caption: "Historic architecture and Mughal monuments of Old Delhi" }],
        expertNote: "Humayun's Tomb is the precursor to the Taj Mahal. Notice the transition from red sandstone to white marble domes.",
        highlights: ["Jama Masjid", "Chandni Chowk Rickshaw", "Humayun's Tomb"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi Art & Sufism",
        title: "Mystic Chords & Art Galleries",
        narrative: "Dive into Delhi's rich contemporary art scene in the morning, visiting private galleries. In the evening, witness the soul-stirring live Qawwali music performance at the Nizamuddin Dargah shrine.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Private gallery viewing, evening Sufi devotional tour",
          dining: "Gourmet street-food inspired lunch, private estate dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Nizamuddin Dargah shrine.jpeg", caption: "Qawwali music performance at the Nizamuddin Dargah shrine" }],
        expertNote: "Qawwali music has been performed at Nizamuddin for over 700 years. The spiritual energy is palpable.",
        highlights: ["National Gallery of Modern Art", "Nizamuddin Qawwali", "Royal Family Archives"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 4,
        location: "Agra",
        locationKey: "agra",
        meta: "Delhi to Agra Drive",
        title: "The Monument of Love",
        narrative: "Chauffeur-driven to Agra along the Yamuna expressway. Check into your luxury suite featuring uninterrupted views of the Taj Mahal. At sunset, stand before the monument as the marble shifts from white to golden amber.",
        details: {
          accommodation: "The Oberoi Amarvilas (Premier Taj View Suite)",
          experiences: "Private sunset viewing of the Taj Mahal, local artisan marble workshop",
          dining: "Grand Awadhi feast at Esphahan",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/taj-mahal.webp", caption: "The Taj Mahal reflecting the golden hues of sunset" }],
        expertNote: "The Taj Mahal is best viewed at twilight when the crowds disperse and the white Makrana marble begins to glow under the fading sky.",
        highlights: ["Taj Mahal Private Sunset Tour", "Inlaid Marble Workshop", "Luxury Spa Ritual"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 5,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra Heritage Tour",
        title: "Echoes of the Mughal Court",
        narrative: "Visit the massive red sandstone Agra Fort, walking through its royal chambers. In the afternoon, discover the delicate marble carvings of the Tomb of Itmad-ud-Daulah, affectionately known as the 'Baby Taj'.",
        details: {
          accommodation: "The Oberoi Amarvilas",
          experiences: "Guided Agra Fort tour, private heritage walk",
          dining: "Fine Mughlai dining, traditional tea service",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/agra-fort.jpeg", caption: "The sandstone gates of the magnificent Agra Fort" }],
        expertNote: "Look out from the fort's Jasmine Tower—this is where Emperor Shah Jahan was imprisoned by his son, staring at the Taj Mahal.",
        highlights: ["Agra Fort", "Tomb of Itmad-ud-Daulah", "Mughal Garden High Tea"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 6,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Agra to Jaipur via Fatehpur Sikri",
        title: "The Desert Sanctuary",
        narrative: "Drive to the pink city of Jaipur, stopping at the abandoned Mughal capital of Fatehpur Sikri. Enter Rajasthan's royal heartland and check into a breathtaking palace hotel surrounded by peacocks.",
        details: {
          accommodation: "Rambagh Palace (Historical Suite)",
          experiences: "Fatehpur Sikri tour, palace royal welcome",
          dining: "Traditional Rajasthani Thali in a gilded courtyard",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Rambagh-Palace-jaipur.jpg", caption: "Rambagh Palace - the jewel of Jaipur's royal heritage" }],
        expertNote: "Fatehpur Sikri was abandoned due to water scarcity, leaving its palaces preserved like a ghost city frozen in time.",
        highlights: ["Fatehpur Sikri", "Buland Darwaza", "Royal Palace Welcome"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 7,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Heritage Tour",
        title: "Fortresses of Gold & Coral",
        narrative: "Ascend the hillside Amber Fort by private open jeep. In the afternoon, explore the City Palace and marvel at the intricate pink sandstone facade of the Hawa Mahal (Palace of Winds).",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Amber Fort private tour, exclusive City Palace archives access",
          dining: "Lunch at Baradari, cocktails at the Polo Bar",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/city-palace-jaipur.webp", caption: "Jaipur City Palace" }],
        expertNote: "Our guests get exclusive access to the royal family's private chambers (Chandra Mahal) which are normally closed to the public.",
        highlights: ["Amber Fort Private Access", "Hawa Mahal", "City Palace Chandra Mahal"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 8,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Craft & Culture",
        title: "The Color Guilds",
        narrative: "Spend the day with master block-printers, gem-cutters, and miniature painters. Discover how the city's ancient design guilds continue to influence contemporary luxury fashion and jewellery.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Private block-printing workshop, gem-market curation walk",
          dining: "Private estate garden lunch, royal banqueting hall dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Miniature painting workshops of Jaipur.webp", caption: "Traditional hand-block printing artisans of Jaipur" }],
        expertNote: "Jaipur is the gemstone capital of the world. We can arrange a private consultation with a leading heritage jeweller.",
        highlights: ["Block Printing Workshop", "Private Gem Collection Tour", "Royal Falconry Session"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 9,
        location: "Kathmandu",
        locationKey: "kathmandu",
        meta: "Flight to Nepal",
        title: "Into the Mountain Kingdom",
        narrative: "Fly from Delhi to Kathmandu, Nepal. As you land in the valley, the snowy peaks of the Himalayas welcome you. Check into a beautiful heritage hotel built in traditional Newari style.",
        details: {
          accommodation: "Dwarika's Hotel Kathmandu (Heritage Junior Suite)",
          experiences: "Scenic mountain flight transfer, traditional Newari welcome",
          dining: "Multi-course Nepalese feast at Krishnarpan",
          transport: "Private luxury SUV transfers & flight"
        },
        images: [{ url: "/images/himalayan_monastery_1776272544257.png", caption: "Kathmandu Valley nestled beneath the Himalayan peaks" }],
        expertNote: "Dwarika's is a living museum. The hotel has rescued thousands of antique woodcarvings to construct its magnificent buildings.",
        highlights: ["Himalayan Flight Views", "Traditional Newari Dinner", "Heritage Courtyard Music"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "kathmandu"]
      },
      {
        day: 10,
        location: "Kathmandu",
        locationKey: "kathmandu",
        meta: "Kathmandu Valley Tour",
        title: "Stupas & Sacred Waters",
        narrative: "Visit the ancient Buddhist stupa of Swayambhunath (Monkey Temple) looking over the valley. Later, walk through the sacred Hindu temple complex of Pashupatinath along the Bagmati River.",
        details: {
          accommodation: "Dwarika's Hotel Kathmandu",
          experiences: "Guided stupa walk, private blessing ceremony at Pashupatinath",
          dining: "Himalayan organic lunch, private garden dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/bagmati river ghats.jpg", caption: "Bagmati river ghats and sacred shrines in Kathmandu" }],
        expertNote: "Swayambhunath is one of the oldest religious sites in Nepal. The climb has 365 stone steps, but the view is magnificent.",
        highlights: ["Swayambhunath Stupa", "Pashupatinath Temple", "Monk Blessings"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "kathmandu"]
      },
      {
        day: 11,
        location: "Kathmandu",
        locationKey: "kathmandu",
        meta: "Bhaktapur & Patan Durbar Squares",
        title: "The Golden Cities",
        narrative: "Explore the medieval kingdoms of Bhaktapur and Patan, filled with red-brick palace squares and golden temple roofs. Meet woodcarvers and bronze-smiths in their traditional workshops.",
        details: {
          accommodation: "Dwarika's Hotel Kathmandu",
          experiences: "Bhaktapur architectural walk, Patan museum tour",
          dining: "Traditional Newari lunch, farewell garden dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/patan palace museum.jpg", caption: "Patan Palace Museum" }],
        expertNote: "Bhaktapur Durbar Square is famous for the 55-window palace and the Golden Gate, masterpieces of medieval metal and wood craft.",
        highlights: ["Bhaktapur Durbar Square", "Patan Museum Tour", "Artisan Workshops"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "kathmandu"]
      },
      {
        day: 12,
        location: "Kathmandu",
        locationKey: "kathmandu",
        meta: "Kathmandu Depart",
        title: "Farewell to the Heights",
        narrative: "Enjoy a final peaceful breakfast overlooking the hotel gardens. Transfer to Kathmandu International Airport for your return flight home, taking in a last view of the snowy Himalayan range.",
        details: {
          accommodation: "Lounge Access",
          experiences: "Airport departure transfer",
          dining: "Himalayan tea breakfast",
          transport: "Private luxury SUV transfer"
        },
        images: [{ url: "/images/journeys_hero_1776334755097.png", caption: "Departure flight out of Kathmandu Valley" }],
        expertNote: "Try to sit on the right side of the aircraft during your departure flight for the best aerial views of Mount Everest.",
        highlights: ["VIP Departure Lounge", "Himalayan Peak Vistas"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "kathmandu"]
      }
    ]
  },
  "palace-on-wheels": {
    id: "palace-on-wheels",
    title: "Palace on Wheels / Train",
    subtitle: "A legendary heritage rail odyssey through royal Rajasthan, extended into Nepal's wild sanctuaries.",
    duration: "16 Days / 15 Nights",
    regionsVisited: "Delhi, Agra, Jaipur, Chitwan National Park, Pokhara, Kathmandu",
    accommodations: "Private Palace Cabin & Luxury Safari Tents",
    transfer: "Vintage Luxury Train & Private SUV",
    heroImage: "/images/pokhara.jpg",
    ctaBgImage: "/images/pokhara.jpg",
    markerKeys: ["delhi", "agra", "jaipur", "kathmandu", "chitwan", "pokhara"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.jaipur.coords,
      LOCATIONS.delhi.coords,
      LOCATIONS.kathmandu.coords,
      LOCATIONS.chitwan.coords,
      LOCATIONS.pokhara.coords,
      LOCATIONS.kathmandu.coords
    ],
    accommodationsList: [
      {
        title: "The Oberoi Amarvilas, Agra",
        desc: "An exquisite luxury hotel standing just 600 meters from the Taj Mahal, offering uninterrupted views of the monument from every room.",
        image: "/images/The Oberoi Amarvilas.jpg"
      },
      {
        title: "Rambagh Palace, Jaipur",
        desc: "A magnificent heritage palace hotel, once the residence of the Maharaja of Jaipur, featuring sprawling gardens and royal suites.",
        image: "/images/Rambagh-Palace-jaipur.jpg"
      },
      {
        title: "Meghauli Serai (Taj Safari) Chitwan",
        desc: "A luxurious wilderness lodge situated along the Rapti River, featuring custom private plunge pools and scenic views of the grasslands.",
        image: "/images/Meghauli Serai (Taj Safari) Chitwan.jpg"
      },
      {
        title: "Dwarika's Hotel Kathmandu",
        desc: "A magnificent heritage property designed around courtyard architectural restoration and authentic Newari craftsmanship.",
        image: "/images/Dwarika's Hotel Kathmandu.jpeg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrive in Delhi",
        title: "Regal Greeting",
        narrative: "Arrive in Delhi and transfer to your luxury hotel. Prepare for your upcoming rail voyage over an exclusive briefing with our travel curators.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Private welcome orientation, evening gardens walk",
          dining: "Contemporary Indian dining at Varq",
          transport: "Private luxury sedan transfer"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "Chauffeured arrival at your imperial hotel" }],
        expertNote: "Rest well tonight. Tomorrow you will board one of the most famous heritage trains in the world.",
        highlights: ["VIP Airport Service", "Luxury Suite Rest", "Exclusive Curator Session"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi",
        title: "All Aboard the Palace",
        narrative: "Board the legendary Palace on Wheels at Delhi Safdarjung Station. Be welcomed with traditional garlands, music, and a red carpet, before settling into your beautifully appointed wood-panelled cabin.",
        details: {
          accommodation: "Palace on Wheels (Private Cabin Suite)",
          experiences: "Traditional railway welcome, cabin orientation",
          dining: "Royal dinner in the train's dining car",
          transport: "Palace on Wheels Heritage Train"
        },
        images: [{ url: "/images/pow.jpeg", caption: "The classic luxury train Palace on Wheels" }],
        expertNote: "The train replicates the personal carriages of the former Maharajas. Fall asleep to the rhythmic clack of the rails.",
        highlights: ["Red Carpet Welcome", "Vintage Wood Cabins", "Royal Dining Car"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi",
        title: "Imperial Capital Treasures",
        narrative: "Spend the day exploring the historical treasures of Delhi, from Qutub Minar to the grand colonial architecture of Lutyens. Return to the train in the evening as it rolls towards the monument of love.",
        details: {
          accommodation: "Palace on Wheels",
          experiences: "Private guided historical monuments tour",
          dining: "Imperial Indian lunch, contemporary tasting dinner",
          transport: "Palace on Wheels & private SUV"
        },
        images: [{ url: "/images/qutub minar.webp", caption: "Qutub Minar - India's tallest brick minaret" }],
        expertNote: "Qutub Minar was built in 1192 and is a magnificent example of early Indo-Islamic architecture.",
        highlights: ["Qutub Minar", "Lutyens Delhi", "Private Curator Escort"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 4,
        location: "Agra",
        locationKey: "agra",
        meta: "Delhi - Agra",
        title: "To the Land of the Taj",
        narrative: "The Palace on Wheels journeys south to Agra. Arrive in the city of the Mughals, and check into your luxurious suite overlooking the monument of love.",
        details: {
          accommodation: "The Oberoi Amarvilas (Premier Taj View Room)",
          experiences: "VIP monument entry, sunset garden walk",
          dining: "Mughal tasting menu",
          transport: "Palace on Wheels & private SUV"
        },
        images: [{ url: "/images/The Oberoi Amarvilas.jpg", caption: "Sunrise over the Taj Mahal from your private balcony" }],
        expertNote: "Stand on your balcony at sunset and watch the marble of the Taj Mahal change color with the dying light.",
        highlights: ["Oberoi Amarvilas Stay", "Taj Sunset View", "Mughal Gastronomy"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 5,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra",
        title: "Tomb of the Sovereign",
        narrative: "Explore the Agra Fort, and visit the Taj Mahal at dawn. Settle back in your luxury chambers or enjoy a traditional Ayurvedic spa treatment.",
        details: {
          accommodation: "The Oberoi Amarvilas",
          experiences: "Dawn Taj Mahal tour, Agra Fort private walk",
          dining: "Fine international dining",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/taj-mahal.webp", caption: "The Taj Mahal reflecting in the pristine fountains" }],
        expertNote: "Visiting at sunrise avoids the midday crowds and offers the softest, most beautiful photography light.",
        highlights: ["Taj Sunrise Tour", "Agra Fort Guided Walk", "Bespoke Wellness Spa"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 6,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Agra - Jaipur",
        title: "The Royal Rail Transit",
        narrative: "Travel from Agra into the royal state of Rajasthan. Arrive in Jaipur and check into your majestic heritage palace hotel.",
        details: {
          accommodation: "Rambagh Palace Jaipur (Historical Suite)",
          experiences: "Palace heritage walk, royal greeting",
          dining: "Traditional Rajasthani thali at Suvarna Mahal",
          transport: "Palace on Wheels & private SUV"
        },
        images: [{ url: "/images/Rambagh-Palace-jaipur.jpg", caption: "The grand facade of Rambagh Palace" }],
        expertNote: "Suvarna Mahal is housed in the former palace ballroom, serving royal recipes under grand crystal chandeliers.",
        highlights: ["Rambagh Palace Rest", "Royal Ballroom Dining", "Rajasthani Welcoming Ceremony"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 7,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur",
        title: "The Pink City by Rail",
        narrative: "Awake in Jaipur. Discover the Hawa Mahal, the astronomy observatory Jantar Mantar, and the magnificent City Palace. Return to the palace gardens for a twilight high tea.",
        details: {
          accommodation: "Rambagh Palace Jaipur",
          experiences: "City Palace private walk, Jantar Mantar astronomy tour",
          dining: "Rajasthani palace lunch, fine dining dinner",
          transport: "Private explorer SUV"
        },
        images: [{ url: "/images/palace.jpg", caption: "Exploring the royal chambers of Jaipur" }],
        expertNote: "Jantar Mantar features the world's largest stone sundial. It was built by Maharaja Sawai Jai Singh II in 1734.",
        highlights: ["City Palace Walk", "Jantar Mantar Sundial", "Palace Twilight Tea"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 8,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur",
        title: "Citadels of Amber",
        narrative: "Visit the massive Amber Fort, climbing the ramparts to explore the Sheesh Mahal (Mirror Palace). In the afternoon, explore Jaipur's vibrant local gemstone markets.",
        details: {
          accommodation: "Rambagh Palace Jaipur",
          experiences: "Amber Fort private walk, gemstone market tour",
          dining: "Heritage property lunch, palace dining",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/amber-fort.jpg", caption: "Amber Fort overlooking Maota Lake" }],
        expertNote: "The Sheesh Mahal is inlaid with thousands of concave convex mirrors that glow under a single candle flame.",
        highlights: ["Amber Fort Mirrors", "Vibrant Gemstone Markets", "Palace Spa Retreat"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 9,
        location: "Kathmandu",
        locationKey: "kathmandu",
        meta: "Jaipur - Delhi - Kathmandu",
        title: "Himalayan Transition",
        narrative: "Disembark the train in Delhi and fly directly to Kathmandu, Nepal. Arrive in the beautiful Himalayan capital and check into your luxurious mountain retreat.",
        details: {
          accommodation: "Dwarika's Hotel Kathmandu (Heritage Suite)",
          experiences: "VIP airport flight transfer, private guide reception",
          dining: "Nepalese fusion dining",
          transport: "Private SUV & international flight"
        },
        images: [{ url: "/images/himalayan_monastery_1776272544257.png", caption: "Flying into the Kathmandu Valley" }],
        expertNote: "Take a deep breath and feel the cooler, thinner air of the Himalayan mountains as you leave the plains of India behind.",
        highlights: ["Train Disembarkation", "Himalayan flight transition", "Newari Heritage Stay"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "kathmandu"]
      },
      {
        day: 10,
        location: "Kathmandu",
        locationKey: "kathmandu",
        meta: "Kathmandu",
        title: "Valleys of the Gods",
        narrative: "Explore the ancient stupas and temples of Kathmandu Valley, visiting Swayambhunath and the historic Patan Durbar Square.",
        details: {
          accommodation: "Dwarika's Hotel Kathmandu",
          experiences: "Private Newari heritage walk, temple art walk",
          dining: "Traditional Newari lunch, fireside dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/patan durbar square.webp", caption: "Ornate temples and stupas in Patan Durbar Square" }],
        expertNote: "Patan is renowned for its fine metalwork. You will see artisans hammering copper and bronze in narrow streets.",
        highlights: ["Patan Durbar Square", "Swayambhunath", "Ancient Newari Craft"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "kathmandu"]
      },
      {
        day: 11,
        location: "Chitwan",
        locationKey: "chitwan",
        meta: "Kathmandu - Chitwan",
        title: "Into the Jungle Canopy",
        narrative: "Drive down to Chitwan National Park in the fertile plains of Southern Nepal. Check into your luxury river lodge and listen to the birds of the Rapti River.",
        details: {
          accommodation: "Meghauli Serai - Taj Safari (Rapti Villa with plunge pool)",
          experiences: "Scenic mountain drive, twilight river cruise",
          dining: "Organic farm-to-table lunch, bush dinner under lanterns",
          transport: "Private air-conditioned SUV"
        },
        images: [{ url: "/images/rapti river.jpg", caption: "Meghauli Serai on the banks of Rapti River" }],
        expertNote: "Chitwan is a subtropical forest. The climate is warm and humid, home to the Greater One-horned Rhinoceros.",
        highlights: ["Scenic Foothill Drive", "River Cruise Sunset", "Safari Lodge Arrival"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "kathmandu", "chitwan"]
      },
      {
        day: 12,
        location: "Chitwan",
        locationKey: "chitwan",
        meta: "Chitwan",
        title: "Realm of the One-Horned Rhino",
        narrative: "Embark on dawn and afternoon safaris by 4x4 and silent river boat. Track the rare One-horned Rhino, wild elephants, and if lucky, the elusive Bengal Tiger.",
        details: {
          accommodation: "Meghauli Serai - Taj Safari",
          experiences: "4x4 jungle safari, bird watching river cruise",
          dining: "Jungle breakfast picnic, gourmet local lunch",
          transport: "Safari open 4x4 jeep & wooden canoe"
        },
        images: [{ url: "/images/Rhino-chitwan.jpg", caption: "A Greater One-horned Rhinoceros in the tall grasslands of Chitwan" }],
        expertNote: "Chitwan has successfully conserved the rhino. Look closely in the marshy wetlands for their prehistoric profiles.",
        highlights: ["Rhino Tracking Safari", "Grassland Rickshaw Tour", "Gharial Crocodile Spotting"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "kathmandu", "chitwan"]
      },
      {
        day: 13,
        location: "Pokhara",
        locationKey: "pokhara",
        meta: "Chitwan - Pokhara",
        title: "The Lake Under the Peak",
        narrative: "Drive to Pokhara, Nepal's peaceful lake valley. Nestled under the massive Annapurna range, the reflection of Machapuchare (Fishtail Peak) on Fewa Lake is unforgettable.",
        details: {
          accommodation: "Pavilions Himalayas (Luxury Mountain Villa)",
          experiences: "Mountain foothill drive, lake private boat cruise",
          dining: "Fresh organic lake-view dinner",
          transport: "Private luxury SUV & boat"
        },
        images: [{ url: "/images/fewa lake-pokhara.webp", caption: "Fewa Lake reflecting the snowy peaks of Pokhara" }],
        expertNote: "Pokhara is much lower in elevation than Kathmandu. The subtropical climate is filled with banana trees and orchids.",
        highlights: ["Fewa Lake Boat Cruise", "Annapurna Reflection Views", "Boutique Mountain Stay"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "kathmandu", "chitwan", "pokhara"]
      },
      {
        day: 14,
        location: "Pokhara",
        locationKey: "pokhara",
        meta: "Pokhara",
        title: "Himalayan Sunrise",
        narrative: "Rise at dawn to view the sun rising over the Annapurna range from Sarangkot hill. Spend the day exploring caves, gorges, and peaceful Buddhist stupas.",
        details: {
          accommodation: "Pavilions Himalayas",
          experiences: "Sarangkot sunrise view, Peace Stupa pilgrimage, Davi's Falls walk",
          dining: "Mountain lodge lunch, private chef's dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/sunrise-over-annapurna-mountain-range.jpeg", caption: "Sunrise over the Annapurna Mountain range" }],
        expertNote: "Sarangkot offers one of the closest and clearest views of mountains exceeding 8,000 meters in height.",
        highlights: ["Sarangkot Sunrise", "World Peace Pagoda", "Davi's Falls Cave"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "kathmandu", "chitwan", "pokhara"]
      },
      {
        day: 15,
        location: "Kathmandu",
        locationKey: "kathmandu",
        meta: "Pokhara - Kathmandu",
        title: "Return to the Valley",
        narrative: "Drive back to Kathmandu (or choose a short scenic flight). Settle back into Dwarika's and enjoy a traditional Nepalese farewell dinner.",
        details: {
          accommodation: "Dwarika's Hotel Kathmandu",
          experiences: "Scenic return drive, afternoon leisure & shopping",
          dining: "Nepalese fine dining farewell dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/dwarikas_elisehassey.jpg", caption: "Traditional woodcarvings and courtyards of Dwarika's" }],
        expertNote: "Use this final afternoon to shop for traditional Thangka paintings or fine pashmina shawls in Patan.",
        highlights: ["Scenic Highway Return", "Traditional Farewell Ceremony"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "kathmandu", "chitwan", "pokhara", "kathmandu"]
      },
      {
        day: 16,
        location: "Kathmandu",
        locationKey: "kathmandu",
        meta: "Kathmandu - Depart",
        title: "Himalayan Departure",
        narrative: "Transfer to Kathmandu International Airport for your departure flight, carrying the memories of Rajasthan's palaces and Nepal's mountain sanctuaries.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport transfer",
          dining: "Lodge breakfast",
          transport: "Private luxury SUV transfer"
        },
        images: [{ url: "/images/MountEverestScenic.jpg", caption: "Departing Kathmandu Valley" }],
        expertNote: "Check in early to secure a seat on the left side of the aircraft for views of the Everest range on your flight out.",
        highlights: ["VIP Airport Exit", "Everest Range Views"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "kathmandu", "chitwan", "pokhara", "kathmandu"]
      }
    ]
  },
  "maharaja-express": {
    id: "maharaja-express",
    title: "Maharaja Express / Train",
    subtitle: "A majestic rail passage across Northern & Central India's royal capitals in peerless luxury.",
    duration: "15 Days / 14 Nights",
    regionsVisited: "Delhi, Jodhpur, Nimaj Oasis, Jaipur, Agra, Khajuraho, Varanasi",
    accommodations: "Maharajas' Express Presidential Suite & Oasis Tents",
    transfer: "Elite Luxury Train & Private SUV",
    heroImage: "/images/mehrangarh-fort-jodhpur.jpeg",
    ctaBgImage: "/images/final_cta_bg.png",
    markerKeys: ["delhi", "jodhpur", "nimaj", "jaipur", "agra", "khajuraho", "varanasi"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.jodhpur.coords,
      LOCATIONS.nimaj.coords,
      LOCATIONS.jaipur.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.khajuraho.coords,
      LOCATIONS.varanasi.coords,
      LOCATIONS.delhi.coords
    ],
    accommodationsList: [
      {
        title: "The Imperial New Delhi",
        desc: "Magnificent presidential suites with classic wood paneling and gilded bathrooms, capturing the romance of royal train travel.",
        image: "/images/the-imperial-newdelhi.webp"
      },
      {
        title: "Umaid Bhawan Palace Jodhpur",
        desc: "Exclusive waterfront canvas suites raised on a historic dam, overlooking a peaceful lake alive with bird sanctuaries.",
        image: "/images/Umaid Bhawan Palace Jodhpur.webp"
      },
      {
        title: "Brijnest, Jaipur",
        desc: "A legendary landmark combining classic sandstone facades, rich Mughal art collections, and impeccable luxury services.",
        image: "/images/Brijnest, Jaipur.jpeg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrival & Transfer",
        title: "The Capital Welcome",
        narrative: "Arrive in Delhi and transfer to your luxury suite. Settle into the royal pace over a private welcome orientation.",
        details: {
          accommodation: "The Imperial New Delhi",
          experiences: "Private welcome orientation, evening gardens walk",
          dining: "Bespoke welcome dinner",
          transport: "Private SUV transfer"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "Arriving at the magnificent The Imperial New Delhi" }],
        expertNote: "Adjust to the local climate and time. Your rail journey begins in two days.",
        highlights: ["VIP Airport Service", "Luxury Suite Rest"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi Exploration",
        title: "Capital Heritage",
        narrative: "Spend the day exploring the historical treasures of Delhi, from Qutub Minar to the grand colonial architecture of Lutyens.",
        details: {
          accommodation: "The Imperial New Delhi",
          experiences: "Private guided historical monuments tour",
          dining: "Imperial Indian lunch, contemporary tasting dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/qutub minar.webp", caption: "Qutub Minar - India's tallest brick minaret" }],
        expertNote: "Qutub Minar was built in 1192 and is a magnificent example of early Indo-Islamic architecture.",
        highlights: ["Qutub Minar", "Lutyens Delhi", "Private Curator Escort"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Board Maharajas' Express",
        title: "The Golden Chariot",
        narrative: "Board the Maharajas' Express at Safdarjung Station. Be welcomed like a royal sovereign and check into your sprawling cabin suite as the train pulls away.",
        details: {
          accommodation: "Maharajas' Express Train (Deluxe Cabin Suite)",
          experiences: "Royal railway welcome, red carpet boarding",
          dining: "Gourmet dinner in Rang Mahal restaurant car",
          transport: "Maharajas' Express Luxury Train"
        },
        images: [{ url: "/images/maharaja express.jpeg" }],
        expertNote: "This train has been repeatedly voted the world's leading luxury train. Enjoy the bespoke bar cart tonight.",
        highlights: ["Red Carpet Reception", "Luxury Train Suites", "Rang Mahal Dining"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 4,
        location: "Jodhpur",
        locationKey: "jodhpur",
        meta: "Jodhpur City Tour",
        title: "Citadels of the Blue City",
        narrative: "Arrive in the Blue City of Jodhpur. Explore Mehrangarh Fort towering above the houses, and enjoy private cocktails with members of the royal family.",
        details: {
          accommodation: "Umaid Bhawan Palace Jodhpur",
          experiences: "Mehrangarh Fort private tour, royal cocktail reception",
          dining: "Gourmet train lunch, royal palace dinner",
          transport: "Maharajas' Express & private SUV"
        },
        images: [{ url: "/images/mehrangarh-fort-jodhpur.jpeg", caption: "Mehrangarh Fort looking over Jodhpur" }],
        expertNote: " Mehrangarh Fort's walls are 36 meters high and 21 meters wide. It was never taken by siege.",
        highlights: ["Mehrangarh Fort Private Tour", "Royal Family Cocktails", "Blue City Walk"],
        revealedRouteKeys: ["delhi", "jodhpur"]
      },
      {
        day: 5,
        location: "Nimaj",
        locationKey: "nimaj",
        meta: "Drive to Nimaj Oasis",
        title: "Desert Peace & Sandstone Camps",
        narrative: "Disembark for a private detour into the rural sanctuary of Nimaj. Check into your custom luxury canvas camp positioned by a peaceful lake.",
        details: {
          accommodation: "Raas Chhatra Sagar Nimaj Pali",
          experiences: "Jungle flora jeep safari, twilight boat ride",
          dining: "Farm-to-table lunch, traditional fireside cooking",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/desert_camp_night_1776272499120.png", caption: "Luxury waterfront tents at Chhatra Sagar" }],
        expertNote: "Chhatra Sagar is a private dam built in the 1890s. The birdlife here is spectacular.",
        highlights: ["Waterfront Tent Stay", "Sunset Lake Boat Ride", "Private Campfire Dining"],
        revealedRouteKeys: ["delhi", "jodhpur", "nimaj"]
      },
      {
        day: 6,
        location: "Nimaj",
        locationKey: "nimaj",
        meta: "Nimaj Village Walk",
        title: "The Soul of Rural Rajasthan",
        narrative: "Take a quiet morning walk through local farms and villages, meeting weavers and farmers. Settle into the slow rhythm of the desert.",
        details: {
          accommodation: "Chhatra Sagar - RAAS",
          experiences: "Guided village walking tour, organic farm harvest",
          dining: "Fresh organic country lunch, regional dinner",
          transport: "Walking & open jeep"
        },
        images: [{ url: "/images/nimaj-village.jpg", caption: "Meeting local artisans in rural Rajasthan" }],
        expertNote: "This walk shows you the real, unchanged agrarian heart of Rajasthan. The hospitality is genuine and warm.",
        highlights: ["Village Craft Walk", "Waterbird Sanctuary Tour", "Traditional Hookah Session"],
        revealedRouteKeys: ["delhi", "jodhpur", "nimaj"]
      },
      {
        day: 7,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Return to Train & Jaipur",
        title: "Re-boarding for the Pink City",
        narrative: "Drive back to Jodhpur to re-board the train, rolling towards Jaipur. Settle back into your luxury train cabin.",
        details: {
          accommodation: "Maharajas' Express Train",
          experiences: "Scenic countryside rail journey, cabin leisure",
          dining: "Lunch in Mayur Mahal car, dinner aboard",
          transport: "Private SUV & Maharajas' Express"
        },
        images: [{ url: "/images/maharaja express.jpeg", caption: "Boarding the Maharajas' Express train" }],
        expertNote: "Mayur Mahal is decorated with peacock feather motifs and fine mirrors. Sip a classic cocktail as you roll.",
        highlights: ["Countryside Rail Views", "Mayur Mahal Dining"],
        revealedRouteKeys: ["delhi", "jodhpur", "nimaj", "jaipur"]
      },
      {
        day: 8,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Exploration",
        title: "Fortresses & Astronomy",
        narrative: "Explore Jaipur's architectural highlights, including the Amer Fort, City Palace, and the wind facade of Hawa Mahal.",
        details: {
          accommodation: "Brijnest, Jaipur",
          experiences: "Amer Fort tour, City Palace private access",
          dining: "Palace lunch, train dinner",
          transport: "Maharajas' Express & private transport"
        },
        images: [{ url: "/images/amber-fort.jpg", caption: "Sunset over Amber Fort in Jaipur" }],
        expertNote: "Amer Fort is built of yellow and pink sandstone, mixed with white marble. The Sheesh Mahal (Mirror Palace) inside is breathtaking.",
        highlights: ["Amer Fort", "City Palace Chandra Mahal", "Jaipur Bazaars"],
        revealedRouteKeys: ["delhi", "jodhpur", "nimaj", "jaipur"]
      },
      {
        day: 9,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Craft Curation",
        title: "Royal Collection & Artisans",
        narrative: "Discover Jaipur's arts and crafts, meeting leading local textile and jewellery designers. Spend the afternoon at leisure.",
        details: {
          accommodation: "Brijnest, Jaipur",
          experiences: "Private designer studio visits, bazaar gem tour",
          dining: "Artisan villa lunch, train farewell dinner",
          transport: "Private SUV"
        },
        images: [{ url: "/images/Miniature painting workshops of Jaipur.webp", caption: "Miniature painting workshops of Jaipur" }],
        expertNote: "Jaipur is designated a UNESCO Creative City for Crafts and Folk Art. The block-print handiwork is world-famous.",
        highlights: ["Textile Archives", "Jewelry Curation Walk", "Polo Match (Seasonal)"],
        revealedRouteKeys: ["delhi", "jodhpur", "nimaj", "jaipur"]
      },
      {
        day: 10,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra Taj Mahal",
        title: "Sunrise at the Taj Mahal",
        narrative: "Arrive in Agra. Visit the Taj Mahal at sunrise before it opens to the general public. Later, explore the imposing Agra Fort.",
        details: {
          accommodation: "Maharajas' Express Train",
          experiences: "Sunrise Taj Mahal private tour, Agra Fort walk",
          dining: "Champagne breakfast overlooking Taj, train dinner",
          transport: "Maharajas' Express & private transport"
        },
        images: [{ url: "/images/taj-mahal.webp", caption: "The Taj Mahal" }],
        expertNote: "Sunrise is when the light is softest, bathing the white dome in shades of rose and gold.",
        highlights: ["Sunrise Taj Mahal", "Agra Fort Chambers", "Champagne Breakfast"],
        revealedRouteKeys: ["delhi", "jodhpur", "nimaj", "jaipur", "agra"]
      },
      {
        day: 11,
        location: "Khajuraho",
        locationKey: "khajuraho",
        meta: "Travel to Khajuraho",
        title: "The Temple Spires",
        narrative: "Travel to Khajuraho, nestled in Central India. Explore the famous UNESCO-listed temples covered in intricate carvings of human life and divinity.",
        details: {
          accommodation: "Maharajas' Express Train",
          experiences: "Khajuraho Western Group Temples guided tour",
          dining: "Traditional Bundelkhand lunch, train dinner",
          transport: "Maharajas' Express & SUV"
        },
        images: [{ url: "/images/Intricately carved spires of the Khajuraho temples.jpeg", caption: "Intricately carved spires of the Khajuraho temples" }],
        expertNote: "The temples are famous for their sensuous sculptures, representing the integration of physical pleasure and spiritual path.",
        highlights: ["UNESCO Temple Tour", "Laksmana Temple Sculptures", "Traditional Bundelkhand Dance"],
        revealedRouteKeys: ["delhi", "jodhpur", "nimaj", "jaipur", "agra", "khajuraho"]
      },
      {
        day: 12,
        location: "Khajuraho",
        locationKey: "khajuraho",
        meta: "Khajuraho Rural Life",
        title: "Stone Carving & Temples",
        narrative: "Explore the lesser-visited Eastern Group of temples and meet local stone carvers keeping ancient temple-building traditions alive.",
        details: {
          accommodation: "The Lalit Temple View Khajuraho",
          experiences: "Eastern Temples tour, stone carving workshop",
          dining: "Lodge lunch, dinner on the train",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Khajuraho Rural Life.png", caption: "Khajuraho Rural Life" }],
        expertNote: "The Eastern group has beautiful Jain temples, featuring cleaner architectural lines and peaceful courtyards.",
        highlights: ["Jain Temples", "Stone Sculptor Studio", "Rural Valley Jeep Tour"],
        revealedRouteKeys: ["delhi", "jodhpur", "nimaj", "jaipur", "agra", "khajuraho"]
      },
      {
        day: 13,
        location: "Varanasi",
        locationKey: "varanasi",
        meta: "Travel to Varanasi",
        title: "The Sacred River Ghats",
        narrative: "Arrive in Varanasi, one of the oldest living cities in the world. Witness the magical Ganga Aarti (devotional lamp ceremony) from a private boat on the Ganges at dusk.",
        details: {
          accommodation: "Maharajas' Express Train",
          experiences: "Ganges River private boat cruise, Ganga Aarti viewing",
          dining: "Temple-style dinner on the train",
          transport: "Maharajas' Express & private boat"
        },
        images: [{ url: "/images/dashashwamedh-ghat-evening-ganga-aarti.jpg", caption: "Ganga Aarti lamp ceremony along the Varanasi riverbank" }],
        expertNote: "The oil lamp ceremony is a multi-sensory offering of fire, incense, and bells to Mother Ganges. It is best seen from the water.",
        highlights: ["Ganges Private Boat Cruise", "Varanasi Ganga Aarti", "Saffron Blessings"],
        revealedRouteKeys: ["delhi", "jodhpur", "nimaj", "jaipur", "agra", "khajuraho", "varanasi"]
      },
      {
        day: 14,
        location: "Varanasi",
        locationKey: "varanasi",
        meta: "Varanasi Dawn & Sarnath",
        title: "Dawn on the Ganges",
        narrative: "A sunrise boat cruise down the Ganges, observing pilgrims performing morning prayers. In the afternoon, visit Sarnath where Buddha preached his first sermon.",
        details: {
          accommodation: "Brijrama palace Varanasi",
          experiences: "Sunrise Ganges boat cruise, Sarnath archaeological tour",
          dining: "Heritage mansion lunch, final train farewell dinner",
          transport: "Private boat & SUV"
        },
        images: [{ url: "/images/varanasi_ghats_1776272579374.png", caption: "Dawn mist rising over the ancient stone ghats of Varanasi" }],
        expertNote: "Sarnath features the massive Dhamekh Stupa, marking the spot where the wheel of Buddhist law was first set in motion.",
        highlights: ["Sunrise Ganges Cruise", "Sarnath Dhamekh Stupa", "Silk Weaving Demonstration"],
        revealedRouteKeys: ["delhi", "jodhpur", "nimaj", "jaipur", "agra", "khajuraho", "varanasi"]
      },
      {
        day: 15,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Return to Delhi & Departure",
        title: "Final Rail Run",
        narrative: "Disembark the train in Delhi and transfer to the international airport for your departure flight, ending your Maharaja journey.",
        details: {
          accommodation: "Departure Lounge Access",
          experiences: "Airport departure transfer",
          dining: "Train breakfast, airport snacks",
          transport: "Private luxury SUV transfer"
        },
        images: [{ url: "/images/journeys_hero_1776334755097.png", caption: "Disembarking in Delhi" }],
        expertNote: "We arrange VIP airport assistance to ensure your check-in and security checks are completed in complete comfort.",
        highlights: ["Train Disembarkation", "VIP Tarmac Airport Exit"],
        revealedRouteKeys: ["delhi", "jodhpur", "nimaj", "jaipur", "agra", "khajuraho", "varanasi", "delhi"]
      }
    ]
  },
  "temple-tour": {
    id: "temple-tour",
    title: "Temple Tour",
    subtitle: "A peaceful Southern pilgrimage through Tamil Nadu's stone spires and Kerala's coconut waters.",
    duration: "16 Days / 15 Nights",
    regionsVisited: "Chennai, Mahabalipuram, Pondicherry, Tanjore, Madurai, Periyar, Backwaters, Cochin",
    accommodations: "Private Heritage Villas & Luxury Houseboats",
    transfer: "Private Chauffeur SUV & Backwater Houseboat",
    heroImage: "/images/meenakshi-temple-in-Madurai-scaled.webp",
    ctaBgImage: "/images/meenakshi-temple-in-Madurai-scaled.webp",
    markerKeys: ["chennai", "mahabalipuram", "pondicherry", "tanjore", "madurai", "periyar", "kumarakom", "cochin"],
    routeCoords: [
      LOCATIONS.chennai.coords,
      LOCATIONS.mahabalipuram.coords,
      LOCATIONS.pondicherry.coords,
      LOCATIONS.tanjore.coords,
      LOCATIONS.madurai.coords,
      LOCATIONS.periyar.coords,
      LOCATIONS.kumarakom.coords,
      LOCATIONS.cochin.coords
    ],
    accommodationsList: [
      {
        title: "Svatma Tanjore",
        desc: "A beautifully restored century-old boutique mansion celebrating classical Tamil art, architecture, and vegetarian culinary heritage.",
        image: "/images/svatma.jpg"
      },
      {
        title: "Taj Fisherman's Cove Mahabalipuram",
        desc: "Built on the ramparts of an 18th-century Dutch fort, offering private villas nestled along the Bay of Bengal.",
        image: "/images/taj-fishermans-cove-mahabalipuram.jpg"
      },
      {
        title: "Kumarakom Lake Resort",
        desc: "Acclaimed heritage lakefront villas featuring private pools, built from actual reassembled 150-year-old traditional Keralan homesteads.",
        image: "/images/kumarakom-lake-resort.jpg"
      },
      {
        title: "Brunton Boatyard Cochin",
        desc: "A harbor-front hotel steeped in Victorian-era shipping merchant history, offering views of the Cochin channels.",
        image: "/images/brunton-boatyard.jpg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Chennai",
        locationKey: "chennai",
        meta: "Arrival & Transfer",
        title: "Gateway to the South",
        narrative: "Arrive in Chennai (Madras) and transfer to your luxury hotel by the Bay of Bengal. Settle in and enjoy a relaxing evening by the sea.",
        details: {
          accommodation: "Taj Connemara (Heritage Suite)",
          experiences: "Private airport arrival, evening colonial heritage briefing",
          dining: "Traditional South Indian feast at Raintree",
          transport: "Private luxury SUV transfer"
        },
        images: [{ url: "/images/taj-connemara.png", caption: "Welcome to Chennai's legendary heritage hotel" }],
        expertNote: "Chennai is the capital of Tamil Nadu, a region of ancient Dravidian culture that remains completely distinct from Northern India.",
        highlights: ["VIP Airport Service", "Dravidian Heritage Curation"],
        revealedRouteKeys: ["chennai"]
      },
      {
        day: 2,
        location: "Mahabalipuram",
        locationKey: "mahabalipuram",
        meta: "Chennai to Mahabalipuram Drive",
        title: "Monolithic Wonders",
        narrative: "Drive down the scenic East Coast Road to Mahabalipuram. Visit the UNESCO-listed Shore Temples and monolithic stone Rathas carved right from the beach cliffs.",
        details: {
          accommodation: "Taj Fisherman's Cove Resort & Spa (Sea View Villa)",
          experiences: "Shore Temple tour, monolithic stone carving walk",
          dining: "Seafood lunch on the beach, coastal dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/mahabalipuram-shore-temple.png", caption: "The ancient Shore Temples of Mahabalipuram" }],
        expertNote: "The Shore Temples were carved in the 8th century under the Pallava dynasty. They have stood against the ocean wind and tides for over 1,200 years.",
        highlights: ["Shore Temples", "Five Rathas Monoliths", "Private Beachfront Villa"],
        revealedRouteKeys: ["chennai", "mahabalipuram"]
      },
      {
        day: 3,
        location: "Mahabalipuram",
        locationKey: "mahabalipuram",
        meta: "Mahabalipuram Exploration",
        title: "Arjuna's Penance",
        narrative: "Explore the massive bas-relief panel known as Arjuna's Penance, and check out Krishna's Butterball—a giant natural boulder balanced on a steep hill.",
        details: {
          accommodation: "Taj Fisherman's Cove",
          experiences: "Bas-relief stone-art tour, local sculptor workshop",
          dining: "South Indian filter-coffee breakfast, private garden dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/arjuna-penance.png", caption: "Detailed bas-relief stone carvings of elephants and gods" }],
        expertNote: "Arjuna's Penance is 96 feet long and 43 feet high. It represents the descent of the Ganges River to earth.",
        highlights: ["Arjuna's Penance Relief", "Krishna's Butterball", "Traditional Stone Sculpting"],
        revealedRouteKeys: ["chennai", "mahabalipuram"]
      },
      {
        day: 4,
        location: "Pondicherry",
        locationKey: "pondicherry",
        meta: "Drive to Pondicherry",
        title: "The French Coast",
        narrative: "Drive south to the colonial seaside town of Pondicherry. Walk through the quiet streets of the French Quarter, lined with yellow colonial villas and bougainvillaea.",
        details: {
          accommodation: "Palais de Mahé - CGH Earth (Heritage Suite)",
          experiences: "French Quarter walking tour, cycle rickshaw ride",
          dining: "French-Creole lunch, rooftop seafood dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/pondicherry-french-quarter.png", caption: "Warm yellow arches and colonial dining in Pondicherry" }],
        expertNote: "Pondicherry was a French colony until 1954. The French influence remains strong in the local architecture, cuisine, and police uniforms.",
        highlights: ["French Quarter Walk", "Creole Gastronomy Curation", "Rooftop Sea Views"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry"]
      },
      {
        day: 5,
        location: "Pondicherry",
        locationKey: "pondicherry",
        meta: "Auroville Ashram Visit",
        title: "The Matrimandir Sphere",
        narrative: "Visit the experimental township of Auroville and stand before the giant gold-disked Matrimandir sphere. Spend the afternoon in meditation at Sri Aurobindo Ashram.",
        details: {
          accommodation: "Palais de Mahé",
          experiences: "Auroville Matrimandir visit, Ashram history talk",
          dining: "Organic farm-to-table lunch, French bistro dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/auroville-matrimandir.png", caption: "The golden Matrimandir sphere at Auroville" }],
        expertNote: "Matrimandir is a silent dome designed for meditation. The interior features a giant crystal ball lit by a single ray of sunlight from the roof.",
        highlights: ["Auroville Matrimandir", "Sri Aurobindo Ashram", "Organic Farm Tour"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry"]
      },
      {
        day: 6,
        location: "Tanjore",
        locationKey: "tanjore",
        meta: "Drive to Tanjore (Thanjavur)",
        title: "The Great Living Chola Temples",
        narrative: "Drive west into the agricultural Kaveri delta to Tanjore. Settle into your heritage hotel and prepare to visit the massive Brihadisvara Temple.",
        details: {
          accommodation: "Svatma Tanjore (Heritage Room)",
          experiences: "Scenic countryside drive, traditional Tanjore veena concert",
          dining: "Pure vegetarian Chidambaram feast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/svatma-tanjore.png", caption: "Heritage restoration courtyards at Svatma Tanjore" }],
        expertNote: "Tanjore is the cradle of classical South Indian music and painting. The local hotel features restored 100-year-old villas.",
        highlights: ["Kaveri Delta Drive", "Classical Veena Concert", "Heritage Villa Stay"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry", "tanjore"]
      },
      {
        day: 7,
        location: "Tanjore",
        locationKey: "tanjore",
        meta: "Brihadisvara Temple Tour",
        title: "The Stone Spires of Chola",
        narrative: "Explore the Brihadisvara Temple, a UNESCO masterpiece built of solid granite blocks. Later, visit local bronze-casting and glass-painting artisans.",
        details: {
          accommodation: "Svatma Tanjore",
          experiences: "Brihadisvara Temple private tour, bronze foundry walk",
          dining: "Temple-recipe lunch, traditional dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/brihadisvara-temple.png", caption: "The massive stone cupola of Brihadisvara Temple" }],
        expertNote: "The temple tower is 216 feet high. The monolithic stone cupola on the top weighs 80 tons—how they moved it there in 1010 AD remains a mystery.",
        highlights: ["Brihadisvara Temple", "Chola Bronze Casting Workshop", "Tanjore Painting Masterclass"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry", "tanjore"]
      },
      {
        day: 8,
        location: "Tanjore",
        locationKey: "tanjore",
        meta: "Tanjore to Madurai",
        title: "Southern Heartland",
        narrative: "Drive south to the ancient temple city of Madurai. Witness the vibrant evening ceremony at Meenakshi Amman Temple, filled with drums, bells, and chanting.",
        details: {
          accommodation: "Heritage Madurai (Heritage Villa with private courtyard)",
          experiences: "Countryside highway drive, Meenakshi Temple evening ceremony",
          dining: "Traditional Madurai street-food inspired gourmet dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/meenakshi-temple-ceremony.png", caption: "Evening fire ceremonies inside the temple corridors" }],
        expertNote: "Meenakshi Temple is the heart of Madurai. The evening ceremony sees the image of Lord Shiva being carried to the chamber of Goddess Meenakshi.",
        highlights: ["Meenakshi Temple Evening Chants", "Heritage Villa stay", "Gopuram Tower Sunset"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry", "tanjore", "madurai"]
      },
      {
        day: 9,
        location: "Madurai",
        locationKey: "madurai",
        meta: "Madurai Temple Tour",
        title: "The Hall of a Thousand Pillars",
        narrative: "Visit Meenakshi Temple in the quiet morning light, exploring the Hall of a Thousand Pillars and the sacred Golden Lotus tank. Later, visit the Tirumalai Nayakkar Palace.",
        details: {
          accommodation: "Heritage Madurai",
          experiences: "Meenakshi Temple morning tour, Nayakkar Palace walk",
          dining: "Traditional banana leaf lunch, garden bistro dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/nayakkar-palace.png", caption: "The monumental columns of Tirumalai Nayakkar Palace" }],
        expertNote: "Tirumalai Nayakkar Palace features massive white stucco pillars designed by Italian architects in 1636.",
        highlights: ["Hall of 1000 Pillars", "Sacred Lotus Tank", "Nayakkar Palace Columns"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry", "tanjore", "madurai"]
      },
      {
        day: 10,
        location: "Periyar",
        locationKey: "periyar",
        meta: "Drive to Periyar (Spice Hills)",
        title: "The Ascent to Spice Hills",
        narrative: "Leave the plains and climb winding roads into the Western Ghats to Periyar, Kerala's spice plantation reserve. Smell the cardamom and black pepper in the cool air.",
        details: {
          accommodation: "Spice Village - CGH Earth (Spice Garden Cottage)",
          experiences: "Western Ghats mountain drive, spice plantation walking tour",
          dining: "Spiced farm lunch, tribal cooking demonstration",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/periyar-spice-plantation.png", caption: "Lush green spice plantation paths in Periyar hills" }],
        expertNote: "Periyar is 3,000 feet above sea level. Black pepper, cardamom, cinnamon, and nutmeg grow wild in these hill forests.",
        highlights: ["Western Ghats Scenic Drive", "Spice Plantation Walk", "Eco-friendly Village Stay"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry", "tanjore", "madurai", "periyar"]
      },
      {
        day: 11,
        location: "Periyar",
        locationKey: "periyar",
        meta: "Periyar Wildlife Sanctuary",
        title: "The Forest Lake Cruise",
        narrative: "Embark on a private boat cruise on Lake Periyar at dawn, watching for wild elephants, bison, and otters along the water's edge.",
        details: {
          accommodation: "Spice Village",
          experiences: "Lake Periyar dawn boat safari, guided forest trek",
          dining: "Hill lodge picnic breakfast, local fish curry dinner",
          transport: "Private charter boat & walking"
        },
        images: [{ url: "/images/lake-periyar-elephants.png", caption: "Wild elephants bathing in Lake Periyar" }],
        expertNote: "Lake Periyar is an artificial reservoir created in 1895. Submerged tree stumps still rise from the water, providing perches for kingfishers.",
        highlights: ["Lake Periyar Boat Safari", "Rainforest Trekking", "Traditional Ayurvedic Massage"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry", "tanjore", "madurai", "periyar"]
      },
      {
        day: 12,
        location: "Kumarakom",
        locationKey: "kumarakom",
        meta: "Drive to Kumarakom Backwaters",
        title: "The Quiet Waters",
        narrative: "Drive down the hills to Kumarakom on the edge of Lake Vembanad. Board your private luxury wooden houseboat, drifting through emerald backwater canals.",
        details: {
          accommodation: "Private Luxury Kettuvallam (Houseboat Suite)",
          experiences: "Backwater canal cruise, traditional net fishing session",
          dining: "Traditional Keralan houseboat lunch, sunset fish grill",
          transport: "Private SUV & private Kettuvallam houseboat"
        },
        images: [{ url: "/images/kerala_backwaters_1776272518771.png", caption: "Private luxury houseboat on the Kerala backwaters" }],
        expertNote: "Houseboats (Kettuvallams) are tied together with coir ropes—no nails are used in their construction. They drift silently powered by sails or oars.",
        highlights: ["Private Houseboat Charter", "Emerald Canal Drifting", "Traditional Kayal Cuisine"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry", "tanjore", "madurai", "periyar", "kumarakom"]
      },
      {
        day: 13,
        location: "Kumarakom",
        locationKey: "kumarakom",
        meta: "Kumarakom Backwater Stay",
        title: "The Silent Lagoons",
        narrative: "Disembark your houseboat at a luxury lakeside resort. Spend the day in complete relaxation, enjoying authentic Ayurvedic oil treatments and bird watching.",
        details: {
          accommodation: "Kumarakom Lake Resort (Heritage Lake View Villa with private pool)",
          experiences: "Bird sanctuary kayak tour, private sunset flute recital",
          dining: "Lakeside seafood lunch, traditional Kerala sadya dinner",
          transport: "Private kayak & resort boat"
        },
        images: [{ url: "/images/ayurveda_wellness_1776272638098.png", caption: "Ayurvedic massage rooms overlooking Lake Vembanad" }],
        expertNote: "Kumarakom Lake Resort features actual 150-year-old Keralan homes (Mana) dismantled and reassembled on the resort grounds.",
        highlights: ["Lakeside Pool Villa", "Ayurvedic Spa Rituals", "Vembanad Lake Sunset"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry", "tanjore", "madurai", "periyar", "kumarakom"]
      },
      {
        day: 14,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Drive to Cochin (Kochi)",
        title: "The Spice Port of Malabar",
        narrative: "Drive to the historic port city of Cochin. Explore Fort Cochin's colonial streets and see the giant Chinese fishing nets silhouetted against the sunset.",
        details: {
          accommodation: "Brunton Boatyard - CGH Earth (Sea Facing Room)",
          experiences: "Fort Cochin heritage walk, Chinese fishing nets sunset visit",
          dining: "Anglo-Indian port lunch, seafood grill dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Chinese-Fishing-Nets-in-Kochi.avif", caption: "Fort Cochin harbor and Chinese fishing nets at dusk" }],
        expertNote: "Cochin was the center of the Indian spice trade for centuries, influenced by Jewish, Christian, Portuguese, Dutch, and British settlers.",
        highlights: ["Fort Cochin Walk", "Chinese Fishing Nets", "Malabar Harbor Views"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry", "tanjore", "madurai", "periyar", "kumarakom", "cochin"]
      },
      {
        day: 15,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Cochin Heritage & Art",
        title: "The Jewish Quarter & Kathakali",
        narrative: "Visit the Paradesi Synagogue and Mattancherry Palace. In the evening, witness a private performance of Kathakali—the dramatic classical dance of Kerala.",
        details: {
          accommodation: "Brunton Boatyard",
          experiences: "Jewish town walking tour, private Kathakali dance session",
          dining: "Traditional Keralan lunch, farewell harbour-front dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/kathakali-makeup.png", caption: "Traditional Kathakali dancer applying colorful face makeup" }],
        expertNote: "Kathakali dancers spend hours painting their faces with natural colors. The dance relies on complex eye movements and hand gestures.",
        highlights: ["Paradesi Synagogue", "Mattancherry Palace Murals", "Private Kathakali Performance"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry", "tanjore", "madurai", "periyar", "kumarakom", "cochin"]
      },
      {
        day: 16,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Cochin Depart",
        title: "Farewell to the Malabar Coast",
        narrative: "Enjoy a final breakfast overlooking the shipping channels of Cochin. Transfer to Cochin International Airport for your departure flight.",
        details: {
          accommodation: "Lounge Access",
          experiences: "Airport departure transfer",
          dining: "Harbour-side breakfast",
          transport: "Private luxury SUV transfer"
        },
        images: [{ url: "/images/cochin_airport.jpg", caption: "Departure flight out of Cochin Airport" }],
        expertNote: "Cochin airport is the world's first fully solar-powered airport. Carry home the scent of cardamom and sandalwood.",
        highlights: ["VIP Airport Exit", "Malabar Coast Memories"],
        revealedRouteKeys: ["chennai", "mahabalipuram", "pondicherry", "tanjore", "madurai", "periyar", "kumarakom", "cochin"]
      }
    ]
  },
  "metro-cities-culture": {
    id: "metro-cities-culture",
    title: "Metro Cities / Culture",
    subtitle: "A cosmopolitan traversal of India's colonial, artistic, and modern capitals.",
    duration: "12 Days / 11 Nights",
    regionsVisited: "Delhi, Agra, Kolkata, Chennai, Mumbai",
    accommodations: "Iconic Heritage Hotels & Art Deco Suites",
    transfer: "Private SUV & Domestic Business Flights",
    heroImage: "/images/mumbai-5.jpg",
    ctaBgImage: "/images/mumbai-5.jpg",
    markerKeys: ["delhi", "agra", "kolkata", "chennai", "mumbai"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.delhi.coords,
      LOCATIONS.kolkata.coords,
      LOCATIONS.chennai.coords,
      LOCATIONS.mumbai.coords
    ],
    accommodationsList: [
      {
        title: "The Imperial Delhi",
        desc: "A legendary landmark constructed in the 1930s, housing an incredible museum-grade collection of historical prints and art.",
        image: "/images/the-imperial-newdelhi.webp"
      },
      {
        title: "The Oberoi Grand Kolkata",
        desc: "Warmly known as the 'Grand Dame of Calcutta,' featuring neo-classical design, historic ballrooms, and tranquil palm-fringed swimming pools.",
        image: "/images/the-oberoi-grand-kolkata.avif"
      },
      {
        title: "The Taj Mahal Palace Mumbai",
        desc: "An architectural marvel positioned directly on the harbor, offering iconic sea-facing suites and over a century of legendary service.",
        image: "/images/taj-mahal-palace-mumbai.jpg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrival & Transfer",
        title: "The Mughal Gateway",
        narrative: "Arrive in Delhi and transfer to your iconic heritage hotel. Settle into the royal capital and meet your journey curators.",
        details: {
          accommodation: "The Imperial Delhi (Grand Heritage Suite)",
          experiences: "Private airport arrival, evening gardens walk",
          dining: "Awadhi welcome dinner",
          transport: "Private luxury sedan transfer"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "Arriving in New Delhi" }],
        expertNote: "Delhi has been the capital of dynasties for a thousand years. Rest well today before your city exploration.",
        highlights: ["VIP Airport Service", "Colonial Heritage Suite"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi Architecture Tour",
        title: "Capital Monuments",
        narrative: "Explore the grand sandstone architecture of Humayun's Tomb and the sprawling imperial boulevards of New Delhi.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Humayun's Tomb private tour, Lutyens architecture drive",
          dining: "Imperial tea service, contemporary Indian dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Humayun's_Tomb.avif", caption: "The grand sandstone arches of Delhi's Mughal tombs" }],
        expertNote: "Lutyens Delhi was constructed between 1912 and 1931, featuring massive government houses built of red and yellow sandstone.",
        highlights: ["Humayun's Tomb Tour", "Lutyens Parliament Drive", "Heritage Art Collection"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Agra",
        locationKey: "agra",
        meta: "Day Trip to Agra",
        title: "Sunset at the Taj Mahal",
        narrative: "Take a day trip to Agra by private SUV. Walk through the giant red sandstone gates of Agra Fort and stand before the Taj Mahal at sunset.",
        details: {
          accommodation: "The Imperial Delhi (Day Return)",
          experiences: "Agra Fort tour, private sunset Taj Mahal walk",
          dining: "Traditional Agra lunch, luxury train return tea",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/taj-mahal-agra-uttar-pradesh-india-f.avif", caption: "The Taj Mahal reflecting on the Yamuna river at sunset" }],
        expertNote: "This day-trip provides the classic Taj Mahal visit while keeping the comfort of your Delhi hotel base.",
        highlights: ["Taj Mahal sunset private access", "Agra Fort Royal Chambers"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 4,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra to Delhi & Return",
        title: "Mughal Legacy Curation",
        narrative: "Explore the delicate marble inlay workshops of Agra, learning about techniques dating back to the builders of the Taj Mahal. Return to Delhi for the evening.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Marble inlay guild walk, afternoon heritage archives walk",
          dining: "Gourmet Awadhi lunch, private courtyard dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/marble-inlay-work.webp", caption: "Traditional Pietra Dura marble inlay work" }],
        expertNote: "Pietra Dura uses semiprecious stones like lapis lazuli and jasper embedded into solid marble. Each flower petal takes days to cut.",
        highlights: ["Marble Inlay Workshop", "Royal Mughal Archives Curation"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 5,
        location: "Kolkata",
        locationKey: "kolkata",
        meta: "Fly to Kolkata (Calcutta)",
        title: "The City of Joy",
        narrative: "Fly to Kolkata, the historical capital of the British Raj and India's intellectual heart. Check into the legendary hotel overlooking the maidan.",
        details: {
          accommodation: "The Oberoi Grand Kolkata (Luxury Balcony Suite)",
          experiences: "VIP airport flight transfer, private guide reception",
          dining: "Traditional Bengali feast at Kewpie's",
          transport: "Private SUV & domestic business flight"
        },
        images: [{ url: "/images/the-oberoi-grand-kolkata.avif", caption: "The Oberoi Grand, Kolkata" }],
        expertNote: "Kolkata (formerly Calcutta) was the center of the British East India Company. The colonial architecture here is exceptionally grand.",
        highlights: ["Kolkata Arrival", "Victoria Memorial Sunrise Walk", "Traditional Bengali Dining"],
        revealedRouteKeys: ["delhi", "agra", "kolkata"]
      },
      {
        day: 6,
        location: "Kolkata",
        locationKey: "kolkata",
        meta: "Kolkata Heritage Tour",
        title: "Victorian Splendor",
        narrative: "Visit the massive marble Victoria Memorial and the historic St. Paul's Cathedral. Take a private tram ride through the old streets of North Calcutta.",
        details: {
          accommodation: "The Oberoi Grand Kolkata",
          experiences: "Victoria Memorial private tour, heritage tram ride",
          dining: "Colonial club-style lunch, contemporary Bengali dinner",
          transport: "Private SUV & heritage tram"
        },
        images: [{ url: "/images/st-paul-s-cathedral.jpg", caption: "St. Paul's Cathedral, Kolkata" }],
        expertNote: "Victoria Memorial was built between 1906 and 1921. It combines British, Mughal, and Venetian architectural elements.",
        highlights: ["Victoria Memorial Museum", "St. Paul's Cathedral", "Vintage Tram Ride"],
        revealedRouteKeys: ["delhi", "agra", "kolkata"]
      },
      {
        day: 7,
        location: "Kolkata",
        locationKey: "kolkata",
        meta: "Kolkata Literary & Art Curation",
        title: "Home of the Nobel Laureate",
        narrative: "Visit the ancestral home of Rabindranath Tagore, India's legendary Nobel-winning poet. Explore the vibrant book market of College Street and clay-sculptors of Kumartuli.",
        details: {
          accommodation: "The Oberoi Grand Kolkata",
          experiences: "Tagore House private tour, Kumartuli clay sculptor walk",
          dining: "Literary café lunch, private estate farewell dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/idol-sculptors-kumartuli.avif", caption: "Traditional clay idol sculptors at Kumartuli" }],
        expertNote: "Kumartuli is where generations of artisans have sculpted clay idols for the Durga Puja festival using river mud and straw.",
        highlights: ["Tagore House Museum", "Kumartuli Artisan Walk", "College Street Book Stalls"],
        revealedRouteKeys: ["delhi", "agra", "kolkata"]
      },
      {
        day: 8,
        location: "Chennai",
        locationKey: "chennai",
        meta: "Fly to Chennai (Madras)",
        title: "The Southern Metropole",
        narrative: "Fly south to the seaside metropolis of Chennai. Check into your heritage hotel and explore the ancient shore temple ruins of nearby Mahabalipuram.",
        details: {
          accommodation: "Taj Connemara (Heritage Suite)",
          experiences: "VIP airport flight transfer, private Mahabalipuram shore excursion",
          dining: "Dravidian lunch, coastal seafood dinner",
          transport: "Private SUV & domestic business flight"
        },
        images: [{ url: "/images/Mahabalipuram_Shore_Temple.jpg", caption: "Sunset walk along the shore temples" }],
        expertNote: "Chennai is a major center of Carnatic music and Bharatanatyam dance. Settle into the warmer, sea-scented air.",
        highlights: ["Chennai Arrival", "Mahabalipuram Shore Temples sunset", "Traditional filter coffee"],
        revealedRouteKeys: ["delhi", "agra", "kolkata", "chennai"]
      },
      {
        day: 9,
        location: "Chennai",
        locationKey: "chennai",
        meta: "Chennai Fort & Fly to Mumbai",
        title: "Fort St. George to Bombay",
        narrative: "Visit Fort St. George, the first British fortress built in India in 1644. In the afternoon, fly to the high-energy commercial capital of Mumbai (Bombay).",
        details: {
          accommodation: "The Taj Mahal Palace Mumbai (Sea Facing Palace Suite)",
          experiences: "Fort St. George private tour, VIP airport flight transfer",
          dining: "Traditional Chettinad lunch, midnight harbor view supper",
          transport: "Private SUV & domestic business flight"
        },
        images: [{ url: "/images/The Taj Mahal Palace Hotel overlooking Mumbai Harbor.jpg", caption: "The Taj Mahal Palace Hotel overlooking Mumbai Harbor" }],
        expertNote: "The Taj Mahal Palace was built in 1903, five years before the Gateway of India. It remains the ultimate landmark of Bombay.",
        highlights: ["Fort St. George Tour", "Palace Suite Check-in", "Mumbai Harbour Sunset"],
        revealedRouteKeys: ["delhi", "agra", "kolkata", "chennai", "mumbai"]
      },
      {
        day: 10,
        location: "Mumbai",
        locationKey: "mumbai",
        meta: "Mumbai City Tour",
        title: "The Gateway of India",
        narrative: "Walk through the Gateway of India at sunrise. Spend the day exploring the Victorian Gothic and Art Deco buildings of South Mumbai, a UNESCO World Heritage site.",
        details: {
          accommodation: "The Taj Mahal Palace Mumbai",
          experiences: "Gateway of India sunrise walk, private colonial heritage walk",
          dining: "Traditional Parsi lunch at Britannia, contemporary Indian dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Mumbai-colonial-Crawford_Market.jpg", caption: "Grand colonial facades of South Mumbai" }],
        expertNote: "Mumbai has the second largest collection of Art Deco buildings in the world after Miami. Look at the buildings along Marine Drive.",
        highlights: ["Gateway of India", "UNESCO Art Deco Heritage Walk", "Parsi Cafe Curation"],
        revealedRouteKeys: ["delhi", "agra", "kolkata", "chennai", "mumbai"]
      },
      {
        day: 11,
        location: "Mumbai",
        locationKey: "mumbai",
        meta: "Elephanta Caves & Art District",
        title: "Mystic Caves & Modern Art",
        narrative: "Cruise by private motorboat to Elephanta Island to see the 5th-century rock-cut temple caves. In the afternoon, explore the galleries of the Kala Ghoda Art District.",
        details: {
          accommodation: "The Taj Mahal Palace Mumbai",
          experiences: "Elephanta Caves private boat cruise, Kala Ghoda gallery walk",
          dining: "Seafood lunch at Trishna, farewell garden dinner",
          transport: "Private charter boat & SUV"
        },
        images: [{ url: "/images/Elephanta_Caves_Trimurti.jpg", caption: "Ancient rock-cut Trimurti sculpture at Elephanta Caves" }],
        expertNote: "The central Trimurti sculpture at Elephanta represents Lord Shiva as Creator, Preserver, and Destroyer—a masterpiece of Indian art.",
        highlights: ["Elephanta Caves Private Cruise", "Kala Ghoda Art Galleries", "Farewell Dinner at Wasabi"],
        revealedRouteKeys: ["delhi", "agra", "kolkata", "chennai", "mumbai"]
      },
      {
        day: 12,
        location: "Mumbai",
        locationKey: "mumbai",
        meta: "Mumbai Depart",
        title: "Farewell to the Gateway",
        narrative: "Enjoy a final breakfast overlooking the Arabian Sea. Transfer to Mumbai International Airport for your departure flight home.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Sea-view breakfast",
          transport: "Private luxury SUV transfer"
        },
        images: [{ url: "/images/mumbai-airport.jpg", caption: "Departing Mumbai Airport" }],
        expertNote: "Mumbai's T2 terminal is itself an architectural marvel, featuring a massive ceiling inspired by peacock feathers.",
        highlights: ["VIP Airport Exit", "Arabian Sea Farewells"],
        revealedRouteKeys: ["delhi", "agra", "kolkata", "chennai", "mumbai"]
      }
    ]
  },
  "lgbtq-tour": {
    id: "lgbtq-tour",
    title: "Pride of the Raj: LGBTQ+ Luxe Odyssey",
    subtitle: "A bespoke luxury odyssey through Rajasthan's royal palaces and Gujarat's heritage, celebrating inclusive luxury and prince-escorted tours.",
    duration: "16 Days / 15 Nights",
    regionsVisited: "Delhi, Agra, Amanbagh, Jaipur, Deogarh, Udaipur, Ahmedabad, Vadodara, Rajpipla",
    accommodations: "Royal Palaces, Aman Resorts & Heritage Forts",
    transfer: "Chauffeured Luxury SUV & Scenic Rails",
    heroImage: "/images/LGBTQ.jpg",
    ctaBgImage: "/images/final_cta_bg.png",
    markerKeys: ["delhi", "agra", "amanbagh", "jaipur", "deogarh", "udaipur", "ahmedabad", "vadodara", "rajpipla"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.amanbagh.coords,
      LOCATIONS.jaipur.coords,
      LOCATIONS.deogarh.coords,
      LOCATIONS.udaipur.coords,
      LOCATIONS.ahmedabad.coords,
      LOCATIONS.vadodara.coords,
      LOCATIONS.rajpipla.coords,
      LOCATIONS.vadodara.coords,
      LOCATIONS.ahmedabad.coords
    ],
    accommodationsList: [
      {
        title: "The Imperial Delhi",
        desc: "A heritage milestone blending Art Deco sophistication with Victoria-era opulence.",
        image: "/images/the-imperial-newdelhi.webp"
      },
      {
        title: "Amanbagh, Ajabgarh Valley",
        desc: "A contemporary sanctuary styled like a Mughal palace, set in a peaceful desert oasis.",
        image: "/images/Amanbagh, India - Main Building, Pool View-3.jpg"
      },
      {
        title: "Taj Lake Palace, Udaipur",
        desc: "The floating marble palace of your dreams in the center of Lake Pichola.",
        image: "/images/taj-lake-palace-udaipur.jpeg"
      },
      {
        title: "Deogarh Mahal, Rajasthan",
        desc: "A stunning fort palace built on a hilltop, offering rich local art and warm hospitality.",
        image: "/images/deogarh-mahal.webp"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrive in Delhi",
        title: "Welcome to Delhi",
        narrative: "Arrive at New Delhi's international airport where your private concierge escorts you through fast-track customs. Transfer to your heritage hotel and relax.",
        details: {
          accommodation: "The Imperial Delhi (Heritage Suite)",
          experiences: "Fast-track VIP airport escort, private welcome orientation",
          dining: "Contemporary Indian dining at The Spice Route",
          transport: "Private luxury SUV transfer"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "The classic facade of The Imperial New Delhi" }],
        expertNote: "Sip on a signature cocktail in the 1911 Bar to start your Indian holiday.",
        highlights: ["VIP Airport Meet", "Art Deco Heritage Hotel"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi",
        title: "Capital Exploration",
        narrative: "Explore the architectural wonders of Delhi, showcasing Humayun's Tomb, Qutub Minar, and the grand avenues of Lutyens.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Private guided historical monuments walk, art curation tour",
          dining: "Gourmet colonial lunch, contemporary fusion dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/qutub minar.webp", caption: "Humayun's Tomb, precursor to the Taj Mahal" }],
        expertNote: "Humayun's Tomb is the first garden-tomb on the Indian subcontinent, built in 1570.",
        highlights: ["Humayun's Tomb", "Lutyens Architecture Walk"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Agra",
        locationKey: "agra",
        meta: "Delhi - Agra",
        title: "Citadel of Love",
        narrative: "Drive down to Agra and check into your premier room at Oberoi Amarvilas. In the evening, visit the Taj Mahal to watch it glow in the sunset.",
        details: {
          accommodation: "The Oberoi Amarvilas (Premier Taj View Room)",
          experiences: "Private sunset Taj Mahal walk, VIP fast track entry",
          dining: "Fine Mughal cuisine",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/The Oberoi Amarvilas.jpg", caption: "Direct views of the Taj Mahal from Oberoi Amarvilas" }],
        expertNote: "The sunset over the Yamuna River with the Taj Mahal in the background is the most romantic view in India.",
        highlights: ["Taj Sunset Excursion", "Oberoi Amarvilas Stay"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 4,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra",
        title: "Agra Fort & Tomb Walk",
        narrative: "Discover the massive red sandstone walls of Agra Fort and the exquisite details of the Tomb of Itimad-ud-Daulah (Baby Taj).",
        details: {
          accommodation: "The Oberoi Amarvilas",
          experiences: "Agra Fort guided heritage tour, Baby Taj walk",
          dining: "International gourmet lunch, poolside dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/taj-mahal.webp", caption: "Detailed marble inlay work of the Mughal era" }],
        expertNote: "Agra Fort was the main residence of the emperors of the Mughal Dynasty until 1648.",
        highlights: ["Agra Fort Heritage", "Baby Taj Exploration"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 5,
        location: "Amanbagh",
        locationKey: "amanbagh",
        meta: "Agra - Aman Bagh",
        title: "Oasis in the Aravallis",
        narrative: "Drive into the wild Aravalli hills to the tranquil green gardens of Amanbagh. Settle into your luxurious Haveli Suite.",
        details: {
          accommodation: "Amanbagh (Pool Haveli Suite)",
          experiences: "Rural village drive, wellness resort orientation",
          dining: "Organic garden-to-table dining",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Amanbagh, India - Main Building, Pool View-3.jpg", caption: "The pink sandstone domes of Amanbagh" }],
        expertNote: "Amanbagh lies on the site of a former royal hunting lodge in the Ajabgarh Valley.",
        highlights: ["Haveli Suite Luxury", "Aravalli Valley Views"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh"]
      },
      {
        day: 6,
        location: "Amanbagh",
        locationKey: "amanbagh",
        meta: "Aman Bagh",
        title: "Jungle Ruins & Temples",
        narrative: "Explore the ancient haunted city ruins of Bhangarh and take part in a private temple blessing ceremony at sunset.",
        details: {
          accommodation: "Amanbagh",
          experiences: "Bhangarh Fort morning tour, village camel cart safari, evening puja",
          dining: "Traditional Rajasthani courtyard lunch, private poolside dinner",
          transport: "Open-top safari jeep"
        },
        images: [{ url: "/images/ajabgarh-fort.jpg", caption: "Hills of Ajabgarh" }],
        expertNote: "Bhangarh is famously known as India's most haunted fort ruins, dating back to the 17th century.",
        highlights: ["Bhangarh Haunted Ruins", "Sunset Temple Puja"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh"]
      },
      {
        day: 7,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Aman Bagh - Jaipur",
        title: "Arrival in the Pink City",
        narrative: "Drive to Jaipur and check into the legendary Rambagh Palace. Settle into the royal lifestyle with a grand heritage welcoming ceremony.",
        details: {
          accommodation: "Rambagh Palace Jaipur (Historical Suite)",
          experiences: "Royal palace welcoming ceremony, heritage peacock gardens walk",
          dining: "Fine dining Rajasthani thali at Suvarna Mahal",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Rambagh-Palace-jaipur.jpg", caption: "Rambagh Palace, former home of the Maharaja of Jaipur" }],
        expertNote: "Suvarna Mahal serves imperial recipes under original crystal chandeliers and frescoed ceilings.",
        highlights: ["Rambagh Palace Check-In", "Imperial Palace Welcome"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "jaipur"]
      },
      {
        day: 8,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur",
        title: "The Royal Observatories",
        narrative: "Explore the City Palace complex, the astronomical sundial of Jantar Mantar, and the iconic wind facade of Hawa Mahal.",
        details: {
          accommodation: "Rambagh Palace Jaipur",
          experiences: "City Palace private curator walk, Jantar Mantar astronomy tour",
          dining: "Palace lawn lunch, courtyard dining under the stars",
          transport: "Private explorer SUV"
        },
        images: [{ url: "/images/hawamahal.jpg", caption: "The pink-painted stone facades of the Hawa Mahal" }],
        expertNote: "Jantar Mantar is a UNESCO World Heritage site featuring the world's largest stone sundial.",
        highlights: ["City Palace Private Tour", "Hawa Mahal Wind Facade"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "jaipur"]
      },
      {
        day: 9,
        location: "Deogarh",
        locationKey: "deogarh",
        meta: "Jaipur - Deogarh",
        title: "Hilltop Palace Retreat",
        narrative: "Travel southwest to the magnificent Deogarh Mahal. Explore the historic fortress town and settle into your heritage suite.",
        details: {
          accommodation: "Deogarh Mahal (Royal Suite)",
          experiences: "Hilltop fort orientation, village market walk",
          dining: "Traditional Mewari family dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/deogarh-mahal.webp", caption: "Deogarh Mahal" }],
        expertNote: "Deogarh is famous for its miniature school of painting, which is proudly displayed in the palace.",
        highlights: ["Deogarh Hilltop Fort", "Mewari Painting Curation"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "jaipur", "deogarh"]
      },
      {
        day: 10,
        location: "Deogarh",
        locationKey: "deogarh",
        meta: "Deogarh",
        title: "Countryside Vintage Rail",
        narrative: "Embark on a unique scenic local train ride through the rural scrub hills of Rajasthan, followed by a private lakeside picnic.",
        details: {
          accommodation: "Deogarh Mahal",
          experiences: "Vintage rural rail ride, lakeside picnic, folk music performance",
          dining: "Gourmet picnic lunch, rooftop heritage buffet",
          transport: "Rural heritage rail coach & SUV"
        },
        images: [{ url: "/images/rail-journey-rajasthan.jpg", caption: "Scenic countryside rail journey through the Rajasthan hills" }],
        expertNote: "This single-track meter gauge railway cuts through beautiful mountain gorges and local villages.",
        highlights: ["Rural Meter Gauge Rail", "Lakeside Sunset Picnic"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "jaipur", "deogarh"]
      },
      {
        day: 11,
        location: "Udaipur",
        locationKey: "udaipur",
        meta: "Deogarh - Udaipur",
        title: "The City of Lakes",
        narrative: "Drive to Udaipur and check into the floating Taj Lake Palace in the middle of Lake Pichola. Enjoy a sunset private boat cruise.",
        details: {
          accommodation: "Taj Lake Palace Udaipur (Royal Suite)",
          experiences: "Lake Pichola sunset boat cruise, Jag Mandir island walk",
          dining: "Lakeside Mewari dinner",
          transport: "Private SUV & motor boat"
        },
        images: [{ url: "/images/taj-lake-palace-udaipur.jpeg", caption: "Taj Lake Palace floating on Lake Pichola" }],
        expertNote: "Taj Lake Palace is a white marble wonder that was built in 1746 as a summer palace for the royal dynasty.",
        highlights: ["Taj Lake Palace Stay", "Lake Pichola Boat Cruise"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "jaipur", "deogarh", "udaipur"]
      },
      {
        day: 12,
        location: "Udaipur",
        locationKey: "udaipur",
        meta: "Udaipur",
        title: "Temples & Palaces",
        narrative: "Explore the grand City Palace museum, Jagdish Temple, and Saheliyon-ki-Bari (Gardens of the Maids of Honor).",
        details: {
          accommodation: "Taj Lake Palace Udaipur",
          experiences: "City Palace private guided tour, Jagdish Temple walk",
          dining: "Garden lunch, royal terrace dinner at Neel Kamal",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/courtyards-udaipur-city-palace.jpg", caption: "Intricate mosaic courtyards of the Udaipur City Palace" }],
        expertNote: "Saheliyon-ki-Bari features beautiful marble fountains, pools, and lotus ponds built for royal ladies.",
        highlights: ["Udaipur City Palace", "Lotus Fountains Walk"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "jaipur", "deogarh", "udaipur"]
      },
      {
        day: 13,
        location: "Ahmedabad",
        locationKey: "ahmedabad",
        meta: "Udaipur - Ahmedabad",
        title: "Heritage of Gujarat",
        narrative: "Drive south to Ahmedabad, Gujarat. Discover the city's ancient stepwells and vibrant textile museums.",
        details: {
          accommodation: "Taj Skyline Ahmedabad (Luxury Suite)",
          experiences: "Adalaj Stepwell guided visit, Calico Museum of Textiles",
          dining: "Traditional Gujarati Thali feast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/adalaj-stepwll.jpg", caption: "The incredible underground architecture of Adalaj Stepwell" }],
        expertNote: "Adalaj Stepwell is a five-story deep underground architectural wonder built in 1498.",
        highlights: ["Adalaj Stepwell", "Gujarati Thali Experience"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "jaipur", "deogarh", "udaipur", "ahmedabad"]
      },
      {
        day: 14,
        location: "Vadodara",
        locationKey: "vadodara",
        meta: "Ahmedabad - Vadodara",
        title: "The Gaekwad Legacy",
        narrative: "Drive to Vadodara and check into your heritage mansion stay. Visit the grand Lukshmi Vilas Palace, four times the size of Buckingham Palace.",
        details: {
          accommodation: "Lukshmi Vilas Palace Heritage Suite",
          experiences: "Lukshmi Vilas Palace private tour, Maharaja Fateh Singh Museum",
          dining: "Royal heritage lunch, contemporary organic dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/lukshmi-vilas-palace.webp", caption: "The massive Lukshmi Vilas Palace facade" }],
        expertNote: "Lukshmi Vilas Palace features a grand Indo-Saracenic style built in 1890 with Italian marble floorings.",
        highlights: ["Lukshmi Vilas Palace", "Royal Heritage Homestay"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "jaipur", "deogarh", "udaipur", "ahmedabad", "vadodara"]
      },
      {
        day: 15,
        location: "Rajpipla",
        locationKey: "rajpipla",
        meta: "Vadodara - Rajpipla - Vadodara",
        title: "Royal Inclusive Curation",
        narrative: "Embark on an exclusive day trip to Rajpipla. Meet with Prince Manvendra Singh Gohil, the world's first openly gay prince, to learn about his historic advocacy and tour the royal Hanumanteshwar estate.",
        details: {
          accommodation: "Lukshmi Vilas Palace Heritage Suite",
          experiences: "Private royal audience with Prince Manvendra, Hanumanteshwar LGBTQ+ center tour",
          dining: "Royal organic lunch at Hanumanteshwar, farewell celebration dinner in Vadodara",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/rajpipla.jpg", caption: "The quiet royal courtyards of the Rajpipla estate" }],
        expertNote: "Prince Manvendra's trust is creating a safe haven for LGBTQ+ travelers and community members in India.",
        highlights: ["Royal Prince Audience", "Hanumanteshwar Estate Tour"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "jaipur", "deogarh", "udaipur", "ahmedabad", "vadodara", "rajpipla"]
      },
      {
        day: 16,
        location: "Ahmedabad",
        locationKey: "ahmedabad",
        meta: "Vadodara - Ahmedabad - Depart",
        title: "Departure",
        narrative: "Drive back to Ahmedabad International Airport for your departure flight home, carrying memories of royal inclusivity.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Lodge breakfast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/ahmedabad-airport.avif", caption: "Ahmedabad International Airport" }],
        expertNote: "Check in early to secure lounge access prior to your long-haul flight.",
        highlights: ["VIP Airport Exit"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "jaipur", "deogarh", "udaipur", "ahmedabad", "vadodara", "rajpipla", "ahmedabad"]
      }
    ]
  },
  "culinary-tour-13": {
    id: "culinary-tour-13",
    title: "Epicurean Passage: Northern & Eastern Spices",
    subtitle: "A 13-day sensory journey through the culinary cradles of North India and West Bengal, tasting heritage recipes and street delicacies.",
    duration: "13 Days / 12 Nights",
    regionsVisited: "Delhi, Agra, Lucknow, Varanasi, Jaipur, Kolkata",
    accommodations: "Heritage Palaces & Luxury Colonial Hotels",
    transfer: "Chauffeured Luxury SUV & Scenic Trains",
    heroImage: "/images/victoria-memorial-kolkata-west-bengal-hero.jpeg",
    ctaBgImage: "/images/victoria-memorial-kolkata-west-bengal-hero.jpeg",
    markerKeys: ["delhi", "agra", "lucknow", "varanasi", "jaipur", "kolkata"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.lucknow.coords,
      LOCATIONS.varanasi.coords,
      LOCATIONS.jaipur.coords,
      LOCATIONS.kolkata.coords
    ],
    accommodationsList: [
      {
        title: "The Imperial Delhi",
        desc: "A heritage milestone blending Art Deco sophistication with Victoria-era opulence.",
        image: "/images/the-imperial-newdelhi.webp"
      },
      {
        title: "Taj Mahal Lucknow",
        desc: "A beautiful hotel situated in the heart of the city of Nawabs, known for royal hospitality.",
        image: "/images/taj-mahal-lucknow.jpg"
      },
      {
        title: "Taj Nadesar Palace, Varanasi",
        desc: "A sanctuary of peace surrounded by marigold fields and sacred mango orchards.",
        image: "/images/Taj_Nadesar_Palace.webp"
      },
      {
        title: "The Oberoi Grand Kolkata",
        desc: "The Grand Dame of Kolkata, offering heritage suites and prime colonial architecture.",
        image: "/images/the-oberoi-grand-kolkata.avif"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrive in Delhi",
        title: "Flavors of the Capital",
        narrative: "Arrive in Delhi and transfer to your luxury hotel. Settle in and enjoy a private introduction to Indian spices and tea curation with our resident chef.",
        details: {
          accommodation: "The Imperial Delhi (Heritage Suite)",
          experiences: "Fast-track airport escort, private spice classification workshop",
          dining: "Mughlai welcome dinner at Spice Route",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "The Imperial Hotel, Delhi" }],
        expertNote: "Take this afternoon to rest before diving into the spice markets of Old Delhi tomorrow.",
        highlights: ["VIP Airport Meet", "Spice Masterclass Welcome"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi",
        title: "Old Delhi Spice Markets",
        narrative: "Explore the bustling spice market of Khari Baoli in Old Delhi. Take a rickshaw ride through narrow lanes, tasting legendary street eats and ancient paranthas.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Khari Baoli spice walk, Chandni Chowk street food curation",
          dining: "Historic street food lunch, contemporary Indian tasting menu at Varq",
          transport: "Private SUV & bicycle rickshaw"
        },
        images: [{ url: "/images/Khari-baoli.webp", caption: "Heaps of colorful spices at Khari Baoli market" }],
        expertNote: "Khari Baoli is Asia's largest wholesale spice market, operating since the 17th century.",
        highlights: ["Khari Baoli Spice Walk", "Chandni Chowk Street Food"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Agra",
        locationKey: "agra",
        meta: "Delhi - Agra",
        title: "Taj Mahal & Petha Tasting",
        narrative: "Drive down to Agra. Visit the majestic Taj Mahal and enjoy a tasting of Petha, Agra's traditional sugar-cured pumpkin sweet.",
        details: {
          accommodation: "The Oberoi Amarvilas (Premier Taj View Room)",
          experiences: "Taj Mahal sunset walk, traditional petha confectionery visit",
          dining: "Mughalai dinner at Esphahan",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/The Oberoi Amarvilas.jpg", caption: "The Oberoi Amarvilas, Agra" }],
        expertNote: "Esphahan is renowned for its slow-cooked lentils and traditional tandoori dishes, accompanied by live sitar music.",
        highlights: ["Taj Mahal Sunset Walk", "Traditional Petha Tasting"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 4,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra",
        title: "Imperial Kitchens of Agra Fort",
        narrative: "Discover the architectural wonders of Agra Fort and explore how Mughal emperors ran their historic royal kitchens.",
        details: {
          accommodation: "The Oberoi Amarvilas",
          experiences: "Agra Fort guided heritage walk, royal cooking class",
          dining: "Mughal kitchen tasting lunch, international fine dining dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/agra-fort.jpeg", caption: "Red sandstone ramparts of Agra Fort" }],
        expertNote: "Agra Fort's structure contains complex water systems that were used for cooling imperial palace rooms.",
        highlights: ["Agra Fort Royal Tour", "Mughal Cooking Class"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 5,
        location: "Lucknow",
        locationKey: "lucknow",
        meta: "Agra - Lucknow",
        title: "Nawabi Kebabs & Awadhi Royalties",
        narrative: "Drive east to the city of Nawabs, Lucknow. Check into your luxury hotel and enjoy an evening Awadhi culinary walk, tasting melting Galouti kebabs.",
        details: {
          accommodation: "Taj Mahal Lucknow (Executive Suite)",
          experiences: "Awadhi culinary street walk, Tunday Kababi tasting",
          dining: "Awadhi Dum Pukht dinner at Falak Numa",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/nawab-lucknow.webp", caption: "The Nawabi monuments of historic Lucknow" }],
        expertNote: "Awadhi cuisine is famous for the 'Dum' method of slow cooking over charcoal, creating exceptionally tender meats.",
        highlights: ["Awadhi Culinary Walk", "Galouti Kebab Tasting"],
        revealedRouteKeys: ["delhi", "agra", "lucknow"]
      },
      {
        day: 6,
        location: "Lucknow",
        locationKey: "lucknow",
        meta: "Lucknow",
        title: "Chikan Embroidery & Nawabi Estates",
        narrative: "Discover the Bara Imambara and its famous labyrinth (Bhool Bhulaiya), followed by a private home dinner hosted by a local Nawabi descendant.",
        details: {
          accommodation: "Taj Mahal Lucknow",
          experiences: "Bara Imambara guided walk, Chikan textile studio visit, private home dining",
          dining: "Local Nawab home dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/bara-imambara.jpg", caption: "Ornate archways of the Bara Imambara" }],
        expertNote: "Bhool Bhulaiya is a unique three-dimensional maze with over 1,000 corridors built on top of the Imambara.",
        highlights: ["Bara Imambara Labyrinth", "Nawabi Home Dining Curation"],
        revealedRouteKeys: ["delhi", "agra", "lucknow"]
      },
      {
        day: 7,
        location: "Varanasi",
        locationKey: "varanasi",
        meta: "Lucknow - Varanasi",
        title: "Sacred Ganges & Street Eats",
        narrative: "Travel to Varanasi, the oldest living city in the world. Check into the serene Nadesar Palace. In the evening, witness the Ganga Aarti ceremony.",
        details: {
          accommodation: "Taj Nadesar Palace (Royal Suite)",
          experiences: "Ganga Aarti private boat cruise, holy temple walk",
          dining: "Temple-inspired vegetarian thali dinner",
          transport: "Private luxury SUV & boat"
        },
        images: [{ url: "/images/ganga-aarti-at-assi-ghat.webp", caption: "Ganga Aarti in Varanasi" }],
        expertNote: "Varanasi street food features unique specialties like Tamatar Chaat and Malaiyo, which are rarely found elsewhere.",
        highlights: ["Ganga Aarti Boat Cruise", "Nadesar Palace Serenity"],
        revealedRouteKeys: ["delhi", "agra", "lucknow", "varanasi"]
      },
      {
        day: 8,
        location: "Varanasi",
        locationKey: "varanasi",
        meta: "Varanasi",
        title: "Sunrise Boats & Varanasi Chai",
        narrative: "Embark on a peaceful sunrise boat cruise on the Ganges, followed by a street food safari tasting hot kachoris and clay-cup masala chai.",
        details: {
          accommodation: "Taj Nadesar Palace",
          experiences: "Sunrise Ganges boat cruise, Old City street food safari, silk weaving studio visit",
          dining: "Kachori and Jalebi street breakfast, palace garden organic dinner",
          transport: "Private SUV & row boat"
        },
        images: [{ url: "/images/boat-ride-varanasi.webp", caption: "Row boats floating on the sacred Ganges river at dawn" }],
        expertNote: "Banarasi silk sarees are famous for their gold and silver brocade work, handwoven on traditional wooden looms.",
        highlights: ["Sunrise Ganges Cruise", "Varanasi Street Food Safari"],
        revealedRouteKeys: ["delhi", "agra", "lucknow", "varanasi"]
      },
      {
        day: 9,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Varanasi - Jaipur",
        title: "Royal Rajasthani Spices",
        narrative: "Fly to Jaipur. Settle into the royal Rambagh Palace and discover the rich spices of Rajasthan, featuring Lal Maas (spicy mutton curry).",
        details: {
          accommodation: "Rambagh Palace Jaipur (Historical Suite)",
          experiences: "Royal welcoming ceremony, luxury bazaar walk",
          dining: "Imperial Rajasthani thali featuring Lal Maas",
          transport: "Private SUV & domestic flight"
        },
        images: [{ url: "/images/Rambagh-Palace-jaipur.jpg", caption: "Rambagh Palace gardens lit up at night" }],
        expertNote: "Lal Maas gets its distinctive red color and fiery heat from Mathania chilies grown in western Rajasthan.",
        highlights: ["Rambagh Palace Rest", "Lal Maas Royal Dinner"],
        revealedRouteKeys: ["delhi", "agra", "lucknow", "varanasi", "jaipur"]
      },
      {
        day: 10,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur",
        title: "Bazaars & Cooking Curation",
        narrative: "Discover the City Palace and local food markets. Participate in a private cooking curation with a royal chef at Rambagh Palace.",
        details: {
          accommodation: "Rambagh Palace Jaipur",
          experiences: "City Palace private walk, spice market tour, royal cooking masterclass",
          dining: "Market lunch, self-cooked royal tasting dinner",
          transport: "Private explorer SUV"
        },
        images: [{ url: "/images/40443496-chilli-red-dried-pepper-on-indian-jaipur-market-rajasthan-india-close-up-spices-background.jpg", caption: "Baskets of dried red chilies and local spices in Jaipur bazaar" }],
        expertNote: "Jaipur's local markets are filled with fresh turmeric roots and handmade papadums during the season.",
        highlights: ["Jaipur Spice Market Tour", "Royal Cooking Masterclass"],
        revealedRouteKeys: ["delhi", "agra", "lucknow", "varanasi", "jaipur"]
      },
      {
        day: 11,
        location: "Kolkata",
        locationKey: "kolkata",
        meta: "Jaipur - Kolkata",
        title: "Bengali Seafood & Sweets",
        narrative: "Fly east to Kolkata. Check into the historic Oberoi Grand. Dive into the world of Bengali fish curries and iconic cottage cheese sweets (Sondesh).",
        details: {
          accommodation: "The Oberoi Grand Kolkata (Heritage Suite)",
          experiences: "Bengali mustard fish demonstration, sweet shop trail",
          dining: "Traditional Bengali lunch (Maach-Bhaat), dinner at Kewpie's",
          transport: "Private SUV & domestic flight"
        },
        images: [{ url: "/images/the-oberoi-grand-kolkata.avif", caption: "The Oberoi Grand, Kolkata" }],
        expertNote: "Bengali cuisine relies heavily on mustard oil and Panch Phoron, a five-spice blend of fennel, cumin, fenugreek, nigella, and mustard seeds.",
        highlights: ["Kolkata Sweet Curation", "Bengali Mustard Fish Dinner"],
        revealedRouteKeys: ["delhi", "agra", "lucknow", "varanasi", "jaipur", "kolkata"]
      },
      {
        day: 12,
        location: "Kolkata",
        locationKey: "kolkata",
        meta: "Kolkata",
        title: "College Street Cafes & Clay Guilds",
        narrative: "Explore the literary coffee houses of College Street and clay-sculptors of Kumartuli, followed by a grand colonial-style farewell feast.",
        details: {
          accommodation: "The Oberoi Grand Kolkata",
          experiences: "Coffee house literary walk, Kumartuli artisan walk",
          dining: "Historical Cabin café lunch, private colonial estate farewell dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/artisans-clay-kumartuli.jpg", caption: "Artisans crafting clay idols in Kumartuli" }],
        expertNote: "College Street Coffee House has been a meeting place for artists, poets, and Nobel laureates for over a century.",
        highlights: ["College Street Coffee House", "Clay Sculptor Walk"],
        revealedRouteKeys: ["delhi", "agra", "lucknow", "varanasi", "jaipur", "kolkata"]
      },
      {
        day: 13,
        location: "Kolkata",
        locationKey: "kolkata",
        meta: "Kolkata - Depart",
        title: "Farewell to Bengal",
        narrative: "Enjoy a final breakfast overlooking the pool of The Oberoi Grand. Transfer to Kolkata International Airport for your flight home.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Heritage breakfast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/airport.webp", caption: "Departing Kolkata Airport" }],
        expertNote: "Pack some dry Sondesh sweets in your carry-on for a delicious mid-flight snack.",
        highlights: ["VIP Airport Exit"],
        revealedRouteKeys: ["delhi", "agra", "lucknow", "varanasi", "jaipur", "kolkata"]
      }
    ]
  },
  "culinary-tour-16": {
    id: "culinary-tour-16",
    title: "Grand Epicurean Odyssey: North, West & South",
    subtitle: "A 16-day deep-dive into the rich culinary heritage of India, spanning Mughal spices, Deccan royalties, coastal seafood, and street markets.",
    duration: "16 Days / 15 Nights",
    regionsVisited: "Delhi, Agra, Jaipur, Mumbai, Hyderabad, Cochin",
    accommodations: "Bespoke Luxury Hotels & Heritage Mansions",
    transfer: "Chauffeured Luxury SUV & Scenic Flights",
    heroImage: "/images/cochin.jpg",
    ctaBgImage: "/images/cochin.jpg",
    markerKeys: ["delhi", "agra", "jaipur", "mumbai", "hyderabad", "cochin"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.jaipur.coords,
      LOCATIONS.mumbai.coords,
      LOCATIONS.hyderabad.coords,
      LOCATIONS.cochin.coords
    ],
    accommodationsList: [
      {
        title: "The Imperial Delhi",
        desc: "A heritage milestone blending Art Deco sophistication with Victoria-era opulence.",
        image: "/images/the-imperial-newdelhi.webp"
      },
      {
        title: "The Taj Mahal Palace, Mumbai",
        desc: "The absolute landmark of Bombay overlooking the Gateway of India and Arabian Sea.",
        image: "/images/taj-mahal-palace-mumbai.jpg"
      },
      {
        title: "Taj Falaknuma Palace, Hyderabad",
        desc: "A breathtaking palace sitting 2,000 feet above the city, formerly the home of the Nizam.",
        image: "/images/taj-falaknuma-hyderabad.jpg"
      },
      {
        title: "Brunton Boatyard, Cochin",
        desc: "A historic shipyard turned boutique hotel, offering rich coastal culinary heritage.",
        image: "/images/brunton-boatyard.jpg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrive in Delhi",
        title: "Epicurean Greeting",
        narrative: "Arrive in Delhi and transfer to your luxury hotel. Settle in and enjoy a private introduction to Indian spices and tea curation with our resident chef.",
        details: {
          accommodation: "The Imperial Delhi (Heritage Suite)",
          experiences: "Fast-track airport escort, private spice classification workshop",
          dining: "Mughlai welcome dinner at Spice Route",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "The Imperial, New Delhi" }],
        expertNote: "Take this afternoon to rest before diving into the spice markets of Old Delhi tomorrow.",
        highlights: ["VIP Airport Meet", "Spice Masterclass Welcome"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi",
        title: "Old Delhi Spice Markets",
        narrative: "Explore the bustling spice market of Khari Baoli in Old Delhi. Take a rickshaw ride through narrow lanes, tasting legendary street eats and ancient paranthas.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Khari Baoli spice walk, Chandni Chowk street food curation",
          dining: "Historic street food lunch, contemporary Indian tasting menu at Varq",
          transport: "Private SUV & bicycle rickshaw"
        },
        images: [{ url: "/images/Khari-baoli.webp", caption: "Heaps of colorful spices at Khari Baoli market" }],
        expertNote: "Khari Baoli is Asia's largest wholesale spice market, operating since the 17th century.",
        highlights: ["Khari Baoli Spice Walk", "Chandni Chowk Street Food"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Agra",
        locationKey: "agra",
        meta: "Delhi - Agra",
        title: "Taj Mahal & Petha Tasting",
        narrative: "Drive down to Agra. Visit the majestic Taj Mahal and enjoy a tasting of Petha, Agra's traditional sugar-cured pumpkin sweet.",
        details: {
          accommodation: "The Oberoi Amarvilas (Premier Taj View Room)",
          experiences: "Taj Mahal sunset walk, traditional petha confectionery visit",
          dining: "Mughalai dinner at Esphahan",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/The Oberoi Amarvilas.jpg", caption: "The Oberoi Amarvilas, Agra" }],
        expertNote: "Esphahan is renowned for its slow-cooked lentils and traditional tandoori dishes, accompanied by live sitar music.",
        highlights: ["Taj Mahal Sunset Walk", "Traditional Petha Tasting"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 4,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra",
        title: "Imperial Kitchens of Agra Fort",
        narrative: "Discover the architectural wonders of Agra Fort and explore how Mughal emperors ran their historic royal kitchens.",
        details: {
          accommodation: "The Oberoi Amarvilas",
          experiences: "Agra Fort guided heritage walk, royal cooking class",
          dining: "Mughal kitchen tasting lunch, international fine dining dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/agra-fort.jpeg", caption: "Red sandstone ramparts of Agra Fort" }],
        expertNote: "Agra Fort's structure contains complex water systems that were used for cooling imperial palace rooms.",
        highlights: ["Agra Fort Royal Tour", "Mughal Cooking Class"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 5,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Agra - Jaipur",
        title: "Royal Rajasthani Spices",
        narrative: "Fly to Jaipur. Settle into the royal Rambagh Palace and discover the rich spices of Rajasthan, featuring Lal Maas (spicy mutton curry).",
        details: {
          accommodation: "Rambagh Palace Jaipur (Historical Suite)",
          experiences: "Royal welcoming ceremony, luxury bazaar walk",
          dining: "Imperial Rajasthani thali featuring Lal Maas",
          transport: "Private SUV"
        },
        images: [{ url: "/images/Rambagh-Palace-jaipur.jpg", caption: "Rambagh Palace gardens lit up at night" }],
        expertNote: "Lal Maas gets its distinctive red color and fiery heat from Mathania chilies grown in western Rajasthan.",
        highlights: ["Rambagh Palace Rest", "Lal Maas Royal Dinner"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 6,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur",
        title: "Bazaars & Cooking Curation",
        narrative: "Discover the City Palace and local food markets. Participate in a private cooking curation with a royal chef at Rambagh Palace.",
        details: {
          accommodation: "Rambagh Palace Jaipur",
          experiences: "City Palace private walk, spice market tour, royal cooking masterclass",
          dining: "Market lunch, self-cooked royal tasting dinner",
          transport: "Private explorer SUV"
        },
        images: [{ url: "/images/40443496-chilli-red-dried-pepper-on-indian-jaipur-market-rajasthan-india-close-up-spices-background.jpg", caption: "Baskets of dried red chilies and local spices in Jaipur bazaar" }],
        expertNote: "Jaipur's local markets are filled with fresh turmeric roots and handmade papadums during the season.",
        highlights: ["Jaipur Spice Market Tour", "Royal Cooking Masterclass"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 7,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur",
        title: "Amber Fort & Royal High Tea",
        narrative: "Visit the Amber Fort in the morning. Return to the palace gardens for a luxurious afternoon high tea and rest.",
        details: {
          accommodation: "Rambagh Palace Jaipur",
          experiences: "Amber Fort private tour, palace afternoon high tea",
          dining: "Palace lunch, lawn dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/amber-fort.jpg", caption: "Amber Fort overlooking Maota Lake" }],
        expertNote: "The Sheesh Mahal inside Amber Fort is inlaid with thousands of mirrors that reflect candlelight beautifully.",
        highlights: ["Amber Fort Mirror Hall", "Palace High Tea Curation"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 8,
        location: "Mumbai",
        locationKey: "mumbai",
        meta: "Jaipur - Mumbai",
        title: "Flavors of Bombay",
        narrative: "Fly south to Mumbai. Check into the historic Taj Mahal Palace. Take an evening walk through local markets, tasting Mumbai's iconic street snacks like Vada Pav and Bhel Puri.",
        details: {
          accommodation: "The Taj Mahal Palace Mumbai (Sea Facing Palace Suite)",
          experiences: "Mumbai harbor walk, evening street food curation",
          dining: "Coastal seafood dinner at Trishna",
          transport: "Private SUV & domestic flight"
        },
        images: [{ url: "/images/taj-mahal-palace-mumbai.jpg", caption: "The Taj Mahal Palace Hotel, Mumbai" }],
        expertNote: "Trishna is world-famous for its Butter Pepper Garlic Crab, fresh from the coast.",
        highlights: ["Taj Palace Suite Check-in", "Trishna Seafood Dinner"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "mumbai"]
      },
      {
        day: 9,
        location: "Mumbai",
        locationKey: "mumbai",
        meta: "Mumbai",
        title: "Parsi Cafes & Art Deco Districts",
        narrative: "Discover South Mumbai's UNESCO heritage buildings and explore legacy Parsi cafes that shaped the city's unique tea culture.",
        details: {
          accommodation: "The Taj Mahal Palace Mumbai",
          experiences: "Gateway of India sunrise walk, Parsi café heritage trail",
          dining: "Parsi lunch at Britannia, contemporary Indian dinner at Masque",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/House-of-Daaruwala-Mumbai.webp", caption: "The historic dining rooms of South Mumbai" }],
        expertNote: "Masque is a leading progressive restaurant in India, focusing on local, seasonal ingredients.",
        highlights: ["UNESCO Heritage Walk", "Parsi Cafe Curation"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "mumbai"]
      },
      {
        day: 10,
        location: "Mumbai",
        locationKey: "mumbai",
        meta: "Mumbai",
        title: "Elephanta Caves & Wasabi Farewell",
        narrative: "Take a private boat to Elephanta Caves. In the evening, enjoy a bespoke degustation menu at Wasabi by Morimoto.",
        details: {
          accommodation: "The Taj Mahal Palace Mumbai",
          experiences: "Elephanta Caves private boat cruise, private gallery escort",
          dining: "Wasabi by Morimoto dining",
          transport: "Private motor boat & SUV"
        },
        images: [{ url: "/images/Elephanta_Caves_Trimurti.jpg", caption: "Trimurti rock-cut statue at Elephanta Caves" }],
        expertNote: "Morimoto's Wasabi is consistently voted as one of the best Japanese restaurants in Asia.",
        highlights: ["Elephanta Private Cruise", "Wasabi Degustation Dinner"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "mumbai"]
      },
      {
        day: 11,
        location: "Hyderabad",
        locationKey: "hyderabad",
        meta: "Mumbai - Hyderabad",
        title: "City of the Nizams",
        narrative: "Fly to Hyderabad. Settle into the royal Taj Falaknuma Palace, sitting 2,000 feet above the city, and enjoy a traditional Hyderabadi Biryani feast.",
        details: {
          accommodation: "Taj Falaknuma Palace (Royal Suite)",
          experiences: "Palace horse-drawn carriage arrival, evening qawwali session",
          dining: "Traditional royal Hyderabadi Biryani feast at Adaa",
          transport: "Private SUV & domestic flight"
        },
        images: [{ url: "/images/taj-falaknuma-hyderabad.jpg", caption: "Taj Falaknuma Palace sitting grandly on the hill" }],
        expertNote: "Hyderabadi Biryani is uniquely slow-cooked in the 'Kachchi' style, layering raw marinated meat with partially cooked basmati rice.",
        highlights: ["Falaknuma Horse Carriage Arrival", "Nizam Royal Biryani Feast"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "mumbai", "hyderabad"]
      },
      {
        day: 12,
        location: "Hyderabad",
        locationKey: "hyderabad",
        meta: "Hyderabad",
        title: "Charminar & Laad Bazaar",
        narrative: "Explore the 16th-century Charminar, the historic Golconda Fort, and shop for local pearl markets, followed by an evening Nizam culinary curation.",
        details: {
          accommodation: "Taj Falaknuma Palace",
          experiences: "Charminar guided walk, Golconda Fort private walk, Pearl bazaar tour",
          dining: "Saffron-rich Nawabi lunch, palace terrace dining",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/charminar.jpg", caption: "The majestic four-minaret arches of Charminar" }],
        expertNote: "Golconda Fort is famous for its advanced acoustics—a clap at the entrance can be heard clear at the highest pavilion.",
        highlights: ["Charminar Guided Walk", "Golconda Fort Acoustics"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "mumbai", "hyderabad"]
      },
      {
        day: 13,
        location: "Hyderabad",
        locationKey: "hyderabad",
        meta: "Hyderabad",
        title: "Palace Gardens & High Tea",
        narrative: "Relax in the grand library and marble courtyards of Falaknuma, followed by a traditional Nizam afternoon high tea session.",
        details: {
          accommodation: "Taj Falaknuma Palace",
          experiences: "Palace library archive access, royal high tea curation",
          dining: "Royal lunch, grand palace terrace dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/falaknuma-library.webp", caption: "The incredible library of Falaknuma Palace" }],
        expertNote: "The library at Falaknuma houses one of the most comprehensive collections of the Holy Quran in the world.",
        highlights: ["Falaknuma Library Access", "Nizam High Tea Curation"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "mumbai", "hyderabad"]
      },
      {
        day: 14,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Hyderabad - Cochin",
        title: "Coastal Malabar Spices",
        narrative: "Fly to Cochin, Kerala. Check into Brunton Boatyard. Dive into the world of Malabar fish curry, fresh prawns, and coconut-rich stews.",
        details: {
          accommodation: "Brunton Boatyard (Sea Facing Room)",
          experiences: "Chinese fishing nets walk, Kathakali dance performance",
          dining: "Kerala coastal seafood thali dinner",
          transport: "Private SUV & domestic flight"
        },
        images: [{ url: "/images/Chinese-Fishing-Nets-in-Kochi.avif", caption: "Chinese fishing nets on the shores of Cochin" }],
        expertNote: "Cochin has been the center of the Indian spice trade for centuries, attracting Portuguese, Dutch, Jewish, and British merchants.",
        highlights: ["Chinese Fishing Nets Walk", "Malabar Seafood Dinner"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "mumbai", "hyderabad", "cochin"]
      },
      {
        day: 15,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Cochin",
        title: "Spice Warehouses & Jew Town",
        narrative: "Explore the ancient Jewish synagogue, spice warehouses of Mattancherry, and learn to cook traditional Keralan recipes in a private family estate.",
        details: {
          accommodation: "Brunton Boatyard",
          experiences: "Paradesi Synagogue private walk, spice warehouse tour, home cooking class",
          dining: "Self-cooked Keralan lunch, farewell estate dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Colonial-Warehouses-of-Fort-Kochi.png", caption: "Historic Mattancherry warehouses" }],
        expertNote: "The Paradesi Synagogue was built in 1568, featuring hand-painted Chinese porcelain floor tiles.",
        highlights: ["Mattancherry Spice Curation", "Keralan Home Cooking Class"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "mumbai", "hyderabad", "cochin"]
      },
      {
        day: 16,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Cochin - depart",
        title: "Departure",
        narrative: "Transfer to Cochin International Airport for your departure flight home, carrying the spices of India with you.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Lodge breakfast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/cochin_airport.jpg", caption: "Farewell" }],
        expertNote: "Cochin airport is the world's first fully solar-powered airport.",
        highlights: ["VIP Airport Exit"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "mumbai", "hyderabad", "cochin"]
      }
    ]
  },
  "kerala-culture-11": {
  "id": "kerala-culture-11",
  "title": "Malabar Passage: Mumbai to Kerala Backwaters",
  "subtitle": "A premium 11-day cultural odyssey from the energetic shores of Mumbai to the emerald backwaters and mist-shrouded hills of Munnar.",
  "duration": "11 Days / 10 Nights",
  "regionsVisited": "Mumbai, Cochin, Alleppey, Kumarakom, Munnar",
  "accommodations": "Heritage Palaces, Luxury Houseboats, and Hill Retreats",
  "transfer": "Domestic Flight & Chauffeured SUV",
  "heroImage": "/images/backwater-canal.webp",
  "ctaBgImage": "/images/kerala_backwaters_1776272518771.png",
  "markerKeys": [
    "mumbai",
    "cochin",
    "alleppey",
    "kumarakom",
    "munnar"
  ],
  "routeCoords": [
    [
      72.8777,
      19.076
    ],
    [
      76.2673,
      9.9312
    ],
    [
      76.3388,
      9.4981
    ],
    [
      76.4312,
      9.5936
    ],
    [
      77.0595,
      10.0889
    ],
    [
      76.2673,
      9.9312
    ]
  ],
  "accommodationsList": [
    {
      "title": "The Taj Mahal Palace, Mumbai",
      "desc": "A heritage milestone blending Art Deco sophistication with Victoria-era opulence.",
      "image": "/images/taj-mahal-palace-mumbai.jpg"
    },
    {
      "title": "Brunton Boatyard, Cochin",
      "desc": "A historic shipyard turned boutique hotel, offering rich coastal culinary heritage.",
      "image": "/images/brunton-boatyard.jpg"
    },
    {
      "title": "Kumarakom Lake Resort",
      "desc": "A stunning collection of luxury villas bordering the serene Vembanad Lake.",
      "image": "/images/kumarakom-lake-resort.jpg"
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "location": "Mumbai",
      "locationKey": "mumbai",
      "meta": "Arrive in Mumbai",
      "title": "Arrive in Mumbai",
      "narrative": "Arrive at Mumbai International Airport where your private host escorts you through fast-track customs. Transfer to your iconic palace hotel overlooking the Arabian Sea.",
      "details": {
        "accommodation": "The Taj Mahal Palace Mumbai (Sea Facing Palace Suite)",
        "experiences": "Fast-track airport escort, private harbor welcome orientation",
        "dining": "Late evening supper overlooking the Gateway of India",
        "transport": "Private luxury SUV transfer"
      },
      "images": [
        {
          "url": "/images/taj-mahal-palace-mumbai.jpg",
          "caption": "Taj Mahal Palace, Mumbai"
        }
      ],
      "expertNote": "Settle into your room and watch the small wooden boats bobbing in the harbor.",
      "highlights": [
        "VIP Airport Service",
        "Oceanfront Palace Suite"
      ],
      "revealedRouteKeys": [
        "mumbai"
      ]
    },
    {
      "day": 2,
      "location": "Mumbai",
      "locationKey": "mumbai",
      "meta": "Mumbai",
      "title": "Fort & Art Deco Heritage",
      "narrative": "Explore the UNESCO Victorian and Art Deco buildings of South Mumbai. Visit the Gateway of India and the bustling Crawford Market.",
      "details": {
        "accommodation": "The Taj Mahal Palace Mumbai",
        "experiences": "Colonial heritage walking tour, Crawford Market market trail",
        "dining": "Authentic Parsi lunch at Britannia & Co., contemporary Indian dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Art Deco and gothic structures of historic Bombay.jpeg",
          "caption": "Art Deco and gothic structures of historic Bombay"
        }
      ],
      "expertNote": "Britannia & Co. is a century-old Parsi cafe legendary for its Berry Pulav and heritage atmosphere.",
      "highlights": [
        "UNESCO Heritage Tour",
        "Parsi Cafe Curation"
      ],
      "revealedRouteKeys": [
        "mumbai"
      ]
    },
    {
      "day": 3,
      "location": "Mumbai",
      "locationKey": "mumbai",
      "meta": "Mumbai",
      "title": "Dharabi Curation & Dhobi Ghat",
      "narrative": "Gain a deeper understanding of Mumbai's local life with visits to Dhobi Ghat (the open-air laundry) and local cottage industries.",
      "details": {
        "accommodation": "The Taj Mahal Palace Mumbai",
        "experiences": "Dhobi Ghat photography tour, local cottage industries walk",
        "dining": "Gourmet seafood dinner at Trishna",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/dhobi-ghat.jpg",
          "caption": "Dhobi Ghat, Mumbai's massive open-air heritage laundry"
        }
      ],
      "expertNote": "Trishna's butter pepper garlic crab is a culinary classic of coastal Mumbai.",
      "highlights": [
        "Dhobi Ghat Excursion",
        "Premium Coastal Seafood"
      ],
      "revealedRouteKeys": [
        "mumbai"
      ]
    },
    {
      "day": 4,
      "location": "Cochin",
      "locationKey": "cochin",
      "meta": "Mumbai - Cochin",
      "title": "Fly to Cochin",
      "narrative": "Board a domestic flight to Cochin in Kerala. Check into your boutique shipyard hotel. In the evening, watch a traditional Kathakali dance performance.",
      "details": {
        "accommodation": "Brunton Boatyard (Sea Facing Suite)",
        "experiences": "Kathakali dance theater entry, harbor sunset walk",
        "dining": "Kerala coastal seafood thali dinner",
        "transport": "Private SUV & domestic flight"
      },
      "images": [
        {
          "url": "/images/fort-kochi.webp",
          "caption": "shipping lanes of Fort Kochi"
        }
      ],
      "expertNote": "Fort Kochi was the first European settlement in India, heavily influenced by Portuguese, Dutch, and British history.",
      "highlights": [
        "Fort Kochi Shipping Lanes",
        "Kathakali Dance Theater"
      ],
      "revealedRouteKeys": [
        "mumbai",
        "cochin"
      ]
    },
    {
      "day": 5,
      "location": "Cochin",
      "locationKey": "cochin",
      "meta": "Cochin",
      "title": "Colonial Harbors & Chinese Nets",
      "narrative": "Discover Fort Kochi's Jewish Synagogue, Dutch Palace, and the iconic Chinese Fishing Nets along the seaside promenade.",
      "details": {
        "accommodation": "Brunton Boatyard",
        "experiences": "Jewish Synagogue visit, Dutch Palace tour, Chinese fishing net demonstration",
        "dining": "Colonial club-style lunch, Jewish heritage dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Chinese-Fishing-Nets-in-Kochi.avif",
          "caption": "Giant cantilevered Chinese fishing nets along the coast"
        }
      ],
      "expertNote": "The Chinese Fishing Nets have been in use here since the 14th century, introduced by traders from the court of Kublai Khan.",
      "highlights": [
        "Paradesi Jewish Synagogue",
        "Chinese Fishing Nets sunset"
      ],
      "revealedRouteKeys": [
        "mumbai",
        "cochin"
      ]
    },
    {
      "day": 6,
      "location": "Alleppey",
      "locationKey": "alleppey",
      "meta": "Cochin - Alleppey",
      "title": "Boarding the Houseboat",
      "narrative": "Drive to Alleppey (Alappuzha) and board a private heritage thatched houseboat. Spend the day floating through narrow backwater canals.",
      "details": {
        "accommodation": "Spice Coast Cruises Houseboat (Private Luxury Cabin)",
        "experiences": "Private backwater canal cruise, village walking stop",
        "dining": "Keralan meals prepared on board by your personal chef",
        "transport": "Private luxury SUV & heritage houseboat"
      },
      "images": [
        {
          "url": "/images/kerala_backwaters_1776272518771.png",
          "caption": "Cruising in a traditional wooden Kettuvallam houseboat"
        }
      ],
      "expertNote": "The houseboats are converted from cargo boats called Kettuvallams, made without a single nail using coir ropes.",
      "highlights": [
        "Private Houseboat Cruise",
        "Authentic Backwater Meals"
      ],
      "revealedRouteKeys": [
        "mumbai",
        "cochin",
        "alleppey"
      ]
    },
    {
      "day": 7,
      "location": "Kumarakom",
      "locationKey": "kumarakom",
      "meta": "Alleppey - Kumarakom",
      "title": "Lakeside Haven",
      "narrative": "Disembark your houseboat at Kumarakom Lake Resort. Spend a relaxing afternoon walking along the resort's private canals.",
      "details": {
        "accommodation": "Kumarakom Lake Resort (Heritage Pool Villa)",
        "experiences": "Resort orientation, evening sunset cruise on Vembanad Lake",
        "dining": "Fresh pearlspot fish dinner at Ettukettu",
        "transport": "Private motor boat & resort transfer"
      },
      "images": [
        {
          "url": "/images/kumarakom-lake-resort.jpg",
          "caption": "Kumarakom Lake Resort"
        }
      ],
      "expertNote": "Ettukettu restaurant is housed in an authentic 180-year-old wooden mansion reconstructed on site.",
      "highlights": [
        "Heritage Pool Villa Rest",
        "Vembanad Lake Sunset Cruise"
      ],
      "revealedRouteKeys": [
        "mumbai",
        "cochin",
        "alleppey",
        "kumarakom"
      ]
    },
    {
      "day": 8,
      "location": "Kumarakom",
      "locationKey": "kumarakom",
      "meta": "Kumarakom",
      "title": "Bird Sanctuary & Ayurveda",
      "narrative": "Embark on an early morning bird walk in Kumarakom Sanctuary, followed by a rejuvenating ayurvedic massage at the resort spa.",
      "details": {
        "accommodation": "Kumarakom Lake Resort",
        "experiences": "Kumarakom Bird Sanctuary tour, 90-minute private Abhyanga Ayurvedic therapy",
        "dining": "Lakeside tea and snack curation, local organic dinner",
        "transport": "Private resort boat & SUV"
      },
      "images": [
        {
          "url": "/images/ayurveda_wellness_1776272638098.png",
          "caption": "Ayurvedic wellness oils and herbal therapy sessions"
        }
      ],
      "expertNote": "Abhyanga is an ancient full-body massage using warm medicated herb oils to balance body energies.",
      "highlights": [
        "Bird Sanctuary Tour",
        "Full-Body Ayurvedic Therapy"
      ],
      "revealedRouteKeys": [
        "mumbai",
        "cochin",
        "alleppey",
        "kumarakom"
      ]
    },
    {
      "day": 9,
      "location": "Munnar",
      "locationKey": "munnar",
      "meta": "Kumarakom - Munnar",
      "title": "Up to the Tea Estates",
      "narrative": "Drive up into the mist-shrouded Western Ghats to Munnar. Check into your heritage tea estate bungalow and enjoy the cooler mountain air.",
      "details": {
        "accommodation": "Windermere Estate Munnar (Estate Room)",
        "experiences": "Scenic mountain drive, tea plantation estate walk",
        "dining": "Traditional Keralan mountain estate dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/munnar-tea-plantations.jpg",
          "caption": "Munnar's rolling green tea plantations stretching across the valleys"
        }
      ],
      "expertNote": "Munnar sits at an altitude of 1,600 meters above sea level and was once the summer resort of the British government in South India.",
      "highlights": [
        "Tea Estate Bungalow Stay",
        "Scenic Western Ghats Drive"
      ],
      "revealedRouteKeys": [
        "mumbai",
        "cochin",
        "alleppey",
        "kumarakom",
        "munnar"
      ]
    },
    {
      "day": 10,
      "location": "Munnar",
      "locationKey": "munnar",
      "meta": "Munnar",
      "title": "Tea Processing & Eravikulam",
      "narrative": "Visit a working tea factory to see how tea is processed, and explore Eravikulam National Park, home to the rare Nilgiri Tahr.",
      "details": {
        "accommodation": "Windermere Estate Munnar",
        "experiences": "Tea factory guided tour, Eravikulam National Park wildlife tour",
        "dining": "Hilltop estate picnic lunch, plantation farewell dinner",
        "transport": "Open-top estate jeep"
      },
      "images": [
        {
          "url": "/images/Nilgiri-tahr-2.jpg",
          "caption": "Nilgiri Tahr mountain goat of Munnar"
        }
      ],
      "expertNote": "Eravikulam is home to the largest surviving population of the endangered Nilgiri Tahr.",
      "highlights": [
        "Tea Factory Tour",
        "Rare Wildlife Spotting"
      ],
      "revealedRouteKeys": [
        "mumbai",
        "cochin",
        "alleppey",
        "kumarakom",
        "munnar"
      ]
    },
    {
      "day": 11,
      "location": "Cochin",
      "locationKey": "cochin",
      "meta": "Munnar - Cochin airport",
      "title": "Departure",
      "narrative": "Drive down from Munnar to Cochin International Airport for your departure flight home.",
      "details": {
        "accommodation": "VIP Departure Lounge",
        "experiences": "Airport departure transfer",
        "dining": "Bungalow breakfast",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/cochin_airport.jpg",
          "caption": "Farewell"
        }
      ],
      "expertNote": "Buy some fresh cardamom and pepper from Munnar's spice markets to take home.",
      "highlights": [
        "VIP Airport Exit"
      ],
      "revealedRouteKeys": [
        "mumbai",
        "cochin",
        "alleppey",
        "kumarakom",
        "munnar",
        "cochin"
      ]
    }
  ]
},
  "kerala-culture-beach-13": {
    id: "kerala-culture-beach-13",
    title: "Malabar & Marari: Culture, Hills & Coast",
    subtitle: "A 13-day journey blending colonial harbors, Munnar's high tea plantations, the tranquil backwaters, and a luxurious beach escape on Marari shore.",
    duration: "13 Days / 12 Nights",
    regionsVisited: "Mumbai, Cochin, Munnar, Alleppey, Marari Beach",
    accommodations: "Heritage Palaces, Mountain Estates & Beachfront Villas",
    transfer: "Domestic Flight & Chauffeured SUV",
    heroImage: "/images/marari.webp",
    ctaBgImage: "/images/marari.webp",
    markerKeys: ["mumbai", "cochin", "munnar", "alleppey", "marari"],
    routeCoords: [
      LOCATIONS.mumbai.coords,
      LOCATIONS.cochin.coords,
      LOCATIONS.munnar.coords,
      LOCATIONS.alleppey.coords,
      LOCATIONS.marari.coords,
      LOCATIONS.cochin.coords
    ],
    accommodationsList: [
      {
        title: "The Taj Mahal Palace, Mumbai",
        desc: "A heritage milestone blending Art Deco sophistication with Victoria-era opulence.",
        image: "/images/taj-mahal-palace-mumbai.jpg"
      },
      {
        title: "Windermere Estate, Munnar",
        desc: "A historic sanctuary tucked away in rolling hills and tea plantations.",
        image: "/images/Windermere Estate, Munnar.webp"
      },
      {
        title: "Marari Beach Resort",
        desc: "A peaceful eco-luxury retreat situated right along the white sands of Marari.",
        image: "/images/Marari Beach Resort.avif"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Mumbai",
        locationKey: "mumbai",
        meta: "Arrive in Mumbai",
        title: "Arrive in Mumbai",
        narrative: "Arrive at Mumbai International Airport where your private host escorts you through fast-track customs. Transfer to your iconic palace hotel overlooking the Arabian Sea.",
        details: {
          accommodation: "The Taj Mahal Palace Mumbai (Sea Facing Palace Suite)",
          experiences: "Fast-track airport escort, private harbor welcome orientation",
          dining: "Late evening supper overlooking the Gateway of India",
          transport: "Private luxury SUV transfer"
        },
        images: [{ url: "/images/taj-mahal-palace-mumbai.jpg", caption: "The imposing Taj Mahal Palace overlooking the bay" }],
        expertNote: "Settle into your room and watch the small wooden boats bobbing in the harbor.",
        highlights: ["VIP Airport Service", "Oceanfront Palace Suite"],
        revealedRouteKeys: ["mumbai"]
      },
      {
        day: 2,
        location: "Mumbai",
        locationKey: "mumbai",
        meta: "Mumbai",
        title: "Fort & Art Deco Heritage",
        narrative: "Explore the UNESCO Victorian and Art Deco buildings of South Mumbai. Visit the Gateway of India and the bustling Crawford Market.",
        details: {
          accommodation: "The Taj Mahal Palace Mumbai",
          experiences: "Colonial heritage walking tour, Crawford Market market trail",
          dining: "Authentic Parsi lunch at Britannia & Co., contemporary Indian dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Art Deco and gothic structures of historic Bombay.jpeg", caption: "Art Deco and gothic structures of historic Bombay" }],
        expertNote: "Britannia & Co. is a century-old Parsi cafe legendary for its Berry Pulav and heritage atmosphere.",
        highlights: ["UNESCO Heritage Tour", "Parsi Cafe Curation"],
        revealedRouteKeys: ["mumbai"]
      },
      {
        day: 3,
        location: "Mumbai",
        locationKey: "mumbai",
        meta: "Mumbai",
        title: "Dharabi Curation & Dhobi Ghat",
        narrative: "Gain a deeper understanding of Mumbai's local life with visits to Dhobi Ghat (the open-air laundry) and local cottage industries.",
        details: {
          accommodation: "The Taj Mahal Palace Mumbai",
          experiences: "Dhobi Ghat photography tour, local cottage industries walk",
          dining: "Gourmet seafood dinner at Trishna",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/dhobi-ghat.jpg", caption: "Dhobi Ghat, Mumbai's massive open-air heritage laundry" }],
        expertNote: "Trishna's butter pepper garlic crab is a culinary classic of coastal Mumbai.",
        highlights: ["Dhobi Ghat Excursion", "Premium Coastal Seafood"],
        revealedRouteKeys: ["mumbai"]
      },
      {
        day: 4,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Mumbai - Cochin",
        title: "Fly to Cochin",
        narrative: "Board a domestic flight to Cochin in Kerala. Check into your boutique shipyard hotel. In the evening, watch a traditional Kathakali dance performance.",
        details: {
          accommodation: "Brunton Boatyard (Sea Facing Suite)",
          experiences: "Kathakali dance theater entry, harbor sunset walk",
          dining: "Kerala coastal seafood thali dinner",
          transport: "Private SUV & domestic flight"
        },
        images: [{ url: "/images/fort-kochi.webp", caption: "harbors and shipping lanes of Fort Kochi" }],
        expertNote: "Fort Kochi was the first European settlement in India, heavily influenced by Portuguese, Dutch, and British history.",
        highlights: ["Fort Kochi Shipping Lanes", "Kathakali Dance Theater"],
        revealedRouteKeys: ["mumbai", "cochin"]
      },
      {
        day: 5,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Cochin",
        title: "Colonial Harbors & Chinese Nets",
        narrative: "Discover Fort Kochi's Jewish Synagogue, Dutch Palace, and the iconic Chinese Fishing Nets along the seaside promenade.",
        details: {
          accommodation: "Brunton Boatyard",
          experiences: "Jewish Synagogue visit, Dutch Palace tour, Chinese fishing net demonstration",
          dining: "Colonial club-style lunch, Jewish heritage dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Chinese-Fishing-Nets-in-Kochi.avif", caption: "Giant cantilevered Chinese fishing nets along the coast" }],
        expertNote: "The Chinese Fishing Nets have been in use here since the 14th century, introduced by traders from the court of Kublai Khan.",
        highlights: ["Paradesi Jewish Synagogue", "Chinese Fishing Nets sunset"],
        revealedRouteKeys: ["mumbai", "cochin"]
      },
      {
        day: 6,
        location: "Munnar",
        locationKey: "munnar",
        meta: "Cochin - Munnar",
        title: "Ascend to Munnar Hills",
        narrative: "Drive up into the Western Ghats to Munnar. Check into your heritage tea estate bungalow and enjoy the cooler mountain air.",
        details: {
          accommodation: "Windermere Estate Munnar (Estate Room)",
          experiences: "Scenic mountain drive, tea plantation estate walk",
          dining: "Traditional Keralan mountain estate dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/munnar-tea-plantations.jpg", caption: "Rolling tea plantations in the misty hills of Munnar" }],
        expertNote: "Munnar's elevation makes it the perfect region for high-quality tea production.",
        highlights: ["Munnar Hill Drive", "Tea Plantation Walk"],
        revealedRouteKeys: ["mumbai", "cochin", "munnar"]
      },
      {
        day: 7,
        location: "Munnar",
        locationKey: "munnar",
        meta: "Munnar",
        title: "Tea Factory & Hill Forests",
        narrative: "Explore the local tea factory and take a private guided trek through the high forest trails of the Western Ghats.",
        details: {
          accommodation: "Windermere Estate Munnar",
          experiences: "Tea factory guided tour, private mountain forest trek",
          dining: "Hilltop estate picnic lunch, plantation courtyard dining",
          transport: "Open-top estate jeep"
        },
        images: [{ url: "/images/munnar.jpeg", caption: "Mountain forests of Munnar" }],
        expertNote: "Keep an eye out for rare mountain orchids and birds during the forest trek.",
        highlights: ["Tea Processing Tour", "Private Forest Trek"],
        revealedRouteKeys: ["mumbai", "cochin", "munnar"]
      },
      {
        day: 8,
        location: "Alleppey",
        locationKey: "alleppey",
        meta: "Munnar - Alleppey",
        title: "Boarding the Houseboat",
        narrative: "Drive down from the hills to Alleppey (Alappuzha) and board a private heritage thatched houseboat. Spend the day floating through narrow backwater canals.",
        details: {
          accommodation: "Spice Coast Cruises Houseboat (Private Luxury Cabin)",
          experiences: "Private backwater canal cruise, village walking stop",
          dining: "Keralan meals prepared on board by your personal chef",
          transport: "Private luxury SUV & heritage houseboat"
        },
        images: [{ url: "/images/kerala_backwaters_1776272518771.png", caption: "Cruising in a traditional wooden Kettuvallam houseboat" }],
        expertNote: "The houseboats are converted from cargo boats called Kettuvallams, made without a single nail using coir ropes.",
        highlights: ["Private Houseboat Cruise", "Authentic Backwater Meals"],
        revealedRouteKeys: ["mumbai", "cochin", "munnar", "alleppey"]
      },
      {
        day: 9,
        location: "Alleppey",
        locationKey: "alleppey",
        meta: "Alleppey",
        title: "Village Life & Backwater Canals",
        narrative: "Enjoy another day cruising through Vembanad Lake and exploring the quiet local fishing villages along the shore.",
        details: {
          accommodation: "Spice Coast Cruises Houseboat",
          experiences: "Village market walk, local coir-making demonstration",
          dining: "Keralan lunch and dinner on board",
          transport: "Heritage houseboat"
        },
        images: [{ url: "/images/backwater-canal.webp", caption: "Coconut-lined backwater canals at sunset" }],
        expertNote: "Local villagers rely on coir (coconut fiber) production for their livelihoods.",
        highlights: ["Vembanad Lake Exploration", "Coir-Making Curation"],
        revealedRouteKeys: ["mumbai", "cochin", "munnar", "alleppey"]
      },
      {
        day: 10,
        location: "Marari",
        locationKey: "marari",
        meta: "Alleppey - Marari beach",
        title: "To the Shores of Marari",
        narrative: "Disembark your houseboat and drive to Marari Beach Resort. Settle into your luxury beachfront pool villa.",
        details: {
          accommodation: "Marari Beach Resort (Garden Pool Villa)",
          experiences: "Beach resort orientation, evening beachfront walk",
          dining: "Fresh coastal seafood dinner at the Beach Grill",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/kerala_backwaters_1776272518771.png", caption: "The pristine white sands of Marari Beach" }],
        expertNote: "Marari is a traditional fishing village beach, offering a highly tranquil alternative to commercial resorts.",
        highlights: ["Garden Pool Villa Stay", "Marari Beach Sunset"],
        revealedRouteKeys: ["mumbai", "cochin", "munnar", "alleppey", "marari"]
      },
      {
        day: 11,
        location: "Marari",
        locationKey: "marari",
        meta: "Marari beach",
        title: "Beachfront Solitude",
        narrative: "Enjoy a fully open day at Marari. Relax by your private pool or participate in a resort organic farming tour.",
        details: {
          accommodation: "Marari Beach Resort",
          experiences: "Resort organic garden walk, beachfront yoga class",
          dining: "Organic garden-to-table lunch, beachfront seafood dinner",
          transport: "None (resort relaxation)"
        },
        images: [{ url: "/images/pool-villa-marari.jpg", caption: "Private pool villas at Marari Beach Resort" }],
        expertNote: "The resort runs a major conservation project for local butterflies and organic farming.",
        highlights: ["Resort Organic Farm Tour", "Beachfront Yoga Class"],
        revealedRouteKeys: ["mumbai", "cochin", "munnar", "alleppey", "marari"]
      },
      {
        day: 12,
        location: "Marari",
        locationKey: "marari",
        meta: "Marari beach",
        title: "Ayurvedic Rest",
        narrative: "Indulge in a final day of rejuvenation with traditional Ayurvedic wellness consultations and warm oil treatments.",
        details: {
          accommodation: "Marari Beach Resort",
          experiences: "Ayurvedic doctor consultation, 60-minute massage therapy",
          dining: "Traditional Keralan thali, poolside farewell dinner",
          transport: "None"
        },
        images: [{ url: "/images/ayurveda_wellness_1776272638098.png", caption: "Ayurvedic wellness center inside the resort gardens" }],
        expertNote: "Ayurveda focuses on holistic healing. Our resident doctor can help customize a wellness plan.",
        highlights: ["Ayurvedic Wellness Consultation", "Farewell Poolside Feast"],
        revealedRouteKeys: ["mumbai", "cochin", "munnar", "alleppey", "marari"]
      },
      {
        day: 13,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Marari beach - Cochin airport",
        title: "Departure",
        narrative: "Transfer to Cochin International Airport for your departure flight home.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Resort breakfast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/cochin_airport.jpg", caption: "Farewell" }],
        expertNote: "The drive from Marari to Cochin Airport takes roughly two hours depending on traffic.",
        highlights: ["VIP Airport Exit"],
        revealedRouteKeys: ["mumbai", "cochin", "munnar", "alleppey", "marari", "cochin"]
      }
    ]
  },
  "goa-kerala-culture-10": {
    id: "goa-kerala-culture-10",
    title: "Suns, Spices & Sacred Waters: Goa & Kerala",
    subtitle: "A 10-day luxury escape tracking the Portuguese lanes of Goa, the colonial shipping channels of Cochin, and the serene backwaters of Kumarakom.",
    duration: "10 Days / 9 Nights",
    regionsVisited: "Mumbai, Goa, Cochin, Kumarakom",
    accommodations: "Colonial Heritage Estates & Lagoonside Pool Villas",
    transfer: "Domestic Business Flights & Private SUV",
    heroImage: "/images/goa.jpeg",
    ctaBgImage: "/images/goa.jpeg",
    markerKeys: ["mumbai", "goa", "cochin", "kumarakom"],
    routeCoords: [
      LOCATIONS.mumbai.coords,
      LOCATIONS.goa.coords,
      LOCATIONS.cochin.coords,
      LOCATIONS.kumarakom.coords,
      LOCATIONS.cochin.coords
    ],
    accommodationsList: [
      {
        title: "The Taj Mahal Palace, Mumbai",
        desc: "A heritage milestone blending Art Deco sophistication with Victoria-era opulence.",
        image: "/images/taj-mahal-palace-mumbai.jpg"
      },
      {
        title: "Taj Exotica Resort & Spa, Goa",
        desc: "A beautiful Mediterranean-style resort overlooking the Arabian Sea shore.",
        image: "/images/taj-exotica-goa.jpg"
      },
      {
        title: "Kumarakom Lake Resort",
        desc: "A stunning collection of luxury villas bordering the serene Vembanad Lake.",
        image: "/images/kumarakom-lake-resort.jpg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Mumbai",
        locationKey: "mumbai",
        meta: "Arrive in Mumbai",
        title: "Welcome to Bombay",
        narrative: "Arrive in Mumbai and transfer to your luxury room at Taj Mahal Palace. Rest and prepare for your upcoming travels over a private orientation briefing.",
        details: {
          accommodation: "The Taj Mahal Palace Mumbai (Palace Suite)",
          experiences: "VIP airport meet and escort, harbor welcome orientation",
          dining: "Late evening supper in Sea Lounge",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/taj-mahal-palace-mumbai.jpg", caption: "Chauffeured arrival at the grand Taj Mahal Palace" }],
        expertNote: "Enjoy a signature colonial high tea in the Sea Lounge overlooking the harbor.",
        highlights: ["VIP Airport Meet", "Sea Lounge Curation"],
        revealedRouteKeys: ["mumbai"]
      },
      {
        day: 2,
        location: "Mumbai",
        locationKey: "mumbai",
        meta: "Mumbai",
        title: "Colonial City Curation",
        narrative: "Explore the Art Deco buildings, the Gateway of India, and the grand Victorian gothic architecture of South Mumbai.",
        details: {
          accommodation: "The Taj Mahal Palace Mumbai",
          experiences: "Colonial history walking tour, local Crawford Market tour",
          dining: "Contemporary Indian lunch, coastal dinner at Trishna",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Art Deco and gothic structures of historic Bombay.jpeg", caption: "The historic structures of old South Mumbai" }],
        expertNote: "South Mumbai holds one of the largest collections of Art Deco architecture in the world.",
        highlights: ["Colonial Architectural Walk", "Trishna Seafood Experience"],
        revealedRouteKeys: ["mumbai"]
      },
      {
        day: 3,
        location: "Goa",
        locationKey: "goa",
        meta: "Mumbai - Goa",
        title: "Flight to Sunny Goa",
        narrative: "Fly to the golden beaches of Goa. Check into your Mediterranean-style villa and watch the sunset over Benaulim Beach.",
        details: {
          accommodation: "Taj Exotica Resort & Spa Goa (Luxury Villa)",
          experiences: "Sunset beach walk, resort garden walk",
          dining: "Goan-Portuguese fusion dinner at Miguel Arcanjo",
          transport: "Private SUV & domestic flight"
        },
        images: [{ url: "/images/goa_heritage_1776272683299.png", caption: "The grand Mediterranean-style facade of Taj Exotica Goa" }],
        expertNote: "Miguel Arcanjo serves legendary Goan fish curry and local Bebinca cake.",
        highlights: ["Benaulim Beach Sunset", "Goan-Portuguese Dining"],
        revealedRouteKeys: ["mumbai", "goa"]
      },
      {
        day: 4,
        location: "Goa",
        locationKey: "goa",
        meta: "Goa",
        title: "Churches of Old Goa",
        narrative: "Discover Old Goa's UNESCO World Heritage churches, including the Basilica of Bom Jesus, followed by a private organic spice farm visit.",
        details: {
          accommodation: "Taj Exotica Resort & Spa Goa",
          experiences: "Basilica of Bom Jesus tour, Sahakari Spice Farm guided walk",
          dining: "Traditional buffet lunch at spice farm, beachfront candlelit dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/basilica-bom-jesus.png", caption: "The historic Basilica of Bom Jesus in Old Goa" }],
        expertNote: "The Basilica houses the sacred remains of St. Francis Xavier, a masterpiece of Jesuit architecture.",
        highlights: ["Old Goa UNESCO Churches", "Sahakari Spice Farm Curation"],
        revealedRouteKeys: ["mumbai", "goa"]
      },
      {
        day: 5,
        location: "Goa",
        locationKey: "goa",
        meta: "Goa",
        title: "Latin Quarter Fontainhas",
        narrative: "Take a walking tour of Fontainhas, Goa's historic Latin Quarter, showcasing bright yellow and blue Portuguese-style houses.",
        details: {
          accommodation: "Taj Exotica Resort & Spa Goa",
          experiences: "Fontainhas Latin Quarter walk, private art gallery escort",
          dining: "Authentic Portuguese-Goan lunch at Horse Shoe, beachside dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/fontainhas-goa.png", caption: "The colorful lanes of the Latin Quarter Fontainhas" }],
        expertNote: "Fontainhas maintains its strong Portuguese heritage, where residents still speak Portuguese.",
        highlights: ["Fontainhas Latin Quarter Walk", "Heritage Portuguese Lunch"],
        revealedRouteKeys: ["mumbai", "goa"]
      },
      {
        day: 6,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Goa - Cochin",
        title: "Fly South to Kerala",
        narrative: "Fly south to Cochin in Kerala. Check into Brunton Boatyard and enjoy a relaxing harbor sunset cruise.",
        details: {
          accommodation: "Brunton Boatyard (Sea Facing Room)",
          experiences: "Fort Kochi harbor sunset cruise, Kathakali dance performance",
          dining: "Kerala coastal seafood thali dinner",
          transport: "Private SUV & domestic flight"
        },
        images: [{ url: "/images/cochin.jpg", caption: "Sunset over Fort Kochi's historic shipping channels" }],
        expertNote: "Brunton Boatyard sits right on the site of a historic 19th-century Victorian shipyard.",
        highlights: ["Harbor Sunset Cruise", "Kathakali Performance"],
        revealedRouteKeys: ["mumbai", "goa", "cochin"]
      },
      {
        day: 7,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Cochin",
        title: "Jewish Quarter & Spice Trade",
        narrative: "Explore the historic Paradesi Synagogue, Dutch Palace, and the local spice markets of Mattancherry.",
        details: {
          accommodation: "Brunton Boatyard",
          experiences: "Paradesi Synagogue walk, Mattancherry spice bazaar tour",
          dining: "Jewish heritage lunch, Fort Kochi fusion dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Colonial-Warehouses-of-Fort-Kochi.png", caption: "Historic spice warehouses of Mattancherry" }],
        expertNote: "Mattancherry's air is filled with the scent of ginger, cardamom, and black pepper.",
        highlights: ["Jewish Quarter Walk", "Spice Bazaar Exploration"],
        revealedRouteKeys: ["mumbai", "goa", "cochin"]
      },
      {
        day: 8,
        location: "Kumarakom",
        locationKey: "kumarakom",
        meta: "Cochin - Kumarakom",
        title: "Vembanad Lake Haven",
        narrative: "Drive to Kumarakom Lake Resort. Spend a relaxing afternoon walking along the resort's private canals.",
        details: {
          accommodation: "Kumarakom Lake Resort (Heritage Pool Villa)",
          experiences: "Resort orientation, evening sunset cruise on Vembanad Lake",
          dining: "Fresh pearlspot fish dinner at Ettukettu",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/kumarakom-lake-resort.jpg", caption: "The tranquil canals of Kumarakom Lake Resort" }],
        expertNote: "The villas feature open-roofed heritage bathrooms, a traditional Keralan architectural feature.",
        highlights: ["Heritage Pool Villa Stay", "Vembanad Lake Cruise"],
        revealedRouteKeys: ["mumbai", "goa", "cochin", "kumarakom"]
      },
      {
        day: 9,
        location: "Kumarakom",
        locationKey: "kumarakom",
        meta: "Kumarakom",
        title: "Ayurvedic Relaxation",
        narrative: "Enjoy a peaceful day at the resort, featuring traditional Ayurvedic wellness treatments and lakeside relaxation.",
        details: {
          accommodation: "Kumarakom Lake Resort",
          experiences: "Resort Abhyanga massage therapy, village walk",
          dining: "Traditional Keralan thali, lakeside farewell dinner",
          transport: "None (resort relaxation)"
        },
        images: [{ url: "/images/ayurveda_wellness_1776272638098.png", caption: "Traditional Ayurvedic therapies inside the resort gardens" }],
        expertNote: "Enjoy a final coconut toddy drink at the lakeside bar during sunset.",
        highlights: ["Ayurvedic Body Massage", "Farewell Lakeshore Dinner"],
        revealedRouteKeys: ["mumbai", "goa", "cochin", "kumarakom"]
      },
      {
        day: 10,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Kumarakom - Cochin airport",
        title: "Departure",
        narrative: "Drive back to Cochin International Airport for your departure flight home.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Resort breakfast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/cochin_airport.jpg", caption: "Farewell to India" }],
        expertNote: "Check in early to secure lounge access prior to your long-haul flight.",
        highlights: ["VIP Airport Exit"],
        revealedRouteKeys: ["mumbai", "goa", "cochin", "kumarakom", "cochin"]
      }
    ]
  },
  "golden-triangle-classic": {
    id: "golden-triangle-classic",
    title: "Golden Triangle: The Imperial Heritage",
    subtitle: "A journey through the iconic heritage landmarks of Delhi, Agra, and the pink city of Jaipur.",
    duration: "9 Days / 8 Nights",
    regionsVisited: "Delhi, Agra, Jaipur",
    accommodations: "Legendary Heritage Suites & Luxury Palace Hotels",
    transfer: "Private Luxury SUV",
    heroImage: "/images/the-imperial-newdelhi.webp",
    ctaBgImage: "/images/taj-mahal.webp",
    markerKeys: ["delhi", "agra", "jaipur"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.jaipur.coords,
      LOCATIONS.delhi.coords
    ],
    accommodationsList: [
      {
        title: "The Imperial Delhi",
        desc: "An iconic colonial-era masterpiece blending Art Deco style with royal heritage.",
        image: "/images/the-imperial-newdelhi.webp"
      },
      {
        title: "The Oberoi Amarvilas, Agra",
        desc: "A stunning luxury hotel with direct, unobstructed views of the Taj Mahal from every suite.",
        image: "/images/The Oberoi Amarvilas.jpg"
      },
      {
        title: "Rambagh Palace, Jaipur",
        desc: "The former residence of the Maharaja of Jaipur, offering unparalleled royal hospitality.",
        image: "/images/Rambagh-Palace-jaipur.jpg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrival & Welcome",
        title: "Imperial Welcome",
        narrative: "Arrive at New Delhi's international airport. Enjoy private tarmac assistance and transfer to your landmark heritage hotel.",
        details: {
          accommodation: "The Imperial Delhi (Grand Heritage Suite)",
          experiences: "Private welcome orientation, historic garden walk",
          dining: "Bespoke welcome dinner at Spice Route",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "The grand entrance of The Imperial Delhi" }],
        expertNote: "Delhi is a layered historic city. Settle into the calm elegance of your hotel.",
        highlights: ["VIP Tarmac Greeting", "Colonial Heritage Suite", "Spice Route Dinner"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Old & New Delhi Tour",
        title: "Chronicles of Empires",
        narrative: "Explore the historic contrasts of Delhi. Ride a private rickshaw through Chandni Chowk and stand before Humayun's Tomb.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Curated history walk in Old Delhi, private museum access",
          dining: "Royal Mughlai lunch, fine contemporary dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Historic architecture and Mughal monuments of Old Delhi.jpg", caption: "Mughal sights of Old Delhi" }],
        expertNote: "Humayun's Tomb is the architectonic inspiration behind the Taj Mahal.",
        highlights: ["Jama Masjid Rickshaw Ride", "Humayun's Tomb Tour", "Lutyens Delhi Driving Tour"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi Art & Sufism",
        title: "Mystics & Modern Art",
        narrative: "Spend the morning at private contemporary art galleries. In the evening, witness Qawwali devotional music at Nizamuddin Dargah.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Private gallery viewing, evening Sufi devotional tour",
          dining: "Artisan lunch, private garden dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Nizamuddin Dargah shrine.jpeg", caption: "Sufi shrine of Nizamuddin Dargah" }],
        expertNote: "Devotional Qawwali music has been performed at this shrine for over seven centuries.",
        highlights: ["Private Art Gallery Access", "Sufi Qawwali Experience", "National Gallery of Modern Art"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 4,
        location: "Agra",
        locationKey: "agra",
        meta: "Delhi to Agra Drive",
        title: "The Monument of Love",
        narrative: "Drive to Agra via the Yamuna Expressway. Check into your luxury suite. View the Taj Mahal at sunset as the marble glows golden.",
        details: {
          accommodation: "The Oberoi Amarvilas (Premier Taj View Suite)",
          experiences: "Private sunset viewing of the Taj Mahal, marble inlay craft session",
          dining: "Grand Awadhi feast at Esphahan",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/taj-mahal.webp", caption: "Taj Mahal reflecting the soft light of twilight" }],
        expertNote: "We arrange a private balcony viewing away from the main tourist crowds.",
        highlights: ["Taj Mahal Sunset View", "Premium Taj View Suite", "Fine Dining at Esphahan"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 5,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra Heritage Tour",
        title: "Courts of the Mughals",
        narrative: "Visit the red sandstone Agra Fort, walking through royal chambers. Discover the delicate marble work of the Baby Taj.",
        details: {
          accommodation: "The Oberoi Amarvilas",
          experiences: "Guided Agra Fort tour, Tomb of Itmad-ud-Daulah visit",
          dining: "Fine Mughlai lunch, High Tea overlooking the Taj",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/agra-fort.jpeg", caption: "The impressive walls of Agra Fort" }],
        expertNote: "Look out from the fort's towers—this is where Emperor Shah Jahan spent his final years gazing at the Taj Mahal.",
        highlights: ["Agra Fort Royal Chambers", "Tomb of Itmad-ud-Daulah", "High Tea with Taj View"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 6,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Agra to Jaipur",
        title: "Into the Pink City",
        narrative: "Drive to Jaipur, stopping at the abandoned Mughal capital of Fatehpur Sikri. Check into the legendary Rambagh Palace.",
        details: {
          accommodation: "Rambagh Palace (Historical Suite)",
          experiences: "Fatehpur Sikri guided tour, traditional royal greeting",
          dining: "Rajasthani thali in a gilded courtyard",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Rambagh-Palace-jaipur.jpg", caption: "The beautiful facade of Rambagh Palace" }],
        expertNote: "Fatehpur Sikri is beautifully preserved, capturing the grandeur of Emperor Akbar's court.",
        highlights: ["Fatehpur Sikri Tour", "Maharajah Royal Welcome", "Gilded Courtyard Dining"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 7,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Heritage Tour",
        title: "Forts of Gold & Coral",
        narrative: "Ascend the hillside Amber Fort. In the afternoon, visit the City Palace museum and see the pink facade of Hawa Mahal.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Amber Fort tour, exclusive City Palace archives access",
          dining: "Palace lunch, cocktail at Polo Bar",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/city-palace-jaipur.webp", caption: "Courtyards inside Jaipur City Palace" }],
        expertNote: "We arrange access to the private residential quarters of the royal family inside City Palace.",
        highlights: ["Amber Fort Hill Climb", "City Palace Royal Archives", "Hawa Mahal Photography"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 8,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Craft & Culture",
        title: "Artisans of the Guilds",
        narrative: "Spend the day meeting master block-printers, gem-cutters, and painters. Discover the ancient guilds that shape local design.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Private block-printing class, gem market curation walk",
          dining: "Bespoke estate garden lunch, royal banqueting dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Miniature painting workshops of Jaipur.webp", caption: "Block printing artisans of Jaipur" }],
        expertNote: "Jaipur is the gemstone capital of India. Meet a heritage jeweller for a private viewing.",
        highlights: ["Block Printing Workshop", "Gem Curation Tour", "Royal Falconry Session"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 9,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Jaipur to Delhi Airport",
        title: "Farewell Journey",
        narrative: "Enjoy a final palace breakfast before being chauffeured back to Delhi International Airport for your departure flight.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Palace breakfast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/airport.webp", caption: "Departure from Delhi Airport" }],
        expertNote: "We recommend scheduling flights departing in the late afternoon or evening.",
        highlights: ["VIP Airport Exit Assistance", "Scenic Highway Journey"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "delhi"]
      }
    ]
  },
  "cultural-wildlife": {
    id: "cultural-wildlife",
    title: "Cultural & Wildlife Heritage",
    subtitle: "A majestic fusion of Mughal architecture, royal palaces, and tiger tracking in Ranthambore.",
    duration: "12 Days / 11 Nights",
    regionsVisited: "Delhi, Agra, Ranthambore, Jaipur",
    accommodations: "Heritage Palaces & Luxury Wilderness Lodges",
    transfer: "Private SUV & 4x4 Safari Jeeps",
    heroImage: "/images/tiger_safari_1776272603448.png",
    ctaBgImage: "/images/wildlife.jpg",
    markerKeys: ["delhi", "agra", "ranthambore", "jaipur"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.ranthambore.coords,
      LOCATIONS.jaipur.coords,
      LOCATIONS.delhi.coords
    ],
    accommodationsList: [
      {
        title: "The Imperial Delhi",
        desc: "Timeless colonial heritage combined with classical luxury.",
        image: "/images/the-imperial-newdelhi.webp"
      },
      {
        title: "The Oberoi Amarvilas, Agra",
        desc: "Positioned right next to the Taj Mahal, with panoramic monument views.",
        image: "/images/The Oberoi Amarvilas.jpg"
      },
      {
        title: "The Oberoi Vanyavilas, Ranthambore",
        desc: "A luxury jungle lodge featuring opulent tents, set next to the tiger sanctuary.",
        image: "/images/tiger_safari_1776272603448.png"
      },
      {
        title: "Rambagh Palace, Jaipur",
        desc: "A glorious palace estate once home to Jaipur's royalty.",
        image: "/images/Rambagh-Palace-jaipur.jpg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrival & Welcome",
        title: "Capital Arrival",
        narrative: "Arrive in Delhi. Enjoy private airport transfer to your landmark heritage hotel in the heart of Lutyens' Delhi.",
        details: {
          accommodation: "The Imperial Delhi (Grand Heritage Suite)",
          experiences: "Airport welcome greeting, private hotel orientation",
          dining: "Heritage dining at Spice Route",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "The historic Imperial Delhi" }],
        expertNote: "Take this first evening to relax after your international flight.",
        highlights: ["VIP Airport Fast-track", "Heritage Palace Suite"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Old & New Delhi Tour",
        title: "Dynasties of Delhi",
        narrative: "Explore the ancient and modern capitals. Visit Chandni Chowk by rickshaw, then tour Humayun's Tomb and Qutub Minar.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Guided heritage sights walk, museum access",
          dining: "Classic Mughlai lunch, modern Indian dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Historic architecture and Mughal monuments of Old Delhi.jpg", caption: "Old Delhi Mughal structures" }],
        expertNote: "Humayun's Tomb is a UNESCO World Heritage site showcasing Persian architectural influences.",
        highlights: ["Chandni Chowk Rickshaw", "Humayun's Tomb", "Qutub Minar"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi Art & Sufism",
        title: "Sufi Vocals & Art Scenes",
        narrative: "Discover contemporary galleries in the morning. Witness soul-stirring live Qawwali vocals at Nizamuddin Dargah in the evening.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Private art gallery tour, evening Sufi devotional walk",
          dining: "Bespoke street-food lunch, garden estate dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Nizamuddin Dargah shrine.jpeg", caption: "Live Qawwali at Nizamuddin Dargah" }],
        expertNote: "The devotional singing provides a deep window into Delhi's living spiritual tradition.",
        highlights: ["Art Gallery Curation", "Sufi Devotional Music", "National Gallery of Modern Art"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 4,
        location: "Agra",
        locationKey: "agra",
        meta: "Delhi to Agra Drive",
        title: "The Taj at Sunset",
        narrative: "Drive to Agra. Check into Oberoi Amarvilas. Stand before the Taj Mahal at sunset, watching the white marble change color.",
        details: {
          accommodation: "The Oberoi Amarvilas (Premier Taj View Suite)",
          experiences: "Private Taj Mahal sunset viewing, artisan marble workshop",
          dining: "Awadhi thali dinner at Esphahan",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/taj-mahal.webp", caption: "The Taj Mahal glowing at sunset" }],
        expertNote: "Twilight is the most beautiful time to see the Taj Mahal, when the crowds begin to fade.",
        highlights: ["Taj Mahal Sunset Walk", "Oberoi Taj View Suite", "Inlaid Marble Craft Art"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 5,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra Heritage Tour",
        title: "Mughal Citadels",
        narrative: "Visit Agra Fort and explore its grand palaces. In the afternoon, discover the delicate carvings of the Tomb of Itmad-ud-Daulah.",
        details: {
          accommodation: "The Oberoi Amarvilas",
          experiences: "Agra Fort guided tour, Baby Taj visit",
          dining: "Fine Mughlai lunch, palace high tea",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/agra-fort.jpeg", caption: "The red sandstone Agra Fort" }],
        expertNote: "Look out from the fort's Jasmine Tower, where Emperor Shah Jahan gazed at the Taj Mahal.",
        highlights: ["Agra Fort Palace Walk", "Tomb of Itmad-ud-Daulah", "High Tea over the Taj"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 6,
        location: "Ranthambore",
        locationKey: "ranthambore",
        meta: "Agra to Ranthambore",
        title: "Into Tiger Country",
        narrative: "Travel to Ranthambore, stopping at Fatehpur Sikri. Settle into your luxury jungle outpost tent at Oberoi Vanyavilas.",
        details: {
          accommodation: "The Oberoi Vanyavilas (Luxury Safari Tent)",
          experiences: "Fatehpur Sikri tour, wilderness camp orientation",
          dining: "Organic farm-to-table lunch, fireside dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/tiger_safari_1776272603448.png", caption: "Luxury tent at Oberoi Vanyavilas" }],
        expertNote: "Ranthambore was the private hunting reserve of the Maharajah of Jaipur.",
        highlights: ["Fatehpur Sikri Guided Tour", "Luxury Safari Tent Stay", "Jungle Campfire Dining"],
        revealedRouteKeys: ["delhi", "agra", "ranthambore"]
      },
      {
        day: 7,
        location: "Ranthambore",
        locationKey: "ranthambore",
        meta: "Tiger Safaris",
        title: "Track of the Bengal Tiger",
        narrative: "Embark on dawn and afternoon 4x4 safaris. Track the Bengal Tiger, leopards, sloth bears, and rich birdlife in the forest.",
        details: {
          accommodation: "The Oberoi Vanyavilas",
          experiences: "Morning & afternoon tiger tracking safaris",
          dining: "Jungle breakfast picnic, gourmet lodge dinner",
          transport: "Safari open 4x4 jeep"
        },
        images: [{ url: "/images/peacock-bandhavgarh.jpg", caption: "Forest wildlife of Ranthambore" }],
        expertNote: "Look out for the alarm calls of langurs and spotted deer—they tell us a tiger is nearby.",
        highlights: ["Dawn Tiger Safari", "Afternoon Forest Drive", "Lodge Spa Treatment"],
        revealedRouteKeys: ["delhi", "agra", "ranthambore"]
      },
      {
        day: 8,
        location: "Ranthambore",
        locationKey: "ranthambore",
        meta: "Fortress Hike & Forest Safari",
        title: "The Ruins of the Jungle Fort",
        narrative: "Hike up to the 10th-century Ranthambore Fort overlooking the park. In the afternoon, enjoy another deep forest safari.",
        details: {
          accommodation: "The Oberoi Vanyavilas",
          experiences: "Ranthambore Fort guided hike, afternoon jungle safari",
          dining: "Fresh organic lodge lunch, lanterns bush dinner",
          transport: "Private SUV & safari jeep"
        },
        images: [{ url: "/images/wildlife.jpg", caption: "Views from the historic Ranthambore Fort" }],
        expertNote: "Ranthambore Fort offers spectacular, panoramic views of the entire jungle reserve below.",
        highlights: ["Ranthambore Fort Hike", "Jungle Safari Expedition", "Bush Dining under Lanterns"],
        revealedRouteKeys: ["delhi", "agra", "ranthambore"]
      },
      {
        day: 9,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Ranthambore to Jaipur",
        title: "Transition to Royal Palace",
        narrative: "Drive to Jaipur. Settle into the legendary Rambagh Palace. Walk through its lawns and watch the peacock displays.",
        details: {
          accommodation: "Rambagh Palace (Historical Suite)",
          experiences: "Palace heritage walk, royal welcome",
          dining: "Traditional Rajasthani thali at Suvarna Mahal",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Rambagh-Palace-jaipur.jpg", caption: "Rambagh Palace gardens" }],
        expertNote: "Suvarna Mahal sits inside the former royal ballroom under crystal chandeliers.",
        highlights: ["Rambagh Palace Rest", "Royal Ballroom Feast", "Maharajah Palace Gardens"],
        revealedRouteKeys: ["delhi", "agra", "ranthambore", "jaipur"]
      },
      {
        day: 10,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Sights Tour",
        title: "The Royal Hill Forts",
        narrative: "Ascend Amber Fort. Visit the Hawa Mahal, the City Palace museum, and the stone sundial of Jantar Mantar.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Amber Fort tour, City Palace private archives access",
          dining: "Palace lunch, cocktail at Polo Bar",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/hawamahal.jpg", caption: "Hawa Mahal facade" }],
        expertNote: "Our guests receive exclusive access to the royal family's private chambers.",
        highlights: ["Amber Fort Private Access", "City Palace Tour", "Hawa Mahal Visit"],
        revealedRouteKeys: ["delhi", "agra", "ranthambore", "jaipur"]
      },
      {
        day: 11,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Craft & Culture",
        title: "Artisans of the Pink City",
        narrative: "Meet block-printers, gem-cutters, and painters. Discover how the ancient guilds shape modern fashion.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Private block-printing workshop, gem market tour",
          dining: "Bespoke garden lunch, royal banqueting dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Miniature painting workshops of Jaipur.webp", caption: "Traditional block-printing artisan" }],
        expertNote: "Jaipur is the gemstone capital of the world. Meet a master cutter for a private demonstration.",
        highlights: ["Block Printing Class", "Gem Market Curation", "Royal Falconry Session"],
        revealedRouteKeys: ["delhi", "agra", "ranthambore", "jaipur"]
      },
      {
        day: 12,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Jaipur to Delhi Airport",
        title: "Departure",
        narrative: "Enjoy your final palace breakfast. Transfer back to Delhi International Airport for your departure flight home.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Palace breakfast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/airport.webp", caption: "Farewell to India" }],
        expertNote: "Take a copy of your tiger sighting photographs to show your friends at home.",
        highlights: ["VIP Airport Exit", "Scenic Countryside Drive"],
        revealedRouteKeys: ["delhi", "agra", "ranthambore", "jaipur", "delhi"]
      }
    ]
  },
  "spiritual-culture": {
    id: "spiritual-culture",
    title: "Spiritual India: Ganges & Royal Palaces",
    subtitle: "A profound journey combining the sacred river Ganges in Varanasi with the royal heritage of Jaipur and Agra.",
    duration: "11 Days / 10 Nights",
    regionsVisited: "Delhi, Varanasi, Jaipur, Agra",
    accommodations: "Legendary Palaces & Luxury Taj-View Suites",
    transfer: "Domestic Flights & Private Chauffeured SUV",
    heroImage: "/images/varanasi_ghats_1776272579374.png",
    ctaBgImage: "/images/boat-ride-varanasi.webp",
    markerKeys: ["delhi", "varanasi", "jaipur", "agra"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.varanasi.coords,
      LOCATIONS.jaipur.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.delhi.coords
    ],
    accommodationsList: [
      {
        title: "The Imperial Delhi",
        desc: "An elegant Victorian-style colonial heritage landmark in New Delhi.",
        image: "/images/the-imperial-newdelhi.webp"
      },
      {
        title: "Taj Nadesar Palace, Varanasi",
        desc: "A boutique palace hotel set inside historic gardens, once hosting royal sovereigns.",
        image: "/images/Taj_Nadesar_Palace.webp"
      },
      {
        title: "Rambagh Palace, Jaipur",
        desc: "The glorious heritage palace of the Maharaja of Jaipur.",
        image: "/images/Rambagh-Palace-jaipur.jpg"
      },
      {
        title: "The Oberoi Amarvilas, Agra",
        desc: "Stunning luxury hotel featuring direct monument views from every room.",
        image: "/images/The Oberoi Amarvilas.jpg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrival & Welcome",
        title: "Imperial Greeting",
        narrative: "Arrive in Delhi. Enjoy private tarmac assistance and transfer to your landmark heritage hotel in the capital.",
        details: {
          accommodation: "The Imperial Delhi (Grand Heritage Suite)",
          experiences: "VIP airport transfer, private welcome briefing",
          dining: "Welcome dinner at Spice Route",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "Arriving at The Imperial Delhi" }],
        expertNote: "Rest well tonight before starting your spiritual and cultural journey.",
        highlights: ["VIP Airport Fast-track", "Heritage Suite Stay", "Spice Route Dinner"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi Tour",
        title: "Imperial Capitals",
        narrative: "Explore the historical treasures of Delhi, from Chandni Chowk by rickshaw to Humayun's Tomb and Qutub Minar.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Guided heritage sites walk, museum access",
          dining: "Mughlai lunch thali, fine contemporary dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Historic architecture and Mughal monuments of Old Delhi.jpg", caption: "Mughal monuments of Delhi" }],
        expertNote: "Humayun's Tomb is the architectonic precursor to the Taj Mahal.",
        highlights: ["Old Delhi Rickshaw", "Humayun's Tomb Tour", "Lutyens Delhi Driving Tour"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi Art & Sufism",
        title: "Devotional Sufi Vocals",
        narrative: "Spend the day exploring private art galleries. In the evening, witness Qawwali devotional music at Nizamuddin Dargah.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Private gallery viewing, evening Sufi devotional tour",
          dining: "Artisan lunch, private garden dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Nizamuddin Dargah shrine.jpeg", caption: "Qawwali vocals at Nizamuddin" }],
        expertNote: "Devotional Qawwali music has been performed at Nizamuddin for over 700 years.",
        highlights: ["Private Art Gallery Curation", "Sufi Qawwali Experience", "National Gallery of Modern Art"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 4,
        location: "Varanasi",
        locationKey: "varanasi",
        meta: "Fly to Varanasi",
        title: "The Holy River & Ganga Aarti",
        narrative: "Board a domestic flight to Varanasi. Check into Taj Nadesar Palace. At dusk, witness the Ganga Aarti rituals from a private boat.",
        details: {
          accommodation: "Taj Nadesar Palace (Royal Suite)",
          experiences: "Flight transition, private evening Ganga Aarti boat cruise",
          dining: "Satvik temple dinner, heritage cuisine thali",
          transport: "Private SUV & domestic flight"
        },
        images: [{ url: "/images/dashashwamedh-ghat-evening-ganga-aarti.jpg", caption: "Ganga Aarti prayers along the river" }],
        expertNote: "The Ganga Aarti ceremony is a powerful ritual of fire and incense dedicated to the river Ganges.",
        highlights: ["Ganga Aarti Boat Cruise", "Taj Nadesar Palace Stay", "Satvik Vegetarian Dining"],
        revealedRouteKeys: ["delhi", "varanasi"]
      },
      {
        day: 5,
        location: "Varanasi",
        locationKey: "varanasi",
        meta: "Varanasi Tour",
        title: "Dawn on the Ganges",
        narrative: "Take a quiet dawn boat cruise on the Ganges, watching pilgrims bathe. Later, explore Sarnath and the city's ancient alleys.",
        details: {
          accommodation: "Taj Nadesar Palace",
          experiences: "Dawn Ganges boat cruise, Sarnath Buddhist site tour, heritage walk",
          dining: "Lakeside palace lunch, gourmet temple tasting dinner",
          transport: "Private luxury SUV & boat"
        },
        images: [{ url: "/images/boat-ride-varanasi.webp", caption: "Dawn prayers on the holy river" }],
        expertNote: "Sarnath is where Lord Buddha gave his first sermon after achieving enlightenment.",
        highlights: ["Dawn Ganges Cruise", "Sarnath Stupa Tour", "Ancient Alleys Exploration"],
        revealedRouteKeys: ["delhi", "varanasi"]
      },
      {
        day: 6,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Fly to Jaipur",
        title: "Into the Pink Palace",
        narrative: "Fly from Varanasi to Jaipur. Settle into the legendary Rambagh Palace. Enjoy a royal carriage welcome.",
        details: {
          accommodation: "Rambagh Palace (Historical Suite)",
          experiences: "Flight transition, royal horse carriage greeting",
          dining: "Rajasthani palace thali",
          transport: "Private SUV & flight"
        },
        images: [{ url: "/images/Rambagh-Palace-jaipur.jpg", caption: "Rambagh Palace facade" }],
        expertNote: "Look out for the elegant peacocks that roam the palace grounds.",
        highlights: ["Flight to Rajasthan", "Royal Carriage Greeting", "Rambagh Palace Rest"],
        revealedRouteKeys: ["delhi", "varanasi", "jaipur"]
      },
      {
        day: 7,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Heritage Tour",
        title: "Amber Fort & Royal Archives",
        narrative: "Ascend Amber Fort in the morning. Visit the City Palace and marvel at the pink sandstone walls of Hawa Mahal.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Amber Fort private tour, exclusive City Palace archives access",
          dining: "Palace courtyard lunch, fine dining dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/city-palace-jaipur.webp", caption: "Jaipur City Palace courtyards" }],
        expertNote: "The Sheesh Mahal inside Amber Fort is covered in thousands of hand-cut mirrors.",
        highlights: ["Amber Fort Hill Climb", "City Palace Royal Access", "Hawa Mahal Tour"],
        revealedRouteKeys: ["delhi", "varanasi", "jaipur"]
      },
      {
        day: 8,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Craft & Culture",
        title: "Artisans of the Guilds",
        narrative: "Meet block-printers, gem-cutters, and painters. Discover how the ancient guilds shape modern fashion.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Private block-printing class, gem market tour",
          dining: "Bespoke garden lunch, royal banqueting dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Miniature painting workshops of Jaipur.webp", caption: "Traditional block-printing artisan" }],
        expertNote: "Jaipur is the gemstone capital of the world. Meet a master cutter for a private demonstration.",
        highlights: ["Block Printing Class", "Gem Market Curation", "Royal Falconry Session"],
        revealedRouteKeys: ["delhi", "varanasi", "jaipur"]
      },
      {
        day: 9,
        location: "Agra",
        locationKey: "agra",
        meta: "Jaipur to Agra Drive",
        title: "The Yamuna & Taj at Sunset",
        narrative: "Drive to Agra, stopping at Fatehpur Sikri. Check into Oberoi Amarvilas. Stand before the Taj Mahal at sunset.",
        details: {
          accommodation: "The Oberoi Amarvilas (Premier Taj View Suite)",
          experiences: "Fatehpur Sikri guided tour, private Taj Mahal sunset tour",
          dining: "Awadhi thali dinner at Esphahan",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/taj-mahal.webp", caption: "Taj Mahal view from the suite" }],
        expertNote: "Twilight is the most beautiful time to see the Taj Mahal, when the crowds begin to fade.",
        highlights: ["Fatehpur Sikri Guided Tour", "Taj Mahal Sunset Walk", "Oberoi Taj View Suite"],
        revealedRouteKeys: ["delhi", "varanasi", "jaipur", "agra"]
      },
      {
        day: 10,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra Heritage Tour",
        title: "Mughal Forts & Baby Taj",
        narrative: "Visit Agra Fort and explore its grand palaces. In the afternoon, discover the delicate carvings of the Tomb of Itmad-ud-Daulah.",
        details: {
          accommodation: "The Oberoi Amarvilas",
          experiences: "Agra Fort guided tour, Baby Taj visit",
          dining: "Fine Mughlai lunch, palace high tea",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/agra-fort.jpeg", caption: "The red sandstone Agra Fort" }],
        expertNote: "Look out from the fort's Jasmine Tower, where Emperor Shah Jahan gazed at the Taj Mahal.",
        highlights: ["Agra Fort Palace Walk", "Tomb of Itmad-ud-Daulah", "High Tea over the Taj"],
        revealedRouteKeys: ["delhi", "varanasi", "jaipur", "agra"]
      },
      {
        day: 11,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Agra to Delhi Airport",
        title: "Departure",
        narrative: "Enjoy your final palace breakfast. Transfer back to Delhi International Airport for your departure flight home.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Palace breakfast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/airport.webp", caption: "Farewell to India" }],
        expertNote: "Take a copy of your tiger sighting photographs to show your friends at home.",
        highlights: ["VIP Airport Exit", "Scenic Countryside Drive"],
        revealedRouteKeys: ["delhi", "varanasi", "jaipur", "agra", "delhi"]
      }
    ]
  },
  "palace-spiritual": {
    id: "palace-spiritual",
    title: "Monuments of Soul: Sacred Temples & Royal Palaces",
    subtitle: "An immersive journey connecting the erotic carvings of Khajuraho, Varanasi's sacred river, and the royal heritage of Jaipur and Agra.",
    duration: "13 Days / 12 Nights",
    regionsVisited: "Delhi, Khajuraho, Varanasi, Jaipur, Agra",
    accommodations: "Legendary Palace Hotels & Luxury Heritage Suites",
    transfer: "Domestic Flights & Private Chauffeured SUV",
    heroImage: "/images/Intricately carved spires of the Khajuraho temples.jpeg",
    ctaBgImage: "/images/varanasi_ghats_1776272579374.png",
    markerKeys: ["delhi", "khajuraho", "varanasi", "jaipur", "agra"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.khajuraho.coords,
      LOCATIONS.varanasi.coords,
      LOCATIONS.jaipur.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.delhi.coords
    ],
    accommodationsList: [
      {
        title: "The Imperial Delhi",
        desc: "An elegant Victorian-style colonial heritage landmark in New Delhi.",
        image: "/images/the-imperial-newdelhi.webp"
      },
      {
        title: "The Lalit Temple View, Khajuraho",
        desc: "Overlooking the Western Group of temples, combining comfort with heritage.",
        image: "/images/Intricately carved spires of the Khajuraho temples.jpeg"
      },
      {
        title: "Taj Nadesar Palace, Varanasi",
        desc: "A boutique palace hotel set inside historic gardens, once hosting royal sovereigns.",
        image: "/images/Taj_Nadesar_Palace.webp"
      },
      {
        title: "Rambagh Palace, Jaipur",
        desc: "The glorious heritage palace of the Maharaja of Jaipur.",
        image: "/images/Rambagh-Palace-jaipur.jpg"
      },
      {
        title: "The Oberoi Amarvilas, Agra",
        desc: "Stunning luxury hotel featuring direct monument views from every room.",
        image: "/images/The Oberoi Amarvilas.jpg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrival & Welcome",
        title: "Imperial Greeting",
        narrative: "Arrive in Delhi. Enjoy private tarmac assistance and transfer to your landmark heritage hotel in the capital.",
        details: {
          accommodation: "The Imperial Delhi (Grand Heritage Suite)",
          experiences: "VIP airport transfer, private welcome briefing",
          dining: "Welcome dinner at Spice Route",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "Arriving at The Imperial Delhi" }],
        expertNote: "Rest well tonight before starting your spiritual and cultural journey.",
        highlights: ["VIP Airport Fast-track", "Heritage Suite Stay", "Spice Route Dinner"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi Tour",
        title: "Imperial Capitals",
        narrative: "Explore the historical treasures of Delhi, from Chandni Chowk by rickshaw to Humayun's Tomb and Qutub Minar.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Guided heritage sites walk, museum access",
          dining: "Mughlai lunch thali, fine contemporary dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Historic architecture and Mughal monuments of Old Delhi.jpg", caption: "Mughal monuments of Delhi" }],
        expertNote: "Humayun's Tomb is the architectonic precursor to the Taj Mahal.",
        highlights: ["Old Delhi Rickshaw", "Humayun's Tomb Tour", "Lutyens Delhi Driving Tour"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi Art & Sufism",
        title: "Devotional Sufi Vocals",
        narrative: "Spend the day exploring private art galleries. In the evening, witness Qawwali devotional music at Nizamuddin Dargah.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Private gallery viewing, evening Sufi devotional tour",
          dining: "Artisan lunch, private garden dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Nizamuddin Dargah shrine.jpeg", caption: "Qawwali vocals at Nizamuddin" }],
        expertNote: "Devotional Qawwali music has been performed at Nizamuddin for over 700 years.",
        highlights: ["Private Art Gallery Curation", "Sufi Qawwali Experience", "National Gallery of Modern Art"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 4,
        location: "Khajuraho",
        locationKey: "khajuraho",
        meta: "Fly to Khajuraho",
        title: "Spires of the Temple Guilds",
        narrative: "Fly to Khajuraho. Check into your hotel. Explore the famous Western Group of Temples, showcasing medieval stone carvings.",
        details: {
          accommodation: "The Lalit Temple View (Heritage Room)",
          experiences: "Flight transition, guided Western Group of Temples tour",
          dining: "Bundelkhandi specialty thali",
          transport: "Private SUV & domestic flight"
        },
        images: [{ url: "/images/Intricately carved spires of the Khajuraho temples.jpeg", caption: "The spires of Khajuraho temples" }],
        expertNote: "The carvings capture all aspects of 10th-century medieval Indian life, spiritual and sensual.",
        highlights: ["Western Group Temples", "Bundelkhandi Heritage Dinner", "Temple View Room"],
        revealedRouteKeys: ["delhi", "khajuraho"]
      },
      {
        day: 5,
        location: "Khajuraho",
        locationKey: "khajuraho",
        meta: "Khajuraho Rural Life",
        title: "Village Life & Eastern Temples",
        narrative: "Discover the Jain temples of the Eastern Group. Spend the afternoon visiting local rural farming communities around the temples.",
        details: {
          accommodation: "The Lalit Temple View",
          experiences: "Eastern Group of Temples tour, rural village walking tour",
          dining: "Organic farm lunch, garden dinner at hotel",
          transport: "Private luxury SUV & walking"
        },
        images: [{ url: "/images/Khajuraho Rural Life.png", caption: "Artisans in rural Khajuraho" }],
        expertNote: "Rural Bundelkhand has changed very little over the decades. The hospitality is warm and authentic.",
        highlights: ["Jain Eastern Temples", "Rural Village Walk", "Organic Farm Lunch"],
        revealedRouteKeys: ["delhi", "khajuraho"]
      },
      {
        day: 6,
        location: "Varanasi",
        locationKey: "varanasi",
        meta: "Fly to Varanasi",
        title: "The Holy River & Ganga Aarti",
        narrative: "Board a domestic flight to Varanasi. Check into Taj Nadesar Palace. At dusk, witness the Ganga Aarti rituals from a private boat.",
        details: {
          accommodation: "Taj Nadesar Palace (Royal Suite)",
          experiences: "Flight transition, private evening Ganga Aarti boat cruise",
          dining: "Satvik temple dinner, heritage cuisine thali",
          transport: "Private SUV & domestic flight"
        },
        images: [{ url: "/images/dashashwamedh-ghat-evening-ganga-aarti.jpg", caption: "Ganga Aarti prayers along the river" }],
        expertNote: "The Ganga Aarti ceremony is a powerful ritual of fire and incense dedicated to the river Ganges.",
        highlights: ["Ganga Aarti Boat Cruise", "Taj Nadesar Palace Stay", "Satvik Vegetarian Dining"],
        revealedRouteKeys: ["delhi", "khajuraho", "varanasi"]
      },
      {
        day: 7,
        location: "Varanasi",
        locationKey: "varanasi",
        meta: "Varanasi Tour",
        title: "Dawn on the Ganges",
        narrative: "Take a quiet dawn boat cruise on the Ganges, watching pilgrims bathe. Later, explore Sarnath and the city's ancient alleys.",
        details: {
          accommodation: "Taj Nadesar Palace",
          experiences: "Dawn Ganges boat cruise, Sarnath Buddhist site tour, heritage walk",
          dining: "Lakeside palace lunch, gourmet temple tasting dinner",
          transport: "Private luxury SUV & boat"
        },
        images: [{ url: "/images/boat-ride-varanasi.webp", caption: "Dawn prayers on the holy river" }],
        expertNote: "Sarnath is where Lord Buddha gave his first sermon after achieving enlightenment.",
        highlights: ["Dawn Ganges Cruise", "Sarnath Stupa Tour", "Ancient Alleys Exploration"],
        revealedRouteKeys: ["delhi", "khajuraho", "varanasi"]
      },
      {
        day: 8,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Fly to Jaipur",
        title: "Into the Pink Palace",
        narrative: "Fly from Varanasi to Jaipur. Settle into the legendary Rambagh Palace. Enjoy a royal carriage welcome.",
        details: {
          accommodation: "Rambagh Palace (Historical Suite)",
          experiences: "Flight transition, royal horse carriage greeting",
          dining: "Rajasthani palace thali",
          transport: "Private SUV & flight"
        },
        images: [{ url: "/images/Rambagh-Palace-jaipur.jpg", caption: "Rambagh Palace facade" }],
        expertNote: "Look out for the elegant peacocks that roam the palace grounds.",
        highlights: ["Flight to Rajasthan", "Royal Carriage Greeting", "Rambagh Palace Rest"],
        revealedRouteKeys: ["delhi", "khajuraho", "varanasi", "jaipur"]
      },
      {
        day: 9,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Heritage Tour",
        title: "Amber Fort & Royal Archives",
        narrative: "Ascend Amber Fort in the morning. Visit the City Palace and marvel at the pink sandstone walls of Hawa Mahal.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Amber Fort private tour, exclusive City Palace archives access",
          dining: "Palace courtyard lunch, fine dining dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/city-palace-jaipur.webp", caption: "Jaipur City Palace courtyards" }],
        expertNote: "The Sheesh Mahal inside Amber Fort is covered in thousands of hand-cut mirrors.",
        highlights: ["Amber Fort Hill Climb", "City Palace Royal Access", "Hawa Mahal Tour"],
        revealedRouteKeys: ["delhi", "khajuraho", "varanasi", "jaipur"]
      },
      {
        day: 10,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Craft & Culture",
        title: "Artisans of the Guilds",
        narrative: "Meet block-printers, gem-cutters, and painters. Discover how the ancient guilds shape modern fashion.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Private block-printing class, gem market tour",
          dining: "Bespoke garden lunch, royal banqueting dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Miniature painting workshops of Jaipur.webp", caption: "Traditional block-printing artisan" }],
        expertNote: "Jaipur is the gemstone capital of the world. Meet a master cutter for a private demonstration.",
        highlights: ["Block Printing Class", "Gem Market Curation", "Royal Falconry Session"],
        revealedRouteKeys: ["delhi", "khajuraho", "varanasi", "jaipur"]
      },
      {
        day: 11,
        location: "Agra",
        locationKey: "agra",
        meta: "Jaipur to Agra Drive",
        title: "The Yamuna & Taj at Sunset",
        narrative: "Drive to Agra, stopping at Fatehpur Sikri. Check into Oberoi Amarvilas. Stand before the Taj Mahal at sunset.",
        details: {
          accommodation: "The Oberoi Amarvilas (Premier Taj View Suite)",
          experiences: "Fatehpur Sikri guided tour, private Taj Mahal sunset tour",
          dining: "Awadhi thali dinner at Esphahan",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/taj-mahal.webp", caption: "Taj Mahal view from the suite" }],
        expertNote: "Twilight is the most beautiful time to see the Taj Mahal, when the crowds begin to fade.",
        highlights: ["Fatehpur Sikri Guided Tour", "Taj Mahal Sunset Walk", "Oberoi Taj View Suite"],
        revealedRouteKeys: ["delhi", "khajuraho", "varanasi", "jaipur", "agra"]
      },
      {
        day: 12,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra Heritage Tour",
        title: "Mughal Forts & Baby Taj",
        narrative: "Visit Agra Fort and explore its grand palaces. In the afternoon, discover the delicate carvings of the Tomb of Itmad-ud-Daulah.",
        details: {
          accommodation: "The Oberoi Amarvilas",
          experiences: "Agra Fort guided tour, Baby Taj visit",
          dining: "Fine Mughlai lunch, palace high tea",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/agra-fort.jpeg", caption: "The red sandstone Agra Fort" }],
        expertNote: "Look out from the fort's Jasmine Tower, where Emperor Shah Jahan gazed at the Taj Mahal.",
        highlights: ["Agra Fort Palace Walk", "Tomb of Itmad-ud-Daulah", "High Tea over the Taj"],
        revealedRouteKeys: ["delhi", "khajuraho", "varanasi", "jaipur", "agra"]
      },
      {
        day: 13,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Agra to Delhi Airport",
        title: "Departure",
        narrative: "Enjoy your final palace breakfast. Transfer back to Delhi International Airport for your departure flight home.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Palace breakfast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/airport.webp", caption: "Farewell to India" }],
        expertNote: "Take a copy of your tiger sighting photographs to show your friends at home.",
        highlights: ["VIP Airport Exit", "Scenic Countryside Drive"],
        revealedRouteKeys: ["delhi", "khajuraho", "varanasi", "jaipur", "agra", "delhi"]
      }
    ]
  },
  "palace-culture": {
    id: "palace-culture",
    title: "Heritage & Horizons: Royal Estates & Lake Palaces",
    subtitle: "A journey through the majestic palaces of Jaipur and Udaipur, stopping at the exclusive estate of Shahpura Bagh.",
    duration: "13 Days / 12 Nights",
    regionsVisited: "Delhi, Agra, Jaipur, Shahpura Bagh, Udaipur",
    accommodations: "Legendary Heritage Suites & Luxury Palace Resorts",
    transfer: "Private SUV & Domestic Flight",
    heroImage: "/images/taj-lake-palace-udaipur.jpeg",
    ctaBgImage: "/images/courtyards-udaipur-city-palace.jpg",
    markerKeys: ["delhi", "agra", "jaipur", "shahpurabagh", "udaipur"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.jaipur.coords,
      LOCATIONS.shahpurabagh.coords,
      LOCATIONS.udaipur.coords,
      LOCATIONS.delhi.coords
    ],
    accommodationsList: [
      {
        title: "The Imperial Delhi",
        desc: "An iconic colonial-era heritage hotel, offering unparalleled service and design.",
        image: "/images/the-imperial-newdelhi.webp"
      },
      {
        title: "The Oberoi Amarvilas, Agra",
        desc: "A stunning luxury hotel with direct, unobstructed views of the Taj Mahal from every suite.",
        image: "/images/The Oberoi Amarvilas.jpg"
      },
      {
        title: "Rambagh Palace, Jaipur",
        desc: "The former residence of the Maharaja of Jaipur, offering royal palace suites.",
        image: "/images/Rambagh-Palace-jaipur.jpg"
      },
      {
        title: "Shahpura Bagh Estate",
        desc: "A stunning 45-acre heritage property with serene private lakes and luxury villas.",
        image: "/images/rajasthan_palace_exterior_1776272664878.png"
      },
      {
        title: "Taj Lake Palace, Udaipur",
        desc: "A legendary white marble palace rising from the center of Lake Pichola.",
        image: "/images/taj-lake-palace-udaipur.jpeg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrival & Welcome",
        title: "Imperial Beginnings",
        narrative: "Arrive at New Delhi's international airport. Enjoy private tarmac assistance and transfer to your landmark heritage hotel.",
        details: {
          accommodation: "The Imperial Delhi (Grand Heritage Suite)",
          experiences: "Private welcome orientation, historic garden walk",
          dining: "Bespoke welcome dinner at Spice Route",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "The grand entrance of The Imperial Delhi" }],
        expertNote: "Delhi is a layered historic city. Settle into the calm elegance of your hotel.",
        highlights: ["VIP Tarmac Greeting", "Colonial Heritage Suite", "Spice Route Dinner"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Old & New Delhi Tour",
        title: "Chronicles of Empires",
        narrative: "Explore the historic contrasts of Delhi. Ride a private rickshaw through Chandni Chowk and stand before Humayun's Tomb.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Curated history walk in Old Delhi, private museum access",
          dining: "Royal Mughlai lunch, fine contemporary dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Historic architecture and Mughal monuments of Old Delhi.jpg", caption: "Mughal sights of Old Delhi" }],
        expertNote: "Humayun's Tomb is the architectonic inspiration behind the Taj Mahal.",
        highlights: ["Jama Masjid Rickshaw Ride", "Humayun's Tomb Tour", "Lutyens Delhi Driving Tour"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi Art & Sufism",
        title: "Mystics & Modern Art",
        narrative: "Spend the morning at private contemporary art galleries. In the evening, witness Qawwali devotional music at Nizamuddin Dargah.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Private gallery viewing, evening Sufi devotional tour",
          dining: "Artisan lunch, private garden dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Nizamuddin Dargah shrine.jpeg", caption: "Sufi shrine of Nizamuddin Dargah" }],
        expertNote: "Devotional Qawwali music has been performed at this shrine for over seven centuries.",
        highlights: ["Private Art Gallery Access", "Sufi Qawwali Experience", "National Gallery of Modern Art"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 4,
        location: "Agra",
        locationKey: "agra",
        meta: "Delhi to Agra Drive",
        title: "The Monument of Love",
        narrative: "Drive to Agra via the Yamuna Expressway. Check into your luxury suite. View the Taj Mahal at sunset as the marble glows golden.",
        details: {
          accommodation: "The Oberoi Amarvilas (Premier Taj View Suite)",
          experiences: "Private sunset viewing of the Taj Mahal, marble inlay craft session",
          dining: "Grand Awadhi feast at Esphahan",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/taj-mahal.webp", caption: "Taj Mahal reflecting the soft light of twilight" }],
        expertNote: "We arrange a private balcony viewing away from the main tourist crowds.",
        highlights: ["Taj Mahal Sunset View", "Premium Taj View Suite", "Fine Dining at Esphahan"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 5,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra Heritage Tour",
        title: "Courts of the Mughals",
        narrative: "Visit the red sandstone Agra Fort, walking through royal chambers. Discover the delicate marble work of the Baby Taj.",
        details: {
          accommodation: "The Oberoi Amarvilas",
          experiences: "Guided Agra Fort tour, Tomb of Itmad-ud-Daulah visit",
          dining: "Fine Mughlai lunch, High Tea overlooking the Taj",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/agra-fort.jpeg", caption: "The impressive walls of Agra Fort" }],
        expertNote: "Look out from the fort's towers—this is where Emperor Shah Jahan spent his final years gazing at the Taj Mahal.",
        highlights: ["Agra Fort Royal Chambers", "Tomb of Itmad-ud-Daulah", "High Tea with Taj View"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 6,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Agra to Jaipur",
        title: "Into the Pink City",
        narrative: "Drive to Jaipur, stopping at the abandoned Mughal capital of Fatehpur Sikri. Check into the legendary Rambagh Palace.",
        details: {
          accommodation: "Rambagh Palace (Historical Suite)",
          experiences: "Fatehpur Sikri guided tour, traditional royal greeting",
          dining: "Rajasthani thali in a gilded courtyard",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Rambagh-Palace-jaipur.jpg", caption: "The beautiful facade of Rambagh Palace" }],
        expertNote: "Fatehpur Sikri is beautifully preserved, capturing the grandeur of Emperor Akbar's court.",
        highlights: ["Fatehpur Sikri Tour", "Maharajah Royal Welcome", "Gilded Courtyard Dining"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 7,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Heritage Tour",
        title: "Forts of Gold & Coral",
        narrative: "Ascend the hillside Amber Fort. In the afternoon, visit the City Palace museum and see the pink facade of Hawa Mahal.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Amber Fort tour, exclusive City Palace archives access",
          dining: "Palace lunch, cocktail at Polo Bar",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/city-palace-jaipur.webp", caption: "Courtyards inside Jaipur City Palace" }],
        expertNote: "The Sheesh Mahal inside Amber Fort is covered in thousands of hand-cut mirrors.",
        highlights: ["Amber Fort Hill Climb", "City Palace Royal Archives", "Hawa Mahal Photography"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 8,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Craft & Culture",
        title: "Artisans of the Guilds",
        narrative: "Spend the day meeting master block-printers, gem-cutters, and painters. Discover the ancient guilds that shape local design.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Private block-printing class, gem market curation walk",
          dining: "Bespoke estate garden lunch, royal banqueting dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Miniature painting workshops of Jaipur.webp", caption: "Block printing artisans of Jaipur" }],
        expertNote: "Jaipur is the gemstone capital of India. Meet a heritage jeweller for a private viewing.",
        highlights: ["Block Printing Workshop", "Gem Curation Tour", "Royal Falconry Session"],
        revealedRouteKeys: ["delhi", "agra", "jaipur"]
      },
      {
        day: 9,
        location: "Shahpura Bagh",
        locationKey: "shahpurabagh",
        meta: "Jaipur to Shahpura Bagh",
        title: "The Heritage Oasis",
        narrative: "Drive to Shahpura Bagh, a stunning 45-acre estate surrounded by private lakes. Check into your heritage suite and relax by the pool.",
        details: {
          accommodation: "Shahpura Bagh Estate (Royal Suite)",
          experiences: "Estate historic walking tour, private lake sunset cruise",
          dining: "Home-cooked traditional Rajasthani specialties",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/rajasthan_palace_exterior_1776272664878.png", caption: "The elegant estate of Shahpura Bagh" }],
        expertNote: "This family estate is run by descendants of the former rulers, offering a highly personalized stay.",
        highlights: ["Private Heritage Estate Stay", "Lakeside Sunset Cruise", "Traditional Rajasthani Home Cooking"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "shahpurabagh"]
      },
      {
        day: 10,
        location: "Shahpura Bagh",
        locationKey: "shahpurabagh",
        meta: "Shahpura Bagh",
        title: "Country Estates & Birdlife Lakes",
        narrative: "Spend a quiet day exploring rural villages and watching local birdlife flocking to the surrounding private reservoirs.",
        details: {
          accommodation: "Shahpura Bagh Estate",
          experiences: "Guided village walk, private lake bird-watching excursion",
          dining: "Organic estate lunch, candlelit dinner in the orchard",
          transport: "Private luxury SUV & walking"
        },
        images: [{ url: "/images/nimaj-village.jpg", caption: "Meeting villagers near the estate" }],
        expertNote: "More than 250 species of birds visit the lakes around the property during this season.",
        highlights: ["Rural Village Experience", "Waterbird Sanctuary Tour", "Orchard Candlelit Dinner"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "shahpurabagh"]
      },
      {
        day: 11,
        location: "Udaipur",
        locationKey: "shahpurabagh",
        meta: "Shahpura Bagh to Udaipur",
        title: "City of Lakes & White Palaces",
        narrative: "Drive to Udaipur. Take a private motorboat to Taj Lake Palace, which floats elegantly in the middle of Lake Pichola.",
        details: {
          accommodation: "Taj Lake Palace Udaipur (Luxury Lake View Room)",
          experiences: "Private boat transfer, evening sunset cruise on Lake Pichola",
          dining: "Royal Mewari tasting menu at Neel Kamal",
          transport: "Private luxury SUV & boat"
        },
        images: [{ url: "/images/taj-lake-palace-udaipur.jpeg", caption: "The floating Taj Lake Palace Udaipur" }],
        expertNote: "Taj Lake Palace was built in 1746 as a summer pleasure palace for the Maharana of Udaipur.",
        highlights: ["Floating Lake Palace Stay", "Lake Pichola Sunset Cruise", "Neel Kamal Dining"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "shahpurabagh", "udaipur"]
      },
      {
        day: 12,
        location: "Udaipur",
        locationKey: "udaipur",
        meta: "Udaipur",
        title: "Palaces of the Maharanas",
        narrative: "Explore Udaipur's monumental City Palace. Visit Saheliyon-ki-Bari gardens and see the vintage car collection.",
        details: {
          accommodation: "Taj Lake Palace Udaipur",
          experiences: "City Palace private tour, vintage car collection view, Saheliyon-ki-Bari walk",
          dining: "Lakeside lunch, rooftop terrace dinner",
          transport: "Private luxury SUV & boat"
        },
        images: [{ url: "/images/courtyards-udaipur-city-palace.jpg", caption: "Udaipur City Palace courtyards" }],
        expertNote: "City Palace Udaipur is the largest palace complex in Rajasthan, built over 400 years.",
        highlights: ["City Palace Private Tour", "Vintage Car Exhibition", "Lakeside Rooftop Dining"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "shahpurabagh", "udaipur"]
      },
      {
        day: 13,
        location: "Delhi",
        locationKey: "udaipur",
        meta: "Udaipur to Delhi Airport",
        title: "Himalayan Vistas Departure",
        narrative: "Fly from Udaipur to Delhi International Airport for your departure flight home, carrying royal memories.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Palace breakfast",
          transport: "Private SUV & domestic flight"
        },
        images: [{ url: "/images/airport.webp", caption: "Farewell to India" }],
        expertNote: "Connect seamlessly to your evening international departure flight.",
        highlights: ["VIP Airport Exit Assistance", "Lake Pichola Farewell View"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "shahpurabagh", "udaipur", "delhi"]
      }
    ]
  },
  "palace-culture-19": {
  "id": "palace-culture-19",
  "title": "Grand Rajasthan: Royal Palaces & Desert Estates",
  "subtitle": "An epic 19-day passage through the heritage landmarks, desert cities, and royal lake palaces of Rajasthan.",
  "duration": "19 Days / 18 Nights",
  "regionsVisited": "Delhi, Jaisalmer, Jodhpur, Mihirgarh, Udaipur, Shahpura Bagh, Jaipur, Agra",
  "accommodations": "Legendary Heritage Suites & Luxury Desert Castles",
  "transfer": "Private Luxury SUV & Domestic Flight",
  "heroImage": "/images/rajasthan_palace_exterior_1776272664878.png",
  "ctaBgImage": "/images/courtyards-udaipur-city-palace.jpg",
  "markerKeys": [
    "delhi",
    "jaisalmer",
    "jodhpur",
    "mihirgarh",
    "udaipur",
    "shahpurabagh",
    "jaipur",
    "agra"
  ],
  "routeCoords": [
    [
      77.209,
      28.6139
    ],
    [
      70.9169,
      26.9157
    ],
    [
      73.0243,
      26.2389
    ],
    [
      73.0617,
      26.0719
    ],
    [
      73.7125,
      24.5854
    ],
    [
      74.9317,
      25.6306
    ],
    [
      75.7873,
      26.9124
    ],
    [
      78.0081,
      27.1767
    ],
    [
      77.209,
      28.6139
    ]
  ],
  "accommodationsList": [
    {
      "title": "The Imperial Delhi",
      "desc": "An iconic colonial-era masterpiece blending Art Deco style with royal heritage.",
      "image": "/images/the-imperial-newdelhi.webp"
    },
    {
      "title": "Suryagarh Jaisalmer",
      "desc": "A fortress hotel in the Thar desert combining rugged majesty with extreme luxury.",
      "image": "/images/jaisalmer-fort.jpg"
    },
    {
      "title": "Taj Umaid Bhawan Palace, Jodhpur",
      "desc": "One of the largest private residences in the world, combining Art Deco and royal Mewar architecture.",
      "image": "/images/jodhpur-mehrangarh.webp"
    },
    {
      "title": "Mihir Garh Estate",
      "desc": "An exclusive boutique sand castle rising from the Rajasthani desert scrub.",
      "image": "/images/rajasthan_palace_exterior_1776272664878.png"
    },
    {
      "title": "Taj Lake Palace, Udaipur",
      "desc": "A legendary white marble palace rising from the center of Lake Pichola.",
      "image": "/images/taj-lake-palace-udaipur.jpeg"
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Arrival & Welcome",
      "title": "Imperial Welcome",
      "narrative": "Arrive at New Delhi's international airport. Private transfer to your landmark heritage hotel.",
      "details": {
        "accommodation": "The Imperial Delhi (Grand Heritage Suite)",
        "experiences": "Private welcome orientation, historic garden walk",
        "dining": "Welcome dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/the-imperial-newdelhi.webp",
          "caption": "The Imperial Delhi"
        }
      ],
      "expertNote": "Settle into the calm elegance of your hotel before starting your desert expedition.",
      "highlights": [
        "VIP Airport Greeting",
        "Colonial Heritage Suite"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 2,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Old & New Delhi Tour",
      "title": "Chronicles of Empires",
      "narrative": "Explore the historic contrasts of Delhi. Ride a private rickshaw through Chandni Chowk and stand before Humayun's Tomb.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Curated history walk in Old Delhi, private museum access",
        "dining": "Royal Mughlai lunch, fine contemporary dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Old Delhi historic sights"
        }
      ],
      "expertNote": "We arrange early entry to avoid the midday sun.",
      "highlights": [
        "Old Delhi Rickshaw",
        "Humayun's Tomb Tour"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 3,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi Art & Sufism",
      "title": "Mystics & Modern Art",
      "narrative": "Spend the morning at private contemporary art galleries. In the evening, witness Qawwali devotional music at Nizamuddin Dargah.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Private gallery viewing, evening Sufi devotional tour",
        "dining": "Artisan lunch, private garden dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Nizamuddin Dargah shrine.jpeg",
          "caption": "Evening Sufi session at Nizamuddin"
        }
      ],
      "expertNote": "Qawwali music represents a deep heritage legacy of Northern India.",
      "highlights": [
        "Art Gallery Access",
        "Sufi Qawwali Experience"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 4,
      "location": "Jaisalmer",
      "locationKey": "jaisalmer",
      "meta": "Fly to Jaisalmer",
      "title": "The Golden Fortress",
      "narrative": "Board a domestic flight to Jaisalmer. Settle into Suryagarh, a majestic resort built like a desert fort.",
      "details": {
        "accommodation": "Suryagarh Jaisalmer (Luxury Suite)",
        "experiences": "Desert fortress arrival greeting, pool-side relaxation",
        "dining": "Traditional desert-style barbecue thali",
        "transport": "Private SUV & domestic flight"
      },
      "images": [
        {
          "url": "/images/jaisalmer-fort.jpg",
          "caption": "Suryagarh Jaisalmer desert outpost"
        }
      ],
      "expertNote": "Suryagarh offers pure desert isolation combined with modern palace hospitality.",
      "highlights": [
        "Flight to Thar Desert",
        "Fortress Arrival Welcome"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer"
      ]
    },
    {
      "day": 5,
      "location": "Jaisalmer",
      "locationKey": "jaisalmer",
      "meta": "Jaisalmer Dunes",
      "title": "Thar Dunes & Fort Walk",
      "narrative": "Walk through Jaisalmer's living fort. At sunset, ride camels into the Sam Sand Dunes, followed by desert folk music.",
      "details": {
        "accommodation": "Suryagarh Jaisalmer",
        "experiences": "Living fort walking tour, camel dune safari",
        "dining": "Suryagarh private dune dinner under starlight",
        "transport": "Private 4x4 SUV & Camel"
      },
      "images": [
        {
          "url": "/images/jaisalmer-fort.jpg",
          "caption": "Sunrise over Jaisalmer Fort"
        }
      ],
      "expertNote": "The dunes look spectacular as the desert sands change colors at sunset.",
      "highlights": [
        "Living Fort Tour",
        "Sunset Camel Dunes Safari",
        "Dune Dinner under Stars"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer"
      ]
    },
    {
      "day": 6,
      "location": "Jodhpur",
      "locationKey": "jodhpur",
      "meta": "Jaisalmer to Jodhpur",
      "title": "The Blue Citadels",
      "narrative": "Drive across the Thar Desert to Jodhpur. Check into Umaid Bhawan Palace, a stunning Art Deco architectural feat.",
      "details": {
        "accommodation": "Taj Umaid Bhawan Palace (Historical Suite)",
        "experiences": "Scenic desert highway drive, palace heritage orientation",
        "dining": "Fine Rajasthani dining at Risala",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/jodhpur-mehrangarh.webp",
          "caption": "The imposing Umaid Bhawan Palace Jodhpur"
        }
      ],
      "expertNote": "Umaid Bhawan is still the home of the Maharaja of Jodhpur.",
      "highlights": [
        "Desert Drive to Jodhpur",
        "Umaid Bhawan Palace Check-in"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur"
      ]
    },
    {
      "day": 7,
      "location": "Jodhpur",
      "locationKey": "jodhpur",
      "meta": "Jodhpur Sights",
      "title": "Mehrangarh Fortress Walk",
      "narrative": "Explore Mehrangarh Fort rising above the blue houses. Walk down the old streets and visit the royal cenotaph of Jaswant Thada.",
      "details": {
        "accommodation": "Taj Umaid Bhawan Palace",
        "experiences": "Mehrangarh Fort private tour, blue city walks",
        "dining": "Palace lunch, garden dinner overlooking the fort",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/jodhpur-mehrangarh.webp",
          "caption": "Mehrangarh Fort rising over Jodhpur"
        }
      ],
      "expertNote": "We arrange private curator access to the fort's museum collection.",
      "highlights": [
        "Mehrangarh Fort Curator Tour",
        "Jaswant Thada Cenotaph",
        "Blue City Photo Walk"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur"
      ]
    },
    {
      "day": 8,
      "location": "Mihirgarh",
      "locationKey": "mihirgarh",
      "meta": "Jodhpur to Mihirgarh",
      "title": "The Desert Sand Castle",
      "narrative": "Drive to Mihir Garh, an exclusive fortress estate rising from the scrub. Enjoy peace by the pool.",
      "details": {
        "accommodation": "Mihir Garh Estate (Royal Suite)",
        "experiences": "Heritage fort arrival, private pool rest",
        "dining": "Traditional Mewari home cooking dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/rajasthan_palace_exterior_1776272664878.png",
          "caption": "Mihir Garh Sand Castle"
        }
      ],
      "expertNote": "Each suite has its own private pool or plunge bath.",
      "highlights": [
        "Mihir Garh Sand Castle Stay",
        "Private Plunge Pool"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur",
        "mihirgarh"
      ]
    },
    {
      "day": 9,
      "location": "Mihirgarh",
      "locationKey": "mihirgarh",
      "meta": "Mihirgarh Safaris",
      "title": "Equestrian & Village Safaris",
      "narrative": "Ride purebred Marwari horses in the desert. Visit local Bishnoi villages, observing local nature conservation practices.",
      "details": {
        "accommodation": "Mihir Garh Estate",
        "experiences": "Marwari horse safari, Bishnoi village tour",
        "dining": "Desert picnic, fireside dinner",
        "transport": "Equestrian & private 4x4 SUV"
      },
      "images": [
        {
          "url": "/images/nimaj-village.jpg",
          "caption": "Visiting Bishnoi villages near Mihir Garh"
        }
      ],
      "expertNote": "The Bishnoi are famous for their deep spiritual commitment to protecting trees and wildlife.",
      "highlights": [
        "Marwari Horse Riding",
        "Bishnoi Conservation Tour"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur",
        "mihirgarh"
      ]
    },
    {
      "day": 10,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Mihirgarh to Udaipur",
      "title": "Ranakpur & Lake Pichola",
      "narrative": "Drive to Udaipur, stopping at Ranakpur Temple, featuring 1,444 unique marble pillars. Board a boat to Taj Lake Palace.",
      "details": {
        "accommodation": "Taj Lake Palace Udaipur (Luxury Suite)",
        "experiences": "Ranakpur Temple tour, private Lake Pichola boat transfer",
        "dining": "Fine Mewari dining at Neel Kamal",
        "transport": "Private luxury SUV & boat"
      },
      "images": [
        {
          "url": "/images/taj-lake-palace-udaipur.jpeg",
          "caption": "Arriving at Taj Lake Palace Udaipur"
        }
      ],
      "expertNote": "Ranakpur Jain temple is an absolute masterpiece of medieval stone carving.",
      "highlights": [
        "Ranakpur Marble Temple",
        "Lake Pichola Boat Transfer",
        "Taj Lake Palace Suite"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur",
        "mihirgarh",
        "udaipur"
      ]
    },
    {
      "day": 11,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur Sights",
      "title": "Mewar City Palace",
      "narrative": "Tour Udaipur's grand City Palace complex, featuring mirrors, tiles, and courtyards. Browse the crystal gallery.",
      "details": {
        "accommodation": "Taj Lake Palace Udaipur",
        "experiences": "City Palace tour, crystal gallery visit",
        "dining": "Lakeside lunch, rooftop palace dinner",
        "transport": "Private luxury SUV & boat"
      },
      "images": [
        {
          "url": "/images/courtyards-udaipur-city-palace.jpg",
          "caption": "Udaipur City Palace courtyards"
        }
      ],
      "expertNote": "This palace is the largest in Rajasthan, built by successive Maharanas over four centuries.",
      "highlights": [
        "City Palace Mewar Tour",
        "Crystal Gallery Visit"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur",
        "mihirgarh",
        "udaipur"
      ]
    },
    {
      "day": 12,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur Lakes",
      "title": "Jag Mandir Island Sunset",
      "narrative": "Explore the vintage car collection. In the late afternoon, take a private boat cruise to Jag Mandir island.",
      "details": {
        "accommodation": "Taj Lake Palace Udaipur",
        "experiences": "Vintage car viewing, Jag Mandir island cruise",
        "dining": "Island sunset drinks, Lake Palace dinner",
        "transport": "Private SUV & boat"
      },
      "images": [
        {
          "url": "/images/taj-lake-palace-udaipur.jpeg",
          "caption": "Sunset views over Lake Pichola"
        }
      ],
      "expertNote": "Jag Mandir was used as a summer resort by the royal family and once housed prince Shah Jahan.",
      "highlights": [
        "Jag Mandir Island Cruise",
        "Vintage Car Exhibition"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur",
        "mihirgarh",
        "udaipur"
      ]
    },
    {
      "day": 13,
      "location": "Shahpura Bagh",
      "locationKey": "shahpurabagh",
      "meta": "Udaipur to Shahpura Bagh",
      "title": "The Country Estate",
      "narrative": "Drive to Shahpura Bagh heritage estate. Relax in the 45-acre orchards and watch birds on the private lakes.",
      "details": {
        "accommodation": "Shahpura Bagh Estate (Royal Suite)",
        "experiences": "Estate historic walking tour, lake sunset cruise",
        "dining": "Traditional home-cooked Rajasthani specialties",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/rajasthan_palace_exterior_1776272664878.png",
          "caption": "Shahpura Bagh gardens"
        }
      ],
      "expertNote": "Enjoy a highly personalized stay hosted by the descendant family of the rulers.",
      "highlights": [
        "Country Estate Settle",
        "Sunset Lake Cruise"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur",
        "mihirgarh",
        "udaipur",
        "shahpurabagh"
      ]
    },
    {
      "day": 14,
      "location": "Shahpura Bagh",
      "locationKey": "shahpurabagh",
      "meta": "Shahpura Bagh",
      "title": "Rural Walks & Birdwatching",
      "narrative": "Walk through local rural villages. Observe species of migratory birds nesting by the estate's private lakes.",
      "details": {
        "accommodation": "Shahpura Bagh Estate",
        "experiences": "Guided village walk, private lake bird-watching tour",
        "dining": "Orchard lunch, candlelit garden dinner",
        "transport": "Private luxury SUV & walking"
      },
      "images": [
        {
          "url": "/images/nimaj-village.jpg",
          "caption": "Rural village walks near Shahpura"
        }
      ],
      "expertNote": "This area is an undiscovered gem for bird watchers.",
      "highlights": [
        "Village Craft Walks",
        "Lakeside Birdwatching",
        "Orchard Dinner"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur",
        "mihirgarh",
        "udaipur",
        "shahpurabagh"
      ]
    },
    {
      "day": 15,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Shahpura Bagh to Jaipur",
      "title": "The Palace Ballrooms",
      "narrative": "Drive to Jaipur. Settle into Rambagh Palace. Stroll through the lawns and see the resident peacocks.",
      "details": {
        "accommodation": "Rambagh Palace (Historical Suite)",
        "experiences": "Palace heritage walk, royal welcome greeting",
        "dining": "Traditional Rajasthani thali at Suvarna Mahal",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Rambagh-Palace-jaipur.jpg",
          "caption": "Rambagh Palace Jaipur"
        }
      ],
      "expertNote": "The palace was the residence of Maharaja Sawai Man Singh II.",
      "highlights": [
        "Rambagh Palace Arrival",
        "Ballroom Dining"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur",
        "mihirgarh",
        "udaipur",
        "shahpurabagh",
        "jaipur"
      ]
    },
    {
      "day": 16,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur Sights",
      "title": "Amber Fort & City Palace",
      "narrative": "Ascend Amber Fort. Explore the City Palace and see the iconic Hawa Mahal facade.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Amber Fort private tour, City Palace royal archives access",
        "dining": "Palace lunch, cocktail at Polo Bar",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/city-palace-jaipur.webp",
          "caption": "City Palace courtyards"
        }
      ],
      "expertNote": "We arrange entry into the private royal library containing rare manuscripts.",
      "highlights": [
        "Amber Fort Private Tour",
        "City Palace Library access",
        "Hawa Mahal"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur",
        "mihirgarh",
        "udaipur",
        "shahpurabagh",
        "jaipur"
      ]
    },
    {
      "day": 17,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Jaipur to Agra",
      "title": "Fatehpur Sikri Capital",
      "narrative": "Drive to Agra, stopping at the preserved capital of Fatehpur Sikri. Settle into Oberoi Amarvilas with Taj views.",
      "details": {
        "accommodation": "The Oberoi Amarvilas (Premier Taj View Suite)",
        "experiences": "Fatehpur Sikri guided tour, sunset Taj Mahal suite view",
        "dining": "Awadhi tasting dinner at Esphahan",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/taj-mahal.webp",
          "caption": "Taj Mahal sunset view"
        }
      ],
      "expertNote": "Your room features direct views of the Taj Mahal monument.",
      "highlights": [
        "Fatehpur Sikri Ruins",
        "Taj View Suite Check-in"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur",
        "mihirgarh",
        "udaipur",
        "shahpurabagh",
        "jaipur",
        "agra"
      ]
    },
    {
      "day": 18,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Agra Tour",
      "title": "Sunrise Taj Mahal & Agra Fort",
      "narrative": "Experience the sunrise over the Taj Mahal. Later, tour the historic sandstone palaces inside Agra Fort.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Dawn Taj Mahal private tour, guided Agra Fort tour",
        "dining": "Fine Mughlai lunch, palace high tea",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/agra-fort.jpeg",
          "caption": "Sandstone walls of Agra Fort"
        }
      ],
      "expertNote": "Sunrise is the quietest and most scenic time to visit the monument.",
      "highlights": [
        "Sunrise Taj Mahal Walk",
        "Agra Fort Royal Palaces"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur",
        "mihirgarh",
        "udaipur",
        "shahpurabagh",
        "jaipur",
        "agra"
      ]
    },
    {
      "day": 19,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Agra to Delhi Airport",
      "title": "Departure Journey",
      "narrative": "Drive back to Delhi International Airport for your departure flight home.",
      "details": {
        "accommodation": "VIP Departure Lounge",
        "experiences": "Airport departure transfer",
        "dining": "Palace breakfast",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/airport.webp",
          "caption": "Farewell to India"
        }
      ],
      "expertNote": "We recommend scheduling evening departure flights.",
      "highlights": [
        "VIP Airport Exit Assistance"
      ],
      "revealedRouteKeys": [
        "delhi",
        "jaisalmer",
        "jodhpur",
        "mihirgarh",
        "udaipur",
        "shahpurabagh",
        "jaipur",
        "agra",
        "delhi"
      ]
    }
  ]
},
  "palace-culture-16": {
  "id": "palace-culture-16",
  "title": "Palaces & Wilderness: Rajasthan Luxury Expedition",
  "subtitle": "A 16-day royal passage through Delhi, Udaipur, Jawai leopards, Mihir Garh, Jodhpur, Jaipur, and Agra.",
  "duration": "16 Days / 15 Nights",
  "regionsVisited": "Delhi, Udaipur, Jawai, Mihirgarh, Jodhpur, Jaipur, Agra",
  "accommodations": "Legendary Heritage Palaces & Luxury Safari Tents",
  "transfer": "Private SUV & 4x4 Wilderness Jeeps",
  "heroImage": "/images/hero_palace_lake_1776272480532.png",
  "ctaBgImage": "/images/wildlife.jpg",
  "markerKeys": [
    "delhi",
    "udaipur",
    "jawai",
    "mihirgarh",
    "jodhpur",
    "jaipur",
    "agra"
  ],
  "routeCoords": [
    [
      77.209,
      28.6139
    ],
    [
      73.7125,
      24.5854
    ],
    [
      73.1678,
      25.1058
    ],
    [
      73.0617,
      26.0719
    ],
    [
      73.0243,
      26.2389
    ],
    [
      75.7873,
      26.9124
    ],
    [
      78.0081,
      27.1767
    ],
    [
      77.209,
      28.6139
    ]
  ],
  "accommodationsList": [
    {
      "title": "The Imperial Delhi",
      "desc": "An elegant Victorian-style colonial heritage landmark in New Delhi.",
      "image": "/images/the-imperial-newdelhi.webp"
    },
    {
      "title": "Taj Lake Palace, Udaipur",
      "desc": "A legendary white marble palace rising from the center of Lake Pichola.",
      "image": "/images/taj-lake-palace-udaipur.jpeg"
    },
    {
      "title": "Suján Jawai Camp",
      "desc": "An ultra-luxury canvas outpost positioned amidst granite hills where leopards roam free.",
      "image": "/images/wildlife.jpg"
    },
    {
      "title": "Mihir Garh Estate",
      "desc": "An exclusive boutique sand castle rising from the desert scrub.",
      "image": "/images/rajasthan_palace_exterior_1776272664878.png"
    },
    {
      "title": "Taj Umaid Bhawan Palace, Jodhpur",
      "desc": "A stunning Art Deco palace once home to Jodhpur's Maharaja.",
      "image": "/images/jodhpur-mehrangarh.webp"
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Arrival & Welcome",
      "title": "Capital Greeting",
      "narrative": "Arrive in Delhi. Tarmac assistance and private transfer to your heritage hotel.",
      "details": {
        "accommodation": "The Imperial Delhi (Grand Heritage Suite)",
        "experiences": "VIP tarmac greeting, hotel history briefing",
        "dining": "Spice Route dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/the-imperial-newdelhi.webp",
          "caption": "The Imperial Delhi lobby"
        }
      ],
      "expertNote": "Enjoy early rest before beginning your Rajasthan wilderness expedition.",
      "highlights": [
        "VIP Fast-track Access",
        "Heritage Suite"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 2,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi Sights",
      "title": "Imperial Sights",
      "narrative": "Explore the historical treasures of Delhi, from Old Delhi's markets to Humayun's Tomb and Lutyens' capital avenues.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Guided Old Delhi walk, Humayun's Tomb tour",
        "dining": "Mughlai thali, contemporary dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Humayun's Tomb gardens"
        }
      ],
      "expertNote": "Humayun's Tomb is beautifully framed by formal Persian gardens.",
      "highlights": [
        "Old Delhi Rickshaw Tour",
        "Humayun's Tomb Tour"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 3,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi Art & Sufism",
      "title": "Art Galleries & Sufi Vocals",
      "narrative": "Spend the day viewing contemporary art. In the evening, witness live Qawwali vocals at Nizamuddin Dargah.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Private art gallery tour, evening Sufi devotional walk",
        "dining": "Artisan lunch, private garden dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Nizamuddin Dargah shrine.jpeg",
          "caption": "Devotional vocals at Nizamuddin"
        }
      ],
      "expertNote": "The shrine's music dates back to medieval saint Hazrat Nizamuddin.",
      "highlights": [
        "Private Art Curation",
        "Sufi Music Performance"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 4,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Fly to Udaipur",
      "title": "Lake Pichola Arrival",
      "narrative": "Fly from Delhi to Udaipur. Board a private boat to Taj Lake Palace rising from Lake Pichola.",
      "details": {
        "accommodation": "Taj Lake Palace Udaipur (Luxury Suite)",
        "experiences": "Flight transition, private lake boat welcome",
        "dining": "Mewari dinner at Neel Kamal",
        "transport": "Private SUV, domestic flight & boat"
      },
      "images": [
        {
          "url": "/images/taj-lake-palace-udaipur.jpeg",
          "caption": "Taj Lake Palace Udaipur"
        }
      ],
      "expertNote": "Enjoy views of the surrounding Aravalli hills from your room.",
      "highlights": [
        "Lake Pichola Boat Transfer",
        "Taj Lake Palace Check-in"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur"
      ]
    },
    {
      "day": 5,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur Sights",
      "title": "Palaces of Udaipur",
      "narrative": "Tour Udaipur's massive City Palace complex, vintage car display, and enjoy an afternoon private boat cruise.",
      "details": {
        "accommodation": "Taj Lake Palace Udaipur",
        "experiences": "City Palace tour, vintage car collection visit, private sunset boat cruise",
        "dining": "Lakeside lunch, rooftop Mewari banquet",
        "transport": "Private SUV & boat"
      },
      "images": [
        {
          "url": "/images/courtyards-udaipur-city-palace.jpg",
          "caption": "City Palace courtyards"
        }
      ],
      "expertNote": "Look out for Mewar paintings inside the City Palace museum.",
      "highlights": [
        "City Palace Guided Tour",
        "Sunset Lake Cruise"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur"
      ]
    },
    {
      "day": 6,
      "location": "Jawai",
      "locationKey": "jawai",
      "meta": "Udaipur to Jawai",
      "title": "Granite Hills & Leopards",
      "narrative": "Drive north to the Jawai conservation area. Settle into Suján Jawai, an ultra-luxury safari camp.",
      "details": {
        "accommodation": "Suján Jawai Camp (Luxury Tent)",
        "experiences": "Wilderness welcome, evening leopard tracking safari",
        "dining": "Gourmet campfire dining",
        "transport": "Private SUV & open 4x4 safari jeep"
      },
      "images": [
        {
          "url": "/images/wildlife.jpg",
          "caption": "Granite hills of Jawai leopard area"
        }
      ],
      "expertNote": "Jawai represents a unique conservation model where leopards and local shepherds live in harmony.",
      "highlights": [
        "Suján Jawai Check-in",
        "Sunset Leopard Safari"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur",
        "jawai"
      ]
    },
    {
      "day": 7,
      "location": "Jawai",
      "locationKey": "jawai",
      "meta": "Jawai Safaris",
      "title": "Leopard Safaris & Shepherd Walks",
      "narrative": "Embark on dawn and dusk 4x4 safaris. Walk through the granite hills with local Rabari shepherds in their traditional red robes.",
      "details": {
        "accommodation": "Suján Jawai Camp",
        "experiences": "Morning & afternoon safaris, Rabari cultural walk",
        "dining": "Bush breakfast, fireside lanterns dinner",
        "transport": "Open 4x4 safari jeep"
      },
      "images": [
        {
          "url": "/images/nimaj-village.jpg",
          "caption": "Rabari shepherds near Jawai"
        }
      ],
      "expertNote": "The Rabari people have guided herds through these hills for centuries.",
      "highlights": [
        "Dawn Leopard Tracking",
        "Rabari Guided Hill Walk"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur",
        "jawai"
      ]
    },
    {
      "day": 8,
      "location": "Mihirgarh",
      "locationKey": "mihirgarh",
      "meta": "Jawai to Mihirgarh",
      "title": "Sand Castle Fort",
      "narrative": "Drive north to Mihir Garh boutique estate. Spend a quiet afternoon on the roof deck.",
      "details": {
        "accommodation": "Mihir Garh Estate (Royal Suite)",
        "experiences": "Desert welcome, rooftop orientation",
        "dining": "Traditional Rajasthani home cooking dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/rajasthan_palace_exterior_1776272664878.png",
          "caption": "Mihir Garh Sand Castle"
        }
      ],
      "expertNote": "Mihir Garh is built as a tribute to desert fort design.",
      "highlights": [
        "Mihir Garh Suite",
        "Desert Sunset Views"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur",
        "jawai",
        "mihirgarh"
      ]
    },
    {
      "day": 9,
      "location": "Mihirgarh",
      "locationKey": "mihirgarh",
      "meta": "Mihirgarh equestrian",
      "title": "Marwari Horse Safaris",
      "narrative": "Enjoy a private horse-riding session on the estate's rare Marwari horses. Savor a gourmet picnic lunch.",
      "details": {
        "accommodation": "Mihir Garh Estate",
        "experiences": "Equestrian session, desert village walk",
        "dining": "Organic estate lunch, fireside dinner",
        "transport": "Equestrian & private 4x4 SUV"
      },
      "images": [
        {
          "url": "/images/nimaj-village.jpg",
          "caption": "Marwari horse riding at the estate"
        }
      ],
      "expertNote": "The Marwari horses are famous for their curved, inward-pointing ears and stamina.",
      "highlights": [
        "Marwari Horse Riding",
        "Fireside Desert Feast"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur",
        "jawai",
        "mihirgarh"
      ]
    },
    {
      "day": 10,
      "location": "Jodhpur",
      "locationKey": "jodhpur",
      "meta": "Mihirgarh to Jodhpur",
      "title": "Umaid Bhawan Art Deco Palace",
      "narrative": "Drive to Jodhpur. Check into Umaid Bhawan Palace, a stunning golden sandstone palace set inside royal gardens.",
      "details": {
        "accommodation": "Taj Umaid Bhawan Palace (Historical Suite)",
        "experiences": "Palace history walkthrough, garden stroll",
        "dining": "Gourmet dining at Risala",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/jodhpur-mehrangarh.webp",
          "caption": "Umaid Bhawan Palace grounds"
        }
      ],
      "expertNote": "Umaid Bhawan contains a private museum featuring royal artifacts.",
      "highlights": [
        "Umaid Bhawan Check-in",
        "Risala Fine Dining"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur",
        "jawai",
        "mihirgarh",
        "jodhpur"
      ]
    },
    {
      "day": 11,
      "location": "Jodhpur",
      "locationKey": "jodhpur",
      "meta": "Jodhpur Tour",
      "title": "Mehrangarh Fort private tour",
      "narrative": "Tour Mehrangarh Fort rising above the blue city. Explore the old stepwells and market streets of Jodhpur.",
      "details": {
        "accommodation": "Taj Umaid Bhawan Palace",
        "experiences": "Mehrangarh Fort private tour, Toorji stepwell walk",
        "dining": "Heritage lunch, terrace dining overlooking the fort",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/jodhpur-mehrangarh.webp",
          "caption": "Mehrangarh Fort Jodhpur"
        }
      ],
      "expertNote": "Toorji Ka Jhalra is an restored stepwell showing historical water architecture.",
      "highlights": [
        "Mehrangarh Fort Tour",
        "Ancient Stepwell Walk"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur",
        "jawai",
        "mihirgarh",
        "jodhpur"
      ]
    },
    {
      "day": 12,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jodhpur to Jaipur",
      "title": "Pink City Palace",
      "narrative": "Drive to Jaipur. Settle into the Rambagh Palace, former home of Maharaja of Jaipur.",
      "details": {
        "accommodation": "Rambagh Palace (Historical Suite)",
        "experiences": "Royal horse carriage welcome, palace gardens walk",
        "dining": "Royal courtyard dinner at Suvarna Mahal",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Rambagh-Palace-jaipur.jpg",
          "caption": "Rambagh Palace gardens"
        }
      ],
      "expertNote": "Take an evening stroll through the palace's manicured gardens.",
      "highlights": [
        "Royal Carriage Greeting",
        "Rambagh Palace gardens"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur",
        "jawai",
        "mihirgarh",
        "jodhpur",
        "jaipur"
      ]
    },
    {
      "day": 13,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur Sights",
      "title": "Amber Fort & City Palace",
      "narrative": "Ascend Amber Fort, and explore the City Palace residential chambers, plus Jantar Mantar observatory.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Amber Fort private tour, City Palace royal apartments access",
        "dining": "Palace lunch, cocktail at Polo Bar",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/city-palace-jaipur.webp",
          "caption": "City Palace entrance"
        }
      ],
      "expertNote": "Jantar Mantar is a collection of nineteen architectural astronomical instruments.",
      "highlights": [
        "Amber Fort Private Tour",
        "Royal Apartments Access"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur",
        "jawai",
        "mihirgarh",
        "jodhpur",
        "jaipur"
      ]
    },
    {
      "day": 14,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Jaipur to Agra",
      "title": "Yamuna & Taj view suite",
      "narrative": "Drive to Agra, stopping at Fatehpur Sikri. Check into Oberoi Amarvilas with clear Taj view rooms.",
      "details": {
        "accommodation": "The Oberoi Amarvilas (Premier Taj View Suite)",
        "experiences": "Fatehpur Sikri guided tour, Taj sunset view",
        "dining": "Awadhi thali at Esphahan",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/taj-mahal.webp",
          "caption": "Taj Mahal sunset"
        }
      ],
      "expertNote": "Fatehpur Sikri's sandstone palaces show Emperor Akbar's design blend of Hindu and Persian styles.",
      "highlights": [
        "Fatehpur Sikri Ruins",
        "Oberoi Taj View Suite"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur",
        "jawai",
        "mihirgarh",
        "jodhpur",
        "jaipur",
        "agra"
      ]
    },
    {
      "day": 15,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Agra Sights",
      "title": "Taj Mahal Dawn Walk",
      "narrative": "Experience Taj Mahal at dawn. Later, explore the red sandstone palace pavilions inside Agra Fort.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Dawn Taj Mahal private tour, Agra Fort private tour",
        "dining": "Mughlai lunch, high tea overlooking the Taj",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/agra-fort.jpeg",
          "caption": "Agra Fort walls"
        }
      ],
      "expertNote": "Agra Fort contains beautiful white marble palaces built by Shah Jahan.",
      "highlights": [
        "Dawn Taj Mahal Walk",
        "Agra Fort Palaces"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur",
        "jawai",
        "mihirgarh",
        "jodhpur",
        "jaipur",
        "agra"
      ]
    },
    {
      "day": 16,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Agra to Delhi Airport",
      "title": "Departure",
      "narrative": "Drive back to Delhi International Airport for your departure flight home.",
      "details": {
        "accommodation": "VIP Departure Lounge",
        "experiences": "Airport departure transfer",
        "dining": "Palace breakfast",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/airport.webp",
          "caption": "Farewell to India"
        }
      ],
      "expertNote": "Enjoy lounge comforts before checking in for your long-haul flight.",
      "highlights": [
        "VIP Airport Exit Assistance"
      ],
      "revealedRouteKeys": [
        "delhi",
        "udaipur",
        "jawai",
        "mihirgarh",
        "jodhpur",
        "jaipur",
        "agra",
        "delhi"
      ]
    }
  ]
},
  "palace-culture-12": {
  "id": "palace-culture-12",
  "title": "Classic Rajasthan & Pushkar Oasis",
  "subtitle": "A refined 12-day journey from the Mughal wonders of Agra to the pink city of Jaipur, the sacred lake of Pushkar, and the romantic waters of Udaipur.",
  "duration": "12 Days / 11 Nights",
  "regionsVisited": "Delhi, Agra, Jaipur, Pushkar, Udaipur",
  "accommodations": "Heritage Palaces & Luxury Lake Resorts",
  "transfer": "Private Luxury SUV",
  "heroImage": "/images/courtyards-udaipur-city-palace.jpg",
  "ctaBgImage": "/images/taj-mahal.webp",
  "markerKeys": [
    "delhi",
    "agra",
    "jaipur",
    "pushkar",
    "udaipur"
  ],
  "routeCoords": [
    [
      77.209,
      28.6139
    ],
    [
      78.0081,
      27.1767
    ],
    [
      75.7873,
      26.9124
    ],
    [
      74.5554,
      26.4892
    ],
    [
      73.7125,
      24.5854
    ],
    [
      77.209,
      28.6139
    ]
  ],
  "accommodationsList": [
    {
      "title": "The Imperial Delhi",
      "desc": "An elegant Victorian-style colonial heritage landmark in New Delhi.",
      "image": "/images/the-imperial-newdelhi.webp"
    },
    {
      "title": "The Oberoi Amarvilas, Agra",
      "desc": "Stunning luxury hotel featuring direct monument views from every room.",
      "image": "/images/The Oberoi Amarvilas.jpg"
    },
    {
      "title": "Rambagh Palace, Jaipur",
      "desc": "The glorious heritage palace of the Maharaja of Jaipur.",
      "image": "/images/Rambagh-Palace-jaipur.jpg"
    },
    {
      "title": "Pushkar Palace",
      "desc": "A heritage property set directly on the banks of Pushkar's sacred lake.",
      "image": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg"
    },
    {
      "title": "Taj Lake Palace, Udaipur",
      "desc": "A legendary white marble palace rising from the center of Lake Pichola.",
      "image": "/images/taj-lake-palace-udaipur.jpeg"
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Arrival & Welcome",
      "title": "Imperial Greeting",
      "narrative": "Arrive in Delhi. Enjoy private transfer to your landmark heritage hotel.",
      "details": {
        "accommodation": "The Imperial Delhi (Grand Heritage Suite)",
        "experiences": "VIP airport transfer, private welcome briefing",
        "dining": "Welcome dinner at Spice Route",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/the-imperial-newdelhi.webp",
          "caption": "Arriving at The Imperial Delhi"
        }
      ],
      "expertNote": "Relax tonight before starting your cultural route across Rajasthan.",
      "highlights": [
        "VIP Airport Fast-track",
        "Heritage Suite Stay"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 2,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi Tour",
      "title": "Dynasties of Delhi",
      "narrative": "Explore the historical treasures of Delhi, from Old Delhi's bustling alleyways to Humayun's Tomb.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Guided heritage sites walk, museum access",
        "dining": "Mughlai lunch, fine contemporary dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Historic sights of Old Delhi"
        }
      ],
      "expertNote": "Humayun's Tomb is the precursor to the Taj Mahal.",
      "highlights": [
        "Old Delhi Rickshaw Tour",
        "Humayun's Tomb Tour"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 3,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Delhi to Agra Drive",
      "title": "Taj Mahal Sunset",
      "narrative": "Drive to Agra. Check into Oberoi Amarvilas. Stand before the Taj Mahal at sunset, watching the white marble change color.",
      "details": {
        "accommodation": "The Oberoi Amarvilas (Premier Taj View Suite)",
        "experiences": "Private Taj Mahal sunset viewing, artisan marble workshop",
        "dining": "Awadhi thali dinner at Esphahan",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/taj-mahal.webp",
          "caption": "The Taj Mahal glowing at sunset"
        }
      ],
      "expertNote": "Twilight is the most beautiful time to see the Taj Mahal, when the crowds begin to fade.",
      "highlights": [
        "Taj Mahal Sunset Walk",
        "Oberoi Taj View Suite"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 4,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Agra Heritage Tour",
      "title": "Mughal Citadels",
      "narrative": "Visit Agra Fort and explore its grand palaces. Discover the delicate marble carvings of the Baby Taj.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Agra Fort guided tour, Baby Taj visit",
        "dining": "Fine Mughlai lunch, palace high tea",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/agra-fort.jpeg",
          "caption": "Agra Fort sandstone walls"
        }
      ],
      "expertNote": "Look out from the fort's Jasmine Tower, where Emperor Shah Jahan spent his final years.",
      "highlights": [
        "Agra Fort Palace Walk",
        "Tomb of Itmad-ud-Daulah"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 5,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Agra to Jaipur",
      "title": "Fatehpur Sikri & Pink City",
      "narrative": "Drive to Jaipur, stopping at the preserved capital of Fatehpur Sikri. Settle into the legendary Rambagh Palace.",
      "details": {
        "accommodation": "Rambagh Palace (Historical Suite)",
        "experiences": "Fatehpur Sikri guided tour, traditional royal greeting",
        "dining": "Rajasthani thali in a gilded courtyard",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Rambagh-Palace-jaipur.jpg",
          "caption": "Rambagh Palace Jaipur"
        }
      ],
      "expertNote": "Fatehpur Sikri is beautifully preserved, capturing the grandeur of Emperor Akbar's court.",
      "highlights": [
        "Fatehpur Sikri Tour",
        "Maharajah Royal Welcome"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 6,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur Heritage Tour",
      "title": "Amber Fort & City Palace",
      "narrative": "Ascend Amber Fort. Visit the City Palace and marvel at the pink sandstone walls of Hawa Mahal.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Amber Fort private tour, exclusive City Palace archives access",
        "dining": "Palace courtyard lunch, fine dining dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/city-palace-jaipur.webp",
          "caption": "Jaipur City Palace courtyards"
        }
      ],
      "expertNote": "The Sheesh Mahal inside Amber Fort is covered in thousands of hand-cut mirrors.",
      "highlights": [
        "Amber Fort Hill Climb",
        "City Palace Royal Access"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 7,
      "location": "Pushkar",
      "locationKey": "pushkar",
      "meta": "Jaipur to Pushkar",
      "title": "Sacred Lake Sunset",
      "narrative": "Drive to Pushkar. Check into Pushkar Palace. Stroll around the sacred lake and watch the sunset prayers.",
      "details": {
        "accommodation": "Pushkar Palace (Heritage Room)",
        "experiences": "Guided sacred lake walk, ghat sunset ceremony",
        "dining": "Traditional Rajasthani vegetarian dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Sacred lake of Pushkar"
        }
      ],
      "expertNote": "Pushkar is one of the oldest cities in India and holds the rare Brahma Temple.",
      "highlights": [
        "Sacred Lake Rituals",
        "Pushkar Palace Settle"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar"
      ]
    },
    {
      "day": 8,
      "location": "Pushkar",
      "locationKey": "pushkar",
      "meta": "Pushkar Sights",
      "title": "Brahma Temple & Camel Safari",
      "narrative": "Visit the Brahma Temple. Spend the afternoon taking a camel safari through the surrounding sand dunes.",
      "details": {
        "accommodation": "Pushkar Palace",
        "experiences": "Brahma Temple tour, desert camel safari",
        "dining": "Organic farm lunch, sunset dune barbecue",
        "transport": "Private SUV & camel"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Desert dunes of Pushkar"
        }
      ],
      "expertNote": "Pushkar is famous for its annual camel fair, attracting thousands of nomads.",
      "highlights": [
        "Brahma Temple Tour",
        "Sunset Camel Dunes Safari"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar"
      ]
    },
    {
      "day": 9,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Pushkar to Udaipur",
      "title": "Fly to Lake Pichola",
      "narrative": "Drive to Udaipur. Board a private motorboat to Taj Lake Palace rising from Lake Pichola.",
      "details": {
        "accommodation": "Taj Lake Palace Udaipur (Luxury Suite)",
        "experiences": "Lake Pichola boat transfer, evening sunset cruise",
        "dining": "Mewari tasting menu at Neel Kamal",
        "transport": "Private luxury SUV & boat"
      },
      "images": [
        {
          "url": "/images/taj-lake-palace-udaipur.jpeg",
          "caption": "Floating Taj Lake Palace Udaipur"
        }
      ],
      "expertNote": "Taj Lake Palace was built in 1746 as a royal summer pleasure palace.",
      "highlights": [
        "Lake Pichola Boat Transfer",
        "Taj Lake Palace Settle"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur"
      ]
    },
    {
      "day": 10,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur Sights",
      "title": "Palaces of Udaipur",
      "narrative": "Explore Udaipur's City Palace, crystal gallery, and the peaceful gardens of Saheliyon-ki-Bari.",
      "details": {
        "accommodation": "Taj Lake Palace Udaipur",
        "experiences": "City Palace private tour, vintage car collection view",
        "dining": "Lakeside lunch, rooftop terrace dinner",
        "transport": "Private luxury SUV & boat"
      },
      "images": [
        {
          "url": "/images/courtyards-udaipur-city-palace.jpg",
          "caption": "Udaipur City Palace courtyards"
        }
      ],
      "expertNote": "City Palace Udaipur is the largest palace complex in Rajasthan.",
      "highlights": [
        "City Palace Mewar Tour",
        "Vintage Car Exhibition"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur"
      ]
    },
    {
      "day": 11,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Monsoon Palace Sunset",
      "title": "Monsoon Palace Sunset view",
      "narrative": "Visit the Sajjangarh Monsoon Palace perched on a hilltop, offering panoramic views of Udaipur's lakes and city lights.",
      "details": {
        "accommodation": "Taj Lake Palace Udaipur",
        "experiences": "Sajjangarh Monsoon Palace sunset tour",
        "dining": "Fine lakeside dining at Neel Kamal",
        "transport": "Private luxury SUV & boat"
      },
      "images": [
        {
          "url": "/images/taj-lake-palace-udaipur.jpeg",
          "caption": "Sajjangarh Monsoon Palace overlook"
        }
      ],
      "expertNote": "Sajjangarh Fort was built to watch the monsoon clouds over the Aravalli hills.",
      "highlights": [
        "Monsoon Palace Sunset Tour",
        "Lakeside Farewell Dinner"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur"
      ]
    },
    {
      "day": 12,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur Depart",
      "title": "Departure",
      "narrative": "Enjoy your final lake palace breakfast before transfer to Udaipur Airport for your departure flight.",
      "details": {
        "accommodation": "VIP Departure Lounge",
        "experiences": "Airport departure transfer",
        "dining": "Palace breakfast",
        "transport": "Private luxury SUV & boat"
      },
      "images": [
        {
          "url": "/images/airport.webp",
          "caption": "Farewell to Rajasthan"
        }
      ],
      "expertNote": "Connect seamlessly to your domestic flight back to Delhi or Mumbai.",
      "highlights": [
        "Airport Transfer Assistance"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur"
      ]
    }
  ]
},
  "palace-culture-18": {
  "id": "palace-culture-18",
  "title": "The Royal Rajasthani Circuit: Lakes, Dunes & Fortresses",
  "subtitle": "The ultimate 18-day odyssey crossing Delhi, Agra, Jaipur, Pushkar, Udaipur, Jawai leopards, Jodhpur, and Jaisalmer.",
  "duration": "18 Days / 17 Nights",
  "regionsVisited": "Delhi, Agra, Jaipur, Pushkar, Udaipur, Jawai, Jodhpur, Jaisalmer",
  "accommodations": "Legendary Heritage Palaces & Luxury Safari Tents",
  "transfer": "Private SUV & 4x4 Wilderness Jeeps",
  "heroImage": "/images/Umaid Bhawan Palace Jodhpur.webp",
  "ctaBgImage": "/images/wildlife.jpg",
  "markerKeys": [
    "delhi",
    "agra",
    "jaipur",
    "pushkar",
    "udaipur",
    "jawai",
    "jodhpur",
    "jaisalmer"
  ],
  "routeCoords": [
    [
      77.209,
      28.6139
    ],
    [
      78.0081,
      27.1767
    ],
    [
      75.7873,
      26.9124
    ],
    [
      74.5554,
      26.4892
    ],
    [
      73.7125,
      24.5854
    ],
    [
      73.1678,
      25.1058
    ],
    [
      73.0243,
      26.2389
    ],
    [
      70.9169,
      26.9157
    ],
    [
      77.209,
      28.6139
    ]
  ],
  "accommodationsList": [
    {
      "title": "The Imperial Delhi",
      "desc": "An elegant Victorian-style colonial heritage landmark in New Delhi.",
      "image": "/images/the-imperial-newdelhi.webp"
    },
    {
      "title": "The Oberoi Amarvilas, Agra",
      "desc": "Stunning luxury hotel featuring direct monument views from every room.",
      "image": "/images/The Oberoi Amarvilas.jpg"
    },
    {
      "title": "Rambagh Palace, Jaipur",
      "desc": "The glorious heritage palace of the Maharaja of Jaipur.",
      "image": "/images/Rambagh-Palace-jaipur.jpg"
    },
    {
      "title": "Pushkar Palace",
      "desc": "A heritage property set directly on the banks of Pushkar's sacred lake.",
      "image": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg"
    },
    {
      "title": "Taj Lake Palace, Udaipur",
      "desc": "A legendary white marble palace rising from the center of Lake Pichola.",
      "image": "/images/taj-lake-palace-udaipur.jpeg"
    },
    {
      "title": "Suján Jawai Camp",
      "desc": "An ultra-luxury canvas outpost positioned amidst granite hills where leopards roam free.",
      "image": "/images/wildlife.jpg"
    },
    {
      "title": "Taj Umaid Bhawan Palace, Jodhpur",
      "desc": "A stunning Art Deco palace once home to Jodhpur's Maharaja.",
      "image": "/images/jodhpur-mehrangarh.webp"
    },
    {
      "title": "Suryagarh Jaisalmer",
      "desc": "A fortress hotel in the Thar desert combining rugged majesty with extreme luxury.",
      "image": "/images/jaisalmer-fort.jpg"
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Arrival & Welcome",
      "title": "Imperial Greeting",
      "narrative": "Arrive in Delhi. Enjoy private transfer to your landmark heritage hotel.",
      "details": {
        "accommodation": "The Imperial Delhi (Grand Heritage Suite)",
        "experiences": "VIP airport transfer, private welcome briefing",
        "dining": "Welcome dinner at Spice Route",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/the-imperial-newdelhi.webp",
          "caption": "Arriving at The Imperial Delhi"
        }
      ],
      "expertNote": "Relax tonight before starting your cultural route across Rajasthan.",
      "highlights": [
        "VIP Airport Fast-track",
        "Heritage Suite Stay"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 2,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi Tour",
      "title": "Dynasties of Delhi",
      "narrative": "Explore the historical treasures of Delhi, from Old Delhi's bustling alleyways to Humayun's Tomb.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Guided heritage sites walk, museum access",
        "dining": "Mughlai lunch, fine contemporary dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Historic sights of Old Delhi"
        }
      ],
      "expertNote": "Humayun's Tomb is the precursor to the Taj Mahal.",
      "highlights": [
        "Old Delhi Rickshaw Tour",
        "Humayun's Tomb Tour"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 3,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Delhi to Agra Drive",
      "title": "Taj Mahal Sunset",
      "narrative": "Drive to Agra. Check into Oberoi Amarvilas. Stand before the Taj Mahal at sunset, watching the white marble change color.",
      "details": {
        "accommodation": "The Oberoi Amarvilas (Premier Taj View Suite)",
        "experiences": "Private Taj Mahal sunset viewing, artisan marble workshop",
        "dining": "Awadhi thali dinner at Esphahan",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/taj-mahal.webp",
          "caption": "The Taj Mahal glowing at sunset"
        }
      ],
      "expertNote": "Twilight is the most beautiful time to see the Taj Mahal, when the crowds begin to fade.",
      "highlights": [
        "Taj Mahal Sunset Walk",
        "Oberoi Taj View Suite"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 4,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Agra Heritage Tour",
      "title": "Mughal Citadels",
      "narrative": "Visit Agra Fort and explore its grand palaces. Discover the delicate marble carvings of the Baby Taj.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Agra Fort guided tour, Baby Taj visit",
        "dining": "Fine Mughlai lunch, palace high tea",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/agra-fort.jpeg",
          "caption": "Agra Fort sandstone walls"
        }
      ],
      "expertNote": "Look out from the fort's Jasmine Tower, where Emperor Shah Jahan spent his final years.",
      "highlights": [
        "Agra Fort Palace Walk",
        "Tomb of Itmad-ud-Daulah"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 5,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Agra to Jaipur",
      "title": "Fatehpur Sikri & Pink City",
      "narrative": "Drive to Jaipur, stopping at the preserved capital of Fatehpur Sikri. Settle into the legendary Rambagh Palace.",
      "details": {
        "accommodation": "Rambagh Palace (Historical Suite)",
        "experiences": "Fatehpur Sikri guided tour, traditional royal greeting",
        "dining": "Rajasthani thali in a gilded courtyard",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Rambagh-Palace-jaipur.jpg",
          "caption": "Rambagh Palace Jaipur"
        }
      ],
      "expertNote": "Fatehpur Sikri is beautifully preserved, capturing the grandeur of Emperor Akbar's court.",
      "highlights": [
        "Fatehpur Sikri Tour",
        "Maharajah Royal Welcome"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 6,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur Heritage Tour",
      "title": "Amber Fort & City Palace",
      "narrative": "Ascend Amber Fort. Visit the City Palace and marvel at the pink sandstone walls of Hawa Mahal.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Amber Fort private tour, exclusive City Palace archives access",
        "dining": "Palace courtyard lunch, fine dining dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/city-palace-jaipur.webp",
          "caption": "Jaipur City Palace courtyards"
        }
      ],
      "expertNote": "The Sheesh Mahal inside Amber Fort is covered in thousands of hand-cut mirrors.",
      "highlights": [
        "Amber Fort Hill Climb",
        "City Palace Royal Access"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 7,
      "location": "Pushkar",
      "locationKey": "pushkar",
      "meta": "Jaipur to Pushkar",
      "title": "Sacred Lake Sunset",
      "narrative": "Drive to Pushkar. Check into Pushkar Palace. Stroll around the sacred lake and watch the sunset prayers.",
      "details": {
        "accommodation": "Pushkar Palace (Heritage Room)",
        "experiences": "Guided sacred lake walk, ghat sunset ceremony",
        "dining": "Traditional Rajasthani vegetarian dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Sacred lake of Pushkar"
        }
      ],
      "expertNote": "Pushkar is one of the oldest cities in India and holds the rare Brahma Temple.",
      "highlights": [
        "Sacred Lake Rituals",
        "Pushkar Palace Settle"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar"
      ]
    },
    {
      "day": 8,
      "location": "Pushkar",
      "locationKey": "pushkar",
      "meta": "Pushkar Sights",
      "title": "Brahma Temple & Camel Safari",
      "narrative": "Visit the Brahma Temple. Spend the afternoon taking a camel safari through the surrounding sand dunes.",
      "details": {
        "accommodation": "Pushkar Palace",
        "experiences": "Brahma Temple tour, desert camel safari",
        "dining": "Organic farm lunch, sunset dune barbecue",
        "transport": "Private SUV & camel"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Desert dunes of Pushkar"
        }
      ],
      "expertNote": "Pushkar is famous for its annual camel fair, attracting thousands of nomads.",
      "highlights": [
        "Brahma Temple Tour",
        "Sunset Camel Dunes Safari"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar"
      ]
    },
    {
      "day": 9,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Pushkar to Udaipur",
      "title": "Fly to Lake Pichola",
      "narrative": "Drive to Udaipur. Board a private motorboat to Taj Lake Palace rising from Lake Pichola.",
      "details": {
        "accommodation": "Taj Lake Palace Udaipur (Luxury Suite)",
        "experiences": "Lake Pichola boat transfer, evening sunset cruise",
        "dining": "Mewari tasting menu at Neel Kamal",
        "transport": "Private luxury SUV & boat"
      },
      "images": [
        {
          "url": "/images/taj-lake-palace-udaipur.jpeg",
          "caption": "Floating Taj Lake Palace Udaipur"
        }
      ],
      "expertNote": "Taj Lake Palace was built in 1746 as a royal summer pleasure palace.",
      "highlights": [
        "Lake Pichola Boat Transfer",
        "Taj Lake Palace Settle"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur"
      ]
    },
    {
      "day": 10,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur Sights",
      "title": "Palaces of Udaipur",
      "narrative": "Explore Udaipur's City Palace, crystal gallery, and the peaceful gardens of Saheliyon-ki-Bari.",
      "details": {
        "accommodation": "Taj Lake Palace Udaipur",
        "experiences": "City Palace private tour, vintage car collection view",
        "dining": "Lakeside lunch, rooftop terrace dinner",
        "transport": "Private luxury SUV & boat"
      },
      "images": [
        {
          "url": "/images/courtyards-udaipur-city-palace.jpg",
          "caption": "Udaipur City Palace courtyards"
        }
      ],
      "expertNote": "City Palace Udaipur is the largest palace complex in Rajasthan.",
      "highlights": [
        "City Palace Mewar Tour",
        "Vintage Car Exhibition"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur"
      ]
    },
    {
      "day": 11,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Monsoon Palace Sunset",
      "title": "Monsoon Palace Sunset view",
      "narrative": "Visit the Sajjangarh Monsoon Palace perched on a hilltop, offering panoramic views of Udaipur's lakes and city lights.",
      "details": {
        "accommodation": "Taj Lake Palace Udaipur",
        "experiences": "Sajjangarh Monsoon Palace sunset tour",
        "dining": "Fine lakeside dining at Neel Kamal",
        "transport": "Private luxury SUV & boat"
      },
      "images": [
        {
          "url": "/images/taj-lake-palace-udaipur.jpeg",
          "caption": "Sajjangarh Monsoon Palace overlook"
        }
      ],
      "expertNote": "Sajjangarh Fort was built to watch the monsoon clouds over the Aravalli hills.",
      "highlights": [
        "Monsoon Palace Sunset Tour",
        "Lakeside Farewell Dinner"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur"
      ]
    },
    {
      "day": 12,
      "location": "Jawai",
      "locationKey": "jawai",
      "meta": "Udaipur to Jawai",
      "title": "Granite Hills & Leopards",
      "narrative": "Drive north to the Jawai conservation area. Settle into Suján Jawai, an ultra-luxury safari camp.",
      "details": {
        "accommodation": "Suján Jawai Camp (Luxury Tent)",
        "experiences": "Wilderness welcome, evening leopard tracking safari",
        "dining": "Gourmet campfire dining",
        "transport": "Private SUV & open 4x4 safari jeep"
      },
      "images": [
        {
          "url": "/images/wildlife.jpg",
          "caption": "Granite hills of Jawai leopard area"
        }
      ],
      "expertNote": "Jawai represents a unique conservation model where leopards and local shepherds live in harmony.",
      "highlights": [
        "Suján Jawai Check-in",
        "Sunset Leopard Safari"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur",
        "jawai"
      ]
    },
    {
      "day": 13,
      "location": "Jawai",
      "locationKey": "jawai",
      "meta": "Jawai Safaris",
      "title": "Leopard Safaris & Shepherd Walks",
      "narrative": "Embark on dawn and dusk 4x4 safaris. Walk through the granite hills with local Rabari shepherds in their traditional red robes.",
      "details": {
        "accommodation": "Suján Jawai Camp",
        "experiences": "Morning & afternoon safaris, Rabari cultural walk",
        "dining": "Bush breakfast, fireside lanterns dinner",
        "transport": "Open 4x4 safari jeep"
      },
      "images": [
        {
          "url": "/images/nimaj-village.jpg",
          "caption": "Rabari shepherds near Jawai"
        }
      ],
      "expertNote": "The Rabari people have guided herds through these hills for centuries.",
      "highlights": [
        "Dawn Leopard Tracking",
        "Rabari Guided Hill Walk"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur",
        "jawai"
      ]
    },
    {
      "day": 14,
      "location": "Jodhpur",
      "locationKey": "jodhpur",
      "meta": "Jawai to Jodhpur",
      "title": "Umaid Bhawan Art Deco Palace",
      "narrative": "Drive to Jodhpur. Check into Umaid Bhawan Palace, a stunning golden sandstone palace set inside royal gardens.",
      "details": {
        "accommodation": "Taj Umaid Bhawan Palace (Historical Suite)",
        "experiences": "Palace history walkthrough, garden stroll",
        "dining": "Gourmet dining at Risala",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/jodhpur-mehrangarh.webp",
          "caption": "Umaid Bhawan Palace grounds"
        }
      ],
      "expertNote": "Umaid Bhawan contains a private museum featuring royal artifacts.",
      "highlights": [
        "Umaid Bhawan Check-in",
        "Risala Fine Dining"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur",
        "jawai",
        "jodhpur"
      ]
    },
    {
      "day": 15,
      "location": "Jodhpur",
      "locationKey": "jodhpur",
      "meta": "Jodhpur Tour",
      "title": "Mehrangarh Fort private tour",
      "narrative": "Tour Mehrangarh Fort rising above the blue city. Explore the old stepwells and market streets of Jodhpur.",
      "details": {
        "accommodation": "Taj Umaid Bhawan Palace",
        "experiences": "Mehrangarh Fort private tour, Toorji stepwell walk",
        "dining": "Heritage lunch, terrace dining overlooking the fort",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/jodhpur-mehrangarh.webp",
          "caption": "Mehrangarh Fort Jodhpur"
        }
      ],
      "expertNote": "Toorji Ka Jhalra is an restored stepwell showing historical water architecture.",
      "highlights": [
        "Mehrangarh Fort Tour",
        "Ancient Stepwell Walk"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur",
        "jawai",
        "jodhpur"
      ]
    },
    {
      "day": 16,
      "location": "Jaisalmer",
      "locationKey": "jaisalmer",
      "meta": "Jodhpur to Jaisalmer",
      "title": "The Golden Fortress",
      "narrative": "Board a domestic flight to Jaisalmer. Settle into Suryagarh, a majestic resort built like a desert fort.",
      "details": {
        "accommodation": "Suryagarh Jaisalmer (Luxury Suite)",
        "experiences": "Desert fortress arrival greeting, pool-side relaxation",
        "dining": "Traditional desert-style barbecue thali",
        "transport": "Private SUV & domestic flight"
      },
      "images": [
        {
          "url": "/images/jaisalmer-fort.jpg",
          "caption": "Suryagarh Jaisalmer desert outpost"
        }
      ],
      "expertNote": "Suryagarh offers pure desert isolation combined with modern palace hospitality.",
      "highlights": [
        "Flight to Thar Desert",
        "Fortress Arrival Welcome"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur",
        "jawai",
        "jodhpur",
        "jaisalmer"
      ]
    },
    {
      "day": 17,
      "location": "Jaisalmer",
      "locationKey": "jaisalmer",
      "meta": "Jaisalmer Dunes",
      "title": "Thar Dunes & Fort Walk",
      "narrative": "Walk through Jaisalmer's living fort. At sunset, ride camels into the Sam Sand Dunes, followed by desert folk music.",
      "details": {
        "accommodation": "Suryagarh Jaisalmer",
        "experiences": "Living fort walking tour, camel dune safari",
        "dining": "Suryagarh private dune dinner under starlight",
        "transport": "Private 4x4 SUV & Camel"
      },
      "images": [
        {
          "url": "/images/jaisalmer-fort.jpg",
          "caption": "Sunrise over Jaisalmer Fort"
        }
      ],
      "expertNote": "The dunes look spectacular as the desert sands change colors at sunset.",
      "highlights": [
        "Living Fort Tour",
        "Sunset Camel Dunes Safari",
        "Dune Dinner under Stars"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur",
        "jawai",
        "jodhpur",
        "jaisalmer"
      ]
    },
    {
      "day": 18,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Jaisalmer to Delhi",
      "title": "Departure",
      "narrative": "Fly back to Delhi International Airport for your departure flight home.",
      "details": {
        "accommodation": "VIP Departure Lounge",
        "experiences": "Airport departure transfer",
        "dining": "Palace breakfast",
        "transport": "Private SUV & flight"
      },
      "images": [
        {
          "url": "/images/airport.webp",
          "caption": "Farewell to India"
        }
      ],
      "expertNote": "Ensure seamless baggage check-in for your international connection.",
      "highlights": [
        "Airport Transfer Assistance"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "pushkar",
        "udaipur",
        "jawai",
        "jodhpur",
        "jaisalmer",
        "delhi"
      ]
    }
  ]
},
  "palace-wildlife-13": {
    id: "palace-wildlife-13",
    title: "Palaces & Wildlife: Sacred Sanctuaries & Royal Estates",
    subtitle: "A pristine 13-day fusion of Delhi, Agra's Taj Mahal, the peaceful valley of Amanbagh, Ranthambore tigers, and Jaipur.",
    duration: "13 Days / 12 Nights",
    regionsVisited: "Delhi, Agra, Amanbagh, Ranthambore, Jaipur",
    accommodations: "Legendary Palaces & Private Valley Outposts",
    transfer: "Private Luxury SUV & 4x4 Safari Jeeps",
    heroImage: "/images/kanha-tiger-reserve.jpg",
    ctaBgImage: "/images/wildlife.jpg",
    markerKeys: ["delhi", "agra", "amanbagh", "ranthambore", "jaipur"],
    routeCoords: [
      LOCATIONS.delhi.coords,
      LOCATIONS.agra.coords,
      LOCATIONS.amanbagh.coords,
      LOCATIONS.ranthambore.coords,
      LOCATIONS.jaipur.coords,
      LOCATIONS.delhi.coords
    ],
    accommodationsList: [
      {
        title: "The Imperial Delhi",
        desc: "An elegant Victorian-style colonial heritage landmark in New Delhi.",
        image: "/images/the-imperial-newdelhi.webp"
      },
      {
        title: "The Oberoi Amarvilas, Agra",
        desc: "Stunning luxury hotel featuring direct monument views from every room.",
        image: "/images/The Oberoi Amarvilas.jpg"
      },
      {
        title: "Amanbagh Estate, Ajabgarh",
        desc: "A sanctuary modeled on Mughal palaces, set in a peaceful valley inside the Aravalli hills.",
        image: "/images/rajasthan_palace_exterior_1776272664878.png"
      },
      {
        title: "The Oberoi Vanyavilas, Ranthambore",
        desc: "Luxury safari tents set in Ranthambore tiger reserve.",
        image: "/images/tiger_safari_1776272603448.png"
      },
      {
        title: "Rambagh Palace, Jaipur",
        desc: "The glorious heritage palace of the Maharaja of Jaipur.",
        image: "/images/Rambagh-Palace-jaipur.jpg"
      }
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Arrival & Welcome",
        title: "Imperial Greeting",
        narrative: "Arrive in Delhi. Enjoy private transfer to your landmark heritage hotel.",
        details: {
          accommodation: "The Imperial Delhi (Grand Heritage Suite)",
          experiences: "VIP airport transfer, private welcome briefing",
          dining: "Welcome dinner at Spice Route",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "Arriving at The Imperial Delhi" }],
        expertNote: "Relax tonight before starting your cultural route across Rajasthan.",
        highlights: ["VIP Airport Fast-track", "Heritage Suite Stay"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 2,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Delhi Tour",
        title: "Dynasties of Delhi",
        narrative: "Explore the historical treasures of Delhi, from Old Delhi's bustling alleyways to Humayun's Tomb.",
        details: {
          accommodation: "The Imperial Delhi",
          experiences: "Guided heritage sights walk, museum access",
          dining: "Mughlai lunch, fine contemporary dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Historic architecture and Mughal monuments of Old Delhi.jpg", caption: "Historic sights of Old Delhi" }],
        expertNote: "Humayun's Tomb is the precursor to the Taj Mahal.",
        highlights: ["Old Delhi Rickshaw Tour", "Humayun's Tomb Tour"],
        revealedRouteKeys: ["delhi"]
      },
      {
        day: 3,
        location: "Agra",
        locationKey: "agra",
        meta: "Delhi to Agra Drive",
        title: "Taj Mahal Sunset",
        narrative: "Drive to Agra. Check into Oberoi Amarvilas. Stand before the Taj Mahal at sunset, watching the white marble change color.",
        details: {
          accommodation: "The Oberoi Amarvilas (Premier Taj View Suite)",
          experiences: "Private Taj Mahal sunset viewing, artisan marble workshop",
          dining: "Awadhi thali dinner at Esphahan",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/taj-mahal.webp", caption: "The Taj Mahal glowing at sunset" }],
        expertNote: "Twilight is the most beautiful time to see the Taj Mahal, when the crowds begin to fade.",
        highlights: ["Taj Mahal Sunset Walk", "Oberoi Taj View Suite"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 4,
        location: "Agra",
        locationKey: "agra",
        meta: "Agra Heritage Tour",
        title: "Mughal Citadels",
        narrative: "Visit Agra Fort and explore its grand palaces. Discover the delicate marble carvings of the Baby Taj.",
        details: {
          accommodation: "The Oberoi Amarvilas",
          experiences: "Agra Fort guided tour, Baby Taj visit",
          dining: "Fine Mughlai lunch, palace high tea",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/agra-fort.jpeg", caption: "Agra Fort sandstone walls" }],
        expertNote: "Look out from the fort's Jasmine Tower, where Emperor Shah Jahan spent his final years.",
        highlights: ["Agra Fort Palace Walk", "Tomb of Itmad-ud-Daulah"],
        revealedRouteKeys: ["delhi", "agra"]
      },
      {
        day: 5,
        location: "Amanbagh",
        locationKey: "amanbagh",
        meta: "Agra to Amanbagh",
        title: "The Oasis of Ajabgarh",
        narrative: "Drive to the stunning Amanbagh Estate, set inside a peaceful valley inside the Aravalli hills.",
        details: {
          accommodation: "Amanbagh Estate (Courtyard Haveli Suite)",
          experiences: "Rural estate welcome, valley walks",
          dining: "Organic farm-to-table lunch & dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/rajasthan_palace_exterior_1776272664878.png", caption: "The serene grounds of Amanbagh" }],
        expertNote: "Amanbagh is a quiet sanctuary modeled on historical royal Mughal camps.",
        highlights: ["Amanbagh Haveli Settle", "Sunset Valley Walk"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh"]
      },
      {
        day: 6,
        location: "Amanbagh",
        locationKey: "amanbagh",
        meta: "Amanbagh Valley",
        title: "Temples & Cow Dust Tours",
        narrative: "Explore the ruins of Bhangarh Fort. Take a private 'Cow Dust' tour visiting local rural villages.",
        details: {
          accommodation: "Amanbagh Estate",
          experiences: "Bhangarh ruins tour, cow dust rural village tour",
          dining: "Orchard lunch, poolside traditional music dinner",
          transport: "Private SUV & open safari jeep"
        },
        images: [{ url: "/images/nimaj-village.jpg", caption: "Rural villages around Amanbagh" }],
        expertNote: "The evening 'cow dust' hour is when shepherds bring their livestock back to the villages under golden dust.",
        highlights: ["Bhangarh Fort Ruins Tour", "Cow Dust Village Safari"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh"]
      },
      {
        day: 7,
        location: "Ranthambore",
        locationKey: "ranthambore",
        meta: "Amanbagh to Ranthambore",
        title: "Wilderness outpost",
        narrative: "Drive to Ranthambore Tiger Reserve. Settle into the luxury safari outpost tents of Oberoi Vanyavilas.",
        details: {
          accommodation: "The Oberoi Vanyavilas (Luxury Safari Tent)",
          experiences: "Camp orientation, campfire twilight drinks",
          dining: "Organic lodge dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/tiger_safari_1776272603448.png", caption: "Oberoi Vanyavilas Ranthambore" }],
        expertNote: "Ranthambore was the private hunting preserve of the Maharaja of Jaipur.",
        highlights: ["Luxury Safari Tent Settle", "Campfire Twilight Session"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "ranthambore"]
      },
      {
        day: 8,
        location: "Ranthambore",
        locationKey: "ranthambore",
        meta: "Ranthambore Tiger Safaris",
        title: "Track of the Bengal Tiger",
        narrative: "Embark on dawn and dusk 4x4 safaris inside the reserve. Track Bengal Tigers, leopards, and marsh crocodiles.",
        details: {
          accommodation: "The Oberoi Vanyavilas",
          experiences: "Morning & afternoon tiger tracking safaris",
          dining: "Jungle breakfast picnic, gourmet lodge dinner",
          transport: "Safari open 4x4 jeep"
        },
        images: [{ url: "/images/peacock-bandhavgarh.jpg", caption: "Wild tigers of Ranthambore" }],
        expertNote: "Keep a look out for tigers near the historic lakeside ruins inside the park.",
        highlights: ["Dawn Tiger Tracking", "Dusk Wildlife Safari"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "ranthambore"]
      },
      {
        day: 9,
        location: "Ranthambore",
        locationKey: "ranthambore",
        meta: "Jungle Fort Hike",
        title: "The Fortress in the Jungle",
        narrative: "Hike up to the 10th-century Ranthambore Fort overlooking the entire park. Afternoon jungle safari.",
        details: {
          accommodation: "The Oberoi Vanyavilas",
          experiences: "Ranthambore Fort guided tour, afternoon safari",
          dining: "Gourmet organic lunch, candlelit forest dinner",
          transport: "Private SUV & safari jeep"
        },
        images: [{ url: "/images/wildlife.jpg", caption: "Views from Ranthambore Fort" }],
        expertNote: "The fort is a UNESCO World Heritage site and sits right inside the forest park.",
        highlights: ["Ranthambore Fort Hike", "Afternoon Tiger Safari"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "ranthambore"]
      },
      {
        day: 10,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Ranthambore to Jaipur",
        title: "Maharajah Palace Settle",
        narrative: "Drive to Jaipur. Check into the glorious Rambagh Palace, featuring manicured lawns and resident peacocks.",
        details: {
          accommodation: "Rambagh Palace (Historical Suite)",
          experiences: "Royal horse carriage welcome, palace gardens walk",
          dining: "Royal Mewari feast at Suvarna Mahal",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Rambagh-Palace-jaipur.jpg", caption: "Rambagh Palace Jaipur" }],
        expertNote: "Rambagh was home to Maharaja Sawai Man Singh II.",
        highlights: ["Royal Carriage Welcome", "Suvarna Mahal Ballroom dining"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "ranthambore", "jaipur"]
      },
      {
        day: 11,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Heritage Tour",
        title: "Amber Fort & City Palace",
        narrative: "Ascend Amber Fort. Visit the City Palace and marvel at the pink sandstone walls of Hawa Mahal.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Amber Fort private tour, exclusive City Palace archives access",
          dining: "Palace courtyard lunch, fine dining dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/city-palace-jaipur.webp", caption: "Jaipur City Palace courtyards" }],
        expertNote: "The Sheesh Mahal inside Amber Fort is covered in thousands of hand-cut mirrors.",
        highlights: ["Amber Fort Hill Climb", "City Palace Royal Access"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "ranthambore", "jaipur"]
      },
      {
        day: 12,
        location: "Jaipur",
        locationKey: "jaipur",
        meta: "Jaipur Craft & Culture",
        title: "Artisans of the Guilds",
        narrative: "Meet block-printers, gem-cutters, and painters. Discover how the ancient guilds shape modern fashion.",
        details: {
          accommodation: "Rambagh Palace",
          experiences: "Private block-printing class, gem market tour",
          dining: "Bespoke garden lunch, royal banqueting dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/Miniature painting workshops of Jaipur.webp", caption: "Traditional block-printing artisan" }],
        expertNote: "Jaipur is the gemstone capital of the world. Meet a master cutter for a private demonstration.",
        highlights: ["Block Printing Class", "Gem Market Curation", "Royal Falconry Session"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "ranthambore", "jaipur"]
      },
      {
        day: 13,
        location: "Delhi",
        locationKey: "delhi",
        meta: "Jaipur to Delhi Airport",
        title: "Departure",
        narrative: "Enjoy your final palace breakfast. Transfer back to Delhi International Airport for your departure flight home.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Palace breakfast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/airport.webp", caption: "Farewell to India" }],
        expertNote: "Enjoy airport VIP exit assistance.",
        highlights: ["VIP Airport Exit", "Scenic Countryside Drive"],
        revealedRouteKeys: ["delhi", "agra", "amanbagh", "ranthambore", "jaipur", "delhi"]
      }
    ]
  },
  "culture-beach-14": {
  "id": "culture-beach-14",
  "title": "Culture & Beach: Golden Sands and Royal Heritage",
  "subtitle": "A 14-day journey connecting Delhi's monuments, Agra's Taj Mahal, Jaipur's pink palaces, Mumbai's colonial lanes, and Goa's sunny beaches.",
  "regionsVisited": "Delhi, Agra, Jaipur, Mumbai, Goa",
  "heroImage": "/images/fontainhas-goa.png",
  "ctaBgImage": "/images/goa.jpeg",
  "markerKeys": [
    "delhi",
    "agra",
    "jaipur",
    "mumbai",
    "goa"
  ],
  "routeCoords": [
    [
      77.209,
      28.6139
    ],
    [
      78.0081,
      27.1767
    ],
    [
      75.7873,
      26.9124
    ],
    [
      72.8777,
      19.076
    ],
    [
      73.8278,
      15.2993
    ]
  ],
  "accommodations": "Palace Suites, Beach Villas, and Sea-Facing Luxury Lodges",
  "itinerary": [
    {
      "day": 1,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi Arrival",
      "title": "Arrive in Delhi",
      "narrative": "Arrive at Delhi's Indira Gandhi International Airport. Meet your private representative and transfer to your luxury hotel. Spend the rest of the day relaxing or exploring the local area.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Private airport reception",
        "dining": "Welcome dinner at Spice Route",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/the-imperial-newdelhi.webp",
          "caption": "The historic avenues of New Delhi"
        }
      ],
      "expertNote": "The Imperial offers a wonderful introduction to Delhi's colonial history and architecture.",
      "highlights": [
        "Bespoke Airport Transfer",
        "Signature Welcome Dinner"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 2,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Exploring Imperial Delhi",
      "narrative": "Explore New Delhi's grand monuments, including Humayun's Tomb, Qutub Minar, and a drive past India Gate and the President's House.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Guided historical tour",
        "dining": "Curated North Indian lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/qutub minar.webp",
          "caption": "The ancient Qutub Minar complex"
        }
      ],
      "expertNote": "Humayun's Tomb is the precursor to the Taj Mahal and looks spectacular in the late morning light.",
      "highlights": [
        "Humayun's Tomb Curation",
        "Qutub Minar Exploration"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 3,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Historic Old Delhi Lanes",
      "narrative": "Dive into Old Delhi. Visit the grand Jama Masjid, take a private rickshaw ride through the narrow lanes of Chandni Chowk, and view the imposing Red Fort.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Old Delhi rickshaw ride",
        "dining": "Traditional Mughlai lunch, dinner at a restored haveli",
        "transport": "Private luxury SUV & Rickshaw"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Jama Masjid, India's largest mosque"
        }
      ],
      "expertNote": "The spices and smells of Khari Baoli market are intense but offer a truly authentic sensory experience.",
      "highlights": [
        "Chandni Chowk Rickshaw Ride",
        "Jama Masjid Exploration"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 4,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Delhi to Agra",
      "title": "Agra Fort & Taj Sunset",
      "narrative": "Drive to Agra via the Yamuna Expressway. Check into your luxury hotel. In the afternoon, visit the magnificent Agra Fort, then witness the Taj Mahal at sunset from across the Yamuna River at Mehtab Bagh.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Agra Fort guided tour",
        "dining": "Mughal tasting menu at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/The Oberoi Amarvilas.jpg",
          "caption": "Agra Fort, a red sandstone masterpiece"
        }
      ],
      "expertNote": "Every room at Amarvilas offers an uninterrupted view of the Taj Mahal.",
      "highlights": [
        "Agra Fort Exploration",
        "Sunset at Mehtab Bagh"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 5,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Agra",
      "title": "Taj Mahal Sunrise",
      "narrative": "Witness the magical sunrise at the Taj Mahal. Return to the hotel for breakfast. Spend the afternoon exploring Agra's marble inlay artisans or relaxing at the spa.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Private sunrise visit to Taj Mahal",
        "dining": "Palace breakfast, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/taj-mahal.webp",
          "caption": "The Taj Mahal at sunrise"
        }
      ],
      "expertNote": "Entering the Taj Mahal at dawn allows you to experience the changing colors of the marble in quiet contemplation.",
      "highlights": [
        "Taj Mahal Sunrise Tour",
        "Marble Inlay Artistry Visit"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 6,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Agra to Jaipur",
      "title": "Agra to Jaipur via Fatehpur Sikri",
      "narrative": "Drive to Jaipur. En route, stop at the abandoned Mughal city of Fatehpur Sikri and the spectacular stepwell at Abhaneri. Arrive in the Pink City of Jaipur by evening.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Fatehpur Sikri & Abhaneri Stepwell tours",
        "dining": "Lunch at heritage retreat, dinner at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Rambagh-Palace-jaipur.jpg",
          "caption": "The grand gateway of Fatehpur Sikri"
        }
      ],
      "expertNote": "The Chand Baori stepwell in Abhaneri is a geometric marvel dating back to the 8th century.",
      "highlights": [
        "Fatehpur Sikri Guided Walk",
        "Abhaneri Stepwell Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 7,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur",
      "title": "Amer Fort & Hawa Mahal",
      "narrative": "Visit the stunning Amer Fort, perched on a hilltop. Drive past the iconic Hawa Mahal (Palace of Winds) and visit the tranquil Jal Mahal.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Amer Fort private tour",
        "dining": "Traditional Rajasthani thali, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/amber-fort.jpg",
          "caption": "Amer Fort's yellow sandstone battlements"
        }
      ],
      "expertNote": "Visit the Sheesh Mahal (Mirror Palace) inside Amer Fort, where a single match can illuminate the entire hall.",
      "highlights": [
        "Amer Fort Hilltop Tour",
        "Hawa Mahal Photography"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 8,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur",
      "title": "City Palace & Local Markets",
      "narrative": "Explore the City Palace and the Jantar Mantar observatory. In the afternoon, browse the colorful local bazaar for textiles, jewelry, and pottery.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "City Palace private rooms visit",
        "dining": "Bespoke lunch, dinner at heritage venue",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/city-palace-jaipur.webp",
          "caption": "The Royal courtyards of City Palace"
        }
      ],
      "expertNote": "Enjoy exclusive entry to the private residential quarters of the royal family in City Palace.",
      "highlights": [
        "City Palace Private Tour",
        "Jantar Mantar Astronomical Site"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 9,
      "location": "Mumbai",
      "locationKey": "mumbai",
      "meta": "Jaipur to Mumbai",
      "title": "Flight to Mumbai",
      "narrative": "Fly to Mumbai. Transfer to your luxury hotel overlooking the Gateway of India. Stroll along the seaside promenade and witness the bustling energy of the financial capital.",
      "details": {
        "accommodation": "The Taj Mahal Palace, Mumbai",
        "experiences": "Domestic flight transfer",
        "dining": "Coastal cuisine dinner",
        "transport": "Private luxury SUV & Flight"
      },
      "images": [
        {
          "url": "/images/taj-mahal-palace-mumbai.jpg",
          "caption": "The iconic Taj Mahal Palace, Mumbai"
        }
      ],
      "expertNote": "The Harbor Bar at the Taj was the first licensed bar in India and is perfect for a historic nightcap.",
      "highlights": [
        "Arabian Sea Sunset",
        "Gateway of India Walk"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "mumbai"
      ]
    },
    {
      "day": 10,
      "location": "Mumbai",
      "locationKey": "mumbai",
      "meta": "Mumbai",
      "title": "Elephanta Caves & Mumbai Heritage",
      "narrative": "Take a private boat to Elephanta Caves. In the afternoon, embark on a heritage city tour covering Victoria Terminus, Mani Bhavan, and Dhobi Ghat.",
      "details": {
        "accommodation": "The Taj Mahal Palace, Mumbai",
        "experiences": "Private boat charter to Elephanta Caves",
        "dining": "Mumbai street food curation, dinner at hotel",
        "transport": "Private luxury SUV & Boat"
      },
      "images": [
        {
          "url": "/images/The Taj Mahal Palace Hotel overlooking Mumbai Harbor.jpg",
          "caption": "The Gateway of India monument"
        }
      ],
      "expertNote": "Elephanta's 3-headed Shiva sculpture is a masterwork of 6th-century rock-cut art.",
      "highlights": [
        "Elephanta Caves Boat Charter",
        "Mumbai Colonial Heritage Walk"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "mumbai"
      ]
    },
    {
      "day": 11,
      "location": "Goa",
      "locationKey": "goa",
      "meta": "Mumbai to Goa",
      "title": "Flight to Sunny Goa",
      "narrative": "Fly to Goa. Check into your Mediterranean-style beachside villa. Spend the rest of the day relaxing on the soft sands of Benaulim Beach.",
      "details": {
        "accommodation": "Taj Exotica Resort & Spa, Goa",
        "experiences": "Domestic flight transfer",
        "dining": "Beachfront seafood dinner",
        "transport": "Private luxury SUV & Flight"
      },
      "images": [
        {
          "url": "/images/goa.jpeg",
          "caption": "Beautiful beaches of Goa"
        }
      ],
      "expertNote": "Taj Exotica has an excellent spa and direct private access to a clean, serene stretch of beach.",
      "highlights": [
        "Beachfront Sunset",
        "Goan Seafood Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "mumbai",
        "goa"
      ]
    },
    {
      "day": 12,
      "location": "Goa",
      "locationKey": "goa",
      "meta": "Goa",
      "title": "Churches of Old Goa",
      "narrative": "Visit the UNESCO World Heritage sites of Old Goa, including the Basilica of Bom Jesus, which houses the mortal remains of St. Francis Xavier, and the grand Se Cathedral.",
      "details": {
        "accommodation": "Taj Exotica Resort & Spa, Goa",
        "experiences": "UNESCO World Heritage churches tour",
        "dining": "Portuguese-Goan heritage lunch, dinner at resort",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/basilica-bom-jesus.png",
          "caption": "Basilica of Bom Jesus"
        }
      ],
      "expertNote": "Se Cathedral is the largest church in Asia and has a famous Golden Bell.",
      "highlights": [
        "Old Goa Heritage Walk",
        "Basilica of Bom Jesus Tour"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "mumbai",
        "goa"
      ]
    },
    {
      "day": 13,
      "location": "Goa",
      "locationKey": "goa",
      "meta": "Goa",
      "title": "Fontainhas Latin Quarter & Beach Leisure",
      "narrative": "Stroll through the colorful lanes of Fontainhas, the Latin Quarter of Panaji. Return to your resort for a relaxing afternoon under the coconut palms.",
      "details": {
        "accommodation": "Taj Exotica Resort & Spa, Goa",
        "experiences": "Fontainhas heritage walking tour",
        "dining": "Authentic lunch at a heritage Goan home, beachside farewell dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/fontainhas-goa.png",
          "caption": "Fontainhas Latin Quarter lanes"
        }
      ],
      "expertNote": "Keep an eye out for beautiful hand-painted ceramic tiles (azulejos) on the house facades.",
      "highlights": [
        "Fontainhas Latin Quarter Walk",
        "Beachside Farewell Dinner"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "mumbai",
        "goa"
      ]
    },
    {
      "day": 14,
      "location": "Goa",
      "locationKey": "goa",
      "meta": "Goa Departure",
      "title": "Goa Departure",
      "narrative": "Transfer to Goa International Airport for your departure flight home or to Delhi/Mumbai to connect to your international flight.",
      "details": {
        "accommodation": "VIP Departure Lounge",
        "experiences": "Airport departure transfer",
        "dining": "Resort breakfast",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/airport.webp",
          "caption": "Farewell to India"
        }
      ],
      "expertNote": "Ensure your luggage is packed securely with any fragile souvenirs from Goa.",
      "highlights": [
        "Airport Departure Transfer",
        "VIP Lounge Access"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "mumbai",
        "goa"
      ]
    }
  ],
  "duration": "14 Days / 13 Nights",
  "transfer": "Private Luxury SUV, Domestic Flight, and Chauffeur Transfers"
},
  "palace-spiritual-beach-15": {
  "id": "palace-spiritual-beach-15",
  "title": "Palaces, Temples & Golden Sands: The Grand Northern & Beach Odyssey",
  "subtitle": "A 15-day luxury journey connecting Delhi's historical center, the Golden Temple of Amritsar, Rajasthan's royal forts, and Goa's serene beaches.",
  "regionsVisited": "Delhi, Amritsar, Jaipur, Udaipur, Goa",
  "heroImage": "/images/destinations_hero_1776334796479.png",
  "ctaBgImage": "/images/destinations_hero_1776334796479.png",
  "markerKeys": [
    "delhi",
    "amritsar",
    "jaipur",
    "udaipur",
    "goa"
  ],
  "routeCoords": [
    [
      77.209,
      28.6139
    ],
    [
      74.8723,
      31.634
    ],
    [
      75.7873,
      26.9124
    ],
    [
      73.7125,
      24.5854
    ],
    [
      73.8278,
      15.2993
    ]
  ],
  "accommodations": "Luxury Heritage Hotels, Lake Palaces, and Beach Villas",
  "itinerary": [
    {
      "day": 1,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi Arrival",
      "title": "Arrive in Delhi",
      "narrative": "Arrive in New Delhi. Transfer to your luxury hotel. Rest after your flight.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "VIP airport reception",
        "dining": "Dinner at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/the-imperial-newdelhi.webp",
          "caption": "The historic capital of India"
        }
      ],
      "expertNote": "Relax at the hotel's award-winning spa to get over jet lag.",
      "highlights": [
        "Bespoke Airport Transfer",
        "Signature Welcome Dinner"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 2,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Delhi Sightseeing",
      "narrative": "Explore New Delhi's monuments including Qutub Minar, Humayun's Tomb, and a drive past the government buildings.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Guided historical tour",
        "dining": "North Indian lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/qutub minar.webp",
          "caption": "The ancient Qutub Minar complex"
        }
      ],
      "expertNote": "Witness the magnificent stone carvings at Qutub Minar.",
      "highlights": [
        "Humayun's Tomb Curation",
        "Qutub Minar Exploration"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 3,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Old Delhi Lanes",
      "narrative": "Visit the Jama Masjid, take a rickshaw ride through the narrow lanes of Chandni Chowk, and view the Red Fort.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Rickshaw ride in Chandni Chowk",
        "dining": "Mughlai lunch, dinner at leisure",
        "transport": "Private luxury SUV & Rickshaw"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Jama Masjid mosque"
        }
      ],
      "expertNote": "Experience the vibrant energy and spices of Old Delhi.",
      "highlights": [
        "Chandni Chowk Rickshaw Ride",
        "Jama Masjid Exploration"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 4,
      "location": "Amritsar",
      "locationKey": "amritsar",
      "meta": "Delhi to Amritsar",
      "title": "Flight to Amritsar & Golden Temple Night Ceremony",
      "narrative": "Take a domestic flight to Amritsar. Check into your luxury hotel. In the evening, witness the spiritual Palki Sahib ceremony at the spectacular Golden Temple.",
      "details": {
        "accommodation": "Taj Swarna, Amritsar",
        "experiences": "Palki Sahib ceremony curation",
        "dining": "Traditional Punjabi dinner",
        "transport": "Private luxury SUV & Flight"
      },
      "images": [
        {
          "url": "/images/destinations_hero_1776334796479.png",
          "caption": "The glittering Golden Temple at night"
        }
      ],
      "expertNote": "The night ceremony is a highly emotional and serene ritual where the holy book is carried to its resting room.",
      "highlights": [
        "Golden Temple Night Visit",
        "Palki Sahib Ceremony"
      ],
      "revealedRouteKeys": [
        "delhi",
        "amritsar"
      ]
    },
    {
      "day": 5,
      "location": "Amritsar",
      "locationKey": "amritsar",
      "meta": "Amritsar",
      "title": "Golden Temple & Wagah Border Ceremony",
      "narrative": "Visit the Golden Temple during the day to see the community kitchen (Langar). In the afternoon, drive to the Wagah Border to experience the high-spirited border closing ceremony between India and Pakistan.",
      "details": {
        "accommodation": "Taj Swarna, Amritsar",
        "experiences": "Community kitchen volunteer visit & Wagah border VIP seats",
        "dining": "Traditional local lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/destinations_hero_1776334796479.png",
          "caption": "The massive community kitchen (Langar) of Golden Temple"
        }
      ],
      "expertNote": "The Langar serves over 100,000 people daily, completely free, run entirely by volunteers.",
      "highlights": [
        "Langar Kitchen Experience",
        "Wagah Border Border Ceremony"
      ],
      "revealedRouteKeys": [
        "delhi",
        "amritsar"
      ]
    },
    {
      "day": 6,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Amritsar to Jaipur",
      "title": "Flight to Jaipur",
      "narrative": "Fly from Amritsar to the Pink City of Jaipur. Check into your royal palace suite. Relax at leisure in the afternoon.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Domestic flight transfer",
        "dining": "Heritage dining room dinner",
        "transport": "Private luxury SUV & Flight"
      },
      "images": [
        {
          "url": "/images/Rambagh-Palace-jaipur.jpg",
          "caption": "Rambagh Palace gardens"
        }
      ],
      "expertNote": "Take a stroll through the manicured palace lawns where peacocks roam freely.",
      "highlights": [
        "Royal Palace Check-in",
        "Manicured Palace Lawns Walk"
      ],
      "revealedRouteKeys": [
        "delhi",
        "amritsar",
        "jaipur"
      ]
    },
    {
      "day": 7,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur",
      "title": "Amer Fort & Hawa Mahal",
      "narrative": "Visit the hilltop Amer Fort, photograph the iconic Hawa Mahal, and visit the serene Jal Mahal.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Amer Fort private tour",
        "dining": "Heritage thali lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/amber-fort.jpg",
          "caption": "Amer Fort sandstone battlements"
        }
      ],
      "expertNote": "The Sheesh Mahal inside Amer Fort is globally renowned for its exquisite mirror mosaic work.",
      "highlights": [
        "Amer Fort Hilltop Tour",
        "Hawa Mahal Photography"
      ],
      "revealedRouteKeys": [
        "delhi",
        "amritsar",
        "jaipur"
      ]
    },
    {
      "day": 8,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur",
      "title": "City Palace & Bazaars",
      "narrative": "Explore the City Palace and the Jantar Mantar observatory. In the afternoon, browse the colorful local bazaar.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "City Palace private rooms visit",
        "dining": "Bespoke lunch, dinner at heritage venue",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/city-palace-jaipur.webp",
          "caption": "City Palace courtyards"
        }
      ],
      "expertNote": "Enjoy exclusive entry to the private residential quarters of the royal family in City Palace.",
      "highlights": [
        "City Palace Private Tour",
        "Jantar Mantar Astronomical Site"
      ],
      "revealedRouteKeys": [
        "delhi",
        "amritsar",
        "jaipur"
      ]
    },
    {
      "day": 9,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Jaipur to Udaipur",
      "title": "Travel to Udaipur & Sunset Cruise",
      "narrative": "Drive or fly to Udaipur. In the evening, take a private boat cruise on the placid waters of Lake Pichola, watching the sun set behind the Aravali hills.",
      "details": {
        "accommodation": "Taj Lake Palace, Udaipur",
        "experiences": "Lake Pichola boat cruise",
        "dining": "Lakeside dining at hotel",
        "transport": "Private luxury SUV & Boat"
      },
      "images": [
        {
          "url": "/images/taj-lake-palace-udaipur.jpeg",
          "caption": "Lake Pichola's white marble palaces"
        }
      ],
      "expertNote": "The Taj Lake Palace appears to float on the water and looks spectacular during sunset.",
      "highlights": [
        "Lake Pichola Private Cruise",
        "Floating Palace Arrival"
      ],
      "revealedRouteKeys": [
        "delhi",
        "amritsar",
        "jaipur",
        "udaipur"
      ]
    },
    {
      "day": 10,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur",
      "title": "City Palace & Jagdish Temple",
      "narrative": "Explore the massive City Palace complex, the largest in Rajasthan. Visit the 17th-century Jagdish Temple and take a stroll in Saheliyon-ki-Bari.",
      "details": {
        "accommodation": "Taj Lake Palace, Udaipur",
        "experiences": "City Palace guided walk",
        "dining": "Traditional Mewari lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/courtyards-udaipur-city-palace.jpg",
          "caption": "Udaipur City Palace overlooking the lake"
        }
      ],
      "expertNote": "The crystal gallery inside City Palace houses a massive royal collection of crystal ordered from Birmingham in 1877.",
      "highlights": [
        "City Palace Museum Walk",
        "Jagdish Temple Visit"
      ],
      "revealedRouteKeys": [
        "delhi",
        "amritsar",
        "jaipur",
        "udaipur"
      ]
    },
    {
      "day": 11,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur",
      "title": "Udaipur Leisure & Monsoon Palace Views",
      "narrative": "Spend the morning relaxing at the floating palace. In the late afternoon, drive up to the hilltop Monsoon Palace (Sajjangarh) for panoramic views of the lakes and surrounding countryside.",
      "details": {
        "accommodation": "Taj Lake Palace, Udaipur",
        "experiences": "Monsoon Palace sunset tour",
        "dining": "Bespoke dinner at the palace courtyard",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/hero_palace_lake_1776272480532.png",
          "caption": "Monsoon Palace overlooking Udaipur"
        }
      ],
      "expertNote": "The Monsoon Palace was originally built to watch the progress of monsoon clouds.",
      "highlights": [
        "Monsoon Palace Sunset Tour",
        "Palace Courtyard Dining"
      ],
      "revealedRouteKeys": [
        "delhi",
        "amritsar",
        "jaipur",
        "udaipur"
      ]
    },
    {
      "day": 12,
      "location": "Goa",
      "locationKey": "goa",
      "meta": "Udaipur to Goa",
      "title": "Flight to Sunny Goa",
      "narrative": "Fly to Goa. Check into your Mediterranean-style beachside villa. Spend the rest of the day relaxing on the beach.",
      "details": {
        "accommodation": "Taj Exotica Resort & Spa, Goa",
        "experiences": "Domestic flight transfer",
        "dining": "Beachfront seafood dinner",
        "transport": "Private luxury SUV & Flight"
      },
      "images": [
        {
          "url": "/images/goa.jpeg",
          "caption": "Serene Goan beaches"
        }
      ],
      "expertNote": "Enjoy a relaxing evening on the soft sands.",
      "highlights": [
        "Beachfront Sunset",
        "Goan Seafood Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "amritsar",
        "jaipur",
        "udaipur",
        "goa"
      ]
    },
    {
      "day": 13,
      "location": "Goa",
      "locationKey": "goa",
      "meta": "Goa",
      "title": "Churches of Old Goa",
      "narrative": "Visit the UNESCO World Heritage sites of Old Goa, including the Basilica of Bom Jesus and Se Cathedral.",
      "details": {
        "accommodation": "Taj Exotica Resort & Spa, Goa",
        "experiences": "UNESCO World Heritage churches tour",
        "dining": "Portuguese-Goan lunch, dinner at resort",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/basilica-bom-jesus.png",
          "caption": "Basilica of Bom Jesus"
        }
      ],
      "expertNote": "Se Cathedral has a famous Golden Bell, the largest in Goa.",
      "highlights": [
        "Old Goa Heritage Walk",
        "Basilica of Bom Jesus Tour"
      ],
      "revealedRouteKeys": [
        "delhi",
        "amritsar",
        "jaipur",
        "udaipur",
        "goa"
      ]
    },
    {
      "day": 14,
      "location": "Goa",
      "locationKey": "goa",
      "meta": "Goa",
      "title": "Fontainhas Latin Quarter",
      "narrative": "Stroll through the colorful lanes of Fontainhas, the Latin Quarter of Panaji. Return to your resort for a relaxing afternoon.",
      "details": {
        "accommodation": "Taj Exotica Resort & Spa, Goa",
        "experiences": "Fontainhas heritage walking tour",
        "dining": "Lunch at heritage Goan home, beachside farewell dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/fontainhas-goa.png",
          "caption": "Fontainhas Latin Quarter"
        }
      ],
      "expertNote": "Witness the bright yellow, red, and blue Portuguese-style houses.",
      "highlights": [
        "Fontainhas Latin Quarter Walk",
        "Beachside Farewell Dinner"
      ],
      "revealedRouteKeys": [
        "delhi",
        "amritsar",
        "jaipur",
        "udaipur",
        "goa"
      ]
    },
    {
      "day": 15,
      "location": "Goa",
      "locationKey": "goa",
      "meta": "Goa Departure",
      "title": "Goa Departure",
      "narrative": "Transfer to Goa International Airport for your departure flight home.",
      "details": {
        "accommodation": "VIP Departure Lounge",
        "experiences": "Airport departure transfer",
        "dining": "Resort breakfast",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/airport.webp",
          "caption": "Farewell to India"
        }
      ],
      "expertNote": "Enjoy VIP departure assistance at the airport.",
      "highlights": [
        "Airport Departure Transfer",
        "VIP Lounge Access"
      ],
      "revealedRouteKeys": [
        "delhi",
        "amritsar",
        "jaipur",
        "udaipur",
        "goa"
      ]
    }
  ],
  "duration": "15 Days / 14 Nights",
  "transfer": "Private Luxury SUV, Flights, and Chauffeur Services"
},
  "north-south-culture-16": {
  "id": "north-south-culture-16",
  "title": "North & South Culture: Grand Imperial Cities & Kerala Backwaters",
  "subtitle": "A 16-day luxury journey linking Delhi, Agra, and Jaipur in the North with Cochin, Munnar hills, and Kumarakom backwaters in the South.",
  "regionsVisited": "Delhi, Agra, Jaipur, Cochin, Munnar, Kumarakom",
  "heroImage": "/images/kumarakom-lake-resort.jpg",
  "ctaBgImage": "/images/kumarakom-lake-resort.jpg",
  "markerKeys": [
    "delhi",
    "agra",
    "jaipur",
    "cochin",
    "munnar",
    "kumarakom"
  ],
  "routeCoords": [
    [
      77.209,
      28.6139
    ],
    [
      78.0081,
      27.1767
    ],
    [
      75.7873,
      26.9124
    ],
    [
      76.2673,
      9.9312
    ],
    [
      77.0595,
      10.0889
    ],
    [
      76.4312,
      9.5936
    ]
  ],
  "accommodations": "Historic Palaces, Tea Plantation Bungalows, and Luxury Houseboats",
  "itinerary": [
    {
      "day": 1,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi Arrival",
      "title": "Arrive in Delhi",
      "narrative": "Arrive at Delhi's international airport. Transfer to your luxury hotel. Rest at leisure.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "VIP airport reception",
        "dining": "Dinner at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/the-imperial-newdelhi.webp",
          "caption": "Delhi's historic avenues"
        }
      ],
      "expertNote": "The Imperial offers a peaceful escape in the heart of Delhi.",
      "highlights": [
        "Bespoke Airport Transfer",
        "Signature Welcome Dinner"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 2,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Imperial Delhi Tour",
      "narrative": "Explore New Delhi's grand landmarks, including Humayun's Tomb, Qutub Minar, and the central administrative structures.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Guided historical tour",
        "dining": "North Indian lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/qutub minar.webp",
          "caption": "Qutub Minar"
        }
      ],
      "expertNote": "Enjoy historical curations from our expert guides.",
      "highlights": [
        "Humayun's Tomb Curation",
        "Qutub Minar Exploration"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 3,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Old Delhi Rickshaw Curation",
      "narrative": "Explore Old Delhi, featuring the historic Jama Masjid, Chandni Chowk markets, and a view of the Red Fort.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Rickshaw ride in Old Delhi",
        "dining": "Mughlai lunch, dinner at leisure",
        "transport": "Private luxury SUV & Rickshaw"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Jama Masjid"
        }
      ],
      "expertNote": "Sample traditional Old Delhi street delicacies with your guide.",
      "highlights": [
        "Chandni Chowk Rickshaw Ride",
        "Jama Masjid Exploration"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 4,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Delhi to Agra",
      "title": "Agra Fort & Sunset Taj Mahal",
      "narrative": "Drive to Agra. Check into your hotel. Visit the grand Agra Fort and see the Taj Mahal at sunset from Mehtab Bagh.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Agra Fort guided tour",
        "dining": "Mughal tasting menu at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/The Oberoi Amarvilas.jpg",
          "caption": "Agra Fort red sandstone structures"
        }
      ],
      "expertNote": "Mehtab Bagh offers a peaceful sunset view away from the daytime crowds.",
      "highlights": [
        "Agra Fort Exploration",
        "Sunset at Mehtab Bagh"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 5,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Agra",
      "title": "Taj Mahal Sunrise",
      "narrative": "Witness the magnificent Taj Mahal at sunrise. Return to the hotel for breakfast. Afternoon free for relaxation.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Sunrise Taj Mahal visit",
        "dining": "Palace breakfast, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/taj-mahal.webp",
          "caption": "Taj Mahal"
        }
      ],
      "expertNote": "Entering early ensures a quieter and cooler experience.",
      "highlights": [
        "Taj Mahal Sunrise Tour",
        "Marble Inlay Artistry Visit"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 6,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Agra to Jaipur",
      "title": "Agra to Jaipur via Fatehpur Sikri",
      "narrative": "Drive to Jaipur, stopping at the historic city of Fatehpur Sikri and the Abhaneri stepwell.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Fatehpur Sikri & Abhaneri tours",
        "dining": "Heritage lunch, dinner at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Rambagh-Palace-jaipur.jpg",
          "caption": "Fatehpur Sikri gate"
        }
      ],
      "expertNote": "Fatehpur Sikri is remarkably preserved and boasts beautiful sandstone carvings.",
      "highlights": [
        "Fatehpur Sikri Guided Walk",
        "Abhaneri Stepwell Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 7,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur",
      "title": "Amer Fort & Hawa Mahal",
      "narrative": "Explore the Amer Fort, stop at the iconic Hawa Mahal, and view the Jal Mahal.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Amer Fort private tour",
        "dining": "Rajasthani thali, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/amber-fort.jpg",
          "caption": "Amer Fort"
        }
      ],
      "expertNote": "The Sheesh Mahal inside Amer Fort is a mirror masterpiece.",
      "highlights": [
        "Amer Fort Hilltop Tour",
        "Hawa Mahal Photography"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 8,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur",
      "title": "City Palace & Bazaars",
      "narrative": "Explore the City Palace and Jantar Mantar. Spend the afternoon browsing local bazaars.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "City Palace private rooms visit",
        "dining": "Bespoke lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/city-palace-jaipur.webp",
          "caption": "City Palace"
        }
      ],
      "expertNote": "Jaipur's jewelry markets are globally famous for colored gemstones.",
      "highlights": [
        "City Palace Private Tour",
        "Jantar Mantar Astronomical Site"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 9,
      "location": "Cochin",
      "locationKey": "cochin",
      "meta": "Jaipur to Cochin",
      "title": "Flight to Cochin",
      "narrative": "Fly from Jaipur to Cochin (Kochi) in Kerala. Check into your heritage harbor-front hotel and attend a Kathakali classical dance performance in the evening.",
      "details": {
        "accommodation": "Brunton Boatyard, Cochin",
        "experiences": "Domestic flight transfer & Kathakali dance show",
        "dining": "Keralan seafood dinner",
        "transport": "Private luxury SUV, Flight & Chauffeur"
      },
      "images": [
        {
          "url": "/images/cochin.jpg",
          "caption": "Cochin harbor front"
        }
      ],
      "expertNote": "Kathakali dancers spend hours applying elaborate makeup before the performance.",
      "highlights": [
        "Kathakali Dance Performance",
        "Fort Cochin Harbor Views"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "cochin"
      ]
    },
    {
      "day": 10,
      "location": "Cochin",
      "locationKey": "cochin",
      "meta": "Cochin",
      "title": "Fort Cochin & Chinese Fishing Nets",
      "narrative": "Explore Fort Cochin, including the historic Chinese Fishing Nets, St. Francis Church, Santa Cruz Basilica, and the Jewish Synagogue in Jew Town.",
      "details": {
        "accommodation": "Brunton Boatyard, Cochin",
        "experiences": "Guided Fort Cochin heritage walk",
        "dining": "Traditional Keralan lunch on banana leaves, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Chinese-Fishing-Nets-in-Kochi.avif",
          "caption": "Chinese Fishing Nets at Fort Cochin"
        }
      ],
      "expertNote": "St. Francis Church is the oldest European church in India and was the original burial place of Vasco da Gama.",
      "highlights": [
        "Chinese Fishing Nets Walk",
        "Jew Town Synagogue Visit"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "cochin"
      ]
    },
    {
      "day": 11,
      "location": "Munnar",
      "locationKey": "munnar",
      "meta": "Cochin to Munnar",
      "title": "Drive to Tea Hills of Munnar",
      "narrative": "Drive through winding hills and waterfalls to the tea-growing region of Munnar. Check into your luxury plantation bungalow.",
      "details": {
        "accommodation": "Windermere Estate, Munnar",
        "experiences": "Scenic hillside drive",
        "dining": "Estate plantation dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/munnar.jpeg",
          "caption": "Lush tea hills of Munnar"
        }
      ],
      "expertNote": "Munnar sits at 1,600 meters above sea level and has a cool, refreshing climate.",
      "highlights": [
        "Scenic Hillside Drive",
        "Tea Plantation Stay"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "cochin",
        "munnar"
      ]
    },
    {
      "day": 12,
      "location": "Munnar",
      "locationKey": "munnar",
      "meta": "Munnar",
      "title": "Tea Museum & Eravikulam National Park",
      "narrative": "Visit the Tata Tea Museum to learn about tea processing, and take a morning walk in Eravikulam National Park to spot the rare Nilgiri Tahr mountain goat.",
      "details": {
        "accommodation": "Windermere Estate, Munnar",
        "experiences": "Tea museum curation & Eravikulam national park tour",
        "dining": "Bungalow lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Nilgiri-tahr-2.jpg",
          "caption": "Nilgiri Tahr mountain goat"
        }
      ],
      "expertNote": "The Anamudi peak inside the park is the highest peak in South India.",
      "highlights": [
        "Tata Tea Museum Curation",
        "Eravikulam National Park Spotting"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "cochin",
        "munnar"
      ]
    },
    {
      "day": 13,
      "location": "Kumarakom",
      "locationKey": "kumarakom",
      "meta": "Munnar to Kumarakom",
      "title": "Drive to Kumarakom Backwaters",
      "narrative": "Drive down from the hills to the serene backwaters of Kumarakom. Check into your luxury lakeside resort.",
      "details": {
        "accommodation": "Kumarakom Lake Resort",
        "experiences": "Hill to lake transfer",
        "dining": "Traditional backwater lunch, dinner at resort",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/kumarakom-lake-resort.jpg",
          "caption": "Kumarakom Lake Resort"
        }
      ],
      "expertNote": "Kumarakom Lake Resort features traditional Kettuvalam villas restored to heritage perfection.",
      "highlights": [
        "Backwater Lakeside Stay",
        "Sunset Lake Views"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "cochin",
        "munnar",
        "kumarakom"
      ]
    },
    {
      "day": 14,
      "location": "Kumarakom",
      "locationKey": "kumarakom",
      "meta": "Kumarakom Houseboat Cruise",
      "title": "Private Kettuvalam Houseboat Day Cruise",
      "narrative": "Embark on a private day-long cruise on a traditional Kettuvalam houseboat through the winding canals and backwaters of Vembanad Lake.",
      "details": {
        "accommodation": "Kumarakom Lake Resort",
        "experiences": "Private houseboat charter",
        "dining": "Freshly prepared Karimeen (pearl spot fish) lunch on board",
        "transport": "Private luxury Houseboat"
      },
      "images": [
        {
          "url": "/images/kerala_backwaters_1776272518771.png",
          "caption": "Traditional Keralan Houseboat"
        }
      ],
      "expertNote": "A cruise along the backwaters offers a window into local village life on the canal banks.",
      "highlights": [
        "Private Houseboat Charter",
        "Vembanad Lake Backwater Cruise"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "cochin",
        "munnar",
        "kumarakom"
      ]
    },
    {
      "day": 15,
      "location": "Kumarakom",
      "locationKey": "kumarakom",
      "meta": "Kumarakom Leisure",
      "title": "Kumarakom Bird Sanctuary & Ayurvedic Rejuvenation",
      "narrative": "Take an early morning walking tour of the Kumarakom Bird Sanctuary. Spend the afternoon experiencing an authentic Ayurvedic wellness treatment.",
      "details": {
        "accommodation": "Kumarakom Lake Resort",
        "experiences": "Bird sanctuary walk & Ayurvedic spa session",
        "dining": "Ayurvedic dining curation, farewell dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/ayurveda_wellness_1776272638098.png",
          "caption": "Ayurvedic oil treatment session"
        }
      ],
      "expertNote": "Ayurveda is native to Kerala and uses traditional herbal oils for detox and healing.",
      "highlights": [
        "Bird Sanctuary Spotting",
        "Ayurvedic Treatment Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "cochin",
        "munnar",
        "kumarakom"
      ]
    },
    {
      "day": 16,
      "location": "Cochin",
      "locationKey": "cochin",
      "meta": "Kumarakom to Cochin Airport",
      "title": "Cochin Departure",
      "narrative": "Drive back to Cochin International Airport for your departure flight home.",
      "details": {
        "accommodation": "VIP Departure Lounge",
        "experiences": "Airport departure transfer",
        "dining": "Resort breakfast",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/airport.webp",
          "caption": "Farewell to India"
        }
      ],
      "expertNote": "Ensure your travel documents are ready for airport exit check-in.",
      "highlights": [
        "Airport Departure Transfer",
        "VIP Lounge Access"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "cochin",
        "munnar",
        "kumarakom",
        "cochin"
      ]
    }
  ],
  "duration": "16 Days / 15 Nights",
  "transfer": "Private Luxury SUV, Domestic Flight, and Chauffeur Services"
},
  "palace-tour-17": {
  "id": "palace-tour-17",
  "title": "The Royal Fortresses & Estates: A 17-Day Palace Expedition",
  "subtitle": "An immersive 17-day journey through Rajasthan's finest heritage properties, including Nimaj, Jodhpur, Mihirgarh, Jawai, and Udaipur.",
  "regionsVisited": "Delhi, Agra, Jaipur, Nimaj, Jodhpur, Mihirgarh, Jawai, Udaipur",
  "heroImage": "/images/desert_camp_night_1776272499120.png",
  "ctaBgImage": "/images/desert_camp_night_1776272499120.png",
  "markerKeys": [
    "delhi",
    "agra",
    "jaipur",
    "nimaj",
    "jodhpur",
    "mihirgarh",
    "jawai",
    "udaipur"
  ],
  "routeCoords": [
    [
      77.209,
      28.6139
    ],
    [
      78.0081,
      27.1767
    ],
    [
      75.7873,
      26.9124
    ],
    [
      74.0768,
      26.3023
    ],
    [
      73.0243,
      26.2389
    ],
    [
      73.0617,
      26.0719
    ],
    [
      73.1678,
      25.1058
    ],
    [
      73.7125,
      24.5854
    ]
  ],
  "accommodations": "Royal Forts, Desert Glamping, Lake Palaces, and Heritage Estates",
  "itinerary": [
    {
      "day": 1,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi Arrival",
      "title": "Arrive in Delhi",
      "narrative": "Arrive in Delhi. Private check-in at hotel.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "VIP airport reception",
        "dining": "Dinner at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/the-imperial-newdelhi.webp",
          "caption": "Delhi lanes"
        }
      ],
      "expertNote": "Get a good night's rest before the big palace tour.",
      "highlights": [
        "Bespoke Airport Transfer",
        "Signature Welcome Dinner"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 2,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Delhi Sightseeing",
      "narrative": "Explore New Delhi and Old Delhi historical monuments.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Guided historical tour",
        "dining": "North Indian lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/qutub minar.webp",
          "caption": "Qutub Minar"
        }
      ],
      "expertNote": "Enjoy historical curations from our expert guides.",
      "highlights": [
        "Humayun's Tomb Curation",
        "Qutub Minar Exploration"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 3,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Delhi to Agra",
      "title": "Agra Fort & Sunset Taj Mahal",
      "narrative": "Drive to Agra. Check into hotel and visit Agra Fort. View the Taj Mahal at sunset from Mehtab Bagh.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Agra Fort guided tour",
        "dining": "Mughal tasting menu at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/The Oberoi Amarvilas.jpg",
          "caption": "Agra Fort"
        }
      ],
      "expertNote": "Mehtab Bagh offers a peaceful sunset view.",
      "highlights": [
        "Agra Fort Exploration",
        "Sunset at Mehtab Bagh"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 4,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Agra",
      "title": "Taj Mahal Sunrise",
      "narrative": "Witness the magnificent Taj Mahal at sunrise. Return to the hotel for breakfast. Afternoon free.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Sunrise Taj Mahal visit",
        "dining": "Palace breakfast, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/taj-mahal.webp",
          "caption": "Taj Mahal"
        }
      ],
      "expertNote": "Entering early ensures a quieter and cooler experience.",
      "highlights": [
        "Taj Mahal Sunrise Tour",
        "Marble Inlay Artistry Visit"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 5,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Agra to Jaipur",
      "title": "Agra to Jaipur via Fatehpur Sikri",
      "narrative": "Drive to Jaipur, stopping at the historic city of Fatehpur Sikri and the Abhaneri stepwell.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Fatehpur Sikri & Abhaneri tours",
        "dining": "Heritage lunch, dinner at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Rambagh-Palace-jaipur.jpg",
          "caption": "Fatehpur Sikri gate"
        }
      ],
      "expertNote": "Fatehpur Sikri is remarkably preserved.",
      "highlights": [
        "Fatehpur Sikri Guided Walk",
        "Abhaneri Stepwell Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 6,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur",
      "title": "Amer Fort & City Palace",
      "narrative": "Explore the hilltop Amer Fort, stop at the iconic Hawa Mahal, and view the Jal Mahal and City Palace.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Amer Fort & City Palace private tours",
        "dining": "Rajasthani thali, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/amber-fort.jpg",
          "caption": "Amer Fort"
        }
      ],
      "expertNote": "The Sheesh Mahal inside Amer Fort is a mirror masterpiece.",
      "highlights": [
        "Amer Fort Hilltop Tour",
        "Hawa Mahal Photography"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 7,
      "location": "Nimaj",
      "locationKey": "nimaj",
      "meta": "Jaipur to Nimaj",
      "title": "Drive to Chhatra Sagar in Nimaj",
      "narrative": "Drive to Nimaj. Check into the luxury hand-stitched tents overlooking the lake at Chhatra Sagar.",
      "details": {
        "accommodation": "Raas Chhatra Sagar, Nimaj",
        "experiences": "Scenic countryside drive & lakeside welcome",
        "dining": "Campfire dinner under the stars",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/nimaj-village.jpg",
          "caption": "Luxury lakeside tents at Chhatra Sagar"
        }
      ],
      "expertNote": "Chhatra Sagar was created by a local noble in the 19th century to store rainwater.",
      "highlights": [
        "Lakeside Luxury Glamping",
        "Campfire Stargazing Dinner"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj"
      ]
    },
    {
      "day": 8,
      "location": "Nimaj",
      "locationKey": "nimaj",
      "meta": "Nimaj",
      "title": "Nimaj Nature & Bird Watching",
      "narrative": "Embark on an early morning bird-watching walk along the dam. In the afternoon, visit a local village to learn about traditional farming practices.",
      "details": {
        "accommodation": "Raas Chhatra Sagar, Nimaj",
        "experiences": "Guided bird watching walk & village visit",
        "dining": "Farm-to-table lunch, dinner at camp",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/wildlife.jpg",
          "caption": "Migratory birds at Chhatra Sagar lake"
        }
      ],
      "expertNote": "The area attracts over 200 species of migratory birds during the winter.",
      "highlights": [
        "Guided Bird Watching Dam Walk",
        "Authentic Village Safari Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj"
      ]
    },
    {
      "day": 9,
      "location": "Jodhpur",
      "locationKey": "jodhpur",
      "meta": "Nimaj to Jodhpur",
      "title": "Drive to Jodhpur & Mehrangarh Fort",
      "narrative": "Drive to the Blue City of Jodhpur. Check into your heritage hotel. Visit the massive Mehrangarh Fort which dominates the city skyline.",
      "details": {
        "accommodation": "Raas Jodhpur",
        "experiences": "Mehrangarh Fort private tour",
        "dining": "Rooftop dining overlooking the fort",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/mehrangarh-fort-jodhpur.jpeg",
          "caption": "Mehrangarh Fort dominating Jodhpur"
        }
      ],
      "expertNote": "Mehrangarh Fort's thick walls still bear the marks of historic cannonball hits.",
      "highlights": [
        "Mehrangarh Fort Museum Tour",
        "Jodhpur Blue City Views"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur"
      ]
    },
    {
      "day": 10,
      "location": "Jodhpur",
      "locationKey": "jodhpur",
      "meta": "Jodhpur",
      "title": "Jaswant Thada & Umaid Bhawan Palace",
      "narrative": "Visit Jaswant Thada, a royal white marble cenotaph, and the museum at Umaid Bhawan Palace, one of the world's largest private residences.",
      "details": {
        "accommodation": "Raas Jodhpur",
        "experiences": "Jaswant Thada & Umaid Bhawan tours",
        "dining": "Heritage lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Umaid Bhawan Palace Jodhpur.webp",
          "caption": "Jaswant Thada white marble memorial"
        }
      ],
      "expertNote": "Jaswant Thada is built from highly polished sheets of marble that glow warmly in the sun.",
      "highlights": [
        "Jaswant Thada Royal Cenotaph",
        "Umaid Bhawan Palace Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur"
      ]
    },
    {
      "day": 11,
      "location": "Mihirgarh",
      "locationKey": "mihirgarh",
      "meta": "Jodhpur to Mihirgarh",
      "title": "Drive to Mihir Garh Desert Castle",
      "narrative": "Drive to the desert castle of Mihir Garh. Check into your opulent suite featuring a private plunge pool. In the evening, enjoy a sunset horse ride.",
      "details": {
        "accommodation": "Mihir Garh, Jodhpur",
        "experiences": "Desert horse ride on Marwari horses",
        "dining": "Royal Rajasthani dinner",
        "transport": "Private luxury SUV & Horse"
      },
      "images": [
        {
          "url": "/images/desert_camp_night_1776272499120.png",
          "caption": "Mihir Garh desert castle"
        }
      ],
      "expertNote": "Mihir Garh features beautiful hand-made plaster fireplaces crafted by local women.",
      "highlights": [
        "Boutique Desert Castle Check-in",
        "Sunset Marwari Horse Riding"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur",
        "mihirgarh"
      ]
    },
    {
      "day": 12,
      "location": "Mihirgarh",
      "locationKey": "mihirgarh",
      "meta": "Mihirgarh",
      "title": "Mihirgarh Desert Village Safari",
      "narrative": "Embark on a signature village safari to meet the local Bishnoi community. In the evening, enjoy a private picnic dinner in the middle of the desert dunes.",
      "details": {
        "accommodation": "Mihir Garh, Jodhpur",
        "experiences": "Bishnoi village safari & private dunes picnic",
        "dining": "Royal desert safari picnic lunch, dunes dinner",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/desert_camp_night_1776272499120.png",
          "caption": "Sunset picnic in the Thar desert dunes"
        }
      ],
      "expertNote": "The Bishnois are passionate protectors of nature and wildlife, especially the blackbuck antelope.",
      "highlights": [
        "Bishnoi Wildlife & Village Safari",
        "Private Desert Dunes Dining"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur",
        "mihirgarh"
      ]
    },
    {
      "day": 13,
      "location": "Jawai",
      "locationKey": "jawai",
      "meta": "Mihirgarh to Jawai",
      "title": "Drive to Jawai Leopard Camps",
      "narrative": "Drive through the rocky wilderness to Jawai. Check into your luxury wilderness camp and go on an afternoon leopard tracking safari.",
      "details": {
        "accommodation": "Suján Jawai Camp",
        "experiences": "4x4 private leopard safari",
        "dining": "Campfire dinner at the wilderness camp",
        "transport": "Private luxury SUV & 4x4 Jeep"
      },
      "images": [
        {
          "url": "/images/Indian Leopard.jpg",
          "caption": "Leopard in the rocky terrain of Jawai"
        }
      ],
      "expertNote": "Jawai is famous for the harmonious relationship between the leopards and the local Rabari herdsmen.",
      "highlights": [
        "Bespoke Wilderness Glamping",
        "Afternoon Leopard Safari Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur",
        "mihirgarh",
        "jawai"
      ]
    },
    {
      "day": 14,
      "location": "Jawai",
      "locationKey": "jawai",
      "meta": "Jawai",
      "title": "Jawai Wilderness & Rabari Walks",
      "narrative": "Enjoy early morning and late afternoon safaris. Take a guided walk with a local Rabari herdsman to learn about their ancient lifestyle and culture.",
      "details": {
        "accommodation": "Suján Jawai Camp",
        "experiences": "Morning and afternoon safaris & Rabari culture walk",
        "dining": "Bush lunch, campfire dinner",
        "transport": "Private 4x4 Jeep & Walk"
      },
      "images": [
        {
          "url": "/images/Khajuraho Rural Life.png",
          "caption": "Traditional Rabari herdsman in red turban"
        }
      ],
      "expertNote": "The Rabari people wear distinctive red turbans and lead herds of sheep and goats.",
      "highlights": [
        "Rabari Guided Culture Walk",
        "Morning Leopard Safari Tracker"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur",
        "mihirgarh",
        "jawai"
      ]
    },
    {
      "day": 15,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Jawai to Udaipur",
      "title": "Drive to Udaipur via Ranakpur Temple",
      "narrative": "Drive to Udaipur. En route, tour the spectacular 15th-century Ranakpur Jain Temple, famous for its 1,444 uniquely carved marble pillars.",
      "details": {
        "accommodation": "Taj Lake Palace, Udaipur",
        "experiences": "Guided Ranakpur Jain Temple tour",
        "dining": "Vegetarian temple lunch, dinner at resort",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Intricately carved spires of the Khajuraho temples.jpeg",
          "caption": "Intricately carved marble pillars of Ranakpur"
        }
      ],
      "expertNote": "No two marble pillars inside Ranakpur Temple are carved the same.",
      "highlights": [
        "Ranakpur Jain Temple Curation",
        "Lake Pichola Arrival"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur",
        "mihirgarh",
        "jawai",
        "udaipur"
      ]
    },
    {
      "day": 16,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur",
      "title": "Udaipur City Palace & Lake Cruise",
      "narrative": "Explore Udaipur's massive City Palace museum and enjoy a private sunset boat cruise on Lake Pichola.",
      "details": {
        "accommodation": "Taj Lake Palace, Udaipur",
        "experiences": "City Palace private tour & sunset boat cruise",
        "dining": "Lakeside Mewari dinner",
        "transport": "Private luxury SUV & Boat"
      },
      "images": [
        {
          "url": "/images/taj-lake-palace-udaipur.jpeg",
          "caption": "Sunset over Lake Pichola"
        }
      ],
      "expertNote": "Enjoy a traditional folk dance show at Bagore-ki-Haveli in the evening.",
      "highlights": [
        "City Palace Museum Walk",
        "Sunset Lake Pichola Cruise"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur",
        "mihirgarh",
        "jawai",
        "udaipur"
      ]
    },
    {
      "day": 17,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur Departure",
      "title": "Udaipur Departure",
      "narrative": "Transfer to Udaipur Airport for your departure flight.",
      "details": {
        "accommodation": "VIP Departure Lounge",
        "experiences": "Airport departure transfer",
        "dining": "Resort breakfast",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/airport.webp",
          "caption": "Farewell to India"
        }
      ],
      "expertNote": "Make sure to coordinate your flights back home from Delhi/Mumbai.",
      "highlights": [
        "Airport Departure Transfer",
        "VIP Lounge Access"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur",
        "mihirgarh",
        "jawai",
        "udaipur"
      ]
    }
  ],
  "duration": "17 Days / 16 Nights",
  "transfer": "Private Luxury SUV and Chauffeur Services"
},
  "palace-tour-13": {
  "id": "palace-tour-13",
  "title": "Palaces & Forts: The Heritage Path of Rajasthan",
  "subtitle": "A 13-day classic journey through the historic Golden Triangle, the heritage fort at Deogarh, and the romantic lake city of Udaipur.",
  "regionsVisited": "Delhi, Agra, Jaipur, Deogarh, Udaipur",
  "heroImage": "/images/deogarh-mahal.webp",
  "ctaBgImage": "/images/deogarh-mahal.webp",
  "markerKeys": [
    "delhi",
    "agra",
    "jaipur",
    "deogarh",
    "udaipur"
  ],
  "routeCoords": [
    [
      77.209,
      28.6139
    ],
    [
      78.0081,
      27.1767
    ],
    [
      75.7873,
      26.9124
    ],
    [
      73.9056,
      25.5342
    ],
    [
      73.7125,
      24.5854
    ]
  ],
  "accommodations": "Palace Suites and Heritage Castles",
  "itinerary": [
    {
      "day": 1,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi Arrival",
      "title": "Arrive in Delhi",
      "narrative": "Arrive in Delhi and transfer to hotel.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "VIP airport reception",
        "dining": "Dinner at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/the-imperial-newdelhi.webp",
          "caption": "Delhi street scene"
        }
      ],
      "expertNote": "Rest at your leisure.",
      "highlights": [
        "Bespoke Airport Transfer",
        "Signature Welcome Dinner"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 2,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Imperial Delhi Landmarks",
      "narrative": "Guided visit to Humayun's Tomb, Qutub Minar, and central monuments.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Guided historical tour",
        "dining": "North Indian lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/qutub minar.webp",
          "caption": "Qutub Minar"
        }
      ],
      "expertNote": "Humayun's Tomb looks best in late morning light.",
      "highlights": [
        "Humayun's Tomb Curation",
        "Qutub Minar Exploration"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 3,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Old Delhi Rickshaw Tour",
      "narrative": "Explore Jama Masjid, rickshaw ride in Chandni Chowk, and Red Fort.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Rickshaw ride in Old Delhi",
        "dining": "Mughlai lunch, dinner at leisure",
        "transport": "Private luxury SUV & Rickshaw"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Jama Masjid"
        }
      ],
      "expertNote": "Experience the bustling heart of Delhi.",
      "highlights": [
        "Chandni Chowk Rickshaw Ride",
        "Jama Masjid Exploration"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 4,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Delhi to Agra",
      "title": "Agra Fort & Sunset Taj Mahal",
      "narrative": "Drive to Agra. Check into hotel and visit Agra Fort. View the Taj Mahal at sunset from Mehtab Bagh.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Agra Fort guided tour",
        "dining": "Mughal tasting menu at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/The Oberoi Amarvilas.jpg",
          "caption": "Agra Fort"
        }
      ],
      "expertNote": "Amarvilas offers spectacular sunset views.",
      "highlights": [
        "Agra Fort Exploration",
        "Sunset at Mehtab Bagh"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 5,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Agra",
      "title": "Taj Mahal Sunrise",
      "narrative": "Witness the magnificent Taj Mahal at sunrise. Return to the hotel for breakfast. Afternoon free.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Sunrise Taj Mahal visit",
        "dining": "Palace breakfast, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/taj-mahal.webp",
          "caption": "Taj Mahal"
        }
      ],
      "expertNote": "Dawn is the best time for photography.",
      "highlights": [
        "Taj Mahal Sunrise Tour",
        "Marble Inlay Artistry Visit"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 6,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Agra to Jaipur",
      "title": "Agra to Jaipur via Fatehpur Sikri",
      "narrative": "Drive to Jaipur, stopping at the historic city of Fatehpur Sikri and the Abhaneri stepwell.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Fatehpur Sikri & Abhaneri tours",
        "dining": "Heritage lunch, dinner at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Rambagh-Palace-jaipur.jpg",
          "caption": "Fatehpur Sikri gate"
        }
      ],
      "expertNote": "Fatehpur Sikri was once a grand capital city.",
      "highlights": [
        "Fatehpur Sikri Guided Walk",
        "Abhaneri Stepwell Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 7,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur",
      "title": "Amer Fort & City Palace Curation",
      "narrative": "Explore the hilltop Amer Fort, stop at the iconic Hawa Mahal, and view the City Palace.",
      "details": {
        "accommodation": "Rambagh Palace",
        "experiences": "Amer Fort & City Palace private tours",
        "dining": "Rajasthani thali, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/amber-fort.jpg",
          "caption": "Amer Fort"
        }
      ],
      "expertNote": "The Sheesh Mahal inside Amer Fort is a mirror masterpiece.",
      "highlights": [
        "Amer Fort Hilltop Tour",
        "Hawa Mahal Photography"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 8,
      "location": "Deogarh",
      "locationKey": "deogarh",
      "meta": "Jaipur to Deogarh",
      "title": "Drive to Deogarh Mahal",
      "narrative": "Drive to Deogarh in the Aravali hills. Check into the magnificent Deogarh Mahal castle and take an evening walk in the village.",
      "details": {
        "accommodation": "Deogarh Mahal, Deogarh",
        "experiences": "Guided Deogarh village walk",
        "dining": "Traditional Mewari dinner at the castle",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/deogarh-mahal.webp",
          "caption": "The grand facade of Deogarh Mahal"
        }
      ],
      "expertNote": "Deogarh Mahal is run by the original royal family who are excellent hosts.",
      "highlights": [
        "Deogarh Mahal Castle Stay",
        "Evening Village Walk Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "deogarh"
      ]
    },
    {
      "day": 9,
      "location": "Deogarh",
      "locationKey": "deogarh",
      "meta": "Deogarh",
      "title": "Rural Train Ride & Village Exploration",
      "narrative": "Take a delightful ride on a local rural train through a scenic mountain pass. In the afternoon, explore the local lakes and countryside in open jeeps.",
      "details": {
        "accommodation": "Deogarh Mahal, Deogarh",
        "experiences": "Local rural rail ride & 4x4 countryside jeep safari",
        "dining": "Lakeside picnic lunch, dinner at heritage courtyard",
        "transport": "Rural Train & 4x4 Jeep"
      },
      "images": [
        {
          "url": "/images/rail-journey-rajasthan.jpg",
          "caption": "Rural train ride through the Aravali pass"
        }
      ],
      "expertNote": "The train runs on a meter-gauge line built by the British and is still used by locals.",
      "highlights": [
        "Scenic Rural Train Ride",
        "Open Jeep Countryside Safari"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "deogarh"
      ]
    },
    {
      "day": 10,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Deogarh to Udaipur",
      "title": "Drive to Udaipur via Ranakpur Temple",
      "narrative": "Drive to Udaipur, visiting the famous 15th-century Ranakpur Jain Temple on the way. Check into your floating lake palace hotel.",
      "details": {
        "accommodation": "Taj Lake Palace, Udaipur",
        "experiences": "Guided Ranakpur Jain Temple tour",
        "dining": "Temple lunch, dinner at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Intricately carved spires of the Khajuraho temples.jpeg",
          "caption": "Carved marble ceiling of Ranakpur Temple"
        }
      ],
      "expertNote": "Ranakpur Temple is a masterwork of marble sculpture.",
      "highlights": [
        "Ranakpur Jain Temple Curation",
        "Lake Pichola Arrival"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "deogarh",
        "udaipur"
      ]
    },
    {
      "day": 11,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur",
      "title": "Udaipur City Palace & Jagdish Temple",
      "narrative": "Explore Udaipur's grand City Palace museum, visit Jagdish Temple, and stroll through Saheliyon-ki-Bari gardens.",
      "details": {
        "accommodation": "Taj Lake Palace, Udaipur",
        "experiences": "Udaipur City Palace guided walk",
        "dining": "Lakeside Mewari lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/courtyards-udaipur-city-palace.jpg",
          "caption": "City Palace museum overlooking Lake Pichola"
        }
      ],
      "expertNote": "Take in the beautiful miniature painting collections inside the museum.",
      "highlights": [
        "City Palace Museum Walk",
        "Jagdish Temple Visit"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "deogarh",
        "udaipur"
      ]
    },
    {
      "day": 12,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur",
      "title": "Lake Pichola Cruise & Crafts Village",
      "narrative": "Enjoy a private boat cruise on Lake Pichola in the morning. In the afternoon, visit Shilpgram, a traditional crafts village near the city.",
      "details": {
        "accommodation": "Taj Lake Palace, Udaipur",
        "experiences": "Private boat cruise & Shilpgram village visit",
        "dining": "Lakeside farewell dinner",
        "transport": "Private boat & Luxury SUV"
      },
      "images": [
        {
          "url": "/images/taj-lake-palace-udaipur.jpeg",
          "caption": "Sunset on Lake Pichola"
        }
      ],
      "expertNote": "Shilpgram shows rural lifestyle and arts from diverse regions of West India.",
      "highlights": [
        "Lake Pichola Private Cruise",
        "Shilpgram Crafts Village Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "deogarh",
        "udaipur"
      ]
    },
    {
      "day": 13,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Udaipur to Delhi Airport",
      "title": "Udaipur to Delhi & Departure",
      "narrative": "Take a flight from Udaipur to Delhi. Transfer to the international terminal for your onward flight home.",
      "details": {
        "accommodation": "VIP Departure Lounge",
        "experiences": "Airport departure transfer & domestic flight",
        "dining": "Palace breakfast",
        "transport": "Private luxury SUV & Flight"
      },
      "images": [
        {
          "url": "/images/airport.webp",
          "caption": "Farewell to India"
        }
      ],
      "expertNote": "Have your boarding passes and passport ready for transit.",
      "highlights": [
        "Domestic Flight to Delhi",
        "VIP Airport Exit Assist"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "deogarh",
        "udaipur",
        "delhi"
      ]
    }
  ],
  "duration": "13 Days / 12 Nights",
  "transfer": "Private Luxury SUV, Domestic Flight, and Chauffeur Services"
},
  "palace-culture-goa-16": {
  "id": "palace-culture-goa-16",
  "title": "Royal Palaces & Golden Sands: The Grand Rajasthan & Goa Odyssey",
  "subtitle": "A 16-day luxury journey through Delhi's heritage, Agra's Taj Mahal, the pink city of Jaipur, the serene oasis of Nimaj, Jodhpur's blue fortresses, and Goa's colonial beaches.",
  "regionsVisited": "Delhi, Agra, Jaipur, Nimaj, Jodhpur, Goa",
  "heroImage": "/images/goa_heritage_1776272683299.png",
  "ctaBgImage": "/images/goa.jpeg",
  "markerKeys": [
    "delhi",
    "agra",
    "jaipur",
    "nimaj",
    "jodhpur",
    "goa"
  ],
  "routeCoords": [
    [
      77.209,
      28.6139
    ],
    [
      78.0081,
      27.1767
    ],
    [
      75.7873,
      26.9124
    ],
    [
      74.0768,
      26.3023
    ],
    [
      73.0243,
      26.2389
    ],
    [
      73.8278,
      15.2993
    ]
  ],
  "accommodations": "Heritage Havelis, Luxury Tented Camps, and Beachfront Villas",
  "itinerary": [
    {
      "day": 1,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi Arrival",
      "title": "Arrive in the Capital",
      "narrative": "Arrive at Delhi's Indira Gandhi International Airport. Meet your private representative and transfer to your luxury hotel. Relax and recover from your journey in the opulent surroundings of The Imperial.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Private airport reception",
        "dining": "Welcome dinner at the hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/the-imperial-newdelhi.webp",
          "caption": "The historic facade of The Imperial Delhi"
        }
      ],
      "expertNote": "The Imperial offers a perfect blend of Victorian style and modern Indian luxury.",
      "highlights": [
        "Bespoke Airport Transfer",
        "Signature Welcome Dinner"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 2,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Exploring Imperial Delhi",
      "narrative": "Begin your exploration of New Delhi. Visit the spectacular Humayun's Tomb, the precursor to the Taj Mahal, and the ancient Qutub Minar complex. Drive through the grand avenues of Lutyens' Delhi.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Guided architectural tour",
        "dining": "Bespoke lunch at a local specialty restaurant",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Humayun's_Tomb.avif",
          "caption": "Humayun's Tomb, a Mughal masterpiece"
        }
      ],
      "expertNote": "Humayun's Tomb is best visited in the early morning to capture the soft light on the red sandstone.",
      "highlights": [
        "Humayun's Tomb Visit",
        "Qutub Minar Curation"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 3,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Historic Old Delhi Lanes",
      "narrative": "Immerse yourself in the bustling energy of Old Delhi. Visit Jama Masjid, the largest mosque in India, and take a private rickshaw ride through the narrow, vibrant spice markets of Chandni Chowk.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Old Delhi rickshaw ride",
        "dining": "Mughlai feast at a restored haveli",
        "transport": "Private luxury SUV & Rickshaw"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "The imposing Red Fort seen from Old Delhi"
        }
      ],
      "expertNote": "The spice market at Khari Baoli is a sensory explosion. Be prepared for the rich, intense aromas of cardamom and chili.",
      "highlights": [
        "Jama Masjid Curation",
        "Chandni Chowk Rickshaw Ride"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 4,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Delhi to Agra",
      "title": "Agra Fort & Sunset View",
      "narrative": "Drive to Agra via the Yamuna Expressway. Check into your luxury hotel with an uninterrupted view of the Taj Mahal. In the afternoon, explore the majestic Agra Fort, a red sandstone fortress of the Mughal Emperors.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Agra Fort guided tour",
        "dining": "Mughal tasting menu at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/agra-fort.jpeg",
          "caption": "The red sandstone walls of Agra Fort"
        }
      ],
      "expertNote": "Every room at the Oberoi Amarvilas offers a direct, clear view of the Taj Mahal.",
      "highlights": [
        "Agra Fort Tour",
        "Mehtab Bagh Sunset"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 5,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Agra",
      "title": "Sunrise at the Taj Mahal",
      "narrative": "Witness the ultimate monument to love, the Taj Mahal, bathed in the soft golden light of sunrise. Return to the hotel for breakfast, and spend the afternoon at leisure, enjoying the pool or spa.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Taj Mahal sunrise visit",
        "dining": "Breakfast and dinner at leisure at hotel",
        "transport": "Private golf cart & SUV"
      },
      "images": [
        {
          "url": "/images/The Oberoi Amarvilas.jpg",
          "caption": "The stunning Taj Mahal view from Oberoi Amarvilas"
        }
      ],
      "expertNote": "Visiting at sunrise is key to avoiding crowds and seeing the marble shift from pale pink to pure white.",
      "highlights": [
        "Sunrise Taj Mahal Visit",
        "Afternoon Spa Ritual"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 6,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Agra to Jaipur",
      "title": "Fatehpur Sikri & The Pink City",
      "narrative": "Drive to Jaipur, stopping en route at Fatehpur Sikri, the short-lived capital of Emperor Akbar. Continue to Jaipur and check into the grand Rambagh Palace, the former residence of the Maharaja.",
      "details": {
        "accommodation": "The Rambagh Palace, Jaipur",
        "experiences": "Fatehpur Sikri excursion",
        "dining": "Traditional Rajasthani thali at Rambagh Palace",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Rambagh-Palace-jaipur.jpg",
          "caption": "The regal Rambagh Palace in Jaipur"
        }
      ],
      "expertNote": "Fatehpur Sikri is beautifully preserved and displays a wonderful synthesis of Hindu and Islamic architecture.",
      "highlights": [
        "Fatehpur Sikri Exploration",
        "Royal Palace Check-in"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 7,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur",
      "title": "Fortresses & Palaces of Jaipur",
      "narrative": "Explore the dramatic Amber Fort, rising high above Maota Lake. Visit the iconic Hawa Mahal (Palace of Winds), the City Palace, and the ancient astronomical observatory, Jantar Mantar.",
      "details": {
        "accommodation": "The Rambagh Palace, Jaipur",
        "experiences": "Full-day guided Jaipur tour",
        "dining": "Lunch at City Palace cafe, dinner at 1135 AD",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/amber-fort.jpg",
          "caption": "The majestic Amber Fort on the outskirts of Jaipur"
        }
      ],
      "expertNote": "Dining at 1135 AD inside Amer Fort offers a truly royal atmosphere surrounded by gold-leaf walls.",
      "highlights": [
        "Amber Fort Curation",
        "City Palace Museum"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 8,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur",
      "title": "Artisans & Jewelers of Jaipur",
      "narrative": "Spend the day diving into Jaipur's world-famous artisanal scene. Take a private tour of gem-cutting workshops and block-printing studios, witnessing how centuries-old techniques are kept alive.",
      "details": {
        "accommodation": "The Rambagh Palace, Jaipur",
        "experiences": "Bespoke artisan tour",
        "dining": "Curated lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Miniature painting workshops of Jaipur.webp",
          "caption": "Jaipur's famous miniature painting workshops"
        }
      ],
      "expertNote": "Jaipur is the gemstone capital of the world; look for certified jewelers for any purchases.",
      "highlights": [
        "Gem-Cutting Curation",
        "Block-Printing Workshop"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 9,
      "location": "Nimaj",
      "locationKey": "nimaj",
      "meta": "Jaipur to Nimaj",
      "title": "Journey to Nimaj Oasis",
      "narrative": "Drive west into the rural heart of Rajasthan to the serene village of Nimaj. Check into Chhatra Sagar, a luxury tented camp situated on a historic dam, surrounded by rich wildlife and quiet fields.",
      "details": {
        "accommodation": "Chhatra Sagar, Nimaj",
        "experiences": "Rural estate walk",
        "dining": "Farm-to-table lunch and dinner at camp",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/nimaj-village.jpg",
          "caption": "The tranquil setting of Chhatra Sagar in Nimaj"
        }
      ],
      "expertNote": "Chhatra Sagar is a paradise for bird lovers, with over 200 species nesting around the reservoir.",
      "highlights": [
        "Rural Estate Transition",
        "Sunset Lake Views"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj"
      ]
    },
    {
      "day": 10,
      "location": "Nimaj",
      "locationKey": "nimaj",
      "meta": "Nimaj",
      "title": "Rural Walks & Wildlife",
      "narrative": "Take a morning birdwatching tour around the dam. In the afternoon, embark on a village walk to meet local farmers and artisans, experiencing authentic Rajasthani hospitality in a timeless rural setting.",
      "details": {
        "accommodation": "Chhatra Sagar, Nimaj",
        "experiences": "Guided birdwatching & village walk",
        "dining": "All meals included at camp",
        "transport": "Walking tour & local open jeep"
      },
      "images": [
        {
          "url": "/images/wildlife.jpg",
          "caption": "Migratory birds gathered at Chhatra Sagar"
        }
      ],
      "expertNote": "The local farmers are incredibly warm. Enjoy a cup of masala chai in one of their homes.",
      "highlights": [
        "Guided Birding Walk",
        "Authentic Village Interaction"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj"
      ]
    },
    {
      "day": 11,
      "location": "Jodhpur",
      "locationKey": "jodhpur",
      "meta": "Nimaj to Jodhpur",
      "title": "Drive to the Blue City",
      "narrative": "Drive to Jodhpur, the historic walled city of the Thar Desert. Check into Raas Jodhpur, a boutique heritage property in the old city. In the afternoon, take a walking tour of the blue-painted lanes.",
      "details": {
        "accommodation": "Raas Jodhpur",
        "experiences": "Blue City heritage walk",
        "dining": "Dinner overlooking the illuminated Mehrangarh Fort",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/mehrangarh-fort-jodhpur.jpeg",
          "caption": "Jodhpur's iconic blue houses under Mehrangarh Fort"
        }
      ],
      "expertNote": "The old city is best explored on foot. Watch out for the vibrant blue-painted walls of Brahmin houses.",
      "highlights": [
        "Thar Desert Transition",
        "Blue City Heritage Walk"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur"
      ]
    },
    {
      "day": 12,
      "location": "Jodhpur",
      "locationKey": "jodhpur",
      "meta": "Jodhpur",
      "title": "Fortress of the Sun",
      "narrative": "Explore the colossal Mehrangarh Fort, which towers 400 feet above the city. Tour its magnificent palaces, and visit Jaswant Thada, a royal white marble cenotaph set beside a quiet lake.",
      "details": {
        "accommodation": "Raas Jodhpur",
        "experiences": "Mehrangarh Fort curation",
        "dining": "Lunch at the fort cafe, dinner at Darikhana",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Umaid Bhawan Palace Jodhpur.webp",
          "caption": "Jaswant Thada, the marble cenotaph of Jodhpur"
        }
      ],
      "expertNote": "The view of Jodhpur from the battlements of Mehrangarh is breathtaking and highlights the distinction between the old and new city.",
      "highlights": [
        "Mehrangarh Fort Tour",
        "Jaswant Thada Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur"
      ]
    },
    {
      "day": 13,
      "location": "Goa",
      "locationKey": "goa",
      "meta": "Jodhpur to Goa",
      "title": "Fly to the Beach",
      "narrative": "Transfer to Jodhpur Airport for your flight to Goa (via Mumbai). Arrive in Goa and check into Taj Exotica, a luxurious beachfront resort on the Arabian Sea. Spend the evening relaxing on the beach.",
      "details": {
        "accommodation": "Taj Exotica Resort & Spa, Goa",
        "experiences": "Flight transition to coastal India",
        "dining": "Seafood dinner on the beach",
        "transport": "Private SUV & Domestic Flight"
      },
      "images": [
        {
          "url": "/images/goa.jpeg",
          "caption": "The sandy beaches and palms of South Goa"
        }
      ],
      "expertNote": "South Goa is much quieter and cleaner than the north, perfect for an upscale, tranquil beach stay.",
      "highlights": [
        "Coastal Air Travel",
        "Beachfront Sunset Dinner"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur",
        "goa"
      ]
    },
    {
      "day": 14,
      "location": "Goa",
      "locationKey": "goa",
      "meta": "Goa",
      "title": "Colonial Old Goa & Spices",
      "narrative": "Explore Goa's Portuguese heritage. Visit the Basilica of Bom Jesus, housing the remains of St. Francis Xavier, and the grand Se Cathedral. In the afternoon, tour a private spice plantation and enjoy a traditional lunch.",
      "details": {
        "accommodation": "Taj Exotica Resort & Spa, Goa",
        "experiences": "Old Goa heritage & Spice tour",
        "dining": "Traditional Goan lunch at plantation",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/basilica-bom-jesus.png",
          "caption": "The historic Basilica of Bom Jesus in Old Goa"
        }
      ],
      "expertNote": "Se Cathedral is the largest church in Asia and has a famous golden bell.",
      "highlights": [
        "Portuguese Heritage Tour",
        "Spice Plantation Feast"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur",
        "goa"
      ]
    },
    {
      "day": 15,
      "location": "Goa",
      "locationKey": "goa",
      "meta": "Goa",
      "title": "Leisure on the Coast",
      "narrative": "Enjoy a day at complete leisure. Relax on the sandy beaches of Benaulim, swim in the warm Arabian Sea, or treat yourself to a signature wellness ritual at the resort's Ayurvedic spa.",
      "details": {
        "accommodation": "Taj Exotica Resort & Spa, Goa",
        "experiences": "Beach leisure or spa day",
        "dining": "Bespoke dinner at the resort's signature restaurant",
        "transport": "None (at resort)"
      },
      "images": [
        {
          "url": "/images/goa_heritage_1776272683299.png",
          "caption": "The luxury amenities of Taj Exotica Goa"
        }
      ],
      "expertNote": "Try the traditional Goan fish curry at the beach shack; it's a perfect blend of coconut and local spices.",
      "highlights": [
        "Ayurvedic Spa Session",
        "Private Beach Access"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur",
        "goa"
      ]
    },
    {
      "day": 16,
      "location": "Goa",
      "locationKey": "goa",
      "meta": "Goa Departure",
      "title": "Farewell to India",
      "narrative": "Transfer to Goa's Dabolim Airport for your departure flight home, carrying the memories of Rajasthan's palaces and Goa's golden shores.",
      "details": {
        "accommodation": "None",
        "experiences": "Private airport departure transfer",
        "dining": "Breakfast at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/airport.webp",
          "caption": "Goa Airport departure hall"
        }
      ],
      "expertNote": "Ensure you check out early to allow ample time for the transfer, especially during peak tourist season.",
      "highlights": [
        "Private Airport Transfer",
        "Bespoke Farewell Amenities"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "nimaj",
        "jodhpur",
        "goa"
      ]
    }
  ],
  "duration": "16 Days / 15 Nights",
  "transfer": "Private Chauffeur SUV, Domestic Flight, and Private Transfers"
},
  "palace-culture-beach-18": {
  "id": "palace-culture-beach-18",
  "title": "Imperial Odyssey: Royal Palaces, Mumbai Metro & Kovalam Shores",
  "subtitle": "An immersive 18-day exploration connecting the historic Golden Triangle, Udaipur's romantic lakes, Mumbai's colonial vibe, and the tropical paradise of Kovalam Beach.",
  "regionsVisited": "Delhi, Agra, Jaipur, Udaipur, Mumbai, Kovalam",
  "heroImage": "/images/ayurveda_wellness_1776272638098.png",
  "ctaBgImage": "/images/taj-lake-palace-udaipur.jpeg",
  "markerKeys": [
    "delhi",
    "agra",
    "jaipur",
    "udaipur",
    "mumbai",
    "kovalam"
  ],
  "routeCoords": [
    [
      77.209,
      28.6139
    ],
    [
      78.0081,
      27.1767
    ],
    [
      75.7873,
      26.9124
    ],
    [
      73.7125,
      24.5854
    ],
    [
      72.8777,
      19.076
    ],
    [
      76.9906,
      8.402
    ]
  ],
  "accommodations": "Palace Hotels, Luxury Metropolitan Lodges, and Tropical Beach Resorts",
  "itinerary": [
    {
      "day": 1,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi Arrival",
      "title": "Arrive in Delhi",
      "narrative": "Arrive at Delhi's Indira Gandhi International Airport. Meet your private representative and transfer to your luxury hotel. Spend the rest of the day relaxing in the colonial splendour of The Imperial.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Private airport reception",
        "dining": "Welcome dinner at Spice Route",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/the-imperial-newdelhi.webp",
          "caption": "The historic facade of The Imperial Delhi"
        }
      ],
      "expertNote": "The Imperial offers a peaceful sanctuary in the heart of Delhi.",
      "highlights": [
        "Bespoke Airport Transfer",
        "Signature Welcome Dinner"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 2,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Exploring Imperial Delhi",
      "narrative": "Explore New Delhi's grand monuments, including Humayun's Tomb, Qutub Minar, and a drive past India Gate and the President's House.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Guided historical tour",
        "dining": "Curated North Indian lunch, dinner at leisure",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Humayun's_Tomb.avif",
          "caption": "The ancient Humayun's Tomb complex"
        }
      ],
      "expertNote": "Humayun's Tomb is the precursor to the Taj Mahal and looks spectacular in the late morning light.",
      "highlights": [
        "Humayun's Tomb Curation",
        "Qutub Minar Exploration"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 3,
      "location": "Delhi",
      "locationKey": "delhi",
      "meta": "Delhi",
      "title": "Historic Old Delhi Lanes",
      "narrative": "Dive into Old Delhi. Visit the grand Jama Masjid, take a private rickshaw ride through the narrow lanes of Chandni Chowk, and view the imposing Red Fort.",
      "details": {
        "accommodation": "The Imperial Delhi",
        "experiences": "Old Delhi rickshaw ride",
        "dining": "Traditional Mughlai lunch, dinner at a restored haveli",
        "transport": "Private luxury SUV & Rickshaw"
      },
      "images": [
        {
          "url": "/images/Historic architecture and Mughal monuments of Old Delhi.jpg",
          "caption": "Jama Masjid, India's largest mosque"
        }
      ],
      "expertNote": "The spices and smells of Khari Baoli market are intense but offer a truly authentic sensory experience.",
      "highlights": [
        "Chandni Chowk Rickshaw Ride",
        "Jama Masjid Exploration"
      ],
      "revealedRouteKeys": [
        "delhi"
      ]
    },
    {
      "day": 4,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Delhi to Agra",
      "title": "Agra Fort & Taj Sunset",
      "narrative": "Drive to Agra via the Yamuna Expressway. Check into your luxury hotel. In the afternoon, visit the magnificent Agra Fort, then witness the Taj Mahal at sunset from across the Yamuna River at Mehtab Bagh.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Agra Fort guided tour",
        "dining": "Mughal tasting menu at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/agra-fort.jpeg",
          "caption": "Agra Fort, a red sandstone masterpiece"
        }
      ],
      "expertNote": "Every room at Amarvilas offers an uninterrupted view of the Taj Mahal.",
      "highlights": [
        "Agra Fort Tour",
        "Mehtab Bagh Sunset"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 5,
      "location": "Agra",
      "locationKey": "agra",
      "meta": "Agra",
      "title": "The Sublime Taj Mahal",
      "narrative": "Witness the sunrise over the Taj Mahal, a breathtaking monument to eternal love. Spend the afternoon at leisure, enjoying the luxury facilities of your hotel.",
      "details": {
        "accommodation": "The Oberoi Amarvilas",
        "experiences": "Sunrise Taj Mahal visit",
        "dining": "Breakfast and dinner at the hotel",
        "transport": "Private golf cart"
      },
      "images": [
        {
          "url": "/images/The Oberoi Amarvilas.jpg",
          "caption": "The Taj Mahal viewed from your hotel window"
        }
      ],
      "expertNote": "The early morning light gives the white marble a soft, ethereal glow that is missed later in the day.",
      "highlights": [
        "Taj Mahal Sunrise Visit",
        "Oberoi Luxury Leisure"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra"
      ]
    },
    {
      "day": 6,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Agra to Jaipur",
      "title": "Fatehpur Sikri & Rambagh",
      "narrative": "Drive to Jaipur, stopping at Fatehpur Sikri, the abandoned Mughal city. Arrive in Jaipur and check into the legendary Rambagh Palace, a royal heritage hotel.",
      "details": {
        "accommodation": "The Rambagh Palace, Jaipur",
        "experiences": "Fatehpur Sikri tour",
        "dining": "Traditional Rajasthani thali at Suvarna Mahal",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Rambagh-Palace-jaipur.jpg",
          "caption": "The palace hotel of the Jaipur Royals"
        }
      ],
      "expertNote": "The Rambagh Palace was the principal residence of Maharaja Sawai Man Singh II.",
      "highlights": [
        "Fatehpur Sikri Visit",
        "Royal Palace Arrival"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 7,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur",
      "title": "Amber Fort & City Palace",
      "narrative": "Explore the majestic Amber Fort, the historic seat of Jaipur's rulers. In the afternoon, visit the Hawa Mahal, the City Palace, and the celestial Jantar Mantar observatory.",
      "details": {
        "accommodation": "The Rambagh Palace, Jaipur",
        "experiences": "Full-day Jaipur tour",
        "dining": "Lunch at Baradari, dinner at Rambagh Palace",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/amber-fort.jpg",
          "caption": "The walls of Amber Fort winding along the hills"
        }
      ],
      "expertNote": "City Palace remains home to the titular Jaipur royal family; part of it is a superb museum.",
      "highlights": [
        "Amber Fort Guided Tour",
        "Hawa Mahal & City Palace Curation"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 8,
      "location": "Jaipur",
      "locationKey": "jaipur",
      "meta": "Jaipur",
      "title": "Jaipur's Artisan Quarter",
      "narrative": "Spend a day exploring Jaipur's famous arts and crafts. Visit local block-printers, gem-cutters, and carpet-weavers, experiencing the city's rich living traditions firsthand.",
      "details": {
        "accommodation": "The Rambagh Palace, Jaipur",
        "experiences": "Curated artisans tour",
        "dining": "Lunch and dinner at leisure in Jaipur",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Miniature painting workshops of Jaipur.webp",
          "caption": "Local artists painting traditional miniatures"
        }
      ],
      "expertNote": "Jaipur's blue pottery is another unique local craft that makes for excellent souvenirs.",
      "highlights": [
        "Private Block-Printing Lesson",
        "Gem Market Exploration"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur"
      ]
    },
    {
      "day": 9,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Jaipur to Udaipur",
      "title": "Fly to Lake Pichola",
      "narrative": "Fly from Jaipur to Udaipur. Arrive in the romantic City of Lakes and check into the floating white marble Taj Lake Palace. In the evening, enjoy a sunset boat cruise on Lake Pichola.",
      "details": {
        "accommodation": "Taj Lake Palace, Udaipur",
        "experiences": "Flight transition & Sunset boat cruise",
        "dining": "Royal Mewari dinner at Neel Kamal",
        "transport": "Private SUV & Domestic Flight"
      },
      "images": [
        {
          "url": "/images/taj-lake-palace-udaipur.jpeg",
          "caption": "Taj Lake Palace floating on Lake Pichola"
        }
      ],
      "expertNote": "Taj Lake Palace is one of the most romantic hotels in the world, once used as a summer palace by Mewar kings.",
      "highlights": [
        "Lake Pichola Sunset Cruise",
        "Royal Mewari Dining"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "udaipur"
      ]
    },
    {
      "day": 10,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur",
      "title": "City Palace & Lake Gardens",
      "narrative": "Tour Udaipur's majestic City Palace, the largest palace complex in Rajasthan. Visit the Jagdish Temple and Saheliyon-ki-Bari, the historic Garden of the Maidens.",
      "details": {
        "accommodation": "Taj Lake Palace, Udaipur",
        "experiences": "City Palace guided tour",
        "dining": "Lunch overlooking the lake, dinner at leisure",
        "transport": "Private luxury SUV & Boat"
      },
      "images": [
        {
          "url": "/images/courtyards-udaipur-city-palace.jpg",
          "caption": "The ornate courtyards of Udaipur's City Palace"
        }
      ],
      "expertNote": "The crystal gallery inside the palace exhibits a spectacular, unique collection of royal crystal furniture.",
      "highlights": [
        "City Palace Exploration",
        "Saheliyon-ki-Bari Walk"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "udaipur"
      ]
    },
    {
      "day": 11,
      "location": "Udaipur",
      "locationKey": "udaipur",
      "meta": "Udaipur",
      "title": "Sacred Temple Excursion",
      "narrative": "Take a day excursion to the ancient temples of Eklingji and Nagda. Return to Udaipur for an afternoon of relaxation at the palace spa or leisure shopping in the old town markets.",
      "details": {
        "accommodation": "Taj Lake Palace, Udaipur",
        "experiences": "Eklingji & Nagda temple tour",
        "dining": "Bespoke lunch, dinner at Jharokha",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Intricately carved spires of the Khajuraho temples.jpeg",
          "caption": "The historic temples near Udaipur"
        }
      ],
      "expertNote": "Eklingji has 108 temples enclosed by high walls, dedicated to the family deity of the Mewar rulers.",
      "highlights": [
        "Eklingji Temple Heritage",
        "Nagda ruins exploration"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "udaipur"
      ]
    },
    {
      "day": 12,
      "location": "Mumbai",
      "locationKey": "mumbai",
      "meta": "Udaipur to Mumbai",
      "title": "Fly to the Gateway of India",
      "narrative": "Fly from Udaipur to Mumbai. Check into the legendary Taj Mahal Palace, overlooking Mumbai Harbor. In the evening, take a leisurely stroll along the historic Marine Drive.",
      "details": {
        "accommodation": "The Taj Mahal Palace, Mumbai",
        "experiences": "Flight transition & Marine Drive walk",
        "dining": "Dinner at Wasabi by Morimoto",
        "transport": "Private SUV & Domestic Flight"
      },
      "images": [
        {
          "url": "/images/The Taj Mahal Palace Hotel overlooking Mumbai Harbor.jpg",
          "caption": "The Taj Mahal Palace Hotel in Mumbai"
        }
      ],
      "expertNote": "Wasabi offers exceptional Japanese cuisine, often ranked among Asia's best restaurants.",
      "highlights": [
        "Gateway of India View",
        "Wasabi Dining Experience"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "udaipur",
        "mumbai"
      ]
    },
    {
      "day": 13,
      "location": "Mumbai",
      "locationKey": "mumbai",
      "meta": "Mumbai",
      "title": "Elephanta Caves & Heritage Walk",
      "narrative": "Take a private boat to Elephanta Island to explore the 6th-century rock-cut temples. Return to the city for a walking tour of Mumbai's splendid Victorian Gothic and Art Deco architecture.",
      "details": {
        "accommodation": "The Taj Mahal Palace, Mumbai",
        "experiences": "Elephanta Caves boat tour & Heritage walk",
        "dining": "Lunch at Britannia & Co., dinner at leisure",
        "transport": "Private speed boat & SUV"
      },
      "images": [
        {
          "url": "/images/Elephanta_Caves_Trimurti.jpg",
          "caption": "The famous Trimurti sculpture at Elephanta Caves"
        }
      ],
      "expertNote": "Britannia & Co. is a legendary Parsi cafe famous for its berry pulav and historic atmosphere.",
      "highlights": [
        "Elephanta Island Sculptures",
        "Colonial Bombay Heritage Walk"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "udaipur",
        "mumbai"
      ]
    },
    {
      "day": 14,
      "location": "Mumbai",
      "locationKey": "mumbai",
      "meta": "Mumbai",
      "title": "Bazaars & Modern Mumbai",
      "narrative": "Explore the bustling markets of Mumbai. Visit Crawford Market and Chor Bazaar, and drive past Dhobi Ghat, the city's massive open-air laundromat.",
      "details": {
        "accommodation": "The Taj Mahal Palace, Mumbai",
        "experiences": "Mumbai local culture tour",
        "dining": "Lunch at a seafood specialty restaurant, dinner at Souk",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/Mumbai-colonial-Crawford_Market.jpg",
          "caption": "Crawford Market's colonial era building"
        }
      ],
      "expertNote": "Dhobi Ghat is best viewed from the flyover bridge for a panoramic perspective of the laundry bays.",
      "highlights": [
        "Crawford Market Curation",
        "Dhobi Ghat View"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "udaipur",
        "mumbai"
      ]
    },
    {
      "day": 15,
      "location": "Kovalam",
      "locationKey": "kovalam",
      "meta": "Mumbai to Kovalam",
      "title": "Fly to Tropical Kerala",
      "narrative": "Fly from Mumbai to Trivandrum. Arrive and transfer to Kovalam beach. Check into Niraamaya Retreats Surya Samudra, a cliffside wellness resort. Relax on the secluded beach.",
      "details": {
        "accommodation": "Niraamaya Retreats Surya Samudra, Kovalam",
        "experiences": "Flight transition to tropical South India",
        "dining": "Traditional Keralan dinner overlooking the sea",
        "transport": "Private SUV & Domestic Flight"
      },
      "images": [
        {
          "url": "/images/ayurveda_wellness_1776272638098.png",
          "caption": "Niraamaya Retreats Surya Samudra in Kovalam"
        }
      ],
      "expertNote": "Kovalam has a unique coastline with black sand beaches and high cliffs.",
      "highlights": [
        "Tropical Air Travel",
        "Cliffside Sea-View Dining"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "udaipur",
        "mumbai",
        "kovalam"
      ]
    },
    {
      "day": 16,
      "location": "Kovalam",
      "locationKey": "kovalam",
      "meta": "Kovalam",
      "title": "Ayurvedic Spa & Beach relaxation",
      "narrative": "Experience a signature Ayurvedic wellness ritual at the resort's award-winning spa. Spend the afternoon relaxing on the beach or by the cliffside pool.",
      "details": {
        "accommodation": "Niraamaya Retreats Surya Samudra, Kovalam",
        "experiences": "Ayurvedic wellness consultation & massage",
        "dining": "All meals at leisure at the resort",
        "transport": "None (at resort)"
      },
      "images": [
        {
          "url": "/images/marari.webp",
          "caption": "The beautiful beaches of coastal Kovalam"
        }
      ],
      "expertNote": "Ayurveda is native to Kerala. The doctors at Niraamaya are experts in custom heritage therapies.",
      "highlights": [
        "Signature Ayurvedic Therapy",
        "Secluded Beach Access"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "udaipur",
        "mumbai",
        "kovalam"
      ]
    },
    {
      "day": 17,
      "location": "Kovalam",
      "locationKey": "kovalam",
      "meta": "Kovalam",
      "title": "Trivandrum Heritage Excursion",
      "narrative": "Take a day excursion to Trivandrum. Visit the Padmanabhaswamy Temple, the Napier Museum, and the Sri Chitra Art Gallery. Return to the resort for your farewell beach dinner.",
      "details": {
        "accommodation": "Niraamaya Retreats Surya Samudra, Kovalam",
        "experiences": "Trivandrum city heritage tour",
        "dining": "Farewell seafood dinner by the sea",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/periyar-spice-plantation.png",
          "caption": "Traditional Kerala heritage architecture"
        }
      ],
      "expertNote": "Padmanabhaswamy Temple is famous for its intricate carvings and immense treasure vault.",
      "highlights": [
        "Trivandrum Temple Curation",
        "Bespoke Farewell Dinner"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "udaipur",
        "mumbai",
        "kovalam"
      ]
    },
    {
      "day": 18,
      "location": "Kovalam",
      "locationKey": "kovalam",
      "meta": "Kovalam Departure",
      "title": "Departure",
      "narrative": "Transfer to Trivandrum International Airport for your departure flight home.",
      "details": {
        "accommodation": "None",
        "experiences": "Private airport departure transfer",
        "dining": "Breakfast at hotel",
        "transport": "Private luxury SUV"
      },
      "images": [
        {
          "url": "/images/airport.webp",
          "caption": "Trivandrum airport departure lounge"
        }
      ],
      "expertNote": "Allow 45 minutes for the transfer from the resort to the airport.",
      "highlights": [
        "Private Airport Transfer",
        "Bespoke Farewell Amenities"
      ],
      "revealedRouteKeys": [
        "delhi",
        "agra",
        "jaipur",
        "udaipur",
        "mumbai",
        "kovalam"
      ]
    }
  ],
  "duration": "18 Days / 17 Nights",
  "transfer": "Private Chauffeur SUV, Domestic Flights, and Airport Transfers"
}
};




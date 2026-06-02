// Coordinate registry for all cities and stops in India and Nepal
export const LOCATIONS = {
  delhi:          { name: "Delhi",          coords: [77.2090, 28.6139] },
  agra:           { name: "Agra",           coords: [78.0081, 27.1767] },
  jaipur:         { name: "Jaipur",         coords: [75.7873, 26.9124] },
  kathmandu:      { name: "Kathmandu",      coords: [85.3240, 27.7172] },
  chitwan:        { name: "Chitwan",        coords: [84.4284, 27.5317] },
  pokhara:        { name: "Pokhara",        coords: [83.9856, 28.2096] },
  jodhpur:        { name: "Jodhpur",        coords: [73.0243, 26.2389] },
  nimaj:          { name: "Nimaj",          coords: [74.0768, 26.3023] },
  jhansi:         { name: "Jhansi",         coords: [78.5685, 25.4484] },
  khajuraho:      { name: "Khajuraho",      coords: [79.9199, 24.8318] },
  varanasi:       { name: "Varanasi",       coords: [82.9739, 25.3176] },
  chennai:        { name: "Chennai",        coords: [80.2707, 13.0827] },
  mahabalipuram:  { name: "Mahabalipuram",  coords: [80.1724, 12.6269] },
  pondicherry:    { name: "Pondicherry",    coords: [79.8083, 11.9416] },
  tanjore:        { name: "Tanjore",        coords: [79.1378, 10.7870] },
  madurai:        { name: "Madurai",        coords: [78.1198, 9.9252] },
  periyar:        { name: "Periyar",        coords: [77.1685, 9.6105] },
  kumarakom:      { name: "Kumarakom",      coords: [76.4312, 9.5936] },
  cochin:         { name: "Cochin",         coords: [76.2673, 9.9312] },
  kolkata:        { name: "Kolkata",        coords: [88.3639, 22.5726] },
  mumbai:         { name: "Mumbai",         coords: [72.8777, 19.0760] },
  amanbagh:       { name: "Amanbagh",       coords: [76.3533, 27.2796] },
  deogarh:        { name: "Deogarh",        coords: [73.9056, 25.5342] },
  udaipur:        { name: "Udaipur",        coords: [73.7125, 24.5854] },
  ahmedabad:      { name: "Ahmedabad",      coords: [72.5714, 23.0225] },
  vadodara:       { name: "Vadodara",       coords: [73.1812, 22.3072] },
  rajpipla:       { name: "Rajpipla",       coords: [73.5042, 21.7876] },
  lucknow:        { name: "Lucknow",        coords: [80.9462, 26.8467] },
  hyderabad:      { name: "Hyderabad",      coords: [78.4867, 17.3850] },
  alleppey:       { name: "Alleppey",       coords: [76.3388, 9.4981] },
  munnar:         { name: "Munnar",         coords: [77.0595, 10.0889] },
  marari:         { name: "Marari Beach",   coords: [76.2974, 9.6006] },
  goa:            { name: "Goa",            coords: [73.8278, 15.2993] }
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
        image: "/images/wildlife.jpg"
      },
      {
        title: "Dwarika's Hotel Kathmandu",
        desc: "A magnificent heritage property designed around courtyard architectural restoration and authentic Newari craftsmanship.",
        image: "/images/palace_interior_1776272621551.png"
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
        images: [{ url: "/images/art&culture.jpg", caption: "Ornate temples and stupas in Patan Durbar Square" }],
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
        images: [{ url: "/images/wildlife.jpg", caption: "Meghauli Serai on the banks of Rapti River" }],
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
        images: [{ url: "/images/wildlife.jpg", caption: "A Greater One-horned Rhinoceros in the tall grasslands of Chitwan" }],
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
        images: [{ url: "/images/himalayan_monastery_1776272544257.png", caption: "Fewa Lake reflecting the snowy peaks of Pokhara" }],
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
        images: [{ url: "/images/himalayan_monastery_1776272544257.png", caption: "Sunrise over the Annapurna Mountain range" }],
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "Traditional woodcarvings and courtyards of Dwarika's" }],
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
        images: [{ url: "/images/journeys_hero_1776334755097.png", caption: "Departing Kathmandu Valley" }],
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
        images: [{ url: "/images/maharaja express.jpeg"}],
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
        image: "/images/palace_interior_1776272621551.png"
      },
      {
        title: "Taj Fisherman's Cove Mahabalipuram",
        desc: "Built on the ramparts of an 18th-century Dutch fort, offering private villas nestled along the Bay of Bengal.",
        image: "/images/art&culture.jpg"
      },
      {
        title: "Kumarakom Lake Resort",
        desc: "Acclaimed heritage lakefront villas featuring private pools, built from actual reassembled 150-year-old traditional Keralan homesteads.",
        image: "/images/ayurveda_wellness_1776272638098.png"
      },
      {
        title: "Brunton Boatyard Cochin",
        desc: "A harbor-front hotel steeped in Victorian-era shipping merchant history, offering views of the Cochin channels.",
        image: "/images/final_cta_bg.png"
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "Welcome to Chennai's legendary heritage hotel" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "The ancient Shore Temples of Mahabalipuram" }],
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
        images: [{ url: "/images/about_hero_1776334848582.png", caption: "Detailed bas-relief stone carvings of elephants and gods" }],
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
        images: [{ url: "/images/palace_dining_1776272561908.png", caption: "Warm yellow arches and colonial dining in Pondicherry" }],
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
        images: [{ url: "/images/ayurveda_wellness_1776272638098.png", caption: "The golden Matrimandir sphere at Auroville" }],
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "Heritage restoration courtyards at Svatma Tanjore" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "The massive stone cupola of Brihadisvara Temple" }],
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
        images: [{ url: "/images/dashashwamedh-ghat-evening-ganga-aarti.jpg", caption: "Evening fire ceremonies inside the temple corridors" }],
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "The monumental columns of Tirumalai Nayakkar Palace" }],
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
        images: [{ url: "/images/wildlife.jpg", caption: "Lush green spice plantation paths in Periyar hills" }],
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
        images: [{ url: "/images/wildlife.jpg", caption: "Wild elephants bathing in Lake Periyar" }],
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
        images: [{ url: "/images/final_cta_bg.png", caption: "Fort Cochin harbor and Chinese fishing nets at dusk" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "Traditional Kathakali dancer applying colorful face makeup" }],
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
        images: [{ url: "/images/journeys_hero_1776334755097.png", caption: "Departure flight out of Cochin Airport" }],
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
        image: "/images/palace_interior_1776272621551.png"
      },
      {
        title: "The Oberoi Grand Kolkata",
        desc: "Warmly known as the 'Grand Dame of Calcutta,' featuring neo-classical design, historic ballrooms, and tranquil palm-fringed swimming pools.",
        image: "/images/palace_dining_1776272561908.png"
      },
      {
        title: "The Taj Mahal Palace Mumbai",
        desc: "An architectural marvel positioned directly on the harbor, offering iconic sea-facing suites and over a century of legendary service.",
        image: "/images/final_cta_bg.png"
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "Arriving at New Delhi's landmark colonial estate" }],
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
        images: [{ url: "/images/about_hero_1776334848582.png", caption: "The grand sandstone arches of Delhi's Mughal tombs" }],
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
        images: [{ url: "/images/image.png", caption: "The Taj Mahal reflecting on the Yamuna river at sunset" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "Traditional Pietra Dura marble inlay work" }],
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
        images: [{ url: "/images/palace_dining_1776272561908.png", caption: "The grand Victorian hallways of The Oberoi Grand" }],
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "The massive marble facade of Victoria Memorial" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "Traditional clay idol sculptors at Kumartuli" }],
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
        images: [{ url: "/images/kerala_backwaters_1776272518771.png", caption: "Sunset walk along the shore temples" }],
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
        images: [{ url: "/images/final_cta_bg.png", caption: "The Taj Mahal Palace Hotel overlooking Mumbai Harbor" }],
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "Grand colonial facades of South Mumbai" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "Ancient rock-cut Trimurti sculpture at Elephanta Caves" }],
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
        images: [{ url: "/images/journeys_hero_1776334755097.png", caption: "Departing Mumbai Airport" }],
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
        image: "/images/palace.jpg"
      },
      {
        title: "Taj Lake Palace, Udaipur",
        desc: "The floating marble palace of your dreams in the center of Lake Pichola.",
        image: "/images/hero_palace_lake_1776272480532.png"
      },
      {
        title: "Deogarh Mahal, Rajasthan",
        desc: "A stunning fort palace built on a hilltop, offering rich local art and warm hospitality.",
        image: "/images/rajasthan_palace_exterior_1776272664878.png"
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
        images: [{ url: "/images/palace.jpg", caption: "The pink sandstone domes of Amanbagh" }],
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
        images: [{ url: "/images/palace.jpg", caption: "Sunset temple blessing in the hills of Ajabgarh" }],
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
        images: [{ url: "/images/palace.jpg", caption: "The pink-painted stone facades of the Hawa Mahal" }],
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
        images: [{ url: "/images/rajasthan_palace_exterior_1776272664878.png", caption: "Deogarh Mahal towering over the rural landscape" }],
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
        images: [{ url: "/images/wildlife.jpg", caption: "Scenic countryside rail journey through the Rajasthan hills" }],
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
        images: [{ url: "/images/hero_palace_lake_1776272480532.png", caption: "Taj Lake Palace floating on Lake Pichola" }],
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
        images: [{ url: "/images/palace.jpg", caption: "Intricate mosaic courtyards of the Udaipur City Palace" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "The incredible underground architecture of Adalaj Stepwell" }],
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "The massive Lukshmi Vilas Palace facade" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "The quiet royal courtyards of the Rajpipla estate" }],
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
        images: [{ url: "/images/journeys_hero_1776334755097.png", caption: "Farewell to India" }],
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
        image: "/images/palace.jpg"
      },
      {
        title: "Taj Nadesar Palace, Varanasi",
        desc: "A sanctuary of peace surrounded by marigold fields and sacred mango orchards.",
        image: "/images/rajasthan_palace_exterior_1776272664878.png"
      },
      {
        title: "The Oberoi Grand Kolkata",
        desc: "The Grand Dame of Kolkata, offering heritage suites and prime colonial architecture.",
        image: "/images/palace_interior_1776272621551.png"
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
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "The heritage courtyards of The Imperial" }],
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
        images: [{ url: "/images/qutub minar.webp", caption: "Heaps of colorful spices at Khari Baoli market" }],
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
        images: [{ url: "/images/The Oberoi Amarvilas.jpg", caption: "The Taj Mahal reflecting in the afternoon light" }],
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
        images: [{ url: "/images/taj-mahal.webp", caption: "Red sandstone ramparts of Agra Fort" }],
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
        images: [{ url: "/images/palace.jpg", caption: "The Nawabi monuments of historic Lucknow" }],
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
        images: [{ url: "/images/palace.jpg", caption: "Ornate archways of the Bara Imambara" }],
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
        images: [{ url: "/images/rajasthan_palace_exterior_1776272664878.png", caption: "Lamps glowing at the sunset Ganga Aarti in Varanasi" }],
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
        images: [{ url: "/images/rajasthan_palace_exterior_1776272664878.png", caption: "Row boats floating on the sacred Ganges river at dawn" }],
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
        images: [{ url: "/images/palace.jpg", caption: "Baskets of dried red chilies and local spices in Jaipur bazaar" }],
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "The elegant colonial courtyards of The Oberoi Grand" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "Artisans crafting clay idols in Kumartuli" }],
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
        images: [{ url: "/images/journeys_hero_1776334755097.png", caption: "Departing Kolkata Airport" }],
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
        image: "/images/final_cta_bg.png"
      },
      {
        title: "Taj Falaknuma Palace, Hyderabad",
        desc: "A breathtaking palace sitting 2,000 feet above the city, formerly the home of the Nizam.",
        image: "/images/palace.jpg"
      },
      {
        title: "Brunton Boatyard, Cochin",
        desc: "A historic shipyard turned boutique hotel, offering rich coastal culinary heritage.",
        image: "/images/kerala_backwaters_1776272518771.png"
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
        images: [{ url: "/images/the-imperial-newdelhi.webp", caption: "The heritage courtyards of The Imperial" }],
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
        images: [{ url: "/images/qutub minar.webp", caption: "Heaps of colorful spices at Khari Baoli market" }],
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
        images: [{ url: "/images/The Oberoi Amarvilas.jpg", caption: "The Taj Mahal reflecting in the afternoon light" }],
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
        images: [{ url: "/images/taj-mahal.webp", caption: "Red sandstone ramparts of Agra Fort" }],
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
        images: [{ url: "/images/palace.jpg", caption: "Baskets of dried red chilies and local spices in Jaipur bazaar" }],
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
        images: [{ url: "/images/final_cta_bg.png", caption: "The Taj Mahal Palace Hotel overlooking the Arabian Sea" }],
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "The historic dining rooms of South Mumbai" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "Trimurti rock-cut statue at Elephanta Caves" }],
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
        images: [{ url: "/images/palace.jpg", caption: "Taj Falaknuma Palace sitting grandly on the hill" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "The majestic four-minaret arches of Charminar" }],
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
        images: [{ url: "/images/palace.jpg", caption: "The incredible library of Falaknuma Palace" }],
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
        images: [{ url: "/images/kerala_backwaters_1776272518771.png", caption: "Chinese fishing nets on the shores of Cochin" }],
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
        images: [{ url: "/images/wildlife.jpg", caption: "Sacks of black pepper and ginger in historic Mattancherry warehouse" }],
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
        images: [{ url: "/images/journeys_hero_1776334755097.png", caption: "Farewell to Kerala" }],
        expertNote: "Cochin airport is the world's first fully solar-powered airport.",
        highlights: ["VIP Airport Exit"],
        revealedRouteKeys: ["delhi", "agra", "jaipur", "mumbai", "hyderabad", "cochin"]
      }
    ]
  },
  "kerala-culture-11": {
    id: "kerala-culture-11",
    title: "Malabar Passage: Mumbai to Kerala Backwaters",
    subtitle: "A premium 11-day cultural odyssey from the energetic shores of Mumbai to the emerald backwaters and mist-shrouded hills of Munnar.",
    duration: "11 Days / 10 Nights",
    regionsVisited: "Mumbai, Cochin, Alleppey, Kumarakom, Munnar",
    accommodations: "Heritage Palaces, Luxury Houseboats, and Hill Retreats",
    transfer: "Domestic Flight & Chauffeured SUV",
    heroImage: "/images/cochin.jpg",
    ctaBgImage: "/images/cochin.jpg",
    markerKeys: ["mumbai", "cochin", "alleppey", "kumarakom", "munnar"],
    routeCoords: [
      LOCATIONS.mumbai.coords,
      LOCATIONS.cochin.coords,
      LOCATIONS.alleppey.coords,
      LOCATIONS.kumarakom.coords,
      LOCATIONS.munnar.coords,
      LOCATIONS.cochin.coords
    ],
    accommodationsList: [
      {
        title: "The Taj Mahal Palace, Mumbai",
        desc: "A heritage milestone blending Art Deco sophistication with Victoria-era opulence.",
        image: "/images/mumbai-5.jpg"
      },
      {
        title: "Brunton Boatyard, Cochin",
        desc: "A historic shipyard turned boutique hotel, offering rich coastal culinary heritage.",
        image: "/images/cochin.jpg"
      },
      {
        title: "Kumarakom Lake Resort",
        desc: "A stunning collection of luxury villas bordering the serene Vembanad Lake.",
        image: "/images/kerala_backwaters_1776272518771.png"
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
        images: [{ url: "/images/mumbai-5.jpg", caption: "The imposing Taj Mahal Palace overlooking the bay" }],
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "Art Deco and gothic structures of historic Bombay" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "Dhobi Ghat, Mumbai's massive open-air heritage laundry" }],
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
        images: [{ url: "/images/cochin.jpg", caption: "Colonial-style harbors and shipping lanes of Fort Kochi" }],
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
        images: [{ url: "/images/cochin.jpg", caption: "Giant cantilevered Chinese fishing nets along the coast" }],
        expertNote: "The Chinese Fishing Nets have been in use here since the 14th century, introduced by traders from the court of Kublai Khan.",
        highlights: ["Paradesi Jewish Synagogue", "Chinese Fishing Nets sunset"],
        revealedRouteKeys: ["mumbai", "cochin"]
      },
      {
        day: 6,
        location: "Alleppey",
        locationKey: "alleppey",
        meta: "Cochin - Alleppey",
        title: "Boarding the Houseboat",
        narrative: "Drive to Alleppey (Alappuzha) and board a private heritage thatched houseboat. Spend the day floating through narrow backwater canals.",
        details: {
          accommodation: "Spice Coast Cruises Houseboat (Private Luxury Cabin)",
          experiences: "Private backwater canal cruise, village walking stop",
          dining: "Keralan meals prepared on board by your personal chef",
          transport: "Private luxury SUV & heritage houseboat"
        },
        images: [{ url: "/images/kerala_backwaters_1776272518771.png", caption: "Cruising in a traditional wooden Kettuvallam houseboat" }],
        expertNote: "The houseboats are converted from cargo boats called Kettuvallams, made without a single nail using coir ropes.",
        highlights: ["Private Houseboat Cruise", "Authentic Backwater Meals"],
        revealedRouteKeys: ["mumbai", "cochin", "alleppey"]
      },
      {
        day: 7,
        location: "Kumarakom",
        locationKey: "kumarakom",
        meta: "Alleppey - Kumarakom",
        title: "Lakeside Haven",
        narrative: "Disembark your houseboat at Kumarakom Lake Resort. Spend a relaxing afternoon walking along the resort's private canals.",
        details: {
          accommodation: "Kumarakom Lake Resort (Heritage Pool Villa)",
          experiences: "Resort orientation, evening sunset cruise on Vembanad Lake",
          dining: "Fresh pearlspot fish dinner at Ettukettu",
          transport: "Private motor boat & resort transfer"
        },
        images: [{ url: "/images/kerala_backwaters_1776272518771.png", caption: "The tranquil canals of Kumarakom Lake Resort" }],
        expertNote: "Ettukettu restaurant is housed in an authentic 180-year-old wooden mansion reconstructed on site.",
        highlights: ["Heritage Pool Villa Rest", "Vembanad Lake Sunset Cruise"],
        revealedRouteKeys: ["mumbai", "cochin", "alleppey", "kumarakom"]
      },
      {
        day: 8,
        location: "Kumarakom",
        locationKey: "kumarakom",
        meta: "Kumarakom",
        title: "Bird Sanctuary & Ayurveda",
        narrative: "Embark on an early morning bird walk in Kumarakom Sanctuary, followed by a rejuvenating ayurvedic massage at the resort spa.",
        details: {
          accommodation: "Kumarakom Lake Resort",
          experiences: "Kumarakom Bird Sanctuary tour, 90-minute private Abhyanga Ayurvedic therapy",
          dining: "Lakeside tea and snack curation, local organic dinner",
          transport: "Private resort boat & SUV"
        },
        images: [{ url: "/images/ayurveda_wellness_1776272638098.png", caption: "Ayurvedic wellness oils and herbal therapy sessions" }],
        expertNote: "Abhyanga is an ancient full-body massage using warm medicated herb oils to balance body energies.",
        highlights: ["Bird Sanctuary Tour", "Full-Body Ayurvedic Therapy"],
        revealedRouteKeys: ["mumbai", "cochin", "alleppey", "kumarakom"]
      },
      {
        day: 9,
        location: "Munnar",
        locationKey: "munnar",
        meta: "Kumarakom - Munnar",
        title: "Up to the Tea Estates",
        narrative: "Drive up into the mist-shrouded Western Ghats to Munnar. Check into your heritage tea estate bungalow and enjoy the cooler mountain air.",
        details: {
          accommodation: "Windermere Estate Munnar (Estate Room)",
          experiences: "Scenic mountain drive, tea plantation estate walk",
          dining: "Traditional Keralan mountain estate dinner",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/wildlife.jpg", caption: "Munnar's rolling green tea plantations stretching across the valleys" }],
        expertNote: "Munnar sits at an altitude of 1,600 meters above sea level and was once the summer resort of the British government in South India.",
        highlights: ["Tea Estate Bungalow Stay", "Scenic Western Ghats Drive"],
        revealedRouteKeys: ["mumbai", "cochin", "alleppey", "kumarakom", "munnar"]
      },
      {
        day: 10,
        location: "Munnar",
        locationKey: "munnar",
        meta: "Munnar",
        title: "Tea Processing & Eravikulam",
        narrative: "Visit a working tea factory to see how tea is processed, and explore Eravikulam National Park, home to the rare Nilgiri Tahr.",
        details: {
          accommodation: "Windermere Estate Munnar",
          experiences: "Tea factory guided tour, Eravikulam National Park wildlife tour",
          dining: "Hilltop estate picnic lunch, plantation farewell dinner",
          transport: "Open-top estate jeep"
        },
        images: [{ url: "/images/wildlife.jpg", caption: "Nilgiri Tahr mountain goat on the cliffs of Munnar" }],
        expertNote: "Eravikulam is home to the largest surviving population of the endangered Nilgiri Tahr.",
        highlights: ["Tea Factory Tour", "Rare Wildlife Spotting"],
        revealedRouteKeys: ["mumbai", "cochin", "alleppey", "kumarakom", "munnar"]
      },
      {
        day: 11,
        location: "Cochin",
        locationKey: "cochin",
        meta: "Munnar - Cochin airport",
        title: "Departure",
        narrative: "Drive down from Munnar to Cochin International Airport for your departure flight home.",
        details: {
          accommodation: "VIP Departure Lounge",
          experiences: "Airport departure transfer",
          dining: "Bungalow breakfast",
          transport: "Private luxury SUV"
        },
        images: [{ url: "/images/journeys_hero_1776334755097.png", caption: "Farewell to Cochin" }],
        expertNote: "Buy some fresh cardamom and pepper from Munnar's spice markets to take home.",
        highlights: ["VIP Airport Exit"],
        revealedRouteKeys: ["mumbai", "cochin", "alleppey", "kumarakom", "munnar", "cochin"]
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
    heroImage: "/images/kerala_backwaters_1776272518771.png",
    ctaBgImage: "/images/kerala_backwaters_1776272518771.png",
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
        image: "/images/mumbai-5.jpg"
      },
      {
        title: "Windermere Estate, Munnar",
        desc: "A historic sanctuary tucked away in rolling hills and tea plantations.",
        image: "/images/wildlife.jpg"
      },
      {
        title: "Marari Beach Resort",
        desc: "A peaceful eco-luxury retreat situated right along the white sands of Marari.",
        image: "/images/kerala_backwaters_1776272518771.png"
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
        images: [{ url: "/images/mumbai-5.jpg", caption: "The imposing Taj Mahal Palace overlooking the bay" }],
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "Art Deco and gothic structures of historic Bombay" }],
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
        images: [{ url: "/images/art&culture.jpg", caption: "Dhobi Ghat, Mumbai's massive open-air heritage laundry" }],
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
        images: [{ url: "/images/cochin.jpg", caption: "Colonial-style harbors and shipping lanes of Fort Kochi" }],
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
        images: [{ url: "/images/cochin.jpg", caption: "Giant cantilevered Chinese fishing nets along the coast" }],
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
        images: [{ url: "/images/wildlife.jpg", caption: "Rolling tea plantations in the misty hills of Munnar" }],
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
        images: [{ url: "/images/wildlife.jpg", caption: "Mountain forests of Munnar" }],
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
        images: [{ url: "/images/kerala_backwaters_1776272518771.png", caption: "Coconut-lined backwater canals at sunset" }],
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
        images: [{ url: "/images/kerala_backwaters_1776272518771.png", caption: "Private pool villas at Marari Beach Resort" }],
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
        images: [{ url: "/images/journeys_hero_1776334755097.png", caption: "Farewell to India" }],
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
    heroImage: "/images/goa_heritage_1776272683299.png",
    ctaBgImage: "/images/goa_heritage_1776272683299.png",
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
        image: "/images/mumbai-5.jpg"
      },
      {
        title: "Taj Exotica Resort & Spa, Goa",
        desc: "A beautiful Mediterranean-style resort overlooking the Arabian Sea shore.",
        image: "/images/goa_heritage_1776272683299.png"
      },
      {
        title: "Kumarakom Lake Resort",
        desc: "A stunning collection of luxury villas bordering the serene Vembanad Lake.",
        image: "/images/kerala_backwaters_1776272518771.png"
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
        images: [{ url: "/images/mumbai-5.jpg", caption: "Chauffeured arrival at the grand Taj Mahal Palace" }],
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
        images: [{ url: "/images/palace_interior_1776272621551.png", caption: "The historic structures of old South Mumbai" }],
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
        images: [{ url: "/images/goa_heritage_1776272683299.png", caption: "The historic Basilica of Bom Jesus in Old Goa" }],
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
        images: [{ url: "/images/goa_heritage_1776272683299.png", caption: "The colorful lanes of the Latin Quarter Fontainhas" }],
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
        images: [{ url: "/images/cochin.jpg", caption: "Historic spice warehouses of Mattancherry" }],
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
        images: [{ url: "/images/kerala_backwaters_1776272518771.png", caption: "The tranquil canals of Kumarakom Lake Resort" }],
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
        images: [{ url: "/images/journeys_hero_1776334755097.png", caption: "Farewell to India" }],
        expertNote: "Check in early to secure lounge access prior to your long-haul flight.",
        highlights: ["VIP Airport Exit"],
        revealedRouteKeys: ["mumbai", "goa", "cochin", "kumarakom", "cochin"]
      }
    ]
  }
};

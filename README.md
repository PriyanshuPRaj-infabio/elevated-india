# Elevated India — Private Travel House

Elevated India is an immersive, high-end digital portal designed with a **"Quiet Luxury"** aesthetic to showcase bespoke, narrative-driven luxury journeys across the Indian subcontinent. It serves as a digital gateway for discerning global travelers seeking rare cultural access, historical depth, and absolute privacy.

---

## 🏛 Brand Philosophy & Design System

The platform's design mirrors its real-world service philosophy: authentic, restrained, and meticulously composed. It abandons standard commercial travel tropes in favor of an editorial, cinematic experience.

### 🎨 Visual & Aesthetic Foundations
- **Color Palette**: Built around a curated, low-contrast, warm tone system:
  - **Ivory (`#F7F3EE`)** & **Stone (`#EDE8E0`)** as main backgrounds for an organic, premium feel.
  - **Gold (`#B8964A`)** & **Gold Pale (`#E8D5A8`)** for subtle metallic accents and premium highlights.
  - **Charcoal (`#1C1C1C`)** for high-contrast, premium editorial typography.
  - **Forest (`#2D4A3E`)** & **Maroon (`#5C1A2A`)** for delicate state alerts and visual focus.
- **Typography**:
  - **Serif (`Cormorant Garamond`)**: Used for headings, quotes, and editorial styling.
  - **Sans-Serif (`Inter`)**: Used for high-legibility interface elements, menus, forms, and body copy.
  - **Responsive Sizing**: Heading sizes utilize CSS `clamp()` functions to adjust dynamically across viewports.

---

## ⚡ Technical Architecture & Motion Stack

To establish an immersive, high-fidelity experience, Elevated India combines Next.js with a synchronized motion choreography stack:

### 1. Synchronized Smooth Scrolling (Lenis + GSAP)
All pages are wrapped inside the `<SmoothScroll>` wrapper (`src/components/SmoothScroll.jsx`), which:
- Initializes **Lenis** smooth scrolling.
- Automatically synchronizes Lenis' scroll position updates with GSAP's `ScrollTrigger`.
- Binds Lenis' update tick to GSAP's global ticker (`gsap.ticker.add`) to ensure scroll and animation paint loops are executed in perfect frame sync.
- Disables GSAP's lag smoothing to prevent animation stuttering on heavy scroll inputs.

### 2. Standardized Scroll Animations (`useGsapAnimations`)
Instead of dispersed layout triggers, the site uses a centralized react hook (`src/hooks/useGsapAnimations.js`):
- Targets elements with class `.gsap-fade-up` and translates them `y: 20 -> 0` while fading opacity from `0 -> 1`.
- Targets `.gsap-fade-in` elements for clean, fade-in transitions.
- Utilizes `once: true` inside `ScrollTrigger` configs to guarantee that elements remain visible once revealed.

### 3. WebGL Particle Dust Backdrop (`HeroCanvas`)
The home hero page overlays a Three.js WebGL canvas (`src/components/HeroCanvas.jsx`) running a soft gold particle dust field:
- Rendered using `@react-three/fiber` and `@react-three/drei`.
- Generates 800 random coordinate points within a 3D spherical radius using raw trigonometry.
- Continuously rotates the particle sphere on the `X` and `Y` axes using standard frame-delta increments.
- Utilizes `pointer-events: none` to let mouse clicks pass through seamlessly to underlying text buttons.

---

## 📂 Project Directory Structure

```filepath
Elevated-India/
├── public/                      # Static Assets
│   ├── images/                  # High-resolution destination & background images
│   └── lottie/                  # Lottie JSON animation files (e.g., scroll-indicator.json)
├── src/                         # Application Source Code
│   ├── app/                     # Next.js 14 App Router Routes
│   │   ├── about/               # About page (brand values, principles, networks)
│   │   ├── concierge/           # Concierge flow (4-step curation system, access details)
│   │   ├── contact/             # Detailed private inquiry & WhatsApp callback portal
│   │   ├── destinations/        # Bento-grid overview of curated regions
│   │   ├── experiences/         # 6 core luxury experience pillars (Wellness, Wildlife, Safari)
│   │   ├── journal/             # Editorial brief, archive, & newsletter sign-up
│   │   ├── journeys/            # Curated itinerary options (The Maharaja Circuit, Thar Desert)
│   │   ├── layout.jsx           # Global HTML structure, metadata, & global wrappers
│   │   └── page.jsx             # Home page (interactive hero slider, stats counter, reviews)
│   ├── components/              # Shared UI Components
│   │   ├── Footer.jsx           # Editorial site footer
│   │   ├── HeroCanvas.jsx       # Three.js / React Three Fiber interactive background
│   │   ├── LottieScroll.jsx     # Animated scroll-down hint player
│   │   ├── Navbar.jsx           # Adaptive scroll-aware navigation bar
│   │   └── SmoothScroll.jsx     # Lenis smooth-scroll & GSAP sync provider
│   ├── hooks/                   # Custom React Hooks
│   │   └── useGsapAnimations.js # ScrollTrigger reveal bindings
│   └── styles/                  # Styling Architecture
│       ├── components.css       # Styling for Navbar, Footer, Buttons, Cards, Forms
│       ├── main.css             # CSS variables, typography utility classes, grids, resets
│       └── pages.css            # Layout details specific to individual pages
├── jsconfig.json                # Project paths configuration (aliasing `@/*` to `./src/*`)
├── next.config.mjs              # Next.js config (transpiling canvas dependencies, unoptimized images)
└── package.json                 # Node dependencies and project scripts
```

---

## 🧭 Page Outlines & Features

### 🏛 Home Page (`/`)
- **Slideshow Hero**: A smooth 5-second automatic slideshow rotating through gorgeous scenes of India.
- **WebGL Dust Particles**: Integrates `HeroCanvas` for atmospheric luxury depth.
- **Interactive Stats Bar**: Uses a custom React component with `IntersectionObserver` to trigger a cubic-eased, step-by-step counter animation when visible.
- **Pillars & Testimonials**: Showcase of curation categories with smooth scale animations on hover.

### 🐪 Journeys (`/journeys`)
- Contains detailed overview cards for flagships like *The Maharaja Circuit Reimagined*, *Sacred India*, and *The Grand Indian Honeymoon*.
- Features direct buttons to request details for specific itineraries.

### 🐅 Experiences (`/experiences`)
- Divided into 6 core themes (Royal Residences, Wellness, Private Safaris, Spiritual Journeys, Gastronomy, Art & Design).
- Displays alternating content columns using premium, copy-dense layouts.

### 🗺 Destinations (`/destinations`)
- Rendered in an asymmetrical bento-grid. Thar Desert spans double columns (`span 2`) for visual balance.
- Smooth image scale transitions on mouse hover.

### 🗝 Concierge (`/concierge`)
- Chronologically breaks down the consultation lifecycle: **Dialogue ➔ Curation & Design ➔ Refinement ➔ The Journey**.
- Spotlights exclusive VIP arrangements (charter flights, private dinners).

### 🖋 Journal (`/journal`)
- A digital publication containing deep-dive cultural guides.
- **Brief Signup**: Includes a validated client subscription form that redirects submissions locally.

### 📞 Contact & Inquiry Portal (`/contact`)
- **Interactive Multi-Step Form**: Asks users for details like name, email, preferred travel dates, group size, and preferred accommodation type (e.g., Ultra-luxury private palace suites vs boutique heritage).
- **Direct Redirections**:
  - **WhatsApp Curation**: Reads current form values and encodes a pre-formulated message template dynamically, opening WhatsApp on click.
  - **Callback Scheduler**: Dedicated form to request phone follow-ups, with status indicators (Success/Submitting).

---

## 🛠 Setup & Local Development

### Prerequisites
- Node.js (v18.x or above recommended)
- npm (v9.x or above)

### 1. Install Dependencies
In the root directory of the project, run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 3. Build for Production
To generate a production-optimized build of the project:
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```

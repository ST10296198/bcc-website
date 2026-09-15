# BCC Tech & Creative Centre

> **Live Tomorrow, Today**

A modern, responsive website for **BCC Tech & Creative Centre**, a technology, hardware, digital systems, creative media, photography, printing, and technical services centre based in Bethal, Mpumalanga, South Africa.

The website was designed to present BCC as a professional, multidisciplinary technology and creative business while providing customers with clear access to services, company information, portfolio work, contact details, and repair/service intake.

---

## 📌 Project Overview

The BCC Tech & Creative Centre website was created as a full React-based business website with a strong focus on:

- Professional desktop and mobile presentation
- Responsive layouts
- Modern visual hierarchy
- Clear service categorisation
- Local image assets
- Interactive navigation
- Portfolio and photography showcasing
- Service and repair information
- Customer contact and booking pathways
- A scalable structure for future backend integration

The website consists of four primary pages:

| Page | Purpose |
|---|---|
| **Home** | Main business overview, featured services, highlights, projects, reviews and contact/intake |
| **Services** | Full breakdown of technical, creative, printing, systems, automotive and networking services |
| **About** | Company history, operating principles, team, milestones, facility information and company background |
| **Portfolio** | Photography, events, creative work, AV staging, studio capabilities and client showcases |

---

# 🧰 Technology Stack

The project was built using modern frontend technologies:

### Frontend

- **React 19**
- **React DOM 19**
- **React Router**
- **Vite**
- **Tailwind CSS v4**

### Design & UI

- Tailwind CSS custom theme
- Material Symbols
- Inter
- Plus Jakarta Sans
- Responsive utility classes
- Custom colour tokens
- Custom spacing tokens
- Responsive typography

### Development

- JavaScript / JSX
- Vite development server
- Git
- GitHub
- Oxlint

---

# 🎨 Design System

The website uses a custom design system rather than relying entirely on Tailwind's default colours and spacing.

The design system is defined in:

```text
src/index.css
```

It includes custom:

- Colours
- Typography
- Spacing
- Surface/background layers
- Primary and secondary colours
- Border colours
- Font sizes
- Line heights
- Container widths
- Responsive design tokens

### Main visual characteristics

The design uses:

- Clean professional surfaces
- Blue technology-focused accents
- Soft layered backgrounds
- Rounded cards
- Subtle shadows
- Large hero typography
- Responsive grids
- Material iconography
- Photography-led portfolio sections
- Desktop-first professional presentation with mobile responsiveness

---

# 📁 Project Structure

```text
bcc-website/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── images/
│   │       ├── logo.png
│   │       │
│   │       ├── about/
│   │       │   ├── hero-bench.jpg
│   │       │   ├── phase-1.jpg
│   │       │   ├── phase-2.jpg
│   │       │   ├── phase-3.jpg
│   │       │   └── location-map.jpg
│   │       │
│   │       ├── homepage/
│   │       │   └── gallery/
│   │       │       ├── project-01.jpg
│   │       │       ├── project-02.jpg
│   │       │       ├── project-03.jpg
│   │       │       ├── project-04.jpg
│   │       │       ├── project-05.jpg
│   │       │       └── project-06.jpeg
│   │       │
│   │       ├── portfolio/
│   │       │   ├── cultural-wedding.jpg
│   │       │   ├── vineyard-wedding.jpg
│   │       │   ├── matric-gala.jpg
│   │       │   ├── church-event.jpg
│   │       │   ├── studio-portrait.jpg
│   │       │   ├── av-audio.jpg
│   │       │   ├── av-screen.jpg
│   │       │   └── studio-gear.jpg
│   │       │
│   │       ├── services/
│   │       │   ├── repairs-bench.jpg
│   │       │   ├── design-workstation.jpg
│   │       │   ├── systems.jpg
│   │       │   └── key-programming.jpg
│   │       │
│   │       └── team/
│   │           ├── trynos.jpg
│   │           ├── christine.jpg
│   │           ├── lammy.jpg
│   │           └── sylvester.jpg
│   │
│   ├── components/
│   │   └── layout/
│   │       ├── Header.jsx
│   │       ├── NoiseFilter.jsx
│   │       └── ScrollToHash.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── Portfolio.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# 🖥️ Application Pages

## 🏠 Home

The homepage acts as the primary entry point into the BCC website.

It includes:

- Hero introduction
- Technical service overview
- Creative studio overview
- Business value propositions
- Featured project gallery
- Client reviews
- Location/contact information
- Service intake form
- Custom footer

The homepage is designed to immediately communicate that BCC operates across both the **technology** and **creative media** spaces.

---

# 🛠️ Services

The Services page provides a detailed breakdown of BCC's operational divisions.

### Technical services

- Laptop and desktop repairs
- Logic board repairs
- Micro-soldering
- Screen replacement
- Battery replacement
- Thermal maintenance
- Data recovery
- Custom PC engineering
- Hardware sales
- Printing and copying
- Fleet printing
- SARS eFiling assistance

### Digital services

- Business websites
- E-commerce
- Store ticketing systems
- POS systems
- Order dispatch
- REST API development
- ERP integrations
- Cloud infrastructure
- PostgreSQL
- Domain management

### Specialist services

- Vehicle key programming
- ECU diagnostics
- Immobilizer diagnostics
- CCTV installation
- Network planning
- Structured cabling
- Enterprise Wi-Fi
- Managed VLANs
- Dual-WAN networking

### Creative services

- Graphic design
- Corporate identity
- Vector drafting
- Branding
- Printing
- Photography
- Studio services
- Audiovisual support

---

# ℹ️ About

The About page presents the background and identity of BCC Tech & Creative Centre.

It contains:

- Company heritage
- Founding story
- Growth timeline
- Operating principles
- Component-level repair philosophy
- Data confidentiality principles
- Community pricing approach
- Team showcase
- Company milestones
- Facility structure
- Local economic impact
- Physical location
- Contact CTA

### Team

The current team showcase uses locally stored images:

```text
src/assets/images/team/
```

Team members represented include:

- Trynos — Founder & Lead Hardware Architect
- Sylvester — Technician
- Christine — Reception
- Lammy — Studio Lead & Media Director

---

# 📷 Portfolio

The Portfolio page is the dedicated visual showcase for the BCC creative side of the business.

It contains:

### Photography

- Traditional cultural weddings
- Modern weddings
- Vineyard weddings
- Matric farewell events
- Church events
- Conferences
- Executive portraits
- ID and biometric photography

### Audiovisual

- Professional PA systems
- Wireless microphone systems
- 4K displays
- Projection systems
- Event lighting
- DJ setup support

### Studio

- Professional lighting
- Tethered review
- Private image delivery
- Colour-managed workflows
- Archival printing
- Professional studio equipment

### Client showcases

The page also contains testimonial sections and enquiry pathways for future bookings.

---

# 📱 Responsive Design

The website was designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive behaviour includes:

- Collapsing navigation
- Mobile-friendly grids
- Responsive typography
- Responsive image layouts
- Responsive buttons
- Mobile-friendly service cards
- Responsive portfolio layouts
- Mobile spacing adjustments

The desktop layout uses a wider content container to provide a more expansive professional appearance while maintaining controlled readability.

---

# 🧭 Navigation

The primary navigation includes:

```text
Home
Services
About
Portfolio
Book Repair
```

The Services navigation item also contains a dropdown for major service divisions.

The website uses React Router for page navigation.

Current routes:

```text
/
 /services
 /about
 /portfolio
```

---

# 🔗 Smooth Section Navigation

The project includes:

```text
src/components/layout/ScrollToHash.jsx
```

This handles hash-based navigation and smooth scrolling.

For example:

```text
/#contact-intake
```

allows the global **Book Repair** button in the header to navigate from any page back to the homepage and smoothly scroll to the intake form.

---

# 📩 Contact & Repair Intake

The homepage contains the main customer service intake form.

### Current development behaviour

The form currently functions as a frontend interaction and does **not yet send real email messages**.

This is intentional while the website remains in development.

No personal developer email address is currently connected to the production submission system.

---

# 🚀 Production Form Integration

When BCC is ready to launch the website publicly, the intended form integration is:

```text
Customer
   ↓
BCC Website
   ↓
Web3Forms API
   ↓
BCC Business Email
   ↓
Consultant Reviews Request
   ↓
Customer Contact
```

Web3Forms is planned because it can provide direct form-to-email functionality without requiring the project to maintain a custom backend email server.

### Production configuration

The production environment variable will use:

```env
VITE_WEB3FORMS_ACCESS_KEY=YOUR_BCC_WEB3FORMS_ACCESS_KEY
```

The BCC business email should be configured only when the business is ready to take the site live.

---

# 🔐 Environment Variables

Sensitive configuration should not be committed to GitHub.

Example:

```env
VITE_WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY
```

The actual `.env` file should remain excluded through `.gitignore`.

Example `.gitignore` entry:

```gitignore
.env
.env.*
!.env.example
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Move into the project:

```bash
cd bcc-website
```

Install dependencies:

```bash
npm install
```

---

# 💻 Development

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

---

# 🏗️ Production Build

Before deployment, create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

# 🔍 Linting

The project uses Oxlint.

Run:

```bash
npm run lint
```

---

# 📦 Deployment

The website is structured as a standard Vite/React application and can be deployed to services such as:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Traditional web hosting supporting static builds

The production build is generated with:

```bash
npm run build
```

The resulting output is placed in:

```text
dist/
```

---

# 🔄 Git & GitHub Workflow

The project uses Git for version control.

Typical workflow:

```bash
git status
```

```bash
git add .
```

```bash
git commit -m "Update BCC website"
```

```bash
git push
```

For major releases, use descriptive commit messages such as:

```bash
git commit -m "Finalize BCC Tech and Creative Centre website"
```

---

# 🧪 Final Pre-Deployment Checklist

Before the website goes live, verify:

### Website

- [ ] Home page works correctly
- [ ] Services page works correctly
- [ ] About page works correctly
- [ ] Portfolio page works correctly
- [ ] Header navigation works
- [ ] Services dropdown works
- [ ] Mobile navigation works
- [ ] Book Repair button works
- [ ] Smooth scrolling works
- [ ] All images load
- [ ] No missing image imports
- [ ] No broken routes

### Forms

- [ ] Production email address confirmed
- [ ] Web3Forms account configured
- [ ] Web3Forms access key added
- [ ] Form submission tested
- [ ] Success message tested
- [ ] Failure message tested
- [ ] Spam protection reviewed

### Visual

- [ ] Desktop layout tested
- [ ] Laptop layout tested
- [ ] Tablet layout tested
- [ ] Mobile layout tested
- [ ] Header spacing checked
- [ ] Typography checked
- [ ] Images checked
- [ ] Footer checked

### Production

- [ ] Domain connected
- [ ] HTTPS enabled
- [ ] Production environment variables configured
- [ ] Final build successful
- [ ] GitHub repository up to date
- [ ] Live website tested

---

# 🌍 Business Information

**BCC Tech & Creative Centre**

📍 50B Du Plooy Street  
Bethal, Mpumalanga, 2310  
South Africa

📞 **+27 76 932 8706**

Services operate across:

- Technology
- Hardware
- Repairs
- Digital systems
- Printing
- Networking
- Photography
- Creative media
- Audiovisual production

---

# 🎯 Project Goals

The primary goals of the project are to:

1. Establish a strong professional digital presence for BCC.
2. Clearly communicate the company's broad technology and creative services.
3. Showcase professional photography and media work.
4. Provide customers with easy access to service information.
5. Provide a clear pathway for repair and service enquiries.
6. Build a foundation that can later support production email and backend services.
7. Maintain a responsive experience across desktop and mobile devices.
8. Use locally controlled assets rather than depending on external image URLs.

---

# 🔮 Future Improvements

Potential future development includes:

- Production Web3Forms integration
- Backend service intake
- Automatic enquiry ticket numbers
- Email notifications
- Customer enquiry tracking
- SMS notifications
- Online booking calendar
- Customer portal
- Repair status tracking
- Admin dashboard
- Database-backed service requests
- Online quotation generation
- Customer authentication
- Analytics
- SEO optimisation
- Performance optimisation
- Production domain deployment

---

# 👨‍💻 Development

This project was developed as a modern React/Vite implementation of the BCC Tech & Creative Centre website design.

The project prioritises:

**Professional presentation • Responsive design • Local assets • Clear navigation • Scalable architecture**

---

# 📄 License

This project is intended for the BCC Tech & Creative Centre website and related business purposes.

Unless otherwise agreed, the website design, content, branding, and custom assets should not be redistributed or reused for unrelated commercial projects.

---

## BCC Tech & Creative Centre

**Live Tomorrow, Today.**

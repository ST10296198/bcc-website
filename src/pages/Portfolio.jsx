import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/images/logo.png";

import culturalWedding from "../assets/images/portfolio/cultural-wedding.jpg";
import vineyardWedding from "../assets/images/portfolio/vineyard-wedding.jpg";
import matricGala from "../assets/images/portfolio/matric-gala.jpg";
import churchEvent from "../assets/images/portfolio/church-event.jpg";
import studioPortrait from "../assets/images/portfolio/studio-portrait.jpg";
import avAudio from "../assets/images/portfolio/av-audio.jpg";
import avScreen from "../assets/images/portfolio/av-screen.jpg";
import studioGear from "../assets/images/portfolio/studio-gear.jpg";

const portfolioCategories = [
  {
    id: "all",
    label: "All Work",
  },
  {
    id: "traditional",
    label: "Traditional Cultural Weddings",
  },
  {
    id: "modern",
    label: "White & Vineyard Weddings",
  },
  {
    id: "matric",
    label: "Matric Farewells & Galas",
  },
  {
    id: "church",
    label: "Church Events & Conventions",
  },
  {
    id: "studio",
    label: "Studio Portraits & Biometrics",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    if (category === "all") {
      scrollToSection("portfolio-gallery");
      return;
    }

    const targetMap = {
      traditional: "cultural-weddings",
      modern: "vineyard-weddings",
      matric: "matric-gala",
      church: "church-events",
      studio: "studio-portraits",
    };

    scrollToSection(targetMap[category]);
  };

  const isVisible = (category) => {
    return activeCategory === "all" || activeCategory === category;
  };

  return (
    <div className="flex w-full flex-col">

      {/* =========================================================
          SECTION 1: HERO HEADER
      ========================================================== */}
      <section
        id="portfolio-top"
        className="relative w-full overflow-hidden bg-surface-container-low py-space-3xl"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-fixed/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-secondary-container/40 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-container-max flex-col items-center px-gutter-mobile text-center md:px-gutter-desktop">

          <div className="mb-space-md inline-flex items-center gap-space-xs rounded-full bg-surface px-space-md py-space-2xs shadow-sm">

            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />

            <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary">
              BCC CREATIVE STUDIO &amp; ON-LOCATION MEDIA
            </span>

          </div>

          <h1 className="mb-space-md max-w-4xl font-display-lg text-display-lg leading-none tracking-tight text-on-surface">
            Capturing Milestones, Culture &amp;{" "}
            <span className="text-primary-container">
              Visual Elegance
            </span>{" "}
            Across Mpumalanga.
          </h1>

          <p className="mb-space-xl max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
            From our fully equipped 50B Du Plooy Street studio to on-location
            galas and ceremonies across Mpumalanga. Explore our masterwork
            across fine-art photography, event production, and technical
            audiovisual staging.
          </p>

          {/* Category Filters */}
          <div
            id="portfolio-filters"
            className="flex w-full items-center justify-center gap-space-xs overflow-x-auto pb-space-xs"
          >
            {portfolioCategories.map((category) => {
              const active = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
                  className={`shrink-0 rounded-full px-space-md py-space-xs font-label-md text-label-md font-semibold transition-all ${
                    active
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: CURATED VISUAL SHOWCASE
      ========================================================== */}
      <section
        id="portfolio-gallery"
        className="w-full bg-surface py-space-3xl"
      >
        <div className="mx-auto max-w-container-max px-gutter-mobile md:px-gutter-desktop">

          <div className="mb-space-2xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">

            <div>
              <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
                Flagship Engagements
              </span>

              <h2 className="mt-space-2xs font-headline-lg text-headline-lg tracking-tight text-on-surface">
                Masterpieces of Emotion, Light &amp; Tradition
              </h2>
            </div>

            <div className="flex items-center gap-space-sm rounded-xl bg-surface-container-low px-space-md py-space-xs">

              <span className="material-symbols-outlined text-[20px] text-primary">
                photo_camera
              </span>

              <span className="font-label-md text-label-md text-on-surface-variant">
                Sony Alpha Cine FX3 &amp; A7R V • Master Prime Lenses
              </span>

            </div>
          </div>

          {/* Bento Gallery */}
          <div
            id="gallery-grid"
            className="grid grid-cols-1 gap-space-lg md:grid-cols-12"
          >

            {/* =====================================================
                CARD 1: CULTURAL WEDDINGS
            ====================================================== */}
            {isVisible("traditional") && (
              <article
                id="cultural-weddings"
                className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md md:col-span-8"
              >

                <div className="relative h-[400px] w-full overflow-hidden">

                  <img
                    src={culturalWedding}
                    alt="Traditional African cultural wedding photography"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent" />

                  <div className="absolute left-space-md top-space-md flex flex-wrap gap-space-xs">

                    <span className="rounded-full bg-surface-container-lowest/90 px-space-sm py-space-2xs font-label-sm text-label-sm font-bold text-primary backdrop-blur-md">
                      Cultural Heritage
                    </span>

                    <span className="rounded-full bg-surface-container-lowest/90 px-space-sm py-space-2xs font-label-sm text-label-sm text-on-surface-variant backdrop-blur-md">
                      Mpumalanga Mountains Hills
                    </span>

                  </div>

                  <div className="absolute bottom-space-lg left-space-lg right-space-lg text-surface-bright">

                    <h3 className="mb-space-2xs font-headline-md text-headline-md font-bold">
                      Traditional African &amp; Cultural Weddings
                    </h3>

                    <p className="max-w-2xl font-body-md text-body-md text-surface-container">
                      Capturing timeless Umembeso and Umshado ceremonies. We
                      honor vivid cultural tapestries, beadwork textures,
                      ancestral rituals, and communal joy with rich, lifelike
                      color science.
                    </p>

                  </div>
                </div>

                <div className="flex items-center justify-between bg-surface-container-lowest p-space-lg">

                  <div className="flex items-center gap-space-md">

                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase text-secondary">
                        Coverage Duration
                      </span>

                      <span className="font-title-md text-title-md text-on-surface">
                        Full 2-Day Ritual Package
                      </span>
                    </div>

                    <div className="h-8 w-px bg-surface-container-high" />

                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase text-secondary">
                        Delivered Assets
                      </span>

                      <span className="font-title-md text-title-md text-on-surface">
                        850 Fine Art Edits
                      </span>
                    </div>

                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-space-2xs rounded-lg bg-surface-container px-space-md py-space-xs font-label-md text-label-md text-primary transition-colors hover:bg-secondary-container"
                  >
                    <span>View Story</span>

                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>

                </div>
              </article>
            )}

            {/* =====================================================
                CARD 2: VINEYARD WEDDINGS
            ====================================================== */}
            {isVisible("modern") && (
              <article
                id="vineyard-weddings"
                className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md md:col-span-4"
              >

                <div className="relative h-[400px] w-full overflow-hidden">

                  <img
                    src={vineyardWedding}
                    alt="Elegant vineyard wedding photography"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent" />

                  <div className="absolute left-space-md top-space-md flex gap-space-xs">
                    <span className="rounded-full bg-surface-container-lowest/90 px-space-sm py-space-2xs font-label-sm text-label-sm font-bold text-secondary backdrop-blur-md">
                      Vineyard Romance
                    </span>
                  </div>

                  <div className="absolute bottom-space-lg left-space-lg right-space-lg text-surface-bright">

                    <h3 className="mb-space-2xs font-headline-sm text-headline-sm font-bold">
                      Franschhoek &amp; Modern Weddings
                    </h3>

                    <p className="line-clamp-2 font-body-md text-body-md text-surface-container">
                      Clean architectural compositions, warm sunset glows, and
                      cinematic reception banquet lighting.
                    </p>

                  </div>
                </div>

                <div className="flex items-center justify-between bg-surface-container-lowest p-space-lg">

                  <div className="flex flex-col">

                    <span className="font-label-sm text-label-sm uppercase text-secondary">
                      Location Venue
                    </span>

                    <span className="font-title-md text-title-md text-on-surface">
                      Grande Provence Estate
                    </span>

                  </div>

                  <span className="material-symbols-outlined text-[24px] text-primary">
                    favorite
                  </span>

                </div>
              </article>
            )}

            {/* =====================================================
                CARD 3: MATRIC GALA
            ====================================================== */}
            {isVisible("matric") && (
              <article
                id="matric-gala"
                className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md md:col-span-4"
              >

                <div className="relative h-[360px] w-full overflow-hidden">

                  <img
                    src={matricGala}
                    alt="Matric farewell red carpet and gala photography"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent" />

                  <div className="absolute left-space-md top-space-md flex gap-space-xs">

                    <span className="rounded-full bg-surface-container-lowest/90 px-space-sm py-space-2xs font-label-sm text-label-sm font-bold text-primary backdrop-blur-md">
                      High Glamour
                    </span>

                  </div>

                  <div className="absolute bottom-space-md left-space-md right-space-md text-surface-bright">

                    <h3 className="font-headline-sm text-headline-sm font-bold">
                      Matric Farewell Red Carpet
                    </h3>

                    <p className="line-clamp-2 font-body-md text-body-md text-surface-container">
                      High-octane arrival shoots, luxury vehicle pairing, and
                      on-site instant mini-polaroid station.
                    </p>

                  </div>

                </div>

                <div className="flex items-center justify-between bg-surface-container-lowest p-space-md">

                  <span className="font-label-md text-label-md font-medium text-on-surface-variant">
                    Bethal Town Hall &amp; Events Centre
                  </span>

                  <span className="font-label-sm text-label-sm font-bold text-primary">
                    Season Sold Out
                  </span>

                </div>
              </article>
            )}

            {/* =====================================================
                CARD 4: CHURCH EVENTS
            ====================================================== */}
            {isVisible("church") && (
              <article
                id="church-events"
                className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md md:col-span-4"
              >

                <div className="relative h-[360px] w-full overflow-hidden">

                  <img
                    src={churchEvent}
                    alt="Church conference and event photography"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent" />

                  <div className="absolute left-space-md top-space-md flex gap-space-xs">

                    <span className="rounded-full bg-surface-container-lowest/90 px-space-sm py-space-2xs font-label-sm text-label-sm font-bold text-secondary backdrop-blur-md">
                      Faith &amp; Assembly
                    </span>

                  </div>

                  <div className="absolute bottom-space-md left-space-md right-space-md text-surface-bright">

                    <h3 className="font-headline-sm text-headline-sm font-bold">
                      Church Galas &amp; Conferences
                    </h3>

                    <p className="line-clamp-2 font-body-md text-body-md text-surface-container">
                      Discreet prime lenses and multi-camera live video
                      projection for major worship celebrations.
                    </p>

                  </div>

                </div>

                <div className="flex items-center justify-between bg-surface-container-lowest p-space-md">

                  <span className="font-label-md text-label-md font-medium text-on-surface-variant">
                    Bethal International Congress
                  </span>

                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    church
                  </span>

                </div>
              </article>
            )}

            {/* =====================================================
                CARD 5: STUDIO PORTRAITS
            ====================================================== */}
            {isVisible("studio") && (
              <article
                id="studio-portraits"
                className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md md:col-span-4"
              >

                <div className="relative h-[360px] w-full overflow-hidden">

                  <img
                    src={studioPortrait}
                    alt="Professional executive studio portrait and biometric photography"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent" />

                  <div className="absolute left-space-md top-space-md flex gap-space-xs">

                    <span className="rounded-full bg-surface-container-lowest/90 px-space-sm py-space-2xs font-label-sm text-label-sm font-bold text-primary backdrop-blur-md">
                      Studio Lighting
                    </span>

                  </div>

                  <div className="absolute bottom-space-md left-space-md right-space-md text-surface-bright">

                    <h3 className="font-headline-sm text-headline-sm font-bold">
                      Executive Headshots &amp; ID
                    </h3>

                    <p className="line-clamp-2 font-body-md text-body-md text-surface-container">
                      Schengen, UK, US, Smart ID biometrics alongside Fortune
                      500 LinkedIn and board portraits.
                    </p>

                  </div>

                </div>

                <div className="flex items-center justify-between bg-surface-container-lowest p-space-md">

                  <span className="font-label-md text-label-md font-medium text-on-surface-variant">
                    50B Du Plooy St Studio Bay 1
                  </span>

                  <span className="material-symbols-outlined text-[20px] text-primary">
                    verified
                  </span>

                </div>
              </article>
            )}

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: AUDIO & ENTERTAINMENT EQUIPMENT HIRE
      ========================================================== */}
      <section
        id="av-staging"
        className="w-full bg-surface-container-low py-space-3xl"
      >
        <div className="mx-auto max-w-container-max px-gutter-mobile md:px-gutter-desktop">

          {/* Feature Callout */}
          <div className="relative mb-space-2xl overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary-container p-space-xl text-on-primary shadow-xl">

            <div className="relative z-10 flex flex-col justify-between gap-space-lg lg:flex-row lg:items-center">

              <div className="max-w-2xl">

                <span className="mb-space-xs inline-block rounded bg-surface-container-lowest/20 px-space-sm py-space-2xs font-label-sm text-label-sm uppercase tracking-wider text-on-primary backdrop-blur">
                  Integrated Staging Logistics
                </span>

                <h2 className="font-headline-lg text-headline-lg font-bold tracking-tight">
                  Planning a Venue Event? Complete Audio &amp; Visual Staging
                  Available with Every Booking.
                </h2>

                <p className="mt-space-xs font-body-lg text-body-lg text-on-primary-container">
                  Avoid managing separate camera crews and AV rental
                  companies. BCC Tech synchronizes flawless soundboards,
                  wireless mics, and crystal-clear presentation screens under
                  one accountable team.
                </p>

              </div>

              <div className="flex shrink-0 flex-col gap-space-sm sm:flex-row">

                <button
                  type="button"
                  onClick={() => scrollToSection("book-studio")}
                  className="inline-flex items-center justify-center gap-space-xs rounded-lg bg-surface px-space-lg py-space-sm font-label-md text-label-md font-bold text-primary shadow-sm transition-colors hover:bg-surface-container"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_add_on
                  </span>

                  <span>Check Gear Availability</span>
                </button>

              </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 top-0 flex items-center pr-space-md opacity-10">
              <span className="material-symbols-outlined text-[240px]">
                graphic_eq
              </span>
            </div>

          </div>

          {/* Equipment Cards */}
          <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">

            {/* PA */}
            <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">

              <div>

                <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-container text-primary">
                  <span className="material-symbols-outlined text-[28px]">
                    mic_external_on
                  </span>
                </div>

                <h3 className="mb-space-xs font-headline-sm text-headline-sm text-on-surface">
                  Professional PA Sound Systems
                </h3>

                <p className="mb-space-md font-body-md text-body-md text-on-surface-variant">
                  Engineered for vocal clarity and acoustic balance in church
                  halls, ballrooms, and outdoor pavilions.
                </p>

                <ul className="space-y-space-xs font-body-md text-body-md text-on-surface">

                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>Dual Shure SLX-D wireless handheld mics</span>
                  </li>

                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>
                      Discreet flesh-tone lapels for officiants &amp; pastors
                    </span>
                  </li>

                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>
                      Active 2400W line-array sub &amp; column monitors
                    </span>
                  </li>

                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>Dedicated on-site acoustic sound engineer</span>
                  </li>

                </ul>
              </div>

              <div className="mt-space-lg flex items-center justify-between rounded-lg bg-surface-container-low p-space-sm pt-space-md">

                <span className="font-label-sm text-label-sm uppercase text-secondary">
                  From
                </span>

                <span className="font-title-md text-title-md font-bold text-primary">
                  R 2,450 / event
                </span>

              </div>
            </div>

            {/* Screens */}
            <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">

              <div>

                <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-container text-primary">
                  <span className="material-symbols-outlined text-[28px]">
                    tv
                  </span>
                </div>

                <h3 className="mb-space-xs font-headline-sm text-headline-sm text-on-surface">
                  High-Definition Entertainment Screens
                </h3>

                <p className="mb-space-md font-body-md text-body-md text-on-surface-variant">
                  Deliver crisp family retrospectives, memorial slide decks,
                  bridal video feeds, and corporate keynotes.
                </p>

                <ul className="space-y-space-xs font-body-md text-body-md text-on-surface">

                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>65&quot; &amp; 85&quot; Ultra-HD 4K Commercial Displays</span>
                  </li>

                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>
                      Heavy-duty mobile locking aluminum truss stands
                    </span>
                  </li>

                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>
                      6000-lumen laser throw projectors for auditoriums
                    </span>
                  </li>

                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>
                      Live HDMI camera passthrough for real-time IMAG
                    </span>
                  </li>

                </ul>
              </div>

              <div className="mt-space-lg flex items-center justify-between rounded-lg bg-surface-container-low p-space-sm pt-space-md">

                <span className="font-label-sm text-label-sm uppercase text-secondary">
                  From
                </span>

                <span className="font-title-md text-title-md font-bold text-primary">
                  R 1,800 / day
                </span>

              </div>
            </div>

            {/* Lighting / DJ */}
            <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">

              <div>

                <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-container text-primary">
                  <span className="material-symbols-outlined text-[28px]">
                    flare
                  </span>
                </div>

                <h3 className="mb-space-xs font-headline-sm text-headline-sm text-on-surface">
                  Atmospheric Lighting &amp; DJ Setups
                </h3>

                <p className="mb-space-md font-body-md text-body-md text-on-surface-variant">
                  Elevate banquet halls and dance floors with tailored color
                  themes and cordless lawn setups.
                </p>

                <ul className="space-y-space-xs font-body-md text-body-md text-on-surface">

                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>12x Wireless battery LED RGBA uplights</span>
                  </li>

                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>
                      Warm amber fairy curtain &amp; festoon ambient glow
                    </span>
                  </li>

                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>
                      Quiet lithium inverter for remote outdoor ceremonies
                    </span>
                  </li>

                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    <span>
                      Curated playlist automation or DJ bridge console
                    </span>
                  </li>

                </ul>
              </div>

              <div className="mt-space-lg flex items-center justify-between rounded-lg bg-surface-container-low p-space-sm pt-space-md">

                <span className="font-label-sm text-label-sm uppercase text-secondary">
                  From
                </span>

                <span className="font-title-md text-title-md font-bold text-primary">
                  R 1,950 / event
                </span>

              </div>
            </div>

          </div>

          {/* Local AV imagery */}
          <div className="mt-space-xl grid grid-cols-1 gap-space-md md:grid-cols-2">

            <div className="group relative h-64 overflow-hidden rounded-xl shadow-sm">

              <img
                src={avAudio}
                alt="BCC field audio consoles and wireless microphone equipment"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-on-surface/80 via-transparent to-transparent p-space-md">

                <span className="font-title-md text-title-md font-medium text-surface">
                  BCC Field Audio Consoles &amp; RF Frequency Monitoring
                </span>

              </div>
            </div>

            <div className="group relative h-64 overflow-hidden rounded-xl shadow-sm">

              <img
                src={avScreen}
                alt="BCC Ultra-HD presentation screen and visual display system"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-on-surface/80 via-transparent to-transparent p-space-md">

                <span className="font-title-md text-title-md font-medium text-surface">
                  Ultra-HD Slide Presentation Systems with Instant Playback
                </span>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: THE BCC STUDIO EXPERIENCE
      ========================================================== */}
      <section
        id="studio-gear"
        className="w-full bg-surface py-space-3xl"
      >
        <div className="mx-auto max-w-container-max px-gutter-mobile md:px-gutter-desktop">

          <div className="grid grid-cols-1 items-center gap-space-2xl lg:grid-cols-12">

            {/* Copy */}
            <div className="flex flex-col lg:col-span-5">

              <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary">
                Standard of Excellence
              </span>

              <h2 className="mt-space-2xs mb-space-md font-headline-lg text-headline-lg tracking-tight text-on-surface">
                Studio Hardware Engineered for Flawless Precision.
              </h2>

              <p className="mb-space-lg font-body-lg text-body-lg text-on-surface-variant">
                We don&apos;t leave your once-in-a-lifetime moments to chance.
                Every shoot inside our 50B Du Plooy Street studio in Bethal or
                on the road across Mpumalanga is powered by calibrated,
                dual-card redundancy and enterprise color management.
              </p>

              <div className="space-y-space-md">

                {/* Feature 1 */}
                <div className="flex items-start gap-space-md rounded-lg p-space-sm transition-colors hover:bg-surface-container-low">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary-container text-primary">
                    <span className="material-symbols-outlined text-[22px]">
                      flash_on
                    </span>
                  </div>

                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface">
                      Godox &amp; Profoto High-Speed Strobes
                    </h4>

                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Paired with 120cm octabox diffusers for skin tones that
                      look radiant, natural, and never harsh.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-space-md rounded-lg p-space-sm transition-colors hover:bg-surface-container-low">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary-container text-primary">
                    <span className="material-symbols-outlined text-[22px]">
                      monitor
                    </span>
                  </div>

                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface">
                      Tethered 4K Live Review Bay
                    </h4>

                    <p className="font-body-md text-body-md text-on-surface-variant">
                      See every pose, smile, and expression on a calibrated
                      32-inch screen in real time during your session.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-space-md rounded-lg p-space-sm transition-colors hover:bg-surface-container-low">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary-container text-primary">
                    <span className="material-symbols-outlined text-[22px]">
                      cloud_done
                    </span>
                  </div>

                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface">
                      Private Cloud Vault &amp; Same-Day Proofs
                    </h4>

                    <p className="font-body-md text-body-md text-on-surface-variant">
                      PIN-protected web gallery accessible by you and your
                      family within hours of shoot wrap.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-space-md rounded-lg p-space-sm transition-colors hover:bg-surface-container-low">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary-container text-primary">
                    <span className="material-symbols-outlined text-[22px]">
                      print
                    </span>
                  </div>

                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface">
                      In-House Archival Luster Plotting
                    </h4>

                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Print framed memories up to A0 on 310gsm museum cotton
                      paper before you leave the center.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Local studio image */}
            <div className="lg:col-span-7">

              <div className="relative overflow-hidden rounded-2xl bg-surface-container-high p-space-xs shadow-lg">

                <img
                  src={studioGear}
                  alt="BCC professional photography studio and tethered shooting setup"
                  className="h-[480px] w-full rounded-xl object-cover"
                />

                <div className="absolute bottom-space-lg right-space-lg max-w-xs rounded-xl bg-surface-container-lowest/95 p-space-md shadow-md backdrop-blur-md">

                  <div className="mb-space-2xs flex items-center gap-space-xs font-bold text-primary">

                    <span className="material-symbols-outlined text-[20px]">
                      security
                    </span>

                    <span className="font-label-sm text-label-sm uppercase">
                      Dual Redundant Storage
                    </span>

                  </div>

                  <p className="font-body-md text-body-md text-on-surface">
                    Every click written simultaneously to dual UHS-II
                    high-speed media and synced to offline localized RAID.
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: CLIENT TESTIMONIALS
      ========================================================== */}
      <section
        id="client-reviews"
        className="w-full bg-surface-container-low py-space-3xl"
      >
        <div className="mx-auto max-w-container-max px-gutter-mobile md:px-gutter-desktop">

          <div className="mx-auto mb-space-2xl max-w-2xl text-center">

            <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary">
              Client Reflections
            </span>

            <h2 className="mt-space-2xs font-headline-lg text-headline-lg tracking-tight text-on-surface">
              Trusted Across Mpumalanga Families &amp; Institutions
            </h2>

          </div>

          <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">

            {/* Review 1 */}
            <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-xl shadow-sm">

              <div className="flex flex-col gap-space-sm">

                <div className="flex gap-space-2xs text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="material-symbols-outlined text-[20px]"
                      style={{
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="font-body-md text-body-md italic text-on-surface">
                  &quot;BCC Tech captured both our traditional Umembeso in
                  eMzinoni and our Saturday reception in Bethal. The team
                  arrived early, managed the elders with deep respect, and the
                  85-inch screens they provided made our family tribute
                  unforgettable!&quot;
                </p>

              </div>

              <div className="mt-space-md flex items-center gap-space-sm border-t border-surface-container-high pt-space-md">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container font-bold text-primary">
                  TM
                </div>

                <div>

                  <span className="block font-title-md text-title-md text-on-surface">
                    Thando &amp; Mandisa M.
                  </span>

                  <span className="font-label-sm text-label-sm text-secondary">
                    Wedding &amp; Sound Package • Dec 2023
                  </span>

                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-xl shadow-sm">

              <div className="flex flex-col gap-space-sm">

                <div className="flex gap-space-2xs text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="material-symbols-outlined text-[20px]"
                      style={{
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="font-body-md text-body-md italic text-on-surface">
                  &quot;The red carpet studio lighting made me feel like an
                  A-list celebrity on my matric night. Getting my edited
                  portraits delivered the exact same weekend so I could post
                  them right away was beyond my expectations!&quot;
                </p>

              </div>

              <div className="mt-space-md flex items-center gap-space-sm border-t border-surface-container-high pt-space-md">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container font-bold text-primary">
                  KL
                </div>

                <div>

                  <span className="block font-title-md text-title-md text-on-surface">
                    Kendra L. &amp; Family
                  </span>

                  <span className="font-label-sm text-label-sm text-secondary">
                    Matric Ball Glamour Package • Bethal &amp; Secunda
                  </span>

                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-xl shadow-sm">

              <div className="flex flex-col gap-space-sm">

                <div className="flex gap-space-2xs text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="material-symbols-outlined text-[20px]"
                      style={{
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="font-body-md text-body-md italic text-on-surface">
                  &quot;We contracted BCC for our 3-day Regional Bishop
                  Convocation. The wireless microphones were zero-interference,
                  the audio feed was crystal pure for live streaming, and their
                  photographers moved like ninjas without disrupting
                  prayers.&quot;
                </p>

              </div>

              <div className="mt-space-md flex items-center gap-space-sm border-t border-surface-container-high pt-space-md">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container font-bold text-primary">
                  PD
                </div>

                <div>

                  <span className="block font-title-md text-title-md text-on-surface">
                    Pastor David O.
                  </span>

                  <span className="font-label-sm text-label-sm text-secondary">
                    Grace Tabernacle Assembly • Bethal, Mpumalanga
                  </span>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: BOOKING CTA
      ========================================================== */}
      <section
        id="book-studio"
        className="w-full bg-surface py-space-3xl"
      >
        <div className="mx-auto max-w-container-max px-gutter-mobile md:px-gutter-desktop">

          <div className="flex flex-col items-center justify-between gap-space-xl rounded-2xl bg-surface-container p-space-xl shadow-sm md:p-space-2xl lg:flex-row">

            <div className="flex max-w-2xl flex-col">

              <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
                Bookings &amp; Consultations
              </span>

              <h2 className="mt-space-2xs mb-space-xs font-headline-lg text-headline-lg tracking-tight text-on-surface">
                Reserve Your Date or Book a Studio Session
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Peak wedding, conference, and matric farewell weekends book 3
                to 6 months in advance. Inquire now about our bundled{" "}
                <span className="font-bold text-on-surface">
                  Photography + Sound System + 4K Screen Hire
                </span>{" "}
                packages to save up to 25% on combined logistics.
              </p>

              <div className="mt-space-lg grid grid-cols-1 gap-space-md text-left sm:grid-cols-3">

                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    verified
                  </span>

                  <span className="font-label-sm text-label-sm text-on-surface">
                    No Hidden Travel Fees (Bethal Central)
                  </span>
                </div>

                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    verified
                  </span>

                  <span className="font-label-sm text-label-sm text-on-surface">
                    Custom Invoice &amp; SARS VAT
                  </span>
                </div>

                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    verified
                  </span>

                  <span className="font-label-sm text-label-sm text-on-surface">
                    Flexible Date Hold Options
                  </span>
                </div>

              </div>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-space-md sm:flex-row lg:w-auto lg:flex-col">

              <a
                href="mailto:sales@bethalcomputercentre.com?subject=BCC%20Creative%20Studio%20Booking%20Enquiry"
                className="inline-flex items-center justify-center gap-space-xs rounded-lg bg-primary-container px-space-xl py-space-md font-title-md text-title-md font-bold text-on-primary shadow-md transition-all hover:bg-primary"
              >
                <span className="material-symbols-outlined text-[22px]">
                  mail
                </span>

                <span>Inquire for Dates &amp; Rates</span>
              </a>

              <a
                href="https://wa.me/27769328706?text=Hello%20BCC%20Tech%20Studio,%20I'd%20like%20to%20check%20availability%20for%20a%20creative%20session%20or%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-space-xs rounded-lg bg-surface-container-lowest px-space-xl py-space-md font-title-md text-title-md font-bold text-primary shadow-sm transition-all hover:bg-secondary-container"
              >
                <span className="material-symbols-outlined text-[22px]">
                  chat
                </span>

                <span>Chat on WhatsApp</span>
              </a>

              <span className="text-center font-label-sm text-label-sm text-secondary">
                Direct studio bench: +27 76 932 8706
              </span>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CUSTOM PORTFOLIO FOOTER
      ========================================================== */}
      <footer className="mt-space-3xl w-full bg-surface-container-low py-space-2xl">

        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-space-xl px-gutter-mobile md:grid-cols-2 md:px-gutter-desktop lg:grid-cols-4">

          {/* Brand */}
          <div className="flex flex-col gap-space-sm">

            <Link
              to="/"
              className="flex items-center gap-space-xs"
            >

              <img
                src={logo}
                alt="BCC Tech & Creative Centre"
                className="h-10 w-auto object-contain"
              />

              <span className="font-headline-sm text-headline-sm text-on-surface">
                BCC Tech &amp; Creative
              </span>

            </Link>

            <p className="font-body-md text-body-md text-on-surface-variant">
              Bethal&apos;s premier enterprise workstation repair hub, digital
              media lab, and certified hardware restoration studio serving
              Mpumalanga.
            </p>

            <div className="flex items-center gap-space-xs pt-space-2xs text-secondary">

              <span className="material-symbols-outlined text-[20px]">
                verified_user
              </span>

              <span className="font-label-sm text-label-sm">
                SARS &amp; POPIA Compliant Provider
              </span>

            </div>
          </div>

          {/* Central Hub */}
          <div className="flex flex-col gap-space-sm">

            <span className="font-title-md text-title-md text-on-surface">
              Central Hub &amp; Bench
            </span>

            <p className="font-body-md text-body-md text-on-surface-variant">
              50B Du Plooy Street
              <br />
              Bethal, Mpumalanga, 2310
              <br />
              South Africa
            </p>

            <p className="font-body-md text-body-md text-on-surface-variant">
              Mon - Fri: 08:00 - 18:00
              <br />
              Sat: 09:00 - 14:00 (Emergency Bench)
            </p>

          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-space-sm">

            <span className="font-title-md text-title-md text-on-surface">
              Direct Contacts
            </span>

            <div className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">

              <a
                href="tel:+27769328706"
                className="flex items-center gap-space-xs transition-colors hover:text-primary"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">
                  call
                </span>

                <span>+27 76 932 8706 (Switchboard)</span>
              </a>

              <a
                href="https://wa.me/27769328706"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-space-xs transition-colors hover:text-primary"
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  chat
                </span>

                <span>WhatsApp Desk Support</span>
              </a>

              <a
                href="mailto:sales@bethalcomputercentre.com"
                className="flex items-center gap-space-xs transition-colors hover:text-primary"
              >
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  mail
                </span>

                <span>sales@bethalcomputercentre.com</span>
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-space-sm">

            <span className="font-title-md text-title-md text-on-surface">
              Platform Navigation
            </span>

            <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">

              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-primary"
                >
                  Home Overview
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-primary"
                >
                  Technical Services &amp; Repairs
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-primary"
                >
                  About the Centre
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className="transition-colors hover:text-primary"
                >
                  Studio &amp; Photography Portfolio
                </Link>
              </li>

              <li>
                <a
                  href="#client-reviews"
                  className="transition-colors hover:text-primary"
                >
                  Client Reviews &amp; Case Studies
                </a>
              </li>

              <li>
                <a
                  href="#book-studio"
                  className="transition-colors hover:text-primary"
                >
                  Contact &amp; Bookings
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="mx-auto mt-space-xl flex max-w-container-max flex-col items-center justify-between gap-space-md border-t border-outline-variant/40 px-gutter-mobile pt-space-lg font-label-sm text-label-sm text-on-surface-variant sm:flex-row md:px-gutter-desktop">

          <span>
            © 2026 BCC Tech &amp; Creative Centre. All specifications and
            registered marks reserved.
          </span>

          <div className="flex flex-wrap items-center justify-center gap-space-lg">

            <span>POPIA Compliance Notice</span>

            <span>Terms of Service</span>

            <span>Diagnostic Warranties</span>

          </div>
        </div>

      </footer>
    </div>
  );
}
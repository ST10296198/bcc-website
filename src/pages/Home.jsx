import { useState, useRef } from "react";

import logo from "../assets/images/logo.png";
import locationMap from "../assets/images/about/location-map.jpg";

import CountUp from "../components/react-bits/CountUp";
import VariableProximity from "../components/react-bits/VariableProximity";

import project01 from "../assets/images/homepage/gallery/project-01.jpg";
import project02 from "../assets/images/homepage/gallery/project-02.jpg";
import project03 from "../assets/images/homepage/gallery/project-03.jpg";
import project04 from "../assets/images/homepage/gallery/project-04.jpg";
import project05 from "../assets/images/homepage/gallery/project-05.jpg";
import project06 from "../assets/images/homepage/gallery/project-06.jpg";

export default function Home() {
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [contactPanel, setContactPanel] = useState(null);
  const [copied, setCopied] = useState(false);
   const heroTitleRef = useRef(null);

  const copyContactNumber = async () => {
    try {
      await navigator.clipboard.writeText("+27769328706");
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const toggleContactPanel = (panel) => {
    setContactPanel((current) => (current === panel ? null : panel));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTicketSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* ============================================================
          HOME SECTION RAIL
      ============================================================ */}

      <aside
        aria-label="Home page sections"
        className="fixed right-space-lg top-1/2 z-40 hidden -translate-y-1/2 lg:flex"
      >
        <div className="flex flex-col items-end gap-space-sm rounded-full bg-surface-container-lowest/90 px-space-xs py-space-sm shadow-lg backdrop-blur-xl">
          <a
            href="#hero"
            className="group flex items-center gap-space-xs"
            aria-label="Hero"
          >
            <span className="pointer-events-none invisible max-w-0 overflow-hidden text-label-sm text-on-surface opacity-0 transition-all duration-200 group-hover:visible group-hover:max-w-32 group-hover:opacity-100">
              Hero
            </span>

            <span className="h-2.5 w-2.5 rounded-full bg-primary transition-transform duration-200 group-hover:scale-125" />
          </a>

          <a
            href="#tech-services"
            className="group flex items-center gap-space-xs"
            aria-label="Tech Services"
          >
            <span className="pointer-events-none invisible max-w-0 overflow-hidden text-label-sm text-on-surface opacity-0 transition-all duration-200 group-hover:visible group-hover:max-w-32 group-hover:opacity-100">
              Tech Services
            </span>

            <span className="h-2.5 w-2.5 rounded-full bg-outline-variant transition-transform duration-200 group-hover:scale-125 group-hover:bg-primary" />
          </a>

          <a
            href="#creative-studio"
            className="group flex items-center gap-space-xs"
            aria-label="Creative Studio"
          >
            <span className="pointer-events-none invisible max-w-0 overflow-hidden text-label-sm text-on-surface opacity-0 transition-all duration-200 group-hover:visible group-hover:max-w-32 group-hover:opacity-100">
              Creative Studio
            </span>

            <span className="h-2.5 w-2.5 rounded-full bg-outline-variant transition-transform duration-200 group-hover:scale-125 group-hover:bg-primary" />
          </a>

          <a
            href="#why-bcc"
            className="group flex items-center gap-space-xs"
            aria-label="Why BCC"
          >
            <span className="pointer-events-none invisible max-w-0 overflow-hidden text-label-sm text-on-surface opacity-0 transition-all duration-200 group-hover:visible group-hover:max-w-32 group-hover:opacity-100">
              Why BCC
            </span>

            <span className="h-2.5 w-2.5 rounded-full bg-outline-variant transition-transform duration-200 group-hover:scale-125 group-hover:bg-primary" />
          </a>

          <a
            href="#project-gallery"
            className="group flex items-center gap-space-xs"
            aria-label="Project Gallery"
          >
            <span className="pointer-events-none invisible max-w-0 overflow-hidden text-label-sm text-on-surface opacity-0 transition-all duration-200 group-hover:visible group-hover:max-w-32 group-hover:opacity-100">
              Project Gallery
            </span>

            <span className="h-2.5 w-2.5 rounded-full bg-outline-variant transition-transform duration-200 group-hover:scale-125 group-hover:bg-primary" />
          </a>

          <a
            href="#client-reviews"
            className="group flex items-center gap-space-xs"
            aria-label="Client Reviews"
          >
            <span className="pointer-events-none invisible max-w-0 overflow-hidden text-label-sm text-on-surface opacity-0 transition-all duration-200 group-hover:visible group-hover:max-w-32 group-hover:opacity-100">
              Client Reviews
            </span>

            <span className="h-2.5 w-2.5 rounded-full bg-outline-variant transition-transform duration-200 group-hover:scale-125 group-hover:bg-primary" />
          </a>

          <a
            href="#contact-intake"
            className="group flex items-center gap-space-xs"
            aria-label="Contact and Intake"
          >
            <span className="pointer-events-none invisible max-w-0 overflow-hidden text-label-sm text-on-surface opacity-0 transition-all duration-200 group-hover:visible group-hover:max-w-40 group-hover:opacity-100">
              Contact &amp; Intake
            </span>

            <span className="h-2.5 w-2.5 rounded-full bg-outline-variant transition-transform duration-200 group-hover:scale-125 group-hover:bg-primary" />
          </a>
        </div>
      </aside>

      {/* ============================================================
          HERO
      ============================================================ */}

      <section
        id="hero"
        className="relative overflow-hidden bg-surface py-space-3xl lg:py-space-3xl"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(circle at 65% 35%, rgba(30,96,213,0.08), transparent 38%), radial-gradient(circle at 15% 25%, rgba(81,96,112,0.09), transparent 32%)",
            filter: "url(#bcc-noise)",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-secondary-container/40 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary-fixed/30 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-[80rem] px-gutter-mobile md:px-gutter-desktop">
          <div className="mb-space-xl inline-flex items-center rounded-full border border-outline-variant/40 bg-surface-container-lowest/80 px-space-sm py-space-xs shadow-sm backdrop-blur-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              3,500+ Hardware Restorations
            </span>

            <span className="mx-space-xs text-outline-variant">•</span>

            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Serving Since 2018
            </span>

            <span className="mx-space-xs text-outline-variant">•</span>

            <span className="font-label-sm text-label-sm text-on-surface-variant">
              99.4% Verified Turnaround
            </span>
          </div>

          <div className="grid grid-cols-1 items-center gap-space-2xl lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="max-w-4xl">
                <p className="mb-space-sm font-label-sm text-label-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  BCC Tech &amp; Creative Centre
                </p>
            <h1
              ref={heroTitleRef}
              className="font-display-lg-mobile text-display-lg-mobile leading-[1.15] tracking-tight text-on-surface md:text-display-lg"
            >
            <VariableProximity
              label="High-Precision Computing & Creative Production"
              containerRef={heroTitleRef}
              radius={250}
              falloff="linear"
              fromFontVariationSettings="'wght' 100"
              toFontVariationSettings="'wght' 1000"
              style={{
                fontFamily: '"Roboto Flex", sans-serif',
              }}
            />{" "}
              <span className="text-primary-container">Under One Roof.</span>
            </h1>

                <p className="mt-space-lg max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
                  Dependable component-level hardware repairs, custom
                  liquid-cooled rigs, high-volume CAD blueprint plots,
                  certified tax e-filing navigation, corporate brand design,
                  and biometric studio photography.
                </p>

                <div className="mt-space-xl flex flex-col gap-space-sm sm:flex-row">
                  <a
                    href="#contact-intake"
                    className="inline-flex items-center justify-center gap-space-xs rounded-lg bg-primary-container px-space-lg py-space-sm font-label-md text-label-md font-semibold text-on-primary shadow-md transition-colors duration-200 hover:bg-primary"
                  >
                    <span className="material-symbols-outlined text-[19px]">
                      build_circle
                    </span>
                    Book a Repair / Diagnosis
                  </a>

                  <a
                    href="#service-roster"
                    className="inline-flex items-center justify-center gap-space-xs rounded-lg border border-outline-variant/50 bg-surface-container-lowest px-space-lg py-space-sm font-label-md text-label-md font-semibold text-on-surface transition-colors duration-200 hover:bg-surface-container"
                  >
                    Explore Service Roster

                    <span className="material-symbols-outlined text-[18px]">
                      arrow_downward
                    </span>
                  </a>
                </div>

                <div className="mt-space-xl flex flex-wrap items-center gap-x-space-lg gap-y-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      verified_user
                    </span>

                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Component-level diagnostics
                    </span>
                  </div>

                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      schedule
                    </span>

                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      45 min express intake
                    </span>
                  </div>

                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      lock
                    </span>

                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      POPIA-conscious document handling
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* DIAGNOSTIC PLAQUE — NO IMAGE */}
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-surface-container-lowest p-space-xl shadow-md">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rotate-45 bg-primary/5"
                />

                <div className="relative z-10">
                  <div className="mb-space-lg rounded-lg bg-surface-container-low/70 p-space-sm">
                    <div className="flex items-center justify-between gap-space-sm">
                      <div className="flex items-center gap-space-sm">
                        <img
                          src={logo}
                          alt="BCC Tech & Creative"
                          className="h-14 w-auto object-contain"
                        />

                        <div className="flex flex-col">
                          <span className="font-title-md text-title-md text-on-surface">
                            BCC Lab
                          </span>

                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                            Diagnostic Centre
                          </span>
                        </div>
                      </div>

                      <span className="material-symbols-outlined rounded-full bg-secondary-container p-space-xs text-primary">
                        verified
                      </span>
                    </div>
                  </div>

                  <div className="mb-space-lg flex items-center justify-between gap-space-sm">
                    <div>
                      <p className="font-title-md text-title-md text-on-surface">
                        Tier-1 Workstation Lab
                      </p>

                      <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                        Component restoration &amp; systems engineering
                      </p>
                    </div>

                    <div className="flex items-center gap-space-2xs rounded-full bg-primary-fixed px-space-xs py-space-2xs">
                      <span className="h-2 w-2 rounded-full bg-primary" />

                      <span className="font-label-sm text-label-sm text-on-primary-fixed">
                        Live Queue:2 Techs Active
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-outline-variant/30 bg-surface-container-low p-space-lg">
                    <div className="mb-space-sm flex items-center justify-between gap-space-sm">
                      <div>
                        <p className="font-label-md text-label-md font-semibold text-on-surface">
                          Bench Diagnosis
                        </p>

                        <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                          Tier-1 workstation repair
                        </p>
                      </div>

                      <span className="rounded-full bg-primary-container/10 px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-primary">
                        In Progress
                      </span>
                    </div>

                    <div className="mb-space-sm h-2 overflow-hidden rounded-full bg-surface-container-highest">
                      <div
                        className="h-full rounded-full bg-primary-container"
                        style={{ width: "78%" }}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Board isolation &amp; component verification
                      </span>

                      <span className="font-label-sm text-label-sm font-semibold text-primary">
                        78%
                      </span>
                    </div>

                    <div className="mt-space-md h-px w-full bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent" />

                    <div className="mt-space-md flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Avg Intake Turnaround
                      </span>

                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        45 min express checkout
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICE ROSTER
      ============================================================ */}

      <section
        id="service-roster"
        className="bg-surface-container-low py-space-3xl"
      >
        <div className="mx-auto max-w-[80rem] px-gutter-mobile md:px-gutter-desktop">
          <div className="mb-space-2xl max-w-4xl">
            <p className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Full-Spectrum Capabilities
            </p>

            <div className="mt-space-xs flex flex-col gap-space-md md:flex-row md:items-end md:justify-between">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:text-headline-lg">
                Integrated Tech &amp; Creative Roster
              </h2>

              <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                Dual operating divisions engineered for precision hardware
                turnaround, certified business tax compliance, and modern
                visual branding.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-space-xl xl:grid-cols-2">
            {/* TECH SERVICES */}

            <div id="tech-services" className="scroll-mt-28">
              <div className="mb-space-lg flex items-center gap-space-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-container text-on-primary shadow-sm">
                  <span className="material-symbols-outlined">
                    precision_manufacturing
                  </span>
                </div>

                <div>
                  <p className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    Technical Division
                  </p>

                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Technology Services
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
                {/* LAPTOP & PC */}
                <article className="group flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-space-lg flex items-start justify-between gap-space-sm">
                    <div>
                      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em] text-primary">
                        Hardware Repair
                      </span>

                      <h4 className="mt-space-xs font-title-md text-title-md text-on-surface">
                        Laptop &amp; PC Repairs
                      </h4>

                      <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                        MacBook Logic Boards &amp; Windows PCs
                      </p>
                    </div>

                    <span className="rounded-full bg-secondary-container px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
                      Same-Day Diagnostics
                    </span>
                  </div>

                  <p className="flex-1 font-body-md text-body-md text-on-surface-variant">
                    Micro-soldering repairs, mosfet replacements, liquid spill
                    decontamination, cracked Retina screens, precision thermal
                    repasting, and clean NVMe data rescues.
                  </p>

                  <div className="mt-space-lg border-t border-outline-variant/30 pt-space-sm">
                    <span className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-[17px] text-primary">
                        verified_user
                      </span>
                      90-Day Parts &amp; Labor Guarantee
                    </span>
                  </div>
                </article>

                {/* CUSTOM BUILDS */}
                <article className="group flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-space-lg flex items-start justify-between gap-space-sm">
                    <div>
                      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em] text-primary">
                        Systems Engineering
                      </span>

                      <h4 className="mt-space-xs font-title-md text-title-md text-on-surface">
                        Custom Builds &amp; Enterprise Sales
                      </h4>

                      <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                        Architectural, 3D &amp; High-FPS Workstations
                      </p>
                    </div>

                    <span className="rounded-full bg-secondary-container px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
                      Warranty Covered
                    </span>
                  </div>

                  <p className="flex-1 font-body-md text-body-md text-on-surface-variant">
                    Bespoke hard-line liquid cooling loops, thread-optimized
                    video editing rigs, certified refurbished business
                    ThinkPads, and enterprise GPU scaling.
                  </p>

                  <div className="mt-space-lg border-t border-outline-variant/30 pt-space-sm">
                    <div className="flex items-center justify-between gap-space-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Stress-tested 48hr thermal burn-in
                      </span>

                      <span className="font-label-sm text-label-sm font-semibold text-primary">
                        Ready Rigs in Stock
                      </span>
                    </div>
                  </div>
                </article>

                {/* PRINTING */}
                <article className="group flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-space-lg flex items-start justify-between gap-space-sm">
                    <div>
                      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em] text-primary">
                        Production
                      </span>

                      <h4 className="mt-space-xs font-title-md text-title-md text-on-surface">
                        Production Printing &amp; Binding
                      </h4>

                      <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                        Plotting, Theses, Large Format
                      </p>
                    </div>

                    <span className="rounded-full bg-secondary-container px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
                      Up to A0 Size
                    </span>
                  </div>

                  <p className="flex-1 font-body-md text-body-md text-on-surface-variant">
                    CAD line drawings, full-bleed architectural blueprint
                    sheets, thermal wire binding, thesis gold foil hard-cover
                    binding, and high-micron laminations.
                  </p>

                  <div className="mt-space-lg border-t border-outline-variant/30 pt-space-sm">
                    <div className="flex items-center justify-between gap-space-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Direct Plotter Line
                      </span>

                      <span className="font-label-sm text-label-sm font-semibold text-primary">
                        1200 DPI Precision
                      </span>
                    </div>
                  </div>
                </article>

                {/* TAX */}
                <article className="group flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-space-lg flex items-start justify-between gap-space-sm">
                    <div>
                      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em] text-primary">
                        Compliance
                      </span>

                      <h4 className="mt-space-xs font-title-md text-title-md text-on-surface">
                        Tax &amp; E-Filing Compliance
                      </h4>

                      <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                        Air-Gapped Privacy Terminal
                      </p>
                    </div>

                    <span className="rounded-full bg-secondary-container px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
                      Confidential
                    </span>
                  </div>

                  <p className="flex-1 font-body-md text-body-md text-on-surface-variant">
                    One-on-one secure e-filing navigation, SARS tax clearance
                    PIN generations, CIPC annual registry filings, certified ID
                    scans, and encrypted document uploads.
                  </p>

                  <div className="mt-space-lg border-t border-outline-variant/30 pt-space-sm">
                    <div className="flex items-center justify-between gap-space-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        POPIA Compliant shredding
                      </span>

                      <span className="font-label-sm text-label-sm font-semibold text-primary">
                        Certified Operators
                      </span>
                    </div>
                  </div>
                </article>

                {/* VEHICLE */}
                <article className="group flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md md:col-span-2">
                  <div className="mb-space-lg flex flex-col gap-space-md sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em] text-primary">
                        Automotive Diagnostics
                      </span>

                      <h4 className="mt-space-xs font-title-md text-title-md text-on-surface">
                        Vehicle Key Programming &amp; Diagnostics
                      </h4>

                      <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                        Transponders, Smart Keys &amp; Immobilizer Coding
                      </p>
                    </div>

                    <span className="self-start rounded-full bg-secondary-container px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
                      On-Bench &amp; Mobile
                    </span>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Specialized bench &amp; OBD key coding, EEPROM transponder
                    cloning, smart flip-key conversions, immobilizer sync &amp;
                    ECU lock system resetting for modern vehicles.
                  </p>

                  <div className="mt-space-lg grid grid-cols-1 gap-space-sm sm:grid-cols-2">
                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        key
                      </span>

                      <p className="mt-space-xs font-label-md text-label-md text-on-surface">
                        Smart key &amp; transponder coding
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        precision_manufacturing
                      </span>

                      <p className="mt-space-xs font-label-md text-label-md text-on-surface">
                        Precision blade milling
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        vpn_key
                      </span>

                      <p className="mt-space-xs font-label-md text-label-md text-on-surface">
                        Flip-key &amp; fob conversion
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        memory
                      </span>

                      <p className="mt-space-xs font-label-md text-label-md text-on-surface">
                        ECU immobilizer sync
                      </p>
                    </div>
                  </div>

                  <div className="mt-space-lg border-t border-outline-variant/30 pt-space-sm">
                    <div className="flex flex-col gap-space-xs sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Walk-ins &amp; Emergency Desk
                      </span>

                      <span className="font-label-sm text-label-sm font-semibold text-primary">
                        OBD &amp; Bench Diagnostic Match
                      </span>
                    </div>
                  </div>
                </article>

                {/* CCTV */}
                <article className="group flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md md:col-span-2">
                  <div className="mb-space-lg flex flex-col gap-space-md sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em] text-primary">
                        Network Infrastructure
                      </span>

                      <h4 className="mt-space-xs font-title-md text-title-md text-on-surface">
                        CCTV Installation &amp; Network Planning
                      </h4>

                      <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                        IP Surveillance, Ubiquiti / Mikrotik &amp; Topologies
                      </p>
                    </div>

                    <span className="self-start rounded-full bg-secondary-container px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
                      Structured Cabling &amp; Wireless
                    </span>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Enterprise and commercial IP camera deployment, NVR/DVR
                    setup with remote mobile viewing, structured Cat6/Fibre
                    trunking, mesh Wi-Fi design, managed VLANs, and custom
                    network topology architecture.
                  </p>

                  <div className="mt-space-lg grid grid-cols-1 gap-space-sm sm:grid-cols-2">
                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        videocam
                      </span>

                      <p className="mt-space-xs font-label-md text-label-md text-on-surface">
                        IP Camera &amp; NVR Deployment
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        cable
                      </span>

                      <p className="mt-space-xs font-label-md text-label-md text-on-surface">
                        Fibre &amp; Cat6 Structured Cabling
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        account_tree
                      </span>

                      <p className="mt-space-xs font-label-md text-label-md text-on-surface">
                        Managed VLANs &amp; Topologies
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        cloud_sync
                      </span>

                      <p className="mt-space-xs font-label-md text-label-md text-on-surface">
                        Remote Cloud &amp; Mobile Access
                      </p>
                    </div>
                  </div>

                  <div className="mt-space-lg border-t border-outline-variant/30 pt-space-sm">
                    <div className="flex flex-col gap-space-xs sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Bethal On-Site &amp; Commercial
                      </span>

                      <span className="font-label-sm text-label-sm font-semibold text-primary">
                        Certified Network Deployments
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* CREATIVE STUDIO */}

            <div id="creative-studio" className="scroll-mt-28">
              <div className="mb-space-lg flex items-center gap-space-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary-container text-on-secondary-fixed shadow-sm">
                  <span className="material-symbols-outlined">
                    palette
                  </span>
                </div>

                <div>
                  <p className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    Creative Division
                  </p>

                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Creative Studio
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-space-md">
                {/* GRAPHIC DESIGN */}

                <article className="group rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-space-lg flex items-start justify-between gap-space-sm">
                    <div>
                      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em] text-primary">
                        Brand Systems
                      </span>

                      <h4 className="mt-space-xs font-title-md text-title-md text-on-surface">
                        Graphic Design &amp; Brand Systems
                      </h4>

                      <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                        Corporate Identities &amp; Collateral
                      </p>
                    </div>

                    <span className="rounded-full bg-secondary-container px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
                      Vector &amp; Print Ready
                    </span>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Complete corporate vector branding kits, signage
                    typography, fleet vehicle decal wraps, restaurant
                    waterproof menu engineering, packaging dielines, and
                    social media master assets.
                  </p>

                  <div className="mt-space-lg rounded-lg bg-surface-container-low p-space-sm">
                    <p className="font-label-md text-label-md font-semibold text-on-surface">
                      Deliverables Structure
                    </p>

                    <p className="mt-space-2xs font-label-md text-label-md text-primary">
                      Full Source SVG / AI
                    </p>

                    <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                      Includes font licensing, color guides (Pantone/CMYK),
                      and prepress flight checks.
                    </p>
                  </div>

                  <div className="mt-space-lg border-t border-outline-variant/30 pt-space-sm">
                    <div className="flex items-center justify-between gap-space-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Fast 48-Hour Concepts
                      </span>

                      <span className="material-symbols-outlined text-[18px] text-primary">
                        verified
                      </span>
                    </div>
                  </div>
                </article>

                {/* PROFESSIONAL PHOTOGRAPHY */}

                <article className="group rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-space-lg flex items-start justify-between gap-space-sm">
                    <div>
                      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em] text-primary">
                        Studio Photography
                      </span>

                      <h4 className="mt-space-xs font-title-md text-title-md text-on-surface">
                        Professional Studio Photography
                      </h4>

                      <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                        Executive &amp; Biometric Sessions
                      </p>
                    </div>

                    <span className="rounded-full bg-secondary-container px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
                      In-Studio Setup
                    </span>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Dedicated 3-point softbox studio lighting, biometric
                    compliance for Schengen/US/UK visas and passports,
                    high-impact executive LinkedIn portraits, and macro
                    product e-commerce captures.
                  </p>

                  <div className="mt-space-lg grid grid-cols-2 gap-space-sm">
                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <p className="font-label-md text-label-md text-on-surface">
                        Immediate print prints
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <p className="font-label-md text-label-md text-on-surface">
                        High-res digital files
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <p className="font-label-md text-label-md text-on-surface">
                        100% biometric pass rate
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <p className="font-label-md text-label-md text-on-surface">
                        Skin-tone true calibration
                      </p>
                    </div>
                  </div>

                  <div className="mt-space-lg border-t border-outline-variant/30 pt-space-sm">
                    <div className="flex items-center justify-between gap-space-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Walk-ins Welcome
                      </span>

                      <span className="font-label-sm text-label-sm font-semibold text-primary">
                        10-Min Visa Turnaround
                      </span>
                    </div>
                  </div>
                </article>

                {/* WEB DESIGN */}

                <article className="group rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-space-lg flex items-start justify-between gap-space-sm">
                    <div>
                      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em] text-primary">
                        Digital Products
                      </span>

                      <h4 className="mt-space-xs font-title-md text-title-md text-on-surface">
                        Web Design &amp; Software
                      </h4>

                      <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                        Digital Products &amp; System Deployment
                      </p>
                    </div>

                    <span className="rounded-full bg-secondary-container px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
                      Responsive &amp; Scaled
                    </span>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Custom responsive website design aligned with corporate
                    branding, web applications, software integration, customer
                    ticketing systems, and secure cloud deployment.
                  </p>

                  <div className="mt-space-lg grid grid-cols-1 gap-space-sm sm:grid-cols-2">
                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        responsive_layout
                      </span>

                      <p className="mt-space-xs font-label-md text-label-md text-on-surface">
                        Custom UI/UX &amp; Responsive Web
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        support_agent
                      </span>

                      <p className="mt-space-xs font-label-md text-label-md text-on-surface">
                        Ticketing &amp; Support Systems
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        integration_instructions
                      </span>

                      <p className="mt-space-xs font-label-md text-label-md text-on-surface">
                        API &amp; Software Integrations
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-container-low p-space-sm">
                      <span className="material-symbols-outlined text-primary">
                        cloud_done
                      </span>

                      <p className="mt-space-xs font-label-md text-label-md text-on-surface">
                        Brand-Aligned UI &amp; Deployment
                      </p>
                    </div>
                  </div>

                  <div className="mt-space-lg border-t border-outline-variant/30 pt-space-sm">
                    <div className="flex items-center justify-between gap-space-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Full Source &amp; Domain Setup
                      </span>

                      <span className="font-label-sm text-label-sm font-semibold text-primary">
                        Fast Staging &amp; Launch
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY BCC
      ============================================================ */}

      <section
        id="why-bcc"
        className="relative overflow-hidden bg-surface py-space-3xl"
      >
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-secondary-container/30 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-[80rem] px-gutter-mobile md:px-gutter-desktop">
          <div className="grid grid-cols-1 gap-space-2xl lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Trust Built Through Work
              </p>

              <h2 className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:text-headline-lg">
                The Centre Behind the Work.
              </h2>

              <p className="mt-space-lg max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                Over a decade anchoring community computing and commercial
                creative demands. Founded in 2018, BCC Tech &amp; Creative
                Centre bridged the gap between sterile IT depots and detached
                design agencies.
              </p>

              <p className="mt-space-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                We operate an open bench laboratory where clients witness
                honest component inspections, paired with a calm studio space
                for entrepreneurs who need packaging, documents, and
                professional media ready for immediate production.
              </p>

              <div className="mt-space-xl grid grid-cols-2 gap-space-sm">
                <div className="rounded-xl bg-surface-container-low p-space-lg">
                  <p className="font-headline-md text-headline-md text-primary">
                    8+
                  </p>

                  <p className="mt-space-2xs font-title-md text-title-md text-on-surface">
                    Years Active
                  </p>

                  <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                    Continuous service since 2018
                  </p>
                </div>

                <div className="rounded-xl bg-surface-container-low p-space-lg">
                  <p className="font-headline-md text-headline-md text-primary">
                    <CountUp from={0} to={3.5} duration={2} />k
                  </p>

                  <p className="mt-space-2xs font-title-md text-title-md text-on-surface">
                    Devices Restored
                  </p>

                  <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                    Laptops, boards &amp; rigs
                  </p>
                </div>

                <div className="rounded-xl bg-surface-container-low p-space-lg">
                  <p className="font-headline-md text-headline-md text-primary">
                    99.4%
                  </p>

                  <p className="mt-space-2xs font-title-md text-title-md text-on-surface">
                    Diagnostic Accuracy
                  </p>

                  <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                    Tested bench verification
                  </p>
                </div>

                <div className="rounded-xl bg-surface-container-low p-space-lg">
                  <p className="font-headline-md text-headline-md text-primary">
                    45m
                  </p>

                  <p className="mt-space-2xs font-title-md text-title-md text-on-surface">
                    Express Queue
                  </p>

                  <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                    Same-day critical triage
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
                <div className="grid grid-cols-1 divide-y divide-outline-variant/30">
                  <div className="p-space-xl">
                    <div className="flex items-start gap-space-md">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
                        <span className="material-symbols-outlined">
                          no_payment
                        </span>
                      </span>

                      <div>
                        <h3 className="font-title-md text-title-md text-on-surface">
                          No-Fix, No-Fee Diagnosis
                        </h3>

                        <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                          If our bench technicians cannot isolate and resolve
                          the root hardware failure, you pay zero diagnostic
                          surcharge.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-space-xl">
                    <div className="flex items-start gap-space-md">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
                        <span className="material-symbols-outlined">
                          inventory_2
                        </span>
                      </span>

                      <div>
                        <h3 className="font-title-md text-title-md text-on-surface">
                          Direct OEM Replacement Parts
                        </h3>

                        <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                          We only source factory-certified tier panels,
                          authentic power ICs, and Grade-A cells backed by
                          verifiable component warranties.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-space-xl">
                    <div className="flex items-start gap-space-md">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
                        <span className="material-symbols-outlined">
                          security
                        </span>
                      </span>

                      <div>
                        <h3 className="font-title-md text-title-md text-on-surface">
                          Air-Gapped Document Privacy
                        </h3>

                        <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                          Tax records, corporate files, and ID scans undergo
                          immediate DoD-grade wipe cycles post printing and
                          compliance dispatch.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROJECT GALLERY
          THESE ARE THE ONLY HOMEPAGE PHOTOS
      ============================================================ */}

      <section
        id="project-gallery"
        className="bg-surface-container-low py-space-3xl"
      >
        <div className="mx-auto max-w-[80rem] px-gutter-mobile md:px-gutter-desktop">
          <div className="mb-space-2xl flex flex-col gap-space-md md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Proven Execution
              </p>

              <h2 className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:text-headline-lg">
                Bench Work &amp; Creative Showcase
              </h2>
            </div>

            <p className="max-w-md font-body-md text-body-md text-on-surface-variant md:text-right">
              Archived production orders completed on-site.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-space-md md:grid-cols-12">
            {/* PROJECT 1 */}

            <article className="group relative overflow-hidden rounded-xl bg-surface-container-lowest md:col-span-7">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project01}
                  alt="Liquid-Cooled 4K Video Editing Rig"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-space-lg text-white">
                  <div className="mb-space-xs flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em]">
                      Custom Engineering
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/70" />

                    <span className="font-label-sm text-label-sm">
                      RIG-8842
                    </span>
                  </div>

                  <h3 className="font-headline-md text-headline-md">
                    Liquid-Cooled 4K Video Editing Rig
                  </h3>

                  <p className="mt-space-xs max-w-2xl font-body-md text-body-md text-white/80">
                    Ryzen 9 7950X, custom hardline acrylic loop, 64GB DDR5
                    low-latency RAM, and RTX 4080 built for sustained DaVinci
                    Resolve color grading cycles.
                  </p>

                  <div className="mt-space-sm inline-flex rounded-full bg-white/10 px-space-sm py-space-2xs backdrop-blur-sm">
                    <span className="font-label-sm text-label-sm">
                      Zero Thermal Throttling • 42°C Under Load
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* PROJECT 2 */}

            <article className="group relative overflow-hidden rounded-xl bg-surface-container-lowest md:col-span-5">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project02}
                  alt="MacBook Pro Power Stage Repair"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/95 via-on-surface/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-space-lg text-white">
                  <div className="mb-space-xs flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em]">
                      Component Salvage
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/70" />

                    <span className="font-label-sm text-label-sm">
                      MAC-2940
                    </span>
                  </div>

                  <h3 className="font-headline-md text-headline-md">
                    MacBook Pro Power Stage Repair
                  </h3>

                  <p className="mt-space-xs font-body-md text-body-md text-white/80">
                    Complete liquid damage oxidation wash, replacement of 3
                    burnt DC power mosfets, and 100% data preservation on
                    encrypted internal flash array.
                  </p>

                  <div className="mt-space-sm inline-flex rounded-full bg-white/10 px-space-sm py-space-2xs backdrop-blur-sm">
                    <span className="font-label-sm text-label-sm">
                      Saved Client R42,000 • Same-Day Turnaround
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* PROJECT 3 */}

            <article className="group relative overflow-hidden rounded-xl bg-surface-container-lowest md:col-span-5">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project03}
                  alt="Logistics Hub Visual Identity"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/95 via-on-surface/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-space-lg text-white">
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em]">
                    Brand &amp; Print System
                  </span>

                  <h3 className="mt-space-xs font-headline-md text-headline-md">
                    Logistics Hub Visual Identity
                  </h3>

                  <p className="mt-space-xs font-body-md text-body-md text-white/80">
                    Vector logo redesign, UV spot varnished business cards,
                    fleet decals, and waterproof vinyl outdoor site signage.
                  </p>

                  <div className="mt-space-sm inline-flex rounded-full bg-white/10 px-space-sm py-space-2xs backdrop-blur-sm">
                    <span className="font-label-sm text-label-sm">
                      Vector Suite &amp; Print Runs
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* PROJECT 4 */}

            <article className="group relative overflow-hidden rounded-xl bg-surface-container-lowest md:col-span-7">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project04}
                  alt="Executive Leadership Portrait Kit"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/95 via-on-surface/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-space-lg text-white">
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em]">
                    Studio Photography
                  </span>

                  <h3 className="mt-space-xs font-headline-md text-headline-md">
                    Executive Leadership Portrait Kit
                  </h3>

                  <p className="mt-space-xs max-w-2xl font-body-md text-body-md text-white/80">
                    Calibrated three-point softbox studio setup for
                    international board appointments, annual shareholder
                    report prints, and LinkedIn press bundles.
                  </p>

                  <div className="mt-space-sm inline-flex rounded-full bg-white/10 px-space-sm py-space-2xs backdrop-blur-sm">
                    <span className="font-label-sm text-label-sm">
                      Tethered 4K Review • Instant Certified Crops
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* PROJECT 5 */}

            <article className="group relative overflow-hidden rounded-xl bg-surface-container-lowest md:col-span-7">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project05}
                  alt="Smart Key Programming and ECU Immobilizer Sync"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/95 via-on-surface/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-space-lg text-white">
                  <div className="mb-space-xs flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em]">
                      Automotive Diagnostics
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/70" />

                    <span className="font-label-sm text-label-sm">
                      KEY-7104
                    </span>
                  </div>

                  <h3 className="font-headline-md text-headline-md">
                    Smart Key Programming &amp; ECU Immobilizer Sync
                  </h3>

                  <p className="mt-space-xs max-w-2xl font-body-md text-body-md text-white/80">
                    Precision EEPROM transponder chip extraction, laser CNC
                    key blade milling, OBD2 immobilizer coding, and emergency
                    smart remote sync for commercial fleet and private
                    vehicles.
                  </p>

                  <div className="mt-space-sm inline-flex rounded-full bg-white/10 px-space-sm py-space-2xs backdrop-blur-sm">
                    <span className="font-label-sm text-label-sm">
                      OEM Chip Verification • On-Site &amp; Bench Coding
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* PROJECT 6 */}

            <article className="group relative overflow-hidden rounded-xl bg-surface-container-lowest md:col-span-5">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project06}
                  alt="Custom Client Portal and Dispatch Ticketing System"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/95 via-on-surface/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-space-lg text-white">
                  <div className="mb-space-xs flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.12em]">
                      Digital Systems &amp; SaaS
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/70" />

                    <span className="font-label-sm text-label-sm">
                      WEB-4091
                    </span>
                  </div>

                  <h3 className="font-headline-md text-headline-md">
                    Custom Client Portal &amp; Dispatch Ticketing System
                  </h3>

                  <p className="mt-space-xs font-body-md text-body-md text-white/80">
                    End-to-end responsive web application engineering, secure
                    role-based customer portal, live ticket queue sync, and
                    automated billing integration tailored for service
                    workflows.
                  </p>

                  <div className="mt-space-sm inline-flex rounded-full bg-white/10 px-space-sm py-space-2xs backdrop-blur-sm">
                    <span className="font-label-sm text-label-sm">
                      Full-Stack Architecture • Live Staging Deployment
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
      ============================================================ */}

      <section id="client-reviews" className="bg-surface py-space-3xl">
        <div className="mx-auto max-w-[80rem] px-gutter-mobile md:px-gutter-desktop">
          <div className="mb-space-2xl max-w-3xl">
            <p className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Verified Feedback
            </p>

            <h2 className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:text-headline-lg">
              Trusted by Local Businesses &amp; Professionals
            </h2>

            <p className="mt-space-md font-body-lg text-body-lg text-on-surface-variant">
              Real experiences from clients who rely on our prompt desk
              turnaround.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-space-md lg:grid-cols-3">
            <article className="flex flex-col rounded-xl bg-surface-container-low p-space-lg">
              <div className="flex items-center gap-space-2xs text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-[18px]"
                  >
                    star
                  </span>
                ))}
              </div>

              <blockquote className="mt-space-lg flex-1 font-body-lg text-body-lg text-on-surface">
                “My primary laptop died two days before the corporate tax
                deadline with unbacked ledger files. The BCC bench diagnosed a
                blown power capacitor and had everything running within 5
                hours. Truly life-saving service.”
              </blockquote>

              <div className="mt-space-xl border-t border-outline-variant/30 pt-space-md">
                <p className="font-title-md text-title-md text-on-surface">
                  Tebogo Moloi
                </p>

                <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                  Director, Peakline Accounting
                </p>

                <span className="mt-space-sm inline-flex rounded-full bg-secondary-container px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
                  Verified Repair
                </span>
              </div>
            </article>

            <article className="flex flex-col rounded-xl bg-surface-container-low p-space-lg">
              <div className="flex items-center gap-space-2xs text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-[18px]"
                  >
                    star
                  </span>
                ))}
              </div>

              <blockquote className="mt-space-lg flex-1 font-body-lg text-body-lg text-on-surface">
                “BCC revamped our food truck brand identity and engineered
                oil-resistant, waterproof laminated menus. The print quality
                holds up to heavy daily kitchen grease and their turnaround
                was super rapid.”
              </blockquote>

              <div className="mt-space-xl border-t border-outline-variant/30 pt-space-md">
                <p className="font-title-md text-title-md text-on-surface">
                  Chantelle Louw
                </p>

                <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                  Owner, Rustic Table Foods
                </p>

                <span className="mt-space-sm inline-flex rounded-full bg-secondary-container px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
                  Branding Client
                </span>
              </div>
            </article>

            <article className="flex flex-col rounded-xl bg-surface-container-low p-space-lg">
              <div className="flex items-center gap-space-2xs text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-[18px]"
                  >
                    star
                  </span>
                ))}
              </div>

              <blockquote className="mt-space-lg flex-1 font-body-lg text-body-lg text-on-surface">
                “Got my engineering dissertation hard-bound with gold
                lettering here, along with high-detail A1 CAD blueprints and
                biometric photos for my European research fellowship. Flawless
                attention to specifications.”
              </blockquote>

              <div className="mt-space-xl border-t border-outline-variant/30 pt-space-md">
                <p className="font-title-md text-title-md text-on-surface">
                  Kavish Naidoo
                </p>

                <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                  Civil Engineering Researcher
                </p>

                <span className="mt-space-sm inline-flex rounded-full bg-secondary-container px-space-xs py-space-2xs font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
                  Print &amp; Media
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT & INTAKE
      ============================================================ */}

      <section
        id="contact-intake"
        className="scroll-mt-20 bg-surface-container-low py-space-3xl"
      >
        <div className="mx-auto max-w-[80rem] px-gutter-mobile md:px-gutter-desktop">
          <div className="grid grid-cols-1 gap-space-2xl lg:grid-cols-12">
            {/* FORM */}

            <div className="lg:col-span-7">
              <p className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Immediate Action
              </p>

              <h2 className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:text-headline-lg">
                Book a Service or Inquire
              </h2>

              <p className="mt-space-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                Fill in your specifications. Our bench supervisor will respond
                with estimated intake queue times within 30 minutes.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-space-xl rounded-xl bg-surface-container-lowest p-space-lg shadow-sm"
              >
                <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="mb-space-xs block font-label-md text-label-md font-semibold text-on-surface"
                    >
                      Full Name *
                    </label>

                    <input
                      id="full-name"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Sipho Dlamini"
                      className="w-full rounded-lg border border-outline-variant/50 bg-surface px-space-sm py-space-sm font-body-md text-body-md text-on-surface outline-none transition-all placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-space-xs block font-label-md text-label-md font-semibold text-on-surface"
                    >
                      Phone / WhatsApp *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+27 76 932 8706"
                      className="w-full rounded-lg border border-outline-variant/50 bg-surface px-space-sm py-space-sm font-body-md text-body-md text-on-surface outline-none transition-all placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-space-xs block font-label-md text-label-md font-semibold text-on-surface"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="sales@bethalcomputercentre.com"
                      className="w-full rounded-lg border border-outline-variant/50 bg-surface px-space-sm py-space-sm font-body-md text-body-md text-on-surface outline-none transition-all placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-space-xs block font-label-md text-label-md font-semibold text-on-surface"
                    >
                      Service Needed *
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-outline-variant/50 bg-surface px-space-sm py-space-sm font-body-md text-body-md text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="Hardware Repair / Diagnosis">
                        Hardware Repair / Diagnosis (Laptop, PC, Mac)
                      </option>

                      <option value="Custom Liquid-Cooled Rig">
                        Custom Liquid-Cooled Rig / Workstation Build
                      </option>

                      <option value="High-Volume Printing">
                        High-Volume Printing, CAD Plotting &amp; Binding
                      </option>

                      <option value="Tax & E-Filing">
                        Tax &amp; E-Filing Compliance Navigation
                      </option>

                      <option value="Graphic Design">
                        Graphic Design &amp; Corporate Visual Identity
                      </option>

                      <option value="Studio Portrait">
                        Studio Portrait / Biometric Passport Photos
                      </option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="scope"
                      className="mb-space-xs block font-label-md text-label-md font-semibold text-on-surface"
                    >
                      Problem Description or Project Scope *
                    </label>

                    <textarea
                      id="scope"
                      name="scope"
                      rows="6"
                      required
                      placeholder="Describe symptoms (e.g. no power, flashing light after spill), software needed, or dimensions for print jobs..."
                      className="w-full resize-y rounded-lg border border-outline-variant/50 bg-surface px-space-sm py-space-sm font-body-md text-body-md text-on-surface outline-none transition-all placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>

                <div className="mt-space-lg flex flex-col gap-space-md">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-space-xs rounded-lg bg-primary-container px-space-lg py-space-sm font-label-md text-label-md font-semibold text-on-primary shadow-sm transition-colors duration-200 hover:bg-primary"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>

                    Submit Service Ticket
                  </button>

                  {ticketSubmitted && (
                    <div
                      role="status"
                      className="rounded-lg border border-primary/20 bg-primary/5 px-space-md py-space-sm font-label-md text-label-md text-primary"
                    >
                      ✓ Ticket #BCC-7291 logged. Our intake coordinator has
                      sent a WhatsApp confirmation to your device.
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* WALK-IN SERVICE */}

            <div className="lg:col-span-5">
              <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
                <p className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Walk-In Service
                </p>

                <h3 className="mt-space-xs font-headline-md text-headline-md text-on-surface">
                  Physical Centre &amp; Hours
                </h3>

                <div className="mt-space-lg space-y-space-sm">
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined mt-[2px] text-primary">
                      schedule
                    </span>

                    <div>
                      <p className="font-label-md text-label-md font-semibold text-on-surface">
                        Monday–Friday
                      </p>

                      <p className="font-body-md text-body-md text-on-surface-variant">
                        08:00–18:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined mt-[2px] text-primary">
                      event
                    </span>

                    <div>
                      <p className="font-label-md text-label-md font-semibold text-on-surface">
                        Saturday
                      </p>

                      <p className="font-body-md text-body-md text-on-surface-variant">
                        08:30–14:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined mt-[2px] text-primary">
                      do_not_disturb_on
                    </span>

                    <div>
                      <p className="font-label-md text-label-md font-semibold text-on-surface">
                        Sunday &amp; Public Holidays
                      </p>

                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Closed (On-Call Rigs)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-space-xl rounded-lg bg-surface-container-low p-space-md">
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary">
                      location_on
                    </span>

                    <div>
                      <p className="font-label-md text-label-md font-semibold text-on-surface">
                        Physical Location
                      </p>

                      <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                        50B Du Plooy Street, Bethal, Mpumalanga, 2310, South
                        Africa
                      </p>
                    </div>
                  </div>

                  <div className="mt-space-md flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary">
                      local_parking
                    </span>

                    <div>
                      <p className="font-label-md text-label-md font-semibold text-on-surface">
                        Parking
                      </p>

                      <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                        Front parking bays for hardware drops &amp; collections
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-space-xl">
                  <div className="grid grid-cols-2 gap-space-sm">
                    <button
                      type="button"
                      onClick={() => toggleContactPanel("phone")}
                      className={`inline-flex items-center justify-center gap-space-xs rounded-lg px-space-sm py-space-sm font-label-md text-label-md font-semibold transition-colors ${
                        contactPanel === "phone"
                          ? "bg-primary-container text-on-primary"
                          : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        call
                      </span>

                      Direct Dial
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleContactPanel("whatsapp")}
                      className={`inline-flex items-center justify-center gap-space-xs rounded-lg px-space-sm py-space-sm font-label-md text-label-md font-semibold transition-colors ${
                        contactPanel === "whatsapp"
                          ? "bg-primary-container text-on-primary"
                          : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        chat
                      </span>

                      WhatsApp
                    </button>
                  </div>

                  {contactPanel === "phone" && (
                    <div className="mt-space-sm rounded-lg border border-outline-variant/30 bg-surface-container-low p-space-md">
                      <div className="flex items-start justify-between gap-space-md">
                        <div>
                          <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
                            Direct Dial
                          </p>

                          <p className="mt-space-xs font-title-md text-title-md text-on-surface">
                            +27 76 932 8706
                          </p>
                        </div>

                        <span className="material-symbols-outlined text-primary">
                          phone
                        </span>
                      </div>

                      <div className="mt-space-md grid grid-cols-2 gap-space-sm">
                        <a
                          href="tel:+27769328706"
                          className="inline-flex items-center justify-center rounded-lg bg-primary-container px-space-sm py-space-xs font-label-md text-label-md font-semibold text-on-primary"
                        >
                          Call
                        </a>

                        <button
                          type="button"
                          onClick={copyContactNumber}
                          className="inline-flex items-center justify-center gap-space-xs rounded-lg bg-surface-container-lowest px-space-sm py-space-xs font-label-md text-label-md font-semibold text-on-surface"
                        >
                          <span className="material-symbols-outlined text-[17px]">
                            {copied ? "done" : "content_copy"}
                          </span>

                          {copied ? "Copied" : "Copy"}
                        </button>
                      </div>
                    </div>
                  )}

                  {contactPanel === "whatsapp" && (
                    <div className="mt-space-sm rounded-lg border border-outline-variant/30 bg-surface-container-low p-space-md">
                      <div className="flex items-start justify-between gap-space-md">
                        <div>
                          <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
                            WhatsApp
                          </p>

                          <p className="mt-space-xs font-title-md text-title-md text-on-surface">
                            +27 76 932 8706
                          </p>

                          <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                            Instant WhatsApp Response
                          </p>
                        </div>

                        <span className="material-symbols-outlined text-primary">
                          chat
                        </span>
                      </div>

                      <a
                        href="https://wa.me/27769328706"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-space-md inline-flex w-full items-center justify-center gap-space-xs rounded-lg bg-primary-container px-space-sm py-space-xs font-label-md text-label-md font-semibold text-on-primary"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          open_in_new
                        </span>

                        Open Chat
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-space-xl overflow-hidden rounded-xl">
                  <div className="relative h-64">
                    <img
                      src={locationMap}
                      alt="Map showing BCC Central Lab in Bethal"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-x-space-md bottom-space-md">
                      <div className="rounded-lg bg-surface-container-lowest/95 px-space-md py-space-sm shadow-md backdrop-blur-sm">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-primary">
                            location_on
                          </span>

                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            BCC Central Lab • Bethal
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOME-SPECIFIC FOOTER
          THIS IS INTENTIONALLY INSIDE HOME.JSX
      ============================================================ */}

      <section className="w-full bg-surface py-space-2xl">
        <div className="mx-auto max-w-[80rem] px-gutter-mobile md:px-gutter-desktop">
          <div className="grid grid-cols-1 gap-space-xl border-b border-outline-variant/30 pb-space-2xl lg:grid-cols-12">
            {/* BRAND */}

            <div className="lg:col-span-4">
              <div className="flex items-center gap-space-sm">
                <img
                  src={logo}
                  alt="BCC Tech & Creative Centre"
                  className="h-10 w-auto object-contain"
                />

                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    BCC Tech &amp; Creative
                  </span>

                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Bethal Central Lab
                  </span>
                </div>
              </div>

              <p className="mt-space-md max-w-md font-body-md text-body-md text-on-surface-variant">
                High-precision computing hardware triage, custom water-cooling
                systems, digital document architecture, and commercial brand
                media.
              </p>

              <p className="mt-space-sm font-label-sm text-label-sm font-semibold text-primary">
                Registered Lab Facility #ZA-IT-2018-8942
              </p>
            </div>

            {/* RAPID NAVIGATION */}

            <div className="lg:col-span-4">
              <h3 className="font-title-md text-title-md text-on-surface">
                Rapid Navigation
              </h3>

              <div className="mt-space-md grid grid-cols-2 gap-x-space-lg gap-y-space-xs">
                <a
                  href="#hero"
                  className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                >
                  Top of Screen
                </a>

                <a
                  href="#tech-services"
                  className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                >
                  Tech Services
                </a>

                <a
                  href="#creative-studio"
                  className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                >
                  Creative Studio
                </a>

                <a
                  href="#why-bcc"
                  className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                >
                  Why BCC
                </a>

                <a
                  href="#project-gallery"
                  className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                >
                  Project Gallery
                </a>

                <a
                  href="#client-reviews"
                  className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                >
                  Client Reviews
                </a>

                <a
                  href="#contact-intake"
                  className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                >
                  Contact &amp; Intake
                </a>
              </div>
            </div>

            {/* OPERATION STATUS */}

            <div className="lg:col-span-4">
              <h3 className="font-title-md text-title-md text-on-surface">
                Operation Status
              </h3>

              <div className="mt-space-md rounded-xl bg-surface-container-low p-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />

                  <span className="font-label-md text-label-md font-semibold text-on-surface">
                    Bench Technicians Ready
                  </span>
                </div>

                <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                  Walk-in triage intake active until 18:00
                </p>

                <a
                  href="#contact-intake"
                  className="mt-space-md inline-flex items-center gap-space-xs rounded-lg bg-primary-container px-space-md py-space-sm font-label-md text-label-md font-semibold text-on-primary transition-colors hover:bg-primary"
                >
                  Request Immediate Slot

                  <span className="material-symbols-outlined text-[17px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* LEGAL */}

          <div className="flex flex-col gap-space-md pt-space-xl md:flex-row md:items-center md:justify-between">
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              © 2026 BCC Tech &amp; Creative Centre. All specifications and
              registered marks reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-space-lg gap-y-space-xs">
              <a
                href="/"
                className="font-label-sm text-label-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Privacy Charter &amp; POPIA Compliance
              </a>

              <a
                href="/"
                className="font-label-sm text-label-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Hardware Warranty Terms
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
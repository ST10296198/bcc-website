import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

// About page images
import heroBench from "../assets/images/about/hero-bench.jpg";
import phase1 from "../assets/images/about/phase-1.jpg";
import phase2 from "../assets/images/about/phase-2.jpg";
import phase3 from "../assets/images/about/phase-3.jpg";
import locationMap from "../assets/images/about/location-map.jpg";

// Team images
import trynos from "../assets/images/team/trynos.jpg";
import christine from "../assets/images/team/christine.jpg";
import lammy from "../assets/images/team/lammy.jpg";
import sylvester from "../assets/images/team/sylvester.jpg";

export default function About() {
  return (
    <div className="flex w-full flex-col">

      {/* =========================================================
          HERO HEADER SECTION
      ========================================================== */}
      <section className="relative w-full overflow-hidden bg-surface-container-low px-gutter-mobile py-space-3xl md:px-gutter-desktop">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-fixed-dim/30 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-secondary-container/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-container-max">
          <div className="grid grid-cols-1 items-center gap-space-2xl lg:grid-cols-12">

            {/* Hero copy */}
            <div className="flex flex-col items-start gap-space-md lg:col-span-7">

              <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container-highest px-space-sm py-space-2xs text-primary">
                <span className="material-symbols-outlined text-[16px]">
                  history_edu
                </span>

                <span className="font-label-sm text-label-sm uppercase tracking-wider">
                  OUR HERITAGE &amp; MISSION • FOUNDED 2018
                </span>
              </div>

              <h1 className="font-display-lg text-display-lg leading-tight tracking-tight text-on-surface">
                From an In-House Repair Bench to a Complete Tech &amp; Creative
                Institution.
              </h1>

              <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                The story of how founder Trinus turned a passion for circuit
                boards and custom desktop engineering into Bethal&apos;s most
                dependable community computing hub and creative production
                studio.
              </p>

              {/* Key trust tags */}
              <div className="grid w-full grid-cols-2 gap-space-sm pt-space-md sm:grid-cols-4">

                <div className="flex flex-col rounded-xl bg-surface-container-lowest p-space-sm shadow-sm">
                  <span className="font-headline-md text-headline-md text-primary">
                    8+
                  </span>

                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Years Community-Rooted
                  </span>
                </div>

                <div className="flex flex-col rounded-xl bg-surface-container-lowest p-space-sm shadow-sm">
                  <span className="font-headline-md text-headline-md text-primary">
                    18,500+
                  </span>

                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Precision Restorations
                  </span>
                </div>

                <div className="flex flex-col rounded-xl bg-surface-container-lowest p-space-sm shadow-sm">
                  <span className="font-headline-md text-headline-md text-primary">
                    100%
                  </span>

                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Owner-Supervised Bench
                  </span>
                </div>

                <div className="flex flex-col rounded-xl bg-surface-container-lowest p-space-sm shadow-sm">
                  <span className="font-headline-md text-headline-md text-primary">
                    Certified
                  </span>

                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    POPIA &amp; SARS Accredited
                  </span>
                </div>

              </div>
            </div>

            {/* Hero image */}
            <div className="relative lg:col-span-5">

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-container shadow-xl">

                <img
                  src={heroBench}
                  alt="BCC electronics repair and workshop bench"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent p-space-lg">

                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">
                    Workbench #01 • Bethal Workshop
                  </span>

                  <span className="font-title-md text-title-md text-surface-container-lowest">
                    Our technician inspecting SMD micro-circuitry on an enterprise
                    logic board
                  </span>

                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-8 hidden max-w-xs items-center gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-xl sm:flex">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-fixed">
                  <span className="material-symbols-outlined text-[20px]">
                    precision_manufacturing
                  </span>
                </div>

                <div className="flex flex-col">

                  <span className="font-label-md text-label-md font-semibold text-on-surface">
                    Micro-Soldering Lab
                  </span>

                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Board level component diagnosis
                  </span>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE CHRONICLE
      ========================================================== */}
      <section className="w-full bg-surface px-gutter-mobile py-space-3xl md:px-gutter-desktop">
        <div className="mx-auto flex max-w-container-max flex-col gap-space-2xl">

          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">

            <div className="flex flex-col gap-space-xs">
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                The Chronicle
              </span>

              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                The Evolution of BCC Tech
              </h2>
            </div>

            <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
              How a localized technical obsession adapted over 13 years to
              shoulder the daily computing and media burdens of Bethal and
              Mpumalanga&apos;s businesses and creators.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-space-xl md:grid-cols-3">

            {/* Phase 01 */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-surface-container-low shadow-sm transition-shadow hover:shadow-md">

              <div className="relative h-56 w-full overflow-hidden bg-surface-container">

                <img
                  src={phase1}
                  alt="Early BCC electronics repair bench"
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-space-sm top-space-sm rounded bg-inverse-surface/80 px-space-xs py-space-2xs font-label-sm text-label-sm text-inverse-on-surface">
                  Phase 01: 2011–2014
                </div>

              </div>

              <div className="flex flex-grow flex-col justify-between gap-space-md p-space-lg">

                <div className="flex flex-col gap-space-xs">

                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    The In-House Workbench
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Trinus started from home, repairing motherboards, reviving
                    water-damaged laptops, and hand-building high-performance
                    desktop towers for local gamers, architectural students,
                    and small businesses when formal repair shops claimed they
                    were unfixable.
                  </p>

                </div>

                <div className="flex items-center gap-space-xs pt-space-sm font-label-md text-label-md text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    memory
                  </span>

                  <span>Direct Component Salvation</span>
                </div>

              </div>
            </div>

            {/* Phase 02 */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-surface-container-low shadow-sm transition-shadow hover:shadow-md">

              <div className="relative h-56 w-full overflow-hidden bg-surface-container">

                <img
                  src={phase2}
                  alt="BCC commercial printing and document services"
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-space-sm top-space-sm rounded bg-inverse-surface/80 px-space-xs py-space-2xs font-label-sm text-label-sm text-inverse-on-surface">
                  Phase 02: 2015–2019
                </div>

              </div>

              <div className="flex flex-grow flex-col justify-between gap-space-md p-space-lg">

                <div className="flex flex-col gap-space-xs">

                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Listening to Community Demands
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    As clients kept coming back for more than just hardware
                    repairs, BCC grew to answer everyday community bottlenecks:
                    high-volume document printing, architectural CAD blueprint
                    plotting, SARS e-filing tax navigation, and brand graphic
                    design.
                  </p>

                </div>

                <div className="flex items-center gap-space-xs pt-space-sm font-label-md text-label-md text-secondary">
                  <span className="material-symbols-outlined text-[18px]">
                    print
                  </span>

                  <span>Civic &amp; Business Enablement</span>
                </div>

              </div>
            </div>

            {/* Phase 03 */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-surface-container-low shadow-sm transition-shadow hover:shadow-md">

              <div className="relative h-56 w-full overflow-hidden bg-surface-container">

                <img
                  src={phase3}
                  alt="BCC professional creative studio"
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-space-sm top-space-sm rounded bg-inverse-surface/80 px-space-xs py-space-2xs font-label-sm text-label-sm text-inverse-on-surface">
                  Phase 03: 2020–Present
                </div>

              </div>

              <div className="flex flex-grow flex-col justify-between gap-space-md p-space-lg">

                <div className="flex flex-col gap-space-xs">

                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Expanding into Creative &amp; Media
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Adding a dedicated professional studio with modern softbox
                    strobes, cyclorama setups, passport/visa biometric capture,
                    and live event sound/visual support—bridging the mechanical
                    and visual realms under one roof.
                  </p>

                </div>

                <div className="flex items-center gap-space-xs pt-space-sm font-label-md text-label-md text-tertiary-container">
                  <span className="material-symbols-outlined text-[18px]">
                    photo_camera
                  </span>

                  <span>Full Visual Production</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          OPERATING PRINCIPLES
      ========================================================== */}
      <section className="w-full bg-surface-container-low px-gutter-mobile py-space-3xl md:px-gutter-desktop">
        <div className="mx-auto flex max-w-container-max flex-col gap-space-2xl">

          <div className="mx-auto flex max-w-2xl flex-col gap-space-xs text-center">

            <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
              Uncompromising Standards
            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Our Operating Principles
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant">
              In an era of planned obsolescence and careless data handling,
              our shop floor functions by non-negotiable codes of ethics.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">

            {/* Principle 1 */}
            <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-xl shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[28px]">
                  hardware
                </span>
              </div>

              <div className="flex flex-col gap-space-xs">

                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Component-Level Integrity
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  We don&apos;t just swap expensive assemblies; we diagnose
                  power stages, mosfets, and capacitors down to the board
                  level. Saving our clients up to 70% compared to authorized
                  swap fees while keeping e-waste out of landfills.
                </p>

              </div>

              <div className="mt-auto flex items-center gap-space-2xs pt-space-xs font-label-sm text-label-sm text-secondary">
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>

                <span>Micro-soldering inspection verified</span>
              </div>

            </div>

            {/* Principle 2 */}
            <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-xl shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <span className="material-symbols-outlined text-[28px]">
                  shield_lock
                </span>
              </div>

              <div className="flex flex-col gap-space-xs">

                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Air-Gapped Confidentiality
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Every tax filing, confidential legal document, and personal
                  drive data is handled under strict POPIA protocol. Diagnostic
                  workstations operate on segregated VLAN networks with
                  automated session purges.
                </p>

              </div>

              <div className="mt-auto flex items-center gap-space-2xs pt-space-xs font-label-sm text-label-sm text-secondary">
                <span className="material-symbols-outlined text-[16px]">
                  verified_user
                </span>

                <span>POPIA &amp; SARS Compliant Protocol</span>
              </div>

            </div>

            {/* Principle 3 */}
            <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-xl shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-tertiary-container/10 text-tertiary">
                <span className="material-symbols-outlined text-[28px]">
                  handshake
                </span>
              </div>

              <div className="flex flex-col gap-space-xs">

                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Transparent Community Pricing
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Upfront itemized quotes, zero hidden diagnostic surcharges,
                  and a strict no-fix no-fee policy on initial evaluations. If
                  our team cannot restore your system, you owe us nothing for
                  the bench time.
                </p>

              </div>

              <div className="mt-auto flex items-center gap-space-2xs pt-space-xs font-label-sm text-label-sm text-secondary">
                <span className="material-symbols-outlined text-[16px]">
                  receipt_long
                </span>

                <span>Itemized, binding quotes</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM / STUDIO SPECIALIST SHOWCASE
      ========================================================== */}
      <section className="w-full bg-surface px-gutter-mobile py-space-3xl md:px-gutter-desktop">
        <div className="mx-auto flex max-w-container-max flex-col gap-space-2xl">

          <div className="flex flex-col gap-space-xs">

            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
              The Craftsmen &amp; Operators
            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              The Multidisciplinary Bench &amp; Studio Team
            </h2>

            <p className="max-w-xl font-body-md text-body-md text-on-surface-variant">
              United by an appreciation for precision tolerances, whether
              micro-soldering an 0402 SMD capacitor or calibrating a 12-color
              giclée print head.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-4">

            {/* =====================================================
                TRYNOS
            ====================================================== */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md">

              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container">

                <img
                  src={trynos}
                  alt="Trynos - Founder and Lead Hardware Architect"
                  className="h-full w-full object-cover object-center"
                />

              </div>

              <div className="flex flex-grow flex-col gap-space-2xs p-space-md">

                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Trynos
                </span>

                <span className="font-label-md text-label-md font-semibold text-primary">
                  Founder &amp; Lead Hardware Architect
                </span>

                <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                  10+ years diagnosing board-level failures, designing
                  bespoke computational Boxes, and managing shop floor quality.
                </p>

                <div className="mt-auto pt-space-sm">

                  <span className="inline-flex items-center gap-space-2xs font-label-sm text-label-sm text-secondary">
                    <span className="material-symbols-outlined text-[14px]">
                      bolt
                    </span>

                    5k+ Systems Restored
                  </span>

                </div>

              </div>
            </div>

            {/* =====================================================
                SYLVESTER
            ====================================================== */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md">

              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container">

                <img
                  src={sylvester}
                  alt="Sylvester - Technician"
                  className="h-full w-full object-cover object-center"
                />

              </div>

              <div className="flex flex-grow flex-col gap-space-2xs p-space-md">

                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Sylvester
                </span>

                <span className="font-label-md text-label-md font-semibold text-primary">
                  Technician
                </span>

                <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                  Specializing in rapid diagnostics, component repair, and
                  customer technical solutions.
                </p>

                <div className="mt-auto pt-space-sm">

                  <span className="inline-flex items-center gap-space-2xs font-label-sm text-label-sm text-secondary">
                    <span className="material-symbols-outlined text-[14px]">
                      verified
                    </span>

                    Certified Systems Specialist
                  </span>

                </div>

              </div>
            </div>

            {/* =====================================================
                CHRISTINE
            ====================================================== */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md">

              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container">

                <img
                  src={christine}
                  alt="Christine - Reception"
                  className="h-full w-full object-cover object-center"
                />

              </div>

              <div className="flex flex-grow flex-col gap-space-2xs p-space-md">

                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Christine
                </span>

                <span className="font-label-md text-label-md font-semibold text-primary">
                  Reception
                </span>

                <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                  Oversees branding, large format architectural CAD plot
                  calibration, and SARS administrative filing services.
                </p>

                <div className="mt-auto pt-space-sm">

                  <span className="inline-flex items-center gap-space-2xs font-label-sm text-label-sm text-secondary">
                    <span className="material-symbols-outlined text-[14px]">
                      draw
                    </span>

                    Print &amp; Vector Authority
                  </span>

                </div>

              </div>
            </div>

            {/* =====================================================
                LAMMY
            ====================================================== */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md">

              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container">

                <img
                  src={lammy}
                  alt="Lammy - Studio Lead and Media Director"
                  className="h-full w-full object-cover object-center"
                />

              </div>

              <div className="flex flex-grow flex-col gap-space-2xs p-space-md">

                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Lammy
                </span>

                <span className="font-label-md text-label-md font-semibold text-primary">
                  Studio Lead &amp; Media Director
                </span>

                <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                  Directs portrait and commercial photo shoots, ICAO biometric
                  compliance standards, and live audiovisual gear
                  configurations.
                </p>

                <div className="mt-auto pt-space-sm">

                  <span className="inline-flex items-center gap-space-2xs font-label-sm text-label-sm text-secondary">
                    <span className="material-symbols-outlined text-[14px]">
                      camera
                    </span>

                    Visual &amp; AV Lead
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          TIMELINE & IMPACT MILESTONES
      ========================================================== */}
      <section className="w-full bg-surface-container-low px-gutter-mobile py-space-3xl md:px-gutter-desktop">
        <div className="mx-auto flex max-w-container-max flex-col gap-space-2xl">

          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">

            <div>
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                A Proven Record
              </span>

              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                8 Years in Bethal, Mpumalanga
              </h2>
            </div>

            <div className="flex items-center gap-space-xs rounded-lg bg-surface-container p-space-xs font-label-sm text-label-sm text-on-surface-variant">

              <span className="material-symbols-outlined text-[16px] text-primary">
                verified
              </span>

              <span>
                Continuously operating under founding leadership
              </span>

            </div>

          </div>

          <div className="relative flex flex-col gap-space-lg">

            <div className="absolute bottom-4 left-8 top-4 hidden w-1 rounded-full bg-surface-container-highest md:block" />

            {/* 2018 */}
            <div className="relative flex flex-col items-start gap-space-lg rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform hover:translate-x-1 md:flex-row">

              <div className="flex shrink-0 items-center gap-space-md md:w-48">

                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container font-headline-sm text-headline-sm text-on-primary shadow">
                  18
                </div>

                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  2018
                </span>

              </div>

              <div className="flex flex-grow flex-col gap-space-2xs">

                <span className="font-title-md text-title-md text-on-surface">
                  First Workshop Opens
                </span>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Trynos launches an after-hours bench providing custom PC
                  assembly, overclocking solutions, and micro-soldered repairs.
                </p>

              </div>

              <div className="hidden shrink-0 items-center self-center font-label-sm text-label-sm lg:flex">
                <span className="rounded-full bg-surface-container px-space-sm py-space-2xs text-secondary">
                  Single-Bench Capacity
                </span>
              </div>

            </div>

            {/* 2020 Facility */}
            <div className="relative flex flex-col items-start gap-space-lg rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform hover:translate-x-1 md:flex-row">

              <div className="flex shrink-0 items-center gap-space-md md:w-48">

                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container font-headline-sm text-headline-sm text-on-primary shadow">
                  20
                </div>

                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  2020
                </span>

              </div>

              <div className="flex flex-grow flex-col gap-space-2xs">

                <span className="font-title-md text-title-md text-on-surface">
                  Bethal Central Facility Established
                </span>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Relocated to 50B Du Plooy Street, Bethal. Introduced
                  heavy-duty digital printing, wide-format architectural
                  blueprint plotting, and an open diagnostic counter.
                </p>

              </div>

              <div className="hidden shrink-0 items-center self-center font-label-sm text-label-sm lg:flex">
                <span className="rounded-full bg-surface-container px-space-sm py-space-2xs text-secondary">
                  Walk-in Infrastructure
                </span>
              </div>

            </div>

            {/* 2020 Studio */}
            <div className="relative flex flex-col items-start gap-space-lg rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform hover:translate-x-1 md:flex-row">

              <div className="flex shrink-0 items-center gap-space-md md:w-48">

                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container font-headline-sm text-headline-sm text-on-primary shadow">
                  20
                </div>

                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  2020
                </span>

              </div>

              <div className="flex flex-grow flex-col gap-space-2xs">

                <span className="font-title-md text-title-md text-on-surface">
                  Creative Photo Studio &amp; Sound Stage Expansion
                </span>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Inauguration of the dedicated studio: infinity cyclorama,
                  calibrated flash systems, certified ICAO visa photo cameras,
                  and event sound hire setups.
                </p>

              </div>

              <div className="hidden shrink-0 items-center self-center font-label-sm text-label-sm lg:flex">
                <span className="rounded-full bg-surface-container px-space-sm py-space-2xs text-secondary">
                  Media Hub
                </span>
              </div>

            </div>

            {/* 2024 */}
            <div className="relative flex flex-col items-start gap-space-lg rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform hover:translate-x-1 md:flex-row">

              <div className="flex shrink-0 items-center gap-space-md md:w-48">

                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container font-headline-sm text-headline-sm text-on-primary shadow">
                  24
                </div>

                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  2024
                </span>

              </div>

              <div className="flex flex-grow flex-col gap-space-2xs">

                <span className="font-title-md text-title-md text-on-surface">
                  Heavy-Duty Printing Leasing Fleet
                </span>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Introduced enterprise multi-function printer and workstation
                  lease programs with rapid on-site maintenance across Bethal
                  and Mpumalanga.
                </p>

              </div>

              <div className="hidden shrink-0 items-center self-center font-label-sm text-label-sm lg:flex">
                <span className="rounded-full bg-surface-container px-space-sm py-space-2xs text-secondary">
                  Fleet Infrastructure
                </span>
              </div>

            </div>

            {/* 2026 */}
            <div className="relative flex flex-col items-start gap-space-lg rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-transform hover:translate-x-1 md:flex-row">

              <div className="flex shrink-0 items-center gap-space-md md:w-48">

                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-headline-sm text-headline-sm text-on-primary shadow">
                  26
                </div>

                <span className="font-headline-sm text-headline-sm font-bold text-primary">
                  2026
                </span>

              </div>

              <div className="flex flex-grow flex-col gap-space-2xs">

                <span className="font-title-md text-title-md text-on-surface">
                  SARS Certified Practitioner Accreditation
                </span>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Formalized professional e-filing desks and civic document
                  services, facilitating smooth compliance lodgements for local
                  businesses.
                </p>

              </div>

              <div className="hidden shrink-0 items-center self-center font-label-sm text-label-sm lg:flex">
                <span className="rounded-full bg-primary-fixed px-space-sm py-space-2xs font-semibold text-on-primary-fixed">
                  Active Milestone
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY IMPACT
      ========================================================== */}
      <section className="w-full bg-surface px-gutter-mobile py-space-3xl md:px-gutter-desktop">
        <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-space-2xl lg:grid-cols-12">

          <div className="flex flex-col gap-space-md lg:col-span-6">

            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
              Local Economic Impact
            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Measured by Systems Saved and Businesses Supported
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant">
              We track our performance by devices kept out of dumps, turnaround
              hours saved for working professionals, and continuous regulatory
              compliance for Mpumalanga&apos;s vibrant business community.
            </p>

            <div className="flex flex-col gap-space-sm pt-space-sm">

              {/* Metric 1 */}
              <div className="flex flex-col gap-space-2xs">

                <div className="flex justify-between font-label-md text-label-md text-on-surface">
                  <span>
                    Motherboards Saved from Landfill (Component-Level Fix)
                  </span>

                  <span className="font-semibold text-primary">
                    89.4%
                  </span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container">

                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: "89.4%" }}
                  />

                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col gap-space-2xs">

                <div className="flex justify-between font-label-md text-label-md text-on-surface">
                  <span>
                    24-Hour Urgent Diagnostic Turnaround Rate
                  </span>

                  <span className="font-semibold text-secondary">
                    94.2%
                  </span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container">

                  <div
                    className="h-full rounded-full bg-secondary"
                    style={{ width: "94.2%" }}
                  />

                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col gap-space-2xs">

                <div className="flex justify-between font-label-md text-label-md text-on-surface">
                  <span>
                    First-Submission Visa/Passport Biometric Approval
                  </span>

                  <span className="font-semibold text-tertiary">
                    99.8%
                  </span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container">

                  <div
                    className="h-full rounded-full bg-tertiary"
                    style={{ width: "99.8%" }}
                  />

                </div>
              </div>

            </div>
          </div>

          {/* Facility Structure */}
          <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-low p-space-xl shadow-md lg:col-span-6">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-space-xs">

                <span className="material-symbols-outlined text-[20px] text-primary">
                  storefront
                </span>

                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Facility Structure
                </span>

              </div>

              <span className="rounded bg-surface-container-highest px-space-xs py-space-2xs font-label-sm text-label-sm text-on-surface-variant">
                Bethal Hub
              </span>

            </div>

            <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2">

              <div className="flex flex-col gap-space-2xs rounded-lg bg-surface-container-lowest p-space-md shadow-sm">

                <span className="font-label-sm text-label-sm uppercase text-secondary">
                  Ground Level
                </span>

                <span className="font-title-md text-title-md text-on-surface">
                  Triage &amp; Print Hall
                </span>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Walk-in check-in counter, plotting machines, high-speed copy
                  stations, and internet access.
                </p>

              </div>

              <div className="flex flex-col gap-space-2xs rounded-lg bg-surface-container-lowest p-space-md shadow-sm">

                <span className="font-label-sm text-label-sm uppercase text-secondary">
                  Level 1 - Bench
                </span>

                <span className="font-title-md text-title-md text-on-surface">
                  Micro-Soldering Lab
                </span>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  ESD-safe micro-circuit station, diagnostic thermal cameras,
                  and clean data-recovery rigs.
                </p>

              </div>

              <div className="flex flex-col gap-space-2xs rounded-lg bg-surface-container-lowest p-space-md shadow-sm">

                <span className="font-label-sm text-label-sm uppercase text-secondary">
                  Level 2 - Studio
                </span>

                <span className="font-title-md text-title-md text-on-surface">
                  Visual Arts &amp; Sound
                </span>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Cyclorama photography studio, softbox arrays, editing suites,
                  and PA system staging.
                </p>

              </div>

              <div className="flex flex-col gap-space-2xs rounded-lg bg-surface-container-lowest p-space-md shadow-sm">

                <span className="font-label-sm text-label-sm uppercase text-secondary">
                  Admin Suite
                </span>

                <span className="font-title-md text-title-md text-on-surface">
                  Tax &amp; Legal Desk
                </span>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Secure air-gapped workstations for SARS e-filing
                  consultations and corporate registrations.
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PHYSICAL LOCATION
      ========================================================== */}
      <section className="w-full bg-surface-container-low px-gutter-mobile py-space-2xl md:px-gutter-desktop">
        <div className="mx-auto flex max-w-container-max flex-col gap-space-md">

          <div className="flex flex-col items-start justify-between gap-space-sm md:flex-row md:items-center">

            <div className="flex items-center gap-space-xs">

              <span className="material-symbols-outlined text-[24px] text-primary">
                location_on
              </span>

              <span className="font-title-md text-title-md text-on-surface">
                Central Workshop &amp; Studio Location
              </span>

            </div>

            <span className="font-body-md text-body-md text-on-surface-variant">
              50B Du Plooy Street, Bethal, Mpumalanga, South Africa
            </span>

          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=50B+Du+Plooy+Street,+Bethal,+Mpumalanga,+South+Africa"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-80 w-full overflow-hidden rounded-xl shadow-sm"
          >

            <img
              src={locationMap}
              alt="Bethal Computer Centre Map Location - 50B Du Plooy Street, Bethal"
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
            />

            <div className="absolute bottom-4 right-4 flex items-center gap-space-xs rounded-lg bg-surface-container-lowest/95 px-space-md py-space-xs text-[13px] font-semibold text-primary shadow-md backdrop-blur-md transition-colors group-hover:bg-primary group-hover:text-on-primary">

              <span className="material-symbols-outlined text-[16px]">
                open_in_new
              </span>

              <span>Open in Google Maps</span>

            </div>

          </a>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="w-full bg-surface px-gutter-mobile py-space-3xl md:px-gutter-desktop">
        <div className="mx-auto max-w-container-max">

          <div className="flex flex-col items-center justify-between gap-space-xl rounded-xl bg-gradient-to-r from-primary to-primary-container p-space-2xl text-on-primary shadow-xl lg:flex-row">

            <div className="flex max-w-2xl flex-col gap-space-sm">

              <div className="inline-flex w-fit items-center gap-space-2xs rounded-full bg-white/10 px-space-sm py-space-2xs text-on-primary-container">

                <span className="material-symbols-outlined text-[16px]">
                  handshake
                </span>

                <span className="font-label-sm text-label-sm uppercase tracking-wider">
                  Direct Access to the Bench
                </span>

              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-primary">
                Experience the BCC standard in person or schedule a technical
                triage session.
              </h2>

              <p className="font-body-lg text-body-lg text-on-primary-container">
                Experience the BCC standard in person at 50B Du Plooy Street,
                Bethal, Mpumalanga, South Africa or schedule a technical triage
                session with Trinus and the team.
              </p>

            </div>

            <div className="flex w-full shrink-0 flex-col items-stretch gap-space-sm sm:w-auto sm:flex-row sm:items-center">

              <a
                href="https://www.google.com/maps/search/?api=1&query=50B+Du+Plooy+Street,+Bethal,+Mpumalanga,+South Africa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-surface-container-lowest px-space-lg py-space-sm font-label-md text-label-md text-primary shadow-md transition-colors hover:bg-surface-container"
              >
                <span className="material-symbols-outlined mr-space-xs text-[18px]">
                  pin_drop
                </span>

                Visit the Centre
              </a>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-lg bg-primary-fixed/20 px-space-lg py-space-sm font-label-md text-label-md text-on-primary transition-colors hover:bg-white/10"
              >
                <span className="material-symbols-outlined mr-space-xs text-[18px]">
                  build
                </span>

                Explore Our Services
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT PAGE CUSTOM FOOTER
      ========================================================== */}
      <footer className="mt-space-3xl w-full bg-surface-container-low py-space-2xl">

        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-space-xl px-gutter-mobile md:grid-cols-2 md:px-gutter-desktop lg:grid-cols-4">

          {/* Brand */}
          <div className="flex flex-col gap-space-sm">

            <Link to="/" className="flex items-center gap-space-xs">

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
              Bethal &amp; Mpumalanga&apos;s premier enterprise workstation
              repair hub, digital media lab, and certified hardware
              restoration studio.
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
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  Client Reviews &amp; Case Studies
                </a>
              </li>

              <li>
                <a
                  href="tel:+27769328706"
                  className="transition-colors hover:text-primary"
                >
                  Contact &amp; Bookings
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* Footer bottom bar */}
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
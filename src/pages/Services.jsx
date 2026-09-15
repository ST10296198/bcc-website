import logo from "../assets/images/logo.png";

import repairsBench from "../assets/images/services/repairs-bench.jpg";
import designWorkstation from "../assets/images/services/design-workstation.jpg";
import systemsImage from "../assets/images/services/systems.jpg";
import keyProgrammingImage from "../assets/images/services/key-programming.jpg";

export default function Services() {
  return (
    <div className="flex w-full flex-col">
      {/* ============================================================
          TOP STATUS STRIP
      ============================================================ */}

      <section className="bg-surface-container-high px-gutter-mobile py-space-xs md:px-gutter-desktop">
        <div className="mx-auto flex max-w-[80rem] flex-wrap items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
          <div className="flex flex-wrap items-center gap-space-xs">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#15803D]" />

            <span className="font-title-md text-[12px] font-semibold uppercase tracking-wider text-on-surface">
              Bethal Bench Status: Open &amp; Diagnostic Ready
            </span>

            <span className="text-outline">|</span>

            <span>
              Average Bench Diagnostic:{" "}
              <strong className="text-on-surface">38 Mins</strong>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-space-md">
            <span className="inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-primary">
                verified
              </span>
              SARS Practitioner Available
            </span>

            <span className="inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-primary">
                print
              </span>
              High-Capacity Plotter Online
            </span>

            <span className="inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-primary">
                photo_camera
              </span>
              Studio Stage Armed
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES HERO
      ============================================================ */}

      <section className="relative overflow-hidden bg-surface-container-lowest px-gutter-mobile py-space-3xl md:px-gutter-desktop">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-fixed opacity-40 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-secondary-container opacity-35 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-[80rem]">
          <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
            <div className="flex flex-col items-start gap-space-md lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[15px]">
                  precision_manufacturing
                </span>

                Official Capabilities &amp; Workstation Catalog
              </div>

              <h1 className="font-display-lg-mobile text-display-lg-mobile leading-[1.08] tracking-tight text-on-surface md:font-display-lg md:text-display-lg">
                Precision Bench Work &amp;{" "}
                <span className="text-primary-container">
                  Creative Media
                </span>{" "}
                Under One Roof.
              </h1>

              <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                Welcome to Mpumalanga&apos;s flagship computing and creative
                powerhouse. From enterprise board-level micro-soldering and
                calibrated plotters to accredited SARS tax submissions and
                broadcast-grade portrait photography, we serve retail
                walk-ins, SMEs, and Mpumalanga corporate accounts with
                guaranteed turnaround SLAs.
              </p>

              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <a
                  href="#tech-repairs"
                  className="inline-flex items-center gap-space-xs rounded-lg bg-primary-container px-space-md py-space-sm font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    build
                  </span>

                  Explore Tech Bench
                </a>

                <a
                  href="#creative-branding"
                  className="inline-flex items-center gap-space-xs rounded-lg bg-secondary-container px-space-md py-space-sm font-label-md text-label-md text-on-secondary-fixed transition-colors hover:bg-secondary-fixed-dim"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    palette
                  </span>

                  Creative Studio Deck
                </a>

                <span className="hidden text-outline-variant sm:inline">
                  |
                </span>

                <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    verified_user
                  </span>

                  POPIA &amp; SARS Accredited Facility
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-space-sm lg:col-span-4">
              <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container-low p-space-lg shadow-sm">
                <div className="flex items-center justify-between gap-space-sm">
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-primary">
                    Bethal Central Hub
                  </span>

                  <span className="rounded-full bg-surface-container-highest px-2 py-0.5 font-label-sm text-label-sm text-on-secondary-fixed">
                    Walk-Ins Priority
                  </span>
                </div>

                <p className="font-headline-sm text-headline-sm text-on-surface">
                  50B Du Plooy Street, Bethal
                </p>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Immediate drop-off, test bench booking, &amp; express print
                  counter access.
                </p>

                <div className="flex flex-col gap-space-xs pt-space-xs font-label-md text-label-md text-on-surface sm:flex-row sm:items-center sm:justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      schedule
                    </span>
                    Mon - Fri: 08:00 - 18:00
                  </span>

                  <span className="text-on-surface-variant">
                    Sat: 09:00 - 14:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STICKY QUICK-JUMP NAVIGATION
      ============================================================ */}

      <div className="sticky top-20 z-40 bg-surface/95 px-gutter-mobile py-space-sm shadow-sm backdrop-blur-md md:px-gutter-desktop">
        <div className="mx-auto flex max-w-[80rem] flex-col justify-between gap-space-sm md:flex-row md:items-center">
          {/* TECH */}

          <div className="flex items-center gap-space-xs overflow-x-auto pb-1 md:pb-0">
            <span className="mr-1 flex shrink-0 items-center gap-1 font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
              <span className="material-symbols-outlined text-[16px]">
                memory
              </span>
              Tech:
            </span>

            <a
              href="#tech-repairs"
              className="flex shrink-0 items-center gap-1 rounded-full bg-surface-container px-3 py-1.5 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container-high"
            >
              Repairs
            </a>

            <a
              href="#tech-custom-rigs"
              className="shrink-0 rounded-full bg-surface-container px-3 py-1.5 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container-high"
            >
              PC Builds &amp; Sales
            </a>

            <a
              href="#tech-printing-fleet"
              className="shrink-0 rounded-full bg-surface-container px-3 py-1.5 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container-high"
            >
              Printing &amp; Fleet Rentals
            </a>

            <a
              href="#tech-sars-efiling"
              className="flex shrink-0 items-center gap-1 rounded-full bg-surface-container px-3 py-1.5 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-surface-container-high"
            >
              <span className="material-symbols-outlined text-[15px]">
                account_balance
              </span>
              SARS eFiling
            </a>
          </div>

          {/* CREATIVE */}

          <div className="flex items-center gap-space-xs overflow-x-auto pb-1 md:pb-0">
            <span className="mr-1 flex shrink-0 items-center gap-1 font-label-sm text-label-sm font-bold uppercase tracking-wider text-tertiary-container">
              <span className="material-symbols-outlined text-[16px]">
                auto_awesome
              </span>
              Creative:
            </span>

            <a
              href="#creative-branding"
              className="shrink-0 rounded-full bg-tertiary-fixed/60 px-3 py-1.5 font-label-md text-label-md text-on-tertiary-fixed transition-colors hover:bg-tertiary-fixed"
            >
              Graphic &amp; Brand Design
            </a>

            <a
              href="#creative-photo-studio"
              className="flex shrink-0 items-center gap-1 rounded-full bg-tertiary-fixed/60 px-3 py-1.5 font-label-md text-label-md text-on-tertiary-fixed transition-colors hover:bg-tertiary-fixed"
            >
              Studio &amp; Biometrics
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================
          TECH SERVICE 1 — REPAIRS
      ============================================================ */}

      <section
        id="tech-repairs"
        className="scroll-mt-36 bg-surface px-gutter-mobile py-space-3xl md:px-gutter-desktop"
      >
        <div className="mx-auto flex max-w-[80rem] flex-col gap-space-xl">
          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
            <div>
              <div className="mb-1 flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  home_repair_service
                </span>
                Technical Division 01
              </div>

              <h2 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
                Laptop, Desktop &amp; Logic Board Repairs
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="rounded-full bg-[#DCFCE7] px-3 py-1 font-label-sm text-label-sm text-[#15803D]">
                No-Fix No-Fee Policy
              </span>

              <span className="rounded-full bg-surface-container-high px-3 py-1 font-label-sm text-label-sm text-on-surface">
                90-Day BCC Warranty
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
            <div className="flex flex-col gap-space-md lg:col-span-5">
              <div className="relative h-72 overflow-hidden rounded-xl shadow-sm">
                <img
                  src={repairsBench}
                  alt="BCC electronic repair bench and diagnostic workstation"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-inverse-on-surface">
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                    Diagnostic Lab A
                  </p>

                  <p className="font-title-md text-title-md font-semibold">
                    Micro-Soldering &amp; Clean-Room Data Extraction
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container-low p-space-md shadow-sm">
                <h3 className="flex items-center gap-2 font-title-md text-title-md text-on-surface">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    timer
                  </span>
                  Turnaround Expectations &amp; In-Lab Queue
                </h3>

                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="rounded-lg bg-surface-container-lowest p-space-sm">
                    <span className="block font-label-sm text-label-sm text-on-surface-variant">
                      Bench Diagnostic
                    </span>

                    <span className="font-headline-sm text-headline-sm text-primary">
                      45 Mins
                    </span>

                    <span className="mt-1 block font-label-sm text-label-sm text-on-surface">
                      Same-day triage walk-in
                    </span>
                  </div>

                  <div className="rounded-lg bg-surface-container-lowest p-space-sm">
                    <span className="block font-label-sm text-label-sm text-on-surface-variant">
                      Board Component Fix
                    </span>

                    <span className="font-headline-sm text-headline-sm text-secondary">
                      24 - 48 Hrs
                    </span>

                    <span className="mt-1 block font-label-sm text-label-sm text-on-surface">
                      SMD / BGA chip-level reflow
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-lg bg-primary/10 p-space-sm font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-[18px] text-primary">
                    info
                  </span>

                  <span>
                    <strong>VIP Intake Lane:</strong> Book an online slot in
                    advance to skip the standard triage queue and have a
                    dedicated diagnostic technician assigned immediately upon
                    arrival.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-md lg:col-span-7">
              <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
                <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
                  <div className="flex items-center gap-2 font-title-md text-title-md font-semibold text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      developer_board
                    </span>
                    Logic Board Micro-Soldering
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Liquid damage ultrasonic cleaning, blown MOSFET / capacitor
                    replacement, power rails tracing, and SMC/T2 bypass
                    diagnostics.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
                  <div className="flex items-center gap-2 font-title-md text-title-md font-semibold text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      screenshot_monitor
                    </span>
                    Retina &amp; OLED Screen Replacement
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Genuine OEM assembly replacements for Apple MacBook Pro/Air,
                    Dell XPS, Lenovo ThinkPad, HP Spectre, and Asus ROG
                    displays.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
                  <div className="flex items-center gap-2 font-title-md text-title-md font-semibold text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      battery_charging_full
                    </span>
                    Battery Swaps &amp; Thermal Care
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Degraded battery replacements (CE-certified cycles), dual
                    fan bearing lubrication, and high-performance Arctic MX-6
                    thermal paste repasting.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
                  <div className="flex items-center gap-2 font-title-md text-title-md font-semibold text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      lock_reset
                    </span>
                    Clean Room Data Recovery
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Encrypted NVMe SSD extraction, clicking HDD platter
                    salvaging, BitLocker/FileVault key preservation, and
                    rootkit virus eradication.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start justify-between gap-space-md rounded-xl bg-surface-container p-space-lg sm:flex-row sm:items-center">
                <div>
                  <p className="font-title-md text-title-md text-on-surface">
                    Walk in today or reserve your VIP diagnostic bay.
                  </p>

                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Free quote delivered via SMS &amp; email before any
                    chargeable work begins.
                  </p>
                </div>

                <a
                  href="tel:+27769328706"
                  className="inline-flex shrink-0 items-center gap-space-xs rounded-lg bg-primary-container px-space-md py-space-sm font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_month
                  </span>
                  Book Diagnostic Intake Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TECH SERVICE 2 — CUSTOM RIGS
      ============================================================ */}

      <section
        id="tech-custom-rigs"
        className="scroll-mt-36 bg-surface-container-low px-gutter-mobile py-space-3xl md:px-gutter-desktop"
      >
        <div className="mx-auto flex max-w-[80rem] flex-col gap-space-xl">
          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
            <div>
              <div className="mb-1 flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  speed
                </span>
                Technical Division 02
              </div>

              <h2 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
                Custom Rig Engineering &amp; Certified Hardware Sales
              </h2>
            </div>

            <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
              Bespoke performance computers engineered for architects,
              animators, and competitive esports athletes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-3">
            <div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between gap-space-sm">
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-primary">
                    Tier: Studio &amp; Simulation
                  </span>

                  <span className="rounded-full bg-secondary-container px-2 py-0.5 font-label-sm text-label-sm text-on-secondary-fixed">
                    Built to Order
                  </span>
                </div>

                <h3 className="font-title-md text-title-md text-on-surface">
                  Hardline Liquid-Cooled Gaming Rigs &amp; CAD Workstations
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Engineered for competitive 4K/240Hz gaming, DaVinci Resolve
                  Studio, and 3D modeling. Hardline acrylic cooling,
                  synchronized ARGB lighting, and whisper-quiet thermals under
                  100% rendering or gaming load.
                </p>

                <ul className="flex flex-col gap-2 pt-2 font-body-md text-body-md text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    Intel Core i9 / AMD Ryzen 9 + ECC DDR5
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    NVIDIA RTX 4080/4090 &amp; Ada Generation GPUs
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    48-Hour Unigine Heaven &amp; Cinebench thermal burn-in
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start justify-between gap-space-sm pt-space-sm sm:flex-row sm:items-center">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Lead time: 3-5 Working Days
                </span>

                <a
                  href="tel:+27769328706"
                  className="inline-flex items-center gap-1 rounded-lg bg-primary-container px-3 py-1.5 font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chat
                  </span>
                  Inquire for Quote
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between gap-space-sm">
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
                    Enterprise Retail Stock
                  </span>

                  <span className="rounded-full bg-surface-container px-2 py-0.5 font-label-sm text-label-sm text-on-surface">
                    In-Stock Now
                  </span>
                </div>

                <h3 className="font-title-md text-title-md text-on-surface">
                  Brand-New Enterprise Laptops (Lenovo, HP, Dell &amp; Monitors)
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Official South African distributor units. Ready
                  out-of-the-box with genuine Windows 11 Pro, Office 365 setup,
                  and BCC hardware onboarding.
                </p>

                <ul className="flex flex-col gap-2 pt-2 font-body-md text-body-md text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    Lenovo ThinkPad T &amp; X1 Carbon Series
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    Dell Latitude &amp; HP EliteBook G10 Fleet options
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check_circle
                    </span>
                    6-Month On-Site Manufacturer Cover
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start justify-between gap-space-sm pt-space-sm sm:flex-row sm:items-center">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Same-day dispatch
                </span>

                <a
                  href="tel:+27769328706"
                  className="inline-flex items-center gap-1 rounded-lg bg-primary-container px-3 py-1.5 font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chat
                  </span>
                  Inquire Stock
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between gap-space-sm">
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-[#15803D]">
                    Certified Refurbished
                  </span>

                  <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 font-label-sm text-label-sm text-[#15803D]">
                    A+ Grade Units
                  </span>
                </div>

                <h3 className="font-title-md text-title-md text-on-surface">
                  Certified Off-Lease MacBooks, ThinkPads &amp; iPhones
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Carefully inspected enterprise machines and devices
                  refreshed with clean batteries, pristine keyboards, A-grade
                  thermal compound, and pristine displays.
                </p>

                <ul className="flex flex-col gap-2 pt-2 font-body-md text-body-md text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#15803D]">
                      check_circle
                    </span>
                    Apple Silicon M1/M2 MacBooks &amp; iPhone Pro series
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#15803D]">
                      check_circle
                    </span>
                    48-Point Diagnostic Checklist &amp; Battery Health &gt; 88%
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#15803D]">
                      check_circle
                    </span>
                    Full BCC 6-Month Hardware Guarantee
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start justify-between gap-space-sm pt-space-sm sm:flex-row sm:items-center">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Instant stock in Bethal
                </span>

                <a
                  href="tel:+27769328706"
                  className="inline-flex items-center gap-1 rounded-lg bg-primary-container px-3 py-1.5 font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chat
                  </span>
                  Inquire Stock
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-space-md rounded-xl bg-surface-container-high p-space-lg shadow-sm md:flex-row">
            <div className="flex items-center gap-space-md">
              <div className="shrink-0 rounded-lg bg-primary-container p-space-sm text-on-primary">
                <span className="material-symbols-outlined text-[32px]">
                  payments
                </span>
              </div>

              <div>
                <h4 className="font-title-md text-title-md font-semibold text-on-surface">
                  Flexible South African Payment &amp; Financing Plans
                </h4>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Interest-free 3-month store lay-by arrangements or verified
                  business asset tech financing with monthly terms through
                  major South African financial partners.
                </p>
              </div>
            </div>

            <a
              href="tel:+27769328706"
              className="inline-flex shrink-0 items-center gap-space-xs rounded-lg bg-on-surface px-space-md py-space-sm font-label-md text-label-md text-surface transition-colors hover:bg-inverse-surface"
            >
              <span className="material-symbols-outlined text-[18px]">
                tune
              </span>
              Configure Custom Rig / Check Stock in House
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          TECH SERVICE 3 — PRINTING & FLEET
      ============================================================ */}

      <section
        id="tech-printing-fleet"
        className="scroll-mt-36 bg-surface px-gutter-mobile py-space-3xl md:px-gutter-desktop"
      >
        <div className="mx-auto flex max-w-[80rem] flex-col gap-space-xl">
          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
            <div>
              <div className="mb-1 flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  print
                </span>
                Technical Division 03
              </div>

              <h2 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
                Commercial Printing, Copying &amp; Heavy-Duty Machine Fleet
                Rentals
              </h2>
            </div>

            <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm font-semibold text-primary">
              Instant Walk-In Counter + Corporate Fleet Leasing
            </span>
          </div>

          <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-low p-space-lg shadow-sm lg:col-span-5">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                    Walk-In Same-Day Print Desk
                  </h3>

                  <span className="material-symbols-outlined text-primary">
                    local_printshop
                  </span>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Immediate counter service with zero minimum page count.
                  Submit via USB flash, WhatsApp document sender, or secure
                  email dispatch.
                </p>

                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center justify-between rounded-lg bg-surface-container-lowest p-space-sm">
                    <div>
                      <p className="font-title-md text-[14px] font-semibold text-on-surface">
                        Legal Affidavits, CVs &amp; Documents
                      </p>

                      <p className="font-body-md text-[12px] text-on-surface-variant">
                        80gsm Mondi Rotatrim archival stock
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-title-md text-title-md font-bold text-primary">
                        R3
                      </span>

                      <span className="block font-label-sm text-label-sm text-on-surface-variant">
                        B&amp;W / R8 Color
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-surface-container-lowest p-space-sm">
                    <div>
                      <p className="font-title-md text-[14px] font-semibold text-on-surface">
                        Glossy Photographic Lab Prints
                      </p>

                      <p className="font-body-md text-[12px] text-on-surface-variant">
                        A6, A5, A4 up to A3+ luster paper
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-title-md text-title-md font-bold text-primary">
                        From R15
                      </span>

                      <span className="block font-label-sm text-label-sm text-on-surface-variant">
                        Per photo print
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-surface-container-lowest p-space-sm">
                    <div>
                      <p className="font-title-md text-[14px] font-semibold text-on-surface">
                        Architectural &amp; Engineering CAD
                      </p>

                      <p className="font-body-md text-[12px] text-on-surface-variant">
                        A2, A1, and full A0 blueprint plotting
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-title-md text-title-md font-bold text-primary">
                        From R45
                      </span>

                      <span className="block font-label-sm text-label-sm text-on-surface-variant">
                        Line draft / full render
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-surface-container-lowest p-space-sm">
                    <div>
                      <p className="font-title-md text-[14px] font-semibold text-on-surface">
                        Spiral &amp; Thermal Thesis Binding
                      </p>

                      <p className="font-body-md text-[12px] text-on-surface-variant">
                        Clear PVC front, leatherette backing
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-title-md text-title-md font-bold text-primary">
                        Enquire
                      </span>

                      <span className="block font-label-sm text-label-sm text-on-surface-variant">
                        Per bound volume
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-surface-container p-space-sm font-label-sm text-label-sm text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  high_res
                </span>

                <span>
                  <strong>Tiered Bulk Matrix:</strong> Automatic discounts of
                  15% to 35% on orders exceeding 250+ units for non-profits,
                  academic institutions, and law firms.
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-highest p-space-lg shadow-sm lg:col-span-7">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between gap-space-sm">
                  <span className="rounded-full bg-primary px-2.5 py-1 font-label-sm text-label-sm font-semibold uppercase tracking-wide text-on-primary">
                    Corporate Feature
                  </span>

                  <span className="font-label-sm text-label-sm text-on-secondary-container">
                    Short &amp; Long-Term Managed Agreements
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Heavy-Duty Commercial Machine Rentals &amp; Corporate Fleet
                  Leasing
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Eliminate capital expenditure and recurring maintenance
                  headaches with BCC&apos;s end-to-end managed print fleets.
                  We deploy high-volume multifunction laser copiers,
                  production finishers, and wide-format CAD plotters directly
                  to your premises with SLA guarantees.
                </p>

                <div className="grid grid-cols-1 gap-space-sm pt-2 sm:grid-cols-2">
                  <div className="flex flex-col gap-1 rounded-lg bg-surface-container-lowest p-space-sm shadow-sm">
                    <div className="flex items-center gap-1.5 font-title-md text-[14px] font-semibold text-primary">
                      <span className="material-symbols-outlined text-[18px]">
                        water_drop
                      </span>
                      All-Inclusive Consumables
                    </div>

                    <p className="font-body-md text-[12px] text-on-surface-variant">
                      Original OEM black and color toner cartridges delivered
                      proactively before machines run empty.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 rounded-lg bg-surface-container-lowest p-space-sm shadow-sm">
                    <div className="flex items-center gap-1.5 font-title-md text-[14px] font-semibold text-primary">
                      <span className="material-symbols-outlined text-[18px]">
                        published_with_changes
                      </span>
                      Zero-Downtime Hot Swaps
                    </div>

                    <p className="font-body-md text-[12px] text-on-surface-variant">
                      If a mechanical fault cannot be rectified within 4 hours,
                      a substitute identical unit is deployed instantly.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 rounded-lg bg-surface-container-lowest p-space-sm shadow-sm">
                    <div className="flex items-center gap-1.5 font-title-md text-[14px] font-semibold text-primary">
                      <span className="material-symbols-outlined text-[18px]">
                        engineering
                      </span>
                      Scheduled Preventative Care
                    </div>

                    <p className="font-body-md text-[12px] text-on-surface-variant">
                      Monthly on-site roller sanitization, laser mirror
                      alignment, firmware upgrades, and calibration.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 rounded-lg bg-surface-container-lowest p-space-sm shadow-sm">
                    <div className="flex items-center gap-1.5 font-title-md text-[14px] font-semibold text-primary">
                      <span className="material-symbols-outlined text-[18px]">
                        security
                      </span>
                      Pin &amp; Badge Access Control
                    </div>

                    <p className="font-body-md text-[12px] text-on-surface-variant">
                      Departmental billing tracking, individual staff quota
                      limits, and POPIA compliant print release.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between gap-space-sm rounded-xl bg-surface-container-lowest p-space-md sm:flex-row">
                <div>
                  <p className="font-title-md text-[14px] font-semibold text-on-surface">
                    Tailored for Schools, Law Chambers &amp; Creative Agencies
                  </p>

                  <p className="font-body-md text-[12px] text-on-surface-variant">
                    Monthly flexible rentals from 30 days to 36-month
                    full-service leases.
                  </p>
                </div>

                <a
                  href="tel:+27769328706"
                  className="inline-flex shrink-0 items-center gap-space-xs rounded-lg bg-primary px-space-md py-space-sm font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary-container"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    request_quote
                  </span>
                  Request Fleet Rental Proposal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TECH SERVICE 4 — SARS E-FILING
      ============================================================ */}

      <section
        id="tech-sars-efiling"
        className="scroll-mt-36 bg-surface-container-low px-gutter-mobile py-space-3xl md:px-gutter-desktop"
      >
        <div className="mx-auto flex max-w-[80rem] flex-col gap-space-xl">
          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
            <div>
              <div className="mb-1 flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  gavel
                </span>
                Technical Division 04
              </div>

              <h2 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
                Accredited SARS Tax E-Filing Walk-Through Assistance
              </h2>
            </div>

            <div className="flex items-center gap-1.5 rounded-full bg-surface-container px-space-md py-space-xs font-label-md text-label-md text-primary">
              <span className="material-symbols-outlined text-[18px]">
                shield
              </span>

              <span>Air-Gapped Private Practitioner Terminal (Not Self-Service)</span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-space-md rounded-xl bg-surface-container-highest p-space-md shadow-sm md:flex-row md:items-center">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined mt-0.5 shrink-0 text-[28px] text-primary">
                event_note
              </span>

              <div>
                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  Tax Season Deadlines &amp; POPIA Compliance Guarantee
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Non-provisional individual filings close late October;
                  provisional taxpayers submit by late January. All supporting
                  client documentation undergoes on-site shredding or encrypted
                  flash return immediately post-submission.
                </p>
              </div>
            </div>

            <span className="shrink-0 rounded-full bg-primary px-3 py-1 font-label-sm text-label-sm text-on-primary">
              Live Bench Support
            </span>
          </div>

          <div className="grid grid-cols-1 gap-space-sm md:grid-cols-5">
            <div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-container font-headline-sm text-[15px] font-bold text-on-primary">
                    01
                  </span>

                  <span className="material-symbols-outlined text-[20px] text-outline">
                    inventory_2
                  </span>
                </div>

                <h4 className="font-title-md text-[15px] font-semibold leading-tight text-on-surface">
                  Document Triage Checklist
                </h4>

                <p className="font-body-md text-[13px] text-on-surface-variant">
                  We inspect your Green Barcoded ID / Smart Card,
                  IRP5/IT3(a) certificates, medical aid tax statement,
                  RAF/retirement annuities, and travel logbooks.
                </p>
              </div>

              <div className="font-label-sm text-[11px] font-bold uppercase tracking-wider text-primary">
                Phase 1: Verification
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container font-headline-sm text-[15px] font-bold text-primary">
                    02
                  </span>

                  <span className="material-symbols-outlined text-[20px] text-outline">
                    manage_accounts
                  </span>
                </div>

                <h4 className="font-title-md text-[15px] font-semibold leading-tight text-on-surface">
                  Profile &amp; Credential Reset
                </h4>

                <p className="font-body-md text-[13px] text-on-surface-variant">
                  Resolve locked profiles, expired passwords, updated cell
                  numbers, or activate your primary individual SARS eFiling
                  profile securely in real-time.
                </p>
              </div>

              <div className="font-label-sm text-[11px] font-bold uppercase tracking-wider text-primary">
                Phase 2: Authentication
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container font-headline-sm text-[15px] font-bold text-primary">
                    03
                  </span>

                  <span className="material-symbols-outlined text-[20px] text-outline">
                    calculate
                  </span>
                </div>

                <h4 className="font-title-md text-[15px] font-semibold leading-tight text-on-surface">
                  ITR12 / IRP6 Return Drafting
                </h4>

                <p className="font-body-md text-[13px] text-on-surface-variant">
                  Accredited tax practitioner reviews all standard deductions,
                  home office expenses, section 18A donations, and recalculates
                  pre-populated data.
                </p>
              </div>

              <div className="font-label-sm text-[11px] font-bold uppercase tracking-wider text-primary">
                Phase 3: Computation
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container font-headline-sm text-[15px] font-bold text-primary">
                    04
                  </span>

                  <span className="material-symbols-outlined text-[20px] text-outline">
                    send
                  </span>
                </div>

                <h4 className="font-title-md text-[15px] font-semibold leading-tight text-on-surface">
                  Submission &amp; ITA34 Audit
                </h4>

                <p className="font-body-md text-[13px] text-on-surface-variant">
                  Immediate electronic filing with SARS. Instant review of the
                  generated Notice of Assessment (ITA34) explaining refund or
                  payable balance.
                </p>
              </div>

              <div className="font-label-sm text-[11px] font-bold uppercase tracking-wider text-primary">
                Phase 4: Instant Result
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container font-headline-sm text-[15px] font-bold text-primary">
                    05
                  </span>

                  <span className="material-symbols-outlined text-[20px] text-outline">
                    verified
                  </span>
                </div>

                <h4 className="font-title-md text-[15px] font-semibold leading-tight text-on-surface">
                  Post-Filing &amp; Audit Support
                </h4>

                <p className="font-body-md text-[13px] text-on-surface-variant">
                  Uploading requested verification files to SARS audit portals,
                  dispute assistance, and Tax Clearance Certificate (TCS PIN)
                  generation.
                </p>
              </div>

              <div className="font-label-sm text-[11px] font-bold uppercase tracking-wider text-primary">
                Phase 5: Compliance
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-space-md rounded-xl bg-surface-container p-space-lg md:flex-row">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[28px] text-primary">
                lock
              </span>

              <div>
                <p className="font-title-md text-title-md font-semibold text-on-surface">
                  Avoid the SARS Branch Queues in Mpumalanga / Bethal
                </p>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Appointments take on average 25 minutes from intake to final
                  ITA34 download.
                </p>
              </div>
            </div>

            <a
              href="tel:+27769328706"
              className="inline-flex shrink-0 items-center gap-space-xs rounded-lg bg-primary-container px-space-md py-space-sm font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary"
            >
              <span className="material-symbols-outlined text-[18px]">
                schedule
              </span>
              Schedule SARS eFiling Appointment
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          CREATIVE SERVICE 1 — GRAPHIC DESIGN
      ============================================================ */}

      <section
        id="creative-branding"
        className="scroll-mt-36 bg-surface px-gutter-mobile py-space-3xl md:px-gutter-desktop"
      >
        <div className="mx-auto flex max-w-[80rem] flex-col gap-space-xl">
          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
            <div>
              <div className="mb-1 flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-tertiary">
                <span className="material-symbols-outlined text-[18px]">
                  brush
                </span>
                Creative Division 01
              </div>

              <h2 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
                Graphic Design, Vector Drafting &amp; Corporate Identity
              </h2>
            </div>

            <span className="rounded-full bg-tertiary-fixed px-3 py-1 font-label-sm text-label-sm font-semibold text-on-tertiary-fixed">
              24-48 Hour Concept Turnarounds
            </span>
          </div>

          <div className="grid grid-cols-1 items-center gap-space-lg lg:grid-cols-12">
            <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:col-span-7">
              <div className="flex flex-col gap-space-xs rounded-xl bg-surface-container-low p-space-md shadow-sm">
                <span className="material-symbols-outlined text-[24px] text-primary">
                  architecture
                </span>

                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  Vector Logo Design &amp; Redraws
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Rebuilding pixelated logos into infinitely scalable SVG, AI,
                  EPS vectors. Full new brand marks crafted from pencil sketch
                  to master branding guide.
                </p>
              </div>

              <div className="flex flex-col gap-space-xs rounded-xl bg-surface-container-low p-space-md shadow-sm">
                <span className="material-symbols-outlined text-[24px] text-primary">
                  contact_mail
                </span>

                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  Executive Collateral &amp; Cards
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Matte laminated 400gsm business cards with selective UV spot
                  varnish, raised gold foil stamping, and matching corporate
                  letterheads.
                </p>
              </div>

              <div className="flex flex-col gap-space-xs rounded-xl bg-surface-container-low p-space-md shadow-sm">
                <span className="material-symbols-outlined text-[24px] text-primary">
                  directions_car
                </span>

                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  Vehicle Wraps &amp; Pull-Up Banners
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Precision vehicle vinyl dielines for bakkies, panel vans, and
                  trailers. Standard and deluxe chrome cassette pull-up banners
                  for trade expos.
                </p>
              </div>

              <div className="flex flex-col gap-space-xs rounded-xl bg-surface-container-low p-space-md shadow-sm">
                <span className="material-symbols-outlined text-[24px] text-primary">
                  inventory
                </span>

                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  Packaging Dielines &amp; Social Kits
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Box structural dielines, bottle labels with barcode
                  allocation, plus cohesive Instagram/LinkedIn carousel
                  templates.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-space-md lg:col-span-5">
              <div className="relative h-64 overflow-hidden rounded-xl shadow-sm">
                <img
                  src={designWorkstation}
                  alt="BCC graphic design workstation"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-inverse-on-surface">
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-fixed">
                    Production Standards
                  </p>

                  <p className="font-title-md text-title-md font-semibold">
                    Pre-Flight CMYK Print Verification Included
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-space-xs rounded-xl bg-surface-container-highest p-space-md shadow-sm">
                <span className="font-title-md text-title-md font-semibold text-on-surface">
                  The BCC Studio Deliverable Suite
                </span>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Every completed project ships with a cloud repository
                  containing .AI source files, vector SVG, print-ready PDF with
                  bleed marks, and web-ready WebP/PNG assets.
                </p>

                <div className="pt-2">
                  <a
                    href="tel:+27769328706"
                    className="inline-flex items-center gap-space-xs rounded-lg bg-tertiary px-space-md py-space-sm font-label-md text-label-md text-on-tertiary shadow-sm transition-colors hover:bg-tertiary-container"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      stylus
                    </span>
                    Brief a Design Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CREATIVE SERVICE 2
          The supplied Stitch source contains only the section comment
          and no actual markup for this section.
      ============================================================ */}

      <section
        id="creative-photo-studio"
        className="scroll-mt-36 bg-surface-container-low px-gutter-mobile py-space-2xl md:px-gutter-desktop"
      >
        <div className="mx-auto max-w-[80rem]">
          <div className="rounded-xl bg-surface-container-highest p-space-lg">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-[26px] text-primary">
                photo_camera
              </span>

              <div>
                <p className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">
                  Creative Division 02
                </p>

                <h3 className="mt-space-xs font-title-md text-title-md font-semibold text-on-surface">
                  Professional Photography &amp; Studio Hire
                </h3>

                <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                  Studio &amp; biometric photography capabilities are part of
                  the BCC creative offering. The supplied Stitch source did
                  not contain the finished visual section for this division,
                  so no additional layout has been invented here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TECH SERVICE 5 — WEB / CLOUD / SOFTWARE
          LOCAL SYSTEMS IMAGE
      ============================================================ */}

      <section
        id="tech-web-software"
        className="scroll-mt-36 bg-surface-container-low px-gutter-mobile py-space-3xl md:px-gutter-desktop"
      >
        <div className="mx-auto flex max-w-[80rem] flex-col gap-space-xl">
          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
            <div>
              <div className="mb-1 flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  terminal
                </span>

                Software &amp; Digital Systems Division
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
                  Web Design, Cloud Software &amp; Store Ticketing Systems
                </h2>

                <span className="inline-flex animate-pulse items-center rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-on-primary shadow-sm ring-4 ring-primary-fixed">
                  New
                </span>
              </div>
            </div>

            <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm font-semibold text-primary">
              Full-Stack Web &amp; Enterprise Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-space-lg lg:grid-cols-12">
            <div className="flex flex-col gap-space-md lg:col-span-5">
              <div className="group relative h-72 overflow-hidden rounded-xl shadow-sm">
                <img
                  src={systemsImage}
                  alt="BCC systems, software and network technology environment"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-inverse-on-surface">
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                    BCC Digital Lab &amp; DevOps
                  </p>

                  <p className="font-title-md text-title-md font-semibold">
                    Cloud Ticketing, Dispatch &amp; E-Commerce Architecture
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-space-xs rounded-xl bg-surface-container p-space-md shadow-sm">
                <span className="flex items-center gap-2 font-title-md text-title-md font-semibold text-on-surface">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    verified
                  </span>
                  SLA &amp; Support Guarantee
                </span>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  All custom web applications and business systems include
                  automated hourly backups, 99.9% uptime hosting, and dedicated
                  technical maintenance SLAs with direct developer desk access
                  in Bethal.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href="tel:+27769328706"
                    className="inline-flex items-center gap-space-xs rounded-lg bg-primary-container px-space-md py-space-sm font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      call
                    </span>
                    Schedule System Discovery Call
                  </a>

                  <a
                    href="tel:+27769328706"
                    className="inline-flex items-center gap-space-xs rounded-lg bg-surface-container-highest px-space-md py-space-sm font-label-md text-label-md text-on-surface transition-colors hover:bg-secondary-fixed-dim"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      architecture
                    </span>
                    Request Architecture Scope
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:col-span-7">
              <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
                <div className="flex items-center gap-2 font-title-md text-title-md font-semibold text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    devices
                  </span>
                  Full-Stack Business Websites &amp; E-Commerce
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Responsive mobile-first company portals, custom catalog
                  showcases, and fast headless e-commerce stores optimized for
                  Google Core Web Vitals and local SEO dominance in Mpumalanga.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
                <div className="flex items-center gap-2 font-title-md text-title-md font-semibold text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    receipt_long
                  </span>
                  Store Ticketing, POS &amp; Order Dispatch
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Custom internal workflows for service shops, repair centers,
                  and trade distributors. Real-time customer SMS updates,
                  multi-bay technician triage queues, barcode intake, and live
                  inventory sync.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
                <div className="flex items-center gap-2 font-title-md text-title-md font-semibold text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    sync_alt
                  </span>
                  REST APIs, ERP Sync &amp; SA Payments
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Seamless integration with South African payment gateways
                  (PayFast, Ozow, Yoco) combined with robust bi-directional
                  sync to Sage, Xero, Pastel, and custom ERP databases.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
                <div className="flex items-center gap-2 font-title-md text-title-md font-semibold text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    cloud_done
                  </span>
                  Managed Cloud, PostgreSQL &amp; Domains
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  High-speed NVMe VPS infrastructure, automated multi-region
                  database backups, enterprise email inbox provisioning, SSL
                  certificates, and managed firewall security protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TECH SERVICE 6 — VEHICLE KEY PROGRAMMING
          LOCAL KEY PROGRAMMING IMAGE
      ============================================================ */}

      <section
        id="tech-auto-keys"
        className="scroll-mt-36 bg-surface px-gutter-mobile py-space-3xl md:px-gutter-desktop"
      >
        <div className="mx-auto flex max-w-[80rem] flex-col gap-space-xl">
          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
            <div>
              <div className="mb-1 flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  car_repair
                </span>

                Automotive Tech &amp; Diagnostic Lab
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
                  Vehicle Key Programming, Transponders &amp; Immobilizer
                  Diagnostics
                </h2>

                <span className="inline-flex animate-pulse items-center rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-on-primary shadow-sm ring-4 ring-primary-fixed">
                  New
                </span>
              </div>
            </div>

            <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm font-semibold text-primary">
              Bench &amp; Mobile Locksmith Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-space-lg lg:grid-cols-12">
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:col-span-7">
              <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container-low p-space-md shadow-sm">
                <div className="flex items-center gap-2 font-title-md text-title-md font-semibold text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    tablet_mac
                  </span>
                  Tablet OBD2 Diagnostics &amp; ECU Sync
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Handheld OBD2 diagnostic suites, anti-theft immobilizer
                  pairing, fault clearing, adaptation resets, and live data
                  telemetry for Japanese, European, and American vehicles.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container-low p-space-md shadow-sm">
                <div className="flex items-center gap-2 font-title-md text-title-md font-semibold text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    precision_manufacturing
                  </span>
                  Precision CNC Laser Key Cutting
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Automated Condor laser blade milling for sidewinder,
                  high-security groove, and double-sided key blanks. Restores
                  factory cutting tolerances directly from original bitting
                  codes.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container-low p-space-md shadow-sm">
                <div className="flex items-center gap-2 font-title-md text-title-md font-semibold text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    memory
                  </span>
                  EEPROM Microchip Reading &amp; PIN Extraction
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Direct desoldering and microchip programming for CAS, BCM,
                  and CEM modules. Safe PIN code extraction and all-keys-lost
                  emergency cryptographic matching.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 rounded-xl bg-surface-container-low p-space-md shadow-sm">
                <div className="flex items-center gap-2 font-title-md text-title-md font-semibold text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    key
                  </span>
                  Smart Proximity Fobs &amp; Flip Conversions
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Push-to-start smart fobs, rugged shell replacements, flip-key
                  upgrades, transponder chip clones (ID46, ID48, 8A, MQB), and
                  battery replacements on the spot.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-space-md lg:col-span-5">
              <div className="group relative h-72 overflow-hidden rounded-xl shadow-sm">
                <img
                  src={keyProgrammingImage}
                  alt="BCC vehicle key programming and automotive diagnostics workstation"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-inverse-on-surface">
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                    Specialized Bench Division
                  </p>

                  <p className="font-title-md text-title-md font-semibold">
                    All-Keys-Lost Recovery &amp; Transponder Clones
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-space-xs rounded-xl bg-surface-container-low p-space-md shadow-sm">
                <span className="flex items-center gap-2 font-title-md text-title-md font-semibold text-on-surface">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    speed
                  </span>
                  Fast In-Store Bench Turnaround
                </span>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Most standard transponder key duplicates and flip-key shells
                  cut and programmed within 25 to 45 minutes at our 50B Du
                  Plooy Street workshop.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href="tel:+27769328706"
                    className="inline-flex items-center gap-space-xs rounded-lg bg-primary px-space-md py-space-sm font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary-container"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      calendar_month
                    </span>
                    Book Key Programming Slot
                  </a>

                  <a
                    href="tel:+27769328706"
                    className="inline-flex items-center gap-space-xs rounded-lg bg-secondary-container px-space-md py-space-sm font-label-md text-label-md text-on-secondary-fixed transition-colors hover:bg-secondary-fixed-dim"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      emergency
                    </span>
                    Emergency Auto Locksmith Dispatch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TECH SERVICE 7 — CCTV / NETWORK
      ============================================================ */}

      <section
        id="tech-cctv-network"
        className="scroll-mt-36 bg-surface-container-low px-gutter-mobile py-space-3xl md:px-gutter-desktop"
      >
        <div className="mx-auto flex max-w-[80rem] flex-col gap-space-xl">
          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
            <div>
              <div className="mb-1 flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  router
                </span>

                Infrastructure &amp; Network Engineering
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
                  CCTV Surveillance Installation &amp; High-Speed Network
                  Planning
                </h2>

                <span className="inline-flex animate-pulse items-center rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-on-primary shadow-sm ring-4 ring-primary-fixed">
                  New
                </span>
              </div>
            </div>

            <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm font-semibold text-primary">
              Commercial, Estate &amp; SME Security
            </span>
          </div>

          <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-primary">
                  <span className="material-symbols-outlined text-[28px]">
                    videocam
                  </span>

                  <span className="rounded bg-primary/10 px-2 py-0.5 text-[11px] font-bold uppercase text-primary">
                    4K IP Optics
                  </span>
                </div>

                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  High-Definition CCTV &amp; AI Analytics
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  4K color night-vision IP dome and bullet cameras, AI
                  perimeter human/vehicle detection, multi-bay NVRs, and
                  zero-latency remote mobile monitoring via secure encrypted
                  apps.
                </p>
              </div>

              <div className="font-label-sm text-label-sm font-semibold text-primary">
                Ultra HD Night Vision &amp; NVR
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-primary">
                  <span className="material-symbols-outlined text-[28px]">
                    settings_ethernet
                  </span>

                  <span className="rounded bg-primary/10 px-2 py-0.5 text-[11px] font-bold uppercase text-primary">
                    Cat6 / Cat6A STP
                  </span>
                </div>

                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  Structured Network Cabling
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Clean commercial trunking, STP shielded Ethernet drops, patch
                  panel punching, cable certification testing, and tidy
                  wall/floor server rack cable grooming.
                </p>
              </div>

              <div className="font-label-sm text-label-sm font-semibold text-primary">
                Certified Data Trunking
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-primary">
                  <span className="material-symbols-outlined text-[28px]">
                    wifi
                  </span>

                  <span className="rounded bg-primary/10 px-2 py-0.5 text-[11px] font-bold uppercase text-primary">
                    Ubiquiti / MikroTik
                  </span>
                </div>

                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  Enterprise Wi-Fi &amp; PtP Links
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Ceiling-mount high-density Wi-Fi 6 access points, seamless
                  roaming mesh setup, and long-range Point-to-Point (PtP)
                  wireless links between farm workshops, warehouses, and
                  outbuildings.
                </p>
              </div>

              <div className="font-label-sm text-label-sm font-semibold text-primary">
                Long-Range Roaming Mesh
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-primary">
                  <span className="material-symbols-outlined text-[28px]">
                    security
                  </span>

                  <span className="rounded bg-primary/10 px-2 py-0.5 text-[11px] font-bold uppercase text-primary">
                    Dual-WAN Failover
                  </span>
                </div>

                <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                  Managed VLANs &amp; Dual-WAN Routing
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  Isolated traffic segmentation for POS terminals, guest Wi-Fi,
                  and CCTV video feeds. Automatic LTE/Fiber dual-WAN failover
                  to prevent transaction drops during outages.
                </p>
              </div>

              <div className="font-label-sm text-label-sm font-semibold text-primary">
                Business Continuity Ready
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-space-md rounded-xl bg-surface-container p-space-lg sm:flex-row sm:items-center">
            <div>
              <p className="font-title-md text-title-md font-semibold text-on-surface">
                Ready to secure your business premises or upgrade corporate
                connectivity?
              </p>

              <p className="font-body-md text-body-md text-on-surface-variant">
                We conduct free physical site surveys across Bethal, Secunda,
                Ermelo, and greater Mpumalanga.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="tel:+27769328706"
                className="inline-flex shrink-0 items-center gap-space-xs rounded-lg bg-primary-container px-space-md py-space-sm font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary"
              >
                <span className="material-symbols-outlined text-[18px]">
                  domain_verification
                </span>
                Book On-Site Assessment
              </a>

              <a
                href="tel:+27769328706"
                className="inline-flex shrink-0 items-center gap-space-xs rounded-lg bg-surface-container-highest px-space-md py-space-sm font-label-md text-label-md text-on-surface transition-colors hover:bg-secondary-fixed-dim"
              >
                <span className="material-symbols-outlined text-[18px]">
                  request_quote
                </span>
                Request Network &amp; CCTV Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES CLOSING CONTACT STRIP
      ============================================================ */}

      <section className="bg-surface-container-highest px-gutter-mobile py-space-2xl md:px-gutter-desktop">
        <div className="mx-auto grid max-w-[80rem] grid-cols-1 items-center gap-space-lg text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
              Central Bethal Hub
            </span>

            <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
              50B Du Plooy Street
            </span>

            <span className="font-body-md text-body-md text-on-surface-variant">
              50B Du Plooy Street, Bethal, Mpumalanga, 2310, South Africa
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
              Direct Dispatch &amp; WhatsApp Desk
            </span>

            <a
              href="tel:+27769328706"
              className="font-headline-sm text-headline-sm font-semibold text-primary hover:underline"
            >
              +27 76 932 8706
            </a>

            <span className="font-body-md text-body-md text-on-surface-variant">
              SMS, WhatsApp &amp; Voice Technical Triage
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
              Operating Hours
            </span>

            <span className="font-headline-sm text-[18px] font-semibold text-on-surface">
              Mon - Fri: 08:00 - 18:00
            </span>

            <span className="font-body-md text-body-md text-on-surface-variant">
              Saturdays: 09:00 - 14:00 | Closed Sundays &amp; Public Holidays
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES PAGE FOOTER
      ============================================================ */}

      <footer className="w-full bg-surface-container-low py-space-2xl">
        <div className="mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-space-md px-gutter-mobile md:flex-row md:px-gutter-desktop">
          <div className="flex items-center gap-space-sm">
            <img
              src={logo}
              alt="BCC Tech & Creative Centre"
              className="h-7 w-auto object-contain"
            />

            <span className="font-headline-sm text-headline-sm text-on-surface">
              BCC Tech &amp; Creative Centre
            </span>
          </div>

          <p className="text-center font-body-md text-body-md text-on-surface-variant md:text-left">
            © 2026 BCC Tech &amp; Creative Centre. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-space-lg">
            <a
              href="tel:+27769328706"
              className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
            >
              +27 76 932 8706
            </a>

            <span className="font-label-md text-label-md text-outline">
              Bethal, Mpumalanga, South Africa
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { NavLink ,Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

const navLinkClass = ({ isActive }) =>
  [
     "cursor-target",
    "inline-flex",
    "items-center",
    "justify-center",
    "shrink-0",
    "px-space-md",
    "py-space-sm",
    "rounded-xl",
    "font-label-md",
    "text-label-md",
    "leading-normal",
    "whitespace-nowrap",
    "transition-colors",
    "duration-200",
    isActive
      ? "bg-secondary-container text-on-secondary-fixed font-semibold shadow-sm"
      : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface",
  ].join(" ");

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_10px_rgba(0,0,0,0.06)]">
      <div className="h-24 max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop flex items-center justify-between gap-space-xl">

        {/* =====================================================
            BRAND
        ====================================================== */}
<NavLink
  to="/"
  className="flex items-center gap-space-sm md:gap-space-md shrink-0"
  aria-label="BCC Tech & Creative Centre home"
>
<img
  src={logo}
  alt="BCC Tech & Creative Centre"
  className="h-11 sm:h-12 md:h-14 lg:h-16 xl:h-18 w-auto max-w-[240px] object-contain"
/>

  <div className="flex flex-col">
    <span className="font-headline-sm text-headline-sm md:font-headline-md md:text-headline-md text-on-surface tracking-tight leading-tight">
      BCC
    </span>

    <span className="font-label-sm text-label-sm md:font-label-md md:text-label-md text-secondary tracking-wide">
      Living Tommorrow, Today
    </span>
  </div>
</NavLink>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav className="hidden lg:flex items-center gap-space-xs">

          {/* HOME */}
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          {/* SERVICES + DROPDOWN */}
          <div className="relative group shrink-0">

            <NavLink to="/services" className={navLinkClass}>
              <span className="flex items-center gap-space-2xs">
                Services

                <span className="material-symbols-outlined text-[19px]">
                  keyboard_arrow_down
                </span>
              </span>
            </NavLink>

<div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-space-sm invisible opacity-0 translate-y-1 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="w-[26rem] rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-2xl overflow-hidden">

                {/* Dropdown Header */}
                <div className="p-space-lg border-b border-outline-variant/30 bg-surface-container-low">

                  <p className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-primary">
                    Operating Divisions
                  </p>

                  <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                    4 Labs Active
                  </p>

                </div>

                {/* Dropdown Items */}
                <div className="p-space-xs">

                  {/* Repairs */}
                  <NavLink
                    to="/services#tech-services"
                    className="cursor-target flex items-start gap-space-md rounded-xl p-space-md hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary text-[21px]">
                      memory
                    </span>

                    <span className="flex flex-col gap-space-2xs">

                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        PC &amp; Laptop Repairs
                      </span>

                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Component-level diagnostics
                      </span>

                    </span>
                  </NavLink>

                  {/* Custom Builds */}
                  <NavLink
                    to="/services#tech-services"
                    className="cursor-target flex items-start gap-space-md rounded-xl p-space-md hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary text-[21px]">
                      water_drop
                    </span>

                    <span className="flex flex-col gap-space-2xs">

                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        Custom Builds &amp; Sales
                      </span>

                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Hard-line liquid cooling
                      </span>

                    </span>
                  </NavLink>

                  {/* Creative */}
                  <NavLink
                    to="/services#creative-studio"
                    className="cursor-target flex items-start gap-space-md rounded-xl p-space-md hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary text-[21px]">
                      palette
                    </span>

                    <span className="flex flex-col gap-space-2xs">

                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        Graphic Design &amp; Brand Systems
                      </span>

                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Corporate identities and collateral
                      </span>

                    </span>
                  </NavLink>

                  {/* Printing */}
                  <NavLink
                    to="/services#tech-services"
                    className="cursor-target flex items-start gap-space-md rounded-xl p-space-md hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary text-[21px]">
                      print
                    </span>

                    <span className="flex flex-col gap-space-2xs">

                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        Production Printing &amp; Binding
                      </span>

                      <span className="font-body-md text-body-md text-on-surface-variant">
                        CAD plots and document production
                      </span>

                    </span>
                  </NavLink>

                </div>
              </div>
            </div>
          </div>

          {/* ABOUT */}
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          {/* PORTFOLIO */}
          <NavLink to="/portfolio" className={navLinkClass}>
            Portfolio
          </NavLink>

        </nav>

        {/* =====================================================
            ACTIONS
        ====================================================== */}
        <div className="flex items-center gap-space-md">

          {/* Call Desk +27769328706 */}
          <a
            href="tel:+27769328706"
            className="cursor-target hidden xl:inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-xl font-label-md text-label-md font-medium text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] text-primary">
              call
            </span>

            <span>
              Call Desk +27769328706 
            </span>
          </a>

          {/* Book Repair */}
          <Link
            to="/#contact-intake"
            className="cursor-target inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors shadow-md"
          >
            <span className="material-symbols-outlined text-[20px]">
              build
            </span>

            <span>Book Repair</span>
          </Link>

        </div>

      </div>
    </header>
  );
}
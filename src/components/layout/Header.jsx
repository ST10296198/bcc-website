import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const navLinkClass = ({ isActive }) =>
  [
    "px-space-sm",
    "py-space-xs",
    "rounded-lg",
    "font-label-md",
    "text-label-md",
    "transition-colors",
    "duration-200",
    isActive
      ? "bg-secondary-container text-on-secondary-fixed font-semibold shadow-sm"
      : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface",
  ].join(" ");

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[80rem] mx-auto px-gutter-mobile md:px-gutter-desktop flex items-center justify-between gap-space-lg">
        {/* BRAND */}
        <NavLink
          to="/"
          className="flex items-center gap-space-sm shrink-0"
          aria-label="BCC Tech & Creative Centre home"
        >
          <img
            src={logo}
            alt="BCC Tech & Creative Centre"
            className="h-10 w-auto object-contain"
          />

          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-tight">
              BCC
            </span>

            <span className="font-label-sm text-label-sm text-secondary tracking-wide">
              Tech &amp; Creative
            </span>
          </div>
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-space-xs">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <div className="relative group">
            <NavLink to="/services" className={navLinkClass}>
              <span className="flex items-center gap-space-2xs">
                Services
                <span className="material-symbols-outlined text-[16px]">
                  keyboard_arrow_down
                </span>
              </span>
            </NavLink>

            <div className="absolute left-1/2 top-full -translate-x-1/2 pt-space-xs invisible opacity-0 translate-y-1 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <div className="w-96 rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-xl overflow-hidden">
                <div className="p-space-md border-b border-outline-variant/30 bg-surface-container-low">
                  <p className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-primary">
                    Operating Divisions
                  </p>

                  <p className="mt-space-2xs font-body-md text-body-md text-on-surface-variant">
                    4 Labs Active
                  </p>
                </div>

                <div className="p-space-xs">
                  <NavLink
                    to="/services#tech-services"
                    className="flex items-start gap-space-sm rounded-lg p-space-sm hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary">
                      memory
                    </span>

                    <span className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">
                        PC &amp; Laptop Repairs
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Component-level diagnostics
                      </span>
                    </span>
                  </NavLink>

                  <NavLink
                    to="/services#tech-services"
                    className="flex items-start gap-space-sm rounded-lg p-space-sm hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary">
                      water_drop
                    </span>

                    <span className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">
                        Custom Builds &amp; Sales
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Hard-line liquid cooling
                      </span>
                    </span>
                  </NavLink>

                  <NavLink
                    to="/services#creative-studio"
                    className="flex items-start gap-space-sm rounded-lg p-space-sm hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary">
                      palette
                    </span>

                    <span className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">
                        Graphic Design &amp; Brand Systems
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Corporate identities and collateral
                      </span>
                    </span>
                  </NavLink>

                  <NavLink
                    to="/services#tech-services"
                    className="flex items-start gap-space-sm rounded-lg p-space-sm hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary">
                      print
                    </span>

                    <span className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">
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

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/portfolio" className={navLinkClass}>
            Portfolio
          </NavLink>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-space-sm">
          <a
            href="tel:+27769328706"
            className="hidden xl:inline-flex items-center gap-space-2xs px-space-sm py-space-xs rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">
              call
            </span>

            Call Desk
          </a>

          <a
            href="#contact-intake"
            className="inline-flex items-center justify-center gap-space-2xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">
              build
            </span>
            Book Repair
          </a>
        </div>
      </div>
    </header>
  );
}
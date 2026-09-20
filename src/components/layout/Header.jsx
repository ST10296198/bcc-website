import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen((current) => !current);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_10px_rgba(0,0,0,0.06)]">
      {/* =====================================================
          MAIN HEADER
          Desktop remains unchanged
      ====================================================== */}

      <div className="h-20 lg:h-24 max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop flex items-center justify-between gap-space-xl">
        {/* =====================================================
            BRAND
        ====================================================== */}

        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-space-xs sm:gap-space-sm lg:gap-space-md shrink-0"
          aria-label="BCC Tech & Creative Centre home"
        >
          <img
            src={logo}
            alt="BCC Tech & Creative Centre"
            className="h-9 sm:h-10 md:h-11 lg:h-16 xl:h-18 w-auto max-w-[150px] sm:max-w-[180px] lg:max-w-[240px] object-contain"
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
            DO NOT CHANGE
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
            DESKTOP ACTIONS
            DO NOT CHANGE
        ====================================================== */}

        <div className="hidden lg:flex items-center gap-space-md">
          {/* Call Desk */}
          <a
            href="tel:+27769328706"
            className="cursor-target hidden xl:inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-xl font-label-md text-label-md font-medium text-on-surface hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] text-primary">
              call
            </span>

            <span>Call Desk +27769328706</span>
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

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="cursor-target lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="material-symbols-outlined text-[25px]">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION PANEL
      ====================================================== */}

      {mobileMenuOpen && (
        <>
          {/* Subtle page backdrop */}
          <button
            type="button"
            aria-label="Close navigation"
            onClick={closeMobileMenu}
            className="lg:hidden fixed inset-0 top-20 z-40 bg-on-surface/10 backdrop-blur-[2px]"
          />

          {/* Compact floating mobile menu */}
          <div className="lg:hidden absolute right-gutter-mobile top-full z-50 mt-space-sm w-[min(82vw,320px)]">
            <div className="overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface/95 shadow-2xl backdrop-blur-2xl">
              
              {/* Menu header */}
              <div className="flex items-center justify-between border-b border-outline-variant/20 px-space-md py-space-sm">
                <div>
                  <p className="font-label-sm text-label-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    Navigation
                  </p>

                  <p className="mt-0.5 text-[11px] text-on-surface-variant">
                    BCC Tech &amp; Creative Centre
                  </p>
                </div>

                <span className="material-symbols-outlined text-[20px] text-outline">
                  explore
                </span>
              </div>

              {/* Navigation */}
              <nav className="p-space-xs">

                {/* HOME */}
                <NavLink
                  to="/"
                  end
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-space-sm rounded-xl px-space-sm py-space-sm",
                      "font-label-md text-label-md font-semibold",
                      "transition-all duration-200",
                      isActive
                        ? "bg-secondary-container text-on-secondary-fixed"
                        : "text-on-surface hover:bg-surface-container",
                    ].join(" ")
                  }
                >
                  <span className="material-symbols-outlined text-[19px]">
                    home
                  </span>

                  <span className="flex-1">Home</span>

                  <span className="material-symbols-outlined text-[17px] opacity-40">
                    chevron_right
                  </span>
                </NavLink>

                {/* SERVICES */}
                <div className="mt-1">
                  <button
                    type="button"
                    onClick={toggleMobileServices}
                    className="w-full flex items-center gap-space-sm rounded-xl px-space-sm py-space-sm text-left font-label-md text-label-md font-semibold text-on-surface transition-all duration-200 hover:bg-surface-container"
                    aria-expanded={mobileServicesOpen}
                  >
                    <span className="material-symbols-outlined text-[19px] text-primary">
                      build
                    </span>

                    <span className="flex-1">Services</span>

                    <span className="material-symbols-outlined text-[19px]">
                      {mobileServicesOpen
                        ? "keyboard_arrow_up"
                        : "keyboard_arrow_down"}
                    </span>
                  </button>

                  {mobileServicesOpen && (
                    <div className="ml-space-lg mt-1 border-l-2 border-primary/20 pl-space-xs">
                      <NavLink
                        to="/services#tech-services"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-space-sm rounded-lg px-space-sm py-2 text-[12px] text-on-surface-variant hover:bg-surface-container"
                      >
                        <span className="material-symbols-outlined text-[17px] text-primary">
                          memory
                        </span>

                        <span>PC &amp; Laptop Repairs</span>
                      </NavLink>

                      <NavLink
                        to="/services#tech-services"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-space-sm rounded-lg px-space-sm py-2 text-[12px] text-on-surface-variant hover:bg-surface-container"
                      >
                        <span className="material-symbols-outlined text-[17px] text-primary">
                          water_drop
                        </span>

                        <span>Custom Builds &amp; Sales</span>
                      </NavLink>

                      <NavLink
                        to="/services#creative-studio"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-space-sm rounded-lg px-space-sm py-2 text-[12px] text-on-surface-variant hover:bg-surface-container"
                      >
                        <span className="material-symbols-outlined text-[17px] text-primary">
                          palette
                        </span>

                        <span>Graphic Design &amp; Brand Systems</span>
                      </NavLink>

                      <NavLink
                        to="/services#tech-services"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-space-sm rounded-lg px-space-sm py-2 text-[12px] text-on-surface-variant hover:bg-surface-container"
                      >
                        <span className="material-symbols-outlined text-[17px] text-primary">
                          print
                        </span>

                        <span>Production Printing</span>
                      </NavLink>

                      <NavLink
                        to="/services"
                        onClick={closeMobileMenu}
                        className="mt-1 flex items-center justify-center rounded-lg bg-surface-container px-space-sm py-2 text-[12px] font-semibold text-primary hover:bg-surface-container-high"
                      >
                        View All Services
                      </NavLink>
                    </div>
                  )}
                </div>

                {/* ABOUT */}
                <NavLink
                  to="/about"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    [
                      "mt-1 flex items-center gap-space-sm rounded-xl px-space-sm py-space-sm",
                      "font-label-md text-label-md font-semibold",
                      "transition-all duration-200",
                      isActive
                        ? "bg-secondary-container text-on-secondary-fixed"
                        : "text-on-surface hover:bg-surface-container",
                    ].join(" ")
                  }
                >
                  <span className="material-symbols-outlined text-[19px]">
                    info
                  </span>

                  <span className="flex-1">About</span>

                  <span className="material-symbols-outlined text-[17px] opacity-40">
                    chevron_right
                  </span>
                </NavLink>

                {/* PORTFOLIO */}
                <NavLink
                  to="/portfolio"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    [
                      "mt-1 flex items-center gap-space-sm rounded-xl px-space-sm py-space-sm",
                      "font-label-md text-label-md font-semibold",
                      "transition-all duration-200",
                      isActive
                        ? "bg-secondary-container text-on-secondary-fixed"
                        : "text-on-surface hover:bg-surface-container",
                    ].join(" ")
                  }
                >
                  <span className="material-symbols-outlined text-[19px]">
                    photo_library
                  </span>

                  <span className="flex-1">Portfolio</span>

                  <span className="material-symbols-outlined text-[17px] opacity-40">
                    chevron_right
                  </span>
                </NavLink>
              </nav>

              {/* Compact CTA */}
              <div className="border-t border-outline-variant/20 p-space-sm">
                <Link
                  to="/#contact-intake"
                  onClick={closeMobileMenu}
                  className="cursor-target flex items-center justify-center gap-space-xs rounded-xl bg-primary-container px-space-md py-space-sm font-label-md text-label-md font-semibold text-on-primary shadow-md transition-colors hover:bg-primary"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    build
                  </span>

                  Book Repair
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
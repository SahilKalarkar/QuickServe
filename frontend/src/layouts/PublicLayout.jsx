import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const PublicLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-sm font-medium transition-colors ${
      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
    }`;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                <Zap size={22} fill="currentColor" />
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight text-gray-900">
                  Quick<span className="text-blue-600">Serve</span>
                </h1>

                <p className="hidden text-[10px] font-medium uppercase tracking-wider text-gray-400 sm:block">
                  Services at your doorstep
                </p>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 lg:flex">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>

              <NavLink to="/how-it-works" className={navLinkClass}>
                How It Works
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <NavLink
                to="/login"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
              >
                Get Started
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="border-t border-gray-100 py-4 lg:hidden">
              <nav className="flex flex-col gap-1">
                <NavLink
                  to="/"
                  onClick={closeMobileMenu}
                  className={navLinkClass}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/services"
                  onClick={closeMobileMenu}
                  className={navLinkClass}
                >
                  Services
                </NavLink>

                <NavLink
                  to="/how-it-works"
                  onClick={closeMobileMenu}
                  className={navLinkClass}
                >
                  How It Works
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={closeMobileMenu}
                  className={navLinkClass}
                >
                  About
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={closeMobileMenu}
                  className={navLinkClass}
                >
                  Contact
                </NavLink>

                <div className="mt-3 flex gap-3 border-t border-gray-100 pt-4">
                  <NavLink
                    to="/login"
                    onClick={closeMobileMenu}
                    className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 text-center text-sm font-semibold text-gray-700"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/register"
                    onClick={closeMobileMenu}
                    className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
                  >
                    Get Started
                  </NavLink>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;

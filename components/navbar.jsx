"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">
                Nzuri Media
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/works">Works</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-foreground hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="/about" mobile>
              About
            </NavLink>
            <NavLink href="/services" mobile>
              Services
            </NavLink>
            <NavLink href="/contact" mobile>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, mobile = false }) {
  const baseClasses =
    "text-primary hover:bg-primary hover:text-primary-foreground rounded-md font-medium";
  const desktopClasses = "px-3 py-2 text-sm";
  const mobileClasses = "block px-3 py-2 text-base";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {children}
    </Link>
  );
}

"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function FooterComponent() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Nzuri Media Agency</h2>
            <p className="mb-4">
              Your premier partner in creative media solutions.
            </p>
            <div className="flex space-x-4">
              <SocialIcon
                href="https://facebook.com"
                icon={<Facebook size={20} />}
              />
              <SocialIcon
                href="https://instagram.com"
                icon={<Instagram size={20} />}
              />
              <SocialIcon
                href="https://twitter.com"
                icon={<Twitter size={20} />}
              />
              <SocialIcon
                href="https://linkedin.com"
                icon={<Linkedin size={20} />}
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#photography">
                  Photography & Videography
                </Link>
              </li>
              <li>
                <Link href="/services#graphic-design">Graphic Design</Link>
              </li>
              <li>
                <Link href="/services#brand-promotions">Brand Promotions</Link>
              </li>
              <li>
                <Link href="/services#social-media">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#branding">Branding Consultancy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                12a Luwum St, Kampala, Uganda
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                +254 123 456 789
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                hello@nzurimediaagency.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} Nzuri Media Agency. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-purple-300 transition-colors"
    >
      {icon}
    </a>
  );
}

"use client";

import {
  Camera,
  Video,
  Palette,
  Megaphone,
  Share2,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const services = [
    {
      icon: Camera,
      title: "Photography",
      desc: "Capture moments that matter",
      bgImage:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    },
    {
      icon: Video,
      title: "Videography",
      desc: "Bring your story to life",
      bgImage:
        "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1000&auto=format&fit=crop",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      desc: "Visualize your ideas",
      bgImage:
        "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1000&auto=format&fit=crop",
    },
    {
      icon: Megaphone,
      title: "Brand Promotions",
      desc: "Amplify your message",
      bgImage:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      desc: "Engage your audience",
      bgImage:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
    },
    {
      icon: Briefcase,
      title: "Branding Consultancy",
      desc: "Define your identity",
      bgImage:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-500 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Creative Solutions for Your Brand
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
            Elevate your brand with our comprehensive suite of creative
            services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative overflow-hidden rounded-lg ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 3
                  ? "lg:col-span-2"
                  : index === 5
                  ? "lg:col-span-1"
                  : ""
              }`}
              style={{
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity hover:bg-opacity-40" />
              <div className="relative h-full p-6 flex flex-col justify-between z-10">
                <service.icon className="h-10 w-10 mb-4 text-white" />
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-300">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

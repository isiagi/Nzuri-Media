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

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container px-4 mt-10 md:mt-0 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Nzuri Media Agency
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl">
            Elevate your brand with our creative expertise
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            className="col-span-2 row-span-2 p-6 rounded-lg bg-cover bg-center flex flex-col justify-end"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop')",
            }}
          >
            <div className="bg-black bg-opacity-60 p-4 rounded-lg">
              <Camera className="h-10 w-10 mb-2 text-blue-400" />
              <h2 className="text-2xl font-semibold">Photography</h2>
              <p className="text-sm text-gray-300">
                Capture your brand&apos;s essence
              </p>
            </div>
          </div>
          <div
            className="p-4 rounded-lg bg-cover bg-center flex flex-col justify-end"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1000&auto=format&fit=crop')",
            }}
          >
            <div className="bg-black bg-opacity-60 p-2 rounded-lg">
              <Video className="h-8 w-8 mb-1 text-green-400" />
              <h2 className="text-lg font-semibold">Videography</h2>
              <p className="text-xs text-gray-300">Bring your story to life</p>
            </div>
          </div>
          <div
            className="p-4 rounded-lg bg-cover bg-center flex flex-col justify-end"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D')",
            }}
          >
            <div className="bg-black bg-opacity-60 p-2 rounded-lg">
              <Palette className="h-8 w-8 mb-1 text-purple-400" />
              <h2 className="text-lg font-semibold">Graphic Design</h2>
              <p className="text-xs text-gray-300">Visualize your ideas</p>
            </div>
          </div>
          <div
            className="col-span-2 p-6 rounded-lg bg-cover bg-center flex flex-col justify-end"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nfGVufDB8fDB8fHww')",
            }}
          >
            <div className="bg-black bg-opacity-60 p-4 rounded-lg">
              <Megaphone className="h-10 w-10 mb-2 text-yellow-400" />
              <h2 className="text-2xl font-semibold">Brand Promotions</h2>
              <p className="text-sm text-gray-300">Amplify your message</p>
            </div>
          </div>
          <div
            className="p-4 rounded-lg bg-cover bg-center flex flex-col justify-end"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D')",
            }}
          >
            <div className="bg-black bg-opacity-60 p-2 rounded-lg">
              <Share2 className="h-8 w-8 mb-1 text-red-400" />
              <h2 className="text-lg font-semibold">Social Media Marketing</h2>
              <p className="text-xs text-gray-300">Engage your audience</p>
            </div>
          </div>
          <div
            className="p-4 rounded-lg bg-cover bg-center flex flex-col justify-end"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmRpbmd8ZW58MHx8MHx8fDA%3D')",
            }}
          >
            <div className="bg-black bg-opacity-60 p-2 rounded-lg">
              <Briefcase className="h-8 w-8 mb-1 text-orange-400" />
              <h2 className="text-lg font-semibold">Branding Consultancy</h2>
              <p className="text-xs text-gray-300">Define your identity</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-purple-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

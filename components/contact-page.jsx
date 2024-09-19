"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Palette, Share2, Instagram, Briefcase } from "lucide-react";

export function ContactPageComponent() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Nzuri Media Agency
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Your premier partner in photography, videography, graphic design,
              brand promotions, social media marketing, and branding
              consultancy.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Our Services
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <ServiceItem
                icon={<Camera className="w-6 h-6" />}
                title="Photography & Videography"
              />
              <ServiceItem
                icon={<Palette className="w-6 h-6" />}
                title="Graphic Design"
              />
              <ServiceItem
                icon={<Share2 className="w-6 h-6" />}
                title="Brand Promotions"
              />
              <ServiceItem
                icon={<Instagram className="w-6 h-6" />}
                title="Social Media Marketing"
              />
              <ServiceItem
                icon={<Briefcase className="w-6 h-6" />}
                title="Branding Consultancy"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Get in Touch
            </h2>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" className="h-32" />
              <Button className="w-full bg-black hover:bg-black text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-black">Visit Us</h2>
          <p className="text-gray-600">12a Luwum St, Kampala, Uganda</p>
          <p className="text-gray-600">Phone: +254 123 456 789</p>
          <p className="text-gray-600">Email: hello@nzurimediaagency.com</p>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
      {icon}
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
}

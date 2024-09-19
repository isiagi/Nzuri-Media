"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Camera,
  Video,
  Palette,
  Share2,
  Instagram,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ServicesPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="relative bg-purple-900 text-white py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Nzuri Media Agency Services"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Elevate your brand with Nzuri Media Agency's comprehensive suite of
            creative services
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16">
          <ServiceSection
            icon={<Camera className="w-12 h-12" />}
            title="Photography"
            description="Capture your brand's essence with our professional photography services. From product shoots to corporate events, we deliver high-quality visual content that tells your story."
            features={[
              "Professional product photography",
              "Corporate event coverage",
              "Lifestyle and brand imagery",
              "High-quality retouching and editing",
            ]}
            imageSrc="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          />

          <ServiceSection
            icon={<Video className="w-12 h-12" />}
            title="Videography"
            description="Bring your brand to life with our expert videography services. We create compelling video content that engages your audience and showcases your brand's unique personality."
            features={[
              "Corporate video production",
              "Product demonstrations and tutorials",
              "Event highlight reels",
              "Aerial videography with drones",
            ]}
            imageSrc="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          />

          <ServiceSection
            icon={<Palette className="w-12 h-12" />}
            title="Graphic Design"
            description="Our expert designers create stunning visuals that communicate your brand's message effectively. From logos and brochures to digital assets, we bring your ideas to life."
            features={[
              "Logo design and brand identity",
              "Print materials (brochures, flyers, business cards)",
              "Digital assets for web and social media",
              "Packaging design",
            ]}
            imageSrc="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          />

          <ServiceSection
            icon={<Share2 className="w-12 h-12" />}
            title="Brand Promotions"
            description="Boost your brand's visibility with our strategic promotion services. We create and execute campaigns that resonate with your target audience and drive engagement."
            features={[
              "Integrated marketing campaigns",
              "Event planning and execution",
              "Influencer partnerships",
              "Guerrilla marketing strategies",
            ]}
            imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          />

          <ServiceSection
            icon={<Instagram className="w-12 h-12" />}
            title="Social Media Marketing"
            description="Harness the power of social media with our tailored marketing strategies. We help you build a strong online presence, engage with your audience, and grow your brand across platforms."
            features={[
              "Social media strategy development",
              "Content creation and curation",
              "Community management and engagement",
              "Social media advertising campaigns",
            ]}
            imageSrc="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          />

          <ServiceSection
            icon={<Briefcase className="w-12 h-12" />}
            title="Branding Consultancy"
            description="Develop a strong, cohesive brand identity with our expert consultancy services. We work with you to define your brand's voice, values, and visual identity to stand out in the market."
            features={[
              "Brand strategy development",
              "Brand voice and messaging",
              "Visual identity guidelines",
              "Brand audit and repositioning",
            ]}
            imageSrc="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          />
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how Nzuri Media Agency can help you achieve your
            goals.
          </p>
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full">
              Get in Touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

function ServiceSection({ icon, title, description, features, imageSrc }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-purple-900 bg-opacity-70"></div>
        <CardHeader className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4 p-6 text-white">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">{icon}</div>
          <div className="text-center md:text-left">
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <CardDescription className="text-purple-100 mt-2">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-purple-700">
          Key Features:
        </h3>
        <ul className="grid gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="mr-2 h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

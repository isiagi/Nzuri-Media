"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  Zap,
  Camera,
  Video,
  Palette,
  Share2,
  Instagram,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutUsPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="relative h-[400px] bg-purple-900 text-white py-20 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Nzuri Media Agency Team"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Nzuri Media Agency
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering brands through creative excellence and strategic
            innovation
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4 text-gray-600">
                Founded in 2015, Nzuri Media Agency emerged from a passion for
                creativity and a vision to transform the media landscape in East
                Africa. Our journey began with a small team of dedicated
                professionals who believed in the power of innovative
                storytelling and strategic branding.
              </p>
              <p className="text-lg mb-4 text-gray-600">
                Over the years, we&apos;ve grown into a full-service agency,
                expanding our expertise across various media disciplines. Our
                commitment to excellence and our client-centric approach have
                allowed us to build lasting partnerships with brands across
                diverse industries.
              </p>
              <p className="text-lg text-gray-600">
                Today, Nzuri Media Agency stands as a beacon of creativity and
                strategic thinking, continuously pushing boundaries and setting
                new standards in the world of media and marketing.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Nzuri Media Agency Office"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Heart className="w-12 h-12 text-purple-600" />}
              title="Passion"
              description="We pour our heart into every project, driven by our love for creativity and innovation."
            />
            <ValueCard
              icon={<Users className="w-12 h-12 text-purple-600" />}
              title="Collaboration"
              description="We believe in the power of teamwork, both within our agency and with our clients."
            />
            <ValueCard
              icon={<Zap className="w-12 h-12 text-purple-600" />}
              title="Excellence"
              description="We strive for the highest quality in everything we do, constantly pushing our boundaries."
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">
            Our Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <ExpertiseCard
              icon={<Camera className="w-8 h-8" />}
              title="Photography"
            />
            <ExpertiseCard
              icon={<Video className="w-8 h-8" />}
              title="Videography"
            />
            <ExpertiseCard
              icon={<Palette className="w-8 h-8" />}
              title="Graphic Design"
            />
            <ExpertiseCard
              icon={<Share2 className="w-8 h-8" />}
              title="Brand Promotions"
            />
            <ExpertiseCard
              icon={<Instagram className="w-8 h-8" />}
              title="Social Media"
            />
            <ExpertiseCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Branding"
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Jane Doe"
              role="Founder & Creative Director"
              imageSrc="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
            />
            <TeamMember
              name="John Smith"
              role="Head of Photography"
              imageSrc="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
            />
            <TeamMember
              name="Emily Johnson"
              role="Lead Graphic Designer"
              imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
            />
            <TeamMember
              name="Michael Lee"
              role="Digital Marketing Specialist"
              imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
            />
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s create something amazing together.
          </p>
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full">
              Get in Touch
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <Card className="flex flex-col items-center text-center p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <CardContent className="text-gray-600">{description}</CardContent>
    </Card>
  );
}

function ExpertiseCard({ icon, title }) {
  return (
    <Card className="flex flex-col items-center justify-center p-4 h-32">
      <div className="mb-2">{icon}</div>
      <h3 className="text-sm font-semibold text-center">{title}</h3>
    </Card>
  );
}

function TeamMember({ name, role, imageSrc }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64">
        <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </CardContent>
    </Card>
  );
}

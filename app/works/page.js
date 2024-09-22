"use client";

import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgfull from "lightgallery/plugins/fullscreen";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function page() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/649235634/photo/pile-of-document-files.webp?a=1&b=1&s=612x612&w=0&k=20&c=YBme8prHVu9Azw0fr8GsaZrMXKd5-tmvk8El4OUXr6Y=",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              OUR PORTFOLIO
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Your premier partner in photography, videography, graphic design,
              brand promotions, social media marketing, and branding
              consultancy.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Tabs defaultValue="Photos" className="w-full grid">
          <TabsList className="justify-self-center my-5">
            <TabsTrigger value="Photos">Photos</TabsTrigger>
            <TabsTrigger value="Graphics">Graphics</TabsTrigger>
            <TabsTrigger value="Adverts">Adverts</TabsTrigger>
            <TabsTrigger value="Branding">Branding</TabsTrigger>
          </TabsList>
          <TabsContent value="Photos">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgfull]}
                thumbnail={true}
                rotate={true}
                hideControlOnEnd={true}
                elementClassNames="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8"
                mobileSettings={{
                  controls: false,
                  showCloseIcon: false,
                  download: false,
                  rotate: false,
                }}
                animateThumb={false}
                zoomFromOrigin={false}
                allowMediaOverlap={true}
                toggleThumb={true}
              >
                {
                  <>
                    <a
                      href={
                        "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      }
                      data-thumb="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=100&h=100&auto=format&fit=crop&q=60"
                      key={1}
                    >
                      <Image
                        alt="img1"
                        src={
                          "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </a>

                    <a
                      href={
                        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      }
                      data-thumb="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      key={2}
                    >
                      <Image
                        alt="img1"
                        src={
                          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </a>

                    <a
                      href={
                        "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      }
                      data-thumb="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      key={2}
                    >
                      <Image
                        alt="img1"
                        src={
                          "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </a>

                    <a
                      href={
                        "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      }
                      data-thumb="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=100&h=100&auto=format&fit=crop&q=60"
                      key={1}
                    >
                      <Image
                        alt="img1"
                        src={
                          "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </a>

                    <a
                      href={
                        "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      }
                      data-thumb="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=100&h=100&auto=format&fit=crop&q=60"
                      key={1}
                    >
                      <Image
                        alt="img1"
                        src={
                          "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                  </>
                }
              </LightGallery>
            </div>
          </TabsContent>
          <TabsContent value="Adverts">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgfull]}
                thumbnail={true}
                rotate={true}
                hideControlOnEnd={true}
                elementClassNames="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8"
                mobileSettings={{
                  controls: false,
                  showCloseIcon: false,
                  download: false,
                  rotate: false,
                }}
                animateThumb={false}
                zoomFromOrigin={false}
                allowMediaOverlap={true}
                toggleThumb={true}
              >
                {
                  <>
                    <a
                      href={
                        "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      }
                      data-thumb="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=100&h=100&auto=format&fit=crop&q=60"
                      key={1}
                    >
                      <Image
                        alt="img1"
                        src={
                          "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </a>

                    <a
                      href={
                        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      }
                      data-thumb="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      key={2}
                    >
                      <Image
                        alt="img1"
                        src={
                          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </a>

                    <a
                      href={
                        "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      }
                      data-thumb="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      key={2}
                    >
                      <Image
                        alt="img1"
                        src={
                          "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </a>

                    <a
                      href={
                        "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      }
                      data-thumb="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=100&h=100&auto=format&fit=crop&q=60"
                      key={1}
                    >
                      <Image
                        alt="img1"
                        src={
                          "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </a>

                    <a
                      href={
                        "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                      }
                      data-thumb="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=100&h=100&auto=format&fit=crop&q=60"
                      key={1}
                    >
                      <Image
                        alt="img1"
                        src={
                          "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                  </>
                }
              </LightGallery>
            </div>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default page;

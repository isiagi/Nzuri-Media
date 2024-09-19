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
import Image from "next/image";

function page() {
  return (
    <div>
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
        <LightGallery
          // onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          //   elementClassNames={styles.gallery__flex}
        >
          {
            <Image
              alt="img1"
              src={
                "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd29ya3N8ZW58MHx8MHx8fDA%3D"
              }
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          }
        </LightGallery>
      </div>
    </div>
  );
}

export default page;

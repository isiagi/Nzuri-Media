import localFont from "next/font/local";
import "./globals.css";
import { NavbarComponent } from "@/components/navbar";
import { FooterComponent } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nzuri Media",
  description:
    "Welcome to Nzuri Media Agency, your premier partner in photography, videography, graphic design, brand promotions, social media marketing, and branding consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}

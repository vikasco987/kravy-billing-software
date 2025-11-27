import PricingSection from "@/components/global/Home/Pricing";
import React from "react";
import { COMPANY } from "@/constants";

export const metadata = {
  title: `Pricing - ${COMPANY.name}`,
  description: `Explore ${COMPANY.name} pricing plans for hassle-free food photography and menu image uploads compatible with Swiggy and Zomato.`,
  keywords: [
    `${COMPANY.name} pricing`,
    "Swiggy menu images",
    "Zomato menu images",
    "restaurant image upload",
    "food photography services",
  ],
  authors: [{ name: `${COMPANY.name} Team`, email: COMPANY.email }],
  robots: "index, follow",
  openGraph: {
    title: `Pricing - ${COMPANY.name}`,
    description: `Discover affordable plans at ${COMPANY.name} for high-quality, ready-to-upload food photos.`,
    url: `${COMPANY.url}/pricing`,
    type: "website",
    images: [
      {
        url: `${COMPANY.url}/logo.png`,
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pricing - ${COMPANY.name}`,
    description: `Check out pricing for ${COMPANY.name} — the food photo library built for restaurants.`,
  },
};

const PricingPage = () => {
  return (
    <div className="w-full bg-grid h-full flex items-center justify-center py-16">
      <PricingSection />
    </div>
  );
};

export default PricingPage;

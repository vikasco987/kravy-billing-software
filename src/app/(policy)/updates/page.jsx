"use client";

import React from "react";
import { Rows, Zap, ShieldCheck, MessageCircle } from "lucide-react";
import Template from "@/components/global/template";

const updates = [
  {
    title: "August 4, 2025 – FoodSnap Launched 🎉",
    description: "India’s first pre-approved food image library is live.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        FoodSnap.in is officially live! Access thousands of high-quality,
        Swiggy/Zomato-approved food images for just ₹999/month. Perfect for
        restaurants, cloud kitchens, and menu creators who want fast, reliable,
        and beautiful visuals.
      </>
    ),
  },
  {
    title: "August 4, 2025 – Image Request Feature",
    description: "Can’t find a dish? Request it directly from the dashboard.",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Users can now submit requests for missing dishes. Our team will
        prioritize capturing and uploading the requested food image within 48–72
        hours. This ensures you always get what you need, fast.
      </>
    ),
  },
  {
    title: "Coming Soon – AI-Based Food Tagging",
    description: "Smarter search using dish names, cuisines, and ingredients.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We’re working on an AI-powered tagging system that will allow you to
        search food images by cuisine (e.g. North Indian, Italian), dish type
        (e.g. Starter, Dessert), and even core ingredients (e.g. Paneer,
        Chicken). Stay tuned!
      </>
    ),
  },
  {
    title: "Coming Soon – Mobile Experience Optimization",
    description: "A seamless image browsing and download experience on mobile.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We're improving the mobile interface to make food image browsing,
        previewing, and downloading smoother on the go. Get your visuals
        wherever you are, with zero friction.
      </>
    ),
  },
];

const contactData = {
  title: "Want To Request a Dish Image?",
  description:
    "Let us know if you can't find a particular food item. We'll prioritize it in the next batch.",
  content: (
    <div>
      <p className="mb-4">
        These updates reflect our mission to make professional food visuals
        accessible, affordable, and Swiggy/Zomato-ready. We love building based
        on your needs — don’t hesitate to get in touch.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:report@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          report@foodsnap.in
        </a>
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Product Updates"
      heading={
        <div>
          FoodSnap.in – <br className="hidden sm:block" /> Product Changelog
        </div>
      }
      description="See the latest updates to our food image library. All changes are aimed at helping you find, request, and use Swiggy/Zomato-approved images more easily."
      ctaDescription="Check back often for new features and fresh food image collections."
      ctaLink="/report-issue"
      ctaButton={
        <span className="flex items-center gap-2">
          <Zap className="w-4 h-4" />
          Request an Image
        </span>
      }
      infoData={updates}
      contactData={contactData}
    />
  );
};

export default page;

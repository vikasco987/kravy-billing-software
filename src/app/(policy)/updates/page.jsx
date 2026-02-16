"use client";

import React from "react";
import { Rows, Zap, ShieldCheck, MessageCircle } from "lucide-react";
import Template from "@/components/global/template";

const updates = [
  {
    title: "August 4, 2025 – Kravy Launched 🎉",
    description: "India’s one of the fastest billing software is live.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kravy.in is officially live! Manage your restaurant billing, orders, 
        and sales with a fast, reliable, 
        and easy-to-use system — all in one place for just ₹999/month. 
        Perfect for restaurants, cafés, cloud kitchens, 
        and food businesses that want smooth billing, 
        better control, and faster service.
      </>
    ),
  },
  {
    title: "December 4, 2025 – Bulk item Upload ",
    description: "owners can upload items using excel file.",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Users can now upload multiple menu items at once, 
        saving time and reducing manual work. Our system processes and organizes your items quickly, 
        helping you set up or update your menu in minutes. 
        Perfect for restaurants and cloud kitchens that need fast, 
        efficient menu management.
      </>
    ),
  },
  {
    title: "Coming Soon – AI-Based Daashbaord",
    description: "We’re building an AI-powered dashboard for Kravy Billing Software!",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Soon you’ll be able to analyze your business using smart AI insights — from sales trends 
        and top-selling items to customer behavior and revenue patterns. 
        The dashboard will help you quickly find key data, track performance, 
        and make better business decisions with minimal effort. Stay tuned!
      </>
    ),
  },
  {
    title: "Coming Soon – Mobile Experience Optimization",
    description: "A seamless image browsing and download experience on mobile.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We're improving the mobile interface to make billing,
        smoother on the go. Get your visuals
        wherever you are, with zero friction.
      </>
    ),
  },
];

const contactData = {
  title: "Want To Request a feautre?",
  description:
    "Have an idea that can improve your workflow?",
  content: (
    <div>
      <p className="mb-4">
        You can now submit feature requests directly from the dashboard. Tell us what you need, 
        how it helps your business, and our team will review it for future updates. 
        We build based on real user needs — so your feedback directly shapes the product.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:report@kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          report@kravy.in
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
          Kravy.in – <br className="hidden sm:block" /> Product Changelog
        </div>
      }
      description="See the latest updates to our kravy billing software. All changes are aimed at helping you billing more easily."
      ctaDescription="Check back often for new features and changelogs."
      ctaLink="/report-issue"
      ctaButton={
        <span className="flex items-center gap-2">
          <Zap className="w-4 h-4" />
          Request an Demo
        </span>
      }
      infoData={updates}
      contactData={contactData}
    />
  );
};

export default page;

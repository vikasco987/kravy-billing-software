"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const plans = [
  {
    key: "trial",
    name: "Trial Plan",
    price: "₹249",
    description: "Try Foodsnap with 15 image downloads.",
    features: [
      "15 image downloads",
      "Zomato & Swiggy approved photos",
      "High-quality food images",
    ],
    button: "Start Trial",
    link: "/payment/cart?plan=trial",
    highlight: false,
  },
  {
    key: "basic",
    name: "Basic Plan",
    price: "₹499",
    description: "Download 40 high-quality food images.",
    features: [
      "40 image downloads",
      "Zomato & Swiggy approved photos",
      "Access to trending photo packs",
      "High-quality images",
    ],
    button: "Get Basic Plan",
    link: "/payment/cart?plan=basic",
    highlight: false,
  },
  {
    key: "pro",
    name: "Pro Plan",
    price: "₹999",
    description: "Perfect for restaurants managing multiple listings.",
    features: [
      "100 image downloads",
      "Access to entire photo library",
      "Zomato & Swiggy approved photos",
      "Priority photo requests",
    ],
    button: "Go Pro",
    link: "/payment/cart?plan=pro",
    highlight: true,
  },
  {
    key: "unlimited",
    name: "Unlimited Plan",
    price: "₹1999",
    description: "Unlimited downloads and full premium access.",
    features: [
      "Unlimited downloads",
      "Full access to photo library",
      "Priority photo request handling",
      "Access to trending food packs",
    ],
    button: "Go Unlimited",
    link: "/payment/cart?plan=unlimited",
    highlight: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative px-4 py-16 md:py-24 text-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
      >
        Choose Your Perfect Plan
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
      >
        Simple, scalable pricing crafted for every food business — from cloud
        kitchens to fine dining.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <motion.div
            key={plan.key}
            whileHover={{
              scale: 1.04,
              y: -6,
              boxShadow: plan.highlight
                ? "0 10px 40px rgba(123, 97, 255, 0.3)"
                : "0 4px 20px rgba(0,0,0,0.08)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className={`flex flex-col justify-between relative p-6 rounded-2xl backdrop-blur-md border h-full transition-all duration-300 
              ${
                plan.highlight
                  ? "bg-gradient-to-br from-purple-100/70 to-indigo-50/50 dark:from-[#2a225a]/50 dark:to-[#14122e]/60 border-purple-300/50 dark:border-purple-400/30"
                  : "bg-white/70 dark:bg-[#121228]/50 border-gray-200/40 dark:border-gray-700/40"
              }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.price}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {plan.description}
              </p>
            </div>

            {/* Features */}
            <ul className="mt-auto space-y-3 text-gray-700 dark:text-gray-300 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <motion.a
              href={`https://app.foodsnap.in/${plan.link}`}
              whileTap={{ scale: 0.97 }}
              className={`mt-6 w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all 
                ${
                  plan.highlight
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200 dark:bg-[#ffffff10] dark:hover:bg-[#ffffff20] text-gray-900 dark:text-white"
                }`}
            >
              {plan.button} <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

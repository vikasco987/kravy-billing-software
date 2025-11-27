"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const outletComparisons = [
  {
    id: 1,
    before: {
      image: "/assets/b1.png",
      desc: "Dull and flat sales visuals that reduce appeal and conversions.",
    },
    after: {
      image: "/assets/a1.png",
      desc: "Clean, powerful billing interface that makes selling faster.",
    },
  },
  {
    id: 2,
    before: {
      image: "/assets/b3.png",
      desc: "Manual errors and slow billing that frustrate customers.",
    },
    after: {
      image: "/assets/a2.png",
      desc: "Smooth POS flow that handles rush hours without stress.",
    },
  },
];

export default function OutletCompare() {
  return (
    <section className="w-full px-4 py-16">
      {/* Heading */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Before vs After Using{" "}
          <span className="text-primary">Kravy Billing Software</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
          See how your billing and sales experience transforms with our software.
        </p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Carousel className="w-full">
          <CarouselContent>
            {outletComparisons.map((item) => (
              <CarouselItem key={item.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                  {/* Before Card */}
                  <div className="relative rounded-xl overflow-hidden border shadow-md bg-white dark:bg-neutral-900">
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs md:text-sm px-3 py-1 rounded-md z-10 font-semibold shadow-md">
                      BEFORE
                    </span>
                    <Image
                      src={item.before.image}
                      alt="Before using Kravy"
                      width={600}
                      height={500}
                      className="w-full h-64 md:h-80 object-cover filter grayscale brightness-75"
                    />
                    <div className="p-4">
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                        {item.before.desc}
                      </p>
                    </div>
                  </div>

                  {/* After Card */}
                  <div className="relative rounded-xl overflow-hidden border shadow-md bg-white dark:bg-neutral-900">
                    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs md:text-sm px-3 py-1 rounded-md z-10 font-semibold shadow-md">
                      AFTER
                    </span>
                    <Image
                      src={item.after.image}
                      alt="After using Kravy"
                      width={600}
                      height={500}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                        {item.after.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-x-0 translate-y-0" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </motion.div>
    </section>
  );
}

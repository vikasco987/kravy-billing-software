"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Sign Up & Login",
    desc: "Create your account and instantly access our curated dashboard.",
    img: "/assets/setup4.png",
  },
  {
    title: "Browse Photo Library",
    desc: "Explore high-resolution, Zomato & Swiggy-approved food images.",
    img: "/assets/setup6.png",
  },
  {
    title: "Filter by Cuisine or Dish",
    desc: "Find the perfect photos using tags, dish names, or categories.",
    img: "/assets/setup.png",
  },
  {
    title: "Download Instantly",
    desc: "Download unlimited approved images and use them right away.",
    img: "/assets/setup.png",
  },
  {
    title: "Get Menu Setup Help (Pro)",
    desc: "Let us transfer your Zomato menu to Swiggy or another outlet.",
    img: "/assets/setup.png",
  },
];

export default function AboutThisPlatform() {
  return (
    <section className="relative py-20 px-4 md:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          How Our Platform Works
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-lg flex flex-col items-start text-start"
            >
              <img
                src={step.img}
                alt={step.title}
                className="w-full object-cover rounded-xl mb-4 border border-white/10"
              />

              <h3 className="text-lg font-semibold mb-2">{i+1}. {step.title}</h3>
              <p className="text-sm text-neutral-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

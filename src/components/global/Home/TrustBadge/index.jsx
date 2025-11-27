"use client";

import { motion } from "framer-motion";

const badges = [
  {
    label: "Zomato Partner",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
  },
  {
    label: "SSL Secured",
    img: "https://www.ssl.com/wp-content/uploads/2020/11/ssl-secure-connection.png",
  },
  {
    label: "Verified Photos",
    img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  },
  {
    label: "Secure Payments",
    img: "https://cdn-icons-png.flaticon.com/512/891/891419.png",
  },
];

export default function TrustBadges() {
  return (
    <section className="w-full bg-zinc-900 text-white py-10 px-6 md:px-12 rounded-2xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Trusted by 100+ Restaurants
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center"
      >
        {badges.map((badge, index) => (
          <motion.div
            key={badge.label}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center space-y-2"
          >
            <img
              src={badge.img}
              alt={badge.label}
              className="h-16 w-16 object-contain drop-shadow-lg"
            />
            <p className="text-sm text-center">{badge.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

const IMAGES = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1755675301/photo_library/opjqpjkrdgnvekeakcqs.jpg",
    alt: "Chocolate Praline Cake",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1754555433/photo_library/iomtvj3tjyo1grxw6okl.jpg",
    alt: "Coconut Rava Paneer Dosa",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1754037540/photo_library/cduw7aiyvask99tnozsa.jpg",
    alt: "Idli Sambhar",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1753976890/photo_library/rjgr6oocmrtuqnd5uhm0.jpg",
    alt: "Rajma Chawal",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1755012042/photo_library/hfwwxqmkbg6lwcdmz8nj.jpg",
    alt: "Mango Shake",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1755624394/photo_library/tbxvfdrue5ir06gkukol.jpg",
    alt: "Classic Shroom Burger",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1755666819/photo_library/mr1jmddrsjk8yyq7uoj9.jpg",
    alt: "Paneer Tikka Roll ",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1755668981/photo_library/tzigt2ncbw9tq0vmfkvq.jpg",
    alt: "Veggie Balls and Veg Seekh Sub",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1755670902/photo_library/yxzzdpg4v6hajb09kdv7.jpg",
    alt: "Veg Momos Steam ",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1755670932/photo_library/nyrusrybnxbiunhzhzl0.jpg",
    alt: "Paneer Steamed Momos",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1755672979/photo_library/qlxyq5gmjs3ypenoho9x.jpg",
    alt: "Paneer Mexican Burrito Bowl",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1755675268/photo_library/k8llrdoy8mtnajlwvtlu.jpg",
    alt: "Biscoff Lotus Cake",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1754603593/photo_library/ptuqx105u3oi35dmekf1.jpg",
    alt: "Manchurian Gravy",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1754039070/photo_library/iyldhcxtdwpmx3z4ahho.jpg",
    alt: "Strawberry Milk Shake",
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1754232813/photo_library/e2k72kkjmhvq6f2aulj3.jpg",
    alt: "Dahi Vada",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dz2uuz5xv/image/upload/v1755635829/photo_library/wc3ursf1sxbgivktm0se.jpg",
    alt: "Soyabean Steam Momos",
  },
];

function MasonryItem({ img, index }) {
  return (
    <motion.figure
      className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.04, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="rounded-xl bg-black/45 px-3 py-2 text-xs text-white backdrop-blur">
          {img.alt}
        </div>
      </figcaption>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.figure>
  );
}

export default function MasonryGallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-8">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl text-center md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          High Quality converting food photos
        </h2>
        <p className="mt-4 text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover the transformative power of high-quality food photography.
        </p>
      </motion.div>

      <div
        className={[
          "[column-fill:_balance]",
          "columns-1 sm:columns-2 lg:columns-3 xl:columns-4",
          "gap-4",
        ].join(" ")}
      >
        {IMAGES.map((img, i) => (
          <MasonryItem key={img.id} img={img} index={i} />
        ))}
      </div>
    </section>
  );
}

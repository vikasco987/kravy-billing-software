import Template from "@/components/global/template";
import { Users, Rocket, Target, HeartHandshake } from "lucide-react";
import { COMPANY } from "@/constants";

const cardData = [
  {
    title: "Who We Are",
    description: `${COMPANY.NAME} is a smart billing software built for restaurants, cafés, and retail outlets.`,
    icon: <Users className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        At <strong>{COMPANY.NAME}</strong>, we provide a complete billing
        ecosystem — from <strong>POS software</strong> to{" "}
        <strong>thermal printer hardware</strong> — all integrated and ready to
        use out of the box.
        <br />
        <br />
        Whether you run a small shop or a multi-outlet restaurant, Kravy helps
        you manage billing, sales, and reports with ease. Simple setup, fast
        printing, cloud backup — everything just works.
      </>
    ),
  },
  {
    title: "Our Mission",
    description: "Empowering local businesses with modern, easy billing tools.",
    icon: <Target className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        Our mission is to help small business owners go digital — without
        complexity or huge costs.
        <br />
        <br />
        We aim to replace manual registers with a simple, connected, and
        reliable billing experience — saving time, preventing errors, and
        helping your business grow.
      </>
    ),
  },
  {
    title: "Meet Our Founder",
    description:
      "Built by entrepreneurs passionate about simplicity, tech, and business automation.",
    icon: <Rocket className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        <strong>Ajit Kushwaha</strong> is the founder of {COMPANY.NAME}, focused
        on simplifying billing and POS operations for everyday businesses.
        <br />
        <br />
        With a background in technology and product design, he leads Kravy with
        one goal — making billing faster, smarter, and accessible to everyone.
      </>
    ),
  },
  {
    title: "Our Values",
    description: "Reliable. Fast. Built for growth.",
    icon: <HeartHandshake className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        At {COMPANY.NAME}, we believe in:
        <ul className="list-disc ml-5 mt-2">
          <li>Speed and reliability — every bill should print instantly</li>
          <li>Ease of use — minimal setup, maximum efficiency</li>
          <li>Customer-first innovation — we build based on real needs</li>
        </ul>
      </>
    ),
  },
];

const contactData = {
  title: "Get in Touch",
  description:
    "Need help setting up your Kravy device or subscription? We're here for you.",
  content: (
    <div>
      <p className="mb-4">
        Our team is available to support you with installation, renewals, or
        technical queries about {COMPANY.NAME}.
      </p>
      <p>
        Email:{" "}
        <a
          href={`mailto:${COMPANY.EMAIL.SUPPORT}`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {COMPANY.EMAIL.SUPPORT}
        </a>
        <br />
        Phone:{" "}
        <a
          href={`tel:${COMPANY.PHONE}`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {COMPANY.PHONE}
        </a>
        <br />
        Address: {COMPANY.ADDRESS}
      </p>
    </div>
  ),
};

export const metadata = {
  title: `About ${COMPANY.NAME} – Smart Billing Software for Businesses`,
  description: `${COMPANY.NAME} provides a complete billing solution — combining software, hardware, and cloud technology for modern businesses.`,
  alternates: {
    canonical: `${COMPANY.DOMAIN}/about`,
    languages: {
      en: `${COMPANY.DOMAIN}/about`,
    },
  },
  openGraph: {
    title: `About ${COMPANY.NAME} – Smart Billing Software for Businesses`,
    description: `${COMPANY.NAME} offers an easy-to-use POS and billing system for restaurants and shops.`,
    url: `${COMPANY.DOMAIN}/about`,
    type: "website",
    images: [
      {
        url: COMPANY.LOGO,
        width: 1200,
        height: 630,
        alt: `${COMPANY.NAME} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${COMPANY.NAME} – Smart Billing Software for Businesses`,
    description: `${COMPANY.NAME} offers a complete POS billing solution for restaurants and small shops.`,
  },
};

export default function AboutPage() {
  return (
    <Template
      title={`About ${COMPANY.NAME}`}
      heading={<div>Smart Billing for Modern Businesses</div>}
      description={`${COMPANY.NAME} helps restaurants and retailers manage billing effortlessly with an all-in-one POS system.`}
      ctaDescription="Stay updated with new features, printer models, and product improvements from Kravy."
      ctaLink="/updates"
      ctaButton={
        <span className="flex items-center gap-2">
          <Rocket className="w-4 h-4" />
          View Updates
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
}

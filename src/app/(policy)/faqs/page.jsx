import React from "react";
import { Headset, Rows, Zap, ShieldCheck, MessageCircle } from "lucide-react";
import Template from "@/components/global/template";
import { COMPANY } from "@/constants";

export const metadata = {
  title: `FAQ - ${COMPANY.NAME}`,
  description: `Find answers to common questions about using ${COMPANY.NAME} — from billing setup, printer installation, subscriptions, to support.`,
  keywords: [
    "Kravy",
    "Billing Software",
    "POS",
    "Thermal Printer",
    "Restaurant Billing",
    "Retail Billing",
    "Support",
  ],
  authors: [{ name: `${COMPANY.NAME} Team`, url: COMPANY.DOMAIN }],
  openGraph: {
    title: `FAQ - ${COMPANY.NAME}`,
    description: `Find answers to common questions about using ${COMPANY.NAME} — from billing setup, printer installation, subscriptions, to support.`,
    url: `${COMPANY.DOMAIN}/faq`,
    siteName: COMPANY.NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `FAQ - ${COMPANY.NAME}`,
    description: `Find answers to common questions about using ${COMPANY.NAME} — from billing setup, printer installation, subscriptions, to support.`,
  },
};

const cardData = [
  {
    title: `What is ${COMPANY.NAME}?`,
    description: `${COMPANY.NAME} is a complete billing solution with software and printer hardware.`,
    icon: <Rows className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        {COMPANY.NAME} provides an all-in-one POS billing system for restaurants
        and small businesses. You get access to our smart billing app along with
        a plug-and-play thermal printer for fast and reliable billing.
      </>
    ),
  },
  {
    title: `How do I get started with ${COMPANY.NAME}?`,
    description: "Order your printer and activate your subscription to begin.",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        Getting started is easy! Simply visit{" "}
        <a
          href={COMPANY.DOMAIN}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {COMPANY.DOMAIN.replace("https://", "")}
        </a>
        , choose your plan, and subscribe. We’ll deliver your thermal printer
        and activate your billing account within 2–3 working days.
      </>
    ),
  },
  {
    title: "Do I need internet to use Kravy?",
    description: "Yes, an internet connection ensures smooth operation.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        {COMPANY.NAME} works both online and offline for basic billing. However,
        features like cloud backup, analytics, and reports require an internet
        connection.
      </>
    ),
  },
  {
    title: "Can I use Kravy without buying the printer?",
    description: "You can, but the full experience includes our printer.",
    icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        Yes, you can subscribe to the software only — but we highly recommend
        using it with our official thermal printer for the best speed and
        integration experience.
      </>
    ),
  },
  {
    title: "What are your pricing plans?",
    description: "Simple, affordable plans — software + printer bundle.",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        We offer flexible pricing depending on your business type. You can
        subscribe to software-only or the full bundle including hardware.
        <br />
        <a
          href={`${COMPANY.DOMAIN}/pricing`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          View our pricing plans
        </a>
        .
      </>
    ),
  },
  {
    title: "Can I cancel anytime?",
    description: "Yes, you can cancel your subscription easily.",
    icon: <Rows className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        You can cancel your active subscription anytime through your account
        dashboard or by contacting{" "}
        <a
          href={`mailto:${COMPANY.EMAIL.SUPPORT}`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {COMPANY.EMAIL.SUPPORT}
        </a>
        . Access continues until your billing cycle ends.
      </>
    ),
  },
  {
    title: "What kind of printer do you provide?",
    description: "We provide high-speed Bluetooth & USB thermal printers.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        {COMPANY.NAME} printers are plug-and-play 3-inch thermal printers
        designed for speed and reliability. They support Windows, Android, and
        web-based billing systems.
      </>
    ),
  },
  {
    title: "Do you offer setup and training?",
    description: "Yes, we provide free onboarding and training.",
    icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        Our support team will guide you through installation, setup, and billing
        training once your subscription is active.
      </>
    ),
  },
  {
    title: "Do you offer refunds?",
    description: "Refunds are subject to our cancellation policy.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        We currently don’t offer refunds after printer dispatch or software
        activation. You can cancel to stop future billing.{" "}
        <a
          href={`${COMPANY.DOMAIN}/refund-policy`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          View refund policy
        </a>
        .
      </>
    ),
  },
  {
    title: "How do I contact support?",
    description: "Our team is available 6 days a week via email or phone.",
    icon: <Headset className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        For any billing or hardware issues, contact us at{" "}
        <a
          href={`mailto:${COMPANY.EMAIL.SUPPORT}`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {COMPANY.EMAIL.SUPPORT}
        </a>{" "}
        or call{" "}
        <a
          href={`tel:${COMPANY.PHONE}`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {COMPANY.PHONE}
        </a>
        . We respond within business hours ({COMPANY.WORKING_HOURS}).
      </>
    ),
  },
];

const contactData = {
  title: "Still Have Questions?",
  description: `We’re happy to help you get the most out of ${COMPANY.NAME}. Reach out anytime.`,
  content: (
    <div>
      <p className="mb-4">
        Whether you need help with installation, printer setup, or billing
        renewal — our support team is here to assist you.
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

const page = () => {
  return (
    <Template
      title="Frequently Asked Questions"
      heading={
        <div>
          FAQs About <br className="hidden sm:block" />
          {COMPANY.NAME}
        </div>
      }
      description={`Find answers to common questions about ${COMPANY.NAME} — from subscriptions and printer setup to billing and support.`}
      ctaDescription="Can’t find what you're looking for? Contact our support team and we'll help you right away."
      ctaLink="/contact"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Ask a Question
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;

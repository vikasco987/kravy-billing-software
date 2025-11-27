import { Users, Rocket, Target, HeartHandshake } from "lucide-react";
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_ADDRESS,
} from "@/constants";

export const ABOUT_INFO = [
  {
    title: "Who We Are",
    description: `${COMPANY_NAME} is a smart, intuitive billing software built to help businesses automate invoicing, manage clients, and grow faster.`,
    icon: <Users className="w-6 h-6 text-green-500" />,
    content: (
      <>
        At {COMPANY_NAME}, we simplify billing for everyone — from freelancers
        to growing enterprises.
        <br />
        <br />
        Our platform helps you manage invoices, expenses, taxes, and reports —
        all from one powerful dashboard.
        <strong>No spreadsheets, no manual errors — just automation.</strong>
      </>
    ),
  },
  {
    title: "Our Mission",
    description: "Empowering businesses to focus on growth, not paperwork.",
    icon: <Target className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We aim to make financial management effortless and transparent.
        <br />
        <br />
        With {COMPANY_NAME}, businesses can save time, stay compliant, and make
        smarter decisions through data-driven insights.
      </>
    ),
  },
  {
    title: "Meet Our Founder",
    description:
      "Built by a developer passionate about design, automation, and scale.",
    icon: <Rocket className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <strong>Akash Verma</strong> — a software engineer and product builder
        — founded {COMPANY_NAME} to eliminate the friction in billing and
        financial management.
        <br />
        <br />
        His mission: to make billing so intuitive that it feels invisible.
      </>
    ),
  },
  {
    title: "Our Values",
    description: "Automation. Accuracy. Accessibility.",
    icon: <HeartHandshake className="w-6 h-6 text-green-500" />,
    content: (
      <>
        At {COMPANY_NAME}, we believe in:
        <ul className="list-disc ml-5 mt-2">
          <li>Saving time through intelligent automation</li>
          <li>Delivering accuracy you can trust</li>
          <li>Empowering every business to manage finances effortlessly</li>
        </ul>
      </>
    ),
  },
];

export const ABOUT_CONTACT = {
  title: "Get in Touch",
  description:
    "Have questions, suggestions, or partnership ideas? Let’s connect.",
  content: (
    <div>
      <p className="mb-4">
        We’d love to hear from you. Whether you're a startup or an established
        enterprise, our team is ready to help you simplify your billing
        workflow.
      </p>
      <p>
        Email:{" "}
        <a
          href={`mailto:${COMPANY_EMAIL}`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {COMPANY_EMAIL}
        </a>
        <br />
        Phone:{" "}
        <a
          href={`tel:${COMPANY_PHONE}`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {COMPANY_PHONE}
        </a>
        <br />
        Address: {COMPANY_ADDRESS}
      </p>
    </div>
  ),
};

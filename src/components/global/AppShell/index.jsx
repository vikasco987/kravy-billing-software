"use client";

import Header from "../Header";
import Footer from "../Footer";
import EnquiryModal from "../EnquiryModal"; // ✅ Correct Path

export default function AppShell({ children }) {
  return (
    <>
      {/* 🔔 Global Enquiry Popup (appears once per user) */}
      <EnquiryModal />

      {/* Global Header */}
      <Header />

      {/* Page content */}
      <div className="pt-12 min-h-screen">
        {children}
      </div>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
``

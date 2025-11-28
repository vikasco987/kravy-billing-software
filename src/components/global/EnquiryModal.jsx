"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquiryModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");        // ✅ NEW
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Show popup only if not already submitted
  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadySubmitted = window.localStorage.getItem("kravy-lead-submitted");
    if (!alreadySubmitted) {
      const timer = setTimeout(() => setOpen(true), 2000); // 2s delay
      return () => clearTimeout(timer);
    }
  }, []);

  const validatePhone = (value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length === 10; // simple Indian 10-digit check
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // ✅ now sending name + phone + source to DB/API
        body: JSON.stringify({
          name,
          phone,
          source: "popup",
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit. Try again.");
      }

      setSuccess("Thanks! We’ll contact you shortly.");
      if (typeof window !== "undefined") {
        window.localStorage.setItem("kravy-lead-submitted", "1");
      }

      setTimeout(() => {
        setOpen(false);
      }, 1500);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-50 inset-x-4 top-24 md:top-32 md:left-1/2 md:-translate-x-1/2 md:max-w-md rounded-2xl bg-white dark:bg-[#050816] border border-gray-200 dark:border-gray-700 shadow-2xl p-5"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Want Kravy for your shop?
                </h2>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  Share your details and we’ll call you with pricing and demo details.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 mt-2">
              {/* ✅ NEW NAME FIELD */}
              <div>
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Name (optional)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* PHONE FIELD (same as before) */}
              <div>
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter 10-digit mobile number"
                  className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {error && (
                <p className="text-xs text-red-500">
                  {error}
                </p>
              )}
              {success && (
                <p className="text-xs text-green-500">
                  {success}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white text-sm font-semibold py-2 rounded-lg"
              >
                {loading ? "Submitting..." : "Get Callback"}
              </button>

              <p className="text-[10px] text-gray-500 dark:text-gray-400 text-center">
                We respect your privacy. Your number will only be used for Kravy product communication.
              </p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

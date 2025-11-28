"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeaderClient() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  function closeAll() {
    setMobileOpen(false);
    setMobileAboutOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white" onClick={closeAll}>
              KRAVY
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/pricing" className="text-sm text-gray-700 dark:text-gray-300 hover:underline">Pricing</Link>

            <div className="relative group">
              <button className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300" aria-expanded="false">
                About <span className="text-xs">▾</span>
              </button>

              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
                <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">About Us</Link>
                <Link href="/about#vision" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Vision &amp; Mission</Link>
                <Link href="/features" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Features</Link>
                <Link href="/about#team" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Team</Link>
                <Link href="/careers" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Careers</Link>
              </div>
            </div>

            <Link href="/contact" className="text-sm text-gray-700 dark:text-gray-300 hover:underline">Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/demo" className="hidden md:inline-block rounded bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-indigo-700">Request Demo</Link>

            <button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`md:hidden bg-white dark:bg-gray-900 border-t transition-max-h duration-300 overflow-hidden ${mobileOpen ? "max-h-[800px]" : "max-h-0"}`}>
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link href="/pricing" onClick={closeAll} className="block px-2 py-2 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Pricing</Link>

            <div>
              <button
                onClick={() => setMobileAboutOpen((v) => !v)}
                className="flex w-full items-center justify-between px-2 py-2 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-expanded={mobileAboutOpen}
              >
                <span>About</span>
                <span className="ml-2">
                  {mobileAboutOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>

              <div className={`mt-2 pl-4 space-y-1 ${mobileAboutOpen ? "block" : "hidden"}`}>
                <Link href="/about" onClick={closeAll} className="block px-2 py-2 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-800">About Us</Link>
                <Link href="/about#vision" onClick={closeAll} className="block px-2 py-2 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Vision &amp; Mission</Link>
                <Link href="/features" onClick={closeAll} className="block px-2 py-2 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Features</Link>
                <Link href="/about#team" onClick={closeAll} className="block px-2 py-2 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Team</Link>
                <Link href="/careers" onClick={closeAll} className="block px-2 py-2 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Careers</Link>
              </div>
            </div>

            <Link href="/contact" onClick={closeAll} className="block px-2 py-2 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Contact</Link>

            <div className="pt-2">
              <Link href="/demo" onClick={closeAll} className="block text-center rounded bg-indigo-600 px-4 py-2 text-white">Request Demo</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

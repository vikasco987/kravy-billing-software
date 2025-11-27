"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { useCart } from "@/context/CartContext";

// Desktop nav links
const navLinks = [
  { title: "Products", href: "/products" },
  { title: "Updates", href: "/updates" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact Us", href: "/contact" },
  { title: "Pricing", href: "/pricing" },
];

// Mobile nav links
const navMobileLinks = [
  { title: "Products", href: "/products" },
  { title: "Updates", href: "/updates" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact Us", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
];

// Quick products list (mobile dropdown)
const productsList = [
  {
    id: "basic",
    name: "Kravy Billing Software Basic",
    priceLabel: "₹499/month",
    price: 499,
  },
  {
    id: "pos-pro",
    name: "Kravy POS System Pro",
    priceLabel: "₹899/month",
    price: 899,
  },
  {
    id: "inventory-addon",
    name: "Kravy Inventory Add-on",
    priceLabel: "₹299/month",
    price: 299,
  },
  {
    id: "analytics-pro",
    name: "Kravy Analytics Pro",
    priceLabel: "₹699/month",
    price: 699,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    totalItems,
    totalAmount,
  } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  const formatCurrency = (val) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <>
      {/* HEADER BAR */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl px-6 rounded-xl backdrop-blur-md bg-white/70 dark:bg-darkBackground/40 border border-gray-200 dark:border-gray-500 shadow-lg transition-all">
        <div className="flex items-center justify-between py-3">
          {/* LOGO */}
          <Link href="/" aria-label="Go to homepage">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-extrabold cursor-pointer text-black dark:text-white"
            >
              Kravy<span className="text-green-500">.in</span>
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-gray-700 dark:text-gray-200 group"
                >
                  {link.title}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Desktop CTA */}
            <motion.a
              href="https://app.foodsnap.in/sign-up?redirect=%2Fpricing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm font-semibold shadow"
            >
              Get Started
            </motion.a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-800" />
              )}
            </button>

            {/* Cart icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              <ShoppingCart size={20} className="text-gray-900 dark:text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-green-500 text-[11px] text-white flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden text-gray-900 dark:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden px-4 pb-4 pt-1 space-y-2 border-t border-gray-200 dark:border-gray-800"
            >
              {navMobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 border-b text-sm text-gray-900 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}

              {/* PRODUCTS DROPDOWN QUICK ADD */}
              <button
                onClick={() => setShowProducts((prev) => !prev)}
                className="flex justify-between items-center w-full py-2 border-b text-sm text-gray-900 dark:text-gray-100"
              >
                <span>Products (Quick Add)</span>
                {showProducts ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              <AnimatePresence>
                {showProducts && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-3 space-y-3 overflow-hidden"
                  >
                    {productsList.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {p.name}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-300">
                            {p.priceLabel}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            addToCart({
                              id: p.id,
                              name: p.name,
                              price: p.price,
                            })
                          }
                          className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 rounded-md"
                        >
                          Add
                        </button>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* View all products button */}
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-semibold"
              >
                View All Products
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* CART DRAWER */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-white dark:bg-[#050816] shadow-2xl border-l border-gray-200 dark:border-gray-700 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Your Cart
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-600 dark:text-gray-300"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                {cartItems.length === 0 ? (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Your cart is empty.
                  </p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start justify-between gap-3 bg-gray-50 dark:bg-gray-900/40 px-3 py-2 rounded-lg"
                    >
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {formatCurrency(item.price)} × {item.quantity}
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-xs"
                          >
                            -
                          </button>
                          <span className="text-sm min-w-[18px] text-center text-gray-900 dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQty(item.id)}
                            className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1"
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Total ({totalItems} item{totalItems !== 1 ? "s" : ""})
                  </span>
                  <span className="text-base font-semibold text-gray-900 dark:text-white">
                    {formatCurrency(totalAmount)}
                  </span>
                </div>

                <button
                  disabled={cartItems.length === 0}
                  onClick={() => {
                    if (!cartItems.length) return;
                    setIsCartOpen(false);
                    router.push("/checkout");
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 rounded-md text-sm font-semibold"
                >
                  Checkout
                </button>

                <button
                  onClick={clearCart}
                  disabled={cartItems.length === 0}
                  className="w-full text-xs text-gray-500 hover:text-red-500 flex items-center justify-center gap-1"
                >
                  <Trash2 size={14} />
                  Clear Cart
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

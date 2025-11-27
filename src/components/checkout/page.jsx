"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, totalAmount, clearCart } = useCart();

  const handlePayment = async () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded!");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: totalAmount * 100,
      currency: "INR",
      name: "Kravy Billing",
      description: "Software Subscription",
      theme: { color: "#10b981" },

      handler: function (response) {
        alert("Payment Success!");
        clearCart();
        router.push("/thank-you");
      },

      prefill: {
        name: "User",
        email: "user@example.com",
      },
    };

    const payment = new window.Razorpay(options);
    payment.open();
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id + item.cycle}
              className="border rounded-lg p-4 mt-4 dark:border-gray-700"
            >
              <p className="font-semibold">{item.name}</p>
              <p>
                ₹{item.price} × {item.quantity}
              </p>
              <p className="text-sm text-gray-500">
                Billing: {item.cycle}
              </p>
            </div>
          ))}

          <p className="text-xl font-bold mt-6">
            Total: ₹{totalAmount}
          </p>

          <button
            onClick={handlePayment}
            className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-semibold"
          >
            Pay Now
          </button>
        </>
      )}
    </section>
  );
}

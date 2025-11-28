// src/app/admin/page.jsx
import { connectToDatabase } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export const dynamic = "force-dynamic"; // always fresh

export default async function AdminDashboardPage() {
  await connectToDatabase();
  const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Enquiries Dashboard</h1>
            <p className="text-xs text-muted-foreground mt-1">
              All leads from popup, products page and other sources.
            </p>
          </div>

          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="text-xs px-3 py-1.5 border rounded-md hover:bg-destructive hover:text-destructive-foreground"
            >
              Logout
            </button>
          </form>
        </div>

        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full text-xs">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-3 py-2 text-left">Date</th>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">Phone</th>
                <th className="px-3 py-2 text-left">Product</th>
                <th className="px-3 py-2 text-left">Source</th>
                <th className="px-3 py-2 text-left">Message</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-3 py-4 text-center text-muted-foreground"
                  >
                    No enquiries yet.
                  </td>
                </tr>
              )}

              {enquiries.map((enq) => (
                <tr key={enq._id} className="border-t border-border/50">
                  <td className="px-3 py-2 align-top">
                    {new Date(enq.createdAt).toLocaleString("en-IN", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </td>
                  <td className="px-3 py-2 align-top">{enq.name || "-"}</td>
                  <td className="px-3 py-2 align-top">{enq.phone || "-"}</td>
                  <td className="px-3 py-2 align-top">
                    {enq.productName || "-"}
                  </td>
                  <td className="px-3 py-2 align-top">{enq.source || "-"}</td>
                  <td className="px-3 py-2 align-top max-w-[220px]">
                    <span className="line-clamp-3 text-[11px]">
                      {enq.message || "-"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

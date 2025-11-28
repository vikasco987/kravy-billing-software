// app/careers/page.jsx
export const metadata = {
  title: "Careers — Kravy",
  description: "Work with Kravy. Open roles in product, engineering and customer support. Join a small team building simple POS for shops.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Careers at Kravy</h1>
        <p className="mt-3 text-gray-700 max-w-2xl">
          We are a small team building easy billing tools for shopkeepers. If you like simple products and fast learning, join us.
        </p>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <JobCard title="Frontend Engineer" location="Remote / Rohtak" href="/careers/frontend" />
          <JobCard title="Customer Support" location="Rohtak, India" href="/careers/support" />
        </section>

        <div className="mt-10">
          <h3 className="text-lg font-semibold">How to apply</h3>
          <p className="mt-2 text-gray-700">
            Send your CV and a short note to <a href="mailto:hi@kravy.in" className="text-indigo-600">hi@kravy.in</a>. Mention the role name in the subject.
          </p>
        </div>
      </div>
    </main>
  );
}

function JobCard({ title, location, href }) {
  return (
    <div className="rounded border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <div className="text-sm text-gray-500">{location}</div>
        </div>
        <a href={href} className="text-sm rounded py-2 px-3 bg-indigo-600 text-white">Apply</a>
      </div>
    </div>
  );
}

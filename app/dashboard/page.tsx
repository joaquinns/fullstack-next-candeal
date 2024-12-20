export default function Dashboard() {
  return (
    <div className="mt-16">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold">Card {item}</h2>
            <p className="text-gray-600">
              This is a sample card for the dashboard layout.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

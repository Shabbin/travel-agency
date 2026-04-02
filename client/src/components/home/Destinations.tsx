const destinations = [
  {
    id: 1,
    name: "Hurawalhi Island",
    country: "Maldives",
    price: "$620",
    duration: "7 Days Tour on 2 person",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    name: "Bali Province",
    country: "Indonesia",
    price: "$780",
    duration: "4 days 2 person",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206",
  },
  {
    id: 3,
    name: "Barcelona City Beach",
    country: "Spain",
    price: "$850",
    duration: "4 days 4 person",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
  {
    id: 4,
    name: "Sydney Opera House",
    country: "Australia",
    price: "$310",
    duration: "7 days 2 person",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];

export default function Destinations() {
  return (
    <section className="section-space pt-6">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
            Popular destination
          </p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            The best place for vacation
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {destinations.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-[var(--primary)]">
                    {item.country}
                  </p>
                  <span className="text-sm font-medium text-gray-500">4.7</span>
                </div>

                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {item.duration}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-[var(--primary)]">
                    {item.price}
                  </span>
                  <a
                    href="#"
                    className="text-sm font-semibold hover:text-[var(--primary)]"
                  >
                    View More
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
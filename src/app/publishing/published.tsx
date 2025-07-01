"use client";

export default function Published() {
  const publications = [
    {
      logo: "/medium-logo.png",
      title: "How AI is Transforming Nonprofits",
      summary:
        "Exploring the rise of machine learning to guide fundraising decisions and boost donor engagement.",
      date: "June 25, 2025",
      url: "/articles/ai-nonprofits",
      tags: ["AI", "Nonprofit"],
    },
    // Add more publications...
  ];

  const products = [
    {
      asin: "B0CMSB3K14",
      url: "https://www.amazon.com/dp/B0CMSB3K14",
      tag: "Puzzle Book",
    },
    {
      asin: "B0CL3VB2DW",
      url: "https://www.amazon.com/dp/B0CL3VB2DW",
      tag: "Word Search",
    },
    // Add more if needed...
  ];

  return (
    <section className="py-20 bg-red text-black px-8">
      <div className="max-w-6xl mx-auto">
        {/* Publications */}
        <h2 className="text-3xl font-bold mb-8">Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {publications.map((p, idx) => (
            <div key={idx} className="border rounded-lg p-6 flex flex-col justify-between shadow-lg">
              <div>
                <img src={p.logo} alt={`${p.title} logo`} className="h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-700 mb-4">{p.summary}</p>
              </div>
              <div className="mt-auto">
                <p className="text-gray-500 text-sm mb-4">{p.date}</p>
                <a href={p.url} className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
                  Read More →
                </a>
                <div className="mt-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-block bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded mr-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Products */}
        <h2 className="text-3xl font-bold mb-8">Recommended Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <a
              key={p.asin}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={`https://images-na.ssl-images-amazon.com/images/P/${p.asin}.jpg`}
                alt={p.tag}
                className="w-full h-48 object-contain bg-white p-4"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{p.tag}</h3>
                <p className="text-gray-500 text-sm mb-4">⭐⭐⭐⭐☆</p>
                <button className="bg-orange-600 text-white px-4 py-2 rounded">
                  Buy Here →
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

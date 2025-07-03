"use client";

export default function Peer() {
  const products = [
    {
      id: 1,
      img: "/article.png",
      url: "https://journaljsrr.com/index.php/JSRR/article/view/2233",
      tag: "Enhancing Non-Profit Project Outcomes through Predictive Modelling and Real-Time Data Analysis",
    },
    {
      id: 2,
      img: "/article1.png",
      url: "https://journaljsrr.com/index.php/JSRR/article/view/2242/",
      tag: "Enhancing Community Health Programs: Roles, Operations and Data-Driven Innovations",
    },

    // Add more if needed...
  ];

  return (

    <section className="py-20 bg-white relative z-10 px-8 text-black">
      <div className="max-w-6xl mx-auto mt-8">
        {/* PEER REVIEWED ARTICLE */}
        <h2 className="text-3xl font-bold mb-8 font-roadRadio">PEER REVIEWED ARTICLE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {products.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={p.img}
                alt={p.tag}
                className="w-full h-100 object-cover  p-4"
              />
              <div className="p-4">
                <h3 className="font-semibold font-sourceSerif mb-2">{p.tag}</h3>
                <button className="bg-black text-white px-4 py-2 rounded">
                  Read Here →
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

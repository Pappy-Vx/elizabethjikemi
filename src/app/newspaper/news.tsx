"use client";

export default function News() {
  const products = [
    {
      id: 1,
      img: "/newsp1.png",
      url: "https://thesun.ng/challenges-and-affordable-solutions-in-implementing-data-driven-project-management-systems-in-nonprofits/",
      tag: "Challenges and Affordable Solutions in Implementing Data-Driven Project Management Systems in Nonprofits",
      
    },
     {
      id: 2,
      img: "/newsp2.png",
      url: "https://www.vanguardngr.com/2024/10/big-data-applications-in-non-profit-organizations-transforming-project-management-and-reporting/",
      tag: "Big Data Applications in Non-Profit Organizations: Transforming project management and reporting",
      
    },
    {
      id: 3,
      img: "/newsp3.png",
      url: "https://www.thisdaylive.com/2024/06/24/integrating-data-visualization-tools-for-effective-project-management-in-nonprofit-organizations/",
      tag: "Integrating Data Visualization Tools for Effective Project Management in nonprofit Organizations",
      
    },

     
     
    // Add more if needed...
  ];

  return (

    <section className="py-20 bg-white relative z-10 px-8 text-black">
        <div className="max-w-6xl mx-auto mt-8">
          {/* Newspaper */}
          <h2 className="text-3xl font-bold mb-8 font-roadRadio">Newspaper Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
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
                  className="w-full h-64 object-cover  p-4"
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

"use client";

export default function News() {
  const products = [
    {
      asin: "B0CVNJL9F2",
      url: "https://www.amazon.com/dp/B0CVNJL9F2",
      tag: "The Art of Chess Opening",
      summary: "10 Winning Strategies, 100+ Puzzles and Miniatures, Quick Tactical Insights to Build Your Repertoire Without Memorization or a Board (Bonus: Encyclopaedia of Chess Openings)",
    },
     {
      asin: "B0D8CXGJPQ",
      url: "https://www.amazon.com/dp/B0D8CXGJPQ",
      tag: "Best California DMV Exam HANDBOOK",
      summary: "Ace Your Drivers' Test the 1st Time with Ease - 100+ Practice Questions & Feedback, Visual Aids, Road Sign Guides, & Comprehensive Coverage of Current Road Laws",
    },
     {
      asin: "B0CL3VB2DW",
      url: "https://www.amazon.com/dp/B0CL3VB2DW",
      tag: "Autumn Word Search Large Print (Big 175+ Autumn and Fall -Themed Puzzles)",
      summary: "Over One Thousand Puzzles With Tips, Tricks, Trivia and Solutions. Added Bonus Level for tons of fun in Large Font!",
    },
    {
      asin: "B0CMSB3K14",
      url: "https://www.amazon.com/dp/B0CMSB3K14",
      tag: "1100+ Sudoku Large Print Puzzle Book for Adults",
      summary: "Over One Thousand Puzzles With Tips, Tricks, Trivia and Solutions. Added Bonus Level for tons of fun in Large Font!",
    },
    {
      asin: "B0CLNYBRM3",
      url: "https://www.amazon.com/dp/B0CLNYBRM3",
      tag: "Heartwarming Fall & Thanksgiving Coloring Book",
      summary: "A Cozy Coloring Escape For Adults with 50+ Scenes of Autumn Delights, Tranquility, and Festive Fun",
    },
    {
      asin: "B0CVNGCCVK",
      url: "https://www.amazon.com/dp/B0CVNGCCVK",
      tag: "The Art of Chess Opening",
      summary: "10 Winning Strategies, 100+ Puzzles and Miniatures, Quick Tactical Insights to Build Your Repertoire Without Memorization or a Board",
    },
    
     {
      asin: "B0CXG4XH37",
      url: "https://www.amazon.com/dp/B0CXG4XH37",
      tag: "The Art of Chess Opening",
      summary: "11 Winning Strategies, 110 Puzzles and Miniatures, Quick Tactical Insights, To Build Your Repertoire Without Memorization or a Board",
    },
     {
      asin: "B0CWKKXG8L",
      url: "https://www.amazon.com/dp/B0CWKKXG8L",
      tag: "The Ultimate Guide To Chess Opening",
      summary: "Quick Tactical Insights To Build A Repertoire Without Memorization or A Board - Over 300 Miniature Games ",
    },
     {
      asin: "B0CWRRNQ3T",
      url: "https://www.amazon.com/dp/B0CWRRNQ3T",
      tag: "The Best Chess Scorebook",
      summary: "The Ultimate Log Book for Performance Tracking, Tournament Preparation, Personalized Growth Plan, plus Memory & Tactical Improvement",
    },
     {
      asin: "B0CJL6L9XK",
      url: "https://www.amazon.com/dp/B0CJL6L9XK",
      tag: "The Best Travel Guide - San Diego",
      summary: "A Cicerone’s View of Top Attractions, Hidden Gems, Restaurants, Beaches, Activities to Explore in San Diego)",
    },
     {
      asin: "B0CYXMJLHS",
      url: "https://www.amazon.com/dp/B0CYXMJLHS",
      tag: "San Diego Travel Guide",
      summary: "A Local's Passport to Authentic Experiences, Culinary Delights, Cultural Treasures, and Unforgettable Adventures on Hidden Shores",
    },
     
    // Add more if needed...
  ];

  return (

    <section className="py-20 bg-white relative z-10 px-8 text-black">
        <div className="max-w-6xl mx-auto mt-8">
          {/* Publications */}
          <h2 className="text-3xl font-bold mb-8 font-roadRadio">Published Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6">
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
                  <h3 className="font-semibold font-sourceSerif mb-2">{p.tag}</h3>
                  <p className="text-sm font-sourceSerif">{p.summary}</p>
                  <p className="text-gray-500 text-sm mb-4">⭐⭐⭐⭐☆</p>
                  <button className="bg-black text-white px-4 py-2 rounded">
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

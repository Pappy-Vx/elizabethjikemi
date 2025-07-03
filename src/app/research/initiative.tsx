"use client";

export default function Initiative() {
  return (
    <section className="py-20 bg-white z-10 relative px-8 text-black">
      <section className="mt-8 md:mt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Text Content */}
          <div className="flex flex-col justify-between">
            <div>
              {/* <span className="flex flex-col md:flex-row items-center">
                <span><img src="/fambuild.png" alt="family-build" className="w-20" /></span> */}
              <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4">
                 Inside the New Nonprofit AI Initiatives Seeking to Aid Teachers and Farmers in Rural Africa
              </h3>
              {/* </span> */}
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                Opportunity International has launched a generative AI initiative aimed at supporting farmers and educators in rural Africa opportunity.org+10time.com+10yahoo.com+10. Their chatbot, Ulangizi, now offers real‑time agricultural advice in Chichewa to smallholder farmers in Malawi, reducing their dependence on in‑person experts. 
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
               In a recent incubator program, Opportunity awarded $150,000 each to three teams developing AI tools that enhance farming, lesson planning, and school administration—projects that will be piloted over the next two years. Mentors from Microsoft, Amazon, and MIT-supported accelerators are helping to tailor these apps to low‑literacy and low‑resource communities.
              </p>
              <p className="text-md md:text-xl font-sourceSerif mb-4">
               The goal is to democratize access to expertise, delivering knowledge through familiar channels and local languages.
              </p>
              <br />
              <p className="text-md md:text-xl font-roadRadio mb-6 ">
                Read the full article <span className="hover:underline"><a href="https://time.com/7160849/opportunity-international-ai-farmers-teachers/">here →</a></span>
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/farm.jpg"
              alt="Farming"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

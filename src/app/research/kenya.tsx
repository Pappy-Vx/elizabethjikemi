"use client";

export default function Kenya() {
  return (
    <section className="py-20 bg-[#000000CC] relative z-10 px-8 text-white">
      <section className="mt-8 md:mt-[8rem]  pb-16 flex items-start max-w-6xl mx-auto">
        <div className="w-full mx-auto">
           <div className="w-full h-64 mb-8">
            <img
              src="/kenya.jpg"
              alt="kenya"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-full ">
            {/* <span className="flex flex-col md:flex-row items-center">
                        <span><img src="/famstake.png" alt="family-stakeholder" className="w-20" /></span> */}
            <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4 text-center">
             AI for Africa: Kenya Deep Dive (GSMA, July 2024)
            </h3>
            {/* </span> */}
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4">
              GSMA presents a comprehensive analysis of AI’s role in Africa’s development, with a detailed focus on Kenya. The report reviews over 90 real-world AI applications across agriculture, energy, and climate resilience in Kenya, Nigeria, and South Africa. 
            </p>
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4 italic">
              Key findings include:
            </p>
            <br />
            <ul className="text-md md:text-xl font-sourceSerif mb-4 list-disc">
                <li className="mb-4"> <strong>Enabling environment:</strong>  Kenya benefits from strong foundational groundwork—such as the 2018 AI & Blockchain Taskforce, the 2019 Data Protection Act, and the 2022 Digital Master Plan—while still lacking a formal national AI strategy. A public draft of the AI Code of Practice (April 2024) and ongoing stakeholder consultations show momentum toward more inclusive governance.</li>
                <li className="mb-4"> <strong>AI use cases:</strong>  Nearly half of the identified AI solutions target agriculture, covering advisory, financing, and smart farming systems. Energy and climate applications, such as remote sensing and biodiversity monitoring, also feature strongly. Most AI efforts are predictive, not generative.</li>
                <li className="mb-4"> <strong>Barriers and needs:</strong>  Common challenges include unreliable infrastructure, data scarcity, language limitations, limited digital skills, and unclear policies—factors that limit scalability. Local languages and low-tech delivery (e.g., SMS) are vital to inclusion.</li>
                <li className="mb-4"> <strong>Recommendations:</strong>  The report calls for improved digital infrastructure, data sharing frameworks, capacity building, and ethical formulation of AI policies to ensure inclusive development and minimize bias.</li>
            </ul>
            <p className="text-md md:text-xl font-roadRadio mb-6">
              Read the full article <span className="hover:underline"><a href="https://www.gsma.com/solutions-and-impact/connectivity‑for‑good/mobile‑for‑development/wp‑content/uploads/2024/07/KENYA_AIforAfrica.pdf ">here →</a></span>
            </p>
            <br />
          </div>
        </div>
      </section>
    </section>
  );
}

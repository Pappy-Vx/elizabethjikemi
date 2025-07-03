"use client";

export default function CrowdFund() {
  return (
    <section className="py-20 bg-white z-10 relative px-8 text-black">
      <section className="mt-8 md:mt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/crowd.avif"
              alt="crowd-fund"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-between">
            <div>
              {/* <span className="flex flex-col md:flex-row items-center">
                <span><img src="/change.png" alt="family-build" className="w-20" /></span> */}
              <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4">
                An Integrated Online–Offline Crowdfunding Model for Nigeria (MDPI, Sustainability, July 2022)
              </h3>
              {/* </span> */}
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                This paper addresses the gap in crowdfunding adoption in Nigeria by proposing a hybrid model that combines online and offline channels to expand access and trust among contributors. Through interviews with entrepreneurs in both the UK and Nigeria (20 each), followed by a survey of 160 Nigerian fundraisers, the authors explore barriers such as poor internet penetration, low social media usage, limited payment infrastructure, and widespread poverty.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
               Their findings revealed that 70% of Nigerians lack reliable internet access, while only 16% engage online via platforms like Facebook. These constraints significantly hamper traditional crowdfunding. The proposed solution enables campaigners to coordinate offline promotions—via radio, flyers, and donation booths—alongside online efforts that leverage social media and digital payments when available. This dual structure allows donors to contribute either digitally or in person, making giving more inclusive and trustworthy.
              </p>
              <br />
               <p className="text-md md:text-xl font-sourceSerif mb-4">
               Early validations from pilot users indicate the model is promising and adaptable. Authors recommend that governments and NGOs adopt similar hybrid frameworks to catalyze inclusive funding for local ventures. Their work highlights how pragmatic, context-aware crowdfunding can bridge socioeconomic and technological divides in developing regions.
              </p>
              <br />
              <p className="text-md md:text-xl font-roadRadio text-uppercase mb-6 ">
                 Read the full article <span className="hover:underline"><a href="https://www.mdpi.com/2071-1050/14/15/9333">here →</a></span> 
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

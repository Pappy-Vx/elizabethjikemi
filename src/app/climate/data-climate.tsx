"use client";

export default function DataClimate() {
  return (
    <section className="py-20 bg-[#000000CC] relative z-10 px-8 text-white">
      <section className="mt-8 md:mt-[8rem]  pb-16 flex items-start max-w-6xl mx-auto">
        <div className="w-full mx-auto">
          <div className="w-full h-64 mb-8">
            <img
              src="/dataclim.avif"
              alt="data-climate"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-full ">
            {/* <span className="flex flex-col md:flex-row items-center">
                        <span><img src="/famstake.png" alt="family-stakeholder" className="w-20" /></span> */}
            <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4 text-center">
              Data for Impact: Climate in the Numbers
            </h3>
            {/* </span> */}
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4">
              Numbers can tell powerful stories when we listen closely. I have seen data turn vague concerns about a community garden into a case for city-wide food reform. I have watched a dashboard turn climate urgency into clear advocacy that drives action.
            </p>
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4">
              This is the kind of work that fuels me—data that brings clarity rather than confusion. Tools that help nonprofits connect sustainability to funding, and accountability to real impact. It is not just about measuring carbon footprints. It is about recognizing who is excluded, who is most affected, and how we can shift outcomes toward justice.
            </p>
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4">
              Technology has the power to support equity when it is guided by care. I have seen artificial intelligence help food banks reduce waste, detect illegal deforestation, and guide investment in underserved communities. These tools can do real good, but only if we treat data ethically and thoughtfully.
            </p>
            <br />
            <p className="text-md md:text-xl font-roadRadio mb-6">
              We must collect with informed consent, report with dignity, and design systems in collaboration with the people the data represents. This is how data becomes not just a tool, but a bridge.
            </p>
            <br />
          </div>
        </div>
      </section>
    </section>
  );
}

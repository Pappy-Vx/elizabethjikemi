"use client";

export default function HeartWork() {
  return (
    <section className="py-20 bg-white z-10 relative px-8 text-black">
      <section className="mt-8 md:mt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/work.avif"
              alt="work"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-between">
            <div>
              {/* <span className="flex flex-col md:flex-row items-center">
                <span><img src="/change.png" alt="family-build" className="w-20" /></span> */}
              <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4">
                My Heart for This Work
              </h3>
              {/* </span> */}
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
               I believe systems should not replace people. They should restore them.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
              Every spreadsheet, every meeting, every decision should help someone feel supported. If I ever teach a masterclass, I’d call it Build With Both Hands: One for Systems, One for People. Because you need both to build something that lasts.
              </p>
              <br />
               <p className="text-md md:text-xl font-sourceSerif mb-4">
              You need data and story. Structure and soul. The future vision and the family wisdom.
              </p>
              <br />
               <p className="text-md md:text-xl font-sourceSerif mb-4">
              I want every nonprofit I work with to walk away with clarity. Not just about their goals, but about who they are and why they matter.
              </p>
              <br />
               <p className="text-md md:text-xl font-sourceSerif mb-4">
              Because good systems give time back to caregivers. They protect the vulnerable. They open up space for grace. And they remind us that we’re building something more than programs.
              </p>
              <br />
              <p className="text-md md:text-xl font-roadRadio text-uppercase mb-6 ">
               We are building futures. And with the right tools, the right story, and the right support, those futures can be bright, connected, and just.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

"use client";

export default function FamilyStrategy() {
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
                Family as Strategy: Building With Intention
              </h3>
              {/* </span> */}
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                People often chuckle when I say that building a home is a lot like managing a project, but I’ve found it to be true. The same tools I use to guide nonprofit teams — clarity, planning, and follow-through — are the ones I use to nurture my home. This is my first and most important organization. It is the place where values are shaped, where culture is created, and where futures quietly begin to take form.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                We live by rhythms that hold us together. Family meetings happen over breakfast. Calendars keep us aligned on school runs and bedtime routines. We celebrate the big milestones and the small ones too. We pause to reflect and ask ourselves what worked, what didn’t, and what could be better. These aren’t rigid rules. They are small acts of care that help us move forward, together.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-6">
                Kindness is a core value in our home. You can’t roll your eyes at someone and still expect to share laughter during movie night. Empathy is required. We practice honesty, even when it’s uncomfortable, and we respect time, space, and each other’s needs.
              </p>
              <br />
              <p className="text-md md:text-xl font-roadRadio mb-6 ">
                “Home isn’t a break from strategy. It’s where strategy becomes real and personal.”
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/ladybuild.avif"
              alt="ladybuild"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

"use client";

export default function OrganizationClimate() {
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
                Organizational Climate: Culture is a System
              </h3>
              {/* </span> */}
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                People often chuckle when I say that building a home is a lot like managing a project, but I’ve found it to be true. The same tools I use to guide nonprofit teams — clarity, planning, and follow-through — are the ones I use to nurture my home. This is my first and most important organization. It is the place where values are shaped, where culture is created, and where futures quietly begin to take form.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                Culture is not defined by branded posters or mission statements. It lives in the daily experience. It shows up in whose ideas are valued, whose burnout is overlooked, and who feels safe enough to speak honestly.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-6">
                When I support organizations through cultural change, I begin by listening, deeply and without assumptions. Not through formal surveys, but through real conversations. I ask what people need in order to feel seen and supported. I make room for their frustrations, their hopes, and their desire for change.
              </p>
              <br />
              <p className="text-md md:text-xl font-roadRadio mb-6 ">
                As trust begins to take root, I work with them to create new rhythms that actually work. Feedback that is clear and constructive. Mentorship that crosses titles and levels. Structures that prioritize equity over performance theatre. Because culture is not something you announce. It is something you practice, every single day.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/organclimate.jpg"
              alt="organization-climate"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

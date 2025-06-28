"use client";

export default function CenterPeople() {
  return (
    <section className="py-20 bg-white z-10 relative px-8 text-black">
      <section className="mt-8 md:mt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/nigeria-fut.avif"
              alt="nigeria-future"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-between">
            <div>
              {/* <span className="flex flex-col md:flex-row items-center">
                <span><img src="/change.png" alt="family-build" className="w-20" /></span> */}
              <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4">
                Centering the People: Every Voice Matters
              </h3>
              {/* </span> */}
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
               Growing up in Lagos taught me to listen with more than just my ears.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
              You learn to notice the elder who says very little but sees everything. You listen to the cousin who won’t speak unless asked. You learn to hear the voice behind the silence.
              </p>
              <br />
               <p className="text-md md:text-xl font-sourceSerif mb-4">
              That’s the same approach I bring into nonprofit work. I create space for every voice, not just the loudest. I use group reflections, one-on-one conversations, surveys, and even anonymous messages. Some truths need stillness to be spoken.
              </p>
              <br />
               <p className="text-md md:text-xl font-sourceSerif mb-4">
              I build teams like shared meals. Everyone brings something. Every ingredient counts. A good team holds trust, shared purpose, and a little humor to help carry the hard days.
              </p>
              <br />
              <p className="text-md md:text-xl font-roadRadio text-uppercase mb-6 ">
               And above all, I believe that systems are made to serve people. Never the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

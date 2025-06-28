"use client";

export default function PersonalClimate() {
  return (
    <section className="py-20 bg-white z-10 relative px-8 text-black">
      <section className="mt-8 md:mt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/meval.jpg"
              alt="elizabeth-value"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-between">
            <div>
              {/* <span className="flex flex-col md:flex-row items-center">
                <span><img src="/change.png" alt="family-build" className="w-20" /></span> */}
              <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4">
                Personal Climate: Values, Rhythm and Resilience
              </h3>
              {/* </span> */}
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                Protecting my inner climate is part of how I stay grounded in the work. If I am not clear within myself, I cannot lead well. Just like system design, inner clarity requires intention, reflection, and care.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                My daily rhythms are simple. I seek morning light before screens. I take walks without an agenda. I journal in short, honest bursts when the words are heavy. These small practices help me stay present, especially when the world gets noisy.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-6">
                There are a few mindsets I hold close. I choose curiosity instead of control. I choose grace instead of grind. These internal habits are what help me navigate intense seasons without losing myself.
              </p>
              <br />
              <p className="text-md md:text-xl font-roadRadio text-uppercase mb-6 ">
                To me, resilience is the ability to adapt while holding on to your essence. It is not just about making it through. It is about growing deeper in the process. I return to this idea often. We do not need perfect conditions to show up with strength. We only need to stay rooted in what truly matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

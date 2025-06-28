"use client";

export default function DiffStrat() {
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
                  A Different Kind of Strategy: Data That Feels, Systems That Care
              </h3>
              {/* </span> */}
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                I work at the intersection of logic and heart. I love a clean dashboard, but I also care about what the numbers don’t say.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
               You might find me building a data structure in Power BI, and right after that, sitting with a community leader who tells me why the numbers miss a piece of the truth. I use tools like Tableau, Excel, and Sprout Social. But my most powerful tools are curiosity and empathy.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
               Data matters, and I use it to shape strategies and secure funding. But it should never erase the person behind the chart. I hold the stories close. I believe real change starts with how we speak. How we talk about women. How we treat their futures.
              </p>
              <br />
              <p className="text-md md:text-xl font-roadRadio mb-6 ">
               I dream of seeing thousands of young women in Lagos graduate from schools, boot camps, and developer programs. Not just to be counted as statistics, but to live fully. Systems matter. So does story. And I hold both with equal care.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/dat-strat.avif"
              alt="data-strategy"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

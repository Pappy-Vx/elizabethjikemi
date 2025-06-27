"use client";

export default function Change() {
  return (
    <section className="py-20 bg-white z-10 relative px-8 text-black">
      <section className="mt-8 md:mt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/changefam.avif"
              alt="Family change"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-between">
            <div>
              {/* <span className="flex flex-col md:flex-row items-center">
                <span><img src="/change.png" alt="family-build" className="w-20" /></span> */}
              <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4">
                Change Starts With Us: Family as the First System
              </h3>
              {/* </span> */}
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                Change rarely announces itself. It arrives and invites us to stretch. I’ve learned to meet it with a mix of structure and softness. When I moved from Nigeria to the United States, it was one of those defining transitions. I came with qualifications and dreams, but still had to learn a new way of living. So I returned to what I knew. I observed, adapted, and began building new rhythms. Over time, those rhythms shaped a life that feels both grounded and true.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                To stay centered, I created personal systems that help me reset. Quarterly check-ins with tea and music. Short, honest journal entries when the words feel heavy. Time blocked off for quiet, without screens or noise. Honest conversations with the people I trust. These simple practices keep me anchored.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-6">
                At home, we treat transitions like we treat project launches. We talk more. We listen more. We check in more often. Even our dog, Jack, gets extra walks when the emotional weather changes. This is how we grow together, with honesty, presence, and care.
              </p>
              <br />
              <p className="text-md md:text-xl font-roadRadio text-uppercase mb-6 ">
                Maya Angelou once said, “I can be changed by what happens to me, but I refuse to be reduced by it.” That line has become a quiet compass. It shapes the way I lead and the way I love.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

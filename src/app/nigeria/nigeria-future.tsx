"use client";

export default function NigeriaFutue() {
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
                Systems That Serve: A Future for Nigeria
              </h3>
              {/* </span> */}
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                If I could reimagine one part of our national infrastructure, I would begin with public data. It might not grab headlines, but it holds the key to everything else. We cannot build what we cannot track. My doctoral research focuses on how technologies like blockchain and artificial intelligence can make social impact more visible, verifiable, and grounded in community ownership. Imagine tracking nonprofit funds as easily as a food order. Imagine building trust through clarity.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
               Many Nigerian nonprofits struggle with access — to tools, to funding, to visibility. The solution is not to keep importing systems that were never built with us in mind. What we need are technologies that reflect our context. Systems that are clear, accessible, and built with the community in mind.
              </p>
              <br />
              <p className="text-md md:text-xl font-roadRadio text-uppercase mb-6 ">
                We do not need heroes to save us. We need infrastructure that supports us. The youth are ready. The creativity is already here. What we need now are systems designed to hold our potential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

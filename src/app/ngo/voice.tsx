"use client";

export default function Voice() {
  return (
    <section className="py-20 bg-[#000000CC] relative z-10 px-8 text-white">
      <section className="mt-8 md:mt-[8rem]  pb-16 flex items-start max-w-6xl mx-auto">
        <div className="w-full mx-auto">
          <div className="w-full h-64 mb-8">
            <img
              src="/voicemat.avif"
              alt="Leading"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-full ">
            {/* <span className="flex flex-col md:flex-row items-center">
                        <span><img src="/famstake.png" alt="family-stakeholder" className="w-20" /></span> */}
            <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4 text-center">
              A Voice in the Sector: Writing, Speaking, Leading with Purpose
            </h3>
            {/* </span> */}
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4">
             I write and speak because I believe clarity is a form of care.
            </p>
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4">
              I want nonprofit leaders to know that they deserve good systems. Not because it looks impressive, but because their work is sacred.
            </p>
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4">
             I talk about systems justice, data protection, and the right every community has to well-built infrastructure. But I keep it simple. I want the clinic in Lagos and the grassroots team in Oakland to both feel like tech belongs to them.
            </p>
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4">
            Mentorship is not an extra thing I do. It’s part of who I am. I remember being told I was too soft, too structured, or too hopeful. Now I see those as my strengths. And I help others do the same.
            </p>
            <br /> 
            <p className="text-md md:text-xl font-roadRadio mb-6">
              Sometimes I mentor by reviewing a deck. Sometimes it’s a phone call. Most times, it’s just being present and saying, "You’re not alone. You can do this."
            </p>
            <br />
          </div>
        </div>
      </section>
    </section>
  );
}

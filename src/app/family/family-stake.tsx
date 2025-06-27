"use client";

export default function FamilyStake() {
    return (
        <section className="py-20 bg-[#000000CC] relative z-10 px-8 text-white">
            <section className="mt-8 md:mt-[8rem]  pb-16 flex items-start max-w-6xl mx-auto">
                <div className="w-full mx-auto">
                    <div className="w-full h-64 mb-8">
                        <img
                            src="/stakeholder.avif"
                            alt="stakeholder-family"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div className="w-full ">
                        {/* <span className="flex flex-col md:flex-row items-center">
                        <span><img src="/famstake.png" alt="family-stakeholder" className="w-20" /></span> */}
                        <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4 text-center">
                            Stakeholders at Home: Trust, Communication, and Care
                        </h3>
                        {/* </span> */}
                        <br />
                        <p className="text-md md:text-xl font-sourceSerif mb-4">
                            What I’ve learned from nonprofit leadership fits seamlessly into life at home. At the core, people want to feel seen and heard. Whether I’m in conversation with a donor or sitting across from my spouse, the principles are the same. Show up fully. Listen with intention. Respond with care.
                        </p>
                        <br />
                        <p className="text-md md:text-xl font-sourceSerif mb-4">
                            In our home, trust is built through small habits. We check in regularly and speak openly. We make space for emotion and leave room for growth. There’s permission to say “I need a moment” or “I got that wrong.” These aren’t just good habits. They are the foundation of the safety we’re creating together.
                        </p>
                        <br />

                        <p className="text-md md:text-xl font-roadRadio mb-6">
                            The moments that keep me grounded are often the quiet ones. Holding hands during a walk. Letting a playlist hum in the background while we sit in silence. These simple things matter more than they appear. They are the spaces where love becomes visible.
                        </p>
                        <br />
                    </div>
                </div>
            </section>
        </section>
    );
}

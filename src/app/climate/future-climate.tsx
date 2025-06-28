"use client";

export default function FutureClimate() {
    return (
        <section className="py-20 bg-[#000000CC] relative z-10 px-8 text-white">
            <section className="mt-8 md:mt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Text Content */}
                    <div className="flex flex-col justify-between">
                        <div>

                            {/* <span className="flex flex-col md:flex-row items-center">
                                <span><img src="/famfuture.png" alt="family-stakeholder" className="w-20" /></span> */}
                            <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4">
                                Climate for the Future: What We Are Building
                            </h3>
                            {/* </span> */}
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-4">
                                I want to help create a future where sustainability is no longer treated as a luxury, but embraced as the standard. A world where nonprofits do not have to choose between performance and purpose. A world where policy is driven not just by numbers, but by compassion and common sense.
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-4">
                                In this future, climate strategy will be thoughtful and inclusive. It will welcome hard questions and honest answers. Who is affected? Who is included? Who is empowered to decide? These are the conversations we must have if we want to build something that lasts.
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-6">
                                My worldview is shaped by faith and by a belief that we are stewards, not owners. The Earth is not ours to exploit. It is a trust we have been given. That belief informs everything; from the systems I design, to the teams I lead, to the way I show up in the world.My worldview is shaped by faith and by a belief that we are stewards, not owners. The Earth is not ours to exploit. It is a trust we have been given. That belief informs everything; from the systems I design, to the teams I lead, to the way I show up in the world.
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-6">
                                Legacy is not just what we build. It is what we protect. It is what we imagine and make possible for those who come next.Legacy is not just what we build. It is what we protect. It is what we imagine and make possible for those who come next.Legacy is not just what we build. It is what we protect. It is what we imagine and make possible for those who come next.
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-roadRadio mb-6">
                                <h3 className="text-lg md:text-2xl font-sourceSerif font-bold mb-4">
                                    I think…
                                </h3>
                                <p className="text-md md:text-lg font-sourceSerif mb-6 italic">
                                    “We do not need a perfect planet. What we need are honest systems, ethical decisions, and people who are willing to keep showing up with care, courage and clarity. That is the kind of climate I believe in—one that invites us to do better, and makes space for all of us to belong.”
                                </p>
                            </p>
                            <br />
                        </div>
                    </div>
                    {/* Image */}
                    <div className="w-full h-full">
                        <img
                            src="\climfut.avif"
                            alt="future-climate"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}

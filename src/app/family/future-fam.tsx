"use client";

export default function FutureFamily() {
    return (
        <section className="py-20 bg-[#000000CC] relative z-10 px-8 text-white">
            <section className="mt-8 md:mt-32 pb-16 px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Text Content */}
                    <div className="flex flex-col justify-between">
                        <div>

                            {/* <span className="flex flex-col md:flex-row items-center">
                                <span><img src="/famfuture.png" alt="family-stakeholder" className="w-20" /></span> */}
                            <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4">
                                The Family We’re Creating: Atmosphere, Legacy, and Vision
                            </h3>
                            {/* </span> */}
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-4">
                                Growing up in a large family filled with siblings, cousins, nieces, and nephews taught me a lesson early on. If you don’t create peace on purpose, chaos will find a way to fill the space. So I’ve learned to be intentional about the atmosphere I want to live in. One that is calm, honest, and grounded.
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-4">
                                In our home, we speak with kindness. We listen with care. We make space for both the quiet ones and the bold ones. We remind each other that you already belong here, just as you are. And when life feels overwhelming, we pause, put on music, make a meal, and return to each other with open hearts.
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-6">
                                My dream for the next generation is deeply rooted in legacy. I want them to grow up free and equipped. I want them to carry our story with pride and tell their own with courage. I want our name to stand for integrity and impact. I want them to know that success is not just about leaving — it is also about returning and giving back with intention.
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-6">
                                Education is part of that legacy. It has always been our family’s gift to the future. My grandfather taught children under trees. My mother raised us with encyclopedias. And now, I design systems that help others grow. Faith is my compass. Social impact is my contribution. These are the three pillars we are building on, day by day.
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-6 italic">
                                “Family is not just where life begins. It is where values are tested, where systems are shaped, and where legacies are formed. I believe in building a home that launches people well — a home filled with kindness, guided by clarity, and sustained by the quiet courage to keep growing, together.”
                            </p>
                            <br />
                        </div>
                    </div>
                    {/* Image */}
                    <div className="w-full h-full">
                        <img
                            src="/futurefam.avif"
                            alt="future-family"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}

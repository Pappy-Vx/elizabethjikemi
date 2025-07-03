"use client";

export default function PublicHealth() {
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
                                Artificial Intelligence for Public Health Surveillance in Africa (Jean Marie Tshimuila et al., 2024)
                            </h3>
                            {/* </span> */}
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-4">
                                This study explores how artificial intelligence is being used to strengthen public health surveillance systems across Africa. The authors highlight successful applications in disease detection, outbreak prediction, and resource allocation within resource-constrained health systems. They show that AI can improve accuracy and speed in identifying emerging threats and optimizing intervention strategies, critical in settings with limited staff and infrastructure. The paper also examines challenges like unreliable data, ethical concerns, and a shortage of technical expertise. To address these, the authors recommend building local capacity, developing transparent data governance frameworks, and integrating AI tools with existing health systems to ensure that innovations are sustainable, effective, and ethically sound.
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-roadRadio mb-6">
                                Read the full article <span className="hover:underline"><a href="https://arxiv.org/abs/2408.02575">here →</a></span>
                            </p>
                            <br />
                        </div>
                    </div>
                    {/* Image */}
                    <div className="w-full h-full">
                        <img
                            src="\aihealth.jpg"
                            alt="Ai-health"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}

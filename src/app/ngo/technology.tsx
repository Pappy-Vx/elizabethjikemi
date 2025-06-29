"use client";

export default function Technology() {
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
                                Technology That Anchors, Not Replace
                            </h3>
                            {/* </span> */}
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-4">
                                I find beauty in technology when it helps people feel seen.
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-4">
                               I’ve led projects where nonprofits moved from scattered spreadsheets to systems that helped them reconnect with the people they serve. Case management didn’t create distance. It created reminders to check in, to remember names, to follow up with care.
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-6">
                                I never start with tools. I start with questions. What feels heavy? What could work better? What’s slipping through the cracks?
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-sourceSerif mb-6">
                                You don’t have to wait for someone else to validate your worth. You can show it. One strategy, one story, and one system at a time.
                            </p>
                            <br />
                            <p className="text-md md:text-xl font-roadRadio mb-6">
                               Whether we end up using a cloud system or a notebook with intention, my goal is the same. Let’s make the work easier. Let’s make the decisions clearer. Let’s make sure the heart of the mission doesn’t get lost in the process.
                            </p>
                            <br />
                        </div>
                    </div>
                    {/* Image */}
                    <div className="w-full h-full">
                        <img
                            src="\techanch.avif"
                            alt="Technology anchor"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}

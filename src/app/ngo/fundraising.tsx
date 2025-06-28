"use client";

export default function FundRaising() {
  return (
    <section className="py-20 bg-[#000000CC] relative z-10 px-8 text-white">
      <section className="mt-8 md:mt-[8rem]  pb-16 flex items-start max-w-6xl mx-auto">
        <div className="w-full mx-auto">
          <div className="w-full h-64 mb-8">
            <img
              src="/fundraise.jpg"
              alt="fund-raising"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-full ">
            {/* <span className="flex flex-col md:flex-row items-center">
                        <span><img src="/famstake.png" alt="family-stakeholder" className="w-20" /></span> */}
            <h3 className="text-lg md:text-2xl font-roadRadio font-bold mb-4 text-center">
              Fundraising That Feels Like Partnership
            </h3>
            {/* </span> */}
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4">
             I don’t believe fundraising should ever feel like a performance. It should feel like truth.
            </p>
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4">
              I don’t sell pity. I tell stories of resilience, of communities rising, of people doing hard things with quiet strength. Donors are not saviors. They are partners. And integrity should never be the price of funding.
            </p>
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4">
             I help nonprofits build structures that show their work clearly. Sometimes that means starting with a shared Google Sheet. Other times it means setting up Salesforce integrations or linking financial systems like QuickBooks.
            </p>
            <br />
            <p className="text-md md:text-xl font-sourceSerif mb-4">
             My doctoral research explores how tools like blockchain and artificial intelligence can help nonprofits show the full story, from donation to delivery. But beyond that, I teach teams how to be consistent, how to be honest, and how to make trust visible.
            </p>
            <br />
            <p className="text-md md:text-xl font-roadRadio mb-6">
              Because every donor is really asking one thing. Does this matter? And can I trust you?
            </p>
            <br />
          </div>
        </div>
      </section>
    </section>
  );
}

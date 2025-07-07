"use client";

export default function NigerianWay() {
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
                 Strategy and Strength: The Nigerian Way
              </h3>
              {/* </span> */}
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                Lagos was my first classroom for strategy. If you can move through a Lagos market without being overcharged, squeezed by a danfo, or thrown off by a sudden fuel scarcity, then you can handle almost any boardroom. Nigerian life teaches strategy through motion. We don’t wait for perfect conditions. We act. We build. We adjust.
              </p>
              <br />
              <p className="text-md md:text-xl font-sourceSerif mb-4">
                My parents modeled reinvention long before it became trendy. Whether it was finding a way to fix a cracked pot or figuring out how to seat nine people when there were only six chairs, I learned logistics before I had a name for it. Our communities formed food cooperatives before food banks were common, and thrift circles before digital lending apps. Nigeria has always been a place where creativity and resilience show up as everyday solutions.
              </p>
              <br />
              <p className="text-md md:text-xl font-roadRadio mb-6 ">
                That foundation gives me an advantage in my work with nonprofits. I understand complexity. I know how to stay ready for shifts. I work with what's already in the room and see possibility where others may see limitation.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/rock.jpg"
              alt="strategy-strength"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

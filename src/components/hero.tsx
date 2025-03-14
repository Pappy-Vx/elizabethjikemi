"use client";

export default function Hero() {
  const scrollToClientsGrid = () => {
    const section = document.getElementById("clientsgrid");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling effect
    }
  };

  return (
    <section className="min-h-screen pt-32 px-8 max-w-6xl mx-auto flex flex-col justify-center">
      <h1 className="font-sequelWide text-2zxl sm:text-5xl md:text-6xl lg:text-6xl leading-tight uppercase">
        Shifting brands from<br />
        giving up to moving<br />
        forward.
      </h1>
      <div className="flex items-center justify-center mt-8">
        <button
          onClick={scrollToClientsGrid}
          title="Scroll down"
          className="loader h-8 md:h-14 w-[.5px] cursor-pointer"
        ></button>
      </div>
    </section>
  );
}

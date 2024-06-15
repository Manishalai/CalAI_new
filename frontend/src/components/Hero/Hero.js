import React from "react";
import banner from "../../images/Main_Banner_.svg";

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat md:h-[150px]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="relative mx-auto max-w-screen-xl py-6 md:hidden">
          <div className="relative mt-[45vh] pl-[58vw] 3xl:pl-[68vw] w-full flex flex-col gap-6">
            <div className="flex gap-4 text-center mx-1 justify-around">
              <button
                onClick={() => scrollToSection("courses-section")}
                className="block w-[280px] rounded bg-white px-12 py-3 text-lg font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
              >
                Explore Programs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

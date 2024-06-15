import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div class="block md:hidden">
        <div class="border-b border-gray-200">
          <nav
            class=" flex gap-6 bg-[#074D8D] px-5 pt-[20px] justify-evenly"
            aria-label="Tabs"
          >
            <button
              onClick={() => scrollToSection("home-section")}
              id="certificate"
              class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("courses-section")}
              id="certificate"
              class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("aboutus-section")}
              class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500
                    aria-current="
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("footer-section")}
              class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500
                    aria-current="
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection("footer-section")}
              class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500
                    aria-current="
            >
              Blogs
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

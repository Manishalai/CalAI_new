import React from "react";

const Navbar = () => {
  return (
       <>
         <div  class="block md:hidden">
              <div class="border-b border-gray-200">
                <nav class=" flex gap-6 bg-[#074D8D] px-5 pt-[20px] justify-evenly" aria-label="Tabs">
                <a
                    href="#"
                    id = "certificate" class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500"
                  >
                   
                    Home
                  </a>
          
                    
          
                  <a
                    href="#"
                    id = "certificate" class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500"
                  >
                   
                    Certifications
                  </a>
        
                  <div id="dropdown" class="hidden absolute left-[42rem]">
                    <div class="inline-flex items-center overflow-hidden rounded-md border bg-white">
                    </div>
                  
                    <div
                      class="absolute end-0 z-10 mt-2 w-[250px] rounded-md border border-gray-100 bg-white shadow-lg"
                      role="menu"
                    >
                      <div class="p-2">
                        <a
                          href="AI-Developer.html"
                          class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Certified Artificial Intelligence Developer (CAID<sup class="text-[0.6rem]">TM</sup>) 
                        </a>
                  
                        <a
                          href="AI-Lead.html"
                          class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Certified Artificial Intelligence Manager (CAIM<sup class="text-[0.6rem]">TM</sup>) 
                        </a>
                  
                        <a
                          href="AILeadership.html"
                          class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Certified Artificial Intelligence Leader (CAIL<sup class="text-[0.6rem]">TM</sup>) 
                        </a>
                        <form method="POST" action="#" />
                      </div>
                    </div>
                  </div>
          
                   {/* <a
                    href="#"
                    id = "capsule" class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500"
                  >
                    
                    Capsules
                  </a>
                  <div id="cap-dropdown" class="hidden absolute mx-[450px]">
                    <div class="inline-flex items-center overflow-hidden rounded-md border bg-white">
                    </div>
                  
                    <div
                      class="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                      role="menu"
                    >
                      <div class="p-2">
                        <a
                          href="Generative-AI.html"
                          class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Generative AI Capsule
                        </a>
                  
                        <a
                          href="ML-capsule.html"
                          class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Machine Learning Capsule
                        </a>
                  
                        <a
                          href="ChatGpt-capsule.html"
                          class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          ChatGPT Prompt Engineering Capsule
                        </a> 
                        <form method="POST" action="#">
                      </div>
                    </div>
                  </div> */}
                  <a
                    href="#page2"
                    class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500
                    aria-current="
                  >
                    About Us
                  </a>
                   <a
                    href="#footer"
                    class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500
                    aria-current="
                  >
                    FAQs
                  </a>
                   <a
                    href="Blog.html"
                    class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500
                    aria-current="
                  >
                    Blogs
                  </a>  
                </nav>
              </div>
              </div>
     </>
  );
};

export default Navbar;

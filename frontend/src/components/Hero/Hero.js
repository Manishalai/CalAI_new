import React from 'react'
import banner from "../../images/banner.svg";

export const Hero = () => {
  return (
    <div><section
    className="relative w-full bg-cover bg-center bg-no-repeat md:h-[150px]"
        style={{ backgroundImage: `url(${banner})` }}
    >
  
    
    <div
    class={`relative mx-auto  max-w-screen-xl py-6 md:hidden  `}
    >
  
    
    
    <div class="relative mt-[45vh] pl-[48vw] 3xl:pl-[58vw] w-full flex flex-col gap-4 ">
  
      <h2 class="text-center text-[20px] text-white font-bold mt-8">Offer Valid Till 15th June</h2>
  
      <div class="flex  gap-4 text-center mx-12 ">
        <a
      href="Starttest.html"
      class="block w-[300px] rounded bg-rose-600 px-12 py-3 text-lg font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 "
    >
      Start Test
    </a>
    
    <a
      href="Schedulelater.html"
      class="block w-[280px] rounded bg-white px-12 py-3 text-lg font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
    >
      Schedule Later
    </a>
      </div>
    
    
    </div>
    </div>
  </section></div>
  )
}

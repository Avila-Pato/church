"use client"
import { Button } from "@/components/ui/button"
import useScrollReveal from "@/hooks/useScrollReveal"
import Image from "next/image";

const HomeView = () => {
  useScrollReveal(".bottom", {
    delay: 300,
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    origin: "bottom",
    scale: 0.9,
    reset: false,

  });

  useScrollReveal(".left", {
    delay: 300,
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    origin: "left",
    scale: 0.9,
    reset: false,
  });

  useScrollReveal(".right", {
    delay: 300,
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    origin: "right",
    scale: 0.9,
    reset: false,
  });

  return (
    <section className="
     h-screen
     bg-hero bg-cover bg-center 

     flex
     justify-between 
     items-center
     
       ">
      <article
        className="w-full flex flex-col md:w-1/2 md:pl-4 sm:pl-4 pl-4 lg:ml-4 lg:pt-14 ">

        <p className=" pt-4 text-white text-lg lg:text-xl font-bold pb-4 left ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officiis corrupti animi alias, voluptatum error omnis ullam tempore dolorum id minima numquam provident laboriosam minus quis corporis. A, harum beatae.

        </p>

        <p className="text-white font-medium text-sm  lg:text-lg font-poppins left 
          border-l-4 border-blue-500 pl-4 lg:pl-6">

          Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati autem ducimus veritatis quasi natus ratione esse at earum culpa.</p>


        <p className="text-white  text-lg lg:text-xl font-bold py-4 left ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eaque quibusdam consectetur non obcaecati perferendis mollitia maxime dolore quidem expedita?
        </p>
        <div className=" 
         pt-12 
         place-content-center
         md:place-content-start
         lg:place-content-start
         lg:py-3 lg:pt-4
        
         
         2xl:place-content-start
         flex gap-4 w-full bottom  ">
          <Button className="bg-orange-600 ">Ver mas</Button>
          <Button className="border-2 text-white bg-transparent">Conocenos</Button>
        </div>
      </article>
      <figure
        className="
    //  absolute 
    //       w-full
    //       pt-24 
    //       h-full     
    //       sm:relative  

    hidden md:flex
    
    md:pb-24
    md:w-[500px]
    md:left-0
    
    lg:w-[600px]
    lg:h-full 
  "
      >
        <Image
          src="/svg/CrackCruz.svg"
          alt="church"
          width={100}
          height={100}
          className="object-contain w-full h-auto left"
        />
      </figure>

    </section>
  );
};

export default HomeView;


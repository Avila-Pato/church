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
    <section className="h-screen bg-hero bg-cover bg-center flex  justify-between items-center  ">
      <article className="w-full md:w-1/2 ml-32  ">
        <p className=" text-white font-poppins text-6xl font-bold pb-4 bottom">Experimenta el amor de dios a travez de la oracion alabanzas y amistad en nuestra iglesia</p>
        <p className="text-white  font-medium text-lg font-poppins left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati autem ducimus veritatis quasi natus ratione esse at earum culpa.</p>
        <div className="pt-4 flex gap-4 w-full bottom">
          <Button className="bg-orange-600 px-8 py-3">Ver mas</Button>
          <Button className="border-2 text-white bg-transparent">Conocenos</Button>
        </div>
      </article>
      <figure className="flex w-full md:w-1/2 ml-4 left">
              <Image src="/svg/CrackCruz.svg"
               alt="church" 
              width={600}
              height={600}
              className="  brightness-75 hover:brightness-100" />
        </figure>
    </section>
  );
};

export default HomeView;


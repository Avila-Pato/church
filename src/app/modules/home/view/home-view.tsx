"use client"
import LazyImage from "@/components/LazyImage";
import { Button } from "@/components/ui/button"
import useScrollReveal from "@/hooks/useScrollReveal"

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
     
     items-center
     
       ">
      <article
        className="w-full flex flex-col md:w-1/2 md:pl-4 sm:pl-4 pl-4 lg:ml-4 lg:pt-14 ">


        <p className=" pt-4 text-white text-lg lg:text-xl font-bold pb-2 left ">
          Somos una familia de fe unida por el amor de Dios, un espacio donde crecemos espiritualmente y nos fortalecemos unos a otros en nuestro caminar con Cristo.
        </p>
            
        <div className="rounded-xl bg-gray-950/5  backdrop-blur-md "> 

        <p className="text-yellow-300 font-semibold text-center text-lg ">Hechos 2:46-47</p>
        <p className="text-white font-medium text-sm  lg:text-lg font-poppins left  border-l-4
         border-blue-500 pl-4 lg:pl-6"
         >
          Preocupémonos los unos por los otros, a fin de estimularnos al amor y a las buenas obras. No dejemos de congregarnos, como acostumbran hacerlo algunos, sino animémonos unos a otros, y con mayor razón ahora que vemos que aquel día se acerca.
          </p>
          </div>


        <p className="text-white  text-lg lg:text-xl font-bold py-4 left ">
          Cada encuentro es una oportunidad para conocer más a Dios, fortalecer nuestra fe y servir a los demás con amor y propósito. Juntos, caminamos en el propósito de Dios, aprendemos unos de otros y reflejamos Su luz en el mundo.
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
      <figure className="hidden lg:fill-none md:block md:w-[400px] lg:w-[600px]">
    <LazyImage
      src="https://res.cloudinary.com/dzpox6gya/image/upload/v1741046933/CrackCruz_rk9u6i.png"
      alt="church"
      width={600}
      height={400}
      className="w-full lg:fill-none"
    />
  </figure>

    </section>
  );
};

export default HomeView;


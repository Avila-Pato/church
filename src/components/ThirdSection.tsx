"use client";
import useScrollReveal from "@/hooks/useScrollReveal";
import Image from "next/image";

const ThirdSection = () => {
  useScrollReveal(".default", {
    delay: 300,
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    origin: "left",
    scale: 0.9,
    reset: false,
  });

  return (
    <main className="flex min-h-screen items-center justify-center
      relative overflow-hidden">
  {/* Imagen principal de fondo */}
  <div className="absolute w-full h-full ">
    <Image
      src="/img/church.webp"
      alt="Iglesia"
      width={1920} // Ajusta según el tamaño original de la imagen
      height={1080} // Ajusta según el tamaño original de la imagen
      className="w-full h-full object-cover object-center 
      translate-x-[-150px] lg:translate-x-[-290px] z-10"
    />
  </div>

  {/* Sección aside con la imagen de pastores y texto */}
  <div className="flex justify-end ml-8 lg:ml-32 lg:mr-36 lg:w-full relative z-20">

    <aside className="text-white relative rounded-lg lg:mx-1 p-4 lg:py-12 w-full max-w-2xl">
      {/* Galería de imágenes */}
      <figure className="flex justify-center mt-6  h-[400px]  md:h-[200px] lg:h-[500px] relative">
        
  <div className="w-full flex flex-col left-12 md:left-52 lg:left-0 relative max-w-[300px] md:max-w-[600px]  lg:max-w-[400px]">
    <Image
      src="/img/pastores.jpeg"
      alt="Pastores"
      width={900}
      height={900}
      className="rounded-full lg:rounded-3xl hover:scale-105 hover:shadow-2xl 
                 hover:shadow-black transition-all ease-in-out duration-500 
                 w-full h-auto md:max-w-[300px] lg:max-w-[500px]"
    />
    <div className="absolute top-0 w-full h-20 flex flex-col justify-center 
                    items-center text-center text-black">
      <p className="text-xl lg:text-3xl font-bold">Pastores</p>
      <p className="text-lg lg:text-2xl font-bold">Carlos Pozo & Nelly Troncoso</p>
    </div>
  </div>
</figure>

    </aside>
  </div>
</main>
  );
};

export default ThirdSection;

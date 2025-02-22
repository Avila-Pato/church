"use client";
import useScrollReveal from "@/hooks/useScrollReveal";
import Image from "next/image";

const ThirdSection = () => {
  useScrollReveal(".default", {
    delay: 300,
    distance: "50px",
    duration: 2000,
    easing: "ease-in-out",
    opacity: 0,
    origin: "left",
    scale: 0.9,
    reset: false,
  });

  return (
    <main className="flex min-h-screen  items-center justify-center gap-4">
      {/* Imagen principal */}
      <div className="absolute w-full h-full flex default ">
        {/* <div className="flex w-full mt absolute ">
         <Image src="/svg/nav.svg" alt="" width={600}  height={150} className="z-20  flex w-full justify-end  "/>
        </div> */}
        <Image
          src="/img/church.webp"
          alt="Pastores"
          width={900}
          height={70}
          className="translate-x-[-100px] z-30"
        />



      </div>

      {/* Sección aside ampliada */}
      <div className="flex justify-end mr-36 w-full">

        <aside className="text-white relative rounded-lg mx-1 py-12 min-w-screen ">
          {/* Galería de imágenes */}
          <figure className="flex justify-center gap-4 mt-6 mx-2 h-[400px] relative">
            <div className="w-full justify-center items-center flex flex-col left relative">
              {/* Imagen Pastores */}
              <Image
                src="/img/pastores.png"
                alt="Pastores"
                width={750}
                height={100}
                className="right"



/>
              {/* Degradado debajo de la imagen */}
              <div className="bg-opacity-100 py-5 justify-center items-center flex flex-col left relative">
                <p className="text-3xl font-bold">Pastores</p>
                <p className="text-3xl font-bold">Carlos Pozo & Nelly Troncoso</p>
              </div>
            </div>
          </figure>
        </aside>
      </div>
    </main>
  );
};

export default ThirdSection;

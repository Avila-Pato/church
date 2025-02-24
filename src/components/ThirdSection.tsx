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
                src="/img/pastores.jpeg"
                alt="Pastores"
                width={450}
                height={100}
                className="right rounded-3xl  hover:scale-105 hover:shadow-2xl hover:shadow-black  transition-all ease-in-out duration-500"
       />
              {/* Degradado debajo de la imagen */}
              <div className="absolute text-center bottom-72 w-full h-20  border bg-slate-400 font-poppins font-bold text-black  left ">
                <p className="text-3xl   font-bold">Pastores </p>
                <p className="text-2xl font-bold ">Carlos Pozo & Nelly Troncoso</p>
              </div>
            </div>
          </figure>
        </aside>
      </div>
    </main>
  );
};

export default ThirdSection;

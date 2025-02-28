"use client";
import Image from "next/image";
import useImageToggle from "../hooks/changeImage";
import Link from "next/link";

const SecondSection = () => {
  const [currentImage, toggleImage] = useImageToggle(
    "/img/two.jpg",
    "/img/prayer.jpg"
  );
  return (
    <section className="flex min-h-screen lg:py-36  ">
      <figure className=" flex lg:w-1/2 lg:px-6  ">
        <div
          className="
           lg:flex flex-col items-start lg:py-12   lg:px-4 z-10  text-white hidden left"
        >
        </div>
        <Image
          src={currentImage}
          alt="church"
          width={800}
          height={100}
          loading="lazy"
          className="  absolute lg:ml-3 left  md:hidden hidden lg:flex "
        />

        {/* contenedor de la imagen  */}
        <div className="bg-opacity-60 cursor-pointer z-30 ml-12 pb-8 items-center lg:pt-16 lg:w-[300px] lg:flex md:hidden justify-center left lg:flex-shrink-0 group relative">
          {/* Imagen principal con hover y click */}
          <Image
            src={
              currentImage === "/img/two.jpg"
                ? "/img/prayer.jpg"
                : "/img/two.jpg"
            }
            alt="next-image"
            width={300}
            height={300}
            loading="lazy"
            className="object-cover rounded-xl object-center transform hover:scale-110 transition duration-300 ease-in-out hidden md:flex lg:inline-flex"
            onClick={toggleImage}
            aria-label="Switch image"
          />

          {/* Imagen "click.webp" visible solo cuando el cursor está sobre la imagen */}
              {/* Pointe event none bloquea la interracion de atras para que funcione el hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src="webp/click.webp"
              alt="Click aquí"
              className="w-4 sm:w-8 md:w-16 pointer-events-auto"
              onClick={toggleImage} 
            />
          </div>
        </div>

      </figure>

      {/* Sección del texto */}
      <aside className="lg:w-full px-2 lg:md:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-center py-6 lg:px-8 md:px-12 z-10   ">
        <div className=" flex flex-col   ">
          <div
            className="lg:max-w-3xl lg:mx-auto  border-2 border-gray-700 border-b-blue-700 border-x-transparent
         text-white rounded-lg shadow-lg lg:p-8 bottom"
          >
            <div className="font-poppins text-sm lg:text-xl">
              <span className=" text-md lg:text-2xl font-bold  text-yellow-400">
                Bienvenidos
              </span>{" "}
              a nuestra comunidad cristiana, un espacio donde nos reunimos para
              fortalecer nuestra fe y crecer espiritualmente.
              <br />
              <br />
              {/* Primer catalogo */}
              <div className="bg-gray-800    lg:bg-transparent 
                p-3 lg:p-0 rounded-xl
                
                 ">
                <div className="md:flex  sm:flex justify-center">
                  <Image
                    src="/img/two.jpg"
                    alt="church"
                    width={200}
                    height={200}
                    loading="lazy"
                    // quality={100}
                    className="  flex  w-full justify-center
                        md:w-[900px]
                        lg:hidden rounded-3xl "
                  />
                  <br />
                  <div className="text-start  md:pt-4 md:pl-8 sm:pl-4 lg:pl-0 lg:pt-0">
                    Nos reunimos con el propósito de experimentar encuentros con Dios
                    que transformen nuestras vidas, guiándonos a vivir según Su
                    voluntad y reflejar Su amor en todo lo que hacemos.
                    Nuestro llamado es claro: amar a Dios sobre todas las cosas,
                    poniendo a Dios en el centro de nuestra vida diaria.
                  </div>

                </div>
              </div>

              <br />

              {/* Segundo catalogo */}
              <div className=" bg-gray-800  lg:bg-transparent 
                p-3 lg:p-0 rounded-xl
                 ">
                <div className="md:flex sm:flex  justify-center">
                  <Image
                    src="/img/prayer.jpg"
                    alt="church"
                    width={200}
                    height={200}

                    className=" flex  w-full justify-center
                        md:w-[900px]
                        lg:hidden rounded-3xl  "
                  />
                  <br />
                  <div className="text-start md:pt-8 md:pl-8 sm:pl-4 sm:pt-4  lg:pl-0 lg:pt-0">
                    Como comunidad estamos comprometidos a vivir el amor de Dios
                    en todos los aspectos de nuestra vida. Buscamos transformar
                    corazones y mentes a través del encuentro con Dios, guiados por
                    Su propósito y amor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default SecondSection;

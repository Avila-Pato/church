"use client"
import Image from "next/image";
import  useImageToggle  from "../hooks/changeImage";

const SecondSection = () => {
    const [currentImage, toggleImage] = useImageToggle( "/img/two.jpg", "/img/prayer.jpg");
  return (
    <section className="flex min-h-screen lg:py-36 ">
      <figure className=" flex lg:w-1/2 lg:px-6   ">
        <div className="flex flex-col ">
          <div className="
           lg:flex flex-col items-start lg:py-12   lg:px-4 z-10   text-white hidden left">
            <p className="text-2xl tracking-wider">Nuestra Iglesia</p>
            <p  className="text-2xl tracking-wider">Bienvenidos a Imep El Bosque</p>
            </div>
          <Image
            src={currentImage}
            alt="church"
            width={900}
            height={100}
            className="  brightness-75 hover:brightness-100  absolute lg:ml-3 left  hidden md:flex "
            />
            </div>
             <div
              className="bg-opacity-60 lg:p-4 cursor-pointer z-10 items-center  min-h-min lg:flex md:hidden justify-center  left "
              onClick={toggleImage}
            >
              <Image
                src={currentImage === "/img/two.jpg" ? "/img/prayer.jpg" : "/img/two.jpg"} // Muestra la siguiente imagen
                alt="next-image"
                width={300}
                height={300}
                className="object-cover rounded-xl object-center transform hover:scale-110 transition duration-300 ease-in-out hidden md:flex "
                />
                </div>
       
      </figure>
     

       {/* Sección del texto */}
       <aside className="lg:w-full lg:md:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-center py-6 lg:px-8 md:px-12 z-10   ">

          <div className=" flex flex-col   ">         
        <div className="lg:max-w-3xl lg:mx-auto  border-2 border-gray-700 border-b-blue-700 border-x-transparent
         text-white rounded-lg shadow-lg lg:p-8 bottom">

          <p className="font-poppins text-md lg:text-xl font-bold py-4 ">
            <span className=" text-sm lg:text-2xl text-yellow-400">Bienvenidos</span> a nuestra comunidad cristiana, un espacio donde nos reunimos para fortalecer nuestra fe y crecer espiritualmente.
            <br />
            <br />
            Nos reunimos con el propósito de experimentar encuentros con Dios que transformen nuestras vidas, guiándonos a vivir según Su voluntad y reflejar Su amor en todo lo que hacemos.
            <br />
            <br />
            Nuestro llamado es claro: amar a Dios sobre todas las cosas, poniendo a Dios en el centro de nuestra vida diaria.
          </p>
          <p className="text-lg leading-relaxed">
            Somos una comunidad de fe comprometida a vivir el amor de Dios en todos los aspectos de nuestra vida. Buscamos transformar corazones y mentes a través del encuentro con Dios, guiados por Su propósito y amor.
          </p>
        </div>
        </div>
      </aside>

    </section>
  );
};

export default SecondSection;

"use client"
import Image from "next/image";
import  useImageToggle  from "../hooks/changeImage";

const SecondSection = () => {
    const [currentImage, toggleImage] = useImageToggle( "/img/two.jpg", "/img/prayer.jpg");
  return (
    <section className="flex min-h-screen py-16 ">
      <figure className=" w-full md:w-1/2 px-6   ">
        <div className="flex flex-col  ">
          <div className="
           flex flex-col items-start py-12  px-4 z-10  relative text-white left">
            <p className="text-2xl tracking-wider">Nuestra Iglesia</p>
            <p  className="text-2xl tracking-wider">Bienvenidos a Imep El Bosque</p>
            </div>
           

          <Image
            src={currentImage}
            alt="church"
            width={900}
            height={100}
            className="  brightness-75 hover:brightness-100  absolute ml-3 left  "
            />
            </div>
             <div
              className="bg-opacity-60 p-4 cursor-pointer z-10 items-center  min-h-min flex justify-center  left "
              onClick={toggleImage}
            >
              <Image
                src={currentImage === "/img/two.jpg" ? "/img/prayer.jpg" : "/img/two.jpg"} // Muestra la siguiente imagen
                alt="next-image"
                width={300}
                height={300}
                className="object-cover rounded-xl object-center transform hover:scale-110 transition duration-300 ease-in-out "
                />
                </div>
       
      </figure>
     

       {/* Sección del texto */}
       <aside className="w-full md:w-1/2 flex flex-col justify-center items-center py-6 px-8 md:px-12 z-10">
        <div className="max-w-3xl mx-auto  border-2 border-gray-700 border-b-blue-700 border-x-transparent text-white rounded-lg shadow-lg p-8 bottom">
          <p className="font-poppins text-xl font-bold py-4">
            <span className="text-2xl text-yellow-400">Bienvenidos</span> a nuestra comunidad cristiana, un espacio donde nos reunimos para fortalecer nuestra fe y crecer espiritualmente.
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
      </aside>

    </section>
  );
};

export default SecondSection;

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
    <main className="flex min-h-screen  w-full items-center justify-center
      relative overflow-hidden">
      {/* Imagen principal de fondo */}
      <div className="absolute w-full h-full left ">
        <Image
          src="/img/church.webp"
          alt="Iglesia"
          width={1920} // Ajusta según el tamaño original de la imagen
          height={1080} // Ajusta según el tamaño original de la imagen
          className="w-full h-full object-cover object-center 
      translate-x-[-150px] md:translate-x-[-350px] lg:translate-x-[-290px] z-10 hidden sm:flex"
        />
      </div>

      <div className="absolute w-full h-full ">
        <Image
          src="/img/backgorund.jpg"
          alt="jesus"
          width={1920} // Ajusta según el tamaño original de la imagen
          height={1080} // Ajusta según el tamaño original de la imagen
          priority
          className="w-full h-full object-cover object-center md:hidden
      z-10 "
        />
      </div>

      {/* Sección aside con la imagen de pastores y texto */}
      <div className="flex  lg:w-full justify-end items-end min-h-screen  sm:min-h-[200px] md:min-h-fit  lg:min-h-fit  md:ml-40 lg:mr-24 relative z-20">
        <aside className="text-white relative rounded-lg  lg:mx-1 p-4 lg:py-12 w-full  max-w-2xl">

          <figure className="flex justify-center lg:mt-6 mt-2 md:h-[400px] min-h-fit   lg:h-[600px] relative">

            <div className="w-full flex flex-col  relative max-w-[700px]  lg:max-w-[700px]  md:max-w-[600px]  right">

              <div className="lg:text-yellow-200 text-yellow-300 border-b-2 text-center mb-5 md:mb-2 lg:mb-2 lg:text-5xl text-3xl font-bold tracking-widest">
                <h1>Unete a nuestra comunidad </h1>
              </div>
              <div className="bg-[#3b3737]/80 p-8 text-lg rounded-3xl  ">
                <p>
                  La iglesia no es solo una multitud reunida alrededor de un escenario, sino una comunidad que comparte la vida alrededor de una mesa, donde se forjan relaciones profundas y significativas. Más allá de la adoración y la enseñanza, el verdadero crecimiento espiritual ocurre en la comunión, en la conversación honesta y en el apoyo mutuo.
                   </p>
                  <p className="mt-4">
                    Una de las maneras centrales en las que crecemos como discípulos de Jesús es teniendo una comunicación intencional con personas que comparten el mismo objetivo: seguir a Cristo y vivir conforme a sus enseñanzas. A través de estas relaciones, aprendemos, nos edificamos unos a otros y experimentamos el amor de Dios en acción.
                  </p>
               

              </div>
           
              <p className="text-yellow-300  font-semibold text-center text-lg mt-3">Hechos 2:46-47</p>
              <p className="text-white font-medium text-sm lg:text-base font-poppins border-l-4 border-blue-500 pt-6 pl-4 lg:pl-6 max-w-3xl mx-auto">
                Día tras día, continuaban unánimes en el templo y partiendo el pan en los hogares, comían juntos con alegría y sencillez de corazón, alabando a Dios y hallando favor con todo el pueblo. Y el Señor añadía cada día al número de ellos los que iban siendo salvos.
              </p>
              {/* Contenedor de imagen  */}
              </div>
          </figure>
        </aside>
      </div>
    </main>
  );
};

export default ThirdSection;

{/* <Image
      src="/img/pastores.jpeg"
      alt="Pastores"
      width={900}
      height={900}
      className="rounded-full lg:rounded-3xl hover:scale-105 hover:shadow-2xl 
                 hover:shadow-black transition-all ease-in-out duration-500 
                 w-full h-auto md:max-w-[500px] lg:max-w-[500px]"
    />
    <div className="absolute top-0 w-full h-20 flex flex-col justify-center 
                    items-center text-center text-black">
      <p className="text-xl lg:text-3xl font-bold">Pastores</p>
      <p className="text-lg lg:text-2xl font-bold">Carlos Pozo & Nelly Troncoso</p>
    </div> */}
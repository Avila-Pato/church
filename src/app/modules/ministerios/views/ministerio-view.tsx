"use client"
import Image from "next/image";
import { useRef } from "react";


const MinisteryPage = () => {

    const seccionesRef = {
        central: useRef<HTMLElement | null>(null),
        sur: useRef<HTMLElement | null>(null),
        norte: useRef<HTMLElement | null>(null),
    };

    // en css se maneja el scroll
    const scrollToSection = (seccion: keyof typeof seccionesRef) => {
        if (seccionesRef[seccion].current) {
            seccionesRef[seccion].current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <main className="min-h-screen flex flex-col justify-start  relative ">

            {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] min-h-screen flex flex-col justify-start  pointer-events-none"></div> */}

            <div className="lg:min-h-screen object-cover  flex flex-col lg:justify-center  lg:items-center w-full  opacity-90 relative">
                {/* Imagen de fondo */}
                    <div className="absolute  inset-0">
                <Image
                    src="https://res.cloudinary.com/dzpox6gya/image/upload/v1740928097/bible1_ieiw33.jpg"
                    alt="Descripción de la imagen"
                    width={1920}
                    height={1080}
                    className=" w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[800px] rounded-xl"
                    priority
                    />
                    </div>
                {/* Contenedor de los elementos sobre la imagen */}
                <div className=" relative z-10  flex w-full h-[500px] ">
                    {/* Sección izquierda */}
                    <div className=" w-full lg:w-1/2 flex  flex-col items-center justify-center   p-6">
                        <p className="font-extrabold text-3xl text-white font font-Dancing_Script">Nuestra comunidad</p>

                        <p className=" w-full lg:w-1/2 text-2xl text-white">Queremos caminar contigo en fe. Nuestro equipo de pastores y servidores está aquí para apoyarte. Escríbenos y nos pondremos en contacto contigo</p>
                        <div className="lg:w-1/2 w-full pt-5">
                            <button className=" secondary rounded-xl bg-gray-400/80 p-2  lg:hover:bg-gray-600">
                                Leer mas...
                            </button>
                        </div>
                    </div>

                    {/* Sección derecha */}
                    <div className="hidden sm:h w-1/2 lg:flex flex-col items-center justify-center text-white  gap-4">
                        <div className="bg-blue-600/10  backdrop-blur-2xl  w-3/4 text-center p-7    rounded-xl  relative 
                         transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer ">
                            <div className="w-full md:pl-20  ">
                            <p className="font-semibold text-2xl md:ml-">Iglesia Central
                            </p>
                            <button onClick={() => scrollToSection("central")} className="secondary rounded-xl bg-gray-400/40 px-2 hover:bg-gray-600">
                                Conocer..
                            </button>
                            </div>
                            <Image
                                src="/img/bible2.jpg"
                                alt="church"
                                width={300}
                                height={300}
                                loading="lazy"
                                quality={100}
                                className="h-[100px] w-[120px]  absolute object-cover top-0 pt-2 rounded-xl 
                                 transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                            />
                        </div>
                        <div className="bg-pink-600/10  backdrop-blur-md  w-3/4 text-center p-7 rounded-xl   relative
                         transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer   ">
                             <div className="w-full md:pl-20  "> 
                            <p className="font-semibold text-2xl
                             ">Zona sur</p>
                            <button onClick={() => scrollToSection("sur")} className="secondary rounded-xl bg-gray-400/40 px-2 hover:bg-gray-600">
                                Conocer..
                            </button>
                            </div>
                            <Image
                                src="/img/bible2.jpg"
                                alt="church"
                                width={300}
                                height={300}
                                loading="lazy"
                                quality={100}
                                className="h-[100px] w-[120px]  absolute object-cover top-0 pt-2 rounded-xl
                                transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                            />
                        </div>

                        <div className="bg-yellow-600/10  backdrop-blur-md  w-3/4 text-center p-7 rounded-xl  relative  transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer  ">
                        <div className="w-full md:pl-20  ">
                            <p className="font-semibold text-2xl">Zona norte</p>
                            <button onClick={() => scrollToSection("norte")} className="secondary rounded-xl bg-gray-400/40 px-2 hover:bg-gray-600">
                                Conocer..
                            </button>
                            </div>
                            <Image
                                src="/img/bible2.jpg"
                                alt="church"
                                width={300}
                                height={300}
                                loading="lazy"
                                quality={100}
                                className="h-[100px] w-[120px]  absolute object-cover top-0 pt-2 rounded-xl
                                transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="text-center   lg:p-4 lg:mx-0 rounded-xl text-white relative">
                <div className=" bg-[#222222] relative rounded-xl p-6  ">
                    <div className="relative z-10">
                        {/* Imagen de */}
                        {/* <Image
                        src="/img/central.jpg"
                        alt="church"
                        width={1000}
                        height={1000}
                        loading="lazy"
                        quality={100}
                        className="absolute inset-0 w-full h-full object-cover opacity-40   rounded-xl"
                    /> */}

                        <section ref={seccionesRef.central} className="lg:text-8xl text-xl font-bold tracking-wide text-center lg:text-start ">Iglesia  <p className="font-Dancing_Script inline-flex">
                            Central
                        </p>
                        </section>
                        <p className="md:px-44 lg:px-0 lg:p-4 lg:text-lg text-start text-base font-medium">
                            Queremos estar cerca de ti y acompañarte en cada momento. Nuestro equipo de pastores e intercesores está disponible para escucharte, orar por ti y brindarte apoyo. No estás solo, estamos aquí para ti.
                        </p>
                    </div>
                </div>
            </div>

            {/* 1 catalogo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 gap-1  p-4   max-w-full mx-auto">
                <div className="bg-[#E1D7CB] rounded-xl w-full  p-4  right-10">
                    <Image
                        src="/img/central2.jpg"
                        alt="church"
                        width={900}
                        height={900}
                        loading="lazy"
                        quality={100}
                        className="w-full h-[250px] object-cover rounded-xl  "
                    />
                    <p className="mt-3 font-bold text-black truncate">Iglesia Imep el bosque.</p>
                    <p className="text-md text-black mt-2 ">
                        Mi nombre es Saúl Ramos, soy originario de Bogotá, Colombia. Mi esposa se llama Sandra Díaz, y tenemos cuatro hijos: Owen, Melanie, Victoria y Emanuel. Llevamos 16 años viviendo en Tijuana, México. En el 2016, fuimos invitados a pastorear la iglesia de la cual ahora somos líderes. Nuestra iglesia está situada en la zona este de la ciudad, una comunidad trabajadora que reúne personas de diversas partes de México.

                        El proyecto de nuestra iglesia es alcanzar a la comunidad para Cristo, mostrando su amor a través del servicio, evangelismo, compañerismo, discipulado y adoración a Dios. Creemos firmemente que la iglesia debe ser una casa de misericordia abierta a todas las personas, sin importar su nivel académico, lugar de origen, raza o estatus social. Este formato es más claro y organizado.
                    </p>
                </div>

                <div className="bg-[#E1D7CB] flex flex-col rounded-xl w-full  p-4 shadow-lg">
                    <Image
                        src="/img/two.jpg"
                        alt="church"
                        width={900}
                        height={900}
                        loading="lazy"
                        quality={100}
                        className="w-full h-[250px] object-cover rounded-xl"
                    />
                    <p className="mt-3 font-bold text-black truncate">Iglesia Imep el bosque.</p>
                    <p className="text-md text-black mt-2">
                        Mi nombre es Saúl Ramos, soy originario de Bogotá, Colombia. Mi esposa se llama Sandra Díaz, y tenemos cuatro hijos: Owen, Melanie, Victoria y Emanuel. Llevamos 16 años viviendo en Tijuana, México. En el 2016, fuimos invitados a pastorear la iglesia de la cual ahora somos líderes. Nuestra iglesia está situada en la zona este de la ciudad, una comunidad trabajadora que reúne personas de diversas partes de México.

                        El proyecto de nuestra iglesia es alcanzar a la comunidad para Cristo, mostrando su amor a través del servicio, evangelismo, compañerismo, discipulado y adoración a Dios. Creemos firmemente que la iglesia debe ser una casa de misericordia abierta a todas las personas, sin importar su nivel académico, lugar de origen, raza o estatus social. Este formato es más claro y organizado.
                    </p>
                </div>
            </div>

            {/* Segunda seccion */}

            <section ref={seccionesRef.sur} className="
              lg:p-4 lg:mx-0 rounded-xl text-white relative">
                <div className=" bg-[#222222] relative rounded-xl p-6 ">
                    {/* <Image
                        src="/img/central.jpg"
                        alt="church"
                        width={1000}
                        height={1000}
                        loading="lazy"
                        quality={100}
                        className="absolute inset-0 w-full h-full object-cover opacity-40 "
                    /> */}
                    <div className="relative z-10">

                        <div className="lg:text-8xl text-xl font-bold tracking-wide text-center lg:text-start">Zona <p className="font-Dancing_Script inline-flex">
                            Sur
                        </p>
                        </div>

                        <p className="md:px-44 lg:px-0 p-4 lg:text-lg text-start text-base font-medium">

                            Queremos estar cerca de ti y acompañarte en cada momento. Nuestro equipo de pastores e intercesores está disponible para escucharte, orar por ti y brindarte apoyo. No estás solo, estamos aquí para ti.
                        </p>

                    </div>
                </div>
            </section>




            {/* 2 catalogo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 gap-1  justify-center p-2 items-center max-w-full mx-auto">
                <div className="bg-[#E1D7CB] flex flex-col rounded-xl w-full  p-4 shadow-lg">
                    <Image
                        src="/img/central2.jpg"
                        alt="church"
                        width={900}
                        height={900}
                        loading="lazy"
                        quality={100}
                        className="w-full h-[250px] object-cover rounded-xl"
                    />
                    <p className="mt-3 font-bold text-black truncate">Iglesia Imep el bosque.</p>
                    <p className="text-md text-black mt-2 ">
                        Mi nombre es Saúl Ramos, soy originario de Bogotá, Colombia. Mi esposa se llama Sandra Díaz, y tenemos cuatro hijos: Owen, Melanie, Victoria y Emanuel. Llevamos 16 años viviendo en Tijuana, México. En el 2016, fuimos invitados a pastorear la iglesia de la cual ahora somos líderes. Nuestra iglesia está situada en la zona este de la ciudad, una comunidad trabajadora que reúne personas de diversas partes de México.

                        El proyecto de nuestra iglesia es alcanzar a la comunidad para Cristo, mostrando su amor a través del servicio, evangelismo, compañerismo, discipulado y adoración a Dios. Creemos firmemente que la iglesia debe ser una casa de misericordia abierta a todas las personas, sin importar su nivel académico, lugar de origen, raza o estatus social. Este formato es más claro y organizado.
                    </p>
                </div>

                <div className="bg-[#E1D7CB] flex flex-col rounded-xl w-full p-4 shadow-lg">
                    <Image
                        src="/img/two.jpg"
                        alt="church"
                        width={900}
                        height={900}
                        loading="lazy"
                        quality={100}
                        className="w-full h-[250px] object-cover rounded-xl"
                    />
                    <p className="mt-3 font-bold text-black truncate">Iglesia Imep el bosque.</p>
                    <p className="text-md text-black mt-2">
                        Mi nombre es Saúl Ramos, soy originario de Bogotá, Colombia. Mi esposa se llama Sandra Díaz, y tenemos cuatro hijos: Owen, Melanie, Victoria y Emanuel. Llevamos 16 años viviendo en Tijuana, México. En el 2016, fuimos invitados a pastorear la iglesia de la cual ahora somos líderes. Nuestra iglesia está situada en la zona este de la ciudad, una comunidad trabajadora que reúne personas de diversas partes de México.

                        El proyecto de nuestra iglesia es alcanzar a la comunidad para Cristo, mostrando su amor a través del servicio, evangelismo, compañerismo, discipulado y adoración a Dios. Creemos firmemente que la iglesia debe ser una casa de misericordia abierta a todas las personas, sin importar su nivel académico, lugar de origen, raza o estatus social. Este formato es más claro y organizado.
                    </p>
                </div>
            </div>

            {/* Zona norte */}

            <section ref={seccionesRef.norte} className=" text-center    lg:p-4 lg:mx-0 rounded-xl text-white relative">
                <div className="bg-[#222222] relative rounded-xl p-6 ">
                    {/* <Image
                        src="/img/central.jpg"
                        alt="church"
                        width={1000}
                        height={1000}
                        loading="lazy"
                        quality={100}
                        className="absolute inset-0 w-full h-full object-cover opacity-40 "
                    /> */}
                    <div className="relative z-10">

                        <div className="lg:text-8xl text-xl font-bold tracking-wide text-center lg:text-start ">Zona <p className="font-Dancing_Script inline-flex">
                            Norte
                        </p>
                        </div>

                        <p className="md:px-44 lg:px-0 p-4 lg:text-lg text-start text-base font-medium">

                            Queremos estar cerca de ti y acompañarte en cada momento. Nuestro equipo de pastores e intercesores está disponible para escucharte, orar por ti y brindarte apoyo. No estás solo, estamos aquí para ti.
                        </p>

                    </div>
                </div>
            </section>




            {/* 2 catalogo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 gap-1  justify-center p-2 items-center max-w-full mx-auto">
                <div className="bg-[#E1D7CB] flex flex-col rounded-xl w-full   p-4 shadow-lg">
                    <Image
                        src="/img/central2.jpg"
                        alt="church"
                        width={900}
                        height={900}
                        loading="lazy"
                        quality={100}
                        className="w-full h-[250px] object-cover rounded-xl"
                    />
                    <p className="mt-3 font-bold text-black truncate">Iglesia Imep el bosque.</p>
                    <p className="text-md text-black mt-2 ">
                        Mi nombre es Saúl Ramos, soy originario de Bogotá, Colombia. Mi esposa se llama Sandra Díaz, y tenemos cuatro hijos: Owen, Melanie, Victoria y Emanuel. Llevamos 16 años viviendo en Tijuana, México. En el 2016, fuimos invitados a pastorear la iglesia de la cual ahora somos líderes. Nuestra iglesia está situada en la zona este de la ciudad, una comunidad trabajadora que reúne personas de diversas partes de México.

                        El proyecto de nuestra iglesia es alcanzar a la comunidad para Cristo, mostrando su amor a través del servicio, evangelismo, compañerismo, discipulado y adoración a Dios. Creemos firmemente que la iglesia debe ser una casa de misericordia abierta a todas las personas, sin importar su nivel académico, lugar de origen, raza o estatus social. Este formato es más claro y organizado.
                    </p>
                </div>

                <div className="bg-[#E1D7CB] flex flex-col rounded-xl w-full  p-4 shadow-lg">
                    <Image
                        src="/img/two.jpg"
                        alt="church"
                        width={900}
                        height={900}
                        loading="lazy"
                        quality={100}
                        className="w-full h-[250px] object-cover rounded-xl"
                    />
                    <p className="mt-3 font-bold text-black truncate">Iglesia Imep el bosque.</p>
                    <p className="text-md text-black mt-2">
                        Mi nombre es Saúl Ramos, soy originario de Bogotá, Colombia. Mi esposa se llama Sandra Díaz, y tenemos cuatro hijos: Owen, Melanie, Victoria y Emanuel. Llevamos 16 años viviendo en Tijuana, México. En el 2016, fuimos invitados a pastorear la iglesia de la cual ahora somos líderes. Nuestra iglesia está situada en la zona este de la ciudad, una comunidad trabajadora que reúne personas de diversas partes de México.

                        El proyecto de nuestra iglesia es alcanzar a la comunidad para Cristo, mostrando su amor a través del servicio, evangelismo, compañerismo, discipulado y adoración a Dios. Creemos firmemente que la iglesia debe ser una casa de misericordia abierta a todas las personas, sin importar su nivel académico, lugar de origen, raza o estatus social. Este formato es más claro y organizado.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default MinisteryPage
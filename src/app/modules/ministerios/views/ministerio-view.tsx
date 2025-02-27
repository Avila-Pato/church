import Image from "next/image";

const MinisteryPage = () => {
    return ( 
        <main className="min-h-screen flex flex-col justify-start  relative ">
              <div className="text-center mt-32 bg-[#ffffffb0] mx-6 lg:p-4 lg:mx-24 rounded-xl text-white relative">
                <div className=" lg:hover:scale-110 ease-in-out transition-all duration-300 cursor-pointer bg-[#222222] relative overflow-hidden rounded-xl p-6">
                    
                    {/* Imagen de fondo */}
                    <Image
                        src="/img/central.jpg"
                        alt="church"
                        width={1000}
                        height={1000}
                        loading="lazy"
                        quality={100}
                        className="absolute inset-0 w-full h-full object-cover opacity-40 "
                    />

                    {/* Contenido */}
                    <div className="relative z-10">
                        <p className="lg:text-8xl text-xl font-bold tracking-wide">Zona Central</p>
                        <p className="w-full text-start  md:px-44 p-4 lg:text-lg text-base font-medium">
                            Queremos estar cerca de ti y acompañarte en cada momento. Nuestro equipo de pastores e intercesores está disponible para escucharte, orar por ti y brindarte apoyo. No estás solo, estamos aquí para ti.
                        </p>
                    </div>
                    </div>
                </div>

                {/* 1 catalogo */}
                    <div className="grid grid-cols-1 lg:gap-16 gap-1  justify-center p-2 items-center w-full">
                    <div className="bg-[#e3e3e3f6] flex flex-col rounded-xl w-full  lg:w-[600px] p-4 shadow-lg">
                    <Image
                        src="/img/central2.jpg"
                        alt="church"
                        width={900}
                        height={900}
                        loading="lazy"
                        quality={100}
                        className="w-full h-[150px] object-cover rounded-xl"
                    />
                    <p className="mt-3 font-bold text-black truncate">Iglesia Imep el bosque.</p>
                    <p className="text-md text-black mt-2 ">
                    Mi nombre es Saúl Ramos, soy originario de Bogotá, Colombia. Mi esposa se llama Sandra Díaz, y tenemos cuatro hijos: Owen, Melanie, Victoria y Emanuel. Llevamos 16 años viviendo en Tijuana, México. En el 2016, fuimos invitados a pastorear la iglesia de la cual ahora somos líderes. Nuestra iglesia está situada en la zona este de la ciudad, una comunidad trabajadora que reúne personas de diversas partes de México.

                    El proyecto de nuestra iglesia es alcanzar a la comunidad para Cristo, mostrando su amor a través del servicio, evangelismo, compañerismo, discipulado y adoración a Dios. Creemos firmemente que la iglesia debe ser una casa de misericordia abierta a todas las personas, sin importar su nivel académico, lugar de origen, raza o estatus social. Este formato es más claro y organizado.
                    </p>
                </div>

                <div className="bg-[#E3E3E3] flex flex-col rounded-xl w-full lg:w-[600px] p-4 shadow-lg">
                    <Image
                        src="/img/two.jpg"
                        alt="church"
                        width={900}
                        height={900}
                        loading="lazy"
                        quality={100}
                        className="w-fullh-[150px] object-cover rounded-xl"
                    />
                    <p className="mt-3 font-bold text-black truncate">Iglesia Imep el bosque.</p>
                    <p className="text-md text-black mt-2">
                    Mi nombre es Saúl Ramos, soy originario de Bogotá, Colombia. Mi esposa se llama Sandra Díaz, y tenemos cuatro hijos: Owen, Melanie, Victoria y Emanuel. Llevamos 16 años viviendo en Tijuana, México. En el 2016, fuimos invitados a pastorear la iglesia de la cual ahora somos líderes. Nuestra iglesia está situada en la zona este de la ciudad, una comunidad trabajadora que reúne personas de diversas partes de México.

                    El proyecto de nuestra iglesia es alcanzar a la comunidad para Cristo, mostrando su amor a través del servicio, evangelismo, compañerismo, discipulado y adoración a Dios. Creemos firmemente que la iglesia debe ser una casa de misericordia abierta a todas las personas, sin importar su nivel académico, lugar de origen, raza o estatus social. Este formato es más claro y organizado.
                    </p>
                </div>
                </div>

                    {/* Segunda seccion */}
                    <div className="text-center lg:mt-32 bg-[#ffffffb0] mx-6 lg:p-4 lg:mx-24 rounded-xl text-white relative">
                <div className=" lg:hover:scale-110 ease-in-out transition-all duration-300 cursor-pointer bg-[#222222] relative overflow-hidden rounded-xl p-6">
                    
                    {/* Imagen de fondo */}
                    <Image
                        src="/img/central.jpg"
                        alt="church"
                        width={1000}
                        height={1000}
                        loading="lazy"
                        quality={100}
                        className="absolute inset-0 w-full h-full object-cover opacity-40 "
                    />
                       
                       
                            
                    {/* Contenido */}
                    <div className="relative z-10 ">
                        <p className="lg:text-8xl text-xl font-bold tracking-wide">Zona Zur</p>
                        <p className="w-full text-start  md:px-44 p-4 lg:text-lg text-base font-medium">
                            Queremos estar cerca de ti y acompañarte en cada momento. Nuestro equipo de pastores e intercesores está disponible para escucharte, orar por ti y brindarte apoyo. No estás solo, estamos aquí para ti.
                        </p>
                    </div>
                    </div>
                </div>

               
                

                {/* 2 catalogo */}
                <div className="grid grid-cols-1 lg:gap-16 gap-1  justify-center p-2 items-center w-full">
                    <div className="bg-[#e3e3e3f6] flex flex-col rounded-xl w-full  lg:w-[600px] p-4 shadow-lg">
                    <Image
                        src="/img/central2.jpg"
                        alt="church"
                        width={900}
                        height={900}
                        loading="lazy"
                        quality={100}
                        className="w-full h-[150px] object-cover rounded-xl"
                    />
                    <p className="mt-3 font-bold text-black truncate">Iglesia Imep el bosque.</p>
                    <p className="text-md text-black mt-2 ">
                    Mi nombre es Saúl Ramos, soy originario de Bogotá, Colombia. Mi esposa se llama Sandra Díaz, y tenemos cuatro hijos: Owen, Melanie, Victoria y Emanuel. Llevamos 16 años viviendo en Tijuana, México. En el 2016, fuimos invitados a pastorear la iglesia de la cual ahora somos líderes. Nuestra iglesia está situada en la zona este de la ciudad, una comunidad trabajadora que reúne personas de diversas partes de México.

                    El proyecto de nuestra iglesia es alcanzar a la comunidad para Cristo, mostrando su amor a través del servicio, evangelismo, compañerismo, discipulado y adoración a Dios. Creemos firmemente que la iglesia debe ser una casa de misericordia abierta a todas las personas, sin importar su nivel académico, lugar de origen, raza o estatus social. Este formato es más claro y organizado.
                    </p>
                </div>

                <div className="bg-[#E3E3E3] flex flex-col rounded-xl w-full lg:w-[600px] p-4 shadow-lg">
                    <Image
                        src="/img/two.jpg"
                        alt="church"
                        width={900}
                        height={900}
                        loading="lazy"
                        quality={100}
                        className="w-fullh-[150px] object-cover rounded-xl"
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
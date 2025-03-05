
import Image from "next/image";


const AboutView = () => {
    return (
        <section className="h-screen flex overflow-hidden ">
            <div className="relative lg:w-[1000px]   h-screen">
                {/* Círculo de fondo */}

                <div className=" md:w-[100px] ">
                    <div className="absolute
                     
                    lg:-translate-x-16
                    lg:w-[min(70vw,700px)]
                    lg:h-[min(70vw,700px)] 
                    
                    md:w-[min(60vw,500px)] 
                    md:h-[min(60vw,500px)] 
                    md:-translate-x-0
                    md:mt-0
                    
                    sm:w-[min(70vw,400px)] 
                    sm:h-[min(70vw,400px)] 
                    sm:-translate-x-0
                    sm:mt-12
                    
                    hidden sm:block
                   


                    bg-gray-300
                    rounded-full 
                    shadow-lg 
                    z-10"

                        style={{
                            boxShadow: "rgba(206, 206, 206, 0.45) 0px 0px 33.8789px 0px",
                            left: "clamp(-100px, -20vw, -91.6836px)",
                            top: "clamp(100px, 10vh, 69.1406px)",
                            right: "clamp(-50px, -10vw, 0px)", // Ajusta la posición desde la derecha
                            bottom: "clamp(-50px, -10vh, 0px)", // Ajusta la posición desde abajo
                            zIndex: "1"
                        }}
                    />


                </div>
                    {/* Imagen que se sobrepone */}
                    <Image
                        src="/webp/church.webp"
                        alt="church"
                        width={900}
                        height={900}
                        loading="lazy"
                        quality={100}
                        className=" 
                        lg:w-[500px] lg:h-[500px] 
                        lg:-translate-x-16
                        lg:bottom-0 

                        md:w-[490px] md:h-[480px]
                        md:-translate-x-36
                        md:bottom-0 

                        sm:w-[390px] sm:h-[380px]
                        sm:-translate-x-36
                        sm:bottom-0 
                        hidden sm:block

                        

                        object-cover z-50 absolute "
                    />
            </div>

            <div className="w-full max-h-screen z-0 flex
             flex-col justify-center items-center py-8 relative ">
                {/* Título principal */}
                <h1 className="text-3xl font-bold text-blue-900 mb-6">Contactos</h1>

                {/* Contenedor de tarjetas */}
                <div className="w-full grid grid-cols-2 gap-2 px-4">
                    {/* Tarjeta 1 */}
                    <div className="bg-white bg-opacity-75 rounded-xl p-6 text-center">
                        <p className="text-xl font-semibold text-gray-800">Iglesia Imep - Sede Central</p>
                        <p className="text-gray-600">Contacto: +569 9932554391</p>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="bg-white bg-opacity-75 rounded-xl p-6 text-center">
                        <p className="text-xl font-semibold text-gray-800">Iglesia Lorem - Sede Norte</p>
                        <p className="text-gray-600">Contacto: +569 876543210</p>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="bg-white bg-opacity-75 rounded-xl p-6 text-center">
                        <p className="text-xl font-semibold text-gray-800">Iglesia Ipsum - Sede Sur</p>
                        <p className="text-gray-600">Contacto: +569 123456789</p>
                    </div>

                    {/* Tarjeta 4 */}
                    <div className="bg-white bg-opacity-75 rounded-xl p-6 text-center">
                        <p className="text-xl font-semibold text-gray-800">Iglesia Dolor - Sede Este</p>
                        <p className="text-gray-600">Contacto: +569 987654321</p>
                    </div>

                    {/* Tarjeta 5 */}
                    <div className="bg-white bg-opacity-75 rounded-xl p-6 text-center">
                        <p className="text-xl font-semibold text-gray-800">Iglesia Sit Amet - Sede Oeste</p>
                        <p className="text-gray-600">Contacto: +569 555555555</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutView;
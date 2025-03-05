import Image from "next/image";

const AboutView = () => {
    return (
        <section className="h-screen w-full flex items-center overflow-hidden">
            {/* Contenedor principal con flex para dividir en dos columnas */}
            <div className="relative flex w-full h-full">
                {/* Contenedor de la imagen y círculo de fondo */}
                <div className="relative md:w-1/2 sm:w-1/2  h-full ">
                    {/* Círculo de fondo */}
                    <div className="md:w-[100px] ">

                        <div
                            className="
                                absolute 
                                lg:-translate-x-16 lg:w-[min(70vw,700px)] lg:h-[min(70vw,700px)]
                                lg:block 

                                md:w-[min(60vw,500px)] md:h-[min(60vw,500px)] md:-translate-x-9 
                                md:mt-0
                                md:block

                                sm:w-[min(70vw,400px)] sm:h-[min(70vw,400px)] sm:mt-12 
                                sm:block

                                w-[min(90vw,400px)] h-[min(90vw,400px)] 
                                hidden
                                
                                bg-gray-300 rounded-full shadow-lg z-10
                                "
                            style={{
                                boxShadow: "rgba(206, 206, 206, 0.45) 0px 0px 33.8789px 0px",
                                left: "clamp(-100px, -20vw, -91.6836px)",
                                top: "clamp(100px, 10vh, 69.1406px)",
                                right: "clamp(-50px, -10vw, 0px)",
                                bottom: "clamp(-50px, -10vh, 0px)",
                                zIndex: "1",
                               
                            }}
                        />
                    </div>

                    {/* Imagen */}
                    <div className="flex flex-col w-full  ">
                        <Image
                            src="/webp/church.webp"
                            alt="church"
                            width={900}
                            height={900}
                            loading="lazy"
                            quality={100}
                            className="
                            relative
                                lg:w-[500px] lg:h-[500px] lg:-translate-x-16 lg:absolute  lg:block
                                md:w-[690px] md:h-[430px] md:-translate-x-50 md:absolute md:bottom-0 md:block
                                sm:w-[390px] sm:h-[380px] sm:-translate-x-36 sm:absolute sm:bottom-0 sm:block
                                w-[290px] h-[280px] object-cover z-50
                                hidden"
                                
                        />
                    </div>
                </div>

                {/* Sección de texto y tarjetas alineadas a la derecha */}
                <aside className="w-full md:w-1/2 sm:w-1/2   min-h-screen  flex flex-col justify-center items-center py-8">
                    {/* Título */}
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
                </aside>
            </div>
        </section>
    );
};

export default AboutView;

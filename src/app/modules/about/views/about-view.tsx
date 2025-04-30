import Image from "next/image";
import { Formulario } from "../../ministerios/components/ministerio-for";

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
                <aside className="w-full md:w-1/2 sm:w-1/2   ">
                    {/* Título */}
                        <Formulario />
                </aside>
            </div>
        </section>
    );
};

export default AboutView;

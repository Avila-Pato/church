
import Image from "next/image";


const AboutView = () => {
    return (
        <section className="h-screen flex overflow-hidden ">
            <div className="relative w-[1000px] h-screen">
                {/* Círculo de fondo */}
                <div className=" w-[743px] h-[742px] bg-gray-300 rounded-full shadow-lg absolute"
                    style={{
                        boxShadow: "rgba(206, 206, 206, 0.45) 0px 0px 33.8789px 0px",
                        left: "-91.6836px",
                        top: "69.1406px",
                        zIndex: "0"
                    }}
                />
                <Image
                    src="/webp/church.webp"
                    alt="church"
                    width={800}
                    height={800}
                    loading="lazy"
                    quality={100}

                    className=" w-[550px] h-[550px]  object-cover absolute bottom-0  z-30"
                />
            </div>

            <div className="w-full  max-h-screen flex flex-col justify-center items-center  py-8">
                {/* Título principal */}
                <h1 className="text-3xl font-bold text-blue-900 mb-6">Contactos</h1>

                {/* Contenedor de tarjetas */}
                <div className="w-full grid grid-cols-2  gap-2 px-4 ">
                    {/* Tarjeta 1 */}
                    <div className="bg-white   rounded-xl p-6 text-center">
                        <p className="text-xl font-semibold text-gray-800">Iglesia Imep - Sede Central</p>
                        <p className="text-gray-600 ">Contacto: +569 9932554391</p>
                    </div>

                    {/* Tarje */}
                    <div className="bg-white  rounded-xl p-6 text-center">
                        <p className="text-xl font-semibold text-gray-800">Iglesia Lorem - Sede Norte</p>
                        <p className="text-gray-600 ">Contacto: +569 876543210</p>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="bg-white rounded-xl p-6 text-center">
                        <p className="text-xl font-semibold text-gray-800">Iglesia Ipsum - Sede Sur</p>
                        <p className="text-gray-600 ">Contacto: +569 123456789</p>
                    </div>

                    {/* Tarjeta 4 */}
                    <div className="bg-white rounded-xl p-6 text-center">
                        <p className="text-xl font-semibold text-gray-800">Iglesia Dolor - Sede Este</p>
                        <p className="text-gray-600 ">Contacto: +569 987654321</p>
                    </div>

                    {/* Tarjeta 5 */}
                    <div className="bg-white  rounded-xl p-6 text-center">
                        <p className="text-xl font-semibold text-gray-800">Iglesia Sit Amet - Sede Oeste</p>
                        <p className="text-gray-600 ">Contacto: +569 555555555</p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default AboutView;
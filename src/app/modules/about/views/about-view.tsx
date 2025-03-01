
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

            <div className="w-full flex flex-col justify-center items-center  ">
                    <p>contactos</p>
                    <p>contactos</p>

                    <p>contactos</p>

                    <p>contactos</p>

            </div>

        </section>
    );
}

export default AboutView;
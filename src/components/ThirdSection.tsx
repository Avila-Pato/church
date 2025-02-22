"use client"
import useScrollReveal from '@/hooks/useScrollReveal';
import Image from 'next/image';

const ThirdSection = () => {

    useScrollReveal(".default", {
        delay: 300,
        distance: "50px",
        duration: 3000,
        easing: "ease-in-out",
        opacity: 0,
        origin: "left",
        scale: 0.9,
        reset: false,
      });

    return (
        <main className="flex min-h-screen items-center justify-center gap-4  ">
            {/* Imagen principal */}
            <div className='  absolute w-full h-full flex  mr-40  default'>
            <Image 
                src='/img/pastor.png' 
                alt='Pastores' 
                width={900} 
                height={70} 
                className='translate-x-[-100px] ' 
                />
                </div>

            {/* Sección aside ampliada */}
            <div className='flex justify-end w-full'>
            <aside className='  text-white relative  border-2 rounded-lg mx-1 py-12 mr-12'>
                <div className='w-full justify-center items-center flex flex-col'>
                <p className='text-3xl font-bold'>Conoce a nuestra congregación</p>
                <p className='text-3xl font-bold'> y nuestros Pastores</p>
                </div>

                {/* Galería de imágenes */}
                <figure className='flex justify-center gap-4 mt-6 mx-3 h-[300px]'>
                    <Image src='/img/fondo.jpg' alt='Pastores' width={300} height={100} />
                    <Image src='/img/fondo.jpg' alt='Pastores' width={300} height={100} />
                    <Image src='/img/fondo.jpg' alt='Pastores' width={300} height={100} />
                </figure>
            </aside>
            </div>

        </main>
    );
}

export default ThirdSection;

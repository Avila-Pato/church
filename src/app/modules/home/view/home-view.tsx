import { Button } from "@/components/ui/button";
import Image from "next/image";

const HomeView = () => {
  return (
    <section className="h-screen bg-hero bg-cover bg-center flex  justify-between items-center  ">
      <article className="w-full md:w-1/2 ml-32  ">
        <p className=" text-white font-poppins text-6xl font-bold pb-4">Experimenta el amor de dios a travez de la oracion alabanzas y amistad en nuestra iglesia</p>
        <small className="text-white  font-medium text-lg font-poppins ">Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati autem ducimus veritatis quasi natus ratione esse at earum culpa.</small>
        <div className="pt-4 flex gap-4 w-full">
          <Button className="bg-orange-600 px-8 py-3">Ver mas</Button>
          <Button className="border-2 text-white bg-transparent">Conocenos</Button>
        </div>
      </article>
      <figure className="flex w-full md:w-1/2 ml-4">
              <Image src="/svg/CrackCruz.svg"
               alt="church" 
              width={600}
              height={600}
              className="  object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out  brightness-75 hover:brightness-100" />
        </figure>
    </section>
  );
};

export default HomeView;

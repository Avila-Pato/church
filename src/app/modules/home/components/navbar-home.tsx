import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const StudioNavbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0  text-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center flex-shrink-0 ">
        {/* Puedes colocar aqui el sidebar */}
        <Link href="">
          <div className="p-4 flex items-center gap-1 pt-8 ">
            <Image
              src="/svg/church.svg"
              alt="Logo-Church"
              width={90}
              height={90}
              className=" fill-current text-blue-900"
            ></Image>
          </div>
        </Link>
      </div>
      <ul
        className="flex w-full font-normal text-xl gap-x-12 justify-center  cursor-pointer"
      >
        <li className="font-medium">Inicio</li>
        <li>Nosotros</li>
        <li>Ministerio</li>
        <li>Ubicacion</li>
        <li>Calendario</li>
      </ul>
      <Link href="">
        <div className=" flex items-center px-6 ">
        <Image
              src="/svg/user.svg"
              alt="Logo-Church"
              width={50}
              height={50}
            ></Image>
            
          <Button variant={"default"} className="">
            Entrar
          </Button>
        </div>
      </Link>
    </div>
  );
};

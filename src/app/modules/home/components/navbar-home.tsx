"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";


export const StudioNavbar = () => {
  const hoverClass = "hover:text-orange-500";
  const pathName = usePathname();

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/about" },
    { name: "Ministerio", path: "/ministerio" },
    { name: "Ubicación", path: "/ubicacion" },
    { name: "Calendario", path: "/calendario" },
  ]


  return (
    <nav className="fixed top-0 left-0 right-0  text-white flex items-center px-2 pr-5 z-50  ">
      <div className="flex items-center flex-shrink-0 ">
        {/* Puedes colocar aqui el sidebar */}
        <Link href="/">
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
      <div className="flex w-full justify-center items-center">
      {links.map((link, name) => (
        <Link href={link.path} key={name}>
          <div className={` font-normal text-xl  cursor-pointer px-6 ${hoverClass} ${pathName === link.path ? "text-orange-500 font-extrabold" : ""}
             `}>
            {link.name}
          </div>
        </Link>
      ) )}
      </div>
     
      <Link href="/">
        <div className=" flex items-center px-6 ">
          {/* <Image
              src="/svg/user.svg"
              alt="Logo-Church"
              width={50}
              height={50}
            ></Image>
             */}
          <Button variant={"default"} className="">
            Contactanos
          </Button>
        </div>
      </Link>
    </nav>
  );
};

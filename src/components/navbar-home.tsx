"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const StudioNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();
  const hoverClass = "hover:text-orange-500";

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Ministerios", path: "/ministerio" },
    { name: "Contactos", path: "/about" },
    { name: "Galeria", path: "/galeria" },
    // { name: "Calendario", path: "/calendario" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 top-0  left-0 right-0 text-white flex items-center px-2 pr-5 transition-colors duration-300 ${
        scrolled ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex">
        <Link href="/">
          <div className="pt-2">
            <Image
              src="/img/logoIglesia.png"
              alt="Logo-Church"
              width={80}
              height={10}
              loading="lazy"
              className="fill-current  "
            />
          </div>
        </Link>
      </div>

      {/* Botón de menú para móviles y medianas */}
      <button
        className="p-2  text-white lg:hidden md:hidden 2xl:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Menú móvil (se abre desde la izquierda en móviles y medianas) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {/* Botón para cerrar el menú móvil */}
        <button
          className="absolute top-4 right-4 p-2 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        <div className="flex flex-col  space-y-3 pt-24 pl-6">
          {links.map((link) => (
            <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)}>
              <div
                className={`font-normal text-xl 
                  
                  cursor-pointer ${hoverClass} ${
                  pathName === link.path ? "text-orange-500 font-extrabold " : ""
                }`}
              >
                {link.name}
              </div>
            </Link>
          ))}
          {/* Botón de contacto para móviles y medianas */}
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Button variant={"default"} className="mt-4 max-w-xs  ">
              Contáctanos
            </Button>
          </Link>
        </div>
      </div>

      {/* Menú de escritorio (visible en pantallas grandes) */}
      <div className="hidden md:flex  w-full justify-center items-center">
        {links.map((link) => (
          <Link href={link.path} key={link.name}>
            <div
              className={`font-normal md:text-lg text-xl cursor-pointer px-6 ${hoverClass} ${
                pathName === link.path ? "text-orange-500 font-extrabold" : ""
              }`}
            >
              {link.name}
            </div>
          </Link>
        ))}
      </div>

      {/* Botón de contacto para pantallas grandes */}
      <div className="hidden md:flex  items-center px-6">
        <Link href="/">
          <Button variant={"default"} >Contáctanos</Button>
        </Link>
      </div>
    </nav>
  );
};
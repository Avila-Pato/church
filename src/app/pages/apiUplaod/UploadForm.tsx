// src/app/modules/galeria/components/UploadFormCloud.tsx
"use client";

import { useState } from "react";
import { useUserAuth } from "@/app/context/AuthContext";
import toast from "react-hot-toast";

interface Props {
  categories: string[];
  onUploadSuccess: (url: string, category: string) => void;
}

declare global {
  interface Window {
    cloudinary?: {
      openUploadWidget: (
        options: Record<string, any>,
        callback: (error: any, result: any) => void
      ) => void;
    };
  }
}

export default function UploadFormCloud({ categories, onUploadSuccess }: Props) {
  const { user } = useUserAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const {  googleSignIn, logOut } = useUserAuth();

  const openWidget = async () => {
    if (!user) {
      toast.error("Debes iniciar sesión.");
      return;
    }
    if (!selectedCategory) {
      toast.error("Selecciona categoría.");
      return;
    }

    // 1) Comprueba que el widget esté cargado
    if (!window.cloudinary?.openUploadWidget) {
      console.warn("[Cloudinary] widget NO está listo");
      toast.error("El widget de Cloudinary aún no se ha cargado. Intenta de nuevo en un momento.");
      return;
    }

    // 2) Invoca el widget
    window.cloudinary.openUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: "church_text",
        sources: ["local", "url", "camera", "google_drive", "facebook", "instagram"],
      },
      async (error, result) => {
        if (error) {
          console.error("[Cloudinary] error:", error);
          toast.error("Error al subir imagen.");
          return;
        }
        if (result.event === "success") {
          const secureUrl = result.info.secure_url;
          console.log("[Cloudinary] URL:", secureUrl);

          try {
            // 3) Guarda en Firestore vía tu API
            const resp = await fetch("/api/images", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                url: secureUrl,
                category: selectedCategory,
              }),
            });
            const body = await resp.json();
            console.log("[Front] POST /api/images:", resp.status, body);

            if (!resp.ok) throw new Error(body.error || "Error en POST");

            // 4) Actualiza la galería en UI
            onUploadSuccess(secureUrl, selectedCategory);
            toast.success("Imagen guardada en Firestore.");
          } catch (err) {
            console.error("[Front] Error al guardar en Firestore:", err);
            toast.error("No se pudo guardar en Firestore.");
          } finally {
            setIsOpen(false);
          }
        }
      }
    );
  };

  const handleLogout = async () => {
    try {
        await logOut();
    } catch (error) {
        console.log(error);
    }
};

const handleLogin = async () => {
    try {
        await googleSignIn();
    } catch (error) {
        console.log(error);
    }
}

  return (
    <>
        {!user && (
            <button className="fixed z-10 bottom-4 right-4 bg-orange-600 p-2 rounded-xl font-semibold" onClick={handleLogin}>
            Adm
        </button>
        )}


       <div className="fixed z-10 bottom-4 right-4 flex flex-col gap-2">
      
      {user && (
        <button
          onClick={() => setIsOpen(true)}
          className=" bg-red-600 p-4 rounded-full text-white"
        >
          +
        </button>
      )}
       {user && (
            <button
            onClick={handleLogout}
            className=" bg-red-600 rounded-full text-white"
            >
            Salir
            </button>
        )}
       </div>

      {isOpen && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl space-y-4">
            <h2 className="text-xl font-bold">Subir Imagen</h2>
            <select
              className="w-full p-2 border rounded"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">— Selecciona categoría —</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <button
              onClick={openWidget}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Subir con Cloudinary
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-2 bg-gray-300 text-gray-800 rounded"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

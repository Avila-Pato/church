"use client";

import { useState } from "react";
import { useUserAuth } from "@/app/context/AuthContext";
import toast from "react-hot-toast";

declare global {
  interface Window {
    cloudinary?: {
      openUploadWidget: (
        options: {
          cloudName: string;
          uploadPreset: string;
          sources?: string[];
        },
        callback: (error: CloudinaryUploadError | null, result: CloudinaryUploadResult) => void
      ) => void;
    };
  }
}

interface CloudinaryUploadResult {
  event: "success" | "close" | string;
  info: {
    secure_url: string;
    [key: string]: unknown;
  };
}

interface CloudinaryUploadError {
  message: string;
  [key: string]: unknown;
}

interface Props {
  categories: string[];
  onUploadSuccess: (url: string, category: string) => void;
}

export default function UploadFormCloud({ categories, onUploadSuccess }: Props) {
  const { user } = useUserAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const openWidget = async () => {
    if (!user) {
      toast.error("Debes iniciar sesión.");
      return;
    }
    if (!selectedCategory) {
      toast.error("Selecciona categoría.");
      return;
    }

    if (!window.cloudinary?.openUploadWidget) {
      console.warn("[Cloudinary] widget NO está listo");
      toast.error("El widget de Cloudinary aún no se ha cargado. Intenta de nuevo en un momento.");
      return;
    }

    window.cloudinary.openUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
        uploadPreset: "church_text",
        sources: ["local", "url", "camera", "google_drive", "facebook", "instagram"],
      },
      async (error, result) => {
        if (error) {
          console.error("[Cloudinary] error:", error.message);
          toast.error("Error al subir imagen.");
          return;
        }
        if (result.event === "success") {
          const secureUrl = result.info.secure_url;
          console.log("[Cloudinary] URL:", secureUrl);

          try {
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

            onUploadSuccess(secureUrl, selectedCategory);
            toast.success("Imagen guardada en Firestore.");
          } catch (err) {
            console.error("[Front] Error al guardar en Firestore:", (err as Error).message);
            toast.error("No se pudo guardar en Firestore.");
          } finally {
            setIsOpen(false);
          }
        }
      }
    );
  };

  return (
    <>
      {user && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed z-10 bottom-4 right-4 bg-red-600 p-4 rounded-full text-white"
        >
          +
        </button>
      )}

      {isOpen && (
        <div className="fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
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

"use client";

import { useState, useEffect, useRef } from "react";
import { useUserAuth } from "@/app/context/AuthContext";
import toast from "react-hot-toast";

declare global {
  interface Window {
    cloudinary?: {
      setCloudinaryConfig: (options: { secure: boolean; cookiePolicy: string }) => void;
      createUploadWidget: (
        options: {
          cloudName: string;
          uploadPreset: string;
          sources?: string[];
          multiple?: boolean;
        },
        callback: (
          error: { message: string } | null,
          result: { event: string; info: { secure_url: string } } | null
        ) => void
      ) => { open: () => void };
    };
  }
}

interface Props {
  categories: string[];
  onUploadSuccess: (url: string, category: string) => void;
}

export default function UploadFormCloud({ categories, onUploadSuccess }: Props) {
  const { user, googleSignIn, logOut } = useUserAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isWidgetReady, setIsWidgetReady] = useState(false);
  const widgetRef = useRef<ReturnType<NonNullable<Window["cloudinary"]>['createUploadWidget']> | null>(null);

  // Initialize Cloudinary widget once
  useEffect(() => {
    if (!widgetRef.current && window.cloudinary?.createUploadWidget) {
      widgetRef.current = window.cloudinary.createUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
          uploadPreset: "church_text",
          sources: ["local", "url", "camera", "google_drive"],
          multiple: false,
        },
        (error, result) => {
          if (error) {
            console.error("[Cloudinary] error:", error.message);
            toast.error("Error al subir imagen.");
            return;
          }
          if (result?.event === "success") {
            const secureUrl = result.info.secure_url;
            // Send to your API
            fetch("/api/images", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ url: secureUrl, category: selectedCategory }),
            })
              .then(async (resp) => {
                const body = await resp.json();
                if (!resp.ok) throw new Error(body.error || "Error en POST");
                onUploadSuccess(secureUrl, selectedCategory);
                toast.success("Imagen guardada en Firestore.");
              })
              .catch((err) => {
                console.error("[Front] Error al guardar:", err);
                toast.error("No se pudo guardar en Firestore.");
              })
              .finally(() => setIsOpen(false));
          }
        }
      );
      setIsWidgetReady(true);
    }
  }, [selectedCategory, onUploadSuccess]);

  const openWidget = () => {
    if (!user) {
      toast.error("Debes iniciar sesión.");
      return;
    }
    if (!selectedCategory) {
      toast.error("Selecciona categoría.");
      return;
    }
    if (!isWidgetReady || !widgetRef.current) {
      toast.error("Widget no listo.");
      return;
    }
    widgetRef.current.open();
  };

  const handleLogin = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Floating buttons */}
      <div className="fixed z-10 bottom-4 right-4 flex flex-col items-end space-y-2">
        {user ? (
          <>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-red-600 p-4 rounded-full text-white"
            >
              +
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 p-4 rounded-full text-white"
            >
              Salir
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-red-600 p-4 rounded-full text-white"
          >
            Adm
          </button>
        )}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl space-y-4 w-80">
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
              className="w-full px-4 py-2 bg-gray-300 rounded"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

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
          showCompletedButton?: boolean;
          singleUploadAutoClose?: boolean;
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
  const categoryRef = useRef<string>(selectedCategory);
  const uploadedUrlsRef = useRef<string[]>([]);

  // Mantener referencia actualizada de la categoría
  useEffect(() => {
    categoryRef.current = selectedCategory;
  }, [selectedCategory]);

  // Inicializar el widget UNA vez
  useEffect(() => {
    if (!widgetRef.current && window.cloudinary?.createUploadWidget) {
      widgetRef.current = window.cloudinary.createUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
          uploadPreset: "church_text",
          sources: ["local", "url", "camera", "google_drive"],
          multiple: false,
          showCompletedButton: true,
          singleUploadAutoClose: false,
        },
        (error, result) => {
          if (error) {
            console.error("[Cloudinary] error:", error.message);
            toast.error("Error al subir imagen.");
            return;
          }

          // Acumula cada URL exitosa
          if (result?.event === "success") {
            uploadedUrlsRef.current.push(result.info.secure_url);
          }

          // Cuando el usuario confirma (queues-end), envía todas las URLs
          if (result?.event === "queues-end") {
            const urls = [...uploadedUrlsRef.current];
            const category = categoryRef.current;

            Promise.all(
              urls.map((url) =>
                fetch("/api/images", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ url, category }),
                })
              )
            )
              .then(() => {
                onUploadSuccess(urls[0], category);
                toast.success("Imagen(es) guardada(s) en Firestore.");
              })
              .catch((err) => {
                console.error("[Front] Error al guardar:", err);
                toast.error("No se pudo guardar en Firestore.");
              })
              .finally(() => {
                uploadedUrlsRef.current = [];
                setIsOpen(false);
              });
          }
        }
      );
      setIsWidgetReady(true);
    }
  }, [onUploadSuccess]);

  const openWidget = () => {
    if (!user) return toast.error("Debes iniciar sesión.");
    if (!selectedCategory) return toast.error("Selecciona categoría.");
    if (!isWidgetReady || !widgetRef.current) return toast.error("Widget no listo.");

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
      {/* Botones flotantes */}
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

      {/* Modal de subida */}
      {isOpen && (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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

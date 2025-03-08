import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { Timestamp } from "firebase-admin/firestore";

export const dynamic = "force-dynamic";

cloudinary.config({
  cloud_name: "dzpox6gya", // Reemplaza con tus credenciales
  api_key: "333587889889894", // Reemplaza con tus credenciales
  api_secret: "LFxcZWaxXjsiDUJSQ2qpHo_QMLo", // Reemplaza con tus credenciales
});

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const category = formData.get("category") as string | null;

    // Validar que el archivo y la categoría estén presentes
    if (!file || !category) {
      return NextResponse.json(
        { message: "Falta el archivo o la categoría" },
        { status: 400 }
      );
    }

    // Validar que el archivo sea una imagen
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { message: "El archivo proporcionado no es una imagen" },
        { status: 400 }
      );
    }

    // Convertir el archivo a un buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Subir la imagen a Cloudinary
    const response = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: category, // Guarda la imagen en una carpeta con el nombre de la categoría
          },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              reject(new Error("Error al subir la imagen a Cloudinary"));
            }
            if (result) {
              resolve(result);
            } else {
              reject(new Error("No se recibió respuesta de Cloudinary"));
            }
          }
        )
        .end(buffer);
    });

    console.log("Upload successful. URL:", response.secure_url);

    // Guardar la imagen en Firestore
    await db.collection("images").add({
      url: response.secure_url,
      category: category,
      createdAt: Timestamp.now(), // Usa Timestamp para la fecha
    });

    return NextResponse.json({
      message: "Imagen subida con éxito",
      url: response.secure_url,
    });
  } catch (error) {
    console.error("Server error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Error desconocido";

    return NextResponse.json(
      { message: "Error al subir la imagen", error: errorMessage },
      { status: 500 }
    );
  }
}
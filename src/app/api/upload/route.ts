// src/app/api/upload/route.ts  (tu POST con Cloudinary SDK)
import { NextResponse } from "next/server";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { db } from "@/lib/firebase";
import { Timestamp } from "firebase-admin/firestore";
import categoryNames from "@/app/seeds/seed.categories";

// Convierte un nombre a slug
// Convierte un nombre al slug correspondiente
function toSlug(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w ]+/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Convierte un slug de vuelta al nombre real usando tu array
function slugToName(slug: string): string {
  const match = categoryNames.find(cat => toSlug(cat) === slug.toLowerCase());
  return match ?? slug;  // si no coincide, devolvemos el propio slug
}


cloudinary.config({
  cloud_name: "dzpox6gya",
  api_key: "333587889889894",
  api_secret: "LFxcZWaxXjsiDUJSQ2qpHo_QMLo",
});

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const rawCategoryId = formData.get("categoryId") as string | null; // p.ej. 'paisajes-naturales'

    if (!file || !rawCategoryId) {
      return NextResponse.json({ message: "Falta el archivo o la categoría" }, { status: 400 });
    }
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ message: "El archivo no es una imagen" }, { status: 400 });
    }

    // Traducimos el slug a nombre real
    const categoryName = slugToName(rawCategoryId);

    // Subimos a Cloudinary en carpeta slug, pero guardamos el name
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const response = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: rawCategoryId },
          (error, result) => {
            if (error) return reject(error);
            if (!result) return reject(new Error("No response from Cloudinary"));
            resolve(result);
          }
        )
        .end(buffer);
    });

    // Guardamos en Firestore con categoryName (nombre real)
    await db.collection("images").add({
      url: response.secure_url,
      category: categoryName,
      createdAt: Timestamp.now(),
    });

    return NextResponse.json({ message: "Imagen subida con éxito", url: response.secure_url });
  } catch (error) {
    console.error("Server error:", error);
    const msg = error instanceof Error ? error.message : "Error desconocido";
    return NextResponse.json({ message: "Error al subir la imagen", error: msg }, { status: 500 });
  }
}

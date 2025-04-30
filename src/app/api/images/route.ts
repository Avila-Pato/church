import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import categoryNames from "@/app/seeds/seed.categories";
import { FieldValue } from "firebase-admin/firestore";

// Convierte un nombre a slug (igual que en el cliente)
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



export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("categoryId") ?? "";

    // Busca el nombre original coincidente con el slug
    const formattedCategory = slug
      ? categoryNames.find((cat) => toSlug(cat) === slug.toLowerCase())
      : undefined;

    let query: FirebaseFirestore.Query = db.collection("images");
    if (formattedCategory) {
      query = query.where("category", "==", formattedCategory);
    }

    const snapshot = await query.get();
    const images = snapshot.docs.map((doc) => doc.data());
    return NextResponse.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    const message = error instanceof Error ? error.message : "Error desconocido";
    return NextResponse.json(
      { message: "Error al recuperar las imágenes", error: message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { url, category } = await request.json();
    console.log("[API POST] Recibido:", { url, category });

    const docRef = await db.collection("images").add({
      url,
      category,
      createdAt: FieldValue.serverTimestamp(),
    });
    console.log("[API POST] Documento creado con ID:", docRef.id);

    return NextResponse.json(
      { success: true, id: docRef.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API POST] Error al escribir en Firestore:", error);
    const message = error instanceof Error ? error.message : "Error desconocido";
    return NextResponse.json(
      { message: "No se pudo guardar la imagen", error: message },
      { status: 500 }
    );
  }
}

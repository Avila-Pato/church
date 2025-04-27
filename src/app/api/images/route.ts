import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import categoryNames from "@/app/seeds/seed.categories";
import { FieldValue } from "firebase-admin/firestore"; // si usas admin SDK


export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId"); // Obtener la categoría de la URL

    // Transformar el categoryId de la URL al formato original para que concida con su url
    // al usar tiLoweercase asefuta la coincidencia insensible en mayusculas y minusculas 
    // aqui no es necesario usar replace(/\s+/g, "-"))  
    const formattedCategory = categoryId
  ? categoryNames.find((cat) =>
      cat.toLowerCase() === categoryId.toLowerCase()
    )
  : undefined;


    let query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = db.collection("images");

    // Filtrar por categoría si se proporciona
    if (formattedCategory) {
      query = query.where("category", "==", formattedCategory);
    }

    const querySnapshot = await query.get();
    const images = querySnapshot.docs.map((doc) => doc.data());

    console.log("Respuesta de la API:", images);

    return NextResponse.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Error desconocido";

    return NextResponse.json(
      { message: "Error al recuperar las imágenes", error: errorMessage },
      { status: 500 }
    );
  }
}

// Este endpoint es para guardar imágenes en Firestore
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

    return NextResponse.json({ success: true, id: docRef.id }, { status: 201 });
  } catch (err) {
    console.error("[API POST] Error al escribir en Firestore:", err);
    return NextResponse.json(
      { message: "No se pudo guardar la imagen", error: (err as Error).message },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import categoryNames from "@/app/seeds/seed.categories"; // Importa las categorías

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("categoryId"); // Obtener la categoría de la URL

    // Transformar el categoryId de la URL al formato original
    const formattedCategory = category
      ? categoryNames.find((cat) => cat.toLowerCase().replace(/\s+/g, "-") === category)
      : undefined;

    let query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = db.collection("images");

    // Filtrar por categoría si se proporciona
    if (formattedCategory) {
      query = query.where("category", "==", formattedCategory);
    }

    const querySnapshot = await query.get();
    const images = querySnapshot.docs.map((doc) => doc.data());

    console.log("Categoría solicitada:", formattedCategory);
    console.log("Imágenes recuperadas:", images);

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
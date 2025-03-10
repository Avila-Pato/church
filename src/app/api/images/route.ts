import { NextResponse } from "next/server";
import categoryNames from "@/app/seeds/seed.categories"; // Importa las categorías
import { db } from "@/lib/firebase";

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

    console.log("Categoría transformada:", formattedCategory);
    console.log("Category ID from URL:", categoryId);
    console.log("Formatted Category:", formattedCategory);

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
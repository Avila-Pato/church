"use client"; // Asegúrate de que este componente sea del lado del cliente
import GaleryView from "@/app/modules/galeria/views/galery-view";
import { useSearchParams } from "next/navigation"; // Usa useSearchParams

const GalerryPage = () => {
    const searchParams = useSearchParams(); // Obtén los parámetros de búsqueda
    const categoryId = searchParams.get("categoryId") ?? undefined; // Extrae categoryId de la URL

    return ( 
        <main>
            <div>
                <GaleryView categoryId={categoryId}   /> {/* Pasa categoryId como prop */}
            </div>
        </main>
    );
}
 
export default GalerryPage;
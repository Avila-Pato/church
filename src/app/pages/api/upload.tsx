"use client";
import { useState } from "react";
import toast from "react-hot-toast";

interface UploadFormProps {
  categories: string[];
  onUploadSuccess: (imageUrl: string, categoryId: string) => void; 
}

const UploadForm = ({ categories, onUploadSuccess }: UploadFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [categoryId, setCategoryId] = useState<string>(""); 
  const [isUploading, setIsUploading] = useState(false); // Estado de carga

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    const validExtensions = ["image/jpeg", "image/png", "image/gif"];
  
    const filteredFiles = selectedFiles.filter((file) =>
      validExtensions.includes(file.type)
    );
  
    if (filteredFiles.length === 0) {
      toast.error("Solo se pueden subir archivos de imagen (JPG, PNG, GIF)");
      return;
    }
  
    setFiles(filteredFiles);
  };
  
  // manejando carga de imagens multiples
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (files.length === 0 || !categoryId) {
      toast.error("Por favor, selecciona al menos una imagen y una categoría.");
      return;
    }
  
    setIsUploading(true);
  
    try {
      const uploadedImages = [];
  
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("categoryId", categoryId);
  
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          toast.error(errorData.message || "Error al subir la imagen");
          throw new Error(errorData.message || "Error al subir la imagen");
        }
  
        const result = await response.json();
        uploadedImages.push(result.url);
      }
  
      toast.success(`${uploadedImages.length} imágenes subidas con éxito`);
  
      // Llama a onUploadSuccess con todas las imágenes subidas
      uploadedImages.forEach((imageUrl) => onUploadSuccess(imageUrl, categoryId));
  
      // Cierra el formulario y limpia los estados
      setIsOpen(false);
      setFiles([]);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al subir las imágenes");
    } finally {
      setIsUploading(false);
    }
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        +
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-xl"
          >
            <h2 className="text-xl font-bold mb-4">Subir Imagen</h2>

            {/* Etiqueta y campo de archivo */}
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Selecciona una imagen
            </label>
            <input
              id="file"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="mb-4"
              required
            />

            {/* Etiqueta y campo de categoría */}
            <label
              htmlFor="categoryId"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Selecciona una categoría
            </label>
            <select
              id="categoryId"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="mb-4 p-2 border rounded w-full"
              required
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}> {/* Usar el valor original */}
                  {cat}
                </option>
              ))}
            </select>

            {/* Botón de envío */}
            {isUploading ? (
              <div className="text-center text-lg">Subiendo...</div>
            ) : (
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded w-full"
              >
                Subir
              </button>
            )}

            {/* Botón de cancelación */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded w-full mt-4"
            >
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
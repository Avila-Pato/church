"use client";
import { useState } from "react";
import toast from "react-hot-toast";

interface UploadFormProps {
  categories: string[];
  onUploadSuccess: (imageUrl: string, category: string) => void;
}

const UploadForm = ({ categories, onUploadSuccess }: UploadFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!file || !category) {
      toast.error("Por favor, selecciona una imagen y una categoría.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);

    try {
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
      console.log("Imagen subida con éxito:", result.url);
      toast.success("Imagen subida con éxito");

      // Llama a onUploadSuccess con la URL de la imagen y la categoría seleccionada
      onUploadSuccess(result.url, category);

      // Cierra el formulario
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al subir la imagen");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
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
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-4"
              required
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mb-4 p-2 border rounded"
              required
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Subir
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
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
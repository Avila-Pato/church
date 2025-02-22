"use client";
import { useState } from "react";

const useImageToggle = (initialImage, nextImage) => {
  const [currentImage, setCurrentImage] = useState(initialImage);

  const toggleImage = () => {
    setCurrentImage((prevImage) => (prevImage === initialImage ? nextImage : initialImage));
  };

  return [currentImage, toggleImage];
};

export default useImageToggle;

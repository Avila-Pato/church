import { CategoriesSection } from "../components/gallery-navbar";
import ImageGallery from "@/components/GalleryImages";

interface GaleryProps {
    categoryId?: string;
    ImageGallery?: string
  }

const GaleryView = ({categoryId}: GaleryProps ) => {
    return ( 
        <main className="min-h-screen  my-20 ">
            <CategoriesSection  categoryId={categoryId}/>
            <ImageGallery categoryId={categoryId} />
        </main>
     );
}
 
export default GaleryView;
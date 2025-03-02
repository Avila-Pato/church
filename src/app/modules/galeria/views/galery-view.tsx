import { CategoriesSection } from "../components/gallery-navbar";

interface GaleryProps {
    categoryId?: string;
  }

const GaleryView = ({categoryId}: GaleryProps ) => {
    return ( 
        <main className="min-h-screen  my-20 ">
            <CategoriesSection  categoryId={categoryId}/>
            <div className="flex flex-col justify-center items-center h-svh  text-white">

                Este es el gallery View</div>
        </main>
     );
}
 
export default GaleryView;
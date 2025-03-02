import { CategoriesSection } from "../components/gallery-navbar";

interface GaleryProps {
    categoryId?: string;
  }

const GaleryView = ({categoryId}: GaleryProps ) => {
    return ( 
        <main className="min-h-screen  my-20 ">
            <CategoriesSection  categoryId={categoryId}/>
            <div className="flex h-[500px] flex-col justify-center items-center   text-white">

                Este es el gallery View</div>
        </main>
     );
}
 
export default GaleryView;
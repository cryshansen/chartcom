import ArtfolioCollabBlock from '../components/ArtfolioCollabBlock' 
import GalleryTabs from '../components/GalleryTabs';

 
 const Artfolio = () => (
        <section className="fluid-container py-5 mb-5">

            <h2 className="text-center mt-5">🖼 Artfolio</h2>
            <GalleryTabs /> 
            <ArtfolioCollabBlock /> 
        </section>
        );
export default Artfolio;
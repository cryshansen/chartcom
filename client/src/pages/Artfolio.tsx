import ArtfolioCollabBlock from '../components/ArtfolioCollabBlock' 
import ArtfolioHeroBlock from "../components/ArtfolioHeroBlock"
import GalleryTabs from '../components/GalleryTabs';

 
 const Artfolio = () => (
        <section className="fluid-container py-5 mb-5">
            <ArtfolioHeroBlock />
            <h2 className="text-center mt-5">Artfolio</h2>
            <GalleryTabs /> 
            <ArtfolioCollabBlock /> 
        </section>
        );
export default Artfolio;
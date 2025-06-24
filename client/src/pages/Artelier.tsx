import ArtelierCarousel from '../components/ArtelierCarousel' 
import Arteliers from '../components/Arteliers' 
import WorkshopFeatureCardGrid from '../components/WorkshopFeatureCardGrid';
import StudioCollabBlock from '../components/StudioCollabBlock' 
import Studios from "../components/Studios"
/**
 * TODO: get the galleries to show in this page somehow figure out how to convert the galleries from pages to gallery components. then tie into here.
*/

const Artelier = () =>(
         <section className="fluid-container py-5 mb-5">
            <h1 className="my-4 text-center"> Artelier, Studios and Apothecary</h1>
            
            <ArtelierCarousel />
            <WorkshopFeatureCardGrid />
            <StudioCollabBlock /> 
            <Studios />
          </section>

        );

export default Artelier;



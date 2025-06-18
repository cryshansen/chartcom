import ArtelierCarousel from '../components/ArtelierCarousel' 
import Arteliers from '../components/Arteliers' 
import StudioCollabBlock from '../components/StudioCollabBlock' 


const Artelier = () =>(
         <section className="fluid-container py-5 mb-5">
            <h1 className="my-4 text-center"> Artelier, Studios and Apothecary</h1>
            
            <ArtelierCarousel />
            <Arteliers />
            <StudioCollabBlock /> 

          </section>

        );

export default Artelier;
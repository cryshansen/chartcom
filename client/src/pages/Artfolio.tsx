import ArtfolioCollabBlock from '../components/ArtfolioCollabBlock' 
import ArtfolioHeroBlock from "../components/ArtfolioHeroBlock"
import GalleryTabs from '../components/GalleryTabs';
import { Helmet } from 'react-helmet-async';
 
 const Artfolio = () => (
    <>
        <Helmet>
            <title>Artfolio | Crystal Hansen | Artographic</title>
            <meta name="description" content="Explore the creative adventures in Full Stack coding and Phtographic topics by Crystal Hansen." />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Crystal Hansen – Full-Stack Developer" />
            <meta property="og:description" content="Full-stack developer with experience in React, TypeScript,  Java and PHP developer specializing in backend systems, API integrations, and technical web applications." />
            <meta property="og:image" content="images/signature2_sized_490.png" /> 
            <meta property="og:url" content="https://crystalhansenartographic.com" />
            <meta property="og:site_name" content="Crystal Hansen Portfolio" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Crystal Hansen – Full-Stack Developer" />
            <meta name="twitter:description" content="Explore technical projects in React, TypeScript, Java, PHP, OpenAI APIs, and backend logic, systems, API integrations, and technical web applications." />
            <meta name="twitter:image" content="images/signature2_sized_490.png" /> 
        </Helmet>
        <section className="fluid-container py-5 mb-5">
            <ArtfolioHeroBlock />
            <h2 className="text-center mt-5">Artfolio</h2>
            <GalleryTabs /> 
            <ArtfolioCollabBlock /> 
        </section>
    </>    
        );
export default Artfolio;
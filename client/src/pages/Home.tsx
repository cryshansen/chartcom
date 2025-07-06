
import Carousel from '../components/Carousel' 
import ArtographicIntroBlock from '../components/ArtographicIntroBlock' 
import ArtfolioCollabBlock from '../components/ArtfolioCollabBlock' 
import CurrentProjectsBlock from '../components/CurrentProjectsBlock' 

import StudioCollabBlock from '../components/StudioCollabBlock' 
import Instagram from '../components/Instagram' 
import { Helmet } from 'react-helmet-async';


    const Home = () => (
        <>
       <Helmet>
            <title>Crystal Hansen | Artographic</title>
            <meta name="description" content="Explore the creative adventures in Full Stack Development and Photographic Meanderings by Crystal Hansen." />
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
            <main>
              <Carousel />
              <ArtographicIntroBlock />
              <ArtfolioCollabBlock />
              <StudioCollabBlock />
              <CurrentProjectsBlock />
              <Instagram />
            </main>
        </>
            );

export default Home;

    

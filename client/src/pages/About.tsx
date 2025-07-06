import MonkeyZodiacBlock from '../components/MonkeyZodiacBlock' 
import VisionFromWithinBlock from '../components/VisionFromWithinBlock' 

import ArtfolioCollabBlock from '../components/ArtfolioCollabBlock' 
import ApproachBlock from '../components/ApproachBlock' 
import StudioCollabBlock from '../components/StudioCollabBlock' 
import { Helmet } from 'react-helmet-async';


const About = () => (
  <>
  <Helmet>
        <title>About Crystal Hansen | Crystal Hansen</title>
        <meta name="description" content="Explore creative process and visual storytelling insight by Crystal Hansen." />
        <meta property="og:image" content="https://yourdomain.com/images/cover.jpg" />           
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
        <div className="section_title_wrap">
          <h2 className="p-4 border-bottom">All About Me</h2>
        </div>
            <MonkeyZodiacBlock />
            <VisionFromWithinBlock />
            <ArtfolioCollabBlock />
            <ApproachBlock />
            <StudioCollabBlock />

      </main>
  </>
);

export default About;
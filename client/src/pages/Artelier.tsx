import ArtelierCarousel from '../components/ArtelierCarousel' 
import WorkshopFeatureCardGrid from '../components/WorkshopFeatureCardGrid';
import StudioCollabBlock from '../components/StudioCollabBlock' 
import Studios from "../components/Studios"
import { Helmet } from 'react-helmet-async';

import GroupShootsFeatureCardGrid from '../components/GroupShootsFeatureCardGrid';
/**
 * TODO: get the galleries to show in this page somehow figure out how to convert the galleries from pages to gallery components. then tie into here.
*/



export default function Artelier() {
  

    return (
      <>
        <Helmet>
            <title>Artelier | Crystal Hansen | Artographic</title>
            <meta name="description" content="Explore the creative workshops and exiting adventures in Creative Wokshops and Studio facilities, this Full Stack coder has Photographic topics by Crystal Hansen." />
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
            <h1 className="my-4 text-center"> Artelier, Studios and Apothecary</h1>
            <ArtelierCarousel />
            <WorkshopFeatureCardGrid />
            <StudioCollabBlock /> 
            <Studios />
            <GroupShootsFeatureCardGrid />
          </section>
      </>
        );
      }




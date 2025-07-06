
import ProjectHeroBlock from '../components/ProjectHeroBlock'
import ProjectCollabBlock from '../components/ProjectCollabBlock' 
import ProfileQuotesCarousel from '../components/ProfileQuotesCarousel' 
import DevelopmentProjects from '../components/DevelopmentProjects' 
import ProjectTabs from '../components/ProjectTabs' 
import { Helmet } from 'react-helmet-async';

 const Projects = () => (    
        <>
        <Helmet>
            <title>Projects | Crystal Hansen | Artographic</title>
            <meta name="description" content="Explore the projects and  Full Stack coding skills by Crystal Hansen." />
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
        <ProjectHeroBlock />
        <section className="fluid-container py-5 mb-5">
            <div className="fluid-container my-5">
                <div className="section_title_wrap">
                    <h1 className="mb-5 text-center">Projects</h1>
                </div>
                <div className="row px-5">
                    <DevelopmentProjects />
                    <ProfileQuotesCarousel />
                </div>
            </div>
            <ProjectTabs />
            <ProjectCollabBlock />
        </section>
        </>
        );
        
export default Projects;
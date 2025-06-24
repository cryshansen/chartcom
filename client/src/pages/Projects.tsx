
import ProjectHeroBlock from '../components/ProjectHeroBlock'
import ProjectCollabBlock from '../components/ProjectCollabBlock' 
import ProfileQuotesCarousel from '../components/ProfileQuotesCarousel' 
import DevelopmentProjects from '../components/DevelopmentProjects' 
import ProjectTabs from '../components/ProjectTabs' 


 const Projects = () => (    
        <>
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
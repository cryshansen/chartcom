import CurrentProjectsBlock from '../components/CurrentProjectsBlock' 
import StudioCollabBlock from '../components/StudioCollabBlock' 


 const Projects = () => (
        <section className="fluid-container py-5 mb-5">
            <h2 className="text-center mt-5">📘 projects</h2>
            <CurrentProjectsBlock />
            <StudioCollabBlock />

        </section>
        );
        
export default Projects;
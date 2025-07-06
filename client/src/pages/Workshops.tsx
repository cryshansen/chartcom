import { useEffect, useState } from 'react';
import WorkshopHeroBlock from "../components/WorkshopHeroBlock";
import  WorkshopFeatureCardGrid from "../components/WorkshopFeatureCardGrid";
import WorkshopCardGrid from '../components/WorkshopCardGrid';
import { Helmet } from 'react-helmet-async';
import { useLoading } from "../context/LoadingContext";
      
interface Workshop {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  theme: string;
  buttonLabel?: string;
  featured?: boolean;
}
const Workshops = () =>{

  
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [filteredWorkshops, setFilteredWorkshops] = useState<Workshop[]>([]);
  const [themes, setThemes] = useState<string[]>([]);
  const [activeTheme, setActiveTheme] = useState<string>('All');
  /* deprecated moved to WorkshopFeatureCardGrid 
  const [featured, setFeatured] = useState<Workshop[]>([]);
  */
  const { showLoader, hideLoader } = useLoading();

  const handleFilter = (theme: string) => {
      setActiveTheme(theme);
      if (theme === 'All') {
        setFilteredWorkshops(workshops);
      } else {
        setFilteredWorkshops(workshops.filter(w => w.theme === theme));
      }
  };
/**
 * NODE:     fetch('/api/workshops')
 * PHP see link to github in readme for the php package
 */
  useEffect(() => {
    showLoader();

    fetch('https://crystalhansenartographic.com/api/index-workshop.php/workshop/list')
      .then(res => res.json())
      .then(data => {
        setWorkshops(data);
        setFilteredWorkshops(data);
        const uniqueThemes: string[] = Array.from(new Set(data.map((w: Workshop) => w.theme)));
        setThemes(uniqueThemes);
      })
      .catch(err => {
        console.error("Failed to load workshops", err);
        
      })
       .finally( hideLoader);
  }, []);


    return(
            <>
            <Helmet>
              <title>Crystal Hansen | Artographic</title>
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
            <WorkshopHeroBlock />
            <WorkshopFeatureCardGrid />

            <div className="container py-5">
                <h1 className="my-4 text-center">Arteliers</h1>

                <div className="d-flex justify-content-center mb-4">
                    <div className="btn-group">
                    <button
                        className={`btn btn-outline-primary ${activeTheme === 'All' ? 'active' : ''}`}
                        onClick={() => handleFilter('All')}
                    >
                        All
                    </button>
                    {themes.map(theme => (
                        <button
                        key={theme}
                        className={`btn btn-outline-primary ${activeTheme === theme ? 'active' : ''}`}
                        onClick={() => handleFilter(theme)}
                        >
                        {theme}
                        </button>
                    ))}
                    </div>
                </div>

                <WorkshopCardGrid workshops={filteredWorkshops} />
            </div>


            </>
        );
}
export default Workshops;

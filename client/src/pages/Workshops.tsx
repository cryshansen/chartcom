import React, { useEffect, useState } from 'react';
import WorkshopHeroBlock from "../components/WorkshopHeroBlock";
import  WorkshopFeatureCardGrid from "../components/WorkshopFeatureCardGrid";
import WorkshopCardGrid from '../components/WorkshopCardGrid';

      
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

  const [loading, setLoading] = useState(true);
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [filteredWorkshops, setFilteredWorkshops] = useState<Workshop[]>([]);
  const [themes, setThemes] = useState<string[]>([]);
  const [activeTheme, setActiveTheme] = useState<string>('All');
  const [featured, setFeatured] = useState<Workshop[]>([]);

  const handleFilter = (theme: string) => {
    setActiveTheme(theme);
    if (theme === 'All') {
      setFilteredWorkshops(workshops);
    } else {
      setFilteredWorkshops(workshops.filter(w => w.theme === theme));
    }
  };

  useEffect(() => {
    fetch('/api/workshops')
      .then(res => res.json())
      .then(data => {
        setWorkshops(data);
         setFilteredWorkshops(data);
        const uniqueThemes: string[] = Array.from(new Set(data.map((w: Workshop) => w.theme)));
        setThemes(uniqueThemes);
        const featuredItems = data.filter((w: Workshop) => w.featured);
        setFeatured(featuredItems);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load workshops", err);
        setLoading(false);
      });
  }, []);


  if (loading) return <p className="text-center my-5">Loading workshops...</p>;

    return(
            <>
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

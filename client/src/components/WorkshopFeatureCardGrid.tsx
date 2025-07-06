// src/components/WorkshopFeatureCardGrid.tsx
import { useEffect, useState } from 'react';

interface Workshop {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  image: string;
  theme: string;
  buttonLabel?: string;
  featured?: boolean;
}


export default function  WorkshopFeatureCardGrid() {

  const [featured, setFeatured] = useState<Workshop[]>([]);
  const baseUrl = import.meta.env.VITE_API_URL;
  /**
   * NODE: fetch('/api/workshops') // Adjust if needed
   * See PHP link to github package in readme
   */
  useEffect(() => {
    fetch(`${baseUrl}/api/index-workshop.php/workshop/list`) // Adjust if needed
    
      .then(res => res.json())
      .then(data => {
        const featuredItems = data.filter((w: Workshop) => w.featured);
        setFeatured(featuredItems);
      });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">✨ Featured Workshops</h2>
      <div className="row g-4">
        {featured.map(workshop => (
          <div className="col-md-6 col-lg-4" key={workshop.id}>
            <div className="card h-100 shadow-sm">
              <img src={`${baseUrl}${workshop.image}`} className="card-img-top" alt={workshop.title} />
              <div className="card-body">
                <h5 className="card-title">{workshop.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{workshop.date}</h6>
                <p className="card-text">{workshop.description}</p>
                <button className="btn btn-primary"  
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  type="button">Reserve</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

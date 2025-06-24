// src/components/WorkshopCardGrid.tsx
import React from 'react';

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

interface WorkshopCardGridProps {
  workshops: Workshop[];
  sectionTitle?: string;
}

const WorkshopCardGrid: React.FC<WorkshopCardGridProps> = ({ workshops, sectionTitle = "Arteliers" }) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  
  return (
    <div className="container py-5">
      <h1 className="my-4 text-center d-none">{sectionTitle}</h1>
      <div className="row g-4">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img
                src={`${baseUrl}${workshop.image}`}
                className="card-img-top"
                alt={workshop.title}
              />
              <div className="card-body">
                <h5 className="card-title">{workshop.title}</h5>
                <h6 className="card-subtitle text-muted mb-2">{workshop.date}</h6>
                <p className="card-text">{workshop.description}</p>
                <button
                  className="btn btn-lg btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  type="button"
                >
                  {workshop.buttonLabel || "Register"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopCardGrid;

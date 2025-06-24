import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';


import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import FeederCard from "./FeederCard";
import { feederCardData } from './FeederCardData';

import './image-grid.css';



const allImages = import.meta.glob('../assets/gallery/**/*.{jpg,png,webp,JPG}', {
  eager: true,
  import: 'default',
});


export default function ImageGrid({ category, filterLightOnly = false }: { category: string,filterLightOnly?: boolean }) {
  
  const [index, setIndex] = useState(-1); // inside component


  const images = Object.entries(allImages).filter(([path]) => {
    const isInCategory = path.toLowerCase().includes(category.toLowerCase());
    if (!isInCategory) return false;

    // Only apply filter if enabled
    if (filterLightOnly && !path.toLowerCase().includes('-light')) return false;

    return true;
  
  });


  const slides = images.map(([path, src]) => ({
    src: src as string,
    title: path.split('/').pop()?.replace(/\.(jpg|png|webp)$/i, '') ?? '',
  }));

  return (
    <>

    <div className="fluid-container">
      <div className="row">
      {slides.length === 0 ? (
          <p>No images in this category.</p>
        ) : (
        slides.map((slide, i) => (
        <React.Fragment key={`frag-${i}`}>
          <div className="col-6 col-md-3 mb-4 d-flex justify-content-center">
            <img
              src={slide.src}
              alt={slide.title}
              style={{ cursor: 'pointer' }}
              className="img-fluid square-thumb"
              onClick={() => setIndex(i)}
            />
          </div>

          {(i + 1) % 6 === 0 && (
            <div className="col-6 col-md-3 mb-4 d-flex justify-content-center">
              <FeederCard category={category as keyof typeof feederCardData} />
            </div>
          )}
        </React.Fragment>
      ))
        )}
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        index={index}
        plugins={[Captions]}
      />


      
      </div>
    </>
  );
}

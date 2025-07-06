//import React, { useState } from 'react'; // used with local dev src assets folder not React

import React, { useState, useEffect} from 'react';

import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';


import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import FeederCard from "./FeederCard";
import { feederCardData } from './FeederCardData';
import { useLoading } from "../context/LoadingContext";
import './image-grid.css';

type ImageItem = {
  src: string;
  title: string;
};

export default function ImageGrid({ category, filterLightOnly = false }: { category: string, filterLightOnly?: boolean }) {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState<{ src: string; title: string }[]>([]);

 const baseUrl = import.meta.env.VITE_API_URL; /** underlined but must install  */
 const { showLoader, hideLoader } = useLoading();
  useEffect(() => {
    showLoader();
    fetch(`https://crystalhansenartographic.com/api/index-images.php/images/list?category=${category}&folder=576`)
    .then((res) => res.json())
    .then((data: ImageItem[]) => {
     // Safety check: make sure data is an array
      if (!Array.isArray(data)) {
        console.error('Expected an array of image paths, got:', data);
        return;
      }
      const filtered = filterLightOnly
        ? data.filter((item) => item.src.toLowerCase().includes('-light'))
        : data;

      setSlides(filtered);
    })
    .catch((err) => console.error('❌ Failed to fetch images:', err))
    .finally(hideLoader);

  }, [category, filterLightOnly]);

  return (
    <>
      <div className="fluid-container">
        <div className="row">
          {slides.length === 0 ? (
            <p>No images in this category.</p>
          ) : (
            slides.map((slide, i) => (
              <React.Fragment key={`frag-${slide.title}-${i}`}>
                <div className="col-6 col-md-3 mb-4 d-flex justify-content-center">
                  <img
                    src={`${baseUrl}${slide.src}`} //src={`${baseUrl}${img.image}`}
                    alt={slide.title}
                    style={{ cursor: 'pointer' }}
                    className="img-fluid square-thumb"
                    onClick={() => setIndex(i)}
                  />
                </div>

                {(i + 1) % 6 === 0 && (
                  <div className="col-12  col-6 col-md-3 mb-4 d-flex justify-content-center">
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
          slides={slides.map(slide => ({
            ...slide,
            src: `${baseUrl}${slide.src}`
          }))}
          index={index}
          plugins={[Captions]}
        />
      </div>
    </>
  );
}

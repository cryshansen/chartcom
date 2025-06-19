import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';


import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

const allImages = import.meta.glob('../assets/gallery/**/*.{jpg,png,webp}', {
  eager: true,
  import: 'default',
});


export default function ImageGrid({ category }: { category: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1); // inside component
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const images = Object.entries(allImages).filter(([path]) =>
    path.toLowerCase().includes(category.toLowerCase())
  );
const slides = images.map(([path, src]) => ({
    src: src as string,
    title: path.split('/').pop()?.replace(/\.(jpg|png|webp)$/i, '') ?? '',
  }));

  return (
    <>
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {slides.length === 0 ? (
          <p>No images in this category.</p>
        ) : (
          slides.map((slide, i) => (
            <img
              key={i}
              src={slide.src}
              alt={slide.title}
              style={{ width: '200px', cursor: 'pointer' }}
              onClick={() => setIndex(i)}
            />
          ))
        )}

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

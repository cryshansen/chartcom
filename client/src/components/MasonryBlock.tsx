import  { useState, useEffect} from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

import './brick-masonry.css';

interface StudioImage {
  src: string;
  title: string;
}



interface MasonryGalleryProps {
  images: StudioImage[];
}


export default function MasonryBlocks({ images }: MasonryGalleryProps) {

 const [index, setIndex] = useState(-1);
   const [slides, setSlides] = useState<{ src: string; title: string }[]>([]);
 const baseUrl = import.meta.env.VITE_API_URL; /** underlined but must install  */
  // 🔧 Populate slides when images change
  useEffect(() => {
    if (images.length > 0) {
      const formattedSlides = images.map((img) => ({
        src: `${baseUrl}${img.src}`,
        title: img.title,
      }));
      setSlides(formattedSlides);
    }
  }, [images, baseUrl]);
  return (
    <div className="wrapper">
      <div className="masonry masonry--h">
         {images.map((img,index) => (
          <div key={index} className="masonry-brick masonry-brick--h">
            <img
              src={`${baseUrl}${img.src}`}
              alt={`Studio Image ${index+1}`}
              style={{ width: '100%', height: 'auto' }}
              onClick={() => setIndex(index)}
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        index={index}
        plugins={[Captions]}
      />
    </div>
  );
}

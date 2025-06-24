// StudioGallery.tsx
import { useEffect, useState } from 'react';
import MasonryBlocks from '../components/MasonryBlock';

interface StudioImage {
  id: number;
  image: string;
  width: number;
  height: number;
}

export default function StudioGallery() {
  const [images, setImages] = useState<StudioImage[]>([]);
  const [studioId, setStudioId] = useState<number>(1); // Default studio

  useEffect(() => {
    fetch(`/api/studio-images?id=${studioId}`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error('Failed to fetch images:', err));
  }, [studioId]);

  const handleStudioChange = (id: number) => setStudioId(id);

  return (
    <section className="container py-5">
        <h2>Studios</h2>
      <div className="text-center mb-4">
        <div className="btn-group">
          {[1, 2, 3].map((id) => (
            <button
              key={id}
              className={`btn btn-outline-primary ${studioId === id ? 'active' : ''}`}
              onClick={() => handleStudioChange(id)}
            >
              Studio {id}
            </button>
          ))}
        </div>
      </div>

      <MasonryBlocks images={images} />
    </section>
  );
}

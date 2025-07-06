// StudioGallery.tsx
import { useEffect, useState } from 'react';
import MasonryBlocks from '../components/MasonryBlock';
import { useLoading } from "../context/LoadingContext";


interface StudioImage {
  src: string;
  title: string;
}

export default function StudioGallery() {
  const [images, setImages] = useState<StudioImage[]>([]);
  const [studioId, setStudioId] = useState<number>(3); // Default studio
  const baseUrl = import.meta.env.VITE_API_URL;
  const { showLoader, hideLoader } = useLoading();
/**
 * NODE:  fetch(`/api/studio-images?id=${studioId}`)
 * PHP see github link in readme for php solution
 */
  useEffect(() => {
    showLoader();
    fetch(`${baseUrl}/api/index-images.php/images/list?category=studio${studioId}&folder=576`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error('Failed to fetch images:', err))
      .finally( hideLoader);
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

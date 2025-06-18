
import ImageCard from './ImageCard';

const allImages = import.meta.glob('../assets/gallery/*.jpg', {
  eager: true,
  import: 'default',
});

export default function ImageGrid({ category }: { category: string }) {
  // Filter by category prefix
  const images = Object.entries(allImages).filter(([path]) =>
    path.includes(category)
  );

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {images.map(([_, src], index) => (
        <ImageCard key={index} src={src as string} alt={category} />
      ))}
    </div>
  );
}


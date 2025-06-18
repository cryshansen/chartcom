
import ImageCard from './ImageCard';

const imageMap: Record<string, { src: string; alt: string }[]> = {
  '500px': [
    {
      src: '/images/500px-images/blue-eyed-woman.jpg',
      alt: 'Blue eyed beautiful woman in pink flowers',
    },
    // Add more images
  ],
  beauty: [],
  flora: [],
  fauna: [],
  travel: [],
  settings: [],
};

export default function ImageGrid({ category }: { category: string }) {
  const images = imageMap[category] || [];

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {images.length === 0 ? (
        <p>No images in this category yet.</p>
      ) : (
        images.map((img, index) => (
          <ImageCard key={index} src={img.src} alt={img.alt} />
        ))
      )}
    </div>
  );
}

export default function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="card shadow" style={{ width: '18rem' }}>
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body text-center">
        <p className="card-text">{alt}</p>
      </div>
    </div>
  );
}

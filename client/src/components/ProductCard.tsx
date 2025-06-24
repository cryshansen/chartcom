type Product = {
  title: string;
  description?: string;
  price?: string;
  imgSrc: string;
  category: string;
};


export default function ProductCard({title,description,price,imgSrc}: Product) {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="fw-bold">{price}</p>
        <button className="btn btn-outline-primary">Buy</button>
      </div>
    </div>

  );
}

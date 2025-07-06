import { useState,useEffect } from "react";



export default function ProductModal(){

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const baseUrl = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState<{ title: string; imgSrc: string; price?: string } | null>(null);

  useEffect(() => {
  const handler = (e: CustomEvent) => {
    const { product, email } = e.detail;
    if (product) setProduct(product);
    setEmail(email || "");

  };

  window.addEventListener("prefillProductModal", handler as EventListener);

  return () => {
    window.removeEventListener("prefillProductModal", handler as EventListener);
  };
}, []);


  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   const payload = {
        email,
        product
    };
    try {
      const res = await fetch(`${baseUrl}"/api/index-product.php/product/buy`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      setMessage(result.message || "Thanks for subscribing!");
      setEmail("");
      
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };
    return(
      <div
        className="modal fade"
        id="productModal"
        tabIndex={-1}
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <form id="modal-product-form" role="form" onSubmit={handleProductSubmit}>
            <div className="modal-header">
              <h3 id="ProductModalLabel" className="modal-title">Purchase</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                {/* Token - handle dynamically or via hidden input  this is for booking app token generated in the front end for time booking became available or when screen generated*/}
                <input type="hidden" name="_token" value="" />
                {product && (
                    <div className="text-center mb-3">
                        <img
                        src={product.imgSrc}
                        alt={product.title}
                        className="img-fluid mb-2"
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                        />
                        <h5>{product.title}</h5>
                        <p className="fw-bold">{product.price}</p>
                    </div>
                )}
                  {error && <p className="text-danger mt-2">{error}</p>}
             </div>
            {message && (
                <p className="text-center mt-3 text-success fw-bold">
                  {message}
                </p>
              )}
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button id="send" type="submit" className="btn btn-primary">PayPal</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    )
}
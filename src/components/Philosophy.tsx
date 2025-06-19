


export default function Philosophy() {
  return (
    <section className="container my-5 p-5 text-center border-bottom"
     style={{
            backgroundImage: "url('/images/apotecary/oliver-guhr-Qs3ALnjkwF4-unsplash.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '500px',
            position: 'relative',
        }}>
        <h2>Crafted with Purpose</h2>
        <p className="lead">
            Every formula is made in small batches using ethically sourced botanicals and therapeutic-grade oils.
        </p>

        <div className="row mt-5">
            <div className="col-md-4">
            <h5>🌿 Pure Botanicals</h5>
            <p><span className="text-muted">No synthetic fragrances. No fillers. Just nature’s best.</span></p>
            </div>
            <div className="col-md-4">
            <h5>🧪 Mindful Formulas</h5>
            <p><span className="text-muted">Every blend supports a ritual — for skin, spirit, or space.</span></p>
            </div>
            <div className="col-md-4">
            <h5>♻️ Sustainable</h5>
            <p><span className="text-muted">Recyclable packaging, local sourcing, and cruelty-free testing.</span></p>
            </div>
        </div>
    </section>


  );
}

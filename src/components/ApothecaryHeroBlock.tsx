export default function ApothecaryHeroBlock(){
    return (
            <section className="hero-section d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundImage: "url('/images/artelier_slider/eye_glass2_1024.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '500px',
                  position: 'relative',
                }}
              >
                <div className="row">
                  <div className="textarea_block col-md-6">
                     <h1 className="display-4 text-center my-5">The Modern Apothecary</h1>
                    <p className="lead text-center">Small-batch botanical serums, essential oils, and handmade soap crafted with intention. </p>
                  </div>
                </div>
               
            </section>
    )
}
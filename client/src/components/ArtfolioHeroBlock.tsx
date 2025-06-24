export default function ArtfolioHeroBlock(){
    return (
            <section className="hero-section d-flex align-items-center justify-content-center text-white text-start"
                style={{
                  backgroundImage: "url('/images/europeana-KBnfo0ZMQVs-unsplash.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '500px',
                  position: 'relative',
                }}
              >
                <div className="row">
                  <div className="textarea_block col-md-6">
                     <h1 className="display-4 text-start">The Modern Artfolio</h1>
                    <p className="lead">Meanderings of a photographer's eyes. </p>
                  </div>
                </div>
               
            </section>
    )
}
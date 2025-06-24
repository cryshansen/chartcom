export default function WorkshopHeroBlock(){
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
                     <h1 className="display-4 text-center my-5">The Modern Workshop</h1>
                    <p className="lead text-center">Studio specific workshops are presented here to explore and understand visual representation, grow your visual eye. </p>
                  </div>
                </div>
               
            </section>
    )
}
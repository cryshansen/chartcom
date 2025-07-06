export default function StudioHeroBlock(){
    const baseUrl = import.meta.env.VITE_API_URL; /** underlined but must install  */
    return (
            <section className="hero-section d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundImage: `url("${baseUrl}/images/artelier_slider/alexander-dummer-aS4Duj2j7r4-unsplash.jpg")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '500px',
                  position: 'relative',
                }}
              >
                <div className="row">
                  <div className="textarea_block col-md-6">
                     <h1 className="display-4 text-center my-5">The Modern Studios</h1>
                    <p className="lead text-center">Capture the moment. Define the brand. Crafting strategy through story, and style. </p>
                  </div>
                </div>
               
            </section>
    )
}
export default function ProjectHeroBlock(){
   const baseUrl = import.meta.env.VITE_API_URL;
    return (
            <section className="hero-section d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundImage: `url('${baseUrl}/images/brands-people-Ax8IA8GAjVg-unsplash.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '500px',
                  position: 'relative',
                }}
              >
                <div className="row">
                  <div className="textarea_block col-md-6">
                     <h1 className="display-4 text-center ">The Modern Development</h1>
                    <p className="lead text-center">High impact, rapid development, meet today's world ahead. </p>
                  </div>
                </div>
               
            </section>
    )
}
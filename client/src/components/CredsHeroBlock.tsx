export default function CredsHeroBlock(){
   const baseUrl = import.meta.env.VITE_API_URL; /** underlined but must install  */
    return (
            <section className="hero-section d-flex align-items-center justify-content-center text-white text-start"
                style={{
                  backgroundImage: `url("${baseUrl}/images/pang-yuhao-_kd5cxwZOK4-unsplash.jpg")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '500px',
                  position: 'relative',
                }}
              >
                <div className="row">
                  <div className="textarea_block col-md-6">
                     <h1 className="display-4 text-start">The Modern Credential</h1>
                    <p className="lead">Educational and Driven Pursuits. </p>
                  </div>
                </div>
               
            </section>
    )
}
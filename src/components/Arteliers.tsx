export default    function Arteliers() {

    return (
        <div className="container py-5">
            <h1 className="my-4 text-center">Arteliers</h1>
            <div className="row g-4">
        
              {[
                {
                  title: "Creative Collaboration",
                  date: "June 1, 2025",
                  text: "Lets collaborate on a studio creative shoot a la carte.",
                  img: "images/artelier/neon-wang-HNEONlW67lU-unsplash.jpg",
                  alt: "Collage Art",
                  button: "Reserve Spot"
                },
                {
                  title: "Watercolor for Beginners",
                  date: "May 5, 2025",
                  text: "Explore wet-on-wet, dry brush, and color blending techniques with watercolor paints.",
                  img: "images/artelier/the-new-york-public-library-iocAGaAQjzk-unsplash.jpg",
                  alt: "Watercolor Painting",
                  button: "Join Now"
                },
                {
                  title: "Night Photography",
                  date: "May 12, 2025",
                  text: "Dive into shooting with 35mm film, developing rolls, and darkroom techniques.",
                  img: "images/artelier/diego-ph-OqLELAOqXxM-unsplash.jpg",
                  alt: "Night Photography",
                  button: "Learn More"
                },
                {
                  title: "Portrait Photography Basics",
                  date: "April 20, 2025",
                  text: "Master lighting, composition, and posing in this beginner-friendly portrait session.",
                  img: "images/artelier/guilherme-stecanella-NalsgBKcj-4-unsplash.jpg",
                  alt: "Portrait Photography",
                  button: "Register Now"
                },
                {
                  title: "Sketching Techniques",
                  date: "May 18, 2025",
                  text: "Sharpen your pencil skills and learn gesture, contour, and shading techniques.",
                  img: "images/artelier/winston-chen-MgvPWqOSUMI-unsplash.jpg",
                  alt: "Sketch & Drawing",
                  button: "Register"
                },
                {
                  title: "Acrylic Painting Studio",
                  date: "May 25, 2025",
                  text: "Create bold, colorful works using brushes, palette knives, and acrylics on canvas.",
                  img: "images/artelier/europeana-GqRjkeJwUYg-unsplash.jpg",
                  alt: "Acrylic Painting",
                  button: "Sign Up"
                }
              ].map(({ title, date, text, img, alt, button }, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="card h-100 shadow-sm">
                    <img src={img} className="card-img-top" alt={alt} />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <h6 className="card-subtitle text-muted mb-2">{date}</h6>
                      <p className="card-text">{text}</p>
                      <button
                        className="btn btn-lg btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#contactModal"
                        type="button"
                      >
                        {button}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        
            </div>
        </div>
        
        )
    }
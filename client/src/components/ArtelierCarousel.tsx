export default function ArtelierCarousel() {
    const artelierSlides = [
      {
        img: "images/artelier_slider/canon_eos_2_1024.png",
        alt: "Canon Mark IV - my professional camera",
        caption: (
          <>
            <div className="floating_content">
              <h5>Artelier Studio<br /> - ( ar-tell-ee-ay ) - <br /> art studio workshop</h5>
              <p>
                Studio workshops are an artists base. Sights toward studio venues defines the ultimate goal of success.
                Here we have artistic studio spaces of various means from photographic or painter studio, a wallpaper/overlay
                gallery, furniture designs and also an apothecary for cosmetic space.
              </p>
              <p>Browse the galleries of shops, use the links within to navigate around.</p>
            </div>
            <div className="textarea_block urban">
              <h3>Urban Legend</h3>
              <p style={{ paddingBottom: 0, marginBottom: 0 }}>
                "It's a made up word. A clever cross between 'Art' and 'Atelier'. Atelier means workshop in French. It should be
                pronounced ar-tell-ee-ay."
                <a href="https://www.urbandictionary.com/define.php?term=artelier&utm_source=search-action"> urban dictionary</a>
              </p>
            </div>
          </>
        ),
      },
      {
        img: "images/artelier_slider/white_room_1024.png",
        alt: "The White Room Studio",
        caption: (
          <div className="floating_content">
            <h2>White Room</h2>
            <p>Current works in the white room consist of headpiece work and bench light workshops.</p>
            <div className="link_button_wrap">
              <a className="link_button" href="/studios/1">Visit White</a>
            </div>
          </div>
        )
      },
      {
        img: "images/artelier_slider/make_believe_2_1024.png",
        alt: "Make Believe Studio",
        caption: (
          <div className="floating_content">
            <h2>Make Believe Studio</h2>
            <p>
              This studio is a collection to say the least. Everything I've adored and held onto is in this very room. It’s a
              clever room with hidden compartments and rabbit heads. Time is of the essence — let’s make cake.
            </p>
            <div className="link_button_wrap">
              <a className="link_button" href="/studios/3">Visit Make Believe</a>
            </div>
          </div>
        )
      },
      {
        img: "images/artelier_slider/eye_glass2_1024.jpg",
        alt: "Apothecary",
        caption: (
          <div className="floating_content">
            <h2>Apothecary</h2>
            <p>
              I want to term this the jellyfish studio — ocean-healing, spa-ready beauty room. Here we collaborate with artists
              and designers creating sculptured soaps, lotions, and luxury products from the earth.
            </p>
            <div className="link_button_wrap">
              <a className="link_button" href="/apothecary">Visit Apothecary</a>
            </div>
          </div>
        )
      }
    ];
    
    return (

      <div className="fluid-container">
        <div id="artelierCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <div className="carousel-indicators">
            {artelierSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#artelierCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
    
          {/* Slides */}
          <div className="carousel-inner">
            {artelierSlides.map((slide, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img src={slide.img} className="d-block w-100 carousel-image" alt={slide.alt} style={{ height: '500px',  objectFit: 'cover', objectPosition: 'center' }} />
                <div className="carousel-caption d-none d-md-block">{slide.caption}</div>
              </div>
            ))}
          </div>
    
          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#artelierCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#artelierCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
}    
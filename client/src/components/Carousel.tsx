export default function Carousel() {
  return (
   <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
    
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://crystalhansenartographic.com/images/coffee.jpg" style={{ height: '650px',  objectFit: 'cover', objectPosition: 'center' }} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Coffee Trees</h5>
              <p>Coffee trees grow in Cuba like shrubs and boundary trees.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://crystalhansenartographic.com/images/familyA_sm.jpg" style={{ height: '650px',  objectFit: 'cover', objectPosition: 'center' }}  className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>A family Portrait</h5>
              <p>A family portrait of mom, kids and partners</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://crystalhansenartographic.com/images/cuban_model.jpg" style={{ height: '650px',  objectFit: 'cover', objectPosition: 'top' }} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>A beautiful cuban</h5>
              <p>A wonderful lady posing in Havana</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://crystalhansenartographic.com/images/mermaid_walk.jpg" style={{ height: '650px',  objectFit: 'cover', objectPosition: 'center' }} className="d-block w-100" alt="Slide 4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>A mermaid concept</h5>
              <p>Rope wrapped in a mermaid tail fin and footsteps implying shedding to feet</p>
            </div>
          </div>
        </div>
    
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
}


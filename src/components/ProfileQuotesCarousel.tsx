


export default function ProfileQuotesCarousel() {


{/* Right Column */}
return  (
          <div className="col-lg-4 border-top border-primary border-4">
            <div id="profileQuotesCarousel" className="pt-5 m-5 carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner text-center">
                {[
                  '“Where art meets code — building elegant solutions with logic and vision.”',
                  '“Developer. Designer. Dreamer. Building with both sides of the brain.”',
                  '“Interfaces that talk. APIs that think. Designs that work.”',
                  '“Clean logic. Beautiful UI. Solid experience.”',
                ].map((quote, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <blockquote className="quote-slide">{quote}</blockquote>
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#profileQuotesCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#profileQuotesCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>

            <div className="excerpt-block pt-3">
              <p className="excerpt-text text-muted">
                I care about clear UI flow as much as reliable backend logic. Whether I’m enhancing a booking system or refining how data moves across forms and databases, I bring persistence, creativity, and a builder’s mindset to every project.
              </p>
            </div>
          </div>
        )
}
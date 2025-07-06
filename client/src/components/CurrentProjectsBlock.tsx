 import { Link } from 'react-router-dom';
 export default function CurrentProjectsBlock() {

    return (
          <div className="container mb-5 mt-5  ">
            <h2 className="pb-2 border-bottom text-start">Current Projects</h2>
            <div className="text-end">
              <Link to="/projects">more projects</Link>
              
            </div>
            <div className="row align-items-center g-lg-5 py-5">
              <div className="col-lg-7 text-center text-lg-start">
                <img
                  src="/images/mermaid_tulel_lights_insta.png"
                  alt="Mermaid Tulle Dress"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-10 mx-auto col-lg-5">
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                  Current Photography Focus
                </h1>
                <p className="col-lg-10 fs-4">
                  Most recent explorations of photographic medium have re-introduced the sewing trade of artisan skills as my creative outlet explores surrealism through art.
                </p>
                <p>
                  Tim Walker's talents have inspired curiosity in normal things. My goldfish inspired color transparency and flow to transcribe into a mermaid dress.
                  Sue Bryce inspires softness and use of tulle to create the transparency of flow.
                </p>
              </div>
            </div>
          </div>
        )
    }
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function  ArtfolioCollabBlock()  { 


    return (
          <div className="container">
            <h2 className="pb-2 border-bottom">Artfolio Collabs</h2>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src="images/tulips_1248.png"
                  className="d-block mx-lg-auto img-fluid"
                  alt="Valentines"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  Be My Pink Valentine
                </h1>
                <p className="lead">
                  Currently offering space for collaborating on Glamour Shots, Glamour Portraits, Feel Good Session, or any Beauty session for 30% off regular mini session cost.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <Link to="/calendar">
                  <button
                    id="calendar"
                    type="button"
                    className="btn btn-primary btn-lg px-4 me-md-2"
                  >
                    Check Dates
                  </button></Link>
                  <button
                    type="button"
                    className="btn btn-primary btn-center-align"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                  >
                    Book Custom
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
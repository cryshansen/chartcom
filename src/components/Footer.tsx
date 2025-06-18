export default function Footer() {
  return (
    <div className="container">
    <footer className="py-5">
    <div className="row">
        <div className="col-6 col-md-2 mb-3">
        <h5>Artellier</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Workshops</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Studio Lighting</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Lightboxes</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Creatives</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Groups</a></li>
        </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
        <h5>Artfolio</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Gallery1</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Gallery2</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Gallery3</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Gallery4</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Gallery5</a></li>
        </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
        <h5>Projects</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">artog.co</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">pinmento.co</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">crystalhansen.ca</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">WD Photo management</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Mermaids</a></li>
        </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
            <form id="newsletter-form" role="form" method="POST" action="">
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>

                <div id="smessage" style={{ color: 'green' }}></div>
                <span className="error" id="smsg-error" style={{ color: 'red' }}></span>

                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsemail" className="visually-hidden">Email address</label>
                    <input
                    id="newsemail"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    required
                    />
                    <span className="error" id="smessage-error"></span>
                    <button id="subscribe" className="btn btn-primary" type="button">
                    Subscribe
                    </button>
                </div>

                <div id="captcha3"></div>
            </form>
        </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2013 Crystal Hansen Artographic, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis"  aria-label="LinkedIn" href="https://ca.linkedin.com/in/crystalhansenartographic" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" aria-label="Instagram" href="https://www.instagram.com/crystalhansenartographic/" target="_blank"><i className="fab fa-instagram"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="https://www.facebook.com/Crystal-Hansen-Artographic-102193689877658/" aria-label="Facebook" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="https://500px.com/crystalhansen" target="_blank" aria-label="500px" ><i className="fab fa-500px"></i></a></li>
        </ul>
    </div>
    </footer>
 </div> 
  )
}

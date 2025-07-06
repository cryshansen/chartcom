import NewsletterFooterBlock from "./NewsletterFooterBlock"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="container footerContainer clearfix">
    <footer className="py-5">
    <div className="row">
        <div className="col-6 col-md-2 mb-3">
        <h5>Artellier</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/artelier#workshops" className="nav-link p-0 text-body-secondary">Workshops</Link></li>
            <li className="nav-item mb-2"><Link to="/studios/1" className="nav-link p-0 text-body-secondary">Studio Lighting</Link></li>
            <li className="nav-item mb-2"><Link to="/artelier#lightboxes" className="nav-link p-0 text-body-secondary">Lightboxes</Link></li>
            <li className="nav-item mb-2"><Link to="/apothecary" className="nav-link p-0 text-body-secondary">Apothecary</Link></li>
            <li className="nav-item mb-2"><Link to="/artelier#groups" className="nav-link p-0 text-body-secondary">Groups Shoots</Link></li>
        </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
        <h5>Artfolio</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/artfolio#500px" className="nav-link p-0 text-body-secondary">500px</Link></li>
            <li className="nav-item mb-2"><Link to="/artfolio#beauty" className="nav-link p-0 text-body-secondary">Beauty</Link></li>
            <li className="nav-item mb-2"><Link to="/artfolio#flora" className="nav-link p-0 text-body-secondary">Flora</Link></li>
            <li className="nav-item mb-2"><Link to="/artfolio#fauna" className="nav-link p-0 text-body-secondary">Fauna</Link></li>
            <li className="nav-item mb-2"><Link to="/artfolio#travel" className="nav-link p-0 text-body-secondary">Travel</Link></li>
        </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
        <h5>Projects</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/projects#artog" className="nav-link p-0 text-body-secondary">artog.co</Link></li>
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">crystalhansen.ca</Link></li>
            <li className="nav-item mb-2"><Link to="/projects#emtp" className="nav-link p-0 text-body-secondary">emtp</Link></li>
            <li className="nav-item mb-2"><Link to="/projects#openai" className="nav-link p-0 text-body-secondary">openAI</Link></li>
            <li className="nav-item mb-2"><Link to="/projects#pinmento" className="nav-link p-0 text-body-secondary">pinmento.co</Link></li>
            <li className="nav-item mb-2"><Link to="/projects#zackly-rite" className="nav-link p-0 text-body-secondary">Zackly-rite</Link></li>

        </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
            <NewsletterFooterBlock />
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

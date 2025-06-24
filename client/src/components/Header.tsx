import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fluid-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <Link className="navbar-brand" to="/">crystalhansenartographic</Link>
        
            {/* Toggle button for mobile */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        
            {/* Collapsible menu */}
            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/artelier">artelier</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/artfolio">artfolio</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/projects">projects</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/creds">creds</Link></li>
              </ul>
            </div>
          </nav>
    </header>
  );
}

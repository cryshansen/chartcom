
import { Helmet } from 'react-helmet-async';

const NotFound = () => (
        <>
        <Helmet>
            <title>404 Not Found | Crystal Hansen | Artographic</title>
            <meta name="description" content="Explore the creative adventures in Full Stack coding and Phtographic topics by Crystal Hansen." />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Crystal Hansen – Full-Stack Developer" />
            <meta property="og:description" content="Full-stack developer with experience in React, TypeScript,  Java and PHP developer specializing in backend systems, API integrations, and technical web applications." />
            <meta property="og:image" content="images/signature2_sized_490.png" /> 
            <meta property="og:url" content="https://crystalhansenartographic.com" />
            <meta property="og:site_name" content="Crystal Hansen Portfolio" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Crystal Hansen – Full-Stack Developer" />
            <meta name="twitter:description" content="Explore technical projects in React, TypeScript, Java, PHP, OpenAI APIs, and backend logic, systems, API integrations, and technical web applications." />
            <meta name="twitter:image" content="images/signature2_sized_490.png" /> 
        </Helmet>
        <div className="container mt-4 mb-5">   
            <img className="medium" alt="Looking Glass" src="../images/looking_glass_sm.jpg"></img>
            <h1 className="display-1">Oops!</h1>
            <h2 className="display-4">🚫 404 Not Found</h2>
            <div className="error-details mb-4">
                Sorry, an error has occurred. The requested page was not found!
            </div>
            <div className="error-actions d-flex flex-wrap gap-2 justify-content-center">
                <a href="/" className="btn btn-primary" style={{ width: '240px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-house me-2" viewBox="0 0 16 16">
                        <path
                            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                    </svg>
                    Take Me Home
                </a>
                 <button
                    type="button"
                    className="btn btn-primary btn-center-align"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-envelope me-2" viewBox="0 0 16 16">
                        <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    Contact Support
                  </button>
            </div>
        </div>

        </>    

);
    
export default NotFound;

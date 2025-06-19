export default function DevelopmentProjects(){
          {/* Left Column */}

    return(
          <div className="col-lg-8 pe-5">
            <p className="px-5 mb-5">
              I'm a creative developer with a unique and beautiful blend of design and solid left brain technical skill. I build custom applications that bridge user experience and backend logic — all guided by clean, scalable, modular code principles.
            </p>
            <p className="px-5 mb-5">
              As a full-stack developer with a strong foundation in backend systems, data flow, and modular architecture. I build robust web applications using Java, PHP, JavaScript, and API-driven logic — with a focus on scalability, security, and performance.
            </p>
            <p className="px-5 mb-5">
              My experience spans from RESTful API designs and database modeling to form validation, CORS handling, and asynchronous communication. I’ve developed production-grade systems such as studio booking platforms in the cloud and chatbot integrations, where server-side precision and clean routing are critical.
            </p>
            <p className="px-5 mb-5">
              Every project I take on is an opportunity to apply computer science principles — from object-oriented design to efficient data handling. I care deeply about writing code that’s well-structured, maintainable, and purpose-driven.
            </p>
            <p className="px-5 mb-5">
              Outside of coding, I bring an artistic eye to my work, influenced by years of visual design and storytelling. I believe great software should feel as good as it looks.
            </p>

            <div className="stack-tags d-flex flex-wrap gap-2 mt-3 px-5">
              {[
                'Java', 'Angular', 'Node.js', 'AWS', 'EC2',
                'Google Cloud', 'Spring APIs', 'WebAPI', 'Open AI',
                'Bert', 'Bootstrap', 'Python', 'PHP', 'MySQL',
                'Flask', 'TypeScript',
              ].map((tag) => (
                <button key={tag} type="button" className="btn rounded-pill btn-primary position-relative">
                  {tag}
                </button>
              ))}
              <button type="button" className="btn rounded-pill btn-primary position-relative">
                SpringBoot
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </button>
            </div>
          </div>

            )
}
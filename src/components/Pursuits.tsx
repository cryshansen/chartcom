import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, fa500px } from '@fortawesome/free-brands-svg-icons';

export default function Pursuits(){
    return(
        <section className="container mt-5 mb-5 py-5 border-top">
            <h3>🧠  Pursuits</h3>
            <div className="row mt-5 text-start">
                <p>Current pursuits are growing knowledge of data and practical thinking into elegant code. Being an idealist the creative application, the world, can be so much more beautiful. Personal persuits involve data and application building using various current trends in languages and architectural designs. Using python to screen scrape data consumption, java for website applications using hibernate and spring designed with  HTML5, javascript and CSS. Integrations of AWS, Twitter, Instagram demonstrate seamlessness API connectivity.  </p>
                <p>Code, language, machine learning, data, application design primary focuses to keep up to date with trends in the field. Data makes me squeal with excitement. Unfolding details patterns and understanding the world with information. Research at the core of application development is the agile way. Coding became a new way to create and express imagination through discovery of detail. Workflow, tracking systems, screenscraping utilizing Python, Web (HTML5, javascript, Angular, jQuery), C#, Java, php languages and SQL are all notches on my belt. Find me on GitHub here - 
                    <a href="https://github.com/cryshansen" target="_blank"><i className="fa-brands fa-github"></i><FontAwesomeIcon icon={faGithub} size="1x" /> Visit Github</a> Get the 
                    <a href="https://cryshansen.github.io/cv"> printed copy </a> of my resume.</p>
            
                <p>Art in particular, photography,fashion, beauty, scultping dresses, furniture occupy me secondary endeavors. Each of these explorations uncovers new insights for transference. Check out 500px image gallery here. 
                    <a href="https://500px.com/crystalhansen" target="_blank"> <FontAwesomeIcon icon={fa500px} /> Visit 500px</a>.</p>
                <p>Soapmaking - the &nbsp;
                    <a  href="/apothecary" > apothecary </a>, a fundamental bathing need with chemical reaction possibilities. Gardening being a favorite past time, soap infused in flower petals finds me grounded to nature. Beauty comes through enjoyment of the little luxuries, the earth offers, created into soaps with scents, oils, color and softness in the most lushious of ways.</p>
                <p></p>
            </div>
        </section>
    )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faPalette, faSwatchbook,faComputer } from '@fortawesome/free-solid-svg-icons';




export default function Education(){

    return(
        <section className="container pt-5 pb-5 mt-5 mb-5">
            <div className="row">
                <div className="container mb-5">
                    <h3> 🎓 Education</h3>
                </div>	
                <div className="col-sm"> 
                    <h4><FontAwesomeIcon icon={faComputer} /> Computer Systems Technology Diploma</h4>
                        <p><strong><small>Northern Alberta Institute of Technology / NAIT</small></strong> 2009</p>
                    </div>
                    <div className="col-sm">
                    <h4><FontAwesomeIcon icon={faFilm} />   Bachelor of Art - Fine Art</h4> 
                        <p><strong><small>University of Saskatchewan </small></strong>2005
                       </p> 
                </div>
                <div className="col-sm">
                <h4><FontAwesomeIcon icon={faPalette} /> Multimedia Certificate</h4>
                    <p><strong><small> University of Alberta Extension</small></strong> 2002<br />
                        <span className="subfont muted"><small>Dreamweaver, Flex, Flash, MySql, HTML, CSS</small></span>
                    </p>
                </div>
                <div className="col-sm">
                    <h4>	<FontAwesomeIcon icon={faSwatchbook} />
                         Desktop Publishing Diploma </h4>
                        <br />
                        <p>ICS Correspondence Schools 1996</p>
                </div>  
            </div>
        </section>	
    )
}
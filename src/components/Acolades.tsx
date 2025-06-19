import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faScroll } from '@fortawesome/free-solid-svg-icons';

export default function Acolades(){

    return(
        <section className="container border-top text-start py-5 mb-5">
            <div className="row">
                <div className="text-center mb-5">
                    <h3><FontAwesomeIcon icon={faCrown} /> Acolades</h3>
                </div>
                <div className="col-sm">
                    <h4><FontAwesomeIcon icon={faScroll} /> Jason Lang Scholarship</h4>
                    <p> <span className="text-muted"> <small>Northern Alberta Institute of Technology, 2006 - 2009<br/> Edmonton, AB </small></span> 
                    </p>
                </div>
                <div className="col-sm">	
                    <h4><FontAwesomeIcon icon={faScroll} /> Jason Lang Scholarship</h4> 
                    <p><span className="text-muted"> <small>University of Alberta, 2002 - 2004<br/>Edmonton, AB</small></span>
                    </p>
                </div>
                <div className="col-sm">				
                      <h4><FontAwesomeIcon icon={faScroll} /> Michael Luchkovich Scholarship</h4> 
                       <p> <span className="text-muted"> <small>Alberta Heritage Scholarship Fund 2001-2002<br/>Edmonton, AB</small></span>
                    </p>
                </div>
                
            </div>
        </section>
    )
}
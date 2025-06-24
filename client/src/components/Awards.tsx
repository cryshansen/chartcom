
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faPalette } from '@fortawesome/free-solid-svg-icons';


import { faCrown } from '@fortawesome/free-solid-svg-icons'


export default function Awards() {
  return (
    <section className="container mt-5 mb-5 border-top pt-5">
      <div className="row">
          <div className="container-fluid mb-5">
          <h3 ><FontAwesomeIcon icon={faCrown} />Awards</h3>
          </div>
          <div className="col-sm">
              <h4><FontAwesomeIcon icon={faAward} /> Pillar Awards Nominee</h4>
              <p><small><strong>Canadian Western Bank 2017</strong></small><br />
               <span className="text-muted"> <small>Q3 Nomination list at CWB.</small></span>
              </p>				
          </div>
          <div className="col-sm">
              <h4><FontAwesomeIcon icon={faAward} /> Eston Juried Art Show </h4>
                <p><small><strong>Second Place - Fruitful Things</strong> 1995</small><br/>
                <span className="text-muted"><small> Eston Juried Art Show (OSAC), <br />Eston, SK</small></span>
              </p>
          </div>
          <div className="col-sm">
              <h4>	<FontAwesomeIcon icon={faPalette} /> Trio Exhibition </h4>
               <p><strong><small> Ways of Seeing1995-1997</small></strong> <br />
                   <span className="text-muted"> <small> Organization Saskatchewan Arts Council (OSAC),<br /> Swift Currant, SK</small></span>
              </p>
              
          </div> 
      </div>
    </section>
  )
}
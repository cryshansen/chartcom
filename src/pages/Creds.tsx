import ProjectCollabBlock from '../components/ProjectCollabBlock' 

import Awards from '../components/Awards' 
import Education from '../components/Education' 
import Acolades from '../components/Acolades' 
import Pursuits from '../components/Pursuits' 


 const Creds = () => (
         <section className="fluid-container py-5 mb-5">
                <h2 className="text-center mt-5 mb-5"> 📜  creds</h2>
                <section className="container border-top text-start py-5 mb-5">
                        <p>Its impolite to age ourselves. Growing up in Ontario where lakes are blue and sand is pale cream, impressions of color influence has had a natural migration to Cerulean blue vs prairie skies.</p>
                        <p>Rolling Ontario hills and maple leaves lasting weeks on trees turning from yellow, orange then red before falling, is a treasured sight to befall. Yearning to see these memories again unfold is a dream in itself. With the pure curiosity of a monkey, the imagination led to discovery of plant observances causing poison oak and scholastic years spent with mail orders of disposible film cameras.</p>
                        <p>Computers were a family commodity as my father's career led the path to have me playing with tutorials on Saturday afternoons learning I/O code in a c-prompt style green text on black screen editors. We had a computer in our house in the 80s dialing up through ethernet cables to servers at &nbsp;
                                <a
                                        href="#"
                                        onClick={e => {
                                        e.preventDefault();
                                        //oprn('DigitalEquipment')
                                        }}
                                        >
                                        Digital Equipment Corporation
                                </a>.  
                                It was my most valuable exposure to computers, at a young age relative to computer age, outside of any formal course work. High School Apple II computer programming was my favorite course. The next few decades of aspirations and career paths followed.
                                
                                 Read about the <a href="https://en.wikipedia.org/wiki/Rainbow_100" target="_blank">Digital Rainbow 100 Computers - Wikipedia</a>. View the &nbsp;
                                <a
                                        href="#"
                                        onClick={e => {
                                        e.preventDefault();
                                        //oprn('Rainbow')
                                        }}
                                        >
                                        Rainbow Logo
                                </a>
                                - simple - including digital equipments logo with its print letterhead style stamping.
                                <a href="http://oldcomputers.net/dec-rainbow-100.html" target="_blank"> Read about it here.</a>
                        </p>
                        <p>Photography was a fascination from elementary age of disposable film cameras. I would send film via Canada Post to get developed and printed. I anticipated the printed images for weeks prior to arrival anticipating the minds view and discover my curiosities on paper. Photos of horses, cats, dogs, landscapes filled my vision. Formal education elicited surreal conception of the NEGATIVE and its spacial view. I loved the negative often more than positive that would develop to reveal itself. Exposure of the negative light displayed through the enlarger down onto paper, for me, was more intreging and facinating than the final outcome of positive exposure. I often found disappointment as the paper developed in the tray.</p>
                </section>
                 <Awards />
                <section className="container border-top text-start py-5 mb-5">                       
                        <p>Photography was a fascination from elementary age of disposable film cameras. I would send film via Canada Post to get developed and printed. I anticipated the printed images for weeks prior to arrival anticipating the minds view and discover my curiosities on paper. Photos of horses, cats, dogs, landscapes filled my vision. Formal education elicited surreal conception of the NEGATIVE and its spacial view. I loved the negative often more than positive that would develop to reveal itself. Exposure of the negative light displayed through the enlarger down onto paper, for me, was more intreging and facinating than the final outcome of positive exposure. I often found disappointment as the paper developed in the tray.</p>
                </section>

                <ProjectCollabBlock /> 
                <Education />
                <section className="container text-start border-top py-5 mb-5">
                        <p>Preliminary studies transpired in print and pure film eras gaining a &nbsp;
                        <a
                                href="#"
                                onClick={e => {
                                e.preventDefault();
                                //oprn('DesktopPublishing')
                                }}
                                >
                                Desktop Publishing Diploma,</a> receiving Highest Honours, exposed career development in print designs with up to 5 color print separations ready for  Heidelburg offset printing presses. Working with negatives started using software Photoshop 3.5, Illustrator 7.0, Quark 4, Freehand 6, Mac OS 6.5 and Window 3.1. Managing ram alocations to print 100MB files to 2MB ram processing print queques. Transparency of colour, shapes and fonts are often found in both print work, photographic, and fabric concepts.</p>
                        <p>Multimedia Certificate - University of Alberta, extension, was the next transforming training as it unfolded in the form of web development using Macromedia products of Flash, Flex (MySql) and Dreamweaver. Training in HTML, CSS, and Javascript allowed for creating beauty in web. My next intregue of curiosities. I loved how code made things beautified. Flash and Flex made data accessible.</p>
                        <p>University of Saskatchewan - &nbsp;
                        <a
                                href="#"
                                onClick={e => {
                                e.preventDefault();
                                //oprn('degree')
                                }}
                                >
                                B.A.</a>, open studies gave broad unilateral views of the world and business functions. Investing mostly in art as part of joy and fulfillment, diversity in exploration of sociology, economics, statistics and computers encompase the degree.</p>
                        <p>Computer Systems Technology &nbsp;
                        <a
                                        href="#"
                                        onClick={e => {
                                        e.preventDefault();
                                        //oprn('ComputerSystemsTechnology')
                                        }}
                                        >
                                        Diploma
                                </a>, multimedia just wasn't enough of a dive into the world of web and code. Lastly, education at Northern Alberta Institute of Technology, NAIT, where multiple tools and languages had evolved again and became the next pursuit.</p>
                </section>
                <Acolades />
                <Pursuits />

         </section>
        );
        
export default Creds;
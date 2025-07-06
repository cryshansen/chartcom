 import { Link } from 'react-router-dom';

export default function ArtographicIntroBlock(){
    return(
            <div className="container mt-5 px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Crystal Hansen Artographic</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                {/* Left Column */}
                <div className="feature col">
                    <div className="page_feature_image_block_left">
                    <h2>Crystal Hansen</h2>
                    <p>
                        My work is artistic, design and coding related. Artistic in interior design, furniture design, graphic design and fine art. Code is another form of language which creates a DNA like wrapper to the entire adventure and experience.
                    </p>
                    <p>
                        Thank you for taking the time to check out my online studio – take a look around and stay awhile!
                    </p>
                    <Link to="/artelier" className="icon-link">
                        online studio
                        <svg className="bi" aria-hidden="true">
                        <use xlinkHref="#chevron-right" />
                        </svg>
                    </Link>
                    </div>
                </div>
            
                {/* Center Image */}
                <div className="feature col">
                    <div className="page_feature_image_block_img">
                    <img
                        src="images/leftSide2.png"
                        style={{ width: "100%" }}
                        alt="Crystal Hansen Visual"
                    />
                    </div>
                </div>
            
                {/* Right Column */}
                <div className="feature col">
                    <div className="page_feature_image_block_right">
                    <h2>Artographic</h2>
                    <p>
                        There are 119 words that start with 'Art' and can constitute part of the use of 11 letters for scrabble enthusiasts like Arteriogram or Articulable. It’s true.
                    </p>
                    <p>
                        Artographic became a term used to identify my skill sets. Fine Art, Graphic Design, and Photographic processes that transform the abstract thought into its visualization.
                    </p>
                    <Link to="/about" className="icon-link">
                        Visualize
                        <svg className="bi" aria-hidden="true">
                        <use xlinkHref="#chevron-right" />
                        </svg>
                    </Link>
                    </div>
                </div>
                </div>
             </div>
    )
}
import MonkeyZodiacBlock from '../components/MonkeyZodiacBlock' 
import VisionFromWithinBlock from '../components/VisionFromWithinBlock' 

import ArtfolioCollabBlock from '../components/ArtfolioCollabBlock' 
import ApproachBlock from '../components/ApproachBlock' 
import StudioCollabBlock from '../components/StudioCollabBlock' 



const About = () => (
      <main>
        <div className="section_title_wrap">
          <h2 className="p-4 border-bottom">All About Me</h2>
        </div>
            <MonkeyZodiacBlock />
            <VisionFromWithinBlock />
            <ArtfolioCollabBlock />
            <ApproachBlock />
            <StudioCollabBlock />

      </main>

);

export default About;
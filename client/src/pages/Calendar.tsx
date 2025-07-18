
import CalendarComponent from '../components/Calendar' 
import { Helmet } from 'react-helmet-async';


const Calendar = () => (
    <>
        <Helmet>
            <title>Book a Session | Crystal Hansen | Artographic</title>
            <meta name="description" content="Explore your creative side book a studio space with Crystal Hansen." />
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
        <section className="container calendarComponent">
            <h1 className="mb-4">Book a Session</h1>
            <CalendarComponent />
            <div className="clearfix"></div>
        </section>
    </>
     );

export default Calendar;

    

import { useEffect, useState } from 'react';

import StudioCollabBlock from '../components/StudioCollabBlock';

import StudioHeroBlock from "../components/StudioHeroBlock";
//import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export type Studio = {
  id: number;
  name: string;
  description: string;
  body: string;
  price: number;
  images: string[];
};


export default function Studio(){

  const baseUrl = import.meta.env.VITE_API_URL;
  const [studios, setStudios] = useState<Studio[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/index-studios.php/studios/list`)
      .then((res) => res.json())
      .then((data) => setStudios(data))
      .catch((err) => console.error('❌ Failed to fetch studios:', err));
  }, []);

    return (
        <>
        <Helmet>
            <title>Studios and Photography | Crystal Hansen </title>
            <meta name="description" content="Explore photo studios and studio projects by Crystal Hansen." />
            <meta property="og:image" content="https://yourdomain.com/images/cover.jpg" />
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
        <StudioHeroBlock />
         <section className="fluid-container py-5 mb-5">
            <h1 className="my-4 text-center"> Studios and Photography</h1>
            <div className="row border-bottom p-5 mb-5">
                
                <div className="p-5 mb-5 col-12">
                    <h3 className="">We have a few studios to chose from.</h3>
                        <p>If you would like to book a time with any of these studios to shoot or get photos done, <br/> 
                         just follow the links or click on an image to be taken to the studio calendar then give us a `shot`!</p>
                </div>
                
            </div>
            <section className="container py-5">
                <div className="my-5 gy-5 pb-5 border-bottom">
                    <h2 className="mb-4 text-center">Studio Rental Rates:</h2>
                    <p className="text-start">Starting at $120 for 2 consecutive hours (minimum rental), $45 for each additional hour. Discounts for half day, full day, and weekend rentals. Arrive and Leave on time. All set-up and clean-up needs to be done during rented time. Studio must be returned to original condition when you studio session time is up. Eg: moving of various items, garbage removed, various cleanup.</p>
                    <p className="text-start">100% payment is required to book the space and booking is on a first-come first-served basis. Deposit can be paid by e-mail money transfer (preferred), cash, or credit card. You have up to 72 hours before your rental period to cancel or make changes (if possible) to your reservation. There will not be any reimbursement if you cancel or make changes less than 72 hours before the beginning of your rental period.</p>
                </div>
                <div className="my-5 gy-5 pt-4">
                    <h2 className=" my-5 text-center">Our Studio Spaces</h2>

                    {studios.map((studio) => (
                        <div className="row mb-5 pb-5 border-bottom align-items-center gy-5" key={studio.id}>
                        {/* Large image left */}
                        <div className="col-md-6 mb-3 mb-md-0">
                        <img
                                src={`${baseUrl}${studio.images[0]}`}
                                alt={`${studio.name} main`}
                                className="img-fluid rounded shadow"
                                />
                        </div>

                        {/* Text and two smaller images */}
                        <div className="col-md-6 mb-3 mb-md-0">
                            <h3>{studio.name}</h3>
                            <p className="text-muted">{studio.description}</p>
                            <p>{studio.body}</p>
                            <a
                                href={`https://booker.crystalhansenartographic.com/calendar/${studio.id}?price=${studio.price}&name=${studio.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <button
                                    id="calendar"
                                    type="button"
                                    className="btn btn-primary px-4 me-md-2"
                                >
                                    Check Dates
                                </button>
                            </a>
                            <button
                                type="button"
                                className="btn btn-primary btn-center-align"
                                data-bs-toggle="modal"
                                data-bs-target="#contactModal"
                            >
                                Book Custom
                            </button>
                            <div className="mb-5"></div>    
                            <div className="row mt-3">
                            {studio.images.slice(1).map((img, i) => (
                                <div className="col-6" key={i}>
                                <img
                                    src={`${baseUrl}${img}`}
                                    alt={`Studio ${studio.id} - extra ${i + 1}`}
                                    className="img-fluid rounded shadow-sm mb-2"
                                />
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </section>

            <StudioCollabBlock /> 
          </section>
        </>
    );
}





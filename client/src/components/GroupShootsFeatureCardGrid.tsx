// src/components/GroupShootsFeatureCardGrid.tsx
import { useEffect, useState } from 'react';

const groupShootsData =[
  {
    "id": 1,
    "theme": "Lavendar Fields",
    "category": "Photography",
    "title": "Lavendar Fields",
    "subtitle": "Explore native grown Lavendar fields in Quebec Canada ",
    "date": "2025-07-23",
    "description": "Experience the outdoors in native settings of fleural and herbal harvesting",
    "image" : "/images/francois-banvillet-DNTN6EUqo8M-unsplash.jpg",
    "buttonLabel" : "Join Today!",
    "featured":true
  },
  {
    "id": 2,
    "theme": "Tulip Festival",
    "category": "Photography",
    "title": "Tulips of color",
    "subtitle": "Enjoy a day of color and explorations",
    "date": "2025-06-03",
    "description": "Focus on the Flowers as a celebration of spring in Ottawa",
    "image" : "/images/studio1/nadi-spasibenko-VXQvz1t7uHk-unsplash.jpg",
    "buttonLabel" : "Reserve Spot!",
    "featured":false
  },
  {
    "id": 3,
    "theme": "Holi Color Me",
    "category": "Photography",
    "title": "Holi Color Me",
    "subtitle": "Study People and their moments",
    "date": "2025-08-05",
    "description": "Interweave ourselves in the festival of colours and practise people watching",
    "image":"/images/manish-mishra-8nN-pFlLHJg-unsplash.jpg",
    "buttonLabel" : "Book Seat!",
    "featured":true
  },
  {
    "id": 4,
    "theme": "Hot Air Baloons",
    "category": "Photography",
    "title": "International Balloon Festival",
    "subtitle": "Hot Air color the sky",
    "date": "2025-08-08 to 2025-08-17",
    "description": "International Balloon Festival of St-Jean-sur-Richelieu 2025. 5, Chemin de l'Aéroport Saint-Jean-sur-Richelieu",
    "image":"/images/ian-dooley-TevqnfbI0Zc-unsplash.jpg",
        "buttonLabel" : "Learn More!",
    "featured":true
  },
  {
    "id": 5,
    "theme": "Cuban Carnival",
    "category": "Photography",
    "title": "Cuban Carnival",
    "subtitle": "Cuban Carnival",
    "date": "2025-06-09",
    "description": "Cuban Carnival parade features beautiful costumery, dance and joy of the cultural experiences on film.",
    "image":"/images/studio1/karen-bullaro-KU_6agYOPzQ-unsplash.jpg",
    "buttonLabel" : "Register Now!",
    "featured":false
  },
  {
    "id": 6,
    "theme": "Jazz Festiva;",
    "category": "Photography",
    "title": "Jazz Festival",
    "subtitle": "For the love of music",
    "date": "2025-06-09",
    "description": "Explore photography of local musicians in the delight of wavelengths.",
    "image":"/images/studio1/karen-bullaro-KU_6agYOPzQ-unsplash.jpg",
    "buttonLabel" : "Register Now!",
    "featured":false
  }
];



interface Groups {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  image: string;
  theme: string;
  buttonLabel?: string;
  featured?: boolean;
}


export default function  GroupShootsFeatureCardGrid() {

  const [featured, setFeatured] = useState<Groups[]>([]);
  const baseUrl = import.meta.env.VITE_API_URL;

  /**
   * NODE: fetch('/api/workshops') // Adjust if needed
   * See PHP link to github package in readme
   */
  useEffect(() => {

    // For now, just use the local JSON list
    const featuredItems = groupShootsData.filter((item) => item.featured);
    setFeatured(featuredItems);


    {/*fetch(`${baseUrl}/api/index-workshop.php/workshop/list`) // Adjust if needed
    
      .then(res => res.json())
      .then(data => {
        const featuredItems = data.filter((w: Groups) => w.featured);
        setFeatured(featuredItems);
      });*/}


  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">✨ Featured Group Shoots</h2>
      <div className="row g-4" id="groups">
        {featured.map(workshop => (
          <div className="col-md-6 col-lg-4" key={workshop.id}>
            <div className="card h-100 shadow-sm">
              <img src={`${baseUrl}${workshop.image}`} className="card-img-top" alt={workshop.title} />
              <div className="card-body">
                <h5 className="card-title">{workshop.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{workshop.date}</h6>
                <p className="card-text">{workshop.description}</p>
                <button className="btn btn-primary"  
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  type="button">Reserve</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import ApothecaryHeroBlock from "../components/ApothecaryHeroBlock";
import ProductCard from "../components/ProductCard";
import Philosophy from "../components/Philosophy"
import ProductGallery from "../components/ProductGallery";
import NewsletterRemedies from "../components/NewsletterRemediesBlock"
import { Helmet } from 'react-helmet-async';

const products = [
  {
    title: "Lavender + Rose Serum",
    description: "A calming blend for radiant skin.",
    price: "$18.00",
    imgSrc: "/images/apothecary/tetiana-shadrina-SWW6BAASQH4-unsplash.jpg",
    category: "serums",
  },
  {
    title: "Eucalyptus Mint Soap",
    description: "Invigorating, all-natural cold-processed soap.",
    price: "$8.00",
    imgSrc: "/images/apothecary/iain-robertson-G46PxOQSdnA-unsplash.jpg",
    category: "soaps",
  },
  {
    title: "Citrus Grove Oil",
    description: "Bright, uplifting essential oil blend.",
    price: "$14.00",
    imgSrc: "/images/apothecary/jeremy-yap-ZZU9Wqzpj-M-unsplash.jpg",
    category: "oils",
  },
];
      
const Apothecary = () => (
    <>
    <Helmet>
        <title>Apothecary | Crystal Hansen | Artographic</title>
        <meta name="description" content="Explore the creative process of earths finest gifts to renew, nourish and focus applications of fine essential oils and their topical benefits by Crystal Hansen." />
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
    <ApothecaryHeroBlock />

    <h2 className="text-center my-5">Featured Remedies</h2>

    <div className="d-flex flex-wrap justify-content-center gap-4">
        {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
        ))}
    </div>
    <Philosophy />
    <NewsletterRemedies />
    <ProductGallery  products={products}/>
    </>
);
    
export default Apothecary;

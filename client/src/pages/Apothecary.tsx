import ApothecaryHeroBlock from "../components/ApothecaryHeroBlock";
import ProductCard from "../components/ProductCard";
import Philosophy from "../components/Philosophy"
import ProductGallery from "../components/ProductGallery";
import NewsletterRemedies from "../components/NewsletterRemediesBlock"


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
//Photo by <a href="https://unsplash.com/@shadrinaphotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tetiana Shadrina</a> on <a href="https://unsplash.com/photos/assorted-flowers-in-brown-wicker-basket-SWW6BAASQH4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
 //Photo by <a href="https://unsplash.com/@yoiain?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Iain Robertson</a> on <a href="https://unsplash.com/photos/a-bunch-of-green-leaves-on-a-white-surface-G46PxOQSdnA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
           
//Photo by <a href="https://unsplash.com/@diana_pole?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Diana Polekhina</a> on <a href="https://unsplash.com/photos/green-plant-in-close-up-photography-Hzz7AEyLhZk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      
const Apothecary = () => (
    <>
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

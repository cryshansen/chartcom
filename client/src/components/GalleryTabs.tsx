import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImageGrid from './ImageGrid';

const categories = ['500px', 'beauty', 'flora', 'fauna', 'travel'];

export default function GalleryTabs() {
  const [activeTab, setActiveTab] = useState('500px');
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', ''); // get 'artog' from '#artog'
    if (hash && categories.includes(hash)) {
      setActiveTab(hash);
  
      // Wait until after DOM updates (tab becomes visible)
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50); // 50ms delay to wait for tab render
    }
  
  }, [location.hash, categories]);

  return (
    <div className="my-5">
      {/* Category buttons */}
      <div className="text-center mb-4">
        <div className="btn-group">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-outline-primary ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>     
      {/* Tab content */}
      <div className="tab-content py-4">
        {categories.map((cat) => (
          <div
           id={cat}
            key={cat}
            className={`tab-pane fade ${activeTab === cat ? 'show active' : ''}`}
          >
            <h3 className="mt-5 pb-2 text-capitalize text-center">{cat} Images</h3>
            <ImageGrid category={cat} />
          </div>
        ))}
      </div>
    </div>
  );
}

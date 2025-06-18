import { useState } from 'react';
import ImageGrid from './ImageGrid';

const categories = ['500px', 'beauty', 'flora', 'fauna', 'travel', 'settings'];

export default function GalleryTabs() {
  const [activeTab, setActiveTab] = useState('500px');

  return (
    <div className="my-5">
      {/* Nav tabs */}
      <ul className="nav nav-tabs justify-content-center" role="tablist">
        {categories.map((cat) => (
          <li className="nav-item" key={cat} role="presentation">
            <button
              className={`nav-link ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
              type="button"
              role="tab"
              aria-selected={activeTab === cat}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab content */}
      <div className="tab-content py-4">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`tab-pane fade ${activeTab === cat ? 'show active' : ''}`}
          >
            <h2 className="mt-5 pb-2 text-capitalize text-center">{cat} Images</h2>
            <ImageGrid category={cat} />
          </div>
        ))}
      </div>
    </div>
  );
}

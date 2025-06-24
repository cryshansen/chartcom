import { useState } from 'react';
import ImageGrid from './ImageGrid';

const categories = ['emtp', 'zackly-rite', 'artog', 'pinmento', 'openai'];

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState('emtp');

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
            key={cat}
            className={`tab-pane fade ${activeTab === cat ? 'show active' : ''}`}
          >
            <h2 className="mt-5 pb-2 text-capitalize text-center">{cat} Images</h2>
            <ImageGrid category={cat} filterLightOnly={true} />
          </div>
        ))}
      </div>
    </div>
  );
}

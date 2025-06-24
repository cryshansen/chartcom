import React, { useEffect, useRef, useState } from 'react';
import './brick-masonry.css';

interface StudioImage {
  id: number;
  image: string;
  width: number;
  height: number;
}

interface PositionedImage extends StudioImage {
  left: number;
  top: number;
  displayWidth: number;
  displayHeight: number;
}

interface MasonryGalleryProps {
  images: StudioImage[];
}


export default function MasonryBlocks({ images }: MasonryGalleryProps) {
   const totalBricks = 28;

 const baseUrl = import.meta.env.VITE_API_URL; /** underlined but must install  */

  return (
    <div className="wrapper">
      <div className="masonry masonry--h">
         {images.map((img, i) => (
          <div key={img.id} className="masonry-brick masonry-brick--h">
            <img
              src={`${baseUrl}${img.image}`}
              alt={`Studio Image ${img.id}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

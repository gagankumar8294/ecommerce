// components/ImageViewer.js
import { useState } from 'react';
import styles from './ImageViewer.module.css';

export default function ImageViewer({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={styles.viewerContainer}>
      <div className={styles.mainImageContainer}>
        <img
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          className={styles.mainImage}
        />
      </div>
      <div className={styles.thumbnailContainer}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className={`${styles.thumbnail} ${selectedIndex === index ? styles.active : ''}`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

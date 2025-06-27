"use client"; // Only if using app directory in Next.js 13+

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./BannerCarousel.module.css"; // Importing CSS

const bannerImages = [
  "/partydress.png",
  "/partydress.png",
  "/partydress.png",
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === bannerImages.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider_component}>
      <div className={styles.carouselContainer}>
        {bannerImages.map((img, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <Image
              src={img}
              alt={`Banner ${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

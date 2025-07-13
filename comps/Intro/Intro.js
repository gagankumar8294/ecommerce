// comps/Intro/Intro.js
import React from 'react';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <h1 className={styles.title}>Welcome to ElitePurchase</h1>
      <p className={styles.description}>
        Your one-stop shop for the latest and greatest in fashion. We bring you the best deals from Amazon, curated just for you.
      </p>
    </div>
  );
};

export default Intro;

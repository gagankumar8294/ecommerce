import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";

const PrivacyPolicy = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div style={{ paddingTop: "150px" }}>
      <h1 className={styles.main_heading}>Privacy Policy</h1>
      <p className={styles.paragraph}>
        Welcome to ElitePurchase. This Privacy Policy explains how we collect, use, and protect your information when you browse our website, read our blogs, or click on affiliate links.
      </p>

      <h2 className={styles.h2_heading}>Information We Collect</h2>
      <p className={styles.paragraph}>
        We may collect non-personal information such as your IP address, browser type, device information, and usage data using cookies, analytics tools, and other tracking technologies to improve your browsing experience.
      </p>

      <h2 className={styles.h2_heading}>Affiliate Disclosure</h2>
      <p className={styles.paragraph}>
        ElitePurchase participates in the Amazon Associates Program, an affiliate advertising program designed to provide a means for websites to earn advertising fees by advertising and linking to Amazon.in. When you click on affiliate links, we may earn a commission at no additional cost to you.
      </p>

      <h2 className={styles.h2_heading}>How We Use Your Information</h2>
      <p className={styles.paragraph}>
        We use collected data to analyze website traffic, improve content, and personalize your experience. We do not sell, trade, or rent your personal data to others.
      </p>

      <h2 className={styles.h2_heading}>Cookies</h2>
      <p className={styles.paragraph}>
        Our website uses cookies to track user behavior, serve relevant ads, and analyze performance. You can disable cookies in your browser settings at any time.
      </p>

      <h2 className={styles.h2_heading}>Third-Party Services</h2>
      <p className={styles.paragraph}>
        We may use third-party services like Google Analytics or Amazon for tracking and affiliate purposes. These services may collect and store data in accordance with their own privacy policies.
      </p>

      <h2 className={styles.h2_heading}>Your Rights</h2>
      <p className={styles.paragraph}>
        You have the right to request access to or deletion of your personal data where applicable. Please email us if you wish to exercise these rights.
      </p>

      <h2 className={styles.h2_heading}>Changes to This Policy</h2>
      <p className={styles.paragraph}>
        We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.
      </p>

      <h2 className={styles.h2_heading}>Contact Us</h2>
      <p className={styles.paragraph}>
        For any questions or concerns regarding this Privacy Policy, please email us at <a href="mailto:privacy@elitepurchase.in">privacy@elitepurchase.in</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;

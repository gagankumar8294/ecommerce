import styles from "../styles/Blog.module.css";

const Terms = () => {
  return (
    <div className={styles.container} style={{ paddingTop: "150px" }}>
      <h1 className={styles.heading}>Terms and Conditions</h1>

      <p className={styles.paragraph}>
        By using ElitePurchase.in, you agree to be bound by the following terms and conditions. Please read them carefully before using our website.
      </p>

      <h2 className={styles.subheading}>Affiliate Relationship</h2>
      <p className={styles.paragraph}>
        ElitePurchase features affiliate links, primarily from Amazon.in. When you click on these links and make a purchase, we may earn a small commission at no extra cost to you. We do not directly sell or deliver any products.
      </p>

      <h2 className={styles.subheading}>Content Disclaimer</h2>
      <p className={styles.paragraph}>
        We provide product reviews, descriptions, and related blog content for informational purposes only. We do our best to ensure accuracy, but we do not guarantee that all information is complete or up-to-date.
      </p>

      <h2 className={styles.subheading}>Limitation of Liability</h2>
      <p className={styles.paragraph}>
        We are not responsible for any issues arising from third-party websites, including Amazon, linked from our site. Users are responsible for verifying product details, prices, and shipping with the respective seller.
      </p>

      <h2 className={styles.subheading}>User Conduct</h2>
      <p className={styles.paragraph}>
        Users agree to use this website for lawful purposes only. You may not use this website to distribute harmful content, spam, or violate any applicable laws.
      </p>

      <h2 className={styles.subheading}>Intellectual Property</h2>
      <p className={styles.paragraph}>
        All content on ElitePurchase, including text, images, and blog posts, is the intellectual property of ElitePurchase unless otherwise stated. Unauthorized reproduction or use is prohibited.
      </p>

      <h2 className={styles.subheading}>Changes to Terms</h2>
      <p className={styles.paragraph}>
        We may modify these terms at any time. Updated terms will be posted on this page, and continued use of the website indicates your acceptance of any changes.
      </p>

      <h2 className={styles.subheading}>Governing Law</h2>
      <p className={styles.paragraph}>
        These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts located in Bangalore, Karnataka.
      </p>

      <h2 className={styles.subheading}>Contact Us</h2>
      <p className={styles.paragraph}>
        If you have any questions or concerns about these terms, please contact us at <a href="mailto:support@elitepurchase.in">support@elitepurchase.in</a> or call +91 91486 44611.
      </p>
    </div>
  );
};

export default Terms;

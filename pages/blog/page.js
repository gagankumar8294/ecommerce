// src/app/blogs/my-awesome-blog/page.js
import styles from "./Blog.module.css";

export const metadata = {
  title: "My Awesome Blog - CodeAspirant",
  description: "A well-crafted blog post about a trending topic.",
};

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <h1>How to Choose the Perfect Gadget in 2025</h1>

      <img
        src="https://m.media-amazon.com/images/I/61wlEyqfRwL._SY741_.jpg"
        alt="Tech device"
        className={styles.image}
      />

      <h2>Understand Your Needs</h2>
      <p>
        Before you buy any gadget, it’s crucial to assess what you actually need. Are you looking
        for speed, design, battery life, or value for money?
      </p>

      <h2>Compare the Features</h2>
      <p>
        Always compare features across different brands. Look for RAM, storage, camera specs, and
        user reviews to make an informed decision.
      </p>

      <h2>Budget Smartly</h2>
      <p>
        The most expensive option isn’t always the best. Stick to your budget and look out for
        seasonal offers or discounts to get the most value.
      </p>
    </div>
  );
}

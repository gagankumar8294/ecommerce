import React from 'react';
import styles from "../../styles/Blog.module.css";
import FacebookComments from '../../comps/comments/FacebookComments';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ImageViewer from '@/comps/viewer/ImageViewer';

const greenkurthi = [
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/first/kurti-parrot-green-under-500-2025.jpg',
    alt: 'Matching kurti and dupatta set for women – festive daily look',
  },
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/first/kurti-white-color-under-500-2025.jpg',
    alt: 'Stylish grey kurti for working women – daily office outfit idea',
  },
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/first/parrot-green-kurti-under-500-2025.jpg',
    alt: 'Plus size long kurti for women with side slits – breathable design',
  }
];

const designkurthi = [
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/second/long-kurti-plus-size-with-pink-bottom.jpg',
    alt: 'Readymade blue kurti with floral print under ₹500 – 2025 deal',
  },
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/second/long-kurti-plus-slim-look.png',
    alt: 'Simple everyday kurti for college girls – under ₹400 budget buy',
  },
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/second/readymade-kurti-design-good-fabric.jpg',
    alt: 'Soft cotton kurti for summer wear in India – 2025 latest style',
  },
];

const orangekurthi = [
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/third/kurti-side-view.jpg',
    alt: 'Front view of Fenta Chanderi printed kurti for office wear',
  },
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/third/affordable-slim-fit-kurti-fashion-under-500-2025.jpg',
    alt: 'Full-length ethnic kurti for women under ₹500',
  },
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/third/Elegant-styling-orangekurta-office-wear.jpg',
    alt: 'Close-up of soft Chanderi floral fabric in Fenta color',
  },
];


const pinkkurthi = [
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/fourth/office-wear-kurti-under-500.jpg',
    alt: 'Affordable pink kurti under ₹500 ideal for office and daily wear',
  },
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/fourth/pink-chanderi-kurti-front-view.jpg',
    alt: 'Front view of pink floral Chanderi kurti with puff sleeves for women',
  },
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/fourth/soft-chanderi-fabric-closeup.jpg',
    alt: 'Close-up of soft Chanderi blend fabric with floral print designr',
  },
];

const pinkurthi = [
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/sixth/embroidered-pink-kurta-set.png',
    alt: '3-piece pink embroidered kurta set with dupatta for women',
  },
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/sixth/festive-pink-kurta-for-women.jpg',
    alt: 'Festive look in pink embroidered kurti set for small events',
  },
  {
    src: '/blog_images/women/blog1-10/kurthi-blog1-images/sixth/kurta-pant-set-under-700.jpg',
    alt: 'Ethnic kurta with pant and dupatta under ₹700 – full outfit',
  },
];




const MensTshirts = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [currentUrl, setCurrentUrl] = useState('');
  const blogTitle = "Cotton & Viscose Kurta Sets Under ₹1000 – Office & Daily Wear 2025";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);


  if (!isClient) {
    return null; // Render nothing on the server-side
  }
  return (

    <div style={{paddingTop:"150px"}}>

<Head>
  <title>Cotton & Viscose Kurta Sets Under ₹1000 – Office & Daily Wear 2025</title>
<meta name="description" content="Discover comfortable, stylish kurta sets in cotton and viscose under ₹1000—perfect for daily wear and office in India, curated for 2025 fashion trends." />
<meta name="author" content="elitepurchase" />
{/* <link rel="canonical" href="https://elitepurchase.in/blog/cotton-viscose-kurta-sets-under-1000-2025" /> */}


{/* <!-- Open Graph / Facebook --> */}
<meta property="og:title" content="Cotton & Viscose Kurta Sets Under ₹1000 – Office & Daily Wear 2025" />
<meta property="og:description" content="Discover comfortable, stylish kurta sets in cotton and viscose under ₹1000—perfect for daily wear and office in India, curated for 2025 fashion trends." />
<meta property="og:image" content="https://elitepurchase.in/blog_images/women/blog1-10/kurthi-blog1-images/featuredimage/affordable-printed-kurti-sunfashion-under-500-2025.jpg" />
<meta property="og:url" content="https://elitepurchase.in/blog/cotton-viscose-kurta-sets-under-1000-2025" />
<meta property="og:type" content="article" />

{/* <!-- Twitter --> */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Cotton & Viscose Kurta Sets Under ₹1000 – Office & Daily Wear 2025" />
<meta name="twitter:description" content="Discover comfortable, stylish kurta sets in cotton and viscose under ₹1000—perfect for daily wear and office in India, curated for 2025 fashion trends." />
<meta name="twitter:image" content="https://elitepurchase.in/blog_images/women/blog1-10/kurthi-blog1-images/featuredimage/affordable-printed-kurti-sunfashion-under-500-2025.jpg" />
<meta name="twitter:image:alt" content="Affordable cotton and viscose kurta set for women under ₹1000 – 2025 fashion in India" />

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://elitepurchase.in/blog/cotton-viscose-kurta-sets-under-1000-2025"
      },
      "keywords": "cotton kurta sets, viscose kurta 2025, office wear kurtis, daily wear kurta India",
      "headline": "Cotton & Viscose Kurta Sets Under ₹1000 – Office & Daily Wear 2025",
      "description": "best collection of stylish and budget-friendly kurtis for women in 2025. Featuring breathable cotton and rayon fabrics, these elegant kurta designs are perfect for daily wear, office outfits, and casual outings. Pair them effortlessly with leggings, jeans, or palazzos for a comfortable yet fashionable look.",
      "image": "https://elitepurchase.in/blog_images/women/blog1-10/kurthi-blog1-images/featuredimage/affordable-printed-kurti-sunfashion-under-500-2025.jpg",
      "author": {
        "@type": "Person",
        "name": "Elite Purchase",
        "url": "https://elitepurchase.in"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Elite Purchase",
        "url": "https://elitepurchase.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://elitepurchase.in/logo.png"
        }
      },
      "datePublished": "2025-07-02T09:00:00+05:30",
      "dateModified": "2025-07-02T09:00:00+05:30"
    })
  }}
/>


</Head>

      <div>
        <p className={styles.publish}>Published on July 2, 2025 In Endless Origins</p>
        <h1 className={styles.main_heading}>Cotton & Viscose Kurta Sets Under ₹1000 – Office & Daily Wear 2025</h1>
      </div>


    {/* Social Sharing Icons */}
    <section className={styles.so_sec}>
      <div className={styles.social}>
        <ul>
          <li>
          {currentUrl && (
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              title="Share on Facebook"
            >
              <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z" />
              </svg>
            </a>
            )}
          </li>
          <li>
            <a 
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blogTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Twitter"
            >
              <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z" />
              </svg>
            </a>
          </li>
          <li>
            <a 
              href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blogTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Telegram"
            >
              <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path d="M16 0c-8.838 0-16 7.162-16 16s7.162 16 16 16 16-7.163 16-16-7.163-16-16-16zM23.863 10.969l-2.625 12.369c-0.181 0.881-0.712 1.087-1.45 0.681l-4-2.956-1.919 1.869c-0.225 0.219-0.4 0.4-0.8 0.4-0.519 0-0.431-0.194-0.606-0.688l-1.363-4.475-3.956-1.231c-0.856-0.262-0.862-0.85 0.194-1.269l15.412-5.95c0.7-0.319 1.381 0.169 1.113 1.25z" />
              </svg>
            </a>
          </li>
          <li>
            <a 
              href={`https://wa.me/?text=${encodeURIComponent("Check out this blog: " + blogTitle + " " + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on WhatsApp"
            >
              <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"></path>
                </svg>
            </a>
          </li>
          <li>
            <a 
              href={`mailto:?subject=${encodeURIComponent(blogTitle)}&body=${encodeURIComponent("Check this blog post: " + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share via Email"
            >
              <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.865-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z"></path>
                </svg>
            </a>
            
          </li>
        </ul>
      </div>
    </section>


      {/* Feature Image */}
      <div className={styles.image_border}>
        <Image className={styles.image_wh}
          src="/blog_images/women/blog1-10/kurthi-blog1-images/featuredimage/affordable-printed-kurti-sunfashion-under-500-2025.jpg"
          alt="Top 7 stylish cotton and printed kurtis under ₹500 for women – daily wear kurtis 2025"
          width={1200}
          height={630}
          quality={100}
          priority
        />
      </div>

    <p className={styles.paragraph}>best collection of stylish and budget-friendly kurtis for women in 2025. Featuring breathable cotton and rayon fabrics, these elegant kurta designs are perfect for daily wear, office outfits, and casual outings. Pair them effortlessly with leggings, jeans, or palazzos for a comfortable yet fashionable look.</p>

    
      
      {/* Audio */}
      {/* <div>
        <p className={styles.blog_audio_text}>listen to this story</p>
        <audio className={styles.blog_audio} controls>
          <source src="/blog_audio/google/This Feeling.mp3" type="audio/mp3" />
          <source src="/blog_audio/google/This Feeling.ogg" type="audio/ogg" />
        </audio>
      </div> */}

    <h2 className={styles.h2_heading}>
  Sun Fashion & Lifestyle Women's Printed Kurti with Crepe Lining
</h2>

<p className={styles.paragraph}>
  A budget-friendly kurti with printed floral elegance, perfect for both casual outings and daily office wear. Available in multiple vibrant colors, it's a go-to pick under ₹500 in 2025.
</p>

    {/* Product one */}
    <div>
        <h3 className={styles.h2_heading}>
    Straight Green white color Kurti – Organza with Crepe Lining
  </h3>
    <div style={{ paddingTop: '0px' }}>
        <ImageViewer images={greenkurthi} />
    </div>
    {/* Amazon link */}
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    width: "100%",
  }}
>
  <a
    href="https://amzn.to/474HWOs"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      backgroundColor: "#FF9900",
      color: "#111",
      fontWeight: "bold",
      fontSize: "16px",
      padding: "12px 24px",
      textAlign: "center",
      textDecoration: "none",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      maxWidth: "100%",
    }}
  >
    🛒 Buy on Amazon
  </a>
    </div>

<p className={styles.paragraph} style={{ fontWeight: "bold", color: "#333" }}>
    Price: ₹499.00 <span style={{ fontSize: "13px", fontWeight: "normal" }}> (69% Off – M.R.P. ₹1,599)</span>
  </p>

  <p className={styles.paragraph}>
    Size: XS, S, M, L, XL, 2XL
  </p>

  <p className={styles.paragraph}>
    Colors: Parrot, Firozi, Black, Yellow
  </p>

  <p className={styles.paragraph}>
    <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
      Description:
    </span> 
    Crafted with a stylish organza layer and soft crepe lining, this calf-length straight kurti offers a regular fit with elbow-length puff sleeves and a flattering boat neck. Ideal for summer office days, errands, and casual brunches.
  </p>

  <h3 className={styles.h2_heading}>FAQs – Sun Fashion Kurti</h3>

  <p className={styles.paragraph}><strong>Q:</strong> Is the fabric comfortable for daily wear?<br />
  <strong>A:</strong> Yes. The inner crepe lining adds softness and breathability, making it suitable for all-day comfort.</p>

  <p className={styles.paragraph}><strong>Q:</strong> Is it suitable for Bangalore's weather?<br />
  <strong>A:</strong> Absolutely. The lightweight material makes it ideal for hot and humid weather in Bangalore.</p>

  <p className={styles.paragraph}><strong>Q:</strong> Does it shrink or lose color after washing?<br />
  <strong>A:</strong> Most users report it holds color well. Some found fabric quality mixed, so gentle washing is recommended.</p>

  <h3 className={styles.h2_heading}>Customer Feedback Highlights</h3>

  <ul className={styles.paragraph}>
    <li><strong>★★★★★</strong> “Perfect fit and lovely color. Good for daily office wear.” – <em>Priya Manchanda</em></li>
    <li><strong>★★★★☆</strong> “Nice stitching, color matched the photos. Fabric is okay.” – <em>Kindle Customer</em></li>
    <li><strong>★★★☆☆</strong> “Looks stylish but fabric could be better.” – <em>Tejashree M N</em></li>
    <li><strong>★★☆☆☆</strong> “Material felt cheap. Loose sleeves. Not happy.” – <em>Smiley</em></li>
  </ul>
</div>



     {/* Product Five */}
    


   {/* Product two */}
<h2 className={styles.h2_heading}>
  Sun Fashion & Lifestyle Women's Chanderi Printed Kurta
</h2>

<p className={styles.paragraph}>
  A stylish floral printed Chanderi kurta that's budget-friendly and suitable for both small occasions and everyday office wear. Its comfort and traditional touch make it one of the best under ₹500 kurtis in 2025.
</p>

{/* Product Two */}
   <div>
  <h3 className={styles.h2_heading}>
    Floral Chanderi Kurta with Elbow Sleeves – Straight Fit
  </h3>

  <div style={{ paddingTop: '0px' }}>
        <ImageViewer images={designkurthi} />
    </div>
    {/* Amazon link */}
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    width: "100%",
  }}
>
  <a
    href="https://amzn.to/474I0ha"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      backgroundColor: "#FF9900",
      color: "#111",
      fontWeight: "bold",
      fontSize: "16px",
      padding: "12px 24px",
      textAlign: "center",
      textDecoration: "none",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      maxWidth: "100%",
    }}
  >
    🛒 Buy on Amazon
  </a>
    </div>

  <p className={styles.paragraph} style={{ fontWeight: "bold", color: "#333" }}>
    Price: ₹499.00 <span style={{ fontSize: "13px", fontWeight: "normal" }}>(67% Off – M.R.P. ₹1,499)</span>
  </p>

  <p className={styles.paragraph}>
    Size: XS, S, M, L, XL, 2XL, 3XL
  </p>

  <p className={styles.paragraph}>
    Color: Blue
  </p>

  <p className={styles.paragraph}>
    <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
      Description:
    </span> 
    This elegant kurta is made of soft Chanderi fabric with floral print detailing. It features a straight-cut silhouette, round neck, side slits, and elbow-length sleeves. Ideal for small gatherings, office days, and gifting. Offers a comfortable fit across all sizes and good return policy via Amazon.
  </p>

  <h3 className={styles.h2_heading}>FAQs – Chanderi Kurta for Women</h3>

  <p className={styles.paragraph}><strong>Q:</strong> Is this kurta appropriate for formal office wear?<br />
  <strong>A:</strong> Yes. It offers a neat, professional look with elegant floral print and breathable Chanderi fabric—suitable for both daily wear and meetings.</p>

  <p className={styles.paragraph}><strong>Q:</strong> Does the fabric feel soft and comfortable?<br />
  <strong>A:</strong> Many customers found it soft and comfortable, though some mentioned it may feel slightly warm due to the inner lining.</p>

  <p className={styles.paragraph}><strong>Q:</strong> Are sizes true to fit?<br />
  <strong>A:</strong> Mostly yes, but some buyers noted that 2XL felt more like L. Consider checking the size chart and ordering a size up if needed.</p>

  <h3 className={styles.h2_heading}>Customer Feedback Highlights</h3>

  <ul className={styles.paragraph}>
    <li><strong>★★★★★</strong> “Very good fit and material quality. Got compliments.” – <em>Lakshmi Kavya</em></li>
    <li><strong>★★★★★</strong> “Amazing fabric. Comfortable to wear.” – <em>Bhavya Reddy</em></li>
    <li><strong>★★★★☆</strong> “Looks decent. Useful for travel or events.” – <em>Saha</em></li>
    <li><strong>★★★☆☆</strong> “Good look but fabric not summer friendly.” – <em>Vinisha</em></li>
    <li><strong>★★☆☆☆</strong> “Size mismatch. 2XL fits like L.” – <em>Mugundhan</em></li>
  </ul>
</div>
  

    {/* Product Three */}
    <div>
  <h3 className={styles.h2_heading}>
    Affordable Chanderi Kurti for Women – Fenta Color (Sun Fashion)
  </h3>
  
<p className={styles.paragraph}>
  This kurti brings a perfect blend of style and affordability. A great fit for working women looking for ethnic wear under ₹500 that is elegant yet budget-friendly.
</p>

  <div style={{ paddingTop: '0px' }}>
        <ImageViewer images={orangekurthi} />
    </div>
    {/* Amazon link */}
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    width: "100%",
  }}
>
  <a
    href="https://amzn.to/4fORIXn"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      backgroundColor: "#FF9900",
      color: "#111",
      fontWeight: "bold",
      fontSize: "16px",
      padding: "12px 24px",
      textAlign: "center",
      textDecoration: "none",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      maxWidth: "100%",
    }}
  >
    🛒 Buy on Amazon
  </a>
    </div>
    <p className={styles.paragraph} style={{ fontWeight: "bold", color: "#333" }}>
    Price: ₹474.00 <span style={{ fontSize: "13px", fontWeight: "normal" }}>(70% Off – M.R.P. ₹1,599)</span>
  </p>

  <p className={styles.paragraph}>
    Size: 2XS, XS, S, M, L, XL, 2XL
  </p>

  <p className={styles.paragraph}>
    Color: Fenta (pink-purple tone), orange kurthi
  </p>

  <p className={styles.paragraph}>
    <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
      Description:
    </span> 
    This stylish straight-cut kurta is made of soft Chanderi fabric with floral prints. Features include elbow-length sleeves, a calf-length design with a front slit, and a flattering regular fit. Perfect for casual office wear, travel, and festive occasions like Onam or New Year. Machine washable and lightweight.
  </p>
  <h3 className={styles.h2_heading}>FAQs – Fenta Chanderi Kurti</h3>

  <p className={styles.paragraph}><strong>Q:</strong> Is this kurti suitable for special events or festive days?<br />
  <strong>A:</strong> Yes, it’s ideal for New Year, Onam, or office events. The elegant floral print and fit give a graceful ethnic vibe.</p>

  <p className={styles.paragraph}><strong>Q:</strong> How’s the sleeve material?<br />
  <strong>A:</strong> Sleeves are semi-translucent/netted. Some buyers loved the elegant touch while others found them slightly delicate.</p>

  <p className={styles.paragraph}><strong>Q:</strong> How is the fabric quality and stitching?<br />
  <strong>A:</strong> Customers praised the fit and fabric color, but some reported tailoring/stitch issues after one or two washes.</p>

  <h3 className={styles.h2_heading}>Customer Feedback Highlights</h3>

  <ul className={styles.paragraph}>
    <li><strong>★★★★★</strong> “Good quality. Exact color. Got compliments.” – <em>Swetha HS</em></li>
    <li><strong>★★★★☆</strong> “Perfect for office wear. Great fit and fabric.” – <em>Sanghamitra S</em></li>
    <li><strong>★★★☆☆</strong> “Nice look, but stitching could be better.” – <em>Fiona Jayachandra</em></li>
    <li><strong>★★☆☆☆</strong> “Low fabric quality, not worth price.” – <em>8125982407</em></li>
    <li><strong>★★★★★</strong> “Can be trusted. True color as shown.” – <em>Whillet</em></li>
  </ul>




    </div>
    

{/* Product four */}
<div>
   <h3 className={styles.h2_heading}>
    Pink Chanderi Blend Floral Kurti – Calf Length | Puff Sleeves
  </h3>
  <p className={styles.paragraph}>
  If you're searching for an elegant and comfortable pink kurti under ₹500, this floral printed piece is a great pick. Designed with puff sleeves and soft Chanderi blend fabric, it fits perfectly for daily office wear or casual outings.
</p>
<div style={{ paddingTop: '0px' }}>
        <ImageViewer images={pinkkurthi} />
    </div>
 <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    width: "100%",
  }}
>
  <a
    href="https://amzn.to/3V0PElD"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      backgroundColor: "#FF9900",
      color: "#111",
      fontWeight: "bold",
      fontSize: "16px",
      padding: "12px 24px",
      textAlign: "center",
      textDecoration: "none",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      maxWidth: "100%",
    }}
  >
    🛒 Buy on Amazon
  </a>
  </div>

  <div>
  <p className={styles.paragraph} style={{ fontWeight: "bold", color: "#333" }}>
    Price: ₹499.00 <span style={{ fontSize: "13px", fontWeight: "normal" }}>(69% Off – M.R.P. ₹1,599)</span>
  </p>

  <p className={styles.paragraph}>
    Size Options: XS, S, M, L, XL, 2XL, 3XL
  </p>

  <p className={styles.paragraph}>
    Color: Pink
  </p>

  <p className={styles.paragraph}>
    <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
      Description:
    </span> 
    This straight-cut pink floral kurti is stitched from a lightweight Chanderi blend. It features a calf-length cut, puff sleeves, and a round neckline. Ideal for office wear, casual errands, or daily outings. Easy to pair with leggings, palazzos, or even jeans for a modern ethnic look.
  </p>
  <h3 className={styles.h2_heading}>FAQs – Pink Floral Office Kurti</h3>

  <p className={styles.paragraph}><strong>Q:</strong> Is this kurti good for hot weather?<br />
  <strong>A:</strong> Yes. The lightweight fabric and breathable stitching make it comfortable for summer and indoor wear.</p>

  <p className={styles.paragraph}><strong>Q:</strong> Will the puff sleeves be tight on the arm?<br />
  <strong>A:</strong> No. The sleeves are moderately loose and suit all body types. Best worn as-is or under a shrug.</p>

  <p className={styles.paragraph}><strong>Q:</strong> Is the pink color too bright or soft?<br />
  <strong>A:</strong> Most buyers said it's a soft dusty pink—not too loud and works well for office wear or subtle festive looks.</p>

  <h3 className={styles.h2_heading}>Style Tips for This Kurti</h3>
  <ul className={styles.paragraph}>
    <li>Pair with white leggings or beige cigarette pants for a balanced look.</li>
    <li>Accessorize with silver jhumkas or oxidized bangles for a classy ethnic vibe.</li>
    <li>Great to wear with minimal makeup and a soft lip shade for office-ready appearance.</li>
  </ul>
</div>
</div>




 
{/* product five */}
      
<div>
   <h3 className={styles.h2_heading}>
    Pink Rayon Blend Kurta Set with Dupatta – Embroidered | 3-Piece Suit
  </h3>
  
<div style={{ paddingTop: '0px' }}>
        <ImageViewer images={pinkurthi} />
    </div>
 <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    width: "100%",
  }}
>
  <a
    href="https://amzn.to/4756Jlz"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      backgroundColor: "#FF9900",
      color: "#111",
      fontWeight: "bold",
      fontSize: "16px",
      padding: "12px 24px",
      textAlign: "center",
      textDecoration: "none",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      maxWidth: "100%",
    }}
  >
    🛒 Buy on Amazon
  </a>
  </div>

  <p className={styles.paragraph} style={{ fontWeight: "bold", color: "#333" }}>
    Price: ₹652.00 <span style={{ fontSize: "13px", fontWeight: "normal" }}>(75% Off – M.R.P. ₹2,599)</span>
  </p>

  <p className={styles.paragraph}>
    Sizes: S, M, L, XL, 2XL, 3XL, 4XL, 5XL
  </p>

  <p className={styles.paragraph}>
    Color: Pink
  </p>

  <p className={styles.paragraph}>
    <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
      Description:
    </span> 
    This 3-piece ethnic set includes a straight-fit pink kurta with embroidery work, a matching pant, and a dupatta. Made of rayon blend fabric, it features a flattering V-neck and 3/4 sleeves. Suitable for festive occasions, evening outings, or casual wear. Comfortable fit available up to 5XL.
  </p>
  <h3 className={styles.h2_heading}>FAQs – Pink Embroidered Kurta Set</h3>

  <p className={styles.paragraph}><strong>Q:</strong> Does this come as a full set with dupatta?<br />
  <strong>A:</strong> Yes. It includes the kurta, pant, and dupatta—all in coordinated colors and fabric.</p>

  <p className={styles.paragraph}><strong>Q:</strong> Is the embroidery machine stitched or handwork?<br />
  <strong>A:</strong> The kurta has elegant machine embroidery that gives a traditional look while maintaining durability.</p>

  <p className={styles.paragraph}><strong>Q:</strong> Can I wear this for parties or traditional events?<br />
  <strong>A:</strong> Absolutely. The embroidery and rich pink tone make it perfect for small functions, Pooja, or get-togethers.</p>

  <h3 className={styles.h2_heading}>Customer Highlights</h3>
  <ul className={styles.paragraph}>
    <li><strong>★★★★☆</strong> “Good quality set for the price. Color and embroidery are nice.”</li>
    <li><strong>★★★★☆</strong> “Comfortable fabric and fits well. Got it for a casual party.”</li>
    <li><strong>★★★☆☆</strong> “Color is beautiful, but fabric is slightly thin. Still worth it.”</li>
  </ul>
</div>
      
      
      
      {/* Youtube iframe */}
      {/* <div className={styles.yt_vid_border}>
        <iframe  className={styles.yt_vid}
          // width="560" height="315" 
          src="https://www.youtube.com/embed/xA-jy5B9_K0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div> */}




    <p className={styles.paragraph}>
  🔥 Stay ahead in fashion! Follow our Instagram channel <strong>Elite Purchase</strong> for the latest drops in trendy kurtha's, exclusive offers, and style tips. Be the first to spot top-rated steals like these before they're gone!
    </p>



      {/* social sharing icons */}
      <section className={styles.so_sec}>
        <div className={styles.social}>
          <ul>
            <li>
              <a href="https://www.facebook.com/sharer/sharer.php?u=[Blog URL]">
                  <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
                  </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/intent/tweet?url=[Blog URL]&text=[Blog Title]">
                <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://t.me/share/url?url=[Blog URL]&text=[Blog Title]">
                <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M16 0c-8.838 0-16 7.162-16 16s7.162 16 16 16 16-7.163 16-16-7.163-16-16-16zM23.863 10.969l-2.625 12.369c-0.181 0.881-0.712 1.087-1.45 0.681l-4-2.956-1.919 1.869c-0.225 0.219-0.4 0.4-0.8 0.4-0.519 0-0.431-0.194-0.606-0.688l-1.363-4.475-3.956-1.231c-0.856-0.262-0.862-0.85 0.194-1.269l15.412-5.95c0.7-0.319 1.381 0.169 1.113 1.25z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="whatsapp://send?text=Check out this amazing blog post: [Blog Title] [Blog URL]">
                <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:?subject=[Email Subject]&body=Check out this amazing blog post: [Blog Title] [Blog URL]">
                <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.865-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>



 {/* Google ads Section */}
      {/* <section>
        <div className={styles.download_our_app}>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </div>
      </section> */}



    {/* Instagram Telegram */}
<section className={styles.community}>
  <h4>🔥 Be Part of the ElitePurchase – 2 Ways to Stay Ahead!</h4>
  <div className={styles.download_our_app}>
    <h3>🚀 Join Our Telegram Channel</h3>
    <p>Get exclusive first access to trending products, secret deals, upcoming blogs & fashion finds — all in one place!</p>
    <h5>
      <a href="https://t.me/techxpsky" target="_blank" rel="noopener noreferrer">
        👉 Tap to Join Elite Purchase on Telegram
      </a>
    </h5>
  </div>
        {/* DISCORD */}
        {/* <div className={styles.download_our_app}>
          <h3>Discord Server</h3>
          <p>Stay Connected with a larger ecosystem of data science and ML Professionals</p>
        </div> */}

       {/* Instagram */}
<div className={styles.download_our_app}>
  <h3>📸 Follow Us on Instagram</h3>
  <p>Get daily fashion inspiration, exclusive product drops, and limited-time offers straight from our stories. Your next favorite outfit is just one tap away!</p>
  <h5>
    <a href="https://www.instagram.com/elitepurchase.founder?igsh=NGNuMmhzd2xkazBi" target="_blank" rel="noopener noreferrer">
      👉 Follow @elitepurchase on Instagram
    </a>
  </h5>
</div>

      </section>



    {/* Facebook comments */}
      <div className='interact_section'>
        <div className='left_ad_posts'>
            {/* <h4>Left Secion</h4> */}
        </div>
        <div className='just_type_it'>
          <FacebookComments href="https://elitepurchase.in/blog/cotton-viscose-kurta-sets-under-1000-2025" />
        </div>
        <div className='right_ad_posts'>
            {/* <h4>right Secion</h4> */}
        </div>
      </div>
    </div>
  );
};

export default MensTshirts;
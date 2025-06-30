import React from 'react';
import styles from "../../styles/Blog.module.css";
import FacebookComments from '../../comps/comments/FacebookComments';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ImageViewer from '@/comps/viewer/ImageViewer';

const BewakoofProductOne = [
  {
    src: '/blog_images/mens/blog1-10/bog1-images/bewakoof/adventure/bewakoof-red-adevnture-graphic-print-tshirt-men.jpg',
    alt: 'Bewakoof red adventure graphic printed t-shirt for men – front view',
  },
  {
    src: '/blog_images/mens/blog1-10/bog1-images/bewakoof/adventure/bewakoof-regular-fit-round-neck-cotton-tshirt.jpg',
    alt: 'Regular fit cotton t-shirt from Bewakoof with adventure print – side angle',
  },
];

const BewakoofProductTwo = [
  {
    src: '/blog_images/mens/blog1-10/bog1-images/bewakoof/regular/bewakoof-mens-graphic-print-regular-fit-t-shirt-2.jpg',
    alt: 'Side view of Bewakoof regular fit graphic t-shirt for men in black',
  },
  {
    src: '/blog_images/mens/blog1-10/bog1-images/bewakoof/regular/bewakoof-mens-graphic-print-regular-fit-t-shirt.jpg',
    alt: 'Front view of Bewakoof men’s black graphic cotton t-shirt – casual style',
  },
];

const BewakoofProductThree = [
  {
    src: '/blog_images/mens/blog1-10/bog1-images/bewakoof/anime/bewakoof-black-graphic-print-tshirt-men.jpg',
    alt: 'Bewakoof anime-style black cotton graphic t-shirt for men – side view',
  },
];


const BewakoofNASAProduct = [
  {
    src: '/blog_images/mens/blog1-10/bog1-images/bewakoof/nasa/bewakoof-i-needspace-red-graphic-print-tshirt-men.jpg',
    alt: 'Red NASA theme t-shirt for men by Bewakoof with I Need Space print – front view',
  },
  {
    src: '/blog_images/mens/blog1-10/bog1-images/bewakoof/nasa/bewakoof-red-nasa-graphic-print-tshirt-men.jpg',
    alt: 'Side view of Bewakoof NASA official red cotton graphic tee – men’s casual wear',
  },
];


const BewakoofLostMountainImages = [
  {
    src: '/blog_images/mens/blog1-10/bog1-images/bewakoof/travel/-traveler-lover-bewakoof-black-graphic-print-tshirt-men.jpg',
    alt: 'Black Bewakoof t-shirt with Lost in the Mountains graphic print – front view',
  },
  {
    src: '/blog_images/mens/blog1-10/bog1-images/bewakoof/travel/bewakoof-travele-mountain-graphic-print-tshirt.jpg',
    alt: 'Mountain-themed travel graphic printed cotton t-shirt by Bewakoof – for men',
  },
  {
    src: '/blog_images/mens/blog1-10/bog1-images/bewakoof/travel/bewakoof-black-travweling-lost-in-mountain-graphic-print-tshirt-men.jpg',
    alt: 'Side view of Lost in the Mountains travel print t-shirt by Bewakoof in black',
  },
];



const MensTshirts = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [currentUrl, setCurrentUrl] = useState('');
  const blogTitle = "Top 5 Bewakoof Graphic Printed T-Shirts for Men Under ₹599 in 2025";

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
  <title>Top 5 Trending Bewakoof T-Shirts Under ₹599 in India – 2025 Edition | Elite Purchase</title>
<meta name="description" content="Discover the top 5 trending Bewakoof t-shirts under ₹599 in India. Oversized, graphic, NASA-themed, and streetwear picks rated highly for comfort and style in 2025." />
<meta name="keywords" content="Bewakoof t-shirts, oversized t-shirts under 599, trending graphic tees India 2025, NASA print t-shirts, fashion under budget, best cotton t-shirts 2025" />
<meta name="author" content="elitepurchase" />

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:title" content="Top 5 Trending Bewakoof T-Shirts Under ₹599 in India – 2025 Edition" />
<meta property="og:description" content="Explore the most stylish and affordable Bewakoof t-shirts under ₹599. Perfect for casual wear, these tees feature bold graphics and comfy cotton." />
<meta property="og:image" content="https://yourdomain.com/blog_images/mens/blog1-10/bog1-images/featuredimage/graphic-tshirts-under-599-2025.jpg" />
<meta property="og:url" content="https://yourdomain.com/blog/bewakoof-tshirts-under-599" />
<meta property="og:type" content="article" />

{/* <!-- Twitter --> */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Top 5 Trending Bewakoof T-Shirts Under ₹599 in India – 2025 Edition" />
<meta name="twitter:description" content="Check out our curated list of top-rated Bewakoof cotton t-shirts under ₹599 – stylish, affordable, and perfect for streetwear lovers in 2025." />
<meta name="twitter:image" content="https://yourdomain.com/blog_images/mens/blog1-10/bog1-images/featuredimage/bewakoof-graphic-tshirts-under-599-2025.jpg" />

</Head>

      <div>
        <p className={styles.publish}>Published on June 29, 2025 In Endless Origins</p>
        <h1 className={styles.main_heading}>Top 5 Trending Bewakoof T-Shirts Under ₹599 in 2025</h1>
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
              href={`mailto:?subject=${encodeURIComponent(blogTitle)}&body=${encodeURIComponent("Check out this blog post: " + currentUrl)}`}
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
          src="/blog_images/mens/blog1-10/bog1-images/featuredimage/bewakoof-graphic-tshirts-under-599-2025.jpg"
          alt="Example Image"
          width={1200}
          height={630}
          quality={100}
          priority
        />
      </div>

    <p className={styles.paragraph}>Looking for trendy yet affordable oversized graphic tees? Bewakoof brings you stylish graphic tees that go well with jeans, shorts, and casual wear. Made from comfortable cotton fabric, these tees are perfect for a relaxed day out or a casual meet-up.</p>

    
      
      {/* Audio */}
      {/* <div>
        <p className={styles.blog_audio_text}>listen to this story</p>
        <audio className={styles.blog_audio} controls>
          <source src="/blog_audio/google/This Feeling.mp3" type="audio/mp3" />
          <source src="/blog_audio/google/This Feeling.ogg" type="audio/ogg" />
        </audio>
      </div> */}

    <h2 className={styles.h2_heading}>
        1. Bewakoof Graphic Tees
    </h2>
    <p className={styles.paragraph}>
        Bewakoof is one of the most loved brands when it comes to affordable, bold, and comfortable graphic tees. Here's one of their top-selling picks for 2025:
    </p>

    {/* Product one */}
    <div>
        <h3 className={styles.h2_heading}>
        Bewakoof "Adventure" Graphic Tee
    </h3>
    <div style={{ paddingTop: '0px' }}>
        <ImageViewer images={BewakoofProductOne} />
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
    href="https://amzn.to/3G4fK3f"
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
  Price: ₹539.10 <span style={{ fontSize: "13px", fontWeight: "normal" }}> (Limited Deal – 53% Off)</span>
</p>

<p className={styles.paragraph}>
  Size: S, M, L, XL, 2XL, 3XL
</p>

<p className={styles.paragraph}>
  Colors: Red, Black
</p>

<p className={styles.paragraph}>
  <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
    Description:
  </span> 
  This red oversized t-shirt features a bold graphic print and super loose fit — ideal for streetwear lovers. Crafted from single jersey 100% cotton, it offers breathability and comfort all day. Pair it with jeans or layer under a denim jacket.
</p>

<h3 className={styles.h2_heading}>FAQs – Bewakoof Oversized Fit Tee</h3>

<p className={styles.paragraph}><strong>Q:</strong> Will the color fade or shrink after wash?<br />
<strong>A:</strong> Most users said the color stays bright and fabric holds shape even after multiple washes.</p>

<p className={styles.paragraph}><strong>Q:</strong> Is this really oversized?<br />
<strong>A:</strong> Yes, it’s a loose “plus-two-size” design — meant to look baggy and relaxed. Size down if you want a snugger fit.</p>

<p className={styles.paragraph}><strong>Q:</strong> Does it come in different colors?<br />
<strong>A:</strong> Yes, both Red and Black variants are available with the same fit and material.</p>

<h3 className={styles.h2_heading}>Customer Feedback Highlights</h3>

<ul className={styles.paragraph}>
  <li><strong>★★★★★</strong> “Good quality, washed multiple times – no color fade or shrinkage.” – <em>Verified Buyer (Red)</em></li>
  <li><strong>★★★★☆</strong> “Nice material and graphic. Haven’t washed it yet.” – <em>C. Shah (Black)</em></li>
  <li><strong>★★★★☆</strong> “Shoulder cracked slightly on first wash, otherwise fine.” – <em>Placeholder</em></li>
  <li><strong>★★★☆☆</strong> “Fitting issue — too baggy if you're not into oversized style.” – <em>Souvik Ghosh</em></li>
</ul>
    </div>    
     {/* Product Five */}
    <div>
    <h3 className={styles.h2_heading}>
        Bewakoof "Lost in the Mountains" Graphic Tee
    </h3>

    <div style={{ paddingTop: '0px' }}>
        <ImageViewer images={BewakoofLostMountainImages} /> {/* Replace with your image array */}
    </div>

    {/* Amazon Link */}
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
        href="https://amzn.to/447KFVp" // Replace with your Amazon affiliate link
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
        Price: ₹398 <span style={{ fontSize: "13px", fontWeight: "normal" }}> (Limited Time Deal -64%)</span>
    </p>

    <p className={styles.paragraph}>
        Size: S, M, L, XL, 2XL, 3XL
    </p>

    <p className={styles.paragraph}>
        Colors: Black
    </p>

    <p className={styles.paragraph}>
        <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
        Description:
        </span> 
        Featuring a “Lost in the Mountains” travel-themed graphic, this tee is crafted from lightweight single jersey 100% cotton. Designed with a regular fit, it’s ideal for travel enthusiasts and mountain lovers who want to wear their passion.
    </p>

    <h3 className={styles.h2_heading}>FAQs – Bewakoof Travel Graphic Tee</h3>

    <p className={styles.paragraph}><strong>Q:</strong> Is it good for summer and travel use?<br />
        <strong>A:</strong> Yes, it’s breathable and soft, perfect for outdoor activities and road trips.</p>

    <p className={styles.paragraph}><strong>Q:</strong> Does the print fade quickly?<br />
        <strong>A:</strong> No, reviews show that the print stays clear even after multiple washes when cared for properly.</p>

    <p className={styles.paragraph}><strong>Q:</strong> Is the fit perfect?<br />
        <strong>A:</strong> Most customers found the fit good, but a few noted slightly loose or tight sizing depending on body type.</p>

    <h3 className={styles.h2_heading}>Customer Feedback Highlights</h3>

    <ul className={styles.paragraph}>
        <li><strong>★★★★★</strong> “Product quality is good & print is superb.” – <em>Verified Purchase</em></li>
        <li><strong>★★★★☆</strong> “Good fabric quality at this price. Fits well.” – <em>Vishal</em></li>
        <li><strong>★★★★★</strong> “Perfect for travel lovers like me!” – <em>Sachin Rawat</em></li>
        <li><strong>★★★☆☆</strong> “Decent quality but poor fit.” – <em>Nav Gill</em></li>
        <li><strong>★☆☆☆☆</strong> “Cotton fibers come out during wash. Needs separate washing.” – <em>Sabari Giri</em></li>
    </ul>
    </div>
   {/* Product two */}
   <div>
    <h3 className={styles.h2_heading}>
    Bewakoof "Regular Fit BlacK And Red Combination" Graphic Tee
</h3>
<div style={{ paddingTop: '0px' }}>
    <ImageViewer images={BewakoofProductTwo} />
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
    href="https://amzn.to/4l3XO7Q"
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
  Price: ₹404.10 <span style={{ fontSize: "13px", fontWeight: "normal" }}> (Limited Time Deal -63%)</span>
</p>

<p className={styles.paragraph}>
  Size: M, L
</p>

<p className={styles.paragraph}>
  Colors: Black
</p>

<p className={styles.paragraph}>
  <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
    Description:
  </span> 
  This black round neck t-shirt is made from 100% single jersey cotton, offering a soft, breathable experience with a regular fit. The bold graphic print and classic short sleeve style make it ideal for casual wear with jeans or joggers.
</p>

<h3 className={styles.h2_heading}>FAQs – Bewakoof Regular Fit Tee</h3>

<p className={styles.paragraph}><strong>Q:</strong> Is the fabric comfortable for daily wear?<br />
<strong>A:</strong> Yes, customers love the soft cotton feel and breathable design, especially for warm climates.</p>

<p className={styles.paragraph}><strong>Q:</strong> Is the fit tight or loose?<br />
<strong>A:</strong> This product is a regular fit – slightly snug on the chest and straight on the waist down.</p>

<p className={styles.paragraph}><strong>Q:</strong> Will the color fade after washing?<br />
<strong>A:</strong> Based on reviews, the black color and print remain intact even after multiple washes if washed in cold water.</p>

<h3 className={styles.h2_heading}>Customer Feedback Highlights</h3>

<ul className={styles.paragraph}>
  <li><strong>★★★★☆</strong> “Color stayed the same after wash. Size is accurate and quality is very good.” – <em>Verified Purchase</em></li>
  <li><strong>★★★★★</strong> “The fabric is comfy and the print looks nice. Value for money.” – <em>Buddh Verma</em></li>
  <li><strong>★★★☆☆</strong> “Print placement was slightly off, falling below chest area.” – <em>Amazon Customer</em></li>
</ul>
   </div>

    {/* Product Three */}
    <div>
    <h3 className={styles.h2_heading}>
        Bewakoof "Black Cotton Regular Fit" Graphic Tee
    </h3>

    <div style={{ paddingTop: '0px' }}>
        <ImageViewer images={BewakoofProductThree} />
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
        href="https://amzn.to/44F9RCQ" // Replace with your actual affiliate link
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
        Price: ₹399 <span style={{ fontSize: "13px", fontWeight: "normal" }}> (60% Off – Limited Deal)</span>
    </p>

    <p className={styles.paragraph}>
        Size: S, XL (Others Currently Unavailable)
    </p>

    <p className={styles.paragraph}>
        Colors: Black
    </p>

    <p className={styles.paragraph}>
        <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
        Description:
        </span>
        This regular fit black graphic tee from Bewakoof is made with 100% single jersey cotton. It’s soft, breathable, and features a bold front graphic print. With half sleeves and a classic round neck, it’s ideal for casual everyday wear.
    </p>

    <h3 className={styles.h2_heading}>FAQs – Bewakoof Black Cotton Tee</h3>

    <p className={styles.paragraph}><strong>Q:</strong> Is the graphic print durable?<br />
    <strong>A:</strong> Most users found the print long-lasting, but avoid harsh detergents and high-heat ironing.</p>

    <p className={styles.paragraph}><strong>Q:</strong> How is the fabric quality?<br />
    <strong>A:</strong> The single jersey 100% cotton is soft, breathable, and well-suited for Indian weather.</p>

    <p className={styles.paragraph}><strong>Q:</strong> Does it shrink after washing?<br />
    <strong>A:</strong> No major shrinkage reported, though users suggest washing in cold water for best results.</p>

    <h3 className={styles.h2_heading}>Customer Feedback Highlights</h3>

    <ul className={styles.paragraph}>
        <li><strong>★★★★☆</strong> “Very good quality product. The print was amazing and fit was perfect.” – <em>Rishi Borse</em></li>
        <li><strong>★★★☆☆</strong> “Nice t-shirt but the print color felt too light.” – <em>Shubham Basantani</em></li>
    </ul>
    </div>

{/* Product four */}

    <div>
    <h3 className={styles.h2_heading}>
        Bewakoof NASA Printed Red Graphic Tee
    </h3>

    <div style={{ paddingTop: '0px' }}>
        <ImageViewer images={BewakoofNASAProduct} /> {/* Replace with your image array */}
    </div>

    {/* Amazon Link */}
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
        href="https://amzn.to/3ZWMphQ" // Replace with your actual affiliate link
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
        Price: ₹449 <span style={{ fontSize: "13px", fontWeight: "normal" }}> (44% Off – Limited Time Deal)</span>
    </p>

    <p className={styles.paragraph}>
        Size: S, M, L, XL, 2XL, 3XL
    </p>

    <p className={styles.paragraph}>
        Colors: Red, Black (Some variants currently unavailable)
    </p>

    <p className={styles.paragraph}>
        <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
        Description:
        </span>
        This official NASA-printed t-shirt from Bewakoof offers a stylish regular fit and a high-quality graphic. Made with 100% single jersey cotton, it’s breathable and soft – perfect for casual days. Available in vibrant red and classic black.
    </p>

    <h3 className={styles.h2_heading}>FAQs – Bewakoof NASA Graphic Tee</h3>

    <p className={styles.paragraph}><strong>Q:</strong> Is the print high quality?<br />
        <strong>A:</strong> Yes, customers praise the print quality and vibrant design – especially on the red color variant.</p>

    <p className={styles.paragraph}><strong>Q:</strong> Does the t-shirt feel soft and breathable?<br />
        <strong>A:</strong> Made from single jersey 100% cotton, it’s great for all-day wear and doesn't feel heavy.</p>

    <p className={styles.paragraph}><strong>Q:</strong> Is the fit true to size?<br />
        <strong>A:</strong> Yes, buyers have confirmed that the sizing is accurate and fits well for most body types.</p>

    <h3 className={styles.h2_heading}>Customer Feedback Highlights</h3>

    <ul className={styles.paragraph}>
        <li><strong>★★★★★</strong> “Value for money and print quality both are best.” – <em>Nikunj Ninama</em></li>
        <li><strong>★★★★☆</strong> “Comfy material and great print.” – <em>Sadaf</em></li>
        <li><strong>★★★★★</strong> “Excellent t-shirt. Loved it.” – <em>Abhishek Deshmukh</em></li>
        <li><strong>★★★☆☆</strong> “Cloth feels slightly cheap.” – <em>Nishant Keshav Tiwari</em></li>
        <li><strong>★★★★★</strong> “Nice fabric at this price point.” – <em>Jay Vora</em></li>
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
  🔥 Stay ahead in fashion! Follow our Instagram channel <strong>Elite Purchase</strong> for the latest drops in trendy t-shirts, exclusive offers, and style tips. Be the first to spot top-rated steals like these before they're gone!
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
          <FacebookComments href="https://elitepurchase.vercel.app/blog/top-7-oversized-printed-t-shirts-Under-599-in-2025" />
        </div>
        <div className='right_ad_posts'>
            {/* <h4>right Secion</h4> */}
        </div>
      </div>
    </div>
  );
};

export default MensTshirts;
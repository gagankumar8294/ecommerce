import React from 'react';
import styles from "../../styles/Blog.module.css";
import FacebookComments from '../../comps/comments/FacebookComments';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ImageViewer from '@/comps/viewer/ImageViewer';



const navybluekurti = [
  {
    src: '/blog_images/women/blog1-10/anarkali/product1/womens-rayon-navy-blue-kurti-front.jpg',
    alt: 'womens navy blue rayon A-line long kurti with shirt collar',
  },
  {
    src: '/blog_images/women/blog1-10/anarkali/product1/rayon-ankle-length-kurti-side-profile.png',
    alt: 'ankle-length rayon kurti for women showcasing elegant gown-style design',
  },
];

const blackanarkali = [
     {
    src: '/blog_images/women/blog1-10/anarkali/product2/black-anarkali-kurta-front.png',
    alt: 'Close-up of embroidery and rayon fabric texture on black Anarkali kurta',
  },
  {
    src: '/blog_images/women/blog1-10/anarkali/product2/black-anarkali-kurta-closeup.png',
    alt: 'Front view of black Anarkali shrug-style kurta with embroidery for women',
  },
 
];

const lookmarkKurti = [
  {
    src: '/blog_images/women/blog1-10/anarkali/product3/lookmark-anarkali-kurti-closeup.png',
    alt: 'Front view of LookMark Womens Chikankari Anarkali Kurti Gown in White with V-neck',
  },
  {
    src: '/blog_images/women/blog1-10/anarkali/product3/lookmark-anarkali-kurti-front.png',
    alt: 'Close-up showing detailed Chikankari embroidery on cotton Anarkali gown',
  },
];

const pinkAnarkaliKurta = [
  {
    src: '/blog_images/women/blog1-10/anarkali/product4/anarkali-kurta-back-side.png',
    alt: 'Front view of pink embroidered rayon Anarkali kurta with mandarin collar and flared hem',
  },
  {
    src: '/blog_images/women/blog1-10/anarkali/product4/pink-rayon-anarkali-kurta-front.png',
    alt: 'Back and side view of pink rayon flared gown kurta with 3/4 sleeves',
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
  <title>Top Anarkali & Kurti Styles Under ₹900 – Amazon Limited Time Deals 2025</title>
  <meta name="description" content="Discover trending Anarkali gowns and rayon kurtis for women under ₹900 from Amazon – featuring elegant Chikankari, A-line, and shrug styles. Limited-time deals up to 80% off!" />
  <meta name="author" content="Elite Purchase" />

  {/* <!-- Open Graph / Facebook --> */}
  <meta property="og:title" content="Top Anarkali & Kurti Styles Under ₹900 – Amazon Limited Time Deals 2025" />
  <meta property="og:description" content="Discover trending Anarkali gowns and rayon kurtis for women under ₹900 from Amazon – featuring elegant Chikankari, A-line, and shrug styles. Limited-time deals up to 80% off!" />
  <meta property="og:image" content="https://elitepurchase.in/blog_images/women/blog1-10/kurthi-blog2-images/featuredimage/best-anarkali-kurti-deals-under-900-2025.jpg" />
  <meta property="og:url" content="https://elitepurchase.in/blog/best-anarkali-kurti-under-900-amazon-deals" />
  <meta property="og:type" content="article" />

  {/* <!-- Twitter --> */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Top Anarkali & Kurti Styles Under ₹900 – Amazon Limited Time Deals 2025" />
  <meta name="twitter:description" content="Get the best deals on trending ethnic wear for women – Anarkali, A-line, and shrug-style kurtis under ₹900. Shop now from Amazon before the sale ends!" />
  <meta name="twitter:image" content="https://elitepurchase.in/blog_images/women/blog1-10/kurthi-blog2-images/featuredimage/best-anarkali-kurti-deals-under-900-2025.jpg" />
  <meta name="twitter:image:alt" content="Anarkali and kurti fashion for women under ₹900 – Amazon deals 2025" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://elitepurchase.in/blog/best-anarkali-kurti-under-900-amazon-deals"
        },
        "keywords": "anarkali gown under 900, chikankari kurti amazon deal, rayon a-line kurti, shrug style kurta 2025, amazon ethnic wear discount",
        "headline": "Top Anarkali & Kurti Styles Under ₹900 – Amazon Limited Time Deals 2025",
        "description": "Shop the most trending Anarkali and kurti styles under ₹900 for women – featuring Chikankari embroidery, rayon A-line cuts, and shrug-style elegance. Ideal for festive, office, or casual wear. Discounts up to 80% on Amazon now!",
        "image": "https://elitepurchase.in/blog_images/women/blog1-10/kurthi-blog2-images/featuredimage/best-anarkali-kurti-deals-under-900-2025.jpg",
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
        "datePublished": "2025-07-10T09:00:00+05:30",
        "dateModified": "2025-07-10T09:00:00+05:30"
      })
    }}
  />
</Head>


      <div>
        <p className={styles.publish}>Published on July 11, 2025 In Endless Origins</p>
        <h1 className={styles.main_heading}>Top 3 Best-Selling Anarkali & Kurti Styles Under ₹900 – Limited Time Amazon Deals (Up to 80% OFF!)</h1>
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
          src="/blog_images/women/blog1-10/anarkali/featuredimage/top-trending-rayon-kurtis-under-1000-amazon-deal-prime-day.jpg"
          alt="Top trending women’s rayon kurtis under ₹1000 from Amazon – includes pink Anarkali kurta, navy blue A-line kurti, embroidered mandarin collar kurti, and festive gown-style kurti in multi-colors – suitable for office wear, festive functions, and summer outings in India"
          width={1200}
          height={630}
          quality={100}
          priority
        />
      </div>

    <p className={styles.paragraph}>perfect blend of style, comfort, and savings? Discover the top-rated Anarkali gowns and designer kurtis under ₹900 for women, now trending on Amazon with up to 80% off. From elegant Chikankari embroidered Anarkalis to soft rayon A-line kurtis and fashionable shrug-style printed designs, these budget-friendly ethnic wear options are ideal for daily wear, office looks, festive occasions, and casual outings. Handpicked from bestselling Amazon deals of 2025, this curated list helps you stay fashionable without breaking the bank. Hurry, these limited-time offers won't last long!</p>


    {/* Product one */}
 <div>
  <h1 className={styles.h2_heading}>
    Elegant Rayon A-Line Long Kurti for Women – Stylish Ankle-Length Gown with Shirt Collar
  </h1>

  <div style={{ paddingTop: '0px' }}>
    <ImageViewer images={navybluekurti} />
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
      href="https://amzn.to/44H6biT"
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
      🛒 Buy Now on Amazon
    </a>
  </div>

  <p className={styles.paragraph} style={{ fontWeight: "bold", color: "#333" }}>
    Price: ₹895.00 <span style={{ fontSize: "13px", fontWeight: "normal" }}> (74% Off – M.R.P. ₹3,499.00)</span>
  </p>

  <p className={styles.paragraph}>Available Sizes: S, M, L, XL, 2XL, 3XL, 4XL</p>

  <p className={styles.paragraph}>
    Colors Available: Navy Blue, Maroon, Green, Grey, Mustard Yellow, Wine, Olive, Pink
  </p>

  <p className={styles.paragraph}>
    <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
      Product Description:
    </span>
    This women’s long rayon kurti is designed in a trendy A-line gown silhouette with a flattering ankle-length cut. Featuring a classic shirt collar, geometric solid pattern, and 3/4th sleeves, it blends traditional and modern styles perfectly. Ideal for festive wear, office outfits, and casual ceremonies, this kurti offers comfort and elegance in every detail. Its lightweight rayon fabric is soft and breathable, making it perfect for all-day wear across seasons.
  </p>

  <h2 className={styles.h2_heading}>Frequently Asked Questions</h2>

  <p className={styles.paragraph}><strong>Q:</strong> Is the fabric breathable for summer use?<br />
    <strong>A:</strong> Yes, rayon is a soft, breathable material ideal for warm Indian climates.</p>

  <p className={styles.paragraph}><strong>Q:</strong> What kind of occasions is this kurti suitable for?<br />
    <strong>A:</strong> This kurti is suitable for daily office wear, traditional functions, parties, and evening events.</p>

  <p className={styles.paragraph}><strong>Q:</strong> Is this kurti stretchable or fitted?<br />
    <strong>A:</strong> The kurti is not stretchable but has a standard A-line fit. Consider sizing up for a relaxed waist fit.</p>

  <h2 className={styles.h2_heading}>Customer Reviews</h2>

  <ul className={styles.paragraph}>
    <li><strong>★★★★★</strong> “Very nice dress with the best design, colour and fitting.” – <em>Preethi Ramesh</em></li>
    <li><strong>★★★★☆</strong> “Fashion is beautiful. Material not bad. A little tight at the waist.” – <em>Nirmaladevi</em></li>
    <li><strong>★★★★★</strong> “Extremely satisfied with the product. Lightweight and beautiful.” – <em>Veena A.</em></li>
    <li><strong>★★★☆☆</strong> “Good product and fits well. Just a little long for my height.” – <em>Lokesh Verma</em></li>
    <li><strong>★☆☆☆☆</strong> “Fabric is okay. Not very impressive for the price.” – <em>Georgy Sony</em></li>
  </ul>
</div>

   {/* Product two */}
<div>
  {/* SEO Title */}
  <h1 className={styles.h2_heading}>
    Black Anarkali Shrug Style Embroidered Kurta for Women – Rayon Relaxed Fit with 3/4 Sleeves
  </h1>

  {/* Image Viewer */}
  <div style={{ paddingTop: '0px' }}>
    <ImageViewer images={blackanarkali} />
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
      href="https://amzn.to/4nZ6zlR"
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
      🛒 Buy Now on Amazon
    </a>
  </div>

  {/* Price */}
  <p className={styles.paragraph} style={{ fontWeight: "bold", color: "#333" }}>
    Price: ₹859.00 <span style={{ fontSize: "13px", fontWeight: "normal" }}> (80% Off – M.R.P. ₹4,199.00)</span>
  </p>

  {/* Sizes & Colors */}
  <p className={styles.paragraph}>Available Sizes: S, M, L, XL, 2XL, 3XL</p>
  <p className={styles.paragraph}>Colors: Black, Multicolored1, Multicolor, Green</p>

  {/* Product Description */}
  <p className={styles.paragraph}>
    <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
      Product Description:
    </span>
    This stylish Anarkali shrug-style kurta is crafted from soft rayon fabric and features elegant embroidery, a round neck, and 3/4 sleeves. The calf-length design offers a relaxed yet graceful fit, perfect for both festive occasions and daily wear. With geometric embroidery patterns and a solid viscose feel, it's a wardrobe essential for fashion-forward women. Available in a variety of colors including classic black and trendy multicolors.
  </p>

  {/* FAQ Section */}
  <h2 className={styles.h2_heading}>FAQs – Women’s Embroidered Anarkali Kurta</h2>

  <p className={styles.paragraph}><strong>Q:</strong> Is this kurta comfortable for daily wear?<br />
    <strong>A:</strong> Yes, the rayon fabric is soft and breathable, making it ideal for long wear.</p>

  <p className={styles.paragraph}><strong>Q:</strong> Does the embroidery fade after washing?<br />
    <strong>A:</strong> We recommend gentle hand-washing to maintain embroidery longevity. Most users did not report color fading.</p>

  <p className={styles.paragraph}><strong>Q:</strong> What occasions is this suitable for?<br />
    <strong>A:</strong> It’s perfect for parties, family functions, festive celebrations, or even stylish office days.</p>

  {/* Customer Reviews */}
  <h2 className={styles.h2_heading}>Customer Feedback Highlights</h2>
  <ul className={styles.paragraph}>
    <li><strong>★★★★★</strong> “Good quality. My favorite dress to wear!” – <em>Krishnapriya M Nair</em></li>
    <li><strong>★★★★☆</strong> “Very pretty and comfortable. Got lots of compliments.” – <em>Kirty Sharma</em></li>
    <li><strong>★★★★★</strong> “Decent color and awesome fabric. Great for office.” – <em>Kiran Kumar Nerella</em></li>
    <li><strong>★★★★★</strong> “Excellent fitting and comfortable fabric.” – <em>Ram Iyer</em></li>
    <li><strong>★☆☆☆☆</strong> “Color messed after wash. Not happy.” – <em>Mamta Singh</em></li>
    <li><strong>★★★★★</strong> “Stitching is great and size is perfect.” – <em>Ranjit</em></li>
  </ul>
</div>

   {/* Product three */}
<div>
  {/* SEO-Optimized Product Title */}
  <h1 className={styles.h2_heading}>
    LookMark Chikankari Anarkali Kurti Gown – Cotton Blend, Calf Length, Regular Fit
  </h1>

  {/* Product Images */}
  <div style={{ paddingTop: '0px' }}>
    <ImageViewer images={lookmarkKurti} />
  </div>

  {/* Amazon CTA */}
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
      href="https://amzn.to/40KDkc8"
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
      🛒 Buy Now on Amazon
    </a>
  </div>

  {/* Pricing Info */}
  <p className={styles.paragraph} style={{ fontWeight: "bold", color: "#333" }}>
    Price: ₹549.00 – ₹795.00 <span style={{ fontSize: "13px", fontWeight: "normal" }}>(Up to 63% Off – M.R.P. ₹1,899)</span>
  </p>

  {/* Available Colors */}
  <p className={styles.paragraph}>
    Available Colors: White, Brown, Bottle Green, Wine, Black, Pink, D Red, Grey, L Green
  </p>

  {/* Available Sizes */}
  <p className={styles.paragraph}>Sizes: S, M, L, XL, 2XL</p>

  {/* Description Section */}
  <p className={styles.paragraph}>
    <strong>Description:</strong> This LookMark cotton-blend Anarkali kurti gown features intricate Chikankari embroidery in a flattering regular fit silhouette. Crafted with high-quality Chiken Kari fabric, it offers a calf-length design, short sleeves, and elegant V-neck styling. Perfect for festive occasions, casual outings, or wedding functions. Comfortable for daily wear yet elegant enough for traditional events.
  </p>

  {/* SEO-Enhanced Section Heading */}
  <h2 className={styles.h2_heading}>Why Buy This Chikankari Cotton Kurti Gown?</h2>

  <ul className={styles.paragraph}>
    <li>✔️ Soft & breathable cotton-blend fabric with traditional embroidery</li>
    <li>✔️ Lightweight and elegant – ideal for Indian summer and weddings</li>
    <li>✔️ Flattering Anarkali fit – suits all body types from S to 2XL</li>
    <li>✔️ Suitable for casual, festive, and office wear</li>
  </ul>

  {/* FAQs Section */}
  <h2 className={styles.h2_heading}>FAQs – LookMark Women's Chikankari Gown</h2>

  <p className={styles.paragraph}><strong>Q:</strong> Is this kurti suitable for party wear?<br />
    <strong>A:</strong> Absolutely. Its Anarkali silhouette and detailed embroidery make it perfect for festive events, parties, and receptions.
  </p>

  <p className={styles.paragraph}><strong>Q:</strong> What’s the sleeve length?<br />
    <strong>A:</strong> Most variants come with short sleeves, though some users report variations. Always check the product images carefully.
  </p>

  <p className={styles.paragraph}><strong>Q:</strong> Does the fabric shrink after washing?<br />
    <strong>A:</strong> According to customer reviews, the material is durable and doesn't shrink. Gentle washing is recommended.
  </p>

  {/* Customer Reviews Section */}
  <h2 className={styles.h2_heading}>Customer Reviews & Feedback</h2>

  <ul className={styles.paragraph}>
    <li><strong>★★★★★</strong> “The Chikankari work is elegant. Very versatile kurti.” – <em>Urmila Kumawat</em></li>
    <li><strong>★★★★★</strong> “Loved the white-on-white embroidery. Paired it with jeans too.” – <em>Rafiya</em></li>
    <li><strong>★★★★☆</strong> “Good quality. Size runs slightly loose.” – <em>Victoria Viswas</em></li>
    <li><strong>★★★★★</strong> “Very soft and beautiful – happy with the product.” – <em>Sujatha Reddy</em></li>
    <li><strong>★★★★★</strong> “Elegant design and material quality is good.” – <em>Sunny</em></li>
    <li><strong>★★★☆☆</strong> “Nice dress but fabric isn’t very thick.” – <em>Kavya</em></li>
    <li><strong>★★★★☆</strong> “Product slightly differed from image but still good.” – <em>Amazon Customer</em></li>
  </ul>
</div>

   {/* Product four */}
<div>
  <h1 className={styles.h2_heading}>
    Women’s Pink Embroidered Rayon Anarkali Kurta – Flared Long Gown with Mandarin Collar
  </h1>

  <div style={{ paddingTop: '0px' }}>
    <ImageViewer images={pinkAnarkaliKurta} />
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
      href="https://amzn.to/3TuBJn1" // Replace with actual affiliate link
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
    Price: ₹701.00 <span style={{ fontSize: "13px", fontWeight: "normal" }}> (61% Off – M.R.P. ₹1,799.00)</span>
  </p>

  <p className={styles.paragraph}>
    Sizes Available: S, M, L, XL
  </p>

  <p className={styles.paragraph}>
    Color: Pink | Other Variants: Blue, Brown, Bottle Green, Grey, Deep Red
  </p>

  <p className={styles.paragraph}>
    <span className={styles.paragraph_link} style={{ fontWeight: "bold", color: "#333" }}>
      Product Description:
    </span>
    This beautiful pink Anarkali kurta for women is made from soft rayon and features floral embroidery with a flattering flare. The ankle-length design, mandarin collar, and 3/4th sleeves offer a perfect fusion of comfort and elegance. Ideal for festive events, casual parties, or even daily wear, it’s machine washable and crafted to suit Indian weather. The regular fit complements every body type with sizes available up to XL.
  </p>

  <h2 className={styles.h2_heading}>FAQs – Women’s Embroidered Anarkali Kurta</h2>

  <p className={styles.paragraph}><strong>Q:</strong> Is this suitable for summer or daily use?<br />
    <strong>A:</strong> Yes, it's lightweight and made of breathable rayon, ideal for Indian summers.</p>

  <p className={styles.paragraph}><strong>Q:</strong> Does the color match the product image?<br />
    <strong>A:</strong> Most users received similar shades, though a few reported slight color variation.</p>

  <p className={styles.paragraph}><strong>Q:</strong> Will it shrink after washing?<br />
    <strong>A:</strong> The product is machine washable. No major shrinkage reported. Always follow care instructions.</p>

  <h2 className={styles.h2_heading}>Customer Feedback Highlights</h2>

  <ul className={styles.paragraph}>
    <li><strong>★★★★★</strong> “Didn’t expect such quality for the price. Wore it multiple times!” – <em>Pratibha Chaudhary</em></li>
    <li><strong>★★★★☆</strong> “Dress looks good, waiting to see the quality after wash.” – <em>Shiva</em></li>
    <li><strong>★★★☆☆</strong> “Nice style and fabric, but color was a bit unexpected.” – <em>Shiksha</em></li>
    <li><strong>★★★★★</strong> “Beautiful design. Extremely happy with it.” – <em>Bhargavaram</em></li>
    <li><strong>★☆☆☆☆</strong> “Very cheap material. Not worth the price.” – <em>SKY</em></li>
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
          <FacebookComments href="https://elitepurchase.in/blog/best-anarkali-kurti-under-900" />
        </div>
        <div className='right_ad_posts'>
            {/* <h4>right Secion</h4> */}
        </div>
      </div>
    </div>
  );
};

export default MensTshirts;
import Head from 'next/head'
import CategorySelector from '@/comps/CategorySelector/CategorySelection';
import SliderBanner from '@/comps/carousel/slider';
import Intro from '@/comps/Intro/Intro';
import ProductList from '@/comps/ProductList';
import ProductForm from '@/comps/ProductForm';
import ProductGallery from '@/comps/ProductGallery';
import { fetchUser } from '@/services/api';
import LoginButton from '@/comps/LoginButton';
import { useState, useEffect } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then((data) => {
      if (data?.success) {
        setUser(data.user);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>ElitePurchase - Trending Fashion, Deals & Online Shopping India</title>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ElitePurchase" />
        <meta name="keywords" content="ElitePurchase, online shopping India, women's fashion, men's clothing, fashion deals, Amazon affiliate, trendy outfits, fashion accessories, ecommerce Bangalore, shop smart, latest styles India" />
        <meta name="description" content="Shop the latest in women's and men's fashion at ElitePurchase. Discover top outfits, accessories, and budget-friendly fashion through trusted Amazon affiliate links." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elitepurchase.in/" />
        <meta property="og:title" content="ElitePurchase – Shop Trending Fashion & Deals Online in India" />
        <meta property="og:description" content="Explore the best fashion picks for men and women, with exclusive Amazon affiliate deals. Shop smart, stay stylish with ElitePurchase." />
        <meta property="og:image" content="https://elitepurchase.in/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://elitepurchase.in/" />
        <meta name="twitter:title" content="ElitePurchase – Shop Trending Fashion & Deals Online in India" />
        <meta name="twitter:description" content="Explore the best fashion picks for men and women, with exclusive Amazon affiliate deals. Shop smart, stay stylish with ElitePurchase." />
        <meta name="twitter:image" content="https://elitepurchase.in/logo.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://elitepurchase.in/" />
      </Head>

      
      {/* <SliderBanner /> */}
      <Intro />
        {/* <CategorySelector /> */}
        <div style={{ padding: "2rem" }}>
      {user ? (
        <>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
      padding: "3rem 2rem",
      borderRadius: "20px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: "all 0.6s ease",
      animation: "fadeIn 1.2s ease-in-out",
      maxWidth: "400px",
      margin: "2rem auto",
    }}
  >
    <h2
      style={{
        color: "#333",
        marginBottom: "1rem",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "600",
        letterSpacing: "0.5px",
      }}
    >
      Welcome, {user.name} 👋
    </h2>

    <img
      src={user.avatar}
      alt={user.name}
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        marginBottom: "1rem",
        border: "3px solid #0070f3",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        transition: "transform 0.4s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    />

    <p
      style={{
        color: "#555",
        marginBottom: "1.5rem",
        fontSize: "1rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {user.email}
    </p>

    <a
      href="https://elitepurchase-backend.onrender.com/api/auth/logout"
      style={{
        display: "inline-block",
        backgroundColor: "#0070f3",
        color: "white",
        padding: "0.6rem 1.5rem",
        borderRadius: "30px",
        textDecoration: "none",
        fontWeight: "500",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0 3px 8px rgba(0, 112, 243, 0.3)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#0059c9";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 112, 243, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#0070f3";
        e.currentTarget.style.boxShadow = "0 3px 8px rgba(0, 112, 243, 0.3)";
      }}
    >
      Logout
    </a>
  </div>

  {/* 🔹 Fade-in animation keyframes (inline style trick) */}
  <style jsx>{`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(15px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</>

      ) : (
        <LoginButton />
      )}
    </div>
        <ProductGallery />
    </>
  )
}

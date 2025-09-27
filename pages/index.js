import Head from 'next/head'
import CategorySelector from '@/comps/CategorySelector/CategorySelection';
import SliderBanner from '@/comps/carousel/slider';
import Intro from '@/comps/Intro/Intro';
import ProductList from '@/comps/ProductList';
import ProductForm from '@/comps/ProductForm';
import ProductGallery from '@/comps/ProductGallery';


export default function Home() {

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
        <ProductGallery />
    </>
  )
}

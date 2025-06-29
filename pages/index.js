import Head from 'next/head'
import CategorySelector from '@/comps/CategorySelector/CategorySelection';
import SliderBanner from '@/comps/carousel/slider';

export default function Home() {

  return (
    <>
      <Head>
        <title>ElitePurchase - Trending Women's & Men's Fashion | Online Shopping & Deals</title>
        <meta name="keywords" content="ElitePurchase, online shopping, women's clothing, men's fashion, fashion deals, Amazon affiliate, best outfits for women, trendy clothes, shop online India, fashion accessories, ecommerce Bangalore" />
        <meta name="description" content="ElitePurchase offers the latest in women's and men's fashion through trusted affiliate links. Discover trending outfits, shopping tips, and exclusive deals. Start shopping smart today!" />
      </Head>
      
      {/* <SliderBanner /> */}
        <CategorySelector />      
    </>
  )
}

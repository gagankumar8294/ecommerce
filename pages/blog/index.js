import Head from "next/head";
import Blogs from "@/comps/Blogs/Blogs";

const Blog = () => {
    return (
        <>
            <Head>
                <title>Latest Fashion & Product Reviews – Elite Purchase Blog</title>
                <meta
                    name="description"
                    content="Explore the latest fashion trends, affordable product reviews, and shopping tips on the Elite Purchase Blog. Stay updated with stylish finds and deals in 2025."
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Elite Purchase" />
                <meta name="keywords" content="fashion blog, product reviews, affordable fashion, shopping tips, elite purchase, kurta sets, amazon finds" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://elitepurchase.in/blog" />
                <meta property="og:title" content="Elite Purchase Blog – Affordable Fashion & Product Finds" />
                <meta
                    property="og:description"
                    content="Discover top fashion picks, reviews, and budget shopping guides on the Elite Purchase Blog."
                />
                <meta property="og:image" content="https://elitepurchase.in/og-image-blog.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://elitepurchase.in/blog" />
                <meta name="twitter:title" content="Elite Purchase Blog – Affordable Fashion & Product Finds" />
                <meta
                    name="twitter:description"
                    content="Discover top fashion picks, reviews, and budget shopping guides on the Elite Purchase Blog."
                />
                <meta name="twitter:image" content="https://elitepurchase.in/og-image-blog.jpg" />

                <link rel="canonical" href="https://elitepurchase.in/blog" />
            </Head>

            <Blogs />
        </>
    );
};

export default Blog;

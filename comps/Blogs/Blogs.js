import React, { useEffect, useState } from "react";
import styles from './Blogs.module.css';
import style from './Blogcard.module.css';
import blogsData from "./data/blogsData";
import { useRouter } from 'next/router';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            const sortedBlogs = [...blogsData].sort((a, b) => b.createdOn - a.createdOn);
            setBlogs(sortedBlogs);
        }, 500);
    }, []);

    const handleReadMore = (blog) => {
        const customUrlSection = blog.sections.find((s) => s.type === "url");
        if (customUrlSection?.value) {
            router.push(customUrlSection.value);
        } else {
            router.push(`/blog/${blog.slug}`);
        }
    };

    return (
        <section className={styles.blogs_Section}>
            <h2 className={styles.heading}>Blogs</h2>
            {blogs.length === 0 ? (
                <p className={styles.loading_text}>Loading... Please wait</p>
            ) : (
                <div className={style.blogList}>
                    {blogs.map((blog) => {
                        const firstImage = blog.sections.find(s => s.type === "image");
                        const firstTitle = blog.sections.find(s => s.type === "title");

                        return (
                            <div className={style.blogCard} key={blog.id}>
                                {firstImage && (
                                    <img src={firstImage.value} alt={firstImage.alt || "Blog Image - ElitePurchase"} />
                                )}
                                {firstTitle && <h3>{firstTitle.value}</h3>}
                                <button onClick={() => handleReadMore(blog)} className={style.readMore}>
                                    Read More
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default Blogs;

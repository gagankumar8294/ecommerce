import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Blog.module.css';
import blogsData from '@/comps/Blogs/data/blogsData';

const BlogDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        if (slug) {
            const found = blogsData.find(b => b.slug === slug);
            setBlog(found || null);
        }
    }, [slug]);

    if (!blog) return <p>Loading or blog not found...</p>;

    const createdOn = blog.createdOn;
    const blogURL = typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : '';
    const blogTitle = blog.sections.find(s => s.type === "title")?.value || "Untitled Blog";

    const getTimeAgo = (createdOn) => {
        const now = new Date();
        const diffMs = now - createdOn;
        const mins = Math.floor(diffMs / (1000 * 60));
        const hrs = Math.floor(mins / 60);
        const days = Math.floor(hrs / 24);

        if (mins < 60) return `${mins} min ago`;
        if (hrs < 24) return `${hrs} hour${hrs === 1 ? '' : 's'} ago`;
        if (days < 7) return `${days} day${days === 1 ? '' : 's'} ago`;
        return createdOn.toLocaleDateString("en-IN", {
            day: "numeric", month: "long", year: "numeric"
        });
    };

    return (
        <div style={{ paddingTop: "150px" }}>
            <h1 className={styles.main_heading}>{blogTitle}</h1>
            <p className={styles.time}>Posted {getTimeAgo(createdOn)}</p>

            {blog.sections.map((section, index) => {
                switch (section.type) {
                    case "h1":
                        return <h1 key={index} className={styles.h1}>{section.value}</h1>;
                    case "h2":
                        return <h2 key={index} className={styles.h2}>{section.value}</h2>;
                    case "h3":
                        return <h3 key={index} className={styles.h3}>{section.value}</h3>;
                    case "paragraph":
                    case "content":
                        return <p key={index} className={styles.paragraph}>{section.value}</p>;
                    case "image":
                        return <img key={index} className={styles.image_wh} src={section.value} alt={section.alt || 'Blog Image'} />;
                    case "link":
                        return (
                            <a
                                key={index}
                                href={section.value.startsWith("http") ? section.value : `https://${section.value}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                {section.linkText || "Read more"}
                            </a>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default BlogDetail;

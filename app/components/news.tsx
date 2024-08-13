import ReactMarkdown from "react-markdown";
import Image from "next/image";
import styles from "./news.module.css";

export default function News({ frontmatter, markdown }: any) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>
      <hr />
      <div className={styles.entry}>
        <ReactMarkdown className={styles.newsBody}>
          {frontmatter.news1}
        </ReactMarkdown>
        <div className={styles.newsImg}>
          <Image src={frontmatter.img1} alt="" fill={true} />
        </div>
      </div>
      <div className={styles.entry}>
        <div className={styles.newsImg}>
          <Image src={frontmatter.img2} alt="" fill={true} />
        </div>
        <ReactMarkdown className={styles.newsBody}>
          {frontmatter.news2}
        </ReactMarkdown>
      </div>
      <div className={styles.entry}>
        <ReactMarkdown className={styles.newsBody}>
          {frontmatter.news3}
        </ReactMarkdown>
        <div className={styles.newsImg}>
          <Image src={frontmatter.img3} alt="" fill={true} />
        </div>
      </div>
      <div className={styles.entry}>
        <div className={styles.newsImg}>
          <Image src={frontmatter.img4} alt="" fill={true} />
        </div>
        <ReactMarkdown className={styles.newsBody}>
          {frontmatter.news4}
        </ReactMarkdown>
      </div>
      <div className={styles.entry}>
        <ReactMarkdown className={styles.newsBody}>
          {frontmatter.news5}
        </ReactMarkdown>
        <div className={styles.newsImg}>
          <Image src={frontmatter.img5} alt="" fill={true} />
        </div>
      </div>
    </div>
  );
}

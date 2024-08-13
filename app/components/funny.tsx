import ReactMarkdown from "react-markdown";
import Image from "next/image";
import styles from "./funny.module.css";

export default function Funny({ frontmatter, markdown }: any) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>
      <hr />
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <div className={styles.imgs}>
        <div className={styles.funnyImg}>
          <Image src={frontmatter.img1} alt="" fill={true} />
        </div>
        <div className={styles.funnyImg}>
          <Image src={frontmatter.img2} alt="" fill={true} />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import path from "path";
import useEmblaCarousel from "embla-carousel-react";
import News from "./components/news";
import Funny from "./components/funny";
import Slider from "./components/slider";
import { getPostsData } from "./lib/posts";
import styles from "./page.module.css";

function getData() {
  const funnyDirectory = path.join(process.cwd(), "/app/content/funny");
  const newsDirectory = path.join(process.cwd(), "/app/content/news");

  const funny = getPostsData(funnyDirectory);
  const news = getPostsData(newsDirectory);

  return {
    funny,
    news,
  };
}

export default function Page() {
  const data = getData();

  return (
    <Slider>
      <div className="embla__container">
        <div className="embla__slide">
          <div className={styles.container}>
            <Image src="/static/cover.jpeg" fill={true} alt="CMAE Journal" />
          </div>
        </div>
        {data.news.map((article) => (
          <div key={article.id} className="embla__slide">
            <News
              frontmatter={article.frontmatter}
              markdown={article.content}
            ></News>
          </div>
        ))}
        {data.funny.map((fun) => (
          <div key={fun.id} className="embla__slide">
            <Funny frontmatter={fun.frontmatter} markdown={fun.content}></Funny>
          </div>
        ))}
      </div>
    </Slider>
  );
}

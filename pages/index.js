import Image from 'next/image'
import React from 'react'
import path from 'path'
import useEmblaCarousel from 'embla-carousel-react'
import News from '@components/News'
import Funny from '@components/Funny'
import { getPostsData } from '../lib/posts';
import styles from './index.module.css'

export async function getStaticProps() {
  const funnyDirectory = path.join(process.cwd(), 'content/funny');
  const newsDirectory = path.join(process.cwd(), 'content/news');
  
  const funny = getPostsData(funnyDirectory);
  const news = getPostsData(newsDirectory);

  return {
    props: {
      funny,
      news
    },
  };
}

export default function Home({ posts, funny, news }) {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className={styles.container}>
                <Image
                  src="/static/cover.jpeg"
                  fill={true}
                  alt="CMAE Journal"
                />
            </div>
          </div>
          {news.map(article => (
            <div key={article.id} className="embla__slide">
              <News frontmatter={article.frontmatter} markdown={article.content}></News>
            </div>
          ))}
          {funny.map(fun => (
            <div key={fun.id} className="embla__slide">
              <Funny frontmatter={fun.frontmatter} markdown={fun.content}></Funny>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

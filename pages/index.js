import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p style={{ textAlign: 'justify' }}>
         Hi everyone! My name is Arzy Klein Espiritu, and I am 20 years old. I am a student from 
         the University of the Assumption. I enjoy playing video games, learning about technology, 
        and working on different projects. I am also interested in computers, cars, and motorcycles.  
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
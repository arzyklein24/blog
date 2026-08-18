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
         Hi everyone! My name is Arzy Klein Espiritu, and I am 20 years old. I am a student from the Philippines. My hobbies include playing video games, learning about technology, and working with computers. I also enjoy learning about cars and motorcycles. For music, I like rock and upbeat songs, especially songs that I can listen to while relaxing or playing games. My favorite food is **Filipino food, especially chicken and other savory dishes. In five years, I see myself as a successful professional with a stable career. I hope to have improved my skills, gained more experience, and become financially independent. Most importantly, I want to continue learning and become a better version of myself. I’m looking forward to getting to know everyone and having a great experience together. Nice to meet you all!
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
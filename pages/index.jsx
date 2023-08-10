import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout.jsx';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../bin/post.js';
import Link from 'next/link.js';
import Date from '../components/Date.jsx';

export default function Home({ allPostData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Soy desarrollando de
          aplicaciones web responsive
          y accesibles. Muy bueno en
          CSS, JavaScript, React y
          ahora con Next.js</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul>
          {allPostData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData
    }
  };
}
import Head from "next/head";
import Header from "../../components/Header/Header.js";
import Link from "next/link";
import Date from "../layouts/date";
import React from "react";
import Navbar from "page-sections/componentsNavbar/Navbar";
import Home from "./Home"

export default function Index({ allPostsData }) {
  return (
      
      <div>
        <Navbar />
        <Home />
          {/* <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
  
          <section className={utilStyles.headingMd}>
            <p>งานกลุ่มตั้งใจทำกันด้วย</p>
            <style jsx>{`
              p {
                text-align: center;
              }
            `}</style>
          </section>
  
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                // <li className={utilStyles.listItem} key={id}>
                //   {title}
                //   <br />
                //   {id}
                //   <br />
                //   {date}
                // </li>
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </Layout> */}
      </div>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

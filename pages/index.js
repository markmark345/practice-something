import Head from "next/head";
import Layout, { siteTitle } from "../layouts/components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../layouts/components/date";
import Navbar from "../layouts/components/Navbar";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { green, dark, purple, red, yellow } from '@material-ui/core/colors'


const theme = createTheme({
  palette: {
      primary: {
        main:  '#212121',
      },
      secondary: purple
  },
  status: {
      danger:'red'
    },
    spacing: 8
})

export default function Home({ allPostsData }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Layout home>
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
      </Layout>
    </MuiThemeProvider>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

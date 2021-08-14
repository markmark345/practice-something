import Layout from '../../layouts/components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../layouts/components/date'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
    // return [
    //     {
    //       params: {
    //         // Statically Generates /posts/a/b/c
    //         id: ['pre-rendering', 'ssg-ssr']
    //       }
    //     }
    //     //...
    //   ]
  }

  export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    // ...
    return {
        props: {
          postData
        }
      }
  }

//   export async function getStaticProps({ params }) {
//     // params.id will be like ['a', 'b', 'c']
//   }

  export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }


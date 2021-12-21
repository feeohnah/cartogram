import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Cartogram (2010 - 2018) was a Toronto-based studio specializing in web
          design and development.{' '}
          <Link href="https://www.iammatt.ca">
            <a className={utilStyles.colorInherit}>Matt</a>
          </Link>{' '}
          and{' '}
          <Link href="https://www.fimcd.ca/">
            <a className={utilStyles.colorInherit}>Fiona</a>
          </Link>{' '}
          are still designing and developing, but in different capacities. Matt
          is now a full-time engineer at Shopify and Fiona is running their
          other business{' '}
          <Link href="https://fondfolio.com/">
            <a className={utilStyles.colorInherit}>Fondfolio</a>
          </Link>{' '}
          while also doing freelance, when the right project comes along. They
          also make{' '}
          <Link href="https://pawzzles.cat/">
            <a className={utilStyles.colorInherit}>puzzles for cats</a>
          </Link>
          .
        </p>
      </section>
    </Layout>
  )
}

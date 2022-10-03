import Head from "next/head";
import Hero from "../components/hero/Hero";
// import styles from '../styles/Home.module.css'
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>더블다 웹사이트</title>
        <meta name="description" content="더블다 웹사이트 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className="flex min-h-screen flex-column items-center justify-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
           <Hero/>
          </div>
        </section>
      </div>
    </Layout>
  );
}

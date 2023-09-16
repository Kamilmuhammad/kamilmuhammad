import React from "react";
import Container from "./container";
import Footer from "./footer";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <NextSeo
        title="Kamil Muhammad | Portfolio"
        description="I am a front-end developer dedicated to creating engaging and interactive user experiences through creative and functional web design."
        canonical="https://kamilmuhammad.vercel.app"
        openGraph={{
          url: 'https://kamilmuhammad.vercel.app',
          title: 'Kamil Muhammad | Portfolio',
          description: 'I am a front-end developer dedicated to creating engaging and interactive user experiences through creative and functional web design.',
          images: [
            {
              url: '/seo.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: '/seo.png',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Navbar />
        <Container>
          <div className="min-h-[57vh]">{children}</div>
          <Footer />
        </Container>
      </motion.div>
    </>
  );
}

export default Layout;

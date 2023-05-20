import Layout from "@/components/layout";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";

function Notes() {
  return (
    <>
      <Head>
        <title>Kamil Muhammad | Notes</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <section className="text-zinc-500 min-h-[50vh] flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center">Coming Soon</p>
          </motion.div>
        </section>
      </Layout>
    </>
  );
}

export default Notes;

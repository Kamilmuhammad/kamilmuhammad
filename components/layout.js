import React from "react";
import Container from "./container";
import Footer from "./footer";
import Navbar from "./navbar";
import { motion } from "framer-motion";

function Layout({ children }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar />
      <Container>
        <div className="min-h-[57vh]">{children}</div>
        <Footer />
      </Container>
    </motion.div>
  );
}

export default Layout;

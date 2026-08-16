import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Particles from "./components/Particles";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen overflow-x-hidden"
        >
          <Particles />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen items-center justify-center bg-[#0a0a0f]"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-4 h-12 w-12 rounded-full border-2 border-violet-500/20 border-t-violet-500"
        />
        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm tracking-[0.3em] text-gray-500 uppercase"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  );
}

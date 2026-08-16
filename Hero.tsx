import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Web Developer", "Gamer", "Student", "Valorant Player"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan-600/8 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mx-auto mb-8"
        >
          <div className="relative mx-auto h-36 w-36 md:h-44 md:w-44">
            <div className="pfp-ring absolute inset-0 rounded-full p-[3px]">
              <div className="h-full w-full rounded-full bg-[#0a0a0f] p-[3px]">
                <img
                  src="/images/pfp.png"
                  alt="Muhammad Bilal Butt"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Online status */}
            <div className="absolute bottom-2 right-2 z-10">
              <div className="status-dot h-4 w-4 rounded-full border-2 border-[#0a0a0f] bg-green-500" />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="mb-2 text-sm tracking-[0.3em] text-violet-400 uppercase">
            Welcome to my world
          </p>
          <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-white">Muhammad </span>
            <span className="text-gradient">Bilal</span>
            <span className="text-white"> Butt</span>
          </h1>
        </motion.div>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 mb-6"
        >
          <span className="text-lg text-gray-400 md:text-xl">
            I'm a{" "}
            <span className="typing-cursor font-semibold text-cyan-400">
              {displayText}
            </span>
          </span>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-2"
        >
          {["🎮 Valorant", "🎯 CS2", "💻 Web Dev", "🎓 PGC Student"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-gray-300 transition-colors hover:border-violet-500/30 hover:bg-violet-500/10"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-xl bg-violet-600 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/25"
          >
            <span className="relative z-10">Get In Touch</span>
          </a>
          <a
            href="https://discord.gg/tCnKQdRf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-gray-300 transition-all hover:border-violet-500/30 hover:bg-white/10 hover:text-white"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
            Join Discord
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-auto flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest text-gray-600 uppercase">
              Scroll Down
            </span>
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

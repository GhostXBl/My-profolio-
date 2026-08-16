import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const info = [
  { icon: "👤", label: "Name", value: "Muhammad Bilal Butt" },
  { icon: "🎂", label: "Age", value: "18 Years Old" },
  { icon: "🎓", label: "Education", value: "Punjab Group of Colleges (PGC)" },
  { icon: "💻", label: "Role", value: "Web Developer" },
  { icon: "🎮", label: "Games", value: "Valorant / CS2" },
  { icon: "🌐", label: "Discord", value: "nullspawn" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-2 text-sm tracking-[0.3em] text-violet-400 uppercase"
          >
            Get to know me
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl font-bold md:text-4xl"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Bio Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={2}
            className="card-bg glow-border rounded-2xl p-6 md:p-8 transition-all duration-300"
          >
            <h3 className="mb-4 text-lg font-semibold text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              Who Am I?
            </h3>
            <p className="leading-relaxed text-gray-400 text-sm md:text-base">
              Hey there! I'm <span className="text-white font-medium">Muhammad Bilal Butt</span>, 
              an 18-year-old from Pakistan currently studying at{" "}
              <span className="text-violet-400">Punjab Group of Colleges (PGC)</span>. 
              I'm passionate about web development and love building clean, 
              modern websites and applications.
            </p>
            <p className="mt-4 leading-relaxed text-gray-400 text-sm md:text-base">
              When I'm not coding, you'll find me grinding in{" "}
              <span className="text-cyan-400">Valorant</span> and{" "}
              <span className="text-cyan-400">Counter-Strike 2</span>. 
              I'm entering a new phase of my life — leveling up both in 
              development skills and gaming! 🚀
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
              <span className="text-xs text-gray-600 italic">"Entering new phase"</span>
              <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/30 to-transparent" />
            </div>
          </motion.div>

          {/* Info Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i + 3}
                className="card-bg glow-border rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-gray-200 truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

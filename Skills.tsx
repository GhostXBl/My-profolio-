import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const devSkills = [
  { name: "HTML", level: 85, color: "from-orange-500 to-orange-400" },
  { name: "CSS", level: 80, color: "from-blue-500 to-blue-400" },
  { name: "JavaScript", level: 70, color: "from-yellow-500 to-yellow-400" },
  { name: "React", level: 60, color: "from-cyan-500 to-cyan-400" },
  { name: "Tailwind CSS", level: 75, color: "from-teal-500 to-teal-400" },
];

const games = [
  {
    name: "Valorant",
    icon: "🎯",
    description: "Tactical FPS — Grinding ranked",
    accent: "border-red-500/20 hover:border-red-500/40",
  },
  {
    name: "Counter-Strike 2",
    icon: "🔫",
    description: "Classic competitive FPS",
    accent: "border-amber-500/20 hover:border-amber-500/40",
  },
];

const interests = [
  { icon: "🖥️", label: "Web Development" },
  { icon: "🎮", label: "Gaming" },
  { icon: "🎨", label: "UI/UX Design" },
  { icon: "📱", label: "Tech" },
  { icon: "🎵", label: "Music" },
  { icon: "🧠", label: "Learning" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-cyan-600/5 blur-[150px]" />
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
            className="mb-2 text-sm tracking-[0.3em] text-cyan-400 uppercase"
          >
            What I do
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl font-bold md:text-4xl"
          >
            Skills & <span className="text-gradient">Interests</span>
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Dev Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="card-bg glow-border rounded-2xl p-6 md:col-span-2 transition-all duration-300"
          >
            <motion.h3
              variants={fadeUp}
              custom={2}
              className="mb-6 text-lg font-semibold text-white flex items-center gap-2"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-sm">
                💻
              </span>
              Development Skills
            </motion.h3>
            <div className="space-y-4">
              {devSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  custom={i + 3}
                >
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm text-gray-300">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="card-bg glow-border rounded-2xl p-6 transition-all duration-300"
          >
            <motion.h3
              variants={fadeUp}
              custom={2}
              className="mb-6 text-lg font-semibold text-white flex items-center gap-2"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-sm">
                ⚡
              </span>
              Interests
            </motion.h3>
            <div className="grid grid-cols-2 gap-2">
              {interests.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  custom={i + 3}
                  className="flex items-center gap-2 rounded-lg bg-white/5 p-2.5 text-sm transition-colors hover:bg-white/10 border border-white/5"
                >
                  <span>{item.icon}</span>
                  <span className="text-gray-300 text-xs">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gaming Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 grid gap-4 sm:grid-cols-2"
        >
          {games.map((game, i) => (
            <motion.div
              key={game.name}
              variants={fadeUp}
              custom={i}
              className={`card-bg rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.01] ${game.accent}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{game.icon}</span>
                <div>
                  <h4 className="font-semibold text-white">{game.name}</h4>
                  <p className="text-sm text-gray-400">{game.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

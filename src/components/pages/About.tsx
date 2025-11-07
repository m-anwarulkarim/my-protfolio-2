import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container mx-auto px-6 py-24 max-w-3xl text-center bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1A2332] dark:via-[#1A2332] dark:to-[#1A2332]  text-foreground">
      {/* Profile Image */}
      <motion.img
        src="/images/anwarulkarim-1.jpg"
        alt="Anwarul Karim"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"
      />

      {/* Heading */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 dark:text-gray-100"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed"
      >
        Hi, I’m{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Anwarul Karim
        </span>
        , a passionate <strong>Full-Stack Web Developer</strong> with a deep
        love for crafting modern, scalable, and user-friendly web applications.
        I specialize in working with
        <strong> React, TypeScript, Node.js, and Express</strong>, combining
        creativity with clean code to bring digital ideas to life. I enjoy
        solving complex problems and turning them into elegant and efficient
        solutions.
      </motion.p>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        {[
          "React",
          "TypeScript",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
          "REST API",
          "Framer Motion",
          "Git & GitHub",
        ].map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-4 py-1 rounded-full text-sm font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default About;

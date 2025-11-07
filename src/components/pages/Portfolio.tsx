import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  image: string;
  link: string;
  category: string;
  tech: string[]; // 🆕 Tech Stack field
}

const allProjects: Project[] = [
  {
    title: "AB Seed Company",
    image: "/images/ab-seed.png",
    link: "https://ab-seed.vercel.app/",
    category: "Full Stack",
    tech: ["react", "TailwindCSS", "typscript"],
  },
  {
    title: "Library",
    image: "/images/library.png",
    link: "https://example.com/library-app",
    category: "Backend",
    tech: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "E-commerce Platform (MERN)",
    image: "/images/ecommerce.png",
    link: "https://e-commers-phi-roan.vercel.app/",
    category: "Full Stack",
    tech: ["HTML", "React", "TailwindCSS", "RTK query"],
  },
  {
    title: "Portfolio Website ",
    image: "/images/protfolio.png",
    link: "https://my-portfolio-l3e8.vercel.app/",
    category: "Frontend",
    tech: ["React", "TypeScript", "Framer Motion", "TailwindCSS"],
  },
  {
    title: "Online School",
    image: "/images/online-madrasha.png",
    link: "https://darul-ihsan.vercel.app/",
    category: "Frontend",
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "REST API with Express & MongoDB",
    image: "/images/ilme-web.png",
    link: "https://numan-vai.vercel.app/",
    category: "Backend",
    tech: ["Express", "MongoDB", "Node.js"],
  },
  {
    title: "madrasha",
    image: "/images/madrasha.png",
    link: "https://al-jami-at-uloomil-madarisil-qawmiy-two.vercel.app/",
    category: "frontend",
    tech: ["HTML", "TailwindCSS", "javascript"],
  },
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="container mx-auto px-6 py-24 bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1A2332] dark:via-[#1A2332] dark:to-[#1A2332] text-foreground">
      {/* Title */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100"
      >
        My Projects
      </motion.h2>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4 px-4">
              {project.title}
            </h3>

            {/* 🆕 Tech Stack */}
            <div className="flex flex-wrap gap-2 px-4 pb-4 mt-2">
              {project.tech.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

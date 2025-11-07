import { motion } from "framer-motion";
import { Code2, Layout, Database, Cloud, Cpu, Globe } from "lucide-react";
import ServiceCard from "../comp/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Build responsive, interactive, and accessible UI using React, TypeScript, Tailwind CSS, and modern design principles.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Develop secure and scalable REST APIs with Node.js, Express, and MongoDB ensuring fast and efficient data handling.",
    },
    {
      icon: Code2,
      title: "Full-Stack Web Apps",
      description:
        "End-to-end development of complete web applications — from frontend design to backend logic and database integration.",
    },
    {
      icon: Cloud,
      title: "Deployment & DevOps",
      description:
        "Deploy and manage applications on platforms like Vercel, Netlify, and Render with CI/CD and environment optimization.",
    },
    {
      icon: Cpu,
      title: "Performance Optimization",
      description:
        "Improve site speed, reduce bundle size, and ensure seamless user experience with performance-focused architecture.",
    },
    {
      icon: Globe,
      title: "API Integration",
      description:
        "Connect and integrate third-party APIs (like payment gateways, auth systems, and analytics) with clean, modular code.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-24 bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1A2332] dark:via-[#1A2332] dark:to-[#1A2332]  text-foreground">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100"
      >
        My Services
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;

// Projects.tsx
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Projects() {
  return (
    <section id="Projects" className="py-16 max-w-7xl mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A collection of my recent work showcasing different aspects of
          front-end development.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <ProjectCard
          img="/images/E-commerce.png"
          title="E-commerce & Admin Dashboard"
          description="Modern shopping experience with React and Tailwind integration."
          liveDemoLink="https://store-hub-iota.vercel.app/"
          githubLink="https://github.com/mostafaelfawal/StoreHub"
        />
        <ProjectCard
          img="/images/Fylo landing page.png"
          title="Fylo Landing Page"
          description="Responsive landing page with interactive elements and animations."
          liveDemoLink="https://fylo-ladning-page.vercel.app"
          githubLink="https://github.com/mostafaelfawal/Fylo-Ladning-Page"
        />
        <ProjectCard
          img="/images/TodoList.png"
          title="Todo List App"
          description="Cartoon-themed Todo app with CRUD, task filters, and persistent data via Local Storage."
          liveDemoLink="https://my-todo-phi-one.vercel.app/"
          githubLink="https://github.com/mostafaelfawal/Todo"
        />
        <ProjectCard
          img="/images/Estate landing page.png"
          title="Estate landing page"
          description="Responsive real estate landing page with smooth animations and modern UI."
          liveDemoLink="https://amjaad-estate-lading.vercel.app/"
          githubLink="https://github.com/mostafaelfawal/Amjaad-Lading-Page"
        />
      </motion.div>
    </section>
  );
}

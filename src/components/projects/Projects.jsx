import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const projects = [
  {
    title: "JerseyShop – E-commerce Platform",
    description:
      "An online store built using Django REST, React and PostgreSQL with full cart system, order management and secure email verification.",
    image:
      "https://res.cloudinary.com/dinzf10l3/image/upload/v1751229615/Screenshot_1_psygsw.png",
    tech: ["React", "Django", "PostgreSQL"],
  },
  {
    title: "EduPoint – Role-based Tutor Platform",
    description:
      "A tutoring platform with role-based login for students and tutors. Built with Django REST, React and PostgreSQL. Includes secure email verification.",
    image:
      "https://res.cloudinary.com/dinzf10l3/image/upload/v1751229615/Screenshot_3_yfxvvu.png",
    tech: ["React", "Django", "PostgreSQL"],
  },
];

const Projects = ({ projectsRef }) => {
  return (
    <section
      ref={projectsRef}
      className="mx-4 sm:mx-6 md:mx-10 lg:mx-16 my-10 sm:my-12 p-0 sm:p-8 md:p-10 rounded-2xl bg-transparent "
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-200 mb-10 sm:mb-14">
          Featured <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <Link to={`projects/${index + 1}`} key={index}>
              <div className="group border-2 border-white/25 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[3/3] sm:aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-blue-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed overflow-hidden line-clamp-2 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.tech.map((tech, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-0.5 rounded-full transition-all border border-gray-400"
                        >
                          <span className="text-blue-500 font-medium text-xs sm:text-sm">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button className="text-blue-400 hover:text-blue-600 transition-colors">
                      <FaExternalLinkAlt size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group text-sm sm:text-base"
          >
            View All Projects
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

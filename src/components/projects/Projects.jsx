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

const Projects = ({projectsRef}) => {
  return (
    <section ref={projectsRef} className="py-20 bg-">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Featured <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            
            <Link to={`projects/${index+1}`} >
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-100 px-3 py-0 rounded-full transition-all hover:bg-blue-100 hover:shadow-sm "
                      >
                        <span className="text-blue-500 font-medium text-sm md:text-base">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="text-blue-400 hover:text-blue-600 transition-colors">
                    <FaExternalLinkAlt size={20} className="text-base" />
                  </button>
                </div>
              </div>
            </div></Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
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

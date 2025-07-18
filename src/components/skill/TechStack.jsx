import { FaReact, FaPython, FaGitAlt, FaAws } from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiJsonwebtokens,
  SiSwagger,
  SiSupabase,
  SiCloudinary,
  SiVercel,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact />, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
  { name: "Django", icon: <SiDjango />, color: "text-green-700" },
  { name: "Django REST", icon: <FaPython />, color: "text-yellow-500" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700" },
  { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "text-orange-500" },
  { name: "Swagger", icon: <SiSwagger />, color: "text-teal-600" },
  { name: "Supabase", icon: <SiSupabase />, color: "text-emerald-600" },
  { name: "Cloudinary", icon: <SiCloudinary />, color: "text-blue-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "Vercel", icon: <SiVercel />, color: "text-black" },
  { name: "Learning AWS", icon: <FaAws />, color: "text-orange-400" },
];

const TechStack = ({ techStackRef }) => {
  return (
    <section
    data-aos="fade-left"
      ref={techStackRef}
      className="mx-4 sm:mx-6 md:mx-10 lg:mx-16 my-10 sm:my-12 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-white/25 bg-transparent backdrop-blur-3xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-5 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-4">
            My <span className="text-blue-500">Tech Stack</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Tools and technologies I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`group relative p-4 sm:p-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                <div className={`text-3xl sm:text-4xl ${tech.color} transition-transform duration-300 group-hover:scale-110`}>
                  {tech.icon}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-400 text-center">
                  {tech.name}
                </p>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gray-400 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-5 sm:mt-12 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            Continuously learning and adding new technologies to my toolkit
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

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
  { name: "React", icon: <FaReact />, color: "text-blue-500", bg: "bg-indigo-200" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500", bg: "bg-blue-200" },
  { name: "Django", icon: <SiDjango />, color: "text-green-700", bg: "bg-green-200" },
  { name: "Django REST", icon: <FaPython />, color: "text-yellow-500", bg: "bg-yellow-100" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700", bg: "bg-indigo-200" },
  { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "text-orange-500", bg: "bg-orange-200" },
  { name: "Swagger", icon: <SiSwagger />, color: "text-teal-600", bg: "bg-teal-200" },
  { name: "Supabase", icon: <SiSupabase />, color: "text-emerald-600", bg: "bg-emerald-200" },
  { name: "Cloudinary", icon: <SiCloudinary />, color: "text-blue-400", bg: "bg-blue-200" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500", bg: "bg-red-100" },
  { name: "Vercel", icon: <SiVercel />, color: "text-black", bg: "bg-gray-50" },
  { name: "Learning AWS", icon: <FaAws />, color: "text-orange-400", bg: "bg-orange-100" },
];

const TechStack = ({techStackRef}) => {
  return (
    <section ref={techStackRef} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-500">Tech Stack</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tools and technologies I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className={`group relative p-6 rounded-xl ${tech.bg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className={`text-4xl ${tech.color} transition-transform duration-300 group-hover:scale-110`}>
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
              </div>
              <div className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Continuously learning and adding new technologies to my toolkit
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
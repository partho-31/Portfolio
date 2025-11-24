import { FaReact, FaPython, FaGitAlt, FaAws, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiJsonwebtokens,
  SiSwagger,
  SiSupabase,
  SiCloudinary,
  SiVercel,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiZod,
} from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "React", icon: <FaReact />, color: "text-blue-500" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
  { name: "Zod", icon: <SiZod />, color: "text-green-500" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
  { name: "Django", icon: <SiDjango />, color: "text-green-700" },
  { name: "Django REST", icon: <FaPython />, color: "text-yellow-500" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700" },
  { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "text-orange-500" },
  { name: "Swagger", icon: <SiSwagger />, color: "text-teal-600" },
  { name: "Supabase", icon: <SiSupabase />, color: "text-emerald-600" },
  { name: "Cloudinary", icon: <SiCloudinary />, color: "text-blue-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "Vercel", icon: <SiVercel />, color: "text-white" },
  { name: "Learning AWS", icon: <FaAws />, color: "text-orange-400" },
];

const TechStack = ({ techStackRef }) => {
  return (
    <section
      ref={techStackRef}
      data-aos="fade-right"
      className="mx-4 sm:mx-6  md:mx-10 lg:mx-16 my-10 sm:my-12 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-white/25 bg-transparent backdrop-blur-3xl"
    >
      <div className="min-h-0">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-2">
            My <span className="text-blue-500">Tech Stack</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-sm">
            Tools and technologies I use to build exceptional digital
            experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="group relative h-20 sm:h-24 p-3 rounded-lg overflow-hidden
                         flex items-center justify-center flex-col transition-transform duration-200"
            >
              <div className="flex flex-col items-center justify-center space-y-1 w-full min-h-0">
                <div
                  className={`flex-shrink-0 text-2xl sm:text-3xl ${tech.color} 
                             transform transition-transform duration-200 group-hover:scale-105`}
                  style={{ willChange: "transform" }}
                >
                  {tech.icon}
                </div>
                <p className="text-[10px] sm:text-xs font-medium text-gray-300 text-center truncate px-1">
                  {tech.name}
                </p>
              </div>

              {/* subtle border on hover without affecting layout */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gray-400 transition-colors duration-200 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 sm:mt-8 text-center">
          <p className="text-gray-400 text-[10px] sm:text-xs">
            Continuously learning and adding new technologies to my toolkit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

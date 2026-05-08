import { FaGithub, FaEye, FaNewspaper } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { HiLightningBolt } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
import Nav from "./Nav";
import AnimatedCubeBackground from "../../background/AnimatedCubBackground";
import { useEffect } from "react";

const AstronomyClub = () => {
  const features = [
    "Google OAuth login with JWT authentication and email verification",
    "API handling with Redux (RTK Query) for efficient state management",
    "Admin dashboard for article and magazine CRUD operations",
    "Rich text editor for article creation and content management",
    "Responsive UI built with Tailwind CSS and ShadCN UI",
    "Category-based filtering for structured content organization",
    "User profile and publishing system for content management",
  ];

  const technologies = [
    "NextJs",
    "Tailwind CSS",
    "TypeScript",
    "Shadcn/ui",
    "Redux (RTK Query)",
    "Django REST Framework",
    "JWT",
    "Swagger (drf-yasg)",
    "Djoser",
    "PostgreSQL",
    "Cloudinary",
    "Supabase",
    "Vercel",
    "Sonner",
  ];

  const screenshots = [
    {
      src: " https://res.cloudinary.com/dvyz3blnz/image/upload/v1778223832/Screenshot_from_2026-05-08_13-03-36_f9ddei.png",
      title: "Home Screen",
      desc: "Landing Page with clear CTA",
    },
    {
      src: "https://res.cloudinary.com/dvyz3blnz/image/upload/v1778223743/Screenshot_from_2026-05-08_12-59-31_tkcdbn.png",
      title: "LogIn",
      desc: "Interactive login page",
    },
    {
      src: " https://res.cloudinary.com/dvyz3blnz/image/upload/v1778223732/Screenshot_from_2026-05-08_13-00-39_vgygdd.png",
      title: "Admin Dashboard",
      desc: "For managing content & users",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <AnimatedCubeBackground />
      <Nav />
      <div className="min-h-screen bg-transparent py-6 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center mb-4 bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-1 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base">
              <FaNewspaper className="mr-2" size={18} />
              <span className="font-medium">Content Management System</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 mb-3">
              JNIAC_JUST
            </h1>
            <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto">
              A platform for the Jamal Nazrul Islam Astronomy Club to manage
              magazines, share astronomy articles and engage members.
            </p>
          </header>

          {/* Overview Card */}
          <div className="bg-transparent rounded-2xl shadow-xl p-6 sm:p-8 mb-12 sm:mb-16 transform transition-all hover:scale-[1.01] hover:shadow-2xl border-2 border-white/25">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 p-3 rounded-xl">
                  <FaProjectDiagram className="text-blue-600" size={22} />
                </div>
                <h2 className="text-xl sm:text-3xl font-semibold text-gray-200">
                  Project Overview
                </h2>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                JNIAC_JUST is a content management system for creating,
                organizing, and publishing articles and digital magazines. It
                provides a structured workflow for authors and administrators
                with a focus on scalability and clean content architecture.
                Built with Next.js and Django, it's designed for scalability and
                performance.
              </p>
            </div>
          </div>

          {/* Screenshots */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8 text-gray-200">
              App Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {screenshots.map((img, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative overflow-hidden h-56 sm:h-64">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6">
                      <div>
                        <h3 className="text-gray-300 font-medium text-sm sm:text-lg">
                          {img.title}
                        </h3>
                        <p className="text-gray-300 text-xs sm:text-sm">
                          {img.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features & Tech Stack */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Features */}
            <div className="bg-transparent p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-white/25">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex-shrink-0 mr-3">
                  <div className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-purple-100 text-purple-600">
                    <HiLightningBolt className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">
                  Key Features
                </h2>
              </div>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 ">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-400 text-gray-200">
                        <BsCheckLg className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="ml-3 text-gray-400 text-sm sm:text-base">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-transparent p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-white/25">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex-shrink-0 mr-3">
                  <div className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-purple-100 text-purple-600">
                    <HiLightningBolt className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">
                  Technologies Used
                </h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {technologies.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-400 text-gray-200">
                        <BsCheckLg className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="ml-3 text-gray-400 text-sm sm:text-base">
                      {tech}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-200">
              Want to see it in action?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://github.com/partho-31/JNI_ASTRONOMY_CLUB-client"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium rounded-full hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <FaGithub className="mr-2" />
                View Source Code
              </a>
              <a
                href="https://jniac-just.vercel.app/"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <FaEye className="mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronomyClub;

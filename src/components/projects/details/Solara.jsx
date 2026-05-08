import { FaGithub, FaEye, FaNewspaper } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";
import { FaProjectDiagram,FaShoppingCart } from "react-icons/fa";
import Nav from "./Nav";
import AnimatedCubeBackground from "../../background/AnimatedCubBackground";
import { useEffect } from "react";

const Solara = () => {
  const features = [
    "JWT-based authentication with Google OAuth integration",
    "Redux-powered cart management with dynamic validation",
    "Seller dashboard for products and order mangement",
    "A secure order placement and checkout workflow",
    "API handling with Redux(RTK Query) for efficient state management",
    "Responsive UI built with Tailwind CSS and ShadCN UI",
    "Category-based filtering for structured content organization",
  ];

  const technologies = [
    "NextJs",
    "Tailwind CSS",
    "TypeScript",
    "Shadcn/ui",
    "Redux(RTK Query)",
    "FastAPi",
    "JWT",
    "Swagger(drf-yasg)",
    "MongoDB",
    "Cloudinary",
    "Supabase",
    "Vercel",
    "Sonner",
  ];

  const screenshots = [
    {
      src: "https://res.cloudinary.com/dvyz3blnz/image/upload/v1778226319/Screenshot_from_2026-05-08_13-32-19_vtkbtd.png",
      title: "Collections",
      desc: "Collections page with dynamic search and sorting",
    },
    {
      src: "https://res.cloudinary.com/dvyz3blnz/image/upload/v1778226319/Screenshot_from_2026-05-08_13-39-52_wpgvhh.png",
      title: "Cart",
      desc: "Interactive cart page",
    },
    {
      src: "https://res.cloudinary.com/dvyz3blnz/image/upload/v1778226319/Screenshot_from_2026-05-08_13-43-55_ukjr46.png",
      title: "Seller Dashboard",
      desc: "For managing products & orders",
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
              <FaShoppingCart className="mr-2" size={18} />
              <span className="font-medium">E-Commerce Project</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 mb-3">
              SOLARA
            </h1>
            <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto">
              A modern fashion-focused e-commerce platform delivering stylish,
              high-quality shopping experience.
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
                SOLARA is a fashion-focused e-commerce platform specializing in
                high-quality shopping experience. The application delivers a
                seamless shopping experience with real-time inventory, secure
                checkout and an intuitive seller interface. Built with Nextjs
                and FastApi, it's designed for scalability and performance.
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
                href="https://github.com/partho-31/Solara-client"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium rounded-full hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <FaGithub className="mr-2" />
                View Source Code
              </a>
              <a
                href="https://solara31.vercel.app/"
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

export default Solara;

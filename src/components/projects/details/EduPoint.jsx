import { useEffect } from "react";

import { FaGithub, FaEye } from "react-icons/fa";
import { HiOutlineBookOpen, HiLightningBolt } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";
import Nav from "./Nav";
import AnimatedCubeBackground from "../../background/AnimatedCubBackground";
import ScrollToTop from "../../../layouts/ScrollToTop"

const EduPoint = () => {
  const features = [
    "Separate registration/login for Students and Tutors",
    "JWT-based authentication with email verification",
    "Responsive dashboard with real-time notifications",
    "Profile management and secure password reset",
    "Tutor listing and filtering by subject/location",
    "Interactive messaging and course request system",
  ];

  const technologies = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Django REST Framework",
    "PostgreSQL",
    "Cloudinary",
    "Supabase",
    "JWT",
    "Swagger (drf-yasg)",
    "Djoser",
    "Vercel",
    "React Toastify",
  ];

  const screenshots = [
    {
      src: "https://res.cloudinary.com/dinzf10l3/image/upload/v1752836544/Screenshot_9_oxjslr.png",
      title: "Landing Page",
      desc: "Welcoming UI with clear CTA",
    },
    {
      src: "https://res.cloudinary.com/dinzf10l3/image/upload/v1751289682/Course_sa1bln.png",
      title: "Course Details",
      desc: "Course discovery and requests",
    },
    {
      src: "https://res.cloudinary.com/dinzf10l3/image/upload/v1752836789/Screenshot_10_yk8zwv.png",
      title: "Mentors Profile",
      desc: "Interactive admin dashboard ",
    },
  ];
  
 useEffect(() => {
    window.scrollTo(0, 0);
  })
  
  return (
    <div>
      <AnimatedCubeBackground />
      <Nav />
      <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white px-6 py-2 rounded-full">
              <HiOutlineBookOpen className="mr-2" size={20} />
              <span className="font-medium text-sm sm:text-base">
                Online Education Platform
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 mb-4">
              EduPoint
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              A personalized learning and teaching experience designed for
              modern education needs
            </p>
          </header>

          {/* Overview */}
          <div className="border-2 border-white/25 rounded-2xl shadow-xl p-6 sm:p-8 mb-14 sm:mb-16">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 p-3 rounded-xl">
                  <HiOutlineBookOpen className="text-indigo-600" size={22} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200">
                  Project Overview
                </h2>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                EduPoint is a full-featured educational web platform connecting
                students and tutors. With a secure and scalable architecture, it
                offers a streamlined interface for communication, lesson
                planning, and personalized learning. EduPoint is ideal for
                one-on-one tuition, academic support, and subject-specific
                mentoring.
              </p>
            </div>
          </div>

          {/* Gallery */}
          <section className="mb-14 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8 text-gray-200">
              App Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

          {/* Features & Technologies */}
          <div className="grid md:grid-cols-2 gap-8 mb-14 sm:mb-16">
            {[
              {
                title: "Key Features",
                items: features,
              },
              {
                title: "Technologies Used",
                items: technologies,
              },
            ].map(({ title, items }, i) => (
              <div
                key={i}
                className="border-2 border-white/25 p-6 sm:p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-100 text-purple-600 mr-4">
                    <HiLightningBolt className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">
                    {title}
                  </h2>
                </div>
                <ul
                  className={`${
                    title === "Technologies Used"
                      ? "grid grid-cols-1 sm:grid-cols-2 gap-3"
                      : "space-y-3"
                  }`}
                >
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-400 text-white">
                          <BsCheckLg className="w-4 h-4" />
                        </div>
                      </div>
                      <p className="ml-3 text-gray-400 text-sm sm:text-base">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-200">
              Want to explore the project?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://github.com/partho-31/Tutor-client"
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium rounded-full hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <FaGithub className="mr-2" /> View Source Code
              </a>
              <a
                href="https://tutor-client-chi.vercel.app/"
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium rounded-full hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <FaEye className="mr-2" /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default EduPoint;

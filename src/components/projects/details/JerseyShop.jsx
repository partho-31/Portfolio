import { FaGithub, FaEye } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { HiLightningBolt } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa"

const JerseyShop = () => {
  const features = [
    "JWT-based secure authentication with refresh tokens",
    "Admin dashboard with CRUD operations for products",
    "Interactive cart with quantity adjustments and instant totals",
    "Responsive design with Tailwind CSS for all devices",
    "Product filtering by team, league, and price range",
    "Order history and user profile management",
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
      src: "https://images.unsplash.com/photo-1607082349566-187342175e2d?auto=format&fit=crop&w=800&q=80",
      title: "Home Screen",
      desc: "Browse featured collections",
    },
    {
      src: "https://images.unsplash.com/photo-1607083200312-4e3a76a5e339?auto=format&fit=crop&w=800&q=80",
      title: "Product View",
      desc: "Detailed jersey information",
    },
    {
      src: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
      title: "Shopping Cart",
      desc: "Easy checkout process",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full">
            <GiSoccerBall className="mr-2" size={20} />
            <span className="font-medium">E-Commerce Project</span>
          </div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 mb-4">
            JerseyShop
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A premium sports jersey marketplace with modern web technologies
          </p>
        </header>

        {/* Overview Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 transform transition-all hover:scale-[1.01] hover:shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
                <FaProjectDiagram className="text-blue-600" size={28} />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                Project Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                JerseyShop is a full-featured e-commerce platform specializing
                in authentic sports jerseys. The application delivers a seamless
                shopping experience with real-time inventory, secure checkout,
                and an intuitive admin interface. Built with performance in
                mind, it combines React's dynamic frontend with Django's robust
                backend to create a scalable solution for sports merchandise.
              </p>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
            App Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {screenshots.map((img, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <h3 className="text-white font-medium text-lg">
                        {img.title}
                      </h3>
                      <p className="text-gray-200">{img.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features & Tech Stack */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Features */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-100 text-emerald-600">
                  <HiLightningBolt className="w-5 h-5" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Key Features
              </h2>
            </div>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600">
                      <BsCheckLg className="w-3 h-3" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600">
                  <HiLightningBolt className="w-5 h-5" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Technologies Used
              </h2>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600">
                      <BsCheckLg className="w-3 h-3" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">{tech}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">
            Want to see it in action?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium rounded-full hover:shadow-lg transition-all"
            >
              <FaGithub className="mr-2" />
              View Source Code
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full hover:shadow-lg transition-all"
            >
              <FaEye className="mr-2" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JerseyShop;

import { FaDownload, FaPaperPlane } from "react-icons/fa";

const HeroSection = ({homeRef,contactRef}) => {
  return (
    <section ref={homeRef} className="min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Hi, I'm <span className="text-blue-500">Partho</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-500 mb-6 font-medium">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 mb-8 text-lg max-w-lg">
            I craft clean, functional, and user-focused web experiences using
            modern technologies. As a passionate full stack developer, I bring
            ideas to life with React and Django REST — building scalable
            solutions that are both elegant and practical.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <FaPaperPlane /> Contact Me
            </button>
            <a
              href="#"
              className="flex items-center gap-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 "></div>
              <img
                src="https://res.cloudinary.com/dinzf10l3/image/upload/v1751215234/IMG-20250628-WA0002_1_amjntu.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
              />
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-100 rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

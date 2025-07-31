import { FaDownload, FaPaperPlane } from "react-icons/fa";
// import AnimatedCubeBackground from "../background/AnimatedCubBackground";

const HeroSection = ({ contactRef }) => {
  return (
    <section className="sm:py-20 py-10 text-white min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mt-5 font-bold text-gray-200 mb-4 leading-tight">
            Hi, I'm <span className="text-blue-500">Partho</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-500 mb-6 font-medium">
            Full Stack Developer
          </h2>
          <p className="text-gray-400 mb-8 text-lg max-w-lg">
            I craft clean, functional, and user-focused web experiences using
            modern technologies. As a passionate full stack developer, I bring
            ideas to life with React and Django REST — building scalable
            solutions that are both elegant and practical.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <button
              onClick={() =>
                contactRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              <FaPaperPlane /> Contact Me
            </button>
            <a
              href="https://drive.google.com/file/d/1pXsgK6f-IqAm1c1-vXIAeX9BhWtlRkT1/view?usp=sharing"
              target="_blank"
              className="flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
            <img
              src="https://res.cloudinary.com/dinzf10l3/image/upload/v1751215234/IMG-20250628-WA0002_1_amjntu.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-8 border-white/30 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

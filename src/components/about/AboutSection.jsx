const AboutSection = ({aboutRef}) => {
  const skills = ["Web Development", "React & Django", "RESTful APIs","PostgreSQL"];

  return (
    <section ref={aboutRef} id="about" className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="relative group">
              <img
                src="https://res.cloudinary.com/dinzf10l3/image/upload/v1751216559/photo-1571171637578-41bc2dd41cd2_zlcpob.avif"
                alt="Partho"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-xl transition duration-500"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Who Am I?
            </h3>

            <div className="space-y-3 mb-3">
              <p className="text-gray-600 leading-relaxed">
                I'm a dedicated full-stack developer with a strong foundation in
                building scalable and responsive web applications.My journey
                started with curiosity and grew through building real-world
                projects with modern technologies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm confident in backend development with Python, especially
                Django and Django REST Framework. On the frontend, I work with
                React and Tailwind CSS to create clean and responsive UI. I'm
                also experienced with JWT-based authentication, Swagger API
                documentation, PostgreSQL database and tools like Supabase and
                Cloudinary.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a Physics undergraduate, I apply analytical thinking to solve
                problems. I enjoy learning new technologies and continuously
                improving my craft to build clean, user-focused digital
                solutions.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-100 px-4 py-1 rounded-full transition-all hover:bg-blue-100 hover:shadow-sm"
                >
                  <span className="text-blue-500 font-medium text-sm md:text-base">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

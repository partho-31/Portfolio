const EducationSection = ({ educationRef }) => {
  const educationData = [
    {
      degree: "Bachelor of Science (B.Sc.) in Physics",
      institution:
        "Jashore University of Science and Technology • 2022-Present",
      description:
        "Currently studying advanced topics like Quantum Mechanics and Relativity. Developing strong mathematical skills through theoretical exploration",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution:
        "Masundia Bhawanipur K.J.B Degree College • 2018-2020",
      description:
        "Completed Science stream with a strong focus on Mathematics and Physics. Achieved a GPA of 5.00/5.00",
      icon: "📚",
    },
  ];

  return (
    <section
      ref={educationRef}
      className="mx-4 sm:mx-6 md:mx-10 lg:mx-16 my-10 sm:my-12 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-white/25 bg-transparent backdrop-blur-3xl"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-200 mb-10 sm:mb-12 md:mb-14">
          My <span className="text-blue-500">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="border border-white/35 px-5 sm:px-6 md:px-8 py-5 sm:py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-xl sm:text-2xl mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-300 mb-1">
                    {item.degree}
                  </h3>
                  <div className="text-blue-500 font-medium text-sm sm:text-base mb-2">
                    {item.institution}
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

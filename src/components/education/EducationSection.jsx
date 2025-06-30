
const EducationSection = ({educationRef}) => {
  const educationData = [
    {
      degree: "Bachelor of Science (B.Sc.) in Physics",
      institution: "Jashore University of Science and Technology • 2022-Present",
      description: "Currently studying advanced topics like Quantum Mechanics and Relativity. Developing strong mathematical skills through theoretical exploration",
      icon: "🎓"
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "Masundia Bhawanipur K.J.B Degree College • 2018-2020",
      description: "Completed Science stream with a strong focus on Mathematics and Physics. Achieved a GPA of 5.00/5.00",
      icon: "📚"
    },
  ];

  return (
    <section ref={educationRef}  className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
          My <span className="text-blue-500">Education</span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className="bg-white px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 "
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{item.degree}</h3>
                  <div className="text-blue-500 font-medium mb-3">{item.institution}</div>
                  <p className="text-gray-600 leading-relaxed">
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
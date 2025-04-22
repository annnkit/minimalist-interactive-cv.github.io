
export function SkillsSection() {
  const skills = {
    languages: ["C++", "C", "Python", "SQL"],
    frameworks: ["Scikit-learn", "XGBoost", "Decision Trees", "Random Forest", "SVM", "Clustering (KMeans, DBSCAN)"],
    tools: ["MySQL", "Anaconda", "Git/GitHub", "Jupyter Notebook", "Google Colab"],
    softSkills: ["Business Communication", "Team handling", "Time management", "Frugal Innovator", "Creative thinking"]
  };

  return (
    <section id="skills" className="section bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.softSkills.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

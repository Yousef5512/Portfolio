import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Code, Globe, Wrench, Cog, Users } from "lucide-react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("languages");

  const skillCategories = {
    languages: {
      title: "Languages & Frameworks",
      icon: Code,
      skills: [
        { name: "C#", proficiency: 85, color: "bg-purple-500", icon: "💜" },
        { name: "Java", proficiency: 80, color: "bg-orange-500", icon: "☕" },
        { name: "JavaScript", proficiency: 75, color: "bg-yellow-500", icon: "🟨" },
        { name: "SQL", proficiency: 70, color: "bg-green-500", icon: "🗄️" },
        { name: "ASP.NET", proficiency: 75, color: "bg-blue-500", icon: "🔷" },
        { name: "LINQ", proficiency: 70, color: "bg-pink-500", icon: "🔍" }
      ]
    },
    webdev: {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "React.js", proficiency: 85, color: "bg-blue-400", icon: "⚛️" },
        { name: "TypeScript", proficiency: 80, color: "bg-blue-600", icon: "📘" },
        { name: "HTML5", proficiency: 90, color: "bg-orange-600", icon: "🌐" },
        { name: "CSS3", proficiency: 85, color: "bg-blue-500", icon: "🎨" },
        { name: "Tailwind CSS", proficiency: 80, color: "bg-teal-500", icon: "💨" },
        { name: "Node.js", proficiency: 75, color: "bg-green-600", icon: "🟢" }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git", proficiency: 85, color: "bg-gray-600", icon: "🔧" },
        { name: "Visual Studio", proficiency: 90, color: "bg-purple-600", icon: "💻" },
        { name: "Docker", proficiency: 70, color: "bg-blue-600", icon: "🐳" },
        { name: "MongoDB", proficiency: 75, color: "bg-green-500", icon: "🍃" },
        { name: "PostgreSQL", proficiency: 80, color: "bg-blue-700", icon: "🐘" },
        { name: "Firebase", proficiency: 75, color: "bg-yellow-600", icon: "🔥" }
      ]
    },
    engineering: {
      title: "Engineering",
      icon: Cog,
      skills: [
        { name: "Software Architecture", proficiency: 80, color: "bg-indigo-500", icon: "🏗️" },
        { name: "System Design", proficiency: 75, color: "bg-purple-500", icon: "📐" },
        { name: "Database Design", proficiency: 85, color: "bg-green-600", icon: "🗃️" },
        { name: "API Development", proficiency: 80, color: "bg-blue-500", icon: "🔌" },
        { name: "Testing", proficiency: 75, color: "bg-red-500", icon: "🧪" },
        { name: "Debugging", proficiency: 85, color: "bg-orange-500", icon: "🐛" }
      ]
    },
    softskills: {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Problem Solving", proficiency: 90, color: "bg-emerald-500", icon: "🧩" },
        { name: "Team Collaboration", proficiency: 85, color: "bg-blue-500", icon: "🤝" },
        { name: "Communication", proficiency: 80, color: "bg-green-500", icon: "💬" },
        { name: "Time Management", proficiency: 85, color: "bg-purple-500", icon: "⏰" },
        { name: "Critical Thinking", proficiency: 85, color: "bg-orange-500", icon: "🧠" },
        { name: "Adaptability", proficiency: 80, color: "bg-teal-500", icon: "🔄" }
      ]
    }
  };

  const tabs = [
    { key: "languages", label: "Languages", icon: Code },
    { key: "webdev", label: "Web Dev", icon: Globe },
    { key: "tools", label: "Tools", icon: Wrench },
    { key: "engineering", label: "Engineering", icon: Cog },
    { key: "softskills", label: "Soft Skills", icon: Users }
  ];

  return (
    <section id="skills" className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I've mastered
            through dedicated learning and hands-on experience
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <Button
                key={tab.key}
                variant={activeTab === tab.key ? "default" : "outline"}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 gentle-transition ${
                  activeTab === tab.key 
                    ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600" 
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        {/* Skills Content */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-600 p-3 rounded-lg mr-4">
              {React.createElement(skillCategories[activeTab].icon, { 
                className: "w-6 h-6 text-white" 
              })}
            </div>
            <h3 className="text-2xl font-bold text-white">
              {skillCategories[activeTab].title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeTab].skills.map((skill, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white/10 border-white/20 backdrop-blur-lg gentle-transition hover:bg-white/15"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center text-white text-xl mr-4`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-lg">{skill.name}</h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-2xl font-bold text-white">{skill.proficiency}%</span>
                      <span className="text-sm text-white/70">Proficiency</span>
                    </div>
                  </div>
                </div>
                <Progress 
                  value={skill.proficiency} 
                  className="h-2 bg-white/20"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
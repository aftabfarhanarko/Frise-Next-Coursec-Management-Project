import React from 'react';
import { Presentation, Award, Lightbulb } from 'lucide-react';

export default function  Productpage  ()  {
  const benefits = [
    {
      icon: <Presentation className="w-9 h-9" />,
      title: "Stay motivated with instructors",
      description: "Stay motivated with engaging instructors on our platform, guiding you through every course."
    },
    {
      icon: <Award className="w-9 h-9" />,
      title: "Get certified on courses",
      description: "Get certified, master modern tech skills, and level up your career whether you're starting."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Build skills on your way",
      description: "Build skills your way with hands-on labs and immersive courses, tailored to fit."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-6 py-2 rounded-full text-sm mb-6 transition-colors">
            Our Benefits
          </button>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Master the skills to drive your career
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The right course, guided by an expert mentor, can provide invaluable insights, practical skills
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              {/* Icon Circle */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-800 text-white mb-6 hover:bg-[#FF4667] hover:animate-bounce transition-colors">
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import  React from 'react';
import { BookOpen, Users, TrendingUp } from 'lucide-react';

export default function LerningSec() {
  return (
    <div className=" bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-pink-500 font-semibold text-sm uppercase tracking-wider">
                Advanced Learning
              </p>
              <h1 className="text-3xl  font-bold text-gray-900 leading-tight">
                Creating a community of learners.
              </h1>
              <p className="text-gray-600 text-lg">
                We're dedicated to transforming education by providing a diverse range of high-quality courses that cater to learners of all levels.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6">
              {/* Learn from anywhere */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Learn from anywhere
                  </h3>
                  <p className="text-gray-600">
                    Learning from anywhere has become a transform aspect of modern education.
                  </p>
                </div>
              </div>

              {/* Expert Mentors */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Expert Mentors
                  </h3>
                  <p className="text-gray-600">
                    Learning from anywhere has become a transform aspect of modern education, allowing individuals.
                  </p>
                </div>
              </div>

              {/* Learn in demand skills */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-cyan-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Learn in demand skills
                  </h3>
                  <p className="text-gray-600">
                    In today's rapidly evolving job market, learning in demand skills is crucial for career advancement.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                Enroll as Student
              </button>
              <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                Apply as Tutor
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:h-[600px] h-[500px]">
            {/* Main large image - Woman with tablet */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[280px] sm:w-[320px] lg:w-[380px] z-10">
              <img
                src="/image/feature-2-1.jpg"
                alt="Student learning"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>

            {/* Bottom right image - Student with backpack */}
            <div className="absolute bottom-0 right-0 w-[220px] sm:w-[260px] lg:w-[300px] z-20">
              <img
                src="/image/feature-3-1.jpg"
                alt="Student with backpack"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-12 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute bottom-20 left-8 w-32 h-32 bg-green-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-pink-500 rounded-full opacity-20 blur-2xl"></div>
            
            {/* Checkmark decorations */}
          </div>
        </div>
      </div>
    </div>
  )
}
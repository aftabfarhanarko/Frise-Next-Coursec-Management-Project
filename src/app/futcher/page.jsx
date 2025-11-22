import React from 'react';
import { BookOpen } from 'lucide-react';

export default function FeaturedInstructor() {
  const instructors = [
    {
      name: 'Alice Lane',
      role: 'Instructor',
      courses: 0,
      image: '/image/techear1.jpg',
      bgColor: 'bg-pink-200'
    },
    {
      name: 'David Powell',
      role: 'Instructor',
      courses: 5,
      image: '/image/techer4.jpg',
      bgColor: 'bg-gray-200'
    },
    {
      name: 'Michael Morgan',
      role: 'Instructor',
      courses: 10,
      image: '/image/techer2.jpg',
      bgColor: 'bg-gray-600'
    },
    {
      name: 'John Michael',
      role: 'Instructor',
      courses: 0,
      image: '/image/techer3.jpg',
      bgColor: 'bg-pink-300'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Instructor
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
           Introducing our Featured Instructor, a seasoned professional dedicated to empowering students through high-quality education. With extensive industry experience and a talent for breaking down complex ideas
          </p>
        </div>

        {/* Instructor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className={`${instructor.bgColor} aspect-square overflow-hidden`}>
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Container */}
              <div className="p-6 text-center space-y-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {instructor.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {instructor.role}
                </p>
                
                {/* Course Count */}
                <div className="flex items-center justify-center gap-2 text-pink-500">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {instructor.courses === 0 ? 'Course 0' : `Courses ${instructor.courses}`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
)
}
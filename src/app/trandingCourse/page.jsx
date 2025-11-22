'use client';

import React, { useState } from 'react';
import { Clock, BookOpen, Heart, Star } from 'lucide-react';

export default function TrendingCourses  ()  {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const courses = [
    {
      id: 1,
      image: '/image/js.webp',
      isFree: true,
      instructor: {
        name: 'Michael Morgan',
        avatar: '/api/placeholder/40/40',
        title: 'Instructor'
      },
      title: 'Complete HTML, CSS and Javascript Course',
      lessons: 15,
      duration: '8 hrs 30 mins',
      rating: 0,
      reviews: 0
    },
    {
      id: 2,
      image: '/image/htmll.jpeg',
      isFree: true,
      instructor: {
        name: 'Michael Morgan',
        avatar: '/api/placeholder/40/40',
        title: 'Instructor'
      },
      title: 'Free Online HTML Course with Certificate',
      lessons: 15,
      duration: '10 hrs 30 mins',
      rating: 4,
      reviews: 1
    },
    {
      id: 3,
      image: '/api/placeholder/400/250',
      isFree: true,
      instructor: {
        name: 'Michael Morgan',
        avatar: '/api/placeholder/40/40',
        title: 'Instructor'
      },
      title: 'Fullstack Web Developer Online Course',
      lessons: 15,
      duration: '10 hrs 20 mins',
      rating: 0,
      reviews: 0
    },
    {
      id: 4,
      image: '/api/placeholder/400/250',
      isFree: true,
      instructor: {
        name: 'Michael Morgan',
        avatar: '/api/placeholder/40/40',
        title: 'Instructor'
      },
      title: 'Python Programming Masterclass',
      lessons: 20,
      duration: '12 hrs 45 mins',
      rating: 5,
      reviews: 3
    },
    {
      id: 5,
      image: '/api/placeholder/400/250',
      isFree: true,
      instructor: {
        name: 'Michael Morgan',
        avatar: '/api/placeholder/40/40',
        title: 'Instructor'
      },
      title: 'React and Next.js Complete Guide',
      lessons: 18,
      duration: '15 hrs 10 mins',
      rating: 4.5,
      reviews: 2
    },
    {
      id: 6,
      image: '/api/placeholder/400/250',
      isFree: true,
      instructor: {
        name: 'Michael Morgan',
        avatar: '/api/placeholder/40/40',
        title: 'Instructor'
      },
      title: 'UI/UX Design Fundamentals',
      lessons: 12,
      duration: '9 hrs 30 mins',
      rating: 4,
      reviews: 1
    }
  ];

  return (
    <section className="py-16 px-4" style={{
      background: 'linear-gradient(135deg, #fde1e1 0%, #e3f2fd 50%, #e8eaf6 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-red-500 font-semibold text-sm tracking-wide mb-3 block">
            What's New
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending Courses
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            All Courses
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Course Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                {course.isFree && (
                  <span className="absolute bottom-4 right-4 bg-white text-green-600 px-4 py-1 rounded-full font-bold text-sm shadow-md">
                    FREE
                  </span>
                )}
              </div>

              {/* Course Content */}
              <div className="p-5">
                {/* Instructor Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {course.instructor.name}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        {course.instructor.title}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(course.id)}
                    className="text-red-500 hover:scale-110 transition-transform duration-200"
                  >
                    <Heart
                      className="w-5 h-5"
                      fill={favorites.includes(course.id) ? 'currentColor' : 'none'}
                    />
                  </button>
                </div>

                {/* Course Title */}
                <h3 className="font-bold text-gray-900 text-lg mb-4 line-clamp-2 min-h-[3.5rem]">
                  {course.title}
                </h3>

                {/* Course Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4 text-red-500" />
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Rating and Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    {course.rating > 0 ? (
                      <>
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className="w-4 h-4"
                            fill={index < Math.floor(course.rating) ? '#fbbf24' : 'none'}
                            stroke={index < Math.floor(course.rating) ? '#fbbf24' : '#d1d5db'}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">
                          {course.rating} ({course.reviews})
                        </span>
                      </>
                    ) : (
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className="w-4 h-4"
                            fill="none"
                            stroke="#d1d5db"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <button className="border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


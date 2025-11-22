"use client";

import React from "react";
import Image from "next/image";
import { Layers, Users, Award, Star } from "lucide-react";

export default function Language() {
  const courses = [
    {
      name: "Angular",
      count: "3 Courses",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "Bootstrap",
      count: "3 Courses",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "CSS3",
      count: "3 Courses",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Docker",
      count: "2 Courses",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ];

  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "ContentStay motivated with engaging instructors",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Keep up with in the latest in cloud",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Get certified with 100+ certification courses",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Build skills your way, from labs to courses",
    },
  ];

  return (
    <div>
        <h1 className=" text-3xl font-semibold text-center">Focus on Teaching The Languages That Matter.</h1>
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-pointer group"
              >
                {/* Icon Circle */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white border-2 border-gray-100 mb-6 group-hover:border-white transition-all duration-300">
                  <div className="relative w-12 h-12">
                    <Image
                      src={course.logo}
                      alt={course.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Course Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-white transition-colors duration-300">
                  {course.name}
                </h3>

                {/* Course Count */}
                <p className="text-gray-500 text-sm group-hover:text-blue-100 transition-colors duration-300">
                  {course.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-block mb-4">
                <span className="text-pink-500 font-semibold text-sm tracking-wide">
                  What's New
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Master the skills to drive your career
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                Master the skills that drive success. Learn from experts and
                real-world experience. Build confidence to face every challenge.
                Unlock new opportunities in your career. Empower yourself to
                achieve your dreams.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center text-pink-500">
                      {feature.icon}
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 text-sm md:text-base leading-snug pt-1">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                {/* এখানে আপনার image বসাবেন */}
                <img
                  src="/image/join.png"
                  alt="Student with notebook"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"; // at the top of the file

import React, { useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { MdOutlineComputer } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

export default function CardPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">
        Master the Skills to Drive your Career
      </h1>
      <p className="text-md font-medium text-center mt-2">
        The right course, guided by an expert mentor, can provide invaluable
        insights, practical skills.
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch p-6">
        {/* Card 1 */}
        <div
          data-aos="fade-up"
          className="flex-1 group bg-white rounded-lg shadow-md p-6 relative overflow-hidden"
        >
          <div className="w-12 h-12 group-hover:animate-bounce flex items-center justify-center rounded-full bg-purple-100 mb-4">
            <FiBook className="text-purple-500 w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold mb-2">Flexible Learning</h3>
          <p className="text-gray-600">
            We believe that high-quality education should be accessible to
            everyone. Our pricing form in models are designed.
          </p>
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-up"
          className="flex-1 group bg-white rounded-lg shadow-md p-6 relative overflow-hidden"
        >
          <div className="w-12 h-12 group-hover:animate-bounce flex items-center justify-center rounded-full bg-pink-100 mb-4">
            <FaBookmark className="text-pink-500 w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold mb-2">Lifetime Access</h3>
          <p className="text-gray-600">
            When you enroll in our courses, you're not just signing up for a
            temporary learning experience, you're making a lifetime investment.
          </p>
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-up"
          className="flex-1 group bg-white rounded-lg shadow-md p-6 relative overflow-hidden"
        >
          <div className="w-12 h-12 group-hover:animate-bounce flex items-center justify-center rounded-full bg-blue-100 mb-4">
            <MdOutlineComputer className="text-blue-400 w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold mb-2">Expert Instruction</h3>
          <p className="text-gray-600">
            Our instructors are seasoned professionals with years of experience
            in their respective fields & Experts advice.
          </p>
        </div>
      </div>
    </div>
  );
}

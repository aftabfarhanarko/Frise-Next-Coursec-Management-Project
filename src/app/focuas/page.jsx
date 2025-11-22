import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Sign-Up or Register',
      description: 'Once you\'re on the website\'s homepage, look for the Sign-Up, Register, or Create Account button.'
    },
    {
      number: '02',
      title: 'Complete Your Profile',
      description: 'After verifying your email, you may be asked to complete additional profile information.'
    },
    {
      number: '03',
      title: 'Choose Courses or Programs',
      description: 'Depending on the website, after registration, you might be able to browse and choose courses or programs to enroll in.'
    },
    {
      number: '04',
      title: 'Access Your Account',
      description: 'Should have access to the website\'s features, such as enrolling in courses, materials, or tracking progress.'
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/image/feature-27-3.jpg"
                  alt="Student learning on laptop"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative blur elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="text-pink-500 font-semibold text-sm uppercase tracking-wider mb-3">
                How it Works
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Start your Learning Journey Today!
              </h2>
              <p className="text-gray-600 text-lg">
                Unlock Your Potential and Achieve Your Dreams with Our Comprehensive Learning Resources!
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl 
                    bg-pink-500 hover:bg-pink-600 text-white 
                    
                     flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
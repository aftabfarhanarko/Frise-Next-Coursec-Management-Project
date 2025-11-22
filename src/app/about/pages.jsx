export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-indigo-900">
                <img
                  src="/image/about.jpg"
                  alt="Students learning together"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-900 rounded-2xl -z-10"></div>
              
              {/* Yellow Arrow Decoration */}
              <div className="absolute bottom-8 -left-8 flex items-center space-x-1">
                <div className="text-yellow-400 text-4xl font-bold">««</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* About Link */}
            <div>
              <a href="#" className="text-pink-500 font-semibold hover:text-pink-600 transition-colors">
                About
              </a>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Learning,
              <br />
              Inspiring Growth
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              At DreamsLMS, we make education accessible to all with interactive
              courses and expert-led content. Learn anytime, anywhere, and
              achieve your goals seamlessly.
            </p>

            {/* Features */}
            <div className="space-y-6 pt-4">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Learn from anywhere
                  </h3>
                  <p className="text-gray-600">
                    Our Featured Instructor brings years of experience and hands-on expertise to guide you through every step of your learning journey. Known for practical insights and engaging teaching style, they make complex concepts easy to understand
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Expert Mentors
                  </h3>
                  <p className="text-gray-600">
                    Expert mentors are invaluable assets in any field, providing seasoned guidance knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
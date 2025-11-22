import React from "react";

export default function Footer() {
  return (
    <div>


    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold mb-4">
            <img
              src="/logo.png"
              alt="Dreams LMS"
              className="w-10 h-10"
            />
            <span>Dreams <span className="text-red-400">LMS</span></span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Platform designed to help organizations, educators,
            and learners manage, deliver, and track learning and
            training activities.
          </p>

          {/* App store buttons */}
          <div className="flex items-center gap-4 mt-6">
            <img
              src="https://i.ibb.co/QkN5gMH/appstore.png"
              className="w-36"
              alt="App Store"
            />
            <img
              src="https://i.ibb.co/cNtdrbF/googleplay.png"
              className="w-36"
              alt="Google Play"
            />
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Profile</li>
            <li>Login</li>
            <li>Register</li>
            <li>Instructor</li>
            <li>Dashboard</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">About</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Profile</li>
            <li>Login</li>
            <li>Register</li>
            <li>Instructor</li>
            <li>Dashboard</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Sign up to get updates & news.
          </p>

          {/* Input */}
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full rounded-full bg-white text-black"
            />

            <button className="btn rounded-full bg-pink-500 hover:bg-pink-600 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-gray-400 text-sm">

          <p>© 2025 Dreams LMS. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#">Terms & Condition</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <i className="fa-brands fa-facebook hover:text-white"></i>
            <i className="fa-brands fa-instagram hover:text-white"></i>
            <i className="fa-brands fa-x-twitter hover:text-white"></i>
            <i className="fa-brands fa-youtube hover:text-white"></i>
            <i className="fa-brands fa-linkedin hover:text-white"></i>
          </div>

        </div>
      </div>
    </footer>


    </div>
  );
}

// src/pages/LandingPage.js
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-indigo-600">Welcome to the Missing Grade Reporting System</h1>
          <p className="text-lg text-gray-600">
            This system is designed to help students track and report grades that are not recorded in their academic profiles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Feature 1 */}
            <div className="bg-indigo-100 p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">Grade Overview</h3>
              <p className="text-gray-700">View a comprehensive overview of your grades for each semester.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-indigo-100 p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">Missing Grades Alerts</h3>
              <p className="text-gray-700">Receive notifications for any missing grades in your academic record.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-indigo-100 p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-teal-700">Easy Reporting</h3>
              <p className="text-gray-700">Report missing grades effortlessly using our user-friendly interface.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Testimonial 1 */}
            <div className="bg-indigo-100 p-4 rounded-md shadow-md">
              <p className="italic mb-2 text-gray-700">"The Missing Grade Reporting System made it so much easier for me to keep track of my grades and report any discrepancies."</p>
              <p className="font-semibold text-teal-700">- Jane Doe, Student</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-indigo-100 p-4 rounded-md shadow-md">
              <p className="italic mb-2 text-gray-700">"I love how user-friendly and efficient the system is. It saved me a lot of time!"</p>
              <p className="font-semibold text-indigo-700">- John Smith, Student</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-indigo-100 p-4 rounded-md shadow-md">
              <p className="italic mb-2 text-gray-700">"The Missing Grade Reporting System is a must-have tool for every student. It's reliable and easy to use."</p>
              <p className="font-semibold text-indigo-700">- Mary Johnson, Student</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Get Started Today</h2>
          <p className="text-lg mb-4 text-gray-600">Don't let missing grades go unnoticed. Report them easily and keep your academic record up to date.</p>
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-700">Get Started</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

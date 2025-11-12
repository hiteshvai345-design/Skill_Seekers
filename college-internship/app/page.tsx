import Link from "next/link";
import InternshipCard from "@/components/InternshipCard";
import { internships } from "@/data/internships";

export default function Home() {
  const featuredInternships = internships.slice(0, 3);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Dream
            <span className="text-blue-600"> Internship</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with top companies and kickstart your career with internships
            tailored for college students across all fields.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/internships"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Browse Internships
            </Link>
            <Link
              href="/about"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-600"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Active Internships</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600 font-medium">Partner Companies</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Students Placed</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
              <p className="text-gray-600">
                Sign up and build your professional profile with your skills and interests.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Opportunities</h3>
              <p className="text-gray-600">
                Explore hundreds of internships across various fields and companies.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply Easily</h3>
              <p className="text-gray-600">
                Submit your application with just a few clicks using our streamlined process.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Your Journey</h3>
              <p className="text-gray-600">
                Get hired and begin your professional journey with top companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Featured Internships</h2>
          <Link
            href="/internships"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredInternships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have found their dream internships through InternHub.
          </p>
          <Link
            href="/internships"
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

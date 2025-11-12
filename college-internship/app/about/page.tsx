import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About InternHub
          </h1>
          <p className="text-xl text-gray-600">
            Empowering students to discover and secure their dream internships
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At InternHub, we believe that every student deserves access to meaningful
            internship opportunities that can shape their future careers. Our mission
            is to bridge the gap between talented college students and leading companies
            looking for fresh perspectives and innovative thinking.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            What We Do
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We've created a comprehensive platform that simplifies the internship
            search process. Students can browse hundreds of opportunities across
            various fields, filter by their preferences, and apply with just a few
            clicks. Companies benefit from access to a pool of motivated, qualified
            candidates ready to contribute to their organizations.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            Why Choose InternHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Curated Opportunities
              </h3>
              <p className="text-gray-700">
                Every internship on our platform is carefully vetted to ensure
                quality and legitimacy.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Easy Application
              </h3>
              <p className="text-gray-700">
                Apply to multiple internships quickly with our streamlined
                application process.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Diverse Fields
              </h3>
              <p className="text-gray-700">
                From technology to marketing, finance to design - we cover all
                major industries.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trusted Partners
              </h3>
              <p className="text-gray-700">
                We partner with reputable companies committed to providing
                valuable learning experiences.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            Our Impact
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-blue-100">Students Placed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-blue-100">Partner Companies</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            Join Our Community
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Whether you're a student looking for your first internship or a company
            seeking talented interns, InternHub is here to help. Join thousands of
            students and hundreds of companies who trust us to make meaningful
            connections.
          </p>

          <div className="text-center">
            <Link
              href="/internships"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Journey Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

const companies = [
  {
    id: 1,
    name: "TechCorp Solutions",
    industry: "Technology",
    location: "San Francisco, CA",
    employees: "500-1000",
    description: "Leading software development company specializing in cloud solutions and enterprise applications.",
    openings: 5,
  },
  {
    id: 2,
    name: "BrandWave Agency",
    industry: "Marketing",
    location: "New York, NY",
    employees: "100-500",
    description: "Creative marketing agency helping brands tell their stories through innovative campaigns.",
    openings: 3,
  },
  {
    id: 3,
    name: "DataMinds Analytics",
    industry: "Data Science",
    location: "Boston, MA",
    employees: "200-500",
    description: "Data analytics firm providing insights and predictive modeling for Fortune 500 companies.",
    openings: 4,
  },
  {
    id: 4,
    name: "DesignHub Studio",
    industry: "Design",
    location: "Austin, TX",
    employees: "50-100",
    description: "Award-winning design studio creating beautiful digital experiences for web and mobile.",
    openings: 2,
  },
  {
    id: 5,
    name: "Capital Ventures Group",
    industry: "Finance",
    location: "Chicago, IL",
    employees: "1000+",
    description: "Investment firm managing diverse portfolios and providing financial advisory services.",
    openings: 6,
  },
  {
    id: 6,
    name: "MediaFlow Publishing",
    industry: "Content",
    location: "Seattle, WA",
    employees: "100-200",
    description: "Digital publishing company creating engaging content across multiple platforms.",
    openings: 3,
  },
];

export default function CompaniesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Partner Companies
          </h1>
          <p className="text-lg text-gray-600">
            Explore companies offering internship opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {company.name}
                </h3>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {company.industry}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <span className="font-medium mr-2">Location:</span>
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-medium mr-2">Size:</span>
                  <span>{company.employees} employees</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-medium mr-2">Open Positions:</span>
                  <span className="text-green-600 font-semibold">
                    {company.openings} internships
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {company.description}
              </p>

              <Link
                href="/internships"
                className="block text-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                View Openings
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

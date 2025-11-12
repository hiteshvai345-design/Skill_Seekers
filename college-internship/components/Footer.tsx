import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">InternHub</h3>
            <p className="text-gray-400">
              Connecting talented students with amazing internship opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/internships" className="text-gray-400 hover:text-white transition-colors">
                  Internships
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-gray-400 hover:text-white transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Students</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/internships" className="text-gray-400 hover:text-white transition-colors">
                  Browse Internships
                </Link>
              </li>
              <li>
                <Link href="/internships" className="text-gray-400 hover:text-white transition-colors">
                  Search by Field
                </Link>
              </li>
              <li>
                <Link href="/internships" className="text-gray-400 hover:text-white transition-colors">
                  Remote Opportunities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Get Help
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@internhub.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Campus Drive</li>
              <li>Suite 100, CA 94000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 InternHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Internship } from "@/data/internships";

interface InternshipCardProps {
  internship: Internship;
}

export default function InternshipCard({ internship }: InternshipCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {internship.title}
          </h3>
          <p className="text-lg text-gray-700 font-medium">{internship.company}</p>
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          {internship.field}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <span className="font-medium mr-2">Location:</span>
          <span>{internship.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="font-medium mr-2">Type:</span>
          <span>{internship.type}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="font-medium mr-2">Duration:</span>
          <span>{internship.duration}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="font-medium mr-2">Stipend:</span>
          <span className="text-green-600 font-semibold">{internship.stipend}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{internship.description}</p>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Deadline: {new Date(internship.deadline).toLocaleDateString()}
        </span>
        <Link
          href={`/internships/${internship.id}`}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

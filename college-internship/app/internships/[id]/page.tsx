"use client";

import { useState } from "react";
import Link from "next/link";
import { internships } from "@/data/internships";
import { useParams } from "next/navigation";

export default function InternshipDetailPage() {
  const params = useParams();
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    major: "",
    graduationYear: "",
    resume: "",
    coverLetter: "",
  });

  const internship = internships.find((i) => i.id === params.id);

  if (!internship) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Internship Not Found
          </h1>
          <Link
            href="/internships"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Internships
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully! We'll get back to you soon.");
    setShowApplicationModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      university: "",
      major: "",
      graduationYear: "",
      resume: "",
      coverLetter: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/internships"
          className="text-blue-600 hover:text-blue-700 font-semibold mb-6 inline-block"
        >
          ← Back to Internships
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {internship.title}
              </h1>
              <p className="text-xl text-gray-700 font-medium">
                {internship.company}
              </p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
              {internship.field}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b">
            <div>
              <p className="text-sm text-gray-500 mb-1">Location</p>
              <p className="font-semibold text-gray-900">{internship.location}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Type</p>
              <p className="font-semibold text-gray-900">{internship.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Duration</p>
              <p className="font-semibold text-gray-900">{internship.duration}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Stipend</p>
              <p className="font-semibold text-green-600">{internship.stipend}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About the Internship
            </h2>
            <p className="text-gray-700 leading-relaxed">{internship.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Responsibilities
            </h2>
            <ul className="space-y-2">
              {internship.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Requirements
            </h2>
            <ul className="space-y-2">
              {internship.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 mb-1">Application Deadline</p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(internship.deadline).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Posted On</p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(internship.posted).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowApplicationModal(true)}
            className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>

      {showApplicationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Apply for {internship.title}
              </h2>
              <button
                onClick={() => setShowApplicationModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  University *
                </label>
                <input
                  type="text"
                  required
                  value={formData.university}
                  onChange={(e) =>
                    setFormData({ ...formData, university: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Major *
                </label>
                <input
                  type="text"
                  required
                  value={formData.major}
                  onChange={(e) =>
                    setFormData({ ...formData, major: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Graduation Year *
                </label>
                <input
                  type="text"
                  required
                  value={formData.graduationYear}
                  onChange={(e) =>
                    setFormData({ ...formData, graduationYear: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume URL *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://..."
                  value={formData.resume}
                  onChange={(e) =>
                    setFormData({ ...formData, resume: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  rows={4}
                  value={formData.coverLetter}
                  onChange={(e) =>
                    setFormData({ ...formData, coverLetter: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us why you're interested in this internship..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

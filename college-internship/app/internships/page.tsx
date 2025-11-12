"use client";

import { useState } from "react";
import InternshipCard from "@/components/InternshipCard";
import { internships, fields, locations, durations } from "@/data/internships";

export default function InternshipsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedField, setSelectedField] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");

  const filteredInternships = internships.filter((internship) => {
    const matchesSearch =
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesField = selectedField === "All" || internship.field === selectedField;
    const matchesLocation = selectedLocation === "All" || internship.type === selectedLocation;
    const matchesDuration = selectedDuration === "All" || internship.duration === selectedDuration;

    return matchesSearch && matchesField && matchesLocation && matchesDuration;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Browse Internships
          </h1>
          <p className="text-lg text-gray-600">
            Discover {internships.length} amazing internship opportunities
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by title, company, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Field
              </label>
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {fields.map((field) => (
                  <option key={field} value={field}>
                    {field}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location Type
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {(searchTerm || selectedField !== "All" || selectedLocation !== "All" || selectedDuration !== "All") && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {filteredInternships.length} of {internships.length} internships
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedField("All");
                  setSelectedLocation("All");
                  setSelectedDuration("All");
                }}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {filteredInternships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInternships.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-xl text-gray-600 mb-4">
              No internships found matching your criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedField("All");
                setSelectedLocation("All");
                setSelectedDuration("All");
              }}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

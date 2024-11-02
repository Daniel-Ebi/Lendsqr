import React from 'react'

const labResults = [
  { name: 'Blood Tests', icon: '🩸' },
  { name: 'CT Scans', icon: '🖥️' },
  { name: 'Radiology Reports', icon: '📊' },
  { name: 'X-Rays', icon: '🦴' },
  { name: 'Urine Test', icon: '🧪' },
]

export default function LabResults() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Lab Results</h2>
      <ul className="space-y-2">
        {labResults.map((result, index) => (
          <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
            <span className="flex items-center">
              <span className="text-2xl mr-2">{result.icon}</span>
              {result.name}
            </span>
            {/* Replace with download icon */}
            <span>⬇️</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
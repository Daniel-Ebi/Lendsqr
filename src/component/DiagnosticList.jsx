import React from 'react'

const diagnostics = [
  { problem: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation' },
  { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured' },
  { problem: 'Asthma', description: 'Recurrent episodes of bronchial constriction', status: 'Inactive' },
]

export default function DiagnosticList() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Diagnostic List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Problem/Diagnosis</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {diagnostics.map((diagnostic, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{diagnostic.problem}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{diagnostic.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{diagnostic.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
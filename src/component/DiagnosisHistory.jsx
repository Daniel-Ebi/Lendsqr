import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const bloodPressureData = {
  labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
  datasets: [
    {
      label: 'Systolic',
      data: [120, 118, 160, 116, 144, 158],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.4, 
    },
    {
      label: 'Diastolic',
      data: [110, 62, 108, 88, 70, 78],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.4, 
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Blood Pressure',
    },
  },
}

export default function DiagnosisHistory() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Diagnosis History</h2>
      <div className="mb-4">
        <Line options={options} data={bloodPressureData} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Respiratory Rate</h3>
          <p className="text-3xl font-bold">20 bpm</p>
          <p className="text-sm text-gray-600">Normal</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Temperature</h3>
          <p className="text-3xl font-bold">98.6°F</p>
          <p className="text-sm text-gray-600">Normal</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Heart Rate</h3>
          <p className="text-3xl font-bold">78 bpm</p>
          <p className="text-sm text-gray-600">Lower than Average</p>
        </div>
      </div>
    </div>
  )
}

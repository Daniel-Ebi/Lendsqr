import { Jessica } from "../assets"

export default function PatientInfo() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex-col items-center space-x-4 mb-4">
        <div className="h-32 w-32 rounded-full bg-gray-300 mx-auto justify-center items-center">
          <img src={Jessica} alt="Jessica" className="h-32 w-32" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Jessica Taylor</h2>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex">

          <p className="mr-2">📅</p>
        <div className="flex-col items-center">
          <p>Date of Birth: </p>
          <p>August 23, 1995</p>
        </div>
        </div>
        <div className="flex">
          <p className="mr-2">📞</p>
        <div className="flex-col items-center">
          {/* Replace with phone icon */}
          <p>Gender: </p>
          <p>Female</p>
        </div>
        </div>
        <div className="flex">
          <p className="mr-2">📞</p>
        <div className="flex-col items-center">
          {/* Replace with phone icon */}
          <p>Contact: </p>
          <p>(415) 555-1234</p>
        </div>
        </div>
        <div className="flex">
          <p className="mr-2">🚨</p>
        <div className="flex-col items-center">
          {/* Replace with emergency contact icon */}
          <p>Emergency Contact: </p>
          <p>(415) 555-5678</p>
        </div>
        </div>
        <div className="flex">
          <span className="mr-2">🏥</span>
        <div className="flex-col items-center">
          {/* Replace with insurance icon */}
          <p>Insurance: </p>
          <p>Sunrise Health Assurance</p>
        </div>
        </div>
      </div>
      <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
        Show All Information
      </button>
    </div>
  )
}
import {search} from '../assets'

const patients = [
  { id: 1, name: 'Emily Williams', age: 18, gender: 'Female' },
  { id: 2, name: 'Ryan Johnson', age: 45, gender: 'Male' },
  { id: 3, name: 'Brandon Mitchell', age: 31, gender: 'Male' },
  { id: 4, name: 'Jessica Taylor', age: 29, gender: 'Female' },
  { id: 5, name: 'Samantha Johnson', age: 50, gender: 'Female' },
  { id: 6, name: 'Ashley Martinez', age: 54, gender: 'Female' },
  { id: 7, name: 'Olivia Brown', age: 32, gender: 'Female' },
  { id: 8, name: 'Tyler Davis', age: 19, gender: 'Male' },
  { id: 9, name: 'Kevin Anderson', age: 30, gender: 'Male' },
  { id: 10, name: 'Dylan Thompson', age: 36, gender: 'Male' },
]

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md overflow-y-auto">
      <div className="p-4 flex justify-around">
        <h2 className="text-lg font-semibold mb-4">Patients</h2>
          <img src={search} alt="search icon" className=""  />
     
      </div>
      <ul className="divide-y divide-gray-200">
        {patients.map((patient) => (
          <li key={patient.id} className="p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {patient.name}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {patient.gender}, {patient.age}
                </p>
              </div>
              {/* Replace with more options icon */}
              <div>...</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
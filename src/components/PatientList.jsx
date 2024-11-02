import React from 'react';
import { FemaleIcon } from '../assets';

export default function PatientList({ patients, selectedPatient, setSelectedPatient }) {
  return (
    <div className="md:w-1/4 pr-4">
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Patients
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
           <img src={FemaleIcon} alt="icon" className='w-12 h-12' />
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {patients.map((patient) => (
            <li key={patient.name}>
              <button
                onClick={() => setSelectedPatient(patient.name)}
                className={`w-full px-4 py-4 flex items-center hover:bg-gray-50 focus:outline-none ${
                  selectedPatient === patient.name ? 'bg-teal-50' : ''
                }`}
              >
                <img
                  className="h-10 w-10 rounded-full mr-4"
                  src="/placeholder.svg?height=40&width=40"
                  alt={patient.name}
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">{patient.name}</p>
                  <p className="text-sm text-gray-500">{`${patient.gender}, ${patient.age}`}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

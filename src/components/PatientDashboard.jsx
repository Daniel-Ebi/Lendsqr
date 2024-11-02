import React, { useState } from 'react';
import Header from './Header';
import PatientList from './PatientList';
import BloodPressureChart from './BloodPressureChart';
import DiagnosisHistory from './DiagnosisHistory';
import PatientInfo from './PatientInfo';

const patients = [
  { name: 'Emily Williams', gender: 'Female', age: 18 },
  { name: 'Ryan Johnson', gender: 'Male', age: 45 },
  { name: 'Brandon Mitchell', gender: 'Male', age: 36 },
  { name: 'Jessica Taylor', gender: 'Female', age: 28 },
  { name: 'Samantha Johnson', gender: 'Female', age: 56 },
  { name: 'Ashley Martinez', gender: 'Female', age: 54 },
  { name: 'Olivia Brown', gender: 'Female', age: 32 },
  { name: 'Tyler Davis', gender: 'Male', age: 19 },
  { name: 'Kevin Anderson', gender: 'Male', age: 30 },
  { name: 'Dylan Thompson', gender: 'Male', age: 36 },
  { name: 'Nathan Evans', gender: 'Male', age: 58 },
  { name: 'Mike Nolan', gender: 'Male', age: 31 },
];

const diagnosticList = [
  { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured' },
  { problem: 'Asthma', description: 'Recurrent episodes of bronchial constriction', status: 'Inactive' },
  { problem: 'Osteoarthritis', description: 'Degenerative joint disease', status: 'Untreated' },
  { problem: 'Allergic Rhinitis', description: 'Seasonal allergies causing nasal congestion', status: 'Active' },
];

export default function PatientDashboard() {
  const [selectedPatient, setSelectedPatient] = useState('Jessica Taylor');

  return (
    <div className="min-h-screen bg-gray-100 pt-4">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        

        <div className="mt-8 flex flex-col md:flex-row">
          <PatientList
            patients={patients}
            selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient}
          />
          <div className="md:w-3/4 mt-8 md:mt-0">
            <BloodPressureChart />
            <DiagnosisHistory diagnosticList={diagnosticList} />
            <PatientInfo />
          </div>
        </div>
      </main>
    </div>
  );
}

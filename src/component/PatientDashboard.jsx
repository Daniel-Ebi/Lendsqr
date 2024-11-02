
import React from 'react'
// import Navbar from './component/Navbar'
import Sidebar from './Sidebar'
import PatientInfo from './PatientInfo'
import DiagnosisHistory from './DiagnosisHistory'
import DiagnosticList from './DiagnosticList'
import LabResults from './LabResults'
import Header from '../components/Header'

export default function PatientDashboard() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4">
          <div className="flex items-center justify-center gap-4">
            <div className="space-y-4">
              <DiagnosisHistory />
              <DiagnosticList />
            </div>
            <div className="space-y-4">
              <PatientInfo />
              <LabResults />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
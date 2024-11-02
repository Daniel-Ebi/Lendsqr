import { TestLogo } from "../assets";

export default function Header() {
  return (
    <header className="bg-white shadow-sm rounded-full  px-4 mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={TestLogo} alt="Tech.Care Logo" className="h-8  mr-2" />
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-700">Overview</a>
          <a href="#" className="bg-teal-500 text-white px-3 py-2 rounded-md text-sm font-medium">Patients</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Schedule</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Message</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Transactions</a>
        </nav>
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-500">Dr. Jose Simmons</span>
          <img src="/placeholder.svg?height=32&width=32" alt="Doctor Avatar" className="h-8 w-8 rounded-full" />
          <button className="ml-2 text-gray-400 hover:text-gray-500">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

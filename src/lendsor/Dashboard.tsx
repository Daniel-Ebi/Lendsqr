import { useState } from 'react';
import Adedeji from '../assets/Lendsqr/Adedeji.svg';
import { images, userTableData, userStats } from './data'
import FilterForm from './FilterForm';
import Sidebar from './Sidebar';
import ActionMenu from './ActionMenu'
import { Search, Bell, ChevronDown, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';



const getPageNumbers = (currentPage: number, totalPages: number) => {
  const pages = [];

  if (totalPages <= 9) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    pages.push(totalPages);
  }

  return pages;
};
export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 16;
  const [activeFilterId, setActiveFilterId] = useState<number | null>(null);
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null); // Track the selected user's ID for ActionMenu


  const handleFilterClick = (id: number) => {
    setActiveFilterId(activeFilterId === id ? null : id);
  };
  const handleCloseFilter = () => {
    setActiveFilterId(null);
  };

  const handleFilter = (filterData: any) => {
    setActiveFilterId(null);
  };  


  const handleMoreVerticalClick = (userId: number) => {
    setSelectedUserId(selectedUserId === userId.toString() ? null : userId.toString());
  };

return (
<div className="flex min-h-screen flex-col bg-gray-100 lg:flex-row">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
       
        <header className="flex h-16 items-center justify-between bg-white px-6 shadow">
          <div className="flex items-center border rounded-md ">
          <input
              type="text"
              placeholder="Search for anything"
              className="w-full rounded-lg border-none px-4 py-2 focus:border-teal-500 focus:outline-none sm:w-64"
            />
            <button className="ml-2 rounded-tr-md rounded-br-md bg-[#39cdcc] p-2 text-white">
              <Search size={20} />
            </button>
          </div>
          <div className="flex items-center">
            <a href="#" className="mr-6 text-[#213F7D] underline">
              Docs
            </a>
            <Bell className="mr-6 text-gray-600" />
            <div className="flex items-center">
              <img src={Adedeji} alt="User Avatar" width={40} height={40} className="rounded-full" />
              <span className="ml-2 mr-1">Adedeji</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </header>
     
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 sm:p-6">
          <h1 className="mb-6 text-2xl font-bold">Users</h1>
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {userStats.map((stat, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow">
                <div className="mb-4 h-12 w-12 rounded-full p-2">
                  <img src={stat.icon} alt="icon" className='w-10 h-10' />
                </div>
                <h3 className="mb-2 text-sm font-medium text-[#545F7D]">{stat.title}</h3>
                <p className="text-2xl font-semibold text-[#213F7D]">{stat.value}</p>
              </div>
            ))}
          </div>
          <div className="overflow-x-auto rounded-lg bg-white shadow">
  <div className="inline-block min-w-full align-middle">
   
      
          {/* <div className="overflow-hidden rounded-lg bg-white shadow min-w-full"> */}
          <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['ORGANIZATION', 'USERNAME', 'EMAIL', 'PHONE NUMBER', 'DATE JOINED', 'STATUS'].map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      <div className="flex items-center relative">
                        {header}
                        <img
                          src={images.filterIcon}
                          alt="filter"
                          className="ml-1 cursor-pointer"
                          onClick={() => header === 'ORGANIZATION' ? handleFilterClick(1) : null}
                        />
                        {header === 'ORGANIZATION' && activeFilterId === 1 && (
                          <div className="absolute mt-2 top-full right-0 z-50 bg-white shadow-lg rounded-md">
                            <FilterForm
                              onClose={handleCloseFilter}
                              onFilter={handleFilter}
                            />
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white text-[#545F7D] font-normal">
                {userTableData.map((user, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-6 py-4">{user.organization}</td>
                    <td className="whitespace-nowrap px-6 py-4">{user.username}</td>
                    <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                    <td className="whitespace-nowrap px-6 py-4">{user.phoneNumber}</td>
                    <td className="whitespace-nowrap px-6 py-4">{user.dateJoined}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div
                        className={`inline-flex w-20 h-7 justify-center items-center rounded-full px-2 
                        text-xs font-semibold leading-5 ${user.status === 'Active'
                            ? 'bg-green-100 text-green-500'
                            : user.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : user.status === 'Blacklisted'
                                ? 'bg-red-100 text-[#E4033B]'
                                : 'bg-gray-100 text-[#545F7D]'
                          }`}

                      >
                        {user.status}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium relative">
                      <button
                        className="text-gray-400 hover:text-gray-900"
                        onClick={() => handleMoreVerticalClick(user.id)}
                      >
                        <MoreVertical size={16} />
                      </button>
                      {selectedUserId === user.id.toString() && (
                        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
                          <ActionMenu userId={user.id} onClose={() => setSelectedUserId(null)} />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
</div>
          {/* Pagination */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-700">Showing</span>
              <select className="rounded border-gray-300 text-sm bg-[#213F7D1A] w-16 h-7">
                <option>100</option>
                <option>50</option>
                <option>20</option>
              </select>
              <span className="ml-2 text-sm text-gray-700">out of 100</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="mr-2 rounded-md border p-2 text-gray-600 bg-[#213F7D1A]"
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} className='' />
              </button>
              {getPageNumbers(currentPage, totalPages).map((page, i) => (
                <button
                  key={i}
                  onClick={() => typeof page === 'number' ? setCurrentPage(page) : null}
                  className={`mx-1 rounded-md px-3 py-1 text-sm ${currentPage === page
                    ? 'text-gray-700 font-medium'
                    : 'text-[#545F7D] hover:bg-gray-100'
                    }`}
                  disabled={typeof page !== 'number'}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className="ml-2 rounded-md border p-2 text-gray-600 hover:bg-gray-100"
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
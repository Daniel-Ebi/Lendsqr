import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, ChevronDown,
   Briefcase, Home, Users, Handshake, PiggyBank, UserCheck, UserX } from 'lucide-react';
import Sidebar from './Sidebar';
import Adedeji from '../assets/Lendsqr/Adedeji.svg';
import {images} from './data'

const sidebarItems = [
  { name: 'Switch Organization', icon: <Briefcase /> },
  { name: 'Dashboard', icon: <Home /> },
  { name: 'Users', icon: <Users /> },
  { name: 'Guarantors', icon: <Users /> },
  { name: 'Loans', icon: <Users /> },
  { name: 'Decision Models', icon: <Handshake /> },
  { name: 'Savings', icon: <PiggyBank /> },
  { name: 'Loan Requests', icon: <Users /> },  // Corrected HandCoins to Sack
  { name: 'Whitelist', icon: <UserCheck /> },
  { name: 'Karma', icon: <UserX /> },
];

const tabs = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System'];
const userDetails = {
  fullName: 'Grace Effiom',
  phoneNumber: '07060780922',
  email: 'grace@gmail.com',
  bvn: '07060780922',
  gender: 'Female',
  maritalStatus: 'Single',
  children: 'None',
  typeOfResidence: "Parent's Apartment",
  education: {
    level: 'B.Sc',
    employmentStatus: 'Employed',
    sector: 'FinTech',
    duration: '2 years',
    officeEmail: 'grace@lendsqr.com',
    monthlyIncome: ['₦200,000.00 - ₦400,000.00'],
    loanRepayment: '40,000',
  },
  socials: {
    twitter: '@grace_effiom',
    facebook: 'Grace Effiom',
    instagram: '@grace_effiom',
  },
  guarantor: {
    fullName: 'Debby Ogana',
    phoneNumber: '07060780922',
    email: 'debby@gmail.com',
    relationship: 'Sister',
  },
};

const UserDetails = () => {
  const [activeTab, setActiveTab] = useState('General Details');
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/dashboard')
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
      <header className="flex h-16 items-center justify-between bg-white px-6 shadow">
          <div className="flex items-center  border rounded-md ">
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

        <main className="p-6">
          <Link to="/dashboard"  onClick={handleBack} className="mb-6 flex items-center text-[#545F7D]">
            <img src={images.backArrow} alt="back" className='w-4 ' />
            <span className="ml-2">Back to Users</span>
          </Link>
          <div className='flex flex-col lg:flex-row justify-between mb-7'>
            <div>
              <p className='font-medium text-[#213F7D] text-2xl'>User Details</p>
            </div>
            <div className='flex justify-center items-center lg:gap-4 gap-16'>
              <div className='bg-white flex justify-center items-center rounded-lg w-40 h-10 border-solid border-2 border-[#E4033B]'>
                <p className='text-[#E4033B] flex justify-center items-center font-medium'>BLACKLIST USER</p>
              </div>
              <div className='bg-white flex justify-center items-center rounded-lg w-40 h-10 border-solid border-2 border-[#39CDCC]'>
                <p className='text-[#39CDCC] flex justify-center items-center font-medium'>ACTIVE USER</p>
              </div>
            </div>
          </div>
          <section className="mb-6 rounded-lg bg-white p-6 shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:flex lg:items-center gap-6 p-4">

              <div className="flex items-center">
                <img
                  src={images.blankavatar}
                  alt="Grace Effiom"
                  width={100}
                  height={100}
                  className="rounded-full w-20 md:w-24 lg:w-[100px]"
                />
                <div className="ml-4 lg:ml-6">
                  <h2 className="text-xl lg:text-2xl font-bold">{userDetails.fullName}</h2>
                  <p className="text-gray-500">LSQFf587g90</p>
                </div>
              </div>

              <div className="border-l-0 border-r-0 lg:border-l lg:border-r flex justify-center items-center lg:ml-16 lg:px-8">
                <div>
                  <p className="text-gray-500">User's Tier</p>
                  <div className="flex text-yellow-500 gap-1 items-center">
                    <img src={images.star} alt="star" className='w-5' />
                    <img src={images.hollowStar} alt="star" className='w-5' />
                    <img src={images.hollowStar} alt="star" className='w-5' />
                  </div>
                </div>
              </div>
<div className='flex justify-center items-center'>
<div className="lg:ml-8">
    <p className="text-xl lg:text-2xl font-bold">₦200,000.00</p>
    <p className="text-sm text-gray-500">9912345678/Providus Bank</p>
  </div>
</div>
</div>


          </section>

          <nav className="mb-6 flex flex-wrap border-b justify-between mx-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`mr-8 border-b-2 pb-2 ${activeTab === tab ? 'border-teal-500 text-teal-500' : 'border-transparent text-gray-500'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>

          {activeTab === 'General Details' && (
            <section className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-medium text-[#213F7D]">Personal Information</h3>
              <div className="grid lg:grid-cols-5 grid-cols-2  gap-4">
                <Detail label="FULL NAME"  value={userDetails.fullName} />
                <Detail label="PHONE NUMBER" value={userDetails.phoneNumber} />
                <Detail label="EMAIL ADDRESS" value={userDetails.email} />
                <Detail label="BVN" value={userDetails.bvn} />
                <Detail label="GENDER" value={userDetails.gender} />
                <Detail label="MARITAL STATUS" value={userDetails.maritalStatus} />
                <Detail label="CHILDREN" value={userDetails.children} />
                <Detail label="TYPE OF RESIDENCE" value={userDetails.typeOfResidence} />
              </div>
              <hr className='h-[2px] w-full bg-gray-300 my-4'></hr>
              <h3 className="mb-4 text-xl font-medium text-[#213F7D]">Education and Employment</h3>
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                <Detail label="LEVEL OF EDUCATION" value={userDetails.education.level} />
                <Detail label="EMPLOYMENT STATUS" value={userDetails.education.employmentStatus} />
                <Detail label="SECTOR OF EMPLOYMENT" value={userDetails.education.sector} />
                <Detail label="DURATION OF EMPLOYMENT" value={userDetails.education.duration} />
                <Detail label="OFFICIAL EMAIL" value={userDetails.education.officeEmail} />
                <Detail label="MONTHLY INCOME" value={userDetails.education.monthlyIncome} />
                <Detail label="LOAN REPAYMENT" value={userDetails.education.loanRepayment} />
              </div>
              <hr className='h-[2px] w-full bg-gray-300 mt-3'></hr>
              <h3 className="mb-4 text-xl font-medium text-[#213F7D]">Socials</h3>
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                <Detail label="TWITTER" value={userDetails.socials.twitter} />
                <Detail label="FACEBOOK" value={userDetails.socials.facebook} />
                <Detail label="INSTAGRAM" value={userDetails.socials.instagram} />
              </div>
              <hr className='h-[2px] w-full bg-gray-300 mt-3'></hr>
              <h3 className="mb-4 text-xl font-medium text-[#213F7D]">Guarrantor</h3>
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                <Detail label="FULL NAME" value={userDetails.guarantor.fullName} />
                <Detail label="PHONE NUMBER" value={userDetails.guarantor.phoneNumber} />
                <Detail label="EMAIL" value={userDetails.guarantor.email} />
                <Detail label="RELATIONSHIP" value={userDetails.guarantor.relationship} />
              </div>
              </section>
          )}
        </main>
      </div>
    </div>
  );
}

type DetailProps = {
  label: string;
  value: any;
};

function Detail({ label, value }: DetailProps) {
  return (
    <div>
      <p className="text-[#545F7D] font-medium text-[0.82rem] pt-3">{label}</p>
      <p className="text-[#545F7D] font-bold text-sm">{value}</p>

    </div>
  );
}

export default UserDetails;

 


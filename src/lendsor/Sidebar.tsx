import React, { useState, useRef, useEffect } from 'react'
import { Menu } from 'lucide-react'
import logo from '../assets/Lendsqr/logo.svg'
import { images, sidebarItems, sidebarBusiness, sidebarSettings } from './data'

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        !target.closest('button')
      ) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <button
        className="fixed top-4 left-4 z-20 rounded-md bg-white p-2 text-gray-500 shadow-md lg:hidden"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>
      <aside
        ref={sidebarRef}
        className={`fixed overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
          inset-y-0 left-0 z-10 w-64 transform bg-white p-6 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="mb-10">
          <img src={logo} alt="Lendsqr Logo" width={150} height={40} />
        </div>
        <nav className="overflow-y-auto">
          <div className="mb-3 flex items-center justify-center mr-9">
            <span className="mr-2">
              <img src={images.briefcase} alt="icon" />
            </span>
            <span className="font-medium text-[#545F7D]"> Switch Organization </span>
          </div>
          {sidebarItems.map((item, index) => (
            <a key={index} href="#" className="mb-4 flex items-center text-gray-600 hover:text-teal-600">
              <span className="mr-2">
                <img src={item.icon} alt="icon" />
              </span>
              {item.name}
            </a>
          ))}
          <p className="my-2 font-medium text-[#545F7D]">BUSINESSES</p>
          {sidebarBusiness.map((item, index) => (
            <a key={index} href="#" className="mb-4 flex items-center text-gray-600 hover:text-teal-600">
              <span className="mr-2">
                <img src={item.icon} alt="" />
              </span>
              {item.name}
            </a>
          ))}
          <p className="my-2 font-medium text-[#545F7D]">SETTINGS</p>
          {sidebarSettings.map((item, index) => (
            <a key={index} href="#" className="mb-4 flex items-center text-gray-600 hover:text-teal-600">
              <span className="mr-2">
                <img src={item.icon} alt="" />
              </span>
              {item.name}
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
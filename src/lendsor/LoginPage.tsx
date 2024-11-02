import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Lendsqr/logo.svg';
import pabloImage from '../assets/Lendsqr/pablo-signin.svg';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col w-1/2 items-center justify-center shadow-md bg-white p-10">
        <div className="w-full ">
          <img src={logo} alt="Lendsqr Logo" className="mb-16" />
          <img src={pabloImage} alt="Login Illustration" className="w-full h-auto mt-2" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full h-auto lg:w-1/2 items-center justify-center shadow-md bg-white p-8 ">
        <div className=" w-[80%]  h-auto space-y-6 mt-20">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#213F7D]">Welcome!</h2>
            <p className="mt-2 text-sm text-gray-600 font-semibold">Enter details to login.</p>
          </div>

          <form className="mt-8 2xl:space-y-16 xl:space-y-8  space-y-2  " onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className='font-medium'>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-300 placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative font-medium">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-300 placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#39CDCC]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="text-left">
              <a href="#" className="text-sm font-medium text-[#39CDCC] hover:text-teal-500">
                FORGOT PASSWORD?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-[#39CDCC] px-4 py-2 text-sm font-medium text-white hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

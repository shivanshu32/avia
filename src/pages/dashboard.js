import React, { useState } from "react";
import Counter from '../components/counter'

function MyApp() {
    const [sidebar, setsidebar] = useState(true);
    return (
        <div>
    
        <div className="h-screen h-full flex overflow-hidden bg-gray-100" data-todo-x-data="{ sidebarOpen: false }" data-todo-at-keydown-window-escape="sidebarOpen = false">
          <div data-todo-x-show="sidebarOpen" className="lg:hidden" data-todo-x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state.">
            <div className="fixed inset-0 flex z-40">
              <div data-todo-at-click="sidebarOpen = false" data-todo-x-show="sidebarOpen" data-todo-x-description="Off-canvas menu overlay, show/hide based on off-canvas menu state." data-todo-x-transition-enter="transition-opacity ease-linear duration-300" data-todo-x-transition-enter-start="opacity-0" data-todo-x-transition-enter-end="opacity-100" data-todo-x-transition-leave="transition-opacity ease-linear duration-300" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" className="fixed inset-0">
                <div className="absolute inset-0 bg-gray-600 opacity-75" aria-hidden="true"></div>
              </div>
              <div data-todo-x-show="sidebarOpen" data-todo-x-description="Off-canvas menu, show/hide based on off-canvas menu state." data-todo-x-transition-enter="transition ease-in-out duration-300 transform" data-todo-x-transition-enter-start="-translate-x-full" data-todo-x-transition-enter-end="translate-x-0" data-todo-x-transition-leave="transition ease-in-out duration-300 transform" data-todo-x-transition-leave-start="translate-x-0" data-todo-x-transition-leave-end="-translate-x-full" className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button data-todo-x-show="sidebarOpen" data-todo-at-click="sidebarOpen = false" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Close sidebar</span>
                    <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
                  </button>
                </div>
                <div className="flex-shrink-0 flex items-center px-4">
                  <img className="h-8 w-auto" src="http://aviawellness.com/uploads/hospital_content/logo/0.png" alt="Easywire logo" />
                </div>
                <nav className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
                  <div className="px-2 space-y-1">
                    
                      
                        {/* Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:text-white hover:bg-cyan-600" */}
                        <a href="/" className="bg-cyan-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md" aria-current="page">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
                          Home
                        </a>
                      
                      
                        <a href="/" className="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/clock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
                          History
                        </a>
                      
                      
                        <a href="/" className="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/scale" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
      </svg>
                          Balances
                        </a>
                      
                      
                        <a href="/" className="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/credit-card" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
      </svg>
                          Cards
                        </a>
                      
                      
                        <a href="/" className="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/user-group" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
                          Procedures
                        </a>
                      
                      
                        <a href="/" className="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/document-report" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
                          Printing
                        </a>
                      
                  </div>
                  <div className="mt-6 pt-6">
                    <div className="px-2 space-y-1">
                      
                        <a href="/" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                          <svg className="mr-4 h-6 w-6 text-cyan-200 group-hover:text-cyan-200" data-todo-x-description="Heroicon name: outline/cog" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
                          Settings
                        </a>
                      
                        <a href="/" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                          <svg className="mr-4 h-6 w-6 text-cyan-300 group-hover:text-cyan-200" data-todo-x-description="Heroicon name: outline/question-mark-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
                          Help
                        </a>
                      
                        <a href="/" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                          <svg className="mr-4 h-6 w-6 text-cyan-300 group-hover:text-cyan-200" data-todo-x-description="Heroicon name: outline/shield-check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
                          Privacy
                        </a>
                      
                    </div>
                  </div>
                </nav>
              </div>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </div>
      
          {/* Static sidebar for desktop */}
          <div className="hidden lg:flex lg:flex-shrink-0">
            <div className="flex flex-col w-64">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img className="h-8 w-auto" src="http://aviawellness.com/uploads/hospital_content/logo/0.png" alt="Easywire logo" />
                </div>
                <nav className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
                  <div className="px-2 space-y-1">
                    
                      
                        {/* Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:text-white hover:bg-cyan-600" */}
                        <a href="/" className="bg-cyan-800 text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md" aria-current="page">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
                          Dashboard
                        </a>
                      
                      
                        <a href="/" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/clock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
                          Appointments
                        </a>
                      
                      
                        <a href="/" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/scale" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
      </svg>
                          Billing
                        </a>
                      
                      
                        <a href="/" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/credit-card" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
      </svg>
                          Pharmacy
                        </a>
                      
                      
                        <a href="/" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/user-group" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
                          Procedures
                        </a>
                      
                      
                        <a href="/" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/document-report" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
                          Printing
                        </a>
                      
                  </div>
                  <div className="mt-6 pt-6">
                    <div className="px-2 space-y-1">
                      
                        <a href="/" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/cog" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
                          Settings
                        </a>
                      
                        
                      
                        <a href="/" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                          <svg className="mr-4 h-6 w-6 text-cyan-200" data-todo-x-description="Heroicon name: outline/shield-check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
                          Reports
                        </a>
                      
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
      
          <div data-todo-x-init="$el.focus()" className="flex-1 overflow-auto focus:outline-none" tabIndex={0}>
            <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
              <button data-todo-at-click-stop="sidebarOpen = true" className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden">
                <span className="sr-only">Open sidebar</span>
                <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/menu-alt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
      </svg>
              </button>
              {/* Search bar */}
              <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="flex-1 flex">
                  <form className="w-full flex md:ml-0" action="#" method="GET">
                    <label htmlFor="search_field" className="sr-only">Search</label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                        <svg className="h-5 w-5" data-todo-x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
      </svg>
                      </div>
                      <input id="search_field" name="search_field" className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search Patient" type="search" />
                    </div>
                  </form>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    <span className="sr-only">View notifications</span>
                    <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
      </svg>
                  </button>
      
                  {/* Profile dropdown */}
                  <div data-todo-x-data="{ open: false }" data-todo-at-keydown-escape-stop="open = false" data-todo-at-click-away="open = false" className="ml-3 relative">
                    <div>
                      <button type="button" className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50" id="user-menu" aria-expanded="false" data-todo-at-click="open = !open" aria-haspopup="true" data-todo-x-bind-aria-expanded="open">
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                        <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block"><span className="sr-only">Open user menu for </span>Nisha Chandra</span>
                        <svg className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
                      </button>
                    </div>
                    
                      {/* <div data-todo-x-description="Dropdown menu, show/hide based on menu state." data-todo-x-show="open" data-todo-x-transition-enter="transition ease-out duration-100" data-todo-x-transition-enter-start="transform opacity-0 scale-95" data-todo-x-transition-enter-end="transform opacity-100 scale-100" data-todo-x-transition-leave="transition ease-in duration-75" data-todo-x-transition-leave-start="transform opacity-100 scale-100" data-todo-x-transition-leave-end="transform opacity-0 scale-95" className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</a>
                      </div> */}
                    
                  </div>
                </div>
              </div>
            </div>
            <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
            <Counter />
              {/* Page header */}
              
      
              <div className="mt-8">
                
      
                <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
                  Recent Consultations
                </h2>
      
                {/* Activity list (smallest breakopoint only) */}
                <div className="shadow sm:hidden">
                  <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden" data-todo-x-max="1">
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Molly Sanders</span>
                                <span><span className="text-gray-900 font-medium">$20,000</span> USD</span>
                                <span>July 11, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Doug Mann</span>
                                <span><span className="text-gray-900 font-medium">$19,500</span> USD</span>
                                <span>July 5, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Erica Frost</span>
                                <span><span className="text-gray-900 font-medium">$8,750</span> USD</span>
                                <span>July 4, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Miley Davis</span>
                                <span><span className="text-gray-900 font-medium">$300</span> USD</span>
                                <span>July 1, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Molly Sanders</span>
                                <span><span className="text-gray-900 font-medium">$20,000</span> USD</span>
                                <span>June 17, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Doug Mann</span>
                                <span><span className="text-gray-900 font-medium">$19,500</span> USD</span>
                                <span>June 14, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Erica Frost</span>
                                <span><span className="text-gray-900 font-medium">$8,750</span> USD</span>
                                <span>June 3, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Miley Davis</span>
                                <span><span className="text-gray-900 font-medium">$300</span> USD</span>
                                <span>May 8, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Molly Sanders</span>
                                <span><span className="text-gray-900 font-medium">$20,000</span> USD</span>
                                <span>May 5, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Doug Mann</span>
                                <span><span className="text-gray-900 font-medium">$19,500</span> USD</span>
                                <span>May 1, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Erica Frost</span>
                                <span><span className="text-gray-900 font-medium">$8,750</span> USD</span>
                                <span>April 14, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Miley Davis</span>
                                <span><span className="text-gray-900 font-medium">$300</span> USD</span>
                                <span>April 11, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Molly Sanders</span>
                                <span><span className="text-gray-900 font-medium">$20,000</span> USD</span>
                                <span>April 3, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Doug Mann</span>
                                <span><span className="text-gray-900 font-medium">$19,500</span> USD</span>
                                <span>April 2, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Erica Frost</span>
                                <span><span className="text-gray-900 font-medium">$8,750</span> USD</span>
                                <span>March 29, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                      <li>
                        <a href="/" className="block px-4 py-4 bg-white hover:bg-gray-50">
                          <span className="flex items-center space-x-4">
                            <span className="flex-1 flex space-x-2 truncate">
                              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                              <span className="flex flex-col text-gray-500 text-sm truncate">
                                <span className="truncate">Payment to Miley Davis</span>
                                <span><span className="text-gray-900 font-medium">$300</span> USD</span>
                                <span>March 15, 2020</span>
                              </span>
                            </span>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
                          </span>
                        </a>
                      </li>
                    
                  </ul>
      
                  <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200" aria-label="Pagination">
                    <div className="flex-1 flex justify-between">
                      <a href="/" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                        Previous
                      </a>
                      <a href="/" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                        Next
                      </a>
                    </div>
                  </nav>
                </div>
      
                {/* Activity table (small breakopoint and up) */}
                <div className="hidden sm:block">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col mt-2">
                      <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Patient Name
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                              </th>
                              <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                                Type
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200" data-todo-x-max="1">
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Molly Sanders
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$20,000 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                                    OPD
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  July 11, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Doug Mann
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$19,500 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 capitalize">
                                    Pharmacy
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  July 5, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Erica Frost
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$8,750 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                                    OPD
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  July 4, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Miley Davis
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$300 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                                    OPD
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  July 1, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Molly Sanders
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$20,000 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
                                    Procedure
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  June 17, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Doug Mann
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$19,500 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 capitalize">
                                    Pharmacy
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  June 14, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Erica Frost
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$8,750 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                                    OPD
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  June 3, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Miley Davis
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$300 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                                    OPD
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  May 8, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Molly Sanders
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$20,000 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                                    OPD
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  May 5, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Doug Mann
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$19,500 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 capitalize">
                                    Pharmacy
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  May 1, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Erica Frost
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$8,750 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
                                    failed
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  April 14, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Miley Davis
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$300 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                                    OPD
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  April 11, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Molly Sanders
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$20,000 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                                    OPD
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  April 3, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Doug Mann
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$19,500 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 capitalize">
                                  Pharmacy
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  April 2, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Erica Frost
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$8,750 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                                    OPD
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  March 29, 2020
                                </td>
                              </tr>
                            
                              <tr className="bg-white">
                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <div className="flex">
                                    <a href="/" className="group inline-flex space-x-2 truncate text-sm">
                                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" data-todo-x-description="Heroicon name: solid/cash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
                                      <p className="text-gray-500 truncate group-hover:text-gray-900">
                                        Payment to Miley Davis
                                      </p>
                                    </a>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  <span className="text-gray-900 font-medium">$300 </span>
                                  USD
                                </td>
                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                                    OPD
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                  March 15, 2020
                                </td>
                              </tr>
                            
                          </tbody>
                        </table>
                        {/* Pagination */}
                        <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" aria-label="Pagination">
                          <div className="hidden sm:block">
                            <p className="text-sm text-gray-700">
                              Showing&nbsp;
                              <span className="font-medium">1</span>&nbsp;
                              to&nbsp;
                              <span className="font-medium">10</span>&nbsp;
                              of&nbsp;
                              <span className="font-medium">20</span>&nbsp;
                              results
                            </p>
                          </div>
                          <div className="flex-1 flex justify-between sm:justify-end">
                            <a href="/" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                              Previous
                            </a>
                            <a href="/" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                              Next
                            </a>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      
        </div>
    );
}

export default MyApp;

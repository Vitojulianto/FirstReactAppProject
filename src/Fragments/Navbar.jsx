import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const username = localStorage.getItem('username')

    const handleLogout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        window.location.href = '/login'
    }

    return (
        <div className="bg-blue-600 text-white px-6 py-4 shadow-md">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>

                {/* Hamburger Menu for Small Screens */}
                <div className="block lg:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center space-x-6">
                    <Link to='/todoapp' className="text-lg font-medium hover:underline">To Do List</Link>
                    <Link to='/anime' className="text-lg font-medium hover:underline">Anime</Link>
                </div>
            </div>

            {/* Dropdown Menu for Mobile */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col items-center space-y-4 py-4 bg-blue-700">
                    <Link to='/todoapp' className="text-lg font-medium text-white hover:underline" onClick={() => setIsMenuOpen(false)}>To Do List</Link>
                    <Link to='/anime' className="text-lg font-medium text-white hover:underline" onClick={() => setIsMenuOpen(false)}>Anime</Link>
                </div>
            </div>

            {/* User Info and Logout */}
            <div className="flex items-center space-x-4">
                <span className="text-sm font-medium bg-white text-blue-600 px-3 py-1 rounded-full shadow">
                    {username}
                </span>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
                    onClick={handleLogout}
                >
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default Navbar

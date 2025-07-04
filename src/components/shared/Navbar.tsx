import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa" 
import { NavLink } from "react-router"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          📚 Book Library Management
        </NavLink>
        <button
          className="md:hidden p-2 rounded text-gray-700 hover:text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <li>
            <NavLink to="/books" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-book" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink to="/borrow-summary" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
              Borrow Summary
            </NavLink>
          </li>
        </ul>
      </div>


      
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 font-medium text-gray-700 bg-white border-t">
          <li>
            <NavLink to="/books" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-600" : ""}>
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-book" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-600" : ""}>
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink to="/borrow-summary" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-600" : ""}>
              Borrow Summary
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}

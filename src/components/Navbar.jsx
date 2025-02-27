import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-between p-2">
        <div className="flex">
            <ul className="flex">
                <li className="mr-4">Home</li>
                <li className="mr-4">About Us</li>
                <li className="mr-4">FAQs</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
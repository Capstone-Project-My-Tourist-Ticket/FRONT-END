import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { Link } from "react-router-dom"
import React from "react"

function CityList() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState)
  }

  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>
      <div className="flex">
        <AdminNavbar />
        <div className="w-full px-6 py-4 ">
          <div className="flex justify-between ">
            <p className="text-2xl underline underline-offset-8">City List</p>
            <button className="bg-black text-white w-24 rounded-lg py-2">
              <Link to={"/add-city"}> Add</Link>
            </button>
          </div>
          <div className="w-full flex justify-between py-4">
            <Card
              style={{ backgroundImage: "url(/images/admin/city.png)" }}
              className="bg-cover w-[180px] h-[180px] relative"
            >
              <button
                onClick={handleDropdownToggle}
                className="absolute top-0 right-0 p-2"
              >
                <img src="/images/admin/toggle.png" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-12 right-1 bg-white rounded-md shadow-md p-2">
                  <div className="flex flex-col">
                    <Link to={"/edit-city"}>Edit</Link>
                    <button>Delete</button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityList

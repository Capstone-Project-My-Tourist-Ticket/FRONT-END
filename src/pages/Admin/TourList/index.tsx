import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { useState } from "react"
import React from "react"

function TourList() {
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
        <div className="px-6 py-4 w-full">
          <div className="text-2xl underline underline-offset-8">Tour List</div>
          <div className="py-4 flex justify-between gap-4">
            <Card className="w-[250px] relative">
              <button
                onClick={handleDropdownToggle}
                className="absolute top-0 right-0 p-2 z-10"
              >
                {isDropdownOpen && (
                  <div className="absolute top-12 right-1 bg-white rounded-md shadow-md p-2">
                    <div className="flex flex-col">
                      <button>Delete</button>
                    </div>
                  </div>
                )}
                <img src="/images/admin/toggle.png" />
              </button>
              <img className=" rounded-lg" src="/images/admin/bali.png" />
              <CardContent className="flex justify-between ">
                <p className="pt-4 font-bold">Bali</p>
                <p className="text-red-600 pt-4 text-xs">Report 40</p>
              </CardContent>
              <CardDescription className="flex">
                <img className="w-[15px] ps-1" src="/images/admin/pin.png" />
                <p className="ms-2 ">Bali</p>
              </CardDescription>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourList

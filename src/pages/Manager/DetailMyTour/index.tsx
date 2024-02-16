import AdminHeader from "@/components/Admin/AdminHeader"
import { useState } from "react"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"
import React from "react"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import Footer from "@/components/Footer"

function DetailMyTour() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState)
  }

  return (
    <div className="bg-[#dee2e6]">
      <AdminHeader />
      <div className="flex">
        <AdminNavbar />
        <div className="p-6">
          <div className="flex">
            <img
              className="w-[200px]"
              src={`https://thumb.viva.id/vivabandung/1265x711/2022/12/17/639d5f86779e1-ancol_bandung.jpg`}
            />
            <div className="px-4 items-center text-center">
              <p className="font-bold underline underline-offset-8 text-xl">
                Dupan Ancol
              </p>
              <p className="text-center">
                Jakarta <br />
                Kelapa Gading <br />
                <div className="flex justify-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      fill={"yellow"}
                      className="stroke-slate-300 drop-shadow-sm"
                      size={20}
                    />
                  ))}
                </div>
              </p>
            </div>
          </div>
          <div className="w-[800px]">
            <div className="flex justify-end">
              <button className="bg-black rounded-lg px-4 py-2 mt-4 font-semibold text-white">
                <Link to={`/addpackage`}> Add Package</Link>
              </button>
            </div>
            <div className="bg-white rounded-lg drop-shadow-xl p-6 mt-6">
              <div className="flex justify-end">
                <button onClick={handleDropdownToggle}>
                  {isDropdownOpen && (
                    <div className="absolute top-12 right-1 bg-white rounded-md shadow-md p-2">
                      <div className="flex flex-col">
                        <button>Delete</button>
                      </div>
                    </div>
                  )}
                  <img src="/images/admin/toggle.png" />
                </button>
              </div>

              <h1 className="font-bold text-base pb-4">
                Paket Ber3 - Regular Ice Age
              </h1>
              <p className="pb-4 text-base">Includes</p>
              <div className="flex items-center justify-between">
                <ul>
                  <li>Regular Ticket x3</li>
                  <li>Meals</li>
                </ul>
                <p className="text-red-500 text-xl">Rp. 220.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DetailMyTour

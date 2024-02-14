import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import Footer from "@/components/Footer"
import { Card, CardDescription } from "@/components/ui/card"
import { useState, useEffect } from "react"
import React from "react"

interface Tour {
  tour_name: string
  image: string
  city: {
    city_name: string
  }
}

function TourList() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [data, setData] = useState<Tour[]>([])

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://benarja.my.id/tours")

        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const jsonResponse = await response.json()

        if (jsonResponse.data && Array.isArray(jsonResponse.data)) {
          setData(jsonResponse.data)
        } else {
          console.error("API response does not contain an array:", jsonResponse)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>
      <div className="flex">
        <AdminNavbar />
        <div className="px-6 py-4 w-full">
          <div className="text-2xl underline underline-offset-8 font-bold">
            Tour List
          </div>
          <div className="py-4 flex flex-wrap justify-between gap-4">
            {data.map((item, index) => (
              <Card className="w-[200px] relative " key={index}>
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
                <img className=" rounded-lg" src={item.image} />
                <div className="p-2">
                  <CardDescription className="flex justify-between ">
                    <p className="pt-3 font-bold text-black text-sm">
                      {item.tour_name}
                    </p>
                    <p className="text-red-600 pt-3 text-xs">Report 40</p>
                  </CardDescription>
                  <CardDescription className="flex py-2">
                    <img
                      className="w-[15px] ps-1"
                      src="/images/admin/pin.png"
                    />
                    <p className="ms-2 text-sm">{item.city.city_name}</p>
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TourList

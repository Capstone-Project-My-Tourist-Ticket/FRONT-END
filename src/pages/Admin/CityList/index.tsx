import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import React from "react"
import Footer from "@/components/Footer"

interface City {
  image: string
}

function CityList() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [data, setData] = useState<City[]>([])

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://benarja.my.id/citys")

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
        <div className="w-full px-6 py-4 ">
          <div className="flex justify-between ">
            <p className="text-2xl underline underline-offset-8">City List</p>
            <button className="bg-black text-white w-24 rounded-lg py-2">
              <Link to={"/add-city"}> Add</Link>
            </button>
          </div>
          <div className="w-full flex flex-wrap justify-between py-4">
            {data.map((item, index) => (
              <Card
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
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
            ))}
          </div>
          <Pagination className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="bg-white border border-black"
                  href="#"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="bg-white" href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="bg-white">
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="bg-white" href="#">
                  9
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="bg-white" href="#">
                  10
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CityList

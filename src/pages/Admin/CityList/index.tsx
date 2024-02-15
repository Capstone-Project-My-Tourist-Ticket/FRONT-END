import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import axiosWithConfig from "@/utils/apis/axiosWithConfig"

interface City {
  city_name: string
  created_at: string
  description: string
  id: number
  image: string
  thumbnail: string
  updated_at: string
}

function CityList() {
  const [data, setData] = useState<City[]>([])
  const navigate = useNavigate()

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
  useEffect(() => {
    fetchData()
  }, [])

  const deleteCity = async (id: number) => {
    try {
      await axiosWithConfig.delete(`https://benarja.my.id/citys/${id}`)
      fetchData()
    } catch (error) {
      console.error("Failed to delete city", error)
    }
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
          <div className="w-full flex flex-wrap justify-between py-4">
            {data.map((item, index) => (
              <Card
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="bg-cover w-[180px] h-[180px] relative my-4"
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="absolute top-0 right-0 p-2">
                      <img src="/images/admin/toggle.png" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Action</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem
                        onClick={() => navigate(`/edit-city/${item.id}`)}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => deleteCity(item.id)}>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
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

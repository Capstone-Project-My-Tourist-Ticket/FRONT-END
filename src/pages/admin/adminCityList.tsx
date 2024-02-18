import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
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
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://benarja.my.id/citys?page=${currentPage}&limit=10`
      )

      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const jsonResponse = await response.json()

      if (jsonResponse.data && Array.isArray(jsonResponse.data)) {
        setData(jsonResponse.data)
        setTotalPages(jsonResponse.total_page)
      } else {
        console.error("API response does not contain an array:", jsonResponse)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [currentPage, totalPages])

  const deleteCity = async (id: number) => {
    try {
      await axiosWithConfig.delete(`https://benarja.my.id/citys/${id}`)
      fetchData()
    } catch (error) {
      console.error("Failed to delete city", error)
    }
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      console.log("Changing to page:", newPage)
      setCurrentPage(newPage)
    }
  }

  useEffect(() => {
    fetchData()
  }, [currentPage])

  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>
      <div className="flex">
        <AdminNavbar />
        <div className="w-full px-6 py-4 ">
          <div className="flex justify-between ">
            <p className="text-[20px] underline underline-offset-8 font-bold">
              City List
            </p>
            <Link to={"/add-city"}>
              <button className="bg-black text-white w-24 rounded-lg py-2">
                Add
              </button>
            </Link>
          </div>
          <div className="w-full flex flex-wrap gap-5 py-4">
            {data.map((item, index) => (
              <div key={index} className="relative">
                <Link to={`/admindetailcity/${item.id}`}>
                  <Card
                    style={{ backgroundImage: `url(${item.image})` }}
                    className="bg-cover w-[180px] h-[180px] relative my-4"
                  ></Card>
                  <div className="font-semibold text-[15px]">
                    {item.city_name}
                  </div>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="absolute top-4 right-0 p-1">
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
              </div>
            ))}
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  isActive={currentPage !== 1}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    className={`bg-white ${
                      currentPage === index + 1 ? "border border-black" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  isActive={currentPage !== totalPages}
                />
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

import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import React, { useEffect, useState } from "react"
import Footer from "@/components/Footer"
import axiosWithConfig from "@/utils/apis/axiosWithConfig"

interface Transaction {
  booking_id: string
  user_id: number
  tour_id: number
  package_id: number
  voucher_id: null
  payment_type: string
  gross_amount: number
  status: string
  va_number: number
  bank: string
  booking_date: string
  phone_number: number
  greeting: string
  full_name: string
  email: string
  quantity: number
  payment_expired: string
  created_at: string
  tour: {
    id: number
    tour_name: string
  }
  package: {
    id: number
    package_name: string
    price: number
  }
}

function TransactionList() {
  const [data, setData] = useState<Transaction[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  const fetchData = async () => {
    try {
      const response = await axiosWithConfig.get(
        `https://benarja.my.id/bookings/admin?page=${currentPage}&limit=10`
      )

      if (response.status !== 200) {
        throw new Error("Failed to fetch data")
      }

      const jsonResponse = response.data

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
    <div className="bg-[#dee2e6] h-auto">
      <AdminHeader />
      <div className="flex">
        <AdminNavbar />
        <div className="px-6 py-4 w-full">
          <div className="pb-7 text-2xl underline underline-offset-8 w-10/12 font-bold">
            Transaction List
          </div>
          <Table className="bg-white rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead className="text-black text-lg font-semibold">
                  No.
                </TableHead>
                <TableHead className="text-black text-lg font-semibold">
                  Booking ID
                </TableHead>
                <TableHead className="text-black text-lg font-semibold">
                  Name
                </TableHead>
                <TableHead className="text-black text-lg font-semibold">
                  Tour
                </TableHead>
                <TableHead className="text-black text-lg font-semibold">
                  Tour Package
                </TableHead>
                <TableHead className="text-black text-lg font-semibold">
                  Price
                </TableHead>
                <TableHead className="text-black text-lg font-semibold">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index + (currentPage - 1) * 10}>
                  <TableCell className="text-black text-sm">
                    {(currentPage - 1) * 10 + index + 1}
                  </TableCell>
                  <TableCell className="text-black text-sm">
                    {item.booking_id}
                  </TableCell>
                  <TableCell className="text-black text-sm">
                    {item.full_name}
                  </TableCell>
                  <TableCell className="text-black text-sm">
                    {item.tour.tour_name}
                  </TableCell>
                  <TableCell className="text-black text-sm">
                    {item.package.package_name}
                  </TableCell>
                  <TableCell className="text-black text-sm">
                    {item.gross_amount}
                  </TableCell>
                  <TableCell className="text-black text-sm">
                    {item.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <footer className="pt-10">
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
          </footer>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TransactionList

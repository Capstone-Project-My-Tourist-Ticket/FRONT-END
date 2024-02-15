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
  PaginationEllipsis,
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

  const fetchData = async () => {
    try {
      const response = await axiosWithConfig.get(
        "https://benarja.my.id/bookings/admin"
      )

      if (response.status !== 200) {
        throw new Error("Failed to fetch data")
      }

      const jsonResponse = response.data

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

  return (
    <div className="bg-[#dee2e6] h-auto">
      <AdminHeader />
      <div className="flex">
        <AdminNavbar />
        <div className="px-6 py-4 w-full">
          <div className=" py-4 text-2xl underline underline-offset-8 w-10/12 font-bold">
            Transaction List
          </div>
          <div className="border border-black rounded-lg text-[#9B9B9B] ps-2 mt-4 bg-white w-[200px] mb-4">
            Search
          </div>

          <Table className="bg-white rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Booking ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Tour</TableHead>
                <TableHead>Tour Package</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.booking_id}</TableCell>
                  <TableCell>{item.full_name}</TableCell>
                  <TableCell>{item.tour.tour_name}</TableCell>
                  <TableCell>{item.package.package_name}</TableCell>
                  <TableCell>{item.gross_amount}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <footer className="pt-10">
            <Pagination>
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
          </footer>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TransactionList

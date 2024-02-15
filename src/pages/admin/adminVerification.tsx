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

interface Pengelola {
  id: number
  full_name: string
  no_ktp: string
  address: string
  phone_number: string
  email: string
  role: string
  status: string
}

function VerificationAccount() {
  const [data, setData] = useState<Pengelola[]>([])

  const fetchData = async () => {
    try {
      const response = await axiosWithConfig.get(
        "https://benarja.my.id/users/admin"
      )

      if (response.status !== 200) {
        throw new Error("Failed to fetch data")
      }

      const jsonResponse = response.data

      if (jsonResponse && jsonResponse.data) {
        setData(jsonResponse.data)
      } else {
        console.error("API response does not contain data:", jsonResponse)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
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
            Verification Account Manager
          </div>
          <Table className="bg-white rounded-lg mt-6">
            <TableHeader>
              <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>User ID</TableHead>
                <TableHead>Manager Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>No KTP</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.full_name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.no_ktp}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell className="flex gap-4">
                    <button>
                      <img src="/images/admin/ceklis.png" />
                    </button>
                    <button>
                      <img src="/images/admin/x.png" />
                    </button>
                  </TableCell>
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

export default VerificationAccount

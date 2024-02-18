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
import { useEffect, useState } from "react"
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
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  const fetchData = async () => {
    try {
      const response = await axiosWithConfig.get(
        `https://benarja.my.id/users/admin?page=${currentPage}&limit=10`
      )

      if (response.status !== 200) {
        throw new Error("Failed to fetch data")
      }

      const jsonResponse = response.data

      if (jsonResponse && jsonResponse.data) {
        setData(jsonResponse.data)
        setTotalPages(jsonResponse.total_page)
      } else {
        console.error("API response does not contain data:", jsonResponse)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [currentPage, totalPages])

  const handleApproval = async (userId: number) => {
    try {
      const response = await axiosWithConfig.put(
        `https://benarja.my.id/users/admin/${userId}?status=approved`
      )

      if (response.status !== 200) {
        throw new Error("Failed to update status")
      }

      setData((prevData) => prevData.filter((user) => user.id !== userId))
    } catch (error) {
      console.error("Error updating status:", error)
    }
  }

  const handleReject = async (userId: number) => {
    try {
      const response = await axiosWithConfig.put(
        `https://benarja.my.id/users/admin/${userId}?status=rejected`
      )

      if (response.status !== 200) {
        throw new Error("Failed to update status")
      }

      setData((prevData) => prevData.filter((user) => user.id !== userId))
    } catch (error) {
      console.error("Error updating status:", error)
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
        <div className="px-6 py-4 w-full">
          <div className="text-[20px] underline underline-offset-8 font-bold">
            Verification Account Manager
          </div>
          <Table className="bg-white rounded-lg mt-6">
            <TableHeader>
              <TableRow>
                <TableHead className="text-black font-semibold text-[15px]">
                  No.
                </TableHead>
                <TableHead className="text-black font-semibold text-[15px]">
                  User ID
                </TableHead>
                <TableHead className="text-black font-semibold text-[15px]">
                  Manager Name
                </TableHead>
                <TableHead className="text-black font-semibold text-[15px]">
                  Email
                </TableHead>
                <TableHead className="text-black font-semibold text-[15px]">
                  No KTP
                </TableHead>
                <TableHead className="text-black font-semibold text-[15px]">
                  Address
                </TableHead>
                <TableHead className="text-black font-semibold text-[15px]">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index + (currentPage - 1) * 10}>
                  <TableCell className="text-black text-[12px]">
                    {(currentPage - 1) * 10 + index + 1}
                  </TableCell>
                  <TableCell className="text-black text-[12px]">
                    {item.id}
                  </TableCell>
                  <TableCell className="text-black text-[12px]">
                    {item.full_name}
                  </TableCell>
                  <TableCell className="text-black text-[12px]">
                    {item.email}
                  </TableCell>
                  <TableCell className="text-black text-[12px]">
                    {item.no_ktp}
                  </TableCell>
                  <TableCell className="text-black text-[12px]">
                    {item.address}
                  </TableCell>
                  <TableCell className="flex gap-4">
                    <button onClick={() => handleApproval(item.id)}>
                      <img src="/images/admin/ceklis.png" />
                    </button>
                    <button onClick={() => handleReject(item.id)}>
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

export default VerificationAccount

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

import React from "react"
import Footer from "@/components/Footer"

function TransactionList() {
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
          <Table className="bg-white rounded-lg ">
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
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>294658</TableCell>
                <TableCell>Dya</TableCell>
                <TableCell>Pantai Pandawa</TableCell>
                <TableCell>Regular + Meal</TableCell>
                <TableCell>10.000.000</TableCell>
                <TableCell>Settlement</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>246803</TableCell>
                <TableCell>Jeni</TableCell>
                <TableCell>Candi Borobudur</TableCell>
                <TableCell>Regular</TableCell>
                <TableCell>10.000.000</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>294058</TableCell>
                <TableCell>Ziva</TableCell>
                <TableCell>Jatim Park 3</TableCell>
                <TableCell>Regular</TableCell>
                <TableCell>10.000.000</TableCell>
                <TableCell>Expired</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>268658</TableCell>
                <TableCell>Andy</TableCell>
                <TableCell>Pulau Komodo</TableCell>
                <TableCell>Regular + Digigit Kodomo</TableCell>
                <TableCell>8.000.000</TableCell>
                <TableCell>Canceled</TableCell>
              </TableRow>
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

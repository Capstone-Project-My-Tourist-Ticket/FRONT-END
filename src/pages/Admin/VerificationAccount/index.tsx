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

function VerificationAccount() {
  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>
      <div className="flex">
        <AdminNavbar />
        <div className="px-6 py-4 w-full">
          <div className="text-2xl underline underline-offset-8">
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
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>3</TableCell>
                <TableCell>Dya</TableCell>
                <TableCell>dya@gmail.com</TableCell>
                <TableCell>392836</TableCell>
                <TableCell>Kelapa Gading</TableCell>
                <TableCell className="flex gap-4">
                  <button>
                    <img src="/images/admin/ceklis.png" />
                  </button>
                  <button>
                    <img src="/images/admin/x.png" />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>5</TableCell>
                <TableCell>Jeni</TableCell>
                <TableCell>jeni@gmail.com</TableCell>
                <TableCell>927262</TableCell>
                <TableCell>Babelan</TableCell>
                <TableCell className="flex gap-4">
                  <button>
                    <img src="/images/admin/ceklis.png" />
                  </button>
                  <button>
                    <img src="/images/admin/x.png" />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>10</TableCell>
                <TableCell>Ziva</TableCell>
                <TableCell>ziva@gmail.com</TableCell>
                <TableCell>092638</TableCell>
                <TableCell>Harapan Indah</TableCell>
                <TableCell className="flex gap-4">
                  <button>
                    <img src="/images/admin/ceklis.png" />
                  </button>
                  <button>
                    <img src="/images/admin/x.png" />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>18</TableCell>
                <TableCell>Andy</TableCell>
                <TableCell>andy@gmail.com</TableCell>
                <TableCell>302428</TableCell>
                <TableCell>Kelapa Gading</TableCell>
                <TableCell className="flex gap-4">
                  <button>
                    <img src="/images/admin/ceklis.png" />
                  </button>
                  <button>
                    <img src="/images/admin/x.png" />
                  </button>
                </TableCell>
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
    </div>
  )
}

export default VerificationAccount

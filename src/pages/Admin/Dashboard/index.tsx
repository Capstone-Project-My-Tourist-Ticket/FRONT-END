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
import { Card, CardContent, CardDescription } from "@/components/ui/card"

import React from "react"

function Dashboard() {
  return (
    <div className="bg-[#dee2e6] ">
      <header>
        <AdminHeader />
      </header>
      <div>
        <div>
          <div className="flex">
            <AdminNavbar />
            <div className="w-full">
              <div className="underline underline-offset-8 px-6 py-4 text-2xl ">
                Dashboard
              </div>
              <div className="flex items-center justify-between px-6">
                <p className="text-center bg-white shadow-xl p-3 rounded-lg w-40">
                  Total Customer <br />
                  123
                </p>
                <p className="text-center bg-white shadow-xl p-3 rounded-lg w-40">
                  Total Manager <br />
                  123
                </p>
                <p className="text-center bg-white shadow-xl p-3 rounded-lg w-40">
                  Total Transaction <br />
                  30
                </p>
                <p className="text-center bg-white shadow-xl p-3 rounded-lg w-40">
                  Total Tour <br />
                  16
                </p>
              </div>
              <div className="bg-white mt-10 mx-6 shadow-xl rounded-lg">
                <p className="p-4">Recent Transaction</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No.</TableHead>
                      <TableHead>Booking Code</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>125896</TableCell>
                      <TableCell>Bali</TableCell>
                      <TableCell>3.000.000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>396925</TableCell>
                      <TableCell>Yogyakarta</TableCell>
                      <TableCell>2.000.000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>936503</TableCell>
                      <TableCell>Malang</TableCell>
                      <TableCell>1.500.000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <p className="pt-4 px-6">Top 5 Tour</p>
              <div className="px-6 pt-4 flex justify-between pb-6">
                <Card className="w-[150px]">
                  <img className=" rounded-lg" src="/images/admin/bali.png" />
                  <CardContent>
                    <p className="pt-4 font-bold">Bali</p>
                  </CardContent>
                  <CardDescription className="flex">
                    <img
                      className="w-[15px] ps-1"
                      src="/images/admin/pin.png"
                    />
                    <p className="ms-2">Bali</p>
                  </CardDescription>
                  <CardDescription>
                    <p className="p-1 text-red-600">Rp. 3.000.000</p>
                  </CardDescription>
                </Card>
                <Card className="w-[150px]">
                  <img className=" rounded-lg" src="/images/admin/bali.png" />
                  <CardContent>
                    <p className="pt-4 font-bold">Bali</p>
                  </CardContent>
                  <CardDescription className="flex">
                    <img
                      className="w-[15px] ps-1"
                      src="/images/admin/pin.png"
                    />
                    <p className="ms-2">Bali</p>
                  </CardDescription>
                  <CardDescription>
                    <p className="p-1 text-red-600">Rp. 3.000.000</p>
                  </CardDescription>
                </Card>
                <Card className="w-[150px]">
                  <img className=" rounded-lg" src="/images/admin/bali.png" />
                  <CardContent>
                    <p className="pt-4 font-bold">Bali</p>
                  </CardContent>
                  <CardDescription className="flex">
                    <img
                      className="w-[15px] ps-1"
                      src="/images/admin/pin.png"
                    />
                    <p className="ms-2">Bali</p>
                  </CardDescription>
                  <CardDescription>
                    <p className="p-1 text-red-600">Rp. 3.000.000</p>
                  </CardDescription>
                </Card>
                <Card className="w-[150px]">
                  <img className=" rounded-lg" src="/images/admin/bali.png" />
                  <CardContent>
                    <p className="pt-4 font-bold">Bali</p>
                  </CardContent>
                  <CardDescription className="flex">
                    <img
                      className="w-[15px] ps-1"
                      src="/images/admin/pin.png"
                    />
                    <p className="ms-2">Bali</p>
                  </CardDescription>
                  <CardDescription>
                    <p className="p-1 text-red-600">Rp. 3.000.000</p>
                  </CardDescription>
                </Card>
                <Card className="w-[150px]">
                  <img className=" rounded-lg" src="/images/admin/bali.png" />
                  <CardContent>
                    <p className="pt-4 font-bold">Bali</p>
                  </CardContent>
                  <CardDescription className="flex">
                    <img
                      className="w-[15px] ps-1"
                      src="/images/admin/pin.png"
                    />
                    <p className="ms-2">Bali</p>
                  </CardDescription>
                  <CardDescription>
                    <p className="p-1 text-red-600">Rp. 3.000.000</p>
                  </CardDescription>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

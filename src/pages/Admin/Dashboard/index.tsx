import AdminHeader from "@/components/Admin/AdminHeader";
import AdminNavbar from "@/components/Admin/AdminNavbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardDescription } from "@/components/ui/card";

import Footer from "@/components/Footer";

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
              <div className="underline underline-offset-8 px-6 py-4 text-2xl font-bold">
                Dashboard
              </div>
              <div className="flex items-center justify-between px-6">
                <p className="text-center bg-white shadow-xl p-3 rounded-lg w-40 font-semibold">
                  Total Customer <br />
                  123
                </p>
                <p className="text-center bg-white shadow-xl p-3 rounded-lg w-40 font-semibold">
                  Total Manager <br />
                  123
                </p>
                <p className="text-center bg-white shadow-xl p-3 rounded-lg w-40 font-semibold">
                  Total Transaction <br />
                  30
                </p>
                <p className="text-center bg-white shadow-xl p-3 rounded-lg w-40 font-semibold">
                  Total Tour <br />
                  16
                </p>
              </div>
              <div className="bg-white mt-10 mx-6 shadow-xl rounded-lg">
                <p className="p-4 text-lg">Recent Transaction</p>
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
              <p className="pt-4 px-6 font-semibold text-2xl">Top 5 Tour</p>
              <div className="px-6 pt-4 flex justify-between pb-6">
                {Array.from({ length: 5 }, () => (
                  <Card className="w-[150px]">
                    <img className=" rounded-lg" src="/images/admin/bali.png" />
                    <div className="px-2">
                      <CardDescription className="flex">
                        <p className="font-bold py-1 text-black text-lg">Bali</p>
                      </CardDescription>
                      <CardDescription className="flex">
                        <img className="w-[15px] ps-1" src="/images/admin/pin.png" />
                        <p className="ms-2">Bali</p>
                      </CardDescription>
                      <CardDescription>
                        <p className="p-1 text-red-600">Rp. 3.000.000</p>
                      </CardDescription>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;

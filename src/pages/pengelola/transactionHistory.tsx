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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { getTransaction } from "@/utils/apis/pengelola/api";
import { Transaction } from "@/utils/apis/pengelola/type";

function TransactionHistory() {
  const [transaction, setTransaction] = useState<Transaction[]>([]);
  /*   const [pageNumber, setPageNumber] = useState(1); */

  const fetchTransaction = async (/* pageNumber: number */) => {
    try {
      const result = await getTransaction(1);
      setTransaction(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <div className="bg-[#dee2e6] h-auto">
      <AdminHeader />
      <div className="flex">
        <AdminNavbar />
        <div className="px-6 py-4 w-full space-y-6">
          <div className=" py-4 text-2xl underline underline-offset-8 w-10/12 font-bold">
            Transaction History
          </div>
          {/*     <input
            className="border border-black rounded-lg text-slate-900 ps-2 mt-4 bg-white w-[200px] mb-4 p-1 outline-none"
            placeholder="search..."
          /> */}
          <Table className="bg-white rounded-lg ">
            <TableHeader>
              <TableRow>
                <TableHead>Tanggal Booking</TableHead>
                <TableHead>Booking ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Tour</TableHead>
                <TableHead>Tour Package</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transaction &&
                transaction.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.created_at}</TableCell>
                    <TableCell>{item.booking_id}</TableCell>
                    <TableCell>{item.full_name}</TableCell>
                    <TableCell>{item.tour.tour_name}</TableCell>
                    <TableCell>{item.package.package_name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.package.price}</TableCell>
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
                  <PaginationLink className="bg-white border border-black" href="#">
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
  );
}

export default TransactionHistory;

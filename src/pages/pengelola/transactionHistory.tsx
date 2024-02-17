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
import { useEffect, useState } from "react";
import { getTransaction } from "@/utils/apis/pengelola/api";
import { Transaction } from "@/utils/apis/pengelola/type";
import Pagination from "@/components/Pagination";

function TransactionHistory() {
  const [transaction, setTransaction] = useState<Transaction[]>([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState<number>(0);

  const fetchTransaction = async (pageNumber: number) => {
    try {
      const result = await getTransaction(pageNumber);
      setTransaction(result.data);
      setTotalPage(result.total_page)
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = (data :{ selected: number }) => {
    setPageNumber(data.selected + 1);
  };


  useEffect(() => {
    fetchTransaction(pageNumber);
  }, [pageNumber]);

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
          <footer className="pt-10 flex justify-center">
            <Pagination totalPage={totalPage} page={pageNumber} handlePageClick={handlePageClick}/>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;

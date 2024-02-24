import AdminHeader from "@/components/Admin/AdminHeader";
import AdminNavbar from "@/components/Admin/AdminNavbar";
import Footer from "@/components/Footer";
import { Card, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axiosWithConfig from "@/utils/apis/axiosWithConfig";
import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Tour {
  id: number;
  city_id: number;
  user_id: number;
  tour_name: string;
  description: string;
  image: string;
  thumbnail: string;
  address: string;
  latitude: number;
  longitude: number;
  created_at: string;
  updated_at: string;
  city: {
    id: number;
    city_name: string;
    image: string;
    thumbnail: string;
  };
  package: {
    price: number;
  };
  report_count: number;
}

function TourList() {
  const [data, setData] = useState<Tour[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://benarja.my.id/tours?page=${currentPage}&limit=8`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonResponse = await response.json();

      if (jsonResponse.data && Array.isArray(jsonResponse.data)) {
        setData(jsonResponse.data);
        setTotalPages(jsonResponse.total_page);
      } else {
        console.error("API response does not contain an array:", jsonResponse);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [currentPage, totalPages]);

  const deleteTour = async (id: number) => {
    try {
      await axiosWithConfig.delete(`https://benarja.my.id/tours/${id}`);
      fetchData();
    } catch (error) {
      console.error("Failed to delete city", error);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>
      <div className="flex">
        <AdminNavbar />
        <div className="px-6 py-4 w-full">
          <div className="text-[20px] underline underline-offset-8 font-bold">
            Tour List
          </div>
          <div className="py-4 flex flex-wrap gap-x-5 gap-y-5">
            {data.map((item, index) => (
              <Card className="w-[230px]  relative drop-shadow-xl " key={index}>
                <button className="absolute top-0 right-0 p-2 z-10">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="absolute top-0 right-0 p-2">
                        <img src="/images/admin/toggle.png" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Action</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => deleteTour(item.id)}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <img src="/images/admin/toggle.png" />
                </button>
                <Link to={`/admin-tour/${item.id}`}>
                  <img className="w-[250px] h-[130px]" src={item.image} />
                  <div className="p-2">
                    <CardDescription className="flex justify-between ">
                      <p className="pt-3 pb-1 font-bold text-black text-[14px]">
                        {item.tour_name}
                      </p>
                      <p className="text-red-600 pt-3 text-[10px] font-semibold">
                        Report {item.report_count}
                      </p>
                    </CardDescription>
                    <CardDescription className="flex py-2 items-center">
                      <img
                        className="w-[15px] h-[15px] ps-1"
                        src="/images/admin/pin.png"
                      />
                      <p className="ms-2 text-[12px]">{item.city.city_name}</p>
                    </CardDescription>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
          <Pagination className="pt-5">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TourList;

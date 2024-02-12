import AdminHeader from "@/components/Admin/AdminHeader";
import AdminNavbar from "@/components/Admin/AdminNavbar";
import { Card, CardDescription } from "@/components/ui/card";
import { useState } from "react";

function MyTour() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>
      <div className="flex">
        <AdminNavbar />
        <div className="px-6 py-4 w-full">
          <div className="flex justify-between items-center">
            <p className="text-2xl underline underline-offset-8 font-bold">My Tour</p>
            <button className="bg-slate-900 text-white w-32 py-2 rounded-lg mt-3 ">Add Tour</button>
          </div>

          <div className="py-8 flex justify-between gap-4">
            <Card className="w-[250px] relative">
              <button onClick={handleDropdownToggle} className="absolute top-0 right-0 p-2 z-10">
                {isDropdownOpen && (
                  <div className="absolute top-12 right-1 bg-white rounded-md shadow-md p-2">
                    <div className="flex flex-col space-y-1">
                      <button className="text-start text-sm">Edit</button>
                      <button className="text-start text-sm">Delete</button>
                    </div>
                  </div>
                )}

                <p className="bg-white text-lg px-2 rounded-xl">...</p>
              </button>
              <img className=" rounded-lg" src="/images/admin/bali.png" />
              <div className="p-2">
                <CardDescription className="flex justify-between ">
                  <p className="pt-3 font-bold text-black text-lg">Bali</p>
                  <p className="text-red-600 pt-3 text-xs">Report 40</p>
                </CardDescription>
                <CardDescription className="flex py-2">
                  <img className="w-[15px] ps-1" src="/images/admin/pin.png" />
                  <p className="ms-2 ">Bali</p>
                </CardDescription>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTour;

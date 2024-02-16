import AdminHeader from "@/components/Admin/AdminHeader";
import AdminNavbar from "@/components/Admin/AdminNavbar";
import { Card, CardDescription } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { deleteTour, getMyTourPengelola } from "@/utils/apis/pengelola/api";
import { IMyTour } from "@/utils/apis/pengelola/type";
import { MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyTour() {
  const [myTour, setMyTour] = useState<IMyTour[]>([]);
  const { toast } = useToast();

  const fetchMyTour = async () => {
    try {
      const result = await getMyTourPengelola();
      setMyTour(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTour = async (id : number) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    try {
  if (isConfirmed) {
      const result = await deleteTour(id);
      fetchMyTour();
      toast({
        description: result.message,
      });
    }
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchMyTour();
  }, []);

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
            <Link to={"/addtour"}>
              <button className="bg-slate-900 text-white w-32 py-2 rounded-lg mt-3 ">
                Add Tour
              </button>
            </Link>
          </div>

          <div className="py-8 md:grid-cols-3 grid grid-cols-4 gap-10">
            {myTour &&
              myTour.map((item, index) => (
                <Card className="w-[250px] relative" key={index}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="absolute top-1 right-1 bg-white text-center m-1 rounded-lg flex cursor-pointer">
                        <MoreHorizontal />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-2 mr-6">
                      <Link to={`/edittour/${item.id}`}>
                      <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                      </Link>
                      <DropdownMenuSeparator />
                      
                      <DropdownMenuItem className="cursor-pointer" onClick={()=> handleDeleteTour(item.id)}>Delete</DropdownMenuItem>
                     
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link to={`/detailmytour/${item.id}`}>
                    <img className=" rounded-lg w-full h-44 " src={item.thumbnail} />
                  </Link>
                  <div className="p-2">
                    <CardDescription className="flex justify-between ">
                      <p className="pt-3 font-bold text-black text-lg">{item.tour_name}</p>
                    </CardDescription>
                    <CardDescription className="flex py-2">
                      <img className="w-[15px] ps-1" src="/images/admin/pin.png" />
                      <p className="ms-2 ">{item.city.city_name}</p>
                    </CardDescription>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTour;

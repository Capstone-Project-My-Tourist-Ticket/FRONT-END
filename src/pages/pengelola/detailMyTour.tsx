import AdminHeader from "@/components/Admin/AdminHeader";
import { useEffect, useState } from "react";
import { Dot, MoreHorizontal, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavbar from "@/components/Admin/AdminNavbar";
import Footer from "@/components/Footer";
import { getDetailTours, getPackages } from "@/utils/apis/user/api";
import { GetPackages, GetTours } from "@/utils/apis/user/type";
import { formattedAmount } from "@/utils/formattedAmount";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DetailMyTour() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState<GetTours>();
  const [packages, setPackages] = useState<GetPackages[]>([]);

  const fetchDetailTour = async () => {
    try {
      const result = await getDetailTours(id as string);
      setDetail(result.data);
      console.log(result.data);
      const resultPackages = await getPackages(`${result.data.id}`);
      setPackages(resultPackages.data);
      console.log(resultPackages.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigateAddPackage = () => {
    navigate("/addPackage", {
      state: { data: detail?.id },
    });
  };

  useEffect(() => {
    if (id) {
      fetchDetailTour();
    }
  }, [id]);

  return (
    <div className="bg-[#dee2e6]">
      <AdminHeader />
      <div className="flex">
        <AdminNavbar />
        <div className="p-6">
          {detail && (
            <div className="flex">
              <img className="w-[200px] h-32" src={detail.thumbnail} />
              <div className="px-4 items-center text-center">
                <p className="font-bold underline underline-offset-8 text-xl">{detail.tour_name}</p>
                <p className="text-center">
                  {detail.city.city_name} <br />
                  {detail.address} <br />
                  <div className="flex justify-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        fill={"yellow"}
                        className="stroke-slate-300 drop-shadow-sm"
                        size={20}
                      />
                    ))}
                  </div>
                </p>
              </div>
            </div>
          )}
          <div className="w-[800px]">
            <div className="flex justify-end">
              <button
                className="bg-black rounded-lg px-4 py-2 mt-4 font-semibold text-white"
                onClick={handleNavigateAddPackage}
              >
                Add Package
              </button>
            </div>
            {packages &&
              packages.map((item, index) => (
                <div className="bg-white rounded-lg drop-shadow-xl p-6 px-6 mt-6" key={index}>
                  <div className="flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="absolute top-1 right-1 bg-white text-center m-1 rounded-lg flex cursor-pointer">
                          <MoreHorizontal />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="mt-2 mr-6">
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <h1 className="font-bold text-base pb-4">{item.package_name}</h1>
                  <p className="pb-4 text-base">Includes</p>
                  <div className="flex items-center justify-between">
                    <div className="flex-col">
                      {item &&
                        item.benefits.map((service, index) => (
                          <div className="flex items-center" key={index}>
                            <Dot />
                            <span className="font-semibold">
                              {service.benefit.charAt(0).toUpperCase() + service.benefit.slice(1)}
                            </span>
                          </div>
                        ))}
                    </div>
                    <p className="text-red-500 text-xl">{formattedAmount(item.price)}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailMyTour;

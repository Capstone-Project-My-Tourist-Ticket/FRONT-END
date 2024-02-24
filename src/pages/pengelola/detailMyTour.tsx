import AdminHeader from "@/components/Admin/AdminHeader";
import { useEffect, useState } from "react";
import { Dot, MoreHorizontal, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavbar from "@/components/Admin/AdminNavbar";
import Footer from "@/components/Footer";
import {
  getAllReview,
  getDetailTours,
  getPackages,
} from "@/utils/apis/user/api";
import { GetPackages, GetReview, GetTours } from "@/utils/apis/user/type";
import { formattedAmount } from "@/utils/formattedAmount";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { deletePackage } from "@/utils/apis/pengelola/api";

function DetailMyTour() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState<GetTours>();
  const [packages, setPackages] = useState<GetPackages[]>([]);
  const [review, setReview] = useState<GetReview>();
  const { toast } = useToast();

  const fetchDetailTour = async () => {
    try {
      const result = await getDetailTours(id as string);
      setDetail(result.data);
      const resultPackages = await getPackages(`${result.data.id}`);
      setPackages(resultPackages.data);
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const fetchAllReview = async () => {
    try {
      const result = await getAllReview(id as string);
      setReview(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePackage = async (id: number) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    try {
      if (isConfirmed) {
        const result = await deletePackage(id);
        fetchDetailTour();
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
  const handleNavigateAddPackage = () => {
    navigate("/addPackage", {
      state: { data: detail?.id },
    });
  };

  useEffect(() => {
    if (id) {
      fetchDetailTour();
    }
    fetchAllReview();
  }, [id]);

  return (
    <div className="bg-[#dee2e6]">
      <AdminHeader />
      <div className=" flex">
        <AdminNavbar />
        <div className="p-6 ml-52">
          {detail && (
            <div className="flex">
              <img className="w-[200px] h-32" src={detail.thumbnail} />
              <div className="px-4 items-center text-center">
                <p className="font-bold underline underline-offset-8 text-xl">
                  {detail.tour_name}
                </p>
                <p className="text-center">
                  {detail.city.city_name} <br />
                  {detail.address} <br />
                  <div className="flex justify-center">
                    {Array.from({ length: 5 }, (_, index) => {
                      const starValue = index + 1;
                      let fill = "gray";

                      if (starValue <= (review?.average_review || 0)) {
                        fill = "yellow";
                      } else if (
                        starValue - 0.5 <=
                        (review?.average_review || 0)
                      ) {
                        fill = "yellow";
                      }

                      return (
                        <Star
                          key={index}
                          fill={fill}
                          className="stroke-slate-300 drop-shadow-sm"
                          size={20}
                        />
                      );
                    })}
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
                <div
                  className="bg-white rounded-lg drop-shadow-xl p-6 px-6 mt-6"
                  key={index}
                >
                  <div className="flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="absolute top-1 right-1 bg-white text-center m-1 rounded-lg flex cursor-pointer">
                          <MoreHorizontal />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="mt-2 mr-6">
                        <DropdownMenuItem
                          className="cursor-pointer"
                          onClick={() => handleDeletePackage(item.id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <h1 className="font-bold text-base pb-4">
                    {item.package_name}
                  </h1>
                  <p className="pb-4 text-base">Includes</p>
                  <div className="flex items-center justify-between">
                    <div className="flex-col">
                      {item &&
                        item.benefits.map((service, index) => (
                          <div className="flex items-center" key={index}>
                            <Dot />
                            <span className="font-semibold">
                              {service.benefit.charAt(0).toUpperCase() +
                                service.benefit.slice(1)}
                            </span>
                          </div>
                        ))}
                    </div>
                    <p className="text-red-500 text-xl">
                      {formattedAmount(item.price)}
                    </p>
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

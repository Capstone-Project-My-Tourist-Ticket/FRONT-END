import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { MapPin } from "lucide-react";
import { GetTours } from "@/utils/apis/user/type";
import { getTours } from "@/utils/apis/user/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formattedAmount } from "@/utils/formattedAmount";

const CarouselHome = () => {
  const [tours, setTours] = useState<GetTours[]>([]);

  const fetchTours = async (pageNumber: number, limit: number) => {
    try {
      const result = await getTours(pageNumber, limit);
      setTours(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours(1, 10);
  }, [1]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full"
    >
      <CarouselContent>
        {tours &&
          tours.map((item, index) => (
            <CarouselItem className="basis-1/4" key={index}>
              <Card className="mb-8">
                <CardContent className="p-1">
                  <div className="text-3xl font-semibold">
                    <Link to={`/tour/${item.id}`}>
                      <img src={item.thumbnail} className="h-52 w-full rounded-sm" />
                    </Link>
                  </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-col p-2 space-y-1">
                        <p className="font-semibold text-lg">{item.tour_name}</p>
                        <div className="flex gap-2 items-center text-sm ">
                      <MapPin size={15} />
                      <p className="text-slate-500">
                        {item.city.city_name.charAt(0).toUpperCase() + item.city.city_name.slice(1)}
                      </p> 
                        </div> 
                      </div>
                      < p className="p-4 text text-lg text text-red-500 font-semibold">{formattedAmount(item.package.price)}</p>                
                   </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselHome;

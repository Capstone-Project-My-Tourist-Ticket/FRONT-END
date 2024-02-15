import { GetTours } from "@/utils/apis/user/type";
import { Card, CardContent } from "./ui/card";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  data: GetTours;
}

const CardTour = (props: Props) => {
  const { data } = props;
  return (
    <Card className="mb-8">
      <CardContent className="p-1">
        <div className="text-3xl font-semibold">
          <Link to={`/tour/${data.id}`}>
            <img src={data.thumbnail} className="h-52 w-full rounded-sm" />
          </Link>
        </div>
        <div className="flex-col p-2 space-y-1">
          <div className="flex justify-between">
            <p>{data.tour_name}</p>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  fill={"yellow"}
                  className="stroke-slate-300 drop-shadow-sm"
                  size={20}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center text-sm ">
            <MapPin size={15} />
            <p className="text-slate-500">
              {data.city.city_name.charAt(0).toUpperCase() + data.city.city_name.slice(1)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardTour;

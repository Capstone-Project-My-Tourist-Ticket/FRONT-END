import { GetTours } from "@/utils/apis/user/type";
import { Card, CardContent } from "./ui/card";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { formattedAmount } from "@/utils/formattedAmount";

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
        <div className="flex items-center justify-between">
                      <div className="flex-col p-2 space-y-1">
                        <p className="font-semibold text-lg">{data.tour_name}</p>
                        <div className="flex gap-2 items-center text-sm ">
                      <MapPin size={15} />
                      <p className="text-slate-500">
                        {data.city.city_name.charAt(0).toUpperCase() + data.city.city_name.slice(1)}
                      </p> 
                        </div> 
                      </div>
                      < p className="p-4 text text-lg text text-red-500 font-semibold">{formattedAmount(data.package.price)}</p>                
                   </div>
      </CardContent>
    </Card>
  );
};

export default CardTour;

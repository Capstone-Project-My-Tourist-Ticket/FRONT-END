import { Card, CardContent } from "./ui/card";
import { MapPin, Star } from "lucide-react";

const CardTour = () => {
  return (
    <Card className="mb-8">
      <CardContent className="p-1">
        <div className="text-3xl font-semibold">
          <img
            src={`https://source.unsplash.com/1200x800/?tour,destination,sea`}
            className="h-50 w-full rounded-sm"
          />
        </div>
        <div className="flex-col p-2 space-y-1">
          <div className="flex justify-between">
            <p>Ice Age Dingin</p>
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
            <p className="text-slate-500">Lampung</p>
          </div>
          <div className="text-xl text-orange-500">Rp.1000</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardTour;

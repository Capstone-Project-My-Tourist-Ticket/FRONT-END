import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { MapPin, Star } from "lucide-react";

const CarouselHome = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 10 }, (_, index) => (
          <CarouselItem className="basis-1/4" key={index}>
            <Card className="mb-8">
              <CardContent className="p-1">
                <div className="text-3xl font-semibold">
                  <img
                    src={`https://source.unsplash.com/1200x80${index}/?tour,destination,sea`}
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselHome;

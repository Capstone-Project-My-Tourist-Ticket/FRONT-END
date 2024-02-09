import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { MapPin, Star } from "lucide-react";

const ReviewsComp = () => {
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
              <CardContent className="p-1 border-2 rounded-lg shadow-lg">
                <div className="flex-col p-2 space-y-1">
                  <div className="flex justify-between">
                    <p className="font-semibold text-lg">
                      4.5 <span className="text-slate-500">/5.0</span>
                    </p>
                    <p>31 Dec 2023</p>
                  </div>

                  <p className="font-semibold text-lg">Arja Cihuy</p>
                  <div className=" text-slate-500">Tempatnya Keren</div>
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

export default ReviewsComp;

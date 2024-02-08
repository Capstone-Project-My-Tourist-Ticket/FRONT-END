import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

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
            <Card>
              <CardContent className="p-1">
                <span className="text-3xl font-semibold">
                  <img
                    src={`https://source.unsplash.com/1200x80${index}/?tour,destination,sea`}
                    className="h-80 w-full"
                  />
                </span>
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

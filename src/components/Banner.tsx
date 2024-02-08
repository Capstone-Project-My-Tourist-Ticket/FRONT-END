import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";

const CarouselTour = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }, (_, index) => (
          <CarouselItem className="basis-full" key={index}>
            <Card>
              <CardContent className="p-0">
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
    </Carousel>
  );
};

export default CarouselTour;

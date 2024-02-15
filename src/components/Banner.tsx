import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.jpg";

const CarouselTour = () => {
  const foto = [banner1, banner2];
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
        {foto &&
          foto.map((item, index) => (
            <CarouselItem className="basis-full" key={index}>
              <Card className="mb-8">
                <CardContent className="p-0">
                  <span className="text-3xl font-semibold">
                    <img src={item} className="h-[400px] w-full" />
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

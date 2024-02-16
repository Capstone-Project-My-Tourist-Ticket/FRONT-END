import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import {  UserReview } from "@/utils/apis/user/type";

interface Props {
  data : UserReview[]
}

const ReviewsComp = (props: Props) => {
  const {data} = props;
  const currentDate = (created_at: string)  => new Date(created_at).toDateString();
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {data && data.map((item, index) => (
          <CarouselItem className="basis-1/4" key={index}>
            <Card className="mb-8">
              <CardContent className="p-1 border-2 rounded-lg shadow-lg">
                <div className="flex-col p-2 space-y-1">
                  <div className="flex justify-between">
                    <p className="font-semibold text-lg">
                      {item.start_rate.toFixed(1)} <span className="text-slate-500">/5.0</span>
                    </p>
                    <p>{currentDate(item.created_at)}</p>
                  </div>
                  <p className="font-semibold text-lg">{item.user.full_name}</p>
                  <p className=" text-slate-500">{item.text_review}</p>
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

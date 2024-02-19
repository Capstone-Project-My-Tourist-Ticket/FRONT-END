import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createReview } from "@/utils/apis/user/api";
import { IReviewType, reviewSchema } from "@/utils/apis/user/type";
import { useAuth } from "@/utils/contexts/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
interface Props {
  booking_id: string;
}

const DialogReview = (props: Props) => {
  const { user } = useAuth();
  const { booking_id } = props;
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<IReviewType>({
    resolver: zodResolver(reviewSchema),
  });
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarSelection = (starCount: number) => {
    setSelectedStars(starCount);
    setValue("star_rate", starCount);
  };
  const [open, setOpen] = useState<boolean>(false);
  const reviewHandler = async (body: IReviewType) => {
    try {
      const result = await createReview(body, booking_id);
      toast({
        description: result?.message,
      });
      setOpen(false);
    } catch (error: any) {
      toast({
        description: error?.message,
        variant: "destructive",
      });
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-orange-500 text-white w-32 py-2 rounded-lg mt-3 ">
        Give Review
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-bold pt-5 px-7">
            Ice Age Artice Adventure
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <form
            onSubmit={handleSubmit(reviewHandler)}
            className="flex flex-col pt-10 pb-5 w-97 items-center space-y-6"
          >
            <div className="flex gap-5">
              <img
                src={
                  user.image || "https://via.placeholder.com/200?text=No+Image"
                }
                alt="profile-user"
                className="rounded-full border shadow-sm size-20"
              />
              <div className="text-start space-y-3">
                <p className="text-lg font-bold">{user.full_name}</p>
                <p className="text-sm text-slate-500">
                  Posting for the public, your comment can be seen any others
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <>
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none"
                    onClick={() => handleStarSelection(star)}
                    className="cursor-pointer"
                  >
                    <path
                      d="M8.50195 32.136L23.79 47.034L20.202 68.016L39 58.11L57.798 68.016L54.21 47.034L69.4979 32.136L48.438 29.094L39 10.062L29.562 29.094L8.50195 32.136Z"
                      fill={star <= selectedStars ? "#FFB703" : "gray"}
                    />
                  </svg>
                </>
              ))}
              <p className="text-sm text-red-500 ">
                {errors.star_rate && errors.star_rate.message}
              </p>
            </div>
            <textarea
              className="border-2 border-slate-300 rounded-md w-[480px] outline-none p-3 resize-none text-slate-900"
              placeholder="Wrie your review here!!!"
              {...register("text_review")}
            />
            <p className="text-sm text-red-500 ">
              {errors.text_review && errors.text_review.message}
            </p>
            <DialogFooter className="flex gap-5">
              <button
                className="bg-orange-500 text-white font-semibold w-[490px] py-2 rounded-lg mt-3 shadow-lg"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <p className="flex items-center gap-x-3 text-sm">
                    <Loader2 className={"animate-spin text-xl "} /> Please wait
                  </p>
                ) : (
                  "Submit"
                )}
              </button>
            </DialogFooter>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default DialogReview;

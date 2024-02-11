import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Star } from "lucide-react";
const DialogReview = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-orange-500 text-white w-32 py-2 rounded-lg mt-3 ">
        Give Review
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-bold pt-5 px-7">Ice Age Artice Adventure</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="flex flex-col pt-10 pb-5 w-97 items-center space-y-6">
            <div className="flex gap-5">
              <img
                src={"https://via.placeholder.com/150"}
                alt="profile-user"
                className="rounded-full border shadow-sm size-20"
              />
              <div className="text-start space-y-3">
                <p className="text-lg font-bold">Jhon</p>
                <p className="text-sm text-slate-500">
                  Posting for the public, your comment can be seen any others
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  fill={"white"}
                  className="stroke-yellow-200 drop-shadow-sm"
                  size={50}
                />
              ))}
            </div>
            <textarea
              className="border-2 border-slate-300 rounded-md w-[480px] outline-none p-3 resize-none text-slate-900"
              placeholder="Wrie your review here!!!"
            />
            <DialogFooter className="flex gap-5">
              <button className="bg-white text-black font-semibold w-32 py-2 rounded-lg mt-3 border shadow-lg">
                Cancel
              </button>
              <button className="bg-orange-500 text-white font-semibold w-32 py-2 rounded-lg mt-3 shadow-lg">
                Submit
              </button>
            </DialogFooter>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default DialogReview;

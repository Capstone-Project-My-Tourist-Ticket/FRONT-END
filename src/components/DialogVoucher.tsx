import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DialogVoucher = () => {
  return (
    <Dialog>
      <DialogTrigger className="border w-full p-2 rounded-md">See Promos / Voucher</DialogTrigger>
      <DialogContent className="max-w-xl pb-10">
        <DialogHeader>
          <DialogTitle className="font-bold py-5 px-7">Promo & Voucher Code</DialogTitle>
        </DialogHeader>
        <DialogClose className="space-y-4 overflow-y-scroll max-h-[400px] px-10 ">
          {Array.from({ length: 10 }, (_, index) => (
            <div
              className="flex flex-col w-97 items-start space-y-3 border rounded-lg w-full text-left"
              key={index}
            >
              <p className="font-bold px-3 py-3 border-b w-full text-lg">Diskon Hari Raya</p>
              <div className="flex-col space-y-3">
                <p className="px-3">Diskon Senilai Rp. 50.000</p>
                <p className="px-3 pb-3 text-sm text-slate-500">Valid s.d 16 Feb 2024</p>
              </div>
            </div>
          ))}
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DialogVoucher;

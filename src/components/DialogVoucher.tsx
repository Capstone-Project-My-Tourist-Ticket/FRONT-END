import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DialogVoucher = () => {
  return (
    <Dialog>
      <DialogTrigger className="border w-full p-2 rounded-md">See Promos / Voucher</DialogTrigger>
      <DialogContent className="p-8">
        <DialogHeader>
          <DialogTitle className="font-bold">Promo & Voucher Code</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogVoucher;

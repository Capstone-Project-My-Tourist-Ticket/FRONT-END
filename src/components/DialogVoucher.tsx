import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GetVoucher } from "@/utils/apis/user/type";
import { useState } from "react";
interface Props {
  data: GetVoucher[];
  onSelectVoucher: (selectedData: Voucher) => void;
}
interface Voucher {
  id: number;
  discount: number;
  nama : string
}

const DialogVoucher = (props: Props) => {
  const { data, onSelectVoucher } = props;
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);
  const handleSelectVoucher = (item: Voucher) => {
    onSelectVoucher(item);
    setSelectedVoucher(item);
  };
  return (
    <Dialog>
      <DialogTrigger className={`border w-full p-2 rounded-md ${selectedVoucher ? 'border-blue-500 border-2 font-semibold' : ''}`}>
        {selectedVoucher ? selectedVoucher.nama : 'See Promos / Voucher'}
      </DialogTrigger>
      <DialogContent className="max-w-xl pb-10">
        <DialogHeader>
          <DialogTitle className="font-bold py-5 px-7">Promo & Voucher Code</DialogTitle>
        </DialogHeader>
        <DialogClose className="space-y-4 overflow-y-scroll max-h-[400px] px-10 ">
          {data &&
            data.map((item, index) => (
              <div
                className="flex flex-col w-97 items-start space-y-3 border rounded-lg w-full text-left"
                key={index}
                onClick={() => handleSelectVoucher({ discount: item.discount_value, id: item.id, nama: item.name })}
              >
                <p className="font-bold px-3 py-3 border-b w-full text-lg">{item.name}</p>
                <div className="flex-col space-y-3">
                  <p className="px-3">{item.description}</p>
                  <p className="px-3 pb-3 text-sm text-slate-500">{item.expired_voucher}</p>
                </div>
              </div>
            ))}
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DialogVoucher;

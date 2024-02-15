import AdminHeader from "@/components/Admin/AdminHeader";
import AdminNavbar from "@/components/Admin/AdminNavbar";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { createPackage } from "@/utils/apis/pengelola/api";
import { IAddPackage, addPackageSchema } from "@/utils/apis/pengelola/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

function AddPackage() {
  const { toast } = useToast();
  const { state } = useLocation();
  console.log(state);
  const [benefitsList, setBenefitsList] = useState<string[]>([""]);
  console.log(benefitsList);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IAddPackage>({
    resolver: zodResolver(addPackageSchema),
  });
  const handleAddTour = async (body: IAddPackage) => {
    body.benefits = benefitsList;
    try {
      const result = await createPackage(body, state.data);

      toast({
        description: result.message,
      });
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const handleAddBenefits = () => {
    setBenefitsList([...benefitsList, ""]);
  };
  const handleRemoveBenefits = (index: number) => {
    const list = [...benefitsList];
    list.splice(index, 1);
    setBenefitsList(list);
  };

  const handleBenefitsChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const list = [...benefitsList];
    list[index] = value;
    setBenefitsList(list);
  };
  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>

      <div className="flex">
        <AdminNavbar />
        <div className="space-y-5 px-6 pt-4 pb-10 ml-80 mx-16">
          <p className="text-2xl py-6 font-bold">Add Package</p>
          <form onSubmit={handleSubmit(handleAddTour)}>
            <div className="flex flex-col space-y-8">
              <Input
                placeholder="Package"
                className="border border-black focus-visible:ring-0"
                {...register("package_name")}
              />
              <p className="text-sm text-red-500 ">
                {errors.package_name && errors.package_name.message}
              </p>
              {benefitsList.map((benefit, index) => (
                <div className="flex-col items-center space-y-4" key={index}>
                  <div className="flex gap-3">
                    <Input
                      placeholder="Services list"
                      className="border border-black focus-visible:ring-0"
                      value={benefit}
                      onChange={(e) => handleBenefitsChange(e, index)}
                    />
                    {benefitsList.length > 1 && (
                      <button
                        onClick={() => handleRemoveBenefits(index)}
                        className="bg-red-500 text-white p-2 text-sm px-4 rounded-md"
                        type="button"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  {benefitsList.length - 1 === index && benefitsList.length < 5 && (
                    <button
                      onClick={handleAddBenefits}
                      className="bg-black text-white p-2 text-sm px-4 rounded-md"
                      type="button"
                    >
                      {isSubmitting ? (
                        <p className="flex items-center gap-x-3 text-sm">
                          <Loader2 className={"animate-spin text-xl "} /> Please wait
                        </p>
                      ) : (
                        "Add Tour"
                      )}
                    </button>
                  )}
                </div>
              ))}
              <Input
                placeholder="Jumlah Tiket"
                className="border border-black focus-visible:ring-0"
                {...register("jumlah_tiket", { valueAsNumber: true })}
              />
              <p className="text-sm text-red-500 ">
                {errors.jumlah_tiket && errors.jumlah_tiket.message}
              </p>
              <Input
                placeholder="Price"
                className="border border-black focus-visible:ring-0"
                {...register("price", { valueAsNumber: true })}
              />
              <button className="bg-black rounded-lg text-white w-[500px] p-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPackage;

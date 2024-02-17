import AdminHeader from "@/components/Admin/AdminHeader";
import AdminNavbar from "@/components/Admin/AdminNavbar";
import Map from "@/components/Map";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { createTour } from "@/utils/apis/pengelola/api";
import { IAddTourType, tourSchema } from "@/utils/apis/pengelola/type";
import { getCityAddTour } from "@/utils/apis/user/api";
import { GetCity } from "@/utils/apis/user/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, FileImage, Loader2, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const AddTour = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState<GetCity[]>([]);
  const [thumbnail, setThumbnail] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    resetField,
    formState: { isSubmitting, errors },
  } = useForm<IAddTourType>({
    resolver: zodResolver(tourSchema),
  });

  const handleAddTour = async (body: IAddTourType) => {
    try {
      const result = await createTour(body);
      toast({
        description: result.message,
      });
      navigate("/mytour");
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };
  const fetchCity = async () => {
    try {
      const result = await getCityAddTour();
      setCity(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCity();
  }, []);

  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>

      <div className="flex">
        <AdminNavbar />
        <div className="space-y-5 px-6 pt-4 pb-10 mx-16">
          <div className="text-2xl py-6 font-bold space-y-4 ">
            <Link to={"/mytour"}>
              <div className="flex gap-2 items-center">
                <ArrowLeft className="text-slate-500" />
                <p className="text-md text-slate-500 font-semi-bold">Back</p>
              </div>
            </Link>
            <p>Add Tour</p>
          </div>
          <form onSubmit={handleSubmit(handleAddTour)}>
            <div className="flex flex-col space-y-8">
              <Input
                placeholder="Tour Name"
                className="border border-black focus-visible:ring-0"
                {...register("tour_name")}
              />
              <p className="text-sm text-red-500 ">
                {errors.tour_name && errors.tour_name.message}
              </p>
              <select
                id="city"
                className=" w-full px-4 py-2  rounded-md outline-none border border-black overflow-y-scroll"
                {...register("city_id", { valueAsNumber: true })}
              >
                <option value={""} disabled hidden selected>
                  Choose city
                </option>
                {city &&
                  city.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.city_name.charAt(0).toUpperCase() + item.city_name.slice(1)}
                    </option>
                  ))}
              </select>
              <p className="text-sm text-red-500 ">{errors.city_id && errors.city_id.message}</p>
              <Map error={errors} setValue={setValue} draggable={true} width={800} />
              <Input
                placeholder="Address"
                className="border border-black focus-visible:ring-0"
                {...register("address")}
              />
              <p className="text-sm text-red-500 ">{errors.address && errors.address.message}</p>
              <Textarea
                className="w-full outline-none"
                placeholder="Description"
                {...register("description")}
              />
              <p className="text-sm text-red-500 ">
                {errors.description && errors.description.message}
              </p>
              <Input
                placeholder="Thumbnail"
                type="file"
                className="border border-black"
                {...register("thumbnail", {
                  onChange: (e) => setThumbnail(URL.createObjectURL(e.target.files[0])),
                })}
              />
              {thumbnail ? (
                <img src={thumbnail} alt="thumbnail" className="size-32" />
              ) : (
                <>
                  <span className="text-xs">Upload thumbnail</span>
                </>
              )}
              <div className="flex items-center text-xs gap-x-2 ">
                <FileImage className="text-[#1475cf] size-4" />
                {getValues("thumbnail")?.length > 0 ? (
                  <>
                    {JSON.stringify(getValues("thumbnail")[0]?.name)}
                    <Trash2
                      className="size-4 text-red-500 cursor-pointer"
                      onClick={() => {
                        return resetField("thumbnail"), setThumbnail("");
                      }}
                    />
                  </>
                ) : (
                  "No file selected"
                )}
              </div>
              <p className="text-sm text-red-500">{errors.thumbnail?.message as string}</p>
              <Input
                placeholder="Image"
                type="file"
                className="border border-black"
                {...register("image", {
                  onChange: (e) => setImage(URL.createObjectURL(e.target.files[0])),
                })}
              />
              {image ? (
                <img src={image} alt="image" className="size-32" />
              ) : (
                <>
                  <span className="text-xs">Upload Image</span>
                </>
              )}
              <div className="flex items-center text-xs gap-x-2 ">
                <FileImage className="text-[#1475cf] size-4" />
                {getValues("image")?.length > 0 ? (
                  <>
                    {JSON.stringify(getValues("image")[0]?.name)}
                    <Trash2
                      className="size-4 text-red-500 cursor-pointer"
                      onClick={() => {
                        return resetField("image"), setImage("");
                      }}
                    />
                  </>
                ) : (
                  "No file selected"
                )}
              </div>
              <p className="text-sm text-red-500">{errors.image?.message as string}</p>
              <button
                className="flex justify-center items-center bg-black rounded-lg text-white w-full p-2"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <p className="flex items-center gap-x-3 text-sm">
                    <Loader2 className={" animate-spin text-xl "} /> Please wait
                  </p>
                ) : (
                  "Add Tour"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTour;

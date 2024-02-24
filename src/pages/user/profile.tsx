import Layout from "@/components/Layout";
import SideBarUser from "@/components/SideBarUser";
import { useToast } from "@/components/ui/use-toast";
import { updateUser } from "@/utils/apis/user/api";
import { IUserType, userSchema } from "@/utils/apis/user/type";
import { useAuth } from "@/utils/contexts/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { user, fetchUser } = useAuth();
  const [image, setImage] = useState<string>("");
  const { toast } = useToast();
  const [formDisabled, setformDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      full_name: "",
      phone_number: "",
      email: "",
      password: "",
      image: "",
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setValue("full_name", user?.full_name as string);
    setValue("phone_number", user?.phone_number as string);
    setValue("email", user?.email as string);
    setImage(user?.image);
  }, [user]);

  const handleUpdateUser = async (body: IUserType) => {
    try {
      const result = await updateUser(body);
      toast({
        description: result.message,
      });
      fetchUser();
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="bg-[#F4F7FE] w-full py-14">
        <div className="container flex justify-between gap-10">
          <SideBarUser />
          <div className="bg-white w-3/4 rounded-lg shadow-lg px-3 pt-16 pb-32">
            <div className="flex flex-col items-center space-y-8">
              <div className="relative">
                <img
                  src={image || "https://via.placeholder.com/200?text=No+Image"}
                  className="rounded-full border shadow-sm size-48"
                />
                <label htmlFor="upload-image" className="cursor-pointer">
                  <Camera className="absolute bottom-3 right-4 bg-zinc-100 rounded-full h-8 w-8" />
                </label>
                <p className="text-sm text-red-500 ">
                  {errors.image && errors.image.message}
                </p>
              </div>
              <button
                className="bg-orange-500 text-white w-32 py-2 rounded-lg mt-3 "
                onClick={() => setformDisabled(false)}
                hidden={!formDisabled}
              >
                Edit Profile
              </button>
              <form
                onSubmit={handleSubmit(handleUpdateUser)}
                className=" p-10 rounded-lg max-w-6xl w-full space-y-4"
              >
                <input
                  type="file"
                  id="upload-image"
                  hidden
                  {...register("image", {
                    onChange: (e) => {
                      setImage(URL.createObjectURL(e.target.files[0]));
                    },
                  })}
                />
                <div className="flex flex-col items-center gap-y-10">
                  <input
                    type="text"
                    placeholder="FullName"
                    className={`border px-5 py-2 outline-none w-[400px] bg-[#F4F7FE] rounded-md  ${
                      formDisabled
                        ? "cursor-not-allowed text-gray-500"
                        : "cursor-auto text-gray-900"
                    }`}
                    {...register("full_name")}
                    defaultValue={user?.full_name}
                    disabled={formDisabled}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className={`border px-5 py-2 outline-none w-[400px] bg-[#F4F7FE] rounded-md  ${
                      formDisabled
                        ? "cursor-not-allowed text-gray-500"
                        : "cursor-auto text-gray-900"
                    }`}
                    {...register("email")}
                    defaultValue={user?.email}
                    disabled={formDisabled}
                  />
                  <input
                    type="text"
                    placeholder="PhoneNumber"
                    className={`border px-5 py-2 outline-none w-[400px] bg-[#F4F7FE] rounded-md  ${
                      formDisabled
                        ? "cursor-not-allowed text-gray-500"
                        : "cursor-auto text-gray-900"
                    }`}
                    {...register("phone_number")}
                    defaultValue={user?.phone_number}
                    disabled={formDisabled}
                  />
                  <input
                    type="password"
                    placeholder="*********"
                    className={`border px-5 py-2 outline-none w-[400px] bg-[#F4F7FE] rounded-md  ${
                      formDisabled
                        ? "cursor-not-allowed text-gray-500"
                        : "cursor-auto text-gray-900"
                    }`}
                    {...register("password")}
                    disabled={formDisabled}
                  />
                  <div className="flex gap-8">
                    <button
                      type="button"
                      className="w-32 py-2 rounded-md border bg-red-500 text-white"
                      onClick={() => setformDisabled(true)}
                      hidden={formDisabled}
                    >
                      Cancel
                    </button>
                    <button
                      className="w-32 py-2 rounded-md border bg-sky-500 text-white"
                      disabled={isSubmitting}
                      aria-disabled={isSubmitting}
                      hidden={formDisabled}
                      onClick={() => setformDisabled(true)}
                    >
                      {isSubmitting ? (
                        <p className="flex items-center gap-x-3 text-sm">
                          <Loader2 className={"animate-spin text-xl "} /> Please
                          wait
                        </p>
                      ) : (
                        "Save"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

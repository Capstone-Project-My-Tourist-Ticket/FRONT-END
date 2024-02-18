import Logo from "@/assets/logo.png";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { PengelolaRegister, userRegister } from "@/utils/apis/auth/api";
import {
  RegisterType,
  RegisterTypePengelola,
  registerSchema,
  registerSchemaPengelola,
} from "@/utils/apis/auth/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const {
    register: registerCustomer,
    handleSubmit: handleSubmitCustomer,
    formState: { errors: errorsCustomer, isSubmitting: isSubmittingCustomer },
  } = useForm<RegisterType>({ resolver: zodResolver(registerSchema) });

  const {
    register: registerPengelola,
    handleSubmit: handleSubmitPengelola,
    formState: { errors: errorsPengelola, isSubmitting: isSubmittingPengelola },
  } = useForm<RegisterTypePengelola>({
    resolver: zodResolver(registerSchemaPengelola),
  });

  const handleRegister = async (body: RegisterType) => {
    try {
      if (isNaN(Number(body.phone_number))) {
        toast({
          title: "Invalid Phone Number",
          description: "Phone number should be a number",
          variant: "destructive",
        });
        return;
      }
      await userRegister(body);
      toast({
        description: "Register successfully",
      });
      navigate("/login");
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.message.toString(),
        variant: "destructive",
      });
    }
  };
  const handleRegisterPengelola = async (body: RegisterTypePengelola) => {
    try {
      if (isNaN(Number(body.phone_number))) {
        toast({
          title: "Invalid Phone Number",
          description: "Phone number should be a number",
          variant: "destructive",
        });
        return;
      }
      await PengelolaRegister(body);
      toast({
        description: "Register successfully",
      });
      navigate("/login");
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.message.toString(),
        variant: "destructive",
      });
    }
  };
  return (
    <div className="flex min-h-screen">
      <div
        className="hidden md:block w-3/6 xl:w-4/6 bg-black/20 bg-blend-overlay bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://source.unsplash.com/1200x800?destination)`,
        }}
      ></div>
      <div className="w-full -translate-x-10 md:w-6/12 xl:w-4/12 p-16 rounded-tl-[50px] rounded-bl-[50px] bg-white">
        <Link to={"/"} className="underline">
          <div className="flex justify-center md:justify-start">
            <img className="md:ml-12" src={Logo} alt="logo-brand" />
          </div>
        </Link>
        <h3 className="text-3xl font-semibold mt-5 mb-8 ">Create an Account</h3>
        <Tabs defaultValue="Customer" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-10">
            <TabsTrigger value="Customer">Customer</TabsTrigger>
            <TabsTrigger value="Pengelola">Pengelola</TabsTrigger>
          </TabsList>
          <TabsContent value="Customer">
            <form onSubmit={handleSubmitCustomer(handleRegister)}>
              <Card>
                <CardContent className="space-y-8">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border-b px-5 py-1 outline-none w-full"
                    {...registerCustomer("full_name")}
                    disabled={isSubmittingCustomer}
                    aria-disabled={isSubmittingCustomer}
                  />
                  {errorsCustomer.full_name && (
                    <p className="text-sm text-red-500 -mt-3">
                      {errorsCustomer.full_name.message}
                    </p>
                  )}
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="border-b px-5 py-1 outline-none w-full"
                    {...registerCustomer("phone_number")}
                    disabled={isSubmittingCustomer}
                    aria-disabled={isSubmittingCustomer}
                  />
                  {errorsCustomer.full_name && (
                    <p className="text-sm text-red-500 -mt-3">
                      {errorsCustomer.full_name.message}
                    </p>
                  )}
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-b px-5 py-1 outline-none w-full"
                    {...registerCustomer("email")}
                    disabled={isSubmittingCustomer}
                    aria-disabled={isSubmittingCustomer}
                  />
                  {errorsCustomer.full_name && (
                    <p className="text-sm text-red-500 -mt-3">
                      {errorsCustomer.full_name.message}
                    </p>
                  )}
                  <input
                    type="password"
                    placeholder="Password"
                    className="border-b px-5 py-1 outline-none w-full"
                    {...registerCustomer("password")}
                    disabled={isSubmittingCustomer}
                    aria-disabled={isSubmittingCustomer}
                  />
                  {errorsCustomer.full_name && (
                    <p className="text-sm text-red-500 -mt-3">
                      {errorsCustomer.full_name.message}
                    </p>
                  )}
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col space-y-4">
                    <button className="w-full py-3 rounded-md bg-red-500 text-white mt-1 ">
                      <p className="flex items-center justify-center gap-x-3 text-sm"></p>
                      Register
                    </button>
                    <p className="text-sm self-start">
                      {"Already have account ? "}
                      <Link to={"/login"} className="underline">
                        Log in
                      </Link>
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
          <TabsContent value="Pengelola">
            <form onSubmit={handleSubmitPengelola(handleRegisterPengelola)}>
              <Card>
                <CardContent className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border-b px-5 py-1 outline-none w-full"
                    {...registerPengelola("full_name")}
                    disabled={isSubmittingPengelola}
                    aria-disabled={isSubmittingPengelola}
                  />
                  {errorsPengelola.full_name && (
                    <p className="text-sm text-red-500 -mt-3">
                      {errorsPengelola.full_name.message}
                    </p>
                  )}
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="border-b px-5 py-1 outline-none w-full"
                    {...registerPengelola("phone_number")}
                    disabled={isSubmittingPengelola}
                    aria-disabled={isSubmittingPengelola}
                  />
                  {errorsPengelola.phone_number && (
                    <p className="text-sm text-red-500 -mt-3">
                      {errorsPengelola.phone_number.message}
                    </p>
                  )}
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-b px-5 py-1 outline-none w-full"
                    {...registerPengelola("email")}
                    disabled={isSubmittingPengelola}
                    aria-disabled={isSubmittingPengelola}
                  />
                  {errorsPengelola.email && (
                    <p className="text-sm text-red-500 -mt-3">
                      {errorsPengelola.email.message}
                    </p>
                  )}
                  <input
                    type="text"
                    placeholder="Address"
                    className="border-b px-5 py-1 outline-none w-full"
                    {...registerPengelola("address")}
                    disabled={isSubmittingPengelola}
                    aria-disabled={isSubmittingPengelola}
                  />
                  {errorsPengelola.address && (
                    <p className="text-sm text-red-500 -mt-3">
                      {errorsPengelola.address.message}
                    </p>
                  )}
                  <input
                    type="text"
                    placeholder="No KTP"
                    className="border-b px-5 py-1 outline-none w-full"
                    {...registerPengelola("no_ktp")}
                    disabled={isSubmittingPengelola}
                    aria-disabled={isSubmittingPengelola}
                  />
                  {errorsPengelola.no_ktp && (
                    <p className="text-sm text-red-500 -mt-3">
                      {errorsPengelola.no_ktp.message}
                    </p>
                  )}
                  <input
                    type="password"
                    placeholder="Password"
                    className="border-b px-5 py-1 outline-none w-full"
                    {...registerPengelola("password")}
                    disabled={isSubmittingPengelola}
                    aria-disabled={isSubmittingPengelola}
                  />
                  {errorsPengelola.password && (
                    <p className="text-sm text-red-500 -mt-3">
                      {errorsPengelola.password.message}
                    </p>
                  )}
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col space-y-2">
                    <button className="w-full py-3 rounded-md bg-red-500 text-white mt-1 ">
                      <p className="flex items-center justify-center gap-x-3 text-sm"></p>
                      Register
                    </button>
                    <p className="text-sm self-start">
                      {"Already have account ? "}
                      <Link to={"/login"} className="underline">
                        Log in
                      </Link>
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Register;

import Logo from "@/assets/logo.png";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginType, loginSchema } from "@/utils/apis/auth/type";
import { userLogin } from "@/utils/apis/auth/api";
import { useAuth } from "@/utils/contexts/auth";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const Login = () => {
  const { toast } = useToast();
  const { changeToken } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (body: LoginType) => {
    try {
      const result = await userLogin(body);
      changeToken(result!.data.token);
      toast({
        description: result?.message,
      });
      if (result!.data.status === "pending") {
        throw new Error("Mohon tunggu akun dalam proses peninjauan oleh Admin");
      }
      if (result!.data.role === "admin") {
        return navigate("/dashboard");
      }
      if (result!.data.role === "costumer") {
        navigate("/");
      }
      if (
        result!.data.role === "pengelola" &&
        result!.data.status === "approved"
      ) {
        navigate("/transaction-history");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Oops! Something went wrong.",
          description: error.message.toString(),
          variant: "destructive",
        });
      }
    }
  };
  return (
    <div className="flex min-h-screen">
      <div
        className="hidden md:block w-3/6 xl:w-4/6 bg-black/20 bg-blend-overlay bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://source.unsplash.com/1200x800?tour)`,
        }}
      ></div>
      <div className="w-full -translate-x-10 md:w-6/12 xl:w-4/12 p-16 rounded-tl-[50px] rounded-bl-[50px] bg-white">
        <Link to={"/"} className="underline">
          <div className="flex justify-center md:justify-start">
            <img className="md:ml-12" src={Logo} alt="logo-brand" />
          </div>
        </Link>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col items-start  gap-y-16 pt-20"
        >
          <h3 className="text-3xl font-semibold ">Log In to Account</h3>
          <div className="flex flex-col w-full gap-y-8">
            <input
              type="text"
              placeholder="Email"
              className="border-b px-5 py-1 outline-none"
              {...register("email")}
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-red-500 -mt-3">
                {errors.email.message}
              </p>
            )}
            <input
              type="password"
              placeholder="Password"
              className="border-b px-5 py-1 outline-none"
              {...register("password")}
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
            {errors.password && (
              <p className="text-sm text-red-500 -mt-3">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full gap-y-3">
            <button
              className="w-full py-3 rounded-md bg-red-500 text-white "
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? (
                <p className="flex items-center justify-center gap-x-3 text-sm">
                  <Loader2 className={"animate-spin text-xl "} /> Please wait
                </p>
              ) : (
                "Log In"
              )}
            </button>
            <p className="text-sm self-start">
              Don't have an account yet?{" "}
              <Link to={"/register"} className="underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

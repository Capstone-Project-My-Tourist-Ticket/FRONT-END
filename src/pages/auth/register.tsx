import Logo from "@/assets/Logo.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Register = () => {
  return (
    <div className="flex min-h-screen">
      <div
        className="hidden md:block w-3/6 xl:w-4/6 bg-black/20 bg-blend-overlay bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://source.unsplash.com/1200x800?online-shop)`,
        }}
      ></div>
      <div className="w-full -translate-x-10 md:w-6/12 xl:w-4/12 p-16 rounded-tl-[50px] rounded-bl-[50px] bg-white">
        <div className="flex justify-center md:justify-start">
          <img className="md:ml-12" src={Logo} alt="logo-brand" />
        </div>
        <h3 className="text-3xl font-semibold mt-5 mb-8 ">Create an Account</h3>
        <Tabs defaultValue="Customer" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-10">
            <TabsTrigger value="Customer">Customer</TabsTrigger>
            <TabsTrigger value="Pengelola">Pengelola</TabsTrigger>
          </TabsList>
          <TabsContent value="Customer">
            <Card>
              <CardContent className="space-y-8">
                <input
                  type="text"
                  placeholder="FullName"
                  className="border-b px-5 py-1 outline-none w-full"
                />
                <input
                  type="text"
                  placeholder="PhoneNumber"
                  className="border-b px-5 py-1 outline-none w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b px-5 py-1 outline-none w-full"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b px-5 py-1 outline-none w-full"
                />
              </CardContent>
              <CardFooter>
                <button className="w-full py-3 rounded-md bg-red-500 text-white mt-8 ">
                  <p className="flex items-center justify-center gap-x-3 text-sm"></p>
                  Register
                </button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="Pengelola">
            <Card>
              <CardContent className="space-y-5">
                <input
                  type="text"
                  placeholder="FullName"
                  className="border-b px-5 py-1 outline-none w-full"
                />
                <input
                  type="text"
                  placeholder="PhoneNumber"
                  className="border-b px-5 py-1 outline-none w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b px-5 py-1 outline-none w-full"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="border-b px-5 py-1 outline-none w-full"
                />
                <input
                  type="text"
                  placeholder="No KTP"
                  className="border-b px-5 py-1 outline-none w-full"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b px-5 py-1 outline-none w-full"
                />
              </CardContent>
              <CardFooter>
                <button className="w-full py-3 rounded-md bg-red-500 text-white mt-1 ">
                  <p className="flex items-center justify-center gap-x-3 text-sm"></p>
                  Register
                </button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Register;

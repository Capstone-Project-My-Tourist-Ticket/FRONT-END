import Logo from "@/assets/Logo.png";
import { useAuth } from "@/utils/contexts/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "./ui/use-toast";

const Navbar = () => {
  const { user, token, changeToken } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const handleLogout = () => {
    changeToken();
    toast({
      description: "Logout successfully",
    });
  };
  return (
    <div className="flex w-full items-center justify-center gap-x-10 bg-white z-50 sticky top-0 px-10">
      <img src={Logo} className="p-2 cursor-pointer" onClick={() => navigate("/")} />

      <ul className="flex gap-16 mr-96 text-black container justify-end">
        <Link
          to={"/"}
          className={`${
            location.pathname === "/" ? "font-bold border-b-orange-500 border-b text-lg" : ""
          }`}
        >
          <li className="font-semibold">Home</li>
        </Link>
        <li className="font-semibold">About</li>
        <li className="font-semibold">Services</li>
      </ul>
      {!token ? (
        <div className="container text-end">
          <Link to={"/register"}>
            <button className="bg-red-500  text-white px-5 py-2 rounded-full">Sign Up</button>
          </Link>
        </div>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className={`cursor-pointer `}>
              {user.image ? (
                <img src={user.image} className="rounded-full w-24 h-12 cursor-pointer" />
              ) : (
                <UserRound className="text-white bg-slate-500 rounded-full w-10 h-10 cursor-auto" />
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2">
            <DropdownMenuLabel>Hi {user.full_name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/profile")}>Profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleLogout()}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default Navbar;

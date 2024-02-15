import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/utils/contexts/auth";
import { useNavigate } from "react-router-dom";

function AdminHeader() {
  const { user, changeToken } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    changeToken();
    toast({
      description: "Logout successfully",
    });
    navigate("/login");
  };

  return (
    <div className="flex bg-[#1C2930] h-[65px] items-center justify-between p-8">
      <img className="w-[130px]" src="/images/admin/logo.png" alt="LOGO" />
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <img src="/images/admin/user.png" className="rounded-full w-14 h-11 cursor-pointer " />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 mr-6">
            <DropdownMenuLabel className="cursor-pointer">Hi {user.full_name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={() => handleLogout()}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default AdminHeader;

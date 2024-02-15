import Logo1 from "@/assets/logo1.png";

const Footer = () => {
  return (
    <footer className="w-full min-h-[20vh] bg-[#1C2930]">
      <div className="flex items-center justify-between container p-6 h-full">
        <img src={Logo1} />
        <p className=" text-slate-200 text-sm font-normal">© 2024 Tourist Destination</p>
      </div>
    </footer>
  );
};

export default Footer;

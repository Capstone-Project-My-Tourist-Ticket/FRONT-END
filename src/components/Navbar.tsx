import Logo from "@/assets/Logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-10 gap-x-10 top-1/2 right-1/2 bg-white">
      <img src={Logo} className="p-2" />
      <ul className="flex gap-16 mr-96 text-black">
        <li className="font-semibold">Home</li>
        <li className="font-semibold">About</li>
        <li className="font-semibold">Services</li>
      </ul>
      <button className="bg-red-500  text-white px-5 py-2 rounded-full">Sign Up</button>
    </div>
  );
};

export default Navbar;

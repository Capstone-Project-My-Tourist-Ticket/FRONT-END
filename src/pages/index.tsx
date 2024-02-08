import Logo1 from "@/assets/Logo1.png";
import CarouselTour from "@/components/Banner";
import CarouselHome from "@/components/CarouselHome";
import { Search } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div
        className="min-h-[85%] bg-no-repeat bg-cover bg-center bg-blend-darken bg-black/30 relative"
        style={{
          backgroundImage: `url(https://source.unsplash.com/1200x800/?tour,destination,indonesia)`,
        }}
      >
        <div className="flex justify-between items-center mx-10 gap-x-10">
          <img src={Logo1} />
          <ul className="flex gap-16 mr-96 text-white">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
          <p className="bg-red-500  text-white px-5 py-2 rounded-full">Sign Up</p>
        </div>
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-20 w-full max-w-4xl">
          <div className="flex items-center justify-between bg-[#F5F5F5] py-5 h-8 overflow-hidden rounded-lg text-sm border w-full px-3">
            <input
              className="px-5 py-1 outline-none border-none bg-transparent text-zinc-800 w-full"
              placeholder="I want to go..."
            />
            <Search className="text-red-500" />
          </div>
        </div>
      </div>
      <div className="bg-white pt-10 rounded-tl-[80px] rounded-tr-[80px] -translate-y-8"></div>
      <div className="pt-0 mt-0">
        <CarouselTour />
      </div>
      <div className="container">
        <p className="font-semibold text-2xl my-8">Top Picks Tourist Attraction</p>
        <CarouselHome />
      </div>
    </div>
  );
};

export default Home;

import Logo1 from "@/assets/Logo1.png";
import CarouselTour from "@/components/Banner";
import CarouselHome from "@/components/CarouselHome";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
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
        <div className="flex justify-between items-center mx-10 gap-x-10 top-1/2 right-1/2 ">
          <img src={Logo1} className="p-2" />
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
      <div className="container border-slate-200 border rounded-lg ">
        <p className="font-semibold text-2xl my-8">Top Picks Tourist Attraction</p>
        <CarouselHome />
      </div>
      <div className="container border-slate-200 border my-6 rounded-lg">
        <p className="font-semibold text-2xl my-8">Travel Around Indonesia</p>

        <div className="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <Card className="">
              <CardContent className="p-1">
                <div className="">
                  <img
                    src={`https://source.unsplash.com/1200x80${index}/?tour,destination,sea`}
                    className="h-50 w-full rounded-sm"
                  />
                  <p className="flex justify-center text-xl p-3">Bandung</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="py-4 flex justify-center my-3">
          <button className="bg-blue-500 py-2 px-4 rounded-lg text-white">Show more</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

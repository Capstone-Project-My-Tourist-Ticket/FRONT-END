import Logo1 from "@/assets/logo1.png"
import Logo from "@/assets/logo.png"
import CarouselTour from "@/components/Banner"
import CarouselHome from "@/components/CarouselHome"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/utils/contexts/auth"
import { Search, UserRound } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getCity, getSearch } from "@/utils/apis/user/api"
import { GetCity, GetTours } from "@/utils/apis/user/type"

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, token, changeToken } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()
  const [city, setCity] = useState<GetCity[]>([])
  /*   const [pageNumber, setPageNumber] = useState(1); */
  const location = useLocation()
  const [searchTours, setSearchTours] = useState<GetTours[]>([])
  const [searchQuery, setSearchQuery] = useState<string>("")

  const search = async (q: string) => {
    try {
      if (q.length > 0) {
        const response = await getSearch(q)
        console.log(response.data)
        setSearchTours(response.data)
      }
    } catch (error) {
      setSearchTours([])
    }
  }
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    search(query)
  }

  const handleLogout = () => {
    changeToken()
    toast({
      description: "Logout successfully",
    })
  }

  const fetchCity = async (/* pageNumber: number */) => {
    try {
      const result = await getCity(1)
      setCity(result.data)
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(
    () => {
      fetchCity()
      const handleScroll = () => {
        const scrollPosition = window.scrollY
        setIsScrolled(scrollPosition > 400)
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    },
    [
      /* pageNumber */
    ]
  )

  console.log(searchQuery)
  console.log(searchTours)

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div
        className={`flex justify-between items-center gap-x-10 w-full sticky top-0 z-50 ${
          isScrolled ? "bg-white" : "bg-transparent"
        } transition-background duration-500 ease-in-out px-10`}
      >
        <img
          src={isScrolled ? Logo : Logo1}
          className="p-2 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul
          className={`flex gap-16 mr-96 container justify-end ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <Link
            to={"/"}
            className={`${
              location.pathname === "/"
                ? "font-bold border-b-orange-500 border-b text-lg"
                : ""
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
              <button className="bg-red-500  text-white px-5 py-2 rounded-full">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {user.image ? (
                <img
                  src={user.image}
                  className="rounded-full w-20 h-10 cursor-pointer"
                />
              ) : (
                <UserRound
                  className={`${
                    isScrolled
                      ? "text-white bg-slate-500"
                      : "text-black bg-white cursor-pointer"
                  }  rounded-full w-20 h-10`}
                />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2">
              <DropdownMenuLabel>Hi {user.full_name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleLogout()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      <div
        className="h-screen -translate-y-32 bg-no-repeat bg-cover bg-center bg-blend-darken bg-black/30 relative"
        style={{
          backgroundImage: `url(https://source.unsplash.com/1200x800/?tour,destination,indonesia)`,
        }}
      >
        <div className="flex-grow mx-5">
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-20 w-full max-w-4xl">
            <div className="flex items-center justify-between bg-[#F5F5F5] py-5 h-8 overflow-hidden rounded-lg text-sm border w-full px-3">
              <input
                className="px-5 py-1 outline-none border-none bg-transparent text-zinc-800 w-full"
                placeholder="I want to go..."
                value={searchQuery}
                onChange={handleSearch}
              />
              <Search className="text-red-500" />
              {searchQuery && searchTours.length > 0 && (
                <ul className="absolute z-10 max-h-48 top-10 left-0 right-0 bg-white dark:bg-gray-900 rounded-md mr-4 outline-none border-gray-100 dark:border-gray-800 border-2 border-solid overflow-y-scroll">
                  {searchTours.map((item, index) => (
                    <li
                      key={index}
                      className="py-1 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => {
                        setSearchQuery("")
                        setSearchTours([])
                        navigate(`/detail/${item.id}`)
                      }}
                    >
                      <div className="flex gap-4 p-2">
                        <img src={item.thumbnail} className="w-10" />
                        <div>{item.tour_name}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-10 rounded-tl-[80px] rounded-tr-[80px] -translate-y-40"></div>
      <div className="pt-0 mt-0 -translate-y-16">
        <CarouselTour />
      </div>
      <div className="container border-slate-300 border rounded-lg ">
        <p className="font-semibold text-2xl my-8">
          Top Picks Tourist Attraction
        </p>
        <CarouselHome />
      </div>
      <div className="container border-slate-300 border my-6 rounded-lg">
        <p className="font-semibold text-2xl my-8">Travel Around Indonesia</p>

        <div className="grid grid-cols-4">
          {city &&
            city.map((item, index) => (
              <Card className="basis-1/4" key={index}>
                <CardContent className="p-1">
                  <div className="">
                    <Link to={`/city/${item.id}`}>
                      <img
                        src={item.thumbnail}
                        className="h-52 w-full rounded-sm"
                      />
                      <p className="flex justify-center text-xl p-3">
                        {item.city_name
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </p>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

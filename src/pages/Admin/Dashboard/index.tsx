import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import Footer from "@/components/Footer"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardDescription } from "@/components/ui/card"
import { Star } from "lucide-react"
import React, { useEffect, useState } from "react"
import axiosWithConfig from "@/utils/apis/axiosWithConfig"

interface Tour {
  tour_name: string
}

interface RecentBooking {
  booking_id: string
  gross_amount: number
  tour: Tour
}

interface City {
  city_name: string
}

interface TopTour {
  id: number
  tour_name: string
  image: string
  thumbnail: string
  city: City
}

interface DashboardData {
  total_costumer: number
  total_pengelola: number
  total_transaction: number
  total_tour: number
  recent_booking: RecentBooking[]
  top_tours: TopTour[]
}

function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null)

  const fetchData = async () => {
    try {
      const response = await axiosWithConfig.get(
        "https://benarja.my.id/admin/dashboard"
      )

      if (response.status !== 200) {
        throw new Error("Failed to fetch data")
      }

      const jsonResponse = response.data

      if (jsonResponse && jsonResponse.data) {
        setData(jsonResponse.data)
      } else {
        console.error("API response does not contain data:", jsonResponse)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="bg-[#dee2e6] ">
      <header>
        <AdminHeader />
      </header>
      <div>
        <div>
          <div className="flex">
            <AdminNavbar />
            {data && (
              <div className="w-full">
                <div className="underline underline-offset-8 px-6 py-4 text-2xl font-bold">
                  Dashboard
                </div>

                <div className="flex items-center justify-between px-6">
                  {Object.keys(data).map((key) => (
                    <div
                      key={key}
                      className="text-center bg-white shadow-xl p-3 rounded-lg w-40 font-semibold"
                    >
                      <span>{key.replace(/_/g, " ").toUpperCase()}</span>
                      <br />
                      {renderData(key, data[key as keyof DashboardData])}
                    </div>
                  ))}
                </div>

                <div className="bg-white mt-10 mx-6 shadow-xl rounded-lg">
                  <p className="p-4 text-lg">Recent Transaction</p>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>No.</TableHead>
                        <TableHead>Booking Code</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Price</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {data?.recent_booking?.map(
                        (
                          booking: RecentBooking,
                          index: number
                        ): React.ReactNode => (
                          <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{booking.booking_id}</TableCell>
                            <TableCell>{booking.tour?.tour_name}</TableCell>
                            <TableCell>{booking.gross_amount}</TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </div>
                <p className="pt-4 px-6 font-semibold text-2xl">Top 5 Tour</p>
                <div className="px-6 pt-4 flex justify-between pb-6">
                  {data?.top_tours?.map((tour: TopTour, index: number) => (
                    <Card className="w-[180px]" key={index}>
                      <img className=" rounded-lg" src={tour.image} />
                      <div className="px-2">
                        <CardDescription className="flex justify-between">
                          <p className="font-bold py-1 text-black text-lg">
                            {tour.tour_name}
                          </p>
                          <div className="flex justify-center items-center">
                            {Array.from({ length: 5 }, (_, index) => (
                              <Star
                                key={index}
                                fill={"yellow"}
                                className="stroke-slate-300 drop-shadow-sm"
                                size={20}
                              />
                            ))}
                          </div>
                        </CardDescription>
                        <CardDescription className="flex">
                          <img
                            className="w-[15px] ps-1"
                            src="/images/admin/pin.png"
                          />
                          <p className="ms-2">{tour.city?.city_name}</p>
                        </CardDescription>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard

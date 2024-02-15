import Layout from "@/components/Layout"
import { Dot, MapPin, MinusCircle, PlusCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ReviewsComp from "@/components/Review"
import Map from "@/components/Map"
import { getDetailTours, getPackages } from "@/utils/apis/user/api"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { GetPackages, GetTours } from "@/utils/apis/user/type"
import { formattedAmount } from "@/utils/formattedAmount"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { addDays } from "date-fns"

const DetailTour = () => {
  const { id } = useParams()
  const [tourDetail, setTourDetail] = useState<GetTours>()
  const [packages, setPackages] = useState<GetPackages[]>([])
  const [editableCount, setEditableCount] = useState<string>("1")

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const minTomorrow = addDays(new Date(), 1)

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  const currentDate: any = new Date()

  const dates: Date[] = Array.from({ length: 8 }, (_, i) => {
    const date = new Date(currentDate)
    date.setDate(currentDate.getDate() + (i + 1))
    return date
  })

  console.log(dates, "aw la")

  const handleIncrement = () => {
    setEditableCount((prevCount) => (parseInt(prevCount, 10) + 1).toString())
  }

  const handleDecrement = () => {
    setEditableCount((prevCount) => {
      const newCount = parseInt(prevCount, 10) - 1
      return newCount >= 1 ? newCount.toString() : "1"
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    if (/^[1-9]\d*$/.test(inputValue)) {
      setEditableCount(inputValue)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    if (id) {
      fetchDetailCity()
    }
  }, [id])

  const fetchDetailCity = async () => {
    try {
      const result = await getDetailTours(id as string)
      setTourDetail(result.data)
      console.log(result.data)
      const resultPackages = await getPackages(`${result.data.id}`)
      setPackages(resultPackages.data)
      console.log(resultPackages.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <div className="w-full min-h-screen flex flex-col">
        <img src={tourDetail?.image} className="w-full h-[500px]" />
        <div className="bg-white p-5 rounded-tl-[80px] rounded-tr-[80px] -translate-y-10"></div>
        <div className="container flex flex-col space-y-4">
          <p className="text-2xl font-semibold">{tourDetail?.tour_name}</p>
          <div className="flex gap-2 items-center">
            <MapPin size={15} />
            <p className="text-slate-500">{tourDetail?.address}</p>
          </div>
          <p>{tourDetail?.description}</p>
        </div>
        <div className="flex flex-col space-y-8 container">
          <p className="text-2xl font-semibold mt-8">Packages</p>
          <div className="flex justify-center ">
            <div className="flex flex-col space-y-3 w-full bg-[#F4F7FE] p-10 rounded-xl">
              {packages &&
                packages.map((item, index) => (
                  <Accordion
                    key={index}
                    type="single"
                    collapsible
                    className="w-full bg-white shadow-lg p-5 rounded-lg"
                  >
                    <AccordionItem value="item-1" className="border-b-0">
                      <AccordionTrigger className="text-xl">
                        {item.package_name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-5">
                          <p className=" font-semibold">Includes :</p>
                          <div className="flex flex-col space-y-2 border-b-2 pb-5">
                            {item &&
                              item.benefits.map((services, index) => (
                                <div className="flex items-center" key={index}>
                                  <Dot />
                                  <span className="text-lg font-semibold">
                                    {services.benefit.charAt(0).toUpperCase() +
                                      services.benefit.slice(1)}
                                  </span>
                                </div>
                              ))}
                          </div>
                          <p className=" font-semibold">Visit Event Date</p>
                          <div className="flex justify-between items-center gap-4">
                            {dates &&
                              dates.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex flex-col border py-2 px-5 rounded-lg items-center cursor-pointer   "
                                  onClick={() => handleDateChange(item)}
                                >
                                  <p>
                                    {item.toLocaleDateString("en-US", {
                                      weekday: "short",
                                    })}
                                  </p>
                                  <p>{`${item.getDate()} ${item.toLocaleDateString(
                                    "en-US",
                                    {
                                      month: "short",
                                    }
                                  )}`}</p>
                                </div>
                              ))}
                            <DatePicker
                              selected={selectedDate}
                              onChange={handleDateChange}
                              dateFormat="dd/MM/yyyy"
                              minDate={minTomorrow}
                              isClearable
                              placeholderText="Select a date"
                              className="border text-center p-2 border-slate-900 cursor-pointer  rounded-md"
                            />
                          </div>
                          <p className=" font-semibold">Ticket Quantity</p>
                          <div className="flex items-center justify-between text-lg font-semibold border p-3 rounded-lg">
                            <p>{item.package_name}</p>
                            <div className="flex items-center gap-10">
                              <p className="text-red-500">
                                {formattedAmount(item.price)}
                              </p>
                              <div className="flex items-center justify-center gap-1">
                                <div className="w-8 h-8 rounded-full  text-blue-500 cursor-pointer flex justify-center items-center">
                                  <MinusCircle onClick={handleDecrement} />
                                </div>
                                <div className="w-8 h-8 flex justify-center items-center">
                                  <input
                                    className="w-8 text-center outline-none"
                                    type="text"
                                    value={editableCount}
                                    onChange={handleInputChange}
                                  />
                                </div>
                                <div className="w-8 h-8 rounded-full text-blue-500 cursor-pointer flex justify-center items-center">
                                  <PlusCircle onClick={handleIncrement} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p>Total</p>
                              <p className="text-lg font-semibold">
                                {formattedAmount(
                                  Number(editableCount) * item.price
                                )}
                              </p>
                            </div>
                            <button className="bg-blue-500 text-white px-10 py-2 rounded-lg">
                              Book
                            </button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
            </div>
          </div>
          <div className="w-full border-t-2 space-y-4 border-b-2">
            <p className="text-xl font-semibold mt-4">Reviews</p>
            <p className="text-2xl font-semibold">
              4.5{" "}
              <span className="text-slate-500 text-sm">
                /5.0 From 4504 Reviews
              </span>
            </p>
            <ReviewsComp />
            <div className="flex flex-col space-y-5">
              <p className="font-semibold text-lg border-t-2 pt-4">Location</p>
              {tourDetail && (
                <Map
                  draggable={false}
                  latitude={tourDetail?.latitude!}
                  longitude={tourDetail?.longitude!}
                />
              )}
            </div>
            <div className="flex flex-col space-y-3 pb-6">
              <p className="font-semibold text-lg border-t-2 pt-4">More Info</p>
              <Accordion
                type="single"
                collapsible
                className="w-2/4 bg-white shadow-lg p-5 rounded-lg"
              >
                <AccordionItem value="item-1" className="">
                  <AccordionTrigger className="font-semibold text-lg">
                    Penukaran Tiket
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5">
                      <li>Sebelum membeli tiket, perlu reservasi</li>
                      <li>Reservasi dapat dilakukan hingga 90 hari sebelum</li>
                      <li>
                        kunjungan. E-tiket tidak perlu dicetak. Cukup tunjukkan
                        e-tiket dari smartphone
                      </li>
                      <li>
                        kamu saat penukaran atau di pintu masuk. Mohon sesuaikan
                        kecerahan layarmu.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="">
                  <AccordionTrigger className="font-semibold text-lg">
                    Syarat & Ketentuan
                  </AccordionTrigger>
                  <AccordionContent>
                    <h2 className="font-semibold  mt-6 mb-4">General</h2>
                    <ul className="list-disc pl-5">
                      <li>Harga sudah termasuk pajak.</li>
                      <li>
                        Tiket yang sudah dibeli tidak dapat dikembalikan
                        (non-refundable).
                      </li>
                      <li>
                        Tiket yang sudah dibeli tidak dapat dijadwalkan ulang.
                      </li>
                      <li>
                        Pembeli wajib mengisi data diri pribadi saat memesan.
                      </li>
                      <li>
                        Penjualan tiket sewaktu-waktu dapat dihentikan atau
                        dimulai oleh tiket.com sesuai dengan kebijakan dari
                        penyelenggara atau tiket.com.
                      </li>
                    </ul>
                    <h2 className="font-semibold  mt-6 mb-4">E-Ticket</h2>
                    <ul className="list-disc pl-5">
                      <li>E-tiket tidak dapat diuangkan.</li>
                      <li>E-tiket tidak dapat dipindahtangankan.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DetailTour

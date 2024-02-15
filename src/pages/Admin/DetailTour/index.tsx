import AdminHeader from "@/components/Admin/AdminHeader"
import Map from "@/components/Map"
import { MapPin } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React, { useEffect, useState } from "react"
import Footer from "@/components/Footer"
import axiosWithConfig from "@/utils/apis/axiosWithConfig"
import { AxiosResponse } from "axios"

interface Detail {
  id: number
  city_id: number
  user_id: number
  tour_name: string
  description: string
  image: string
  thumbnail: string
  address: string
  latitude: number
  longitude: number
  created_at: string
  updated_at: string
  city: {
    id: number
    city_name: string
    image: string
    thumbnail: string
  }
}

interface Packages {
  id: number
  tour_id: number
  package_name: string
  price: number
}

function AdminDetailTour() {
  const [data, setData] = useState<Detail[]>([])
  const [paket, setPaket] = useState<Packages[]>([])

  useEffect(() => {
    axiosWithConfig
      .get(`https://benarja.my.id/tours/31`)
      .then((response: AxiosResponse<{ data: Detail }>) => {
        console.log(response.data)
        setData([response.data.data])
      })
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  useEffect(() => {
    axiosWithConfig
      .get(`https://benarja.my.id/packages/31`)
      .then((response) => {
        console.log(response.data)

        if (Array.isArray(response.data)) {
          setPaket(response.data)
        } else if (response.data && response.data.data) {
          setPaket([response.data.data])
        } else {
          console.error("Error: Invalid response structure", response)
        }
      })
      .catch((error) => console.error("Error fetching package data:", error))
  }, [])

  return (
    <div>
      <header>
        <AdminHeader />
      </header>
      {data.map((item, index) => (
        <div key={index}>
          <img className="w-screen h-[500px]" src={item.thumbnail} />
          <div className="bg-white p-5 rounded-tl-[80px] rounded-tr-[80px] -translate-y-10"></div>
          <div className="px-6 rounded-lg">
            <h1 className="font-bold text-2xl">{item.tour_name}</h1>
            <div className="flex gap-2 items-center pt-2">
              <MapPin size={15} />
              <p className="text-slate-500">{item.address}</p>
            </div>
            <p className="py-6">{item.description}</p>
          </div>
        </div>
      ))}
      {paket.map((packageItem, index) => (
        <div key={index}>
          <div className="px-6 rounded-lg">
            <h1 className="font-bold text-2xl">Package</h1>
            <div className="flex justify-between py-4">
              <div className="bg-[#dee2e6] rounded-lg w-[700px]">
                <div className="bg-white m-6 p-4 rounded-lg drop-shadow-lg">
                  <h1 className="font-bold pb-4">{packageItem.package_name}</h1>
                  <p className="text-red-600">{packageItem.price}</p>
                </div>
              </div>
              <div className="bg-[#dee2e6] rounded-lg w-[500px] h-full">
                <div className="bg-white m-6 p-4 rounded-lg drop-shadow-lg ">
                  <p className="font-bold text-blue-500 pb-4">
                    Paket ber3 - Reguler Ice Age
                  </p>
                  <p className="font-bold">Paket ber5 - Reguler Ice Age</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="px-6 rounded-lg">
        <hr className="border border-black" />
        <p className="font-bold ">Reviews</p>
        <div className="flex items-center pb-6">
          <p className="font-bold text-2xl">4.5</p>
          <p>/5.0 From 4504 Review</p>
        </div>
        <div className="flex justify-between w-[700px] pb-6">
          <div className=" bg-white rounded-lg  p-4  drop-shadow-xl">
            <div className="flex justify-between w-[250px]">
              <div className="flex items-center">
                <p className="font-bold text-xl">4.5</p>
                <p>/5.0</p>
              </div>
              <p className="items-center">31 Dec 2023</p>
            </div>
            <p className="font-semibold">Arja Cihuy</p>
            <p>Tempatnya Keren</p>
          </div>
          <div className=" bg-white rounded-lg  p-4  drop-shadow-xl">
            <div className="flex justify-between w-[250px]">
              <div className="flex items-center">
                <p className="font-bold text-xl">4.5</p>
                <p>/5.0</p>
              </div>
              <p className="items-center">31 Dec 2023</p>
            </div>
            <p className="font-semibold">Arja Cihuy</p>
            <p>Tempatnya Keren</p>
          </div>
        </div>
        <h1 className="font-bold py-2">Reports</h1>
        <div className="flex justify-between w-[700px] pb-6">
          <div className=" bg-white rounded-lg  p-4  drop-shadow-xl">
            <div className="flex justify-between w-[250px]">
              <p className="font-semibold">Arja Cihuy</p>
              <p className="items-center">31 Dec 2023</p>
            </div>
            <p>Tempatnya Keren</p>
          </div>
          <div className=" bg-white rounded-lg  p-4  drop-shadow-xl">
            <div className="flex justify-between w-[250px]">
              <p className="font-semibold">Arja Cihuy</p>
              <p className="items-center">31 Dec 2023</p>
            </div>
            <p>Tempatnya Keren</p>
          </div>
        </div>
        <hr className="border border-black" />
        {data.map((item, index) => (
          <div key={index}>
            <div className="pb-6">
              <h1 className="font-bold py-4">Location</h1>
              <Map
                draggable={false}
                latitude={item.latitude}
                longitude={item.longitude}
              />
            </div>
          </div>
        ))}

        <hr className="border border-black" />
        <div className="flex flex-col space-y-3 pb-6">
          <p className="font-semibold text-lg border-t-2 pt-4">More Info</p>
          <Accordion
            type="single"
            collapsible
            className="w-2/4 bg-white shadow-lg p-5 rounded-lg"
          >
            <AccordionItem value="item-1" className="border-b-0">
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
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="w-2/4 bg-white shadow-lg p-5 rounded-lg"
          >
            <AccordionItem value="item-1" className="border-b-0">
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
                  <li>Pembeli wajib mengisi data diri pribadi saat memesan.</li>
                  <li>
                    Penjualan tiket sewaktu-waktu dapat dihentikan atau dimulai
                    oleh tiket.com sesuai dengan kebijakan dari penyelenggara
                    atau tiket.com.
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
      <Footer />
    </div>
  )
}
export default AdminDetailTour

import AdminHeader from "@/components/Admin/AdminHeader"
import Map from "@/components/Map"
import { MapPin } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React from "react"
import Footer from "@/components/Footer"

function AdminDetailTour() {
  return (
    <div>
      <header>
        <AdminHeader />
      </header>
      <img
        className="w-screen h-[500px]"
        src={`https://media.safarway.com/content/594c745c-f837-4df9-b6a1-3b1011f71dc6_sm.jpg`}
      />
      <div className="bg-white p-5 rounded-tl-[80px] rounded-tr-[80px] -translate-y-10"></div>
      <div className="px-6 rounded-lg">
        <h1 className="font-bold text-2xl">Ice Age Artic Adventure</h1>
        <div className="flex gap-2 items-center pt-2">
          <MapPin size={15} />
          <p className="text-slate-500">
            Jl. Konoha , RW 10 RT 03, Kelurahan West Blue, Kecamatan East Blue,
            Lampung Selatan, Lampung , Indonesia{" "}
          </p>
        </div>
        <p className="py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi facere
          architecto in, saepe perferendis repellat labore natus odit explicabo
          totam. Voluptates veniam possimus adipisci dicta dolore? Perferendis
          reprehenderit earum optio.
        </p>
        <h1 className="font-bold text-2xl">Package</h1>
        <div className="flex justify-between py-4">
          <div className="bg-[#dee2e6] rounded-lg w-[700px]">
            <div className="bg-white m-6 p-4 rounded-lg drop-shadow-lg">
              <h1 className="font-bold pb-4">Paket Ber3 - Reguler Ice Age</h1>
              <p className="line-through">Rp. 350.000</p>
              <p className="text-red-600">Rp. 220.000</p>
            </div>
            <div className="bg-white m-6 p-4 rounded-lg drop-shadow-lg">
              <h1 className="font-bold pb-4">Paket Ber5 - Reguler Ice Age</h1>
              <p className="line-through">Rp. 350.000</p>
              <p className="text-red-600">Rp. 220.000</p>
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
        <div className="pb-6">
          <h1 className="font-bold py-4">Location</h1>
          <Map draggable={false} />
        </div>
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

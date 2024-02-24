import { Dot, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ReviewsComp from "@/components/Review";
import Map from "@/components/Map";
import {
  getAllReview,
  getDetailTours,
  getPackages,
} from "@/utils/apis/user/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetPackages, GetReview, GetTours } from "@/utils/apis/user/type";
import { formattedAmount } from "@/utils/formattedAmount";

import "react-datepicker/dist/react-datepicker.css";

import AdminHeader from "@/components/Admin/AdminHeader";
import axiosWithConfig from "@/utils/apis/axiosWithConfig";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Report {
  id: number;
  tour_id: number;
  user_id: number;
  text_report: string;
  created_at: string;
  updated_at: string;
  user: {
    full_name: string;
    image: string;
  };
}

const AdminDetailTour = () => {
  const { id } = useParams();
  const [tourDetail, setTourDetail] = useState<GetTours>();
  const [reportData, setReportData] = useState<Report[]>([]);
  const [review, setReview] = useState<GetReview>();
  const [packages, setPackages] = useState<GetPackages[]>([]);
  const [editableCount] = useState<string>("1");
  const [posisi, setPosisi] = useState<{ lat: number; lng: number }>();
  const currentDate: any = new Date();
  const dates: Date[] = Array.from({ length: 8 }, (_, i) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + (i + 1));
    return date;
  });

  console.log(dates);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      fetchDetailCity();
    }
    fetchAllReview();
  }, [id]);

  const fetchDetailCity = async () => {
    try {
      const result = await getDetailTours(id as string);
      setTourDetail(result.data);
      setPosisi({ lat: result.data.latitude, lng: result.data.longitude });
      const resultPackages = await getPackages(`${result.data.id}`);
      setPackages(resultPackages.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllReview = async () => {
    try {
      const result = await getAllReview(id as string);
      setReview(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axiosWithConfig.get(
        `https://benarja.my.id/tours/${id}/report`
      );

      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }

      const jsonResponse = response.data;

      if (jsonResponse.data && Array.isArray(jsonResponse.data)) {
        setReportData(jsonResponse.data);
      } else {
        console.error("API response does not contain an array:", jsonResponse);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <AdminHeader />
      <div className="w-full min-h-screen flex flex-col">
        <img src={tourDetail?.image} className="w-full h-[500px]" />
        <div className="bg-white p-5 rounded-tl-[80px] rounded-tr-[80px] -translate-y-10"></div>

        <div className="container flex flex-col space-y-4">
          <div className="itemscenter flex justify-between">
            <p className="text-2xl font-semibold">{tourDetail?.tour_name}</p>
          </div>
          <div className="flex gap-2 items-center">
            <MapPin size={15} />
            <p className="text-slate-500">{tourDetail?.address}</p>
          </div>
          <p>{tourDetail?.description}</p>
        </div>
        <div className="flex flex-col space-y-8 container">
          <p className="text-2xl font-semibold mt-8">Packages</p>
          <div className="flex w-1/2">
            {packages.length > 0 ? (
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
                            <div className="flex flex-col pb-5">
                              {item &&
                                item.benefits.map((services, index) => (
                                  <div
                                    className="flex items-center"
                                    key={index}
                                  >
                                    <Dot />
                                    <span className="text-lg font-semibold">
                                      {services.benefit
                                        .charAt(0)
                                        .toUpperCase() +
                                        services.benefit.slice(1)}
                                    </span>
                                  </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p>Price</p>
                                <p className="text-xl text-red-500 font-bold">
                                  {formattedAmount(
                                    Number(editableCount) * item.price
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
              </div>
            ) : (
              <p className="text-left">No packages available</p>
            )}
          </div>
          <div className="w-full border-t-2 space-y-4 border-b-2">
            <p className="text-xl font-semibold mt-4">Reviews</p>
            {review && review.total_review > 0 ? (
              <p className="text-2xl font-semibold">
                {review.average_review}{" "}
                <span className="text-slate-500 text-sm">
                  /5.0 From {review.total_review} Reviews
                </span>
              </p>
            ) : (
              <p>No reviews yet</p>
            )}
            {review && review.total_review > 0 ? (
              <ReviewsComp data={review?.reviews!} />
            ) : null}

            <p className="text-xl font-semibold mt-4">Report</p>
            <div className="flex flex-wrap gap-3">
              {reportData.length > 0 ? (
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {reportData.map((lapor) => (
                      <CarouselItem className="basis-1/4" key={lapor.id}>
                        <Card className="mb-8 w-[293px]">
                          <CardContent className="p-1 border-2 rounded-lg shadow-lg">
                            <div className="flex-col p-2 space-y-1">
                              <div className="flex items-center justify-between">
                                <p className="font-semibold text-lg">
                                  {lapor.user.full_name}
                                </p>
                                <div className="flex justify-between">
                                  <p>{lapor.created_at}</p>
                                </div>
                              </div>
                              <p className=" text-slate-500">
                                {lapor.text_report}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              ) : (
                <p>No reports yet</p>
              )}
            </div>

            <div className="flex flex-col space-y-5">
              <p className="font-semibold text-lg border-t-2 pt-4">Location</p>
              {tourDetail && (
                <Map posisi={posisi} draggable={false} width={1340} />
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
    </>
  );
};

export default AdminDetailTour;

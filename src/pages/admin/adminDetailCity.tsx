import AdminCardTour from "@/components/Admin/AdminCardTour";
import AdminHeader from "@/components/Admin/AdminHeader";
import Pagination from "@/components/Pagination";
import { getDetailCity, getToursByCity } from "@/utils/apis/user/api";
import { GetCity, GetTours } from "@/utils/apis/user/type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdminDetailCity = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<GetCity>();
  const [toursCity, setToursCity] = useState<GetTours[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      fetchDetailCity(pageNumber);
    }
  }, [id, pageNumber]);

  const fetchDetailCity = async (pageNumber: number) => {
    try {
      const result = await getDetailCity(id as string);
      setDetail(result.data);
      const resultCity = await getToursByCity(`${result.data.id}`, pageNumber);
      setToursCity(resultCity.data);
      setTotalPage(resultCity.total_page);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = (data: { selected: number }) => {
    setPageNumber(data.selected + 1);
  };

  return (
    <>
      <AdminHeader />
      <div className="w-full min-h-screen">
        <img src={detail?.image} className="w-full h-[500px] rounded-md" />
        <div className="flex flex-col space-y-6 container my-12">
          <p className="text-2xl font-semibold">{detail?.city_name}</p>
          <p>{detail?.description}</p>
        </div>

        <div className="container grid grid-cols-4 gap-x-4 h-[600px]">
          {toursCity &&
            toursCity.map((item, index) => (
              <div>
                <AdminCardTour data={item} key={index} />
              </div>
            ))}
        </div>
        <div className="flex justify-center my-4">
          <Pagination
            totalPage={totalPage}
            page={pageNumber}
            handlePageClick={handlePageClick}
          />
        </div>
      </div>
    </>
  );
};

export default AdminDetailCity;

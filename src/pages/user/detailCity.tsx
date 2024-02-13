import CardTour from "@/components/CardTour";
import Layout from "@/components/Layout";
import { getDetailCity, getToursByCity } from "@/utils/apis/user/api";
import { GetCity, GetTours } from "@/utils/apis/user/type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailCity = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<GetCity>();
  const [toursCity, setToursCity] = useState<GetTours[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (id) {
      fetchDetailCity();
    }
  }, [id]);

  const fetchDetailCity = async () => {
    try {
      const result = await getDetailCity(id as string);
      setDetail(result.data);
      const resultCity = await getToursByCity(`${pageNumber}`, result.data.id);
      setToursCity(resultCity.data);
      console.log(resultCity.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="w-full min-h-screen">
        <img src={detail?.image} className="w-full h-[500px] rounded-md" />
        <div className="flex flex-col space-y-6 container my-12">
          <p className="text-2xl font-semibold">{detail?.city_name}</p>
          <p>{detail?.description}</p>
        </div>

        <div className="container grid grid-cols-4">
          {toursCity && toursCity.map((item, index) => <CardTour data={item} key={index} />)}
        </div>
      </div>
    </Layout>
  );
};

export default DetailCity;

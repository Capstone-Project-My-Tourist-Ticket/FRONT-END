import { ResponsePayloadPagination } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { IAddPackage, IAddTourType, IMyTour, Transaction } from "./type";

export const getTransaction = async (pageNumber: number) => {
  try {
    const response = await axiosWithConfig.get(`/bookings/pengelola?page=${pageNumber}`);
    return response.data as ResponsePayloadPagination<Transaction[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getMyTour = async (pageNumber: number) => {
  try {
    const response = await axiosWithConfig.get(`/tours/pengelola?page=${pageNumber}`);
    return response.data as ResponsePayloadPagination<IMyTour[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const getMyTourPengelola = async () => {
  try {
    const response = await axiosWithConfig.get(`/tours/pengelola?page=1`);
    return response.data as ResponsePayloadPagination<IMyTour[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createTour = async (body: IAddTourType) => {
  const formData: any = new FormData();

  formData.append("tour_name", body.tour_name);
  formData.append("description", body.description);
  formData.append("image", body.image[0]);
  formData.append("thumbnail", body.thumbnail[0]);
  formData.append("address", body.address);
  formData.append("latitude", body.latitude);
  formData.append("longitude", body.longitude);
  formData.append("city_id", body.city_id);
  try {
    const response = await axiosWithConfig.post("/tours", formData);
    return response.data as { message: string };
  } catch (error: any) {  
    throw new Error(error.message);
  }
};

export const createPackage = async (body: IAddPackage, tour_id: number) => {
  try {
    const response = await axiosWithConfig.post(`/packages/${tour_id}`, body);
    return response.data as { message: string };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateTour = async (body: IAddTourType, id : string) => {
    const formData = new FormData()

    formData.append("tour_name", body.tour_name);
    formData.append("description", body.description);
    formData.append("image", body.image[0]);
    formData.append("thumbnail", body.thumbnail[0]);
    formData.append("address", body.address);
    formData.append("latitude", body.latitude);
    formData.append("longitude", body.longitude);
    formData.append("city_id", body.city_id);
    try {
      const response = await axiosWithConfig.put(`/tours/${id}`, formData);
      return response.data as { message: string };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  export const deleteTour = async (id: number) => {
    try {
      const response = await axiosWithConfig.delete(`tours/${id}`);
      return response.data as { message: string };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  export const deletePackage = async (id: number) => {
    try {
      const response = await axiosWithConfig.delete(`packages/${id}`);
      return response.data as { message: string };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
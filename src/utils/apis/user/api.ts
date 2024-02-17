import { ResponsePayload, ResponsePayloadPagination } from "@/utils/types/api"
import {
  GetCity,
  GetPackages,
  GetReview,
  GetTours,
  GetVoucher,
  IBookingType,
  IReviewType,
  IUserType,
  ResBooking,
  ResPayment,
  getBookingDetail,
} from "./type"
import axiosWithConfig from "../axiosWithConfig"

export const getUser = async () => {
  try {
    const response = await axiosWithConfig.get("/users")
    return response.data as ResponsePayload<IUserType>
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const getTours = async (pageNumber: number, limit: number) => {
  try {
    const response = await axiosWithConfig.get(
      `/tours?page=${pageNumber}&limit=${limit}`
    )
    return response.data as ResponsePayloadPagination<GetTours[]>
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const getCity = async (pageNumber: number) => {
  try {
    const response = await axiosWithConfig.get(`/citys?page=${pageNumber}&limit=8`)
    return response.data as ResponsePayloadPagination<GetCity[]>
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const getCityAddTour = async () => {
  try {
    const response = await axiosWithConfig.get(`/citys?page=1`)
    return response.data as ResponsePayloadPagination<GetCity[]>
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const getDetailCity = async (id: string) => {
  try {
    const response = await axiosWithConfig.get(`/citys/${id}`)
    return response.data as ResponsePayload<GetCity>
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const getToursByCity = async (city_id: string, pageNumber: number) => {
  try {
    const response = await axiosWithConfig.get(
      `tours/bycity/${city_id}?page=${pageNumber}&limit=8`
    )
    return response.data as ResponsePayloadPagination<GetTours[]>
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const getDetailTours = async (id: string) => {
  try {
    const response = await axiosWithConfig.get(`/tours/${id}`)
    return response.data as ResponsePayload<GetTours>
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const getPackages = async (tour_id: string) => {
  try {
    const response = await axiosWithConfig.get(`/packages/${tour_id}`)
    return response.data as ResponsePayload<GetPackages[]>
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const updateUser = async (body: IUserType) => {
  try {
    const formData = new FormData()

    formData.append("full_name", body.full_name)
    formData.append("phone_number", body.phone_number)
    formData.append("email", body.email)

    if (body.password) {
      formData.append("password", body.password)
    }

    if (body.image.length > 0) {
      formData.append("image", body.image[0])
    }
    const response = await axiosWithConfig.put("/users", formData)
    return response.data as { message: string }
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const getBookingCustomer = async () => {
  try {
    const response = await axiosWithConfig.get(`/bookings/users`)
    return response.data as ResponsePayload<ResBooking[]>
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const getSearch = async (q: string) => {
  const response = await axiosWithConfig.get(`tours/search?tour_name=${q}`)
  return response.data
}

export const getDetailBooking = async (booking_id: string) => {
  try {
    const response = await axiosWithConfig.get(`/bookings/users/${booking_id}`)
    return response.data as ResponsePayload<getBookingDetail>
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const getListVoucher = async () => {
  try {
    const response = await axiosWithConfig.get(`/vouchers`)
    return response.data as ResponsePayloadPagination<GetVoucher[]>
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const createBooking = async (body: IBookingType) => {
  try {
    const response = await axiosWithConfig.post(`/bookings`, body)
    return response.data as ResponsePayload<ResPayment>
  } catch (error: any) {
    throw new Error(error.message)
  }
}
export const createReview = async (body: IReviewType, booking_id: string) => {
  try {
    const response = await axiosWithConfig.post(
      `/bookings/${booking_id}/review`,
      body
    )
    if (response.status === 200) {
      return response.data as { message: string }
    }
  } catch (error: any) {
    const isError = error.response.data.message
    if (isError.includes("error creating review")) {
      throw new Error("Anda sudah memberikan review")
    }
  }
}

export const getAllReview = async (id: string) => {
  try {
    const response = await axiosWithConfig.get(`/tours/${id}/reviews`)
    return response.data as ResponsePayloadPagination<GetReview>
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const cancelBooking = async (id: string) => {
  try {
    const response = await axiosWithConfig.put(`/bookings/${id}`)
    return response.data as { message: string }
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const reportTour = async (id: string, body: {
  text_report: string
}) => {
  try {
    const response = await axiosWithConfig.post(`/tours/${id}/report`, body)
    if (response.status === 200) {
      return response.data as { message: string };
    }
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

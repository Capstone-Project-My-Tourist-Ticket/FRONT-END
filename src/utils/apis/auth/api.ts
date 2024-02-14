import { ResponsePayload } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { LoginPayload, LoginType, RegisterType, RegisterTypePengelola } from "./type";

export const userLogin = async (body: LoginType) => {
  try {
    const response = await axiosWithConfig.post("/login", body);
    return response.data as ResponsePayload<LoginPayload>;
  } catch (error: any) {
    throw Error(error.message.data.message);
  }
};

export const userRegister = async (body: RegisterType) => {
  console.log(body);
  try {
    const response = await axiosWithConfig.post("/users", body);
    if (response.status === 200) {
      return response.data as { message: string };
    }
  } catch (error: any) {
    const isError = error.response.data.message;
    if (isError.includes("Duplicate entry")) {
      throw Error("Email already existed");
    }
  }
};
export const PengelolaRegister = async (body: RegisterTypePengelola) => {
  console.log(body);
  try {
    const response = await axiosWithConfig.post("/users", body);
    if (response.status === 200) {
      return response.data as { message: string };
    }
  } catch (error: any) {
    const isError = error.response.data.message;
    if (isError.includes("Duplicate entry")) {
      throw Error("Email already existed");
    }
  }
};

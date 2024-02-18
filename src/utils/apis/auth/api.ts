import { ResponsePayload } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import {
  LoginPayload,
  LoginType,
  RegisterType,
  RegisterTypePengelola,
} from "./type";

export const userLogin = async (body: LoginType) => {
  try {
    const response = await axiosWithConfig.post("/login", body);
    if (response.status === 200) {
      return response.data as ResponsePayload<LoginPayload>;
    }
  } catch (error: any) {
    const isError = error.response.data.message;
    if (isError.includes("record not found")) {
      throw Error("Email not found");
    }
    if (isError.includes("password tidak sesuai")) {
      throw Error("Password incorrect");
    }
    throw Error(isError);
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
    if (isError.includes("email")) {
      throw Error("Email already existed");
    }
    if (isError.includes("phone_number")) {
      throw Error("Phone number already exists");
    }
    throw Error(isError);
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
    if (isError.includes("email")) {
      throw Error("Email already existed");
    }
    if (isError.includes("phone_number")) {
      throw Error("Phone number already exists");
    }
    if (isError.includes("ktp")) {
      throw Error("KTP already exists");
    }
    throw Error(isError);
  }
};

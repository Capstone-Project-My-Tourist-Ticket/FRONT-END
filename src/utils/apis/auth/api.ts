import { ResponsePayload } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { LoginPayload, LoginType } from "./type";

export const userLogin = async (body: LoginType) => {
  try {
    const response = await axiosWithConfig.post("/login", body);
    return response.data as ResponsePayload<LoginPayload>;
  } catch (error: any) {
    throw Error(error.message.data.message);
  }
};

import * as z from "zod";

export interface LoginPayload {
  full_name: string;
  role: string;
  token: string;
  status: string;
}

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email("Not a valid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  full_name: z.string().min(1, { message: "name is required" }),
  phone_number: z.string().min(1, { message: "username is required" }),
  email: z.string().min(1, { message: "email is required" }).email("Not a valid email"),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  role: z.string().default("customer"),
});

export const registerSchemaPengelola = z.object({
  full_name: z.string().min(1, { message: "name is required" }),
  phone_number: z.string().min(1, { message: "username is required" }),
  email: z.string().min(1, { message: "email is required" }).email("Not a valid email"),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  address: z.string().min(1, { message: "address is required" }),
  no_ktp: z.string().min(1, { message: "KTP is required" }),
  role: z.string().default("pengelola"),
});
export type LoginType = z.infer<typeof loginSchema>;
export type RegisterType = z.infer<typeof registerSchema>;
export type RegisterTypePengelola = z.infer<typeof registerSchemaPengelola>;

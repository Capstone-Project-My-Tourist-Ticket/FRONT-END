import * as z from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export interface Transaction {
  booking_id: string;
  user_id: number;
  tour_id: number;
  package_id: number;
  voucher_id: string;
  payment_type: string;
  gross_amount: number;
  status: string;
  va_number: string;
  bank: string;
  booking_date: string;
  phone_number: string;
  greeting: string;
  full_name: string;
  email: string;
  quantity: number;
  payment_expired: string;
  created_at: string;
  tour: {
    id: number;
    tour_name: string;
  };
  package: {
    id: number;
    package_name: string;
    price: number;
  };
}

export interface IMyTour {
  id: number;
  city_id: number;
  user_id: number;
  tour_name: string;
  description: string;
  image: string;
  thumbnail: string;
  address: string;
  latitude: number;
  longitude: number;
  created_at: string;
  updated_at: string;
  city: {
    id: number;
    city_name: string;
    image: string;
    thumbnail: string;
  };
}
export const tourSchema = z.object({
  tour_name: z.string().min(1, { message: "Enter your tour name" }),
  description: z.string().min(1, { message: "Enter description" }),
  image: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    )
    .optional()
    .or(z.literal("")),
  thumbnail: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    )
    .optional()
    .or(z.literal("")),
  address: z.string().min(1, { message: "Enter your address" }),
  latitude: z.number({ required_error: "latitude is required" }),
  longitude: z.number({ required_error: "longitude is required" }),
  city_id: z.number({ required_error: "city is required" }),
});

export type IAddTourType = z.infer<typeof tourSchema>;

export const addPackageSchema = z.object({
  package_name: z.string().min(1, { message: "Enter your package name package" }),
  jumlah_tiket: z.number({ required_error: "jumah tiket is required" }),
  price: z.number({ required_error: "price is required" }),
  benefits: z.string().array().optional(),
});
export type IAddPackage = z.infer<typeof addPackageSchema>;

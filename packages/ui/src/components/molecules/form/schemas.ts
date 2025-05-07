import { z } from "zod";

export const ContactUsFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(50, { message: "Name must be less than 50 characters" }),
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

export type ContactUsFormValues = z.infer<typeof ContactUsFormSchema>;

export const generalEnquiriesSchema = z.object({
  enquiry: z.string().min(1, { message: "enquiry type is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export type GeneralEnquiriesSchemaType = z.infer<typeof generalEnquiriesSchema>;

export const productEnquiriesSchema = z.object({
  product: z.string().min(1, { message: "Product is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export type ProductEnquiriesSchemaType = z.infer<typeof productEnquiriesSchema>;

export const orderEnquiriesSchema = z.object({
  orderID: z.string().min(1, { message: "orderID is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export type OrderEnquiriesSchemaType = z.infer<typeof orderEnquiriesSchema>;

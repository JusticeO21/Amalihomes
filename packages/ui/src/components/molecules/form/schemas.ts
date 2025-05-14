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

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(1, { message: "Full name is required" })
      .max(100, { message: "Full name must be less than 100 characters" })
      .trim(),

    email: z
      .string()
      .email({ message: "Invalid email address" })
      .max(100, { message: "Email must be less than 100 characters" })
      .trim()
      .toLowerCase(),

    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .max(50, { message: "Password must be less than 50 characters" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).*$/, {
        message: "Password must contain at least one lowercase, uppercase, number, and special character",
      }),

    confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;

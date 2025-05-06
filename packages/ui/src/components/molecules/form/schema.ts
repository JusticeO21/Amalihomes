import { z } from "zod";

export const productEnquiriesSchema = z.object({
    product: z.string().min(1, { message: "Product is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    message: z.string().min(1, { message: "Message is required" }),
});

export type ProductEnquiriesSchemaType = z.infer<typeof productEnquiriesSchema>;
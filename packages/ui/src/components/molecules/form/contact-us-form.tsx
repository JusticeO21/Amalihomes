"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Input, Typography } from "../../atoms";
import { toast } from "../toast";
import { ContactUsFormSchema, ContactUsFormValues } from "./schemas";
import { ContactUsFormProps } from "./types";

const ContactUsForm = ({
  formTitle,
  nameInputLabel,
  nameInputPlaceholder,
  emailInputLabel,
  emailInputPlaceholder,
  messageInputLabel,
  messageInputPlaceholder,
  submitButtonLabel,
}: ContactUsFormProps) => {
  const form = useForm<ContactUsFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(ContactUsFormSchema),
    mode: "onChange",
  });

  const { handleSubmit } = form;

  const onSubmit = (data: ContactUsFormValues) => {
    toast.success("Message sent successfully");
    form.reset();
    return data;
  };
  return (
    <div className="p-32 space-y-24 bg-white rounded-sm w-full sm:w-[558px] md:w-[600px] shadow-md">
      <Typography
        variant="h5"
        className="text-black leading-40 font-semibold text-h5-lg"
      >
        {formTitle ?? "Fill The form Below"}
      </Typography>

      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-40"
        >
          <div className="space-y-12">
            <Input
              name={"name"}
              type="text"
              label={nameInputLabel ?? "Name"}
              placeholder={nameInputPlaceholder ?? "Full name"}
              className="w-full"
            />
            <Input
              name={"email"}
              type="email"
              label={emailInputLabel ?? "Email"}
              placeholder={emailInputPlaceholder ?? "greg.astute@gmail.com"}
              className="w-full"
            />
            <Input
              name={"message"}
              type="textarea"
              label={messageInputLabel ?? "Message"}
              placeholder={messageInputPlaceholder ?? "Kindly type your message here..."}
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            className="w-full justify-center py-12 px-24 text-16 text-white font-bold"
          >
            {submitButtonLabel ?? "Submit"}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactUsForm;

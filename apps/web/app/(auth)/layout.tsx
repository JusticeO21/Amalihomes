import { ToastContainer } from "@amalihomes/ui/index";
import Image from "next/image";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className=" min-h-[100vh] lg:flex lg:justify-between">
      <ToastContainer position={"top-right"} />
      <div className="px-16 flex justify-center lg:justify-start lg:items-center">{children}</div>
      <div className="relative w-[50%] hidden lg:block">
        <Image
          src="/assets/auth.jpg"
          alt="auth-bg"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

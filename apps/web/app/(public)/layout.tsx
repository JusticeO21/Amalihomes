import React from "react";
import Contact from "@/features/contact/contact";
import { AppFooter } from "@/features/footer/footer";
import { AppHeader } from "@/features/header/header";
import { AppLiveChat } from "@/features/live-chat/live-chat";

const RouteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <AppHeader />
      {children}
      <Contact />
      <AppFooter />
      <AppLiveChat />
    </div>
  );
};

export default RouteLayout;

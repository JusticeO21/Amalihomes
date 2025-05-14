"use client";
import { HomePageState, LiveChatBottomNavBarState, useLiveChatStore } from "@/stores/use-live-chat-store";
import {
  GeneralEnquiriesForm,
  LiveChatFaqWindow,
  LiveChatHome,
  LiveChatPageWindow,
  LiveChatWindow,
  LiveChatWindowButton,
  LiveChatWindowHeader,
  LiveChatWrapper,
  OrderEnquiriesForm,
  LiveChatTawkTo,
  ProductEnquiriesForm,
  Tabs,
  TabsList,
  TabsContent,
  TabTrigger,
  LiveChatBottomNavBarItem,
} from "@amalihomes/ui/index";
import { useCallback, useEffect, useMemo } from "react";
import { ChatIconFields, LiveChatProps } from "./live-chat.types";
import { IconHome } from "@amalihomes/ui/components/icons/icon-home";
import { IconMessenger } from "@amalihomes/ui/components/icons/icon-messenger";
import { IconInfo } from "@amalihomes/ui/components/icons/icon-info";

export interface LiveChatSectionProps {
  data: LiveChatProps;
}

export const LiveChatSection = ({ data }: LiveChatSectionProps) => {
  const {
    isWindowOpen,
    toggleWindow,
    isBackBtnVisible,
    currentWindowTab,
    setTab,
    openChatWidget,
    activeHomePage,
    isBottomNavVisible,
    setCurrentHomePge,
    goBack,
  } = useLiveChatStore();

  const getImage = useCallback(
    (file: ChatIconFields) => ({
      url: `https:${file.file.url}`,
      alt: file.title,
    }),
    [],
  );

  const homeCards = useMemo(
    () => [
      {
        label: data.orderTitle,
        icon: getImage(data.orderIcon.fields),
        onClick: () => setCurrentHomePge(HomePageState.ORDER_ENQUIRY),
      },
      {
        label: data.productTitle,
        icon: getImage(data.productIcon.fields),
        onClick: () => setCurrentHomePge(HomePageState.PRODUCT_ENQUIRY),
      },
      {
        label: data.generalTitle,
        icon: getImage(data.generalIcon.fields),
        onClick: () => setCurrentHomePge(HomePageState.GENERAL_ENQUIRY),
      },
    ],
    [
      data.orderTitle,
      data.productTitle,
      data.generalTitle,
      data.orderIcon.fields,
      data.productIcon.fields,
      data.generalIcon.fields,
      getImage,
      setCurrentHomePge,
    ],
  );

  const faqCards = useMemo(
    () =>
      data.faqs.fields.questionCategories.map((faq) => ({
        label: faq.fields.title,
        count: faq.fields.questionsAnswers.length,
      })),
    [data.faqs.fields.questionCategories],
  );

  const profileImage = useMemo(() => getImage(data.profile.fields), [data.profile.fields, getImage]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const tawkApi = window.Tawk_API;
    if (!tawkApi) return;
    tawkApi.showWidget?.();
    tawkApi.maximize?.();
  }, []);

  return (
    <LiveChatWrapper isWindowOpen={isWindowOpen}>
      <LiveChatWindow isWindowOpen={isWindowOpen}>
        <LiveChatWindowHeader
          closeWindow={toggleWindow}
          isBackBtnVisible={isBackBtnVisible}
          back={() => goBack()}
        />

        <Tabs
          isControlled={true}
          currentTab={currentWindowTab}
          onTabChange={(tab) => setTab(tab as LiveChatBottomNavBarState)}
          className="w-full h-full flex flex-col gap-24"
        >
          <div className="flex-1 *:h-full">
            <TabsContent value="HOME">
              <LiveChatPageWindow
                isVisible={currentWindowTab === "HOME" && activeHomePage == HomePageState.PRODUCT_ENQUIRY}
              >
                <ProductEnquiriesForm
                  buttonLabel={data.productButtonLabel}
                  description={data.productFormDescription}
                  inputEmailLabel={data.generalInputEmailLabel}
                  inputEmailPlaceholder={data.generalEnquiresInputEmailPlaceholder}
                  title={data.productFormTitle}
                  inputMessageLabel={data.productInputMessageLabel}
                  inputMessagePlaceholder={data.productInputMessagePlaceholder}
                  inputSubjectLabel={data.productInputSubjectLabel}
                  inputSubjectPlaceholder={data.productInputSubjectPlaceholder}
                  inputProductLabel={data.productTitle}
                  inputProductPlaceholder={""}
                  inputProducts={[]}
                />
              </LiveChatPageWindow>

              <LiveChatPageWindow isVisible={currentWindowTab === "HOME" && activeHomePage == HomePageState.INITIAL}>
                <LiveChatHome
                  cards={homeCards}
                  introduction={data.introduction}
                  image={profileImage}
                  description={data.description}
                />
              </LiveChatPageWindow>

              <LiveChatPageWindow
                isVisible={currentWindowTab === "HOME" && activeHomePage == HomePageState.GENERAL_ENQUIRY}
              >
                <GeneralEnquiriesForm
                  buttonLabel="Send Enquiry"
                  description={data.generalFormDescription}
                  inputEmailLabel={data.generalInputEmailLabel}
                  inputEmailPlaceholder={data.generalEnquiresInputEmailPlaceholder}
                  inputEnquiryTypeLabel={data.generalEnquiryTypeLabel}
                  inputEnquiryTypePlaceholder={data.generalInputSubjectPlaceholder}
                  title={data.generalTitle}
                  inputMessageLabel={data.generalInputMessageLabel}
                  inputMessagePlaceholder={data.generalInputMessagePlaceholder}
                  inputSubjectLabel={data.generalInputSubjectLabel}
                  inputSubjectPlaceholder={data.generalInputSubjectPlaceholder}
                  inputEnquiryTypeOptions={data.generalEnquiryTypes}
                />
              </LiveChatPageWindow>

              <LiveChatPageWindow
                isVisible={currentWindowTab === "HOME" && activeHomePage == HomePageState.ORDER_ENQUIRY}
              >
                <OrderEnquiriesForm
                  buttonLabel="Send Enquiry"
                  description={data.orderFormDescription}
                  inputEmailLabel={data.orderInputEmailLabel}
                  inputEmailPlaceholder={data.orderInputEmailPlaceholder}
                  inputMessageLabel={data.orderMessageLabel}
                  inputMessagePlaceholder={data.orderInputMessagePlaceholder}
                  inputOrderIDLabel={data.orderInputOrderIdLabel}
                  inputOrderIDPlaceholder={data.orderInputOrderIdPlaceholder}
                  inputOrderIDs={[]}
                  inputSubjectLabel={data.orderInputSubjectLabel}
                  inputSubjectPlaceholder={data.orderInputSubjectPlaceholder}
                  title={data.orderTitle}
                />
              </LiveChatPageWindow>
            </TabsContent>
            <TabsContent
              value="MESSAGE"
              className="h-full"
            >
              <LiveChatTawkTo />
            </TabsContent>
            <TabsContent value="FAQ">
              <LiveChatFaqWindow
                title={data.faqTitle}
                description={data.faqDescription}
                cards={faqCards}
              />
            </TabsContent>
          </div>

          {isBottomNavVisible && (
            <TabsList className="p-16 rounded-lg flex justify-between items-center bg-brand-50 sticky bottom-0">
              <TabTrigger
                value="HOME"
                render={(value) => (
                  <LiveChatBottomNavBarItem
                    icon={IconHome}
                    isActive={value == "HOME"}
                  />
                )}
              />
              <TabTrigger
                value="MESSAGE"
                onClick={() => openChatWidget()}
                render={(value) => (
                  <LiveChatBottomNavBarItem
                    icon={IconMessenger}
                    isActive={value == "MESSAGE"}
                  />
                )}
              />
              <TabTrigger
                value="FAQ"
                render={(value) => (
                  <LiveChatBottomNavBarItem
                    icon={IconInfo}
                    isActive={value == "FAQ"}
                  />
                )}
              />
            </TabsList>
          )}
        </Tabs>
      </LiveChatWindow>

      <LiveChatWindowButton
        image={profileImage}
        openWindow={toggleWindow}
        isWindowOpen={isWindowOpen}
      />
    </LiveChatWrapper>
  );
};

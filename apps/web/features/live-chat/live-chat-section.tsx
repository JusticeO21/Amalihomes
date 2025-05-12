"use client";
import { HomePageState, useLiveChatStore } from "@/stores/use-live-chat-store";
import {
  GeneralEnquiriesForm,
  LiveChatBottomNavBarState,
  LiveChatFaqWindow,
  LiveChatHome,
  LiveChatWindow,
  LiveChatWindowBottomNavBar,
  LiveChatWindowButton,
  LiveChatWindowHeader,
  LiveChatWrapper,
  OrderEnquiriesForm,
  ProductEnquiriesForm,
} from "@amalihomes/ui/index";
import { useCallback, useEffect, useMemo } from "react";
import { ChatIconFields, LiveChatProps } from "./live-chat.types";

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
    isChatWidgetVisible,
    closeChatWindow,
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

    const setupTawk = () => {
      const tawkApi = window.Tawk_API;
      if (!tawkApi) return;

      if (isChatWidgetVisible) {
        tawkApi.showWidget?.();
        tawkApi.maximize?.();
      }

      tawkApi.onChatHidden = function () {
        if (tawkApi.isChatMinimized()) {
          tawkApi.hideWidget?.();
          closeChatWindow?.();
        }
      };

      tawkApi.onChatMinimized = function () {
        tawkApi.hideWidget?.();
        closeChatWindow?.();
      };

      tawkApi.onChatMaximized = function () {
        openChatWidget?.();
        tawkApi?.showWidget?.();
      };

      window.Tawk_API.onChatMessageAgent = function () {
        openChatWidget?.();
        tawkApi?.showWidget?.();
      };
    };

    if (window.Tawk_API && Object.keys(window.Tawk_API).length) {
      setupTawk();
      return;
    }

    const interval = setInterval(() => {
      if (window.Tawk_API && Object.keys(window.Tawk_API).length) {
        setupTawk();
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isChatWidgetVisible, closeChatWindow, openChatWidget]);

  if (isChatWidgetVisible) return null;

  return (
    <LiveChatWrapper isWindowOpen={isWindowOpen}>
      <LiveChatWindow isWindowOpen={isWindowOpen}>
        <LiveChatWindowHeader
          closeWindow={toggleWindow}
          isBackBtnVisible={isBackBtnVisible}
          back={() => goBack()}
        />

        {currentWindowTab === LiveChatBottomNavBarState.HOME && activeHomePage == HomePageState.INITIAL && (
          <LiveChatHome
            cards={homeCards}
            introduction={data.introduction}
            image={profileImage}
            description={data.description}
          />
        )}

        {currentWindowTab === LiveChatBottomNavBarState.HOME && activeHomePage == HomePageState.GENERAL_ENQUIRY && (
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
        )}
        {currentWindowTab === LiveChatBottomNavBarState.HOME && activeHomePage == HomePageState.ORDER_ENQUIRY && (
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
        )}

        {currentWindowTab === LiveChatBottomNavBarState.HOME && activeHomePage == HomePageState.PRODUCT_ENQUIRY && (
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
        )}

        {currentWindowTab === LiveChatBottomNavBarState.FAQ && (
          <LiveChatFaqWindow
            title={data.faqTitle}
            description={data.faqDescription}
            cards={faqCards}
          />
        )}

        {isBottomNavVisible && (
          <LiveChatWindowBottomNavBar
            currentTab={currentWindowTab}
            setTab={setTab}
          />
        )}
      </LiveChatWindow>

      <LiveChatWindowButton
        image={profileImage}
        openWindow={toggleWindow}
        isWindowOpen={isWindowOpen}
      />
    </LiveChatWrapper>
  );
};

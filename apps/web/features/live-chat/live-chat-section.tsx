"use client";
import { useLiveChatStore } from "@/stores/use-live-chat-store";
import {
  LiveChatBottomNavBarState,
  LiveChatFaqWindow,
  LiveChatHome,
  LiveChatWindow,
  LiveChatWindowBottomNavBar,
  LiveChatWindowButton,
  LiveChatWindowHeader,
  LiveChatWrapper,
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
      { label: data.orderTitle, icon: getImage(data.orderIcon.fields) },
      { label: data.productTitle, icon: getImage(data.productIcon.fields) },
      { label: data.generalTitle, icon: getImage(data.generalIcon.fields) },
    ],
    [
      data.orderTitle,
      data.productTitle,
      data.generalTitle,
      data.orderIcon.fields,
      data.productIcon.fields,
      data.generalIcon.fields,
      getImage,
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
  }, [isChatWidgetVisible, closeChatWindow]);

  if (isChatWidgetVisible) return null;

  return (
    <LiveChatWrapper isWindowOpen={isWindowOpen}>
      <LiveChatWindow isWindowOpen={isWindowOpen}>
        <LiveChatWindowHeader
          closeWindow={toggleWindow}
          isBackBtnVisible={isBackBtnVisible}
        />

        {currentWindowTab === LiveChatBottomNavBarState.HOME && (
          <LiveChatHome
            cards={homeCards}
            introduction={data.introduction}
            image={profileImage}
            description={data.description}
          />
        )}

        {currentWindowTab === LiveChatBottomNavBarState.FAQ && (
          <LiveChatFaqWindow
            title={data.faqTitle}
            description={data.faqDescription}
            cards={faqCards}
          />
        )}

        <LiveChatWindowBottomNavBar
          currentTab={currentWindowTab}
          setTab={setTab}
        />
      </LiveChatWindow>

      <LiveChatWindowButton
        image={profileImage}
        openWindow={toggleWindow}
        isWindowOpen={isWindowOpen}
      />
    </LiveChatWrapper>
  );
};

import type { Meta, StoryObj } from "@storybook/react";
import {
  LiveChatBottomNavBarState,
  LiveChatWrapper,
  LiveChatWindow,
  LiveChatWindowHeader,
  LiveChatPageWindow,
  LiveChatHome,
  LiveChatFaqWindow,
  LiveChatWindowBottomNavBar,
  LiveChatWindowButton,
  GeneralEnquiriesForm,
  OrderEnquiriesForm,
  ProductEnquiriesForm,
} from "@amalihomes/ui";
import { useEffect } from "react";
import { HomePageState, useLiveChatStore } from "./use-live-chat-store";
import { LiveChatTawkTo } from "./tawk-to";

const LiveChatUIPreview = ({ data }: { data: typeof mockData }) => {
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

  const getImage = (file: typeof mockData.profileImage) => ({
    url: file.url,
    alt: file.alt,
  });

  const homeCards = [
    {
      label: data.orderTitle,
      icon: getImage(data.orderIcon),
      onClick: () => setCurrentHomePge(HomePageState.ORDER_ENQUIRY),
    },
    {
      label: data.productTitle,
      icon: getImage(data.productIcon),
      onClick: () => setCurrentHomePge(HomePageState.PRODUCT_ENQUIRY),
    },
    {
      label: data.generalTitle,
      icon: getImage(data.generalIcon),
      onClick: () => setCurrentHomePge(HomePageState.GENERAL_ENQUIRY),
    },
  ];

  const faqCards = data.faqCards;
  const profileImage = getImage(data.profileImage);

  useEffect(() => {
    // Mock implementation for Storybook
    console.log("Tawk_API initialized in story");
    return () => {
      console.log("Tawk_API cleanup in story");
    };
  }, []);

  return (
    <LiveChatWrapper isWindowOpen={isWindowOpen}>
      <LiveChatWindow isWindowOpen={isWindowOpen}>
        <LiveChatWindowHeader
          closeWindow={toggleWindow}
          isBackBtnVisible={isBackBtnVisible}
          back={() => goBack()}
        />

        <LiveChatPageWindow
          isVisible={currentWindowTab === LiveChatBottomNavBarState.HOME && activeHomePage === HomePageState.INITIAL}
        >
          <LiveChatHome
            cards={homeCards}
            introduction={data.introduction}
            image={profileImage}
            description={data.description}
          />
        </LiveChatPageWindow>

        <LiveChatPageWindow
          className="[state='hidden':hidden] [state='visible':visible]"
          isVisible={currentWindowTab === LiveChatBottomNavBarState.MESSAGE}
        >
          <LiveChatTawkTo />
        </LiveChatPageWindow>

        <LiveChatPageWindow
          isVisible={
            currentWindowTab === LiveChatBottomNavBarState.HOME && activeHomePage === HomePageState.GENERAL_ENQUIRY
          }
        >
          <GeneralEnquiriesForm
            buttonLabel="Send Enquiry"
            description={data.generalFormDescription}
            inputEmailLabel={data.generalInputEmailLabel}
            inputEmailPlaceholder={data.generalInputEmailPlaceholder}
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
          isVisible={
            currentWindowTab === LiveChatBottomNavBarState.HOME && activeHomePage === HomePageState.ORDER_ENQUIRY
          }
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

        <LiveChatPageWindow
          isVisible={
            currentWindowTab === LiveChatBottomNavBarState.HOME && activeHomePage === HomePageState.PRODUCT_ENQUIRY
          }
        >
          <ProductEnquiriesForm
            buttonLabel={data.productButtonLabel}
            description={data.productFormDescription}
            inputEmailLabel={data.generalInputEmailLabel}
            inputEmailPlaceholder={data.generalInputEmailPlaceholder}
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

        <LiveChatPageWindow isVisible={currentWindowTab === LiveChatBottomNavBarState.FAQ}>
          <LiveChatFaqWindow
            title={data.faqTitle}
            description={data.faqDescription}
            cards={faqCards}
          />
        </LiveChatPageWindow>

        <LiveChatPageWindow
          isVisible={isBottomNavVisible}
          className="sticky bottom-0 h-min"
        >
          <LiveChatWindowBottomNavBar
            currentTab={currentWindowTab}
            setTab={(tab) => {
              setTab(tab);
              if (tab === LiveChatBottomNavBarState.MESSAGE) {
                openChatWidget();
              }
            }}
          />
        </LiveChatPageWindow>
      </LiveChatWindow>

      <LiveChatWindowButton
        image={profileImage}
        openWindow={toggleWindow}
        isWindowOpen={isWindowOpen}
      />
    </LiveChatWrapper>
  );
};

const meta: Meta<typeof LiveChatUIPreview> = {
  title: "Components/Organisms/LiveChat",
  component: LiveChatUIPreview,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Live chat interface with multiple views and states showing forms, FAQ, and chat functionality.",
      },
    },
  },

  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof LiveChatUIPreview>;

const mockData = {
  introduction: "Welcome to Amali Homes Support",
  description: "We're here to help! Please select a category below to get started.",
  profileImage: {
    url: "https://i.pravatar.cc/300",
    alt: "Support Agent",
  },

  // Order Enquiries
  orderTitle: "Order Enquiries",
  orderIcon: {
    url: "https://i.pravatar.cc/300",
    alt: "Order Icon",
  },
  orderFormDescription: "Need help with your order? Fill out the form below.",
  orderInputEmailLabel: "Email",
  orderInputEmailPlaceholder: "Enter your email",
  orderMessageLabel: "Message",
  orderInputMessagePlaceholder: "How can we help with your order?",
  orderInputOrderIdLabel: "Order ID",
  orderInputOrderIdPlaceholder: "Enter your order ID",
  orderInputSubjectLabel: "Subject",
  orderInputSubjectPlaceholder: "What is this regarding?",

  // Product Enquiries
  productTitle: "Product Enquiries",
  productIcon: {
    url: "https://i.pravatar.cc/300",
    alt: "Product Icon",
  },
  productFormTitle: "Product Enquiry",
  productFormDescription: "Have questions about our products? Let us know below.",
  productButtonLabel: "Submit",
  productInputMessageLabel: "Message",
  productInputMessagePlaceholder: "Tell us about your product question",
  productInputSubjectLabel: "Subject",
  productInputSubjectPlaceholder: "What product do you need help with?",

  // General Enquiries
  generalTitle: "General Enquiries",
  generalIcon: {
    url: "https://i.pravatar.cc/300",
    alt: "General Icon",
  },
  generalFormDescription: "For all other enquiries, please fill out the form below.",
  generalInputEmailLabel: "Email",
  generalInputEmailPlaceholder: "Enter your email",
  generalEnquiryTypeLabel: "Enquiry Type",
  generalInputSubjectLabel: "Subject",
  generalInputSubjectPlaceholder: "What is this regarding?",
  generalInputMessageLabel: "Message",
  generalInputMessagePlaceholder: "How can we help you?",
  generalEnquiryTypes: ["Feedback", "Question", "Suggestion", "Other"],

  // FAQ
  faqTitle: "Frequently Asked Questions",
  faqDescription: "Find answers to commonly asked questions here.",
  faqCards: [
    { label: "Shipping & Delivery", count: 3 },
    { label: "Returns & Refunds", count: 4 },
    { label: "Products", count: 6 },
    { label: "Account & Orders", count: 5 },
  ],
};

export const Closed: Story = {
  args: {
    data: mockData,
  },
  parameters: {
    docs: {
      description: {
        story: "Initial state with chat bubble visible but not expanded",
      },
    },
  },
};

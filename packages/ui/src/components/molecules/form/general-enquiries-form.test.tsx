import { cleanup, render, screen } from "@testing-library/react";
import GeneralEnquiriesForm from "./general-enquiries-form";

jest.mock("../toast", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe("GeneralEnquiriesForm", () => {
  const mockProps = {
    title: "Contact Us",
    description: "Get in touch with our team",
    buttonLabel: "Submit",
    inputEmailLabel: "Email",
    inputEmailPlaceholder: "Enter your email",
    inputSubjectLabel: "Subject",
    inputSubjectPlaceholder: "Enter subject",
    inputMessageLabel: "Message",
    inputMessagePlaceholder: "Enter your message",
    inputEnquiryTypeLabel: "Enquiry Type",
    inputEnquiryTypePlaceholder: "Select enquiry type",
    inputEnquiryTypeOptions: ["Sales", "Support", "Feedback"],
  };

  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  beforeEach(() => {
    render(<GeneralEnquiriesForm {...mockProps} />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("renders correctly with all props", () => {
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByLabelText(mockProps.inputEmailLabel)).toBeInTheDocument();
    expect(screen.getByLabelText(mockProps.inputSubjectLabel)).toBeInTheDocument();
    expect(screen.getByLabelText(mockProps.inputMessageLabel)).toBeInTheDocument();
    expect(screen.getByText(mockProps.inputEnquiryTypeLabel)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: mockProps.buttonLabel })).toBeInTheDocument();
  });
});

import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import OrderEnquiriesForm from "./order-enquiries-form";

jest.mock("../toast", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe("OrderEnquiriesForm", () => {
  let mockProps: React.ComponentProps<typeof OrderEnquiriesForm>;

  beforeAll(() => {
    mockProps = {
      title: "Contact Us",
      description: "Get in touch with our team",
      buttonLabel: "Submit",
      inputEmailLabel: "Email",
      inputEmailPlaceholder: "Enter your email",
      inputSubjectLabel: "Subject",
      inputSubjectPlaceholder: "Enter subject",
      inputMessageLabel: "Message",
      inputMessagePlaceholder: "Enter your message",
      inputOrderIDLabel: "Order ID",
      inputOrderIDPlaceholder: "#ORD1234",
      inputOrderIDs: [
        { id: "#ORD1234", price: "$ 100" },
        { id: "#ORD5678", price: "$ 200" },
        { id: "#ORD9101", price: "$ 300" },
      ],
    };
  });

  beforeEach(() => {
    render(<OrderEnquiriesForm {...mockProps} />);
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders correctly with all props", () => {
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByLabelText(mockProps.inputEmailLabel)).toBeInTheDocument();
    expect(screen.getByLabelText(mockProps.inputSubjectLabel)).toBeInTheDocument();
    expect(screen.getByLabelText(mockProps.inputMessageLabel)).toBeInTheDocument();
    expect(screen.getByLabelText(mockProps.inputOrderIDLabel)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: mockProps.buttonLabel })).toBeInTheDocument();
  });
});

import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { toast } from "../toast";
import ProductEnquiriesForm from "./product-enquiries-form";

jest.mock("../toast", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe("ProductEnquiriesForm", () => {
  let mockProps: React.ComponentProps<typeof ProductEnquiriesForm>;
  const testData = {
    product: "Test Product",
    email: "test@example.com",
    subject: "Test Subject",
    message: "Test message content",
  };

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
      inputProductLabel: "Product",
      inputProductPlaceholder: "Select product",
    };
  });

  beforeEach(() => {
    render(<ProductEnquiriesForm {...mockProps} />);
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
    expect(screen.getByLabelText(mockProps.inputProductLabel)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: mockProps.buttonLabel })).toBeInTheDocument();
  });

  it("submits successfully with valid data", async () => {
    fireEvent.input(screen.getByLabelText(mockProps.inputProductLabel), {
      target: { value: testData.product },
    });
    fireEvent.input(screen.getByLabelText(mockProps.inputEmailLabel), {
      target: { value: testData.email },
    });
    fireEvent.input(screen.getByLabelText(mockProps.inputSubjectLabel), {
      target: { value: testData.subject },
    });
    fireEvent.input(screen.getByLabelText(mockProps.inputMessageLabel), {
      target: { value: testData.message },
    });
    fireEvent.click(screen.getByRole("button", { name: mockProps.buttonLabel }));

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith("Form submitted successfully!");
    });
  });

  it("reset form after submitting", async () => {
    fireEvent.input(screen.getByLabelText(mockProps.inputProductLabel), {
      target: { value: testData.product },
    });
    fireEvent.input(screen.getByLabelText(mockProps.inputEmailLabel), {
      target: { value: testData.email },
    });
    fireEvent.input(screen.getByLabelText(mockProps.inputSubjectLabel), {
      target: { value: testData.subject },
    });
    fireEvent.input(screen.getByLabelText(mockProps.inputMessageLabel), {
      target: { value: testData.message },
    });

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: mockProps.buttonLabel }));
    });

    await waitFor(() => {
      expect(screen.getByLabelText(mockProps.inputProductLabel)).toHaveValue("");
    });
  });
});

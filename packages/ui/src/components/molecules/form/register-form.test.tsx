import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import RegisterForm from "./register-form";

describe("RegisterForm", () => {
  const mockRegister = jest.fn();

  beforeEach(() => {
    mockRegister.mockClear();
  });

  it("renders correctly", () => {
    render(<RegisterForm register={mockRegister} />);

    expect(screen.getByText(/Amali/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Create an Account." })).toBeInTheDocument();
    expect(screen.getByText("Join us to enjoy personalized features.")).toBeInTheDocument();

    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("Terms & Conditions")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Create an account" })).toBeInTheDocument();
    expect(screen.getByText("Already have an account?")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("shows loading spinner when isLoading is true", () => {
    render(
      <RegisterForm
        register={mockRegister}
        isLoading={true}
      />,
    );

    expect(screen.getByLabelText("spinner")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create an account" })).toBeDisabled();
    expect(screen.getByLabelText("Full Name")).toBeDisabled();
    expect(screen.getByLabelText("Email")).toBeDisabled();
    expect(screen.getByLabelText("Password")).toBeDisabled();
    expect(screen.getByLabelText("Confirm Password")).toBeDisabled();
  });

  it("validates required fields before submission", async () => {
    render(<RegisterForm register={mockRegister} />);

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Create an account" }));
    });

    await waitFor(() => {
      expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
      expect(screen.getByText(/confirm password is required/i)).toBeInTheDocument();
      expect(screen.getByText(/you must agree to the terms and conditions/i)).toBeInTheDocument();
    });
  });

  it("shows error when passwords do not match", async () => {
    render(<RegisterForm register={mockRegister} />);

    fireEvent.input(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.input(screen.getByLabelText("Confirm Password"), {
      target: { value: "differentpassword" },
    });

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Create an account" }));
    });

    await waitFor(() => {
      expect(screen.getByText("Passwords do not match")).toBeInTheDocument();
    });
  });

  it("submits the form with valid data", async () => {
    render(<RegisterForm register={mockRegister} />);

    const testData = {
      fullName: "John Doe",
      email: "test@example.com",
      password: "P@ssword123",
      confirmPassword: "P@ssword123",
      terms: true,
    };

    fireEvent.input(screen.getByLabelText("Full Name"), {
      target: { value: testData.fullName },
    });
    fireEvent.input(screen.getByLabelText("Email"), {
      target: { value: testData.email },
    });
    fireEvent.input(screen.getByLabelText("Password"), {
      target: { value: testData.password },
    });
    fireEvent.input(screen.getByLabelText("Confirm Password"), {
      target: { value: testData.confirmPassword },
    });

    fireEvent.click(screen.getByRole("checkbox"));

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Create an account" }));
    });

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledTimes(1);
      expect(mockRegister).toHaveBeenCalledWith(testData);
    });
  });
});

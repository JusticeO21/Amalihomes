import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import LoginForm from "./login-form";

describe("LoginForm", () => {
  const mockLogin = jest.fn();

  beforeEach(() => {
    mockLogin.mockClear();
  });

  it("renders correctly", () => {
    render(<LoginForm login={mockLogin} />);

    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText("Forgot Password?")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByText("Create an account")).toBeInTheDocument();
  });

  it("shows loading spinner when isLoading is true", () => {
    render(
      <LoginForm
        login={mockLogin}
        isLoading={true}
      />,
    );

    expect(screen.getByLabelText("spinner")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeDisabled();
    expect(screen.getByLabelText("Email")).toBeDisabled();
    expect(screen.getByLabelText("Password")).toBeDisabled();
  });

  it("validates form inputs before submission", async () => {
    render(<LoginForm login={mockLogin} />);

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Login" }));
    });

    await waitFor(() => {
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  it("submits the form with valid data", async () => {
    render(<LoginForm login={mockLogin} />);

    const testData = {
      email: "test@example.com",
      password: "password123",
    };

    fireEvent.input(screen.getByLabelText("Email"), {
      target: { value: testData.email },
    });
    fireEvent.input(screen.getByLabelText("Password"), {
      target: { value: testData.password },
    });

    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledTimes(1);
      expect(mockLogin).toHaveBeenCalledWith(testData);
    });
  });

  it("disables form elements during loading", () => {
    render(
      <LoginForm
        login={mockLogin}
        isLoading={true}
      />,
    );

    expect(screen.getByLabelText("Email")).toBeDisabled();
    expect(screen.getByLabelText("Password")).toBeDisabled();
    expect(screen.getByRole("button", { name: "Login" })).toBeDisabled();
  });
});

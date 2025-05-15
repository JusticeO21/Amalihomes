import Login from "@/features/auth/login";
import { getSeoTags } from "@/lib/seo/seo";

export const generateMetadata = async () =>
  getSeoTags({
    title: "Login",
    description: "Login to your account",
  });

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;

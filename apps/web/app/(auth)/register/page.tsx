import Register from "@/features/auth/register";
import { getSeoTags } from "@/lib/seo/seo";

export const generateMetadata = async () =>
  getSeoTags({
    title: "Create an account",
    description: "Join us to enjoy personalized features",
  });

const RegisterPage = () => {
  return <Register />;
};

export default RegisterPage;

import { GoogleTagManager } from "@next/third-parties/google";

export const Analytics = () => {
  const tagId = process.env.NEXT_PUBLIC_GTM_ID;

  return <GoogleTagManager gtmId={tagId} />;
};

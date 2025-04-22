export const isValidUrl = (url: string): boolean => {
  if (!url || typeof url !== "string") return false;

  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol) && parsed.hostname.includes(".");
  } catch {
    return false;
  }
};

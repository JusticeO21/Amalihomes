export const formatPhoneNumber = (phoneNumber: string): string => {
  if (!phoneNumber) return "";

  const cleaned = phoneNumber.replace(/[^\d+]/g, "");

  const hasPlus = cleaned.startsWith("+");
  const digitsOnly = hasPlus ? cleaned.slice(1) : cleaned;

  if (!digitsOnly) return "";

  let countryCode = "";
  let localNumber = digitsOnly;

  if (digitsOnly.length > 9) {
    countryCode = digitsOnly.slice(0, digitsOnly.length - 9);
    localNumber = digitsOnly.slice(-9);
  }

  const localChunks = localNumber.match(/.{1,3}/g) || [];
  const formattedLocal = localChunks.join(" ");

  return `${hasPlus ? "+" : ""}${countryCode ? countryCode + " " : ""}${formattedLocal}`;
};

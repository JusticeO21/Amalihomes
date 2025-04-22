import { formatPhoneNumber } from "../format-tel-number/format-tel-number";

export const isValidTelNumber = (telNumber: string) => {
  const validCharsRegex = /^[0-9+\-.()\s]*$/;
  if (!validCharsRegex.test(telNumber)) {
    return false;
  }

  const formatRegex = /^\+?([0-9]{1,3})?[-. (]*([0-9]{2,4})[-. )]*([0-9]{3,4})[-. ]*([0-9]{3,4})$/;
  return formatRegex.test(formatPhoneNumber(telNumber));
};

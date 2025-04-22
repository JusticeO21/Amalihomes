import { setCookie, getCookie, deleteCookie } from "cookies-next";

export function saveConsent(consent: { [key: string]: boolean }) {
  setCookie("cookie_consent", JSON.stringify(consent), { maxAge: 31536000, path: "/" });
  setCookie("consent_given", "true", { maxAge: 31536000, path: "/" }); // Mark consent given
}

export function getConsent() {
  const consentCookie = getCookie("cookie_consent");
  return consentCookie ? JSON.parse(consentCookie as string) : null;
}

export function hasGivenConsent() {
  return getCookie("consent_given") === "true";
}

export function clearConsent() {
  deleteCookie("cookie_consent");
  deleteCookie("consent_given");
}

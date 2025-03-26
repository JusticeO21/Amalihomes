import { IconFacebook } from "components/icons/icon-facebook";
import { IconInstagram } from "components/icons/icon-instagram";
import { IconLinkedin } from "components/icons/icon-linkedin";
import { IconTwitter } from "components/icons/icon-twitter";
import { IconYoutube } from "components/icons/icon-youtube";
import Link from "next/link";

export const FooterSocialLinks = () => {
  return (
    <>
      <div className="flex gap-24 text-14 flex-col md:flex-row items-center justify-center md:items-start md:justify-start">
        <p className="text-white">© Amali Homes. All rights reserved.</p>
        <div className="flex gap-24 text-white">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/terms-of-service">Cookie Settings</Link>
        </div>
      </div>
      <div className="flex gap-12">
        <Link href="/">
          <IconFacebook />
        </Link>
        <Link href="/">
          <IconInstagram />
        </Link>
        <Link href="/">
          <IconTwitter />
        </Link>
        <Link href="/">
          <IconLinkedin />
        </Link>
        <Link href="/">
          <IconYoutube />
        </Link>
      </div>
    </>
  );
};

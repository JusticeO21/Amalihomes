export const resolveLink = (href: string) => {
  return href == "home" ? "/" : `/${href}`;
};

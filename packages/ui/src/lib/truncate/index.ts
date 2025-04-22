export const truncateText = (text: React.ReactNode, maxLength: number): React.ReactNode => {
  if (typeof text !== "string" || !maxLength) return text;
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

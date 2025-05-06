export const IconGeneralEnquiry = ({
  color = "#EA690C",
  width = 18,
  height = 18,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M0.75 3.75V16.5C0.75 16.6989 0.829018 16.8897 0.96967 17.0303C1.11032 17.171 1.30109 17.25 1.5 17.25H16.5C16.6989 17.25 16.8897 17.171 17.0303 17.0303C17.171 16.8897 17.25 16.6989 17.25 16.5V3.75M0.75 3.75L2.25 0.75H15.75L17.25 3.75M0.75 3.75H17.25M5.81803 11.068L9 14.25M9 14.25L12.182 11.068M9 14.25V6.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

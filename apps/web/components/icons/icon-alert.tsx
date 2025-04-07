interface IconAlertProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  fillColor?: string;
  strokeColor?: string;
  iconStrokeColor?: string;
  iconStrokeWidth?: number | string;
}

export const IconAlert = ({
  width = 32,
  height = 32,
  fillColor = "#F4F6FB",
  strokeColor = "#E9EDF5",
  iconStrokeColor = "#3C5D8D",
  iconStrokeWidth = 2,
  ...props
}: IconAlertProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.5 16C0.5 7.43959 7.43959 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16Z"
        fill={fillColor}
      />
      <path
        d="M0.5 16C0.5 7.43959 7.43959 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16Z"
        stroke={strokeColor}
      />
      <path
        d="M17 20H16V16H15M16 12H16.01M25 16C25 20.9706 20.9706 25 16 25C11.0294 25 7 20.9706 7 16C7 11.0294 11.0294 7 16 7C20.9706 7 25 11.0294 25 16Z"
        stroke={iconStrokeColor}
        strokeWidth={iconStrokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

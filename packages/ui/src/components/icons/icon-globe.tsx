interface IconGlobeProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  strokeWidth?: number | string;
}

export const IconGlobe = ({
  width = 20,
  height = 20,
  strokeColor = "#5D5D5D",
  strokeWidth = 1.5,
  ...props
}: IconGlobeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.51287 13H18.4876M1.51251 7H18.4874M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM13.75 10C13.75 14.8371 12.0711 18.7584 10 18.7584C7.92893 18.7584 6.25 14.8371 6.25 10C6.25 5.16287 7.92893 1.2416 10 1.2416C12.0711 1.2416 13.75 5.16287 13.75 10Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

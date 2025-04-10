interface IconCartProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const IconCart = ({ size = 21, color = "#5D5D5D", className = "", ...props }: IconCartProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M17.25 16.25C16.2145 16.25 15.375 17.0895 15.375 18.125C15.375 19.1605 16.2145 20 17.25 20C18.2855 20 19.125 19.1605 19.125 18.125C19.125 17.0895 18.2855 16.25 17.25 16.25ZM17.25 16.25H6.54545L3.93015 1.86584C3.89873 1.69303 3.80766 1.53673 3.67281 1.42419C3.53796 1.31164 3.36789 1.25 3.19225 1.25H1.5M5.86363 12.5H17.6345C17.9858 12.5 18.3259 12.3767 18.5956 12.1516C18.8653 11.9265 19.0475 11.6139 19.1103 11.2683L20.25 5H4.5M9.375 18.125C9.375 19.1605 8.53553 20 7.5 20C6.46447 20 5.625 19.1605 5.625 18.125C5.625 17.0895 6.46447 16.25 7.5 16.25C8.53553 16.25 9.375 17.0895 9.375 18.125Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconCart;

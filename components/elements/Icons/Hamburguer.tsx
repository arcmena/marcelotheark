function Hamburguer({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 30 30"
      width="30"
      height="30"
      {...props}
    >
      <path
        stroke="url(#paint0_linear_15:102)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 8.5h20M6 16h20M6 23.5h20"
      ></path>
      <path
        stroke="#FBFBFB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 7h20M4 14.5h20M4 22h20"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_15:102"
          x1="6"
          x2="26"
          y1="15.5"
          y2="15.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6417CB"></stop>
          <stop offset="1" stopColor="#74C6FA"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Hamburguer

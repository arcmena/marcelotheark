function ArrowRight({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
      {...props}
    >
      <path
        stroke="url(#paint0_linear_44:134)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22.5 15h-15m8.75-6.25L22.5 15l-6.25-6.25zM22.5 15l-6.25 6.25L22.5 15z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_44:134"
          x1="7.5"
          x2="22.5"
          y1="15"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6417CB"></stop>
          <stop offset="1" stopColor="#74C6FA"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ArrowRight

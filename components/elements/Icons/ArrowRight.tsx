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
        stroke="#FBFBFB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
        strokeWidth="2"
        d="M22.5 15h-15m8.75-6.25L22.5 15l-6.25-6.25zM22.5 15l-6.25 6.25L22.5 15z"
      ></path>
    </svg>
  )
}

export default ArrowRight
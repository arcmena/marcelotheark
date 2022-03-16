import React from 'react'

function ArrowDown({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
      {...props}
    >
      <path
        fill="url(#paint0_linear_211_153)"
        fillRule="evenodd"
        d="M21.99 6.01a1.4 1.4 0 010 1.98l-7 7a1.4 1.4 0 01-1.98 0l-7-7a1.4 1.4 0 011.98-1.98L14 12.02l6.01-6.01a1.4 1.4 0 011.98 0zm0 8.4a1.4 1.4 0 010 1.98l-7 7a1.4 1.4 0 01-1.98 0l-7-7a1.4 1.4 0 111.98-1.98L14 20.42l6.01-6.01a1.4 1.4 0 011.98 0z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_211_153"
          x1="4.9"
          x2="22.4"
          y1="15.4"
          y2="15.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6417CB"></stop>
          <stop offset="1" stopColor="#74C6FA"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ArrowDown

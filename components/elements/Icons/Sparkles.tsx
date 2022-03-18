import React from 'react'

function Sparkles({ ...props }) {
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
        stroke="url(#paint0_linear_309_17)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.25 3.75v5-5zm-2.5 2.5h5-5zm3.75 15v5-5zM5 23.75h5-5zm11.25-20l2.858 8.571L26.25 15l-7.142 2.679-2.858 8.571-2.857-8.571L6.25 15l7.143-2.679L16.25 3.75z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_309_17"
          x1="3.75"
          x2="26.25"
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

export default Sparkles

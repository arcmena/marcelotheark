import React from 'react'

function ExternalLink({ ...props }) {
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
        fill="#D5CFFF"
        d="M30 15c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15z"
      ></path>
      <path
        fill="#22164B"
        d="M16.2 6.6a1.2 1.2 0 100 2.4h3.103l-7.551 7.552a1.2 1.2 0 101.696 1.696L21 10.697V13.8a1.2 1.2 0 102.4 0v-6a1.2 1.2 0 00-1.2-1.2h-6z"
      ></path>
      <path
        fill="#22164B"
        d="M9 9a2.4 2.4 0 00-2.4 2.4V21A2.4 2.4 0 009 23.4h9.6A2.4 2.4 0 0021 21v-3.6a1.2 1.2 0 10-2.4 0V21H9v-9.6h3.6a1.2 1.2 0 000-2.4H9z"
      ></path>
    </svg>
  )
}

export default ExternalLink

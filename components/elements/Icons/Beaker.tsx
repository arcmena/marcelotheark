function Beaker({ ...props }) {
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
        strokeWidth="2"
        d="M23.905 19.154a2.321 2.321 0 00-1.225-.752l-2.862-.656c-1.568-.36-3.197-.11-4.627.711l-.382.218c-1.43.82-3.058 1.07-4.627.71l-2.315-.53a2.102 2.102 0 00-1.164.064 2.361 2.361 0 00-1 .688M10.204 3.44h9.59l-1.198 1.375v7.111c0 .73.252 1.43.702 1.945l5.994 6.875c1.51 1.732.44 4.694-1.696 4.694H6.402c-2.136 0-3.205-2.962-1.695-4.694l5.994-6.875c.45-.516.703-1.215.703-1.945V4.816l-1.2-1.375z"
      ></path>
    </svg>
  )
}

export default Beaker

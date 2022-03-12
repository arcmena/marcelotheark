import Link from '@components/elements/Link'
import { SITE_URLS } from '@constants/urls'
import { HeaderContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="108"
        height="40"
        fill="none"
        viewBox="0 0 108 40"
      >
        <path
          fill="url(#paint0_linear_209_61)"
          d="M56.61 33.216l-.708-5.57H47.84l-2.263 5.57h-4.809L51.73 9.16h5.657l4.067 24.056h-4.845zm-7.356-9.051h6.224l-1.45-11.663-4.774 11.663z"
        ></path>
        <path
          fill="url(#paint1_linear_209_61)"
          d="M83.385 15.357c0 1.625-.46 3.098-1.38 4.421-.895 1.323-2.392 2.344-4.49 3.064l4.773 10.374h-5.091l-4.031-9.643h-3.041l-1.38 9.643h-4.632l3.43-24.056h7.143c2.876 0 5.045.534 6.506 1.602 1.462 1.044 2.193 2.576 2.193 4.595zm-12.8 4.909h2.97c1.767 0 3.04-.465 3.818-1.393.802-.951 1.203-2.065 1.203-3.342 0-1.068-.354-1.833-1.061-2.298-.684-.487-1.768-.73-3.253-.73H71.68l-1.096 7.763z"
        ></path>
        <path
          fill="url(#paint2_linear_209_61)"
          d="M85.42 33.216L88.85 9.16h4.631l-3.43 24.056H85.42zm13.436 0l-6.79-12.846 9.866-11.21h5.092L97.017 20.37l7.214 12.846h-5.375z"
        ></path>
        <path
          fill="#fff"
          d="M54.841 32.056l-.707-5.57h-8.062l-2.263 5.57H39L49.962 8h5.657l4.067 24.056H54.84zm-7.355-9.052h6.224l-1.45-11.662-4.774 11.662zM81.617 14.197c0 1.624-.46 3.098-1.38 4.42-.895 1.324-2.392 2.345-4.49 3.064l4.773 10.375H75.43l-4.031-9.644h-3.041l-1.38 9.644h-4.632L65.775 8h7.143c2.876 0 5.045.534 6.506 1.601 1.462 1.045 2.193 2.576 2.193 4.596zm-12.8 4.908h2.97c1.767 0 3.04-.464 3.818-1.392.802-.952 1.203-2.066 1.203-3.342 0-1.068-.354-1.834-1.061-2.298-.684-.487-1.768-.731-3.253-.731h-2.582l-1.096 7.763zM83.651 32.056L87.081 8h4.632l-3.43 24.056h-4.632zm13.437 0l-6.79-12.846L100.165 8h5.092L95.249 19.21l7.214 12.846h-5.375z"
        ></path>
        <path
          fill="url(#paint3_linear_209_61)"
          fillRule="evenodd"
          d="M19.544 1.348c.417.137.782.41 1.04.78.259.37.398.815.398 1.273v10.764h8.214c.375 0 .744.108 1.065.312.321.204.583.497.756.846a2.24 2.24 0 01-.137 2.229L16.505 39.079c-.25.376-.608.658-1.021.806a1.964 1.964 0 01-1.28.016 2.06 2.06 0 01-1.039-.781 2.223 2.223 0 01-.397-1.274V27.082H4.554c-.375 0-.744-.108-1.065-.312a2.115 2.115 0 01-.756-.846 2.24 2.24 0 01.138-2.228L17.245 2.168c.25-.375.608-.657 1.022-.804a1.964 1.964 0 011.277-.014v-.002z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FBFBFB"
          fillRule="evenodd"
          d="M17.044.098c.417.137.782.41 1.04.78.259.369.398.815.398 1.273v10.764h8.214c.375 0 .744.108 1.065.312.321.204.583.497.756.846a2.24 2.24 0 01-.137 2.229L14.005 37.829c-.25.376-.608.658-1.022.806a1.964 1.964 0 01-1.278.016 2.06 2.06 0 01-1.04-.781 2.223 2.223 0 01-.397-1.274V25.832H2.054c-.375 0-.744-.108-1.065-.312a2.115 2.115 0 01-.756-.846 2.24 2.24 0 01.138-2.228L14.745.918c.25-.375.608-.657 1.022-.804A1.964 1.964 0 0117.044.1V.098z"
          clipRule="evenodd"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_209_61"
            x1="39"
            x2="107.024"
            y1="20.532"
            y2="20.532"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6417CB"></stop>
            <stop offset="1" stopColor="#74C6FA"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_209_61"
            x1="39"
            x2="107.024"
            y1="20.532"
            y2="20.532"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6417CB"></stop>
            <stop offset="1" stopColor="#74C6FA"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear_209_61"
            x1="39"
            x2="107.024"
            y1="20.532"
            y2="20.532"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6417CB"></stop>
            <stop offset="1" stopColor="#74C6FA"></stop>
          </linearGradient>
          <linearGradient
            id="paint3_linear_209_61"
            x1="3"
            x2="30.75"
            y1="21.206"
            y2="21.206"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6417CB"></stop>
            <stop offset="1" stopColor="#74C6FA"></stop>
          </linearGradient>
        </defs>
      </svg>

      <nav>
        <Link href={SITE_URLS.ABOUT}>About</Link>
        <Link href={SITE_URLS.BLOG}>Blog</Link>
      </nav>
    </HeaderContainer>
  )
}

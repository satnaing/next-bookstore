const EmptyCartIcon = ({ className = "h-14 w-14" }: { className?: string }) => {
  return (
    <svg
      className={`${className} inline-block opacity-60`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6L2.25 3.5M11 19.5C11 19.8978 10.842 20.2794 10.5607 20.5607C10.2794 20.842 9.89782 21 9.5 21C9.10218 21 8.72064 20.842 8.43934 20.5607C8.15804 20.2794 8 19.8978 8 19.5M17 19.5C17 19.8978 16.842 20.2794 16.5607 20.5607C16.2794 20.842 15.8978 21 15.5 21C15.1022 21 14.7206 20.842 14.4393 20.5607C14.158 20.2794 14 19.8978 14 19.5M3 6H22L19 16H6L3 6Z"
        stroke="#363636"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0607 0.541597C16.3139 0.651708 16.43 0.946262 16.3199 1.1995L15.192 3.79334C15.0819 4.04658 14.7874 4.16261 14.5341 4.05249C14.2809 3.94238 14.1649 3.64783 14.275 3.39459L15.4028 0.800752C15.5129 0.547513 15.8075 0.431485 16.0607 0.541597ZM10.1736 0.796759C10.0613 0.54449 9.7657 0.431037 9.51343 0.543354C9.26116 0.655671 9.14771 0.951227 9.26002 1.2035L10.4104 3.78739C10.5228 4.03966 10.8183 4.15311 11.0706 4.0408C11.3229 3.92848 11.4363 3.63292 11.324 3.38066L10.1736 0.796759ZM5.35355 1.64657C5.15829 1.45131 4.84171 1.45131 4.64645 1.64657C4.45118 1.84184 4.45118 2.15842 4.64645 2.35368L6.64645 4.35368C6.84171 4.54894 7.15829 4.54894 7.35355 4.35368C7.54882 4.15842 7.54882 3.84184 7.35355 3.64657L5.35355 1.64657ZM19.6464 1.64657C19.8417 1.45131 20.1583 1.45131 20.3536 1.64657C20.5488 1.84184 20.5488 2.15842 20.3536 2.35368L18.3536 4.35368C18.1583 4.54894 17.8417 4.54894 17.6464 4.35368C17.4512 4.15842 17.4512 3.84184 17.6464 3.64657L19.6464 1.64657Z"
        fill="#363636"
      />
      <circle cx="8.75" cy="9.75" r="0.75" fill="#363636" />
      <circle cx="15.75" cy="9.75" r="0.75" fill="#363636" />
      <g filter="url(#filter0_d_2662_3570)">
        <path
          d="M11.0483 12.7126C11.3021 12.0632 12.3463 12.0475 13.5336 12.4421"
          stroke="#363636"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2662_3570"
          x="6.54883"
          y="11.6777"
          width="11.4844"
          height="9.53516"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2662_3570"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2662_3570"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default EmptyCartIcon

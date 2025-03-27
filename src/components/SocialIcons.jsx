import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <div className="main">
        <div
          className="card"
          onClick={() => window.open("https://www.instagram.com/", "_blank")}
        >
          <svg
            className="instagram"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0,0,256,256"
            width="30px"
            height="30px"
            fillRule="nonzero"
          >
            <g
              fillRule="nonzero"
              stroke="none"
              strokeWidth={1}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit={10}
              strokeDasharray
              strokeDashoffset={0}
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(8,8)">
                <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z" />{" "}
              </g>
            </g>
          </svg>
        </div>
        <div className="card">
          <svg
            className="twitter"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="30px"
            height="30px"
          >
            <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
          </svg>
        </div>
        <div className="card">
          <svg
            className="dribble"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width="30px"
            height="30px"
          >
            <path d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z" />
            <path
              fill="#ea4c89"
              d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"
            />
            <path
              fill="none"
              stroke="#ea4c89"
              strokeMiterlimit={10}
              d="M28.352 36.914c0 0-3.032-21.087-15.63-34.292M1.269 17.848c0 0 24.2 2.117 32.075-11.102M7.804 34.152c0 0 8.624-19.807 31.058-12.194"
            />
          </svg>
        </div>
        <div className="card">
          <svg
            className="codepen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="30px"
            height="30px"
          >
            <path d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z" />
          </svg>
        </div>
        <div className="card">
          <svg
            className="uiverse"
            width="23px"
            height="23x"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z"
              fill="url(#paint0_linear_501_142)"
            />
            <path
              d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z"
              fill="url(#paint1_linear_501_142)"
            />
            <path
              d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z"
              fill="url(#paint2_linear_501_142)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_501_142"
                x1={0}
                y1={0}
                x2="96.1684"
                y2="87.6201"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BF66FF" />
                <stop offset="0.510417" stopColor="#6248FF" />
                <stop offset={1} stopColor="#00DDEB" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_501_142"
                x1={0}
                y1={0}
                x2="96.1684"
                y2="87.6201"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BF66FF" />
                <stop offset="0.510417" stopColor="#6248FF" />
                <stop offset={1} stopColor="#00DDEB" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_501_142"
                x1={0}
                y1={0}
                x2="96.1684"
                y2="87.6201"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BF66FF" />
                <stop offset="0.510417" stopColor="#6248FF" />
                <stop offset={1} stopColor="#00DDEB" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="card">
          <svg
            className="discord"
            height="30px"
            width="30px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z" />
          </svg>
        </div>
        <div className="card">
          <svg
            className="github"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
          </svg>
        </div>
        <div className="card">
          <svg
            className="telegram"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="30px"
            height="30px"
          >
            <path d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
            <path
              fill="#fff"
              d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
            />
            <path
              fill="#b0bec5"
              d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
            />
            <path
              fill="#cfd8dc"
              d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
            />
          </svg>
        </div>
        <div className="card">
          <svg
            className="reddit"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width={30}
            height={30}
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <defs></defs>
            <g
              style={{
                stroke: "none",
                borderRadius: "50%",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <circle
                cx={45}
                cy={45}
                r={45}
                style={{
                  stroke: "none",
                  strokeWidth: 0,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
              />
              <path
                d="M 75.011 45 c -0.134 -3.624 -3.177 -6.454 -6.812 -6.331 c -1.611 0.056 -3.143 0.716 -4.306 1.823 c -5.123 -3.49 -11.141 -5.403 -17.327 -5.537 l 2.919 -14.038 l 9.631 2.025 c 0.268 2.472 2.483 4.262 4.955 3.993 c 2.472 -0.268 4.262 -2.483 3.993 -4.955 s -2.483 -4.262 -4.955 -3.993 c -1.421 0.145 -2.696 0.973 -3.4 2.204 L 48.68 17.987 c -0.749 -0.168 -1.499 0.302 -1.667 1.063 c 0 0.011 0 0.011 0 0.022 l -3.322 15.615 c -6.264 0.101 -12.36 2.025 -17.55 5.537 c -2.64 -2.483 -6.801 -2.36 -9.284 0.291 c -2.483 2.64 -2.36 6.801 0.291 9.284 c 0.515 0.481 1.107 0.895 1.767 1.186 c -0.045 0.66 -0.045 1.32 0 1.98 c 0 10.078 11.745 18.277 26.23 18.277 c 14.485 0 26.23 -8.188 26.23 -18.277 c 0.045 -0.66 0.045 -1.32 0 -1.98 C 73.635 49.855 75.056 47.528 75.011 45 z M 30.011 49.508 c 0 -2.483 2.025 -4.508 4.508 -4.508 c 2.483 0 4.508 2.025 4.508 4.508 s -2.025 4.508 -4.508 4.508 C 32.025 53.993 30.011 51.991 30.011 49.508 z M 56.152 62.058 v -0.179 c -3.199 2.405 -7.114 3.635 -11.119 3.468 c -4.005 0.168 -7.919 -1.063 -11.119 -3.468 c -0.425 -0.515 -0.347 -1.286 0.168 -1.711 c 0.447 -0.369 1.085 -0.369 1.544 0 c 2.707 1.98 6.007 2.987 9.362 2.83 c 3.356 0.179 6.667 -0.783 9.407 -2.74 c 0.492 -0.481 1.297 -0.47 1.779 0.022 C 56.655 60.772 56.644 61.577 56.152 62.058 z M 55.537 54.34 c -0.078 0 -0.145 0 -0.224 0 l 0.034 -0.168 c -2.483 0 -4.508 -2.025 -4.508 -4.508 s 2.025 -4.508 4.508 -4.508 s 4.508 2.025 4.508 4.508 C 59.955 52.148 58.02 54.239 55.537 54.34 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
        {/* <p className="text">HOVER<br /><br />FOR<br /><br />SOCIAL</p> */}
        <div className="logo-container">
          <img
            src="./fsw_logo.png"
            alt="Logo"
            style={{
              ...styles.logo,
              transition:
                "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          />
        </div>
        <div style={styles.mainBack} />
        <div className="main_back" />
      </div>
    </StyledWrapper>
  );
};

const styles = {
  wrapper: {
    position: "relative",
  },
  main: {
    display: "flex",
    flexWrap: "wrap",
    width: "14em",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "-1",
    position: "relative",
  },
  mainBack: {
    position: "absolute",
    borderRadius: "10px",
    transform: "rotate(90deg)",
    width: "11em",
    height: "11em",
    background: "linear-gradient(270deg, #03a9f4, #cc39a4, #ffb5d2)",
    zIndex: "-2",
    boxShadow: "inset 0px 0px 180px 5px #ffffff",
  },
  logoContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "10",
    pointerEvents: "none" /* Allow hover events to pass through to the SVGs */,
  },
  logo: {
    position: "absolute",
    width: "350px", // Adjust size as needed
    height: "auto",
    zIndex: "10", // Ensure it's on top
    top: "50%",
    left: "50%",
    borderRadius: "10px",
    transform: "translate(-50%, -50%) scale(1)", // Add scale for hover effect
    transition: "transform 0.7s ease-in-out, opacity 0.5s ease-in-out", // Add transition for smooth scaling
  },
};

const StyledWrapper = styled.div`
  .main_back {
    position: absolute;
    border-radius: 10px;
    transform: rotate(90deg);
    width: 11em;
    height: 11em;
    background: linear-gradient(270deg, #03a9f4, #cc39a4, #ffb5d2);
    z-index: -2; // Ensure it's behind the cards and logo
    box-shadow: inset 0px 0px 180px 5px #ffffff;
  }

  .main {
    position: relative; // Ensure child elements are positioned relative to this container
    display: flex;
    flex-wrap: wrap;
    width: 14em;
    align-items: center;
    justify-content: center;
    z-index: 1; // Ensure it's above the background
  }

  .card {
    width: 60px;
    height: 60px;
    border-top-left-radius: 10px;
    background: lightgrey;
    transition: 0.4s ease-in-out, 0.2s background-color ease-in-out,
      0.2s background-image ease-in-out;
    background: rgba(255, 255, 255, 0.596);
    backdrop-filter: blur(5px);
    border: 1px solid transparent;
    -webkit-backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card .instagram {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: #cc39a4;
  }

  .card:nth-child(2) {
    border-radius: 0px;
  }

  .card:nth-child(2) .twitter {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: #03a9f4;
  }

  .card:nth-child(3) {
    border-top-right-radius: 10px;
    border-top-left-radius: 0px;
  }

  .card:nth-child(3) .dribble {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: #ffb5d2;
  }

  .card:nth-child(4) {
    border-radius: 0px;
  }

  .card:nth-child(4) .codepen {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: black;
  }

  .card:nth-child(5) {
    border-radius: 0px;
  }

  .card:nth-child(5) .uiverse {
    position: absolute;
    margin-left: 0.2em;
    margin-top: 0.2em;
    opacity: 0;
    transition: 0.2s ease-in-out;
  }

  .card:nth-child(6) {
    border-radius: 0px;
  }

  .card:nth-child(6) .discord {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: #8c9eff;
  }

  .card:nth-child(7) {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 0px;
  }

  .card:nth-child(7) .github {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: black;
  }

  .card:nth-child(8) {
    border-radius: 0px;
  }

  .card:nth-child(8) .telegram {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: #29b6f6;
  }

  .card:nth-child(9) {
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0px;
  }

  .card:nth-child(9) .reddit {
    opacity: 0;
    transition: 0.2s ease-in-out;
  }

  .main:hover {
    width: 14em;
    cursor: pointer;
  }

  .main:hover .main_back {
    opacity: 0;
  }

  .main:hover .card {
    margin: 0.2em;
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.2);
  }

  .main:hover .card svg,
  .logo-container:hover ~ .card svg {
    opacity: 1; /* Ensure SVGs are visible */
    transform: scale(1.2); /* Scale up SVGs */
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  .main:hover .logo {
    transform: translate(-50%, -50%) scale(1.1); // Slightly scale up the logo on hover
  }

  .main:hover .card:nth-child(5) {
    border: transparent;
  }

  .main:hover .text {
    opacity: 0;
    z-index: -3;
  }

  .main:hover .instagram {
    opacity: 1;
  }

  .main:hover .twitter {
    opacity: 1;
  }

  .main:hover .dribble {
    opacity: 1;
  }

  .main:hover .codepen {
    opacity: 1;
  }

  .main:hover .uiverse {
    opacity: 1;
  }

  .main:hover .discord {
    opacity: 1;
  }

  .main:hover .github {
    opacity: 1;
  }

  .main:hover .telegram {
    opacity: 1;
  }

  .main:hover .reddit {
    opacity: 1;
  }

  .card:nth-child(1):hover {
    background-color: #cc39a4;
  }

  .card:nth-child(1):hover .instagram {
    fill: white;
  }

  .card:nth-child(2):hover {
    background-color: #03a9f4;
  }

  .card:nth-child(2):hover .twitter {
    fill: white;
  }

  .card:nth-child(3):hover {
    background-color: #ffb5d2;
  }

  .card:nth-child(3):hover .dribble {
    fill: white;
  }

  .card:nth-child(4):hover {
    background-color: #1e1f26;
  }

  .card:nth-child(4):hover .codepen {
    fill: white;
  }

  .card:nth-child(5):hover {
    animation: backgroundIMG 0.1s;
    animation-fill-mode: forwards;
  }

  .card:nth-child(5):hover .uiverse #paint0_linear_501_142 stop {
    stop-color: white;
  }

  .card:nth-child(5):hover .uiverse #paint1_linear_501_142 stop {
    stop-color: white;
  }

  .card:nth-child(5):hover .uiverse #paint2_linear_501_142 stop {
    stop-color: white;
  }

  @keyframes backgroundIMG {
    100% {
      background-image: linear-gradient(#bf66ff, #6248ff, #00ddeb);
    }
  }

  .card:nth-child(6):hover {
    background-color: #8c9eff;
  }

  .card:nth-child(6):hover .discord {
    fill: white;
  }

  .card:nth-child(7):hover {
    background-color: black;
  }

  .card:nth-child(7):hover .github {
    fill: white;
  }

  .card:nth-child(8):hover {
    background-color: #29b6f6;
  }

  .card:nth-child(8):hover .telegram > path:nth-of-type(1) {
    fill: white;
  }

  .card:nth-child(8):hover .telegram > path:nth-of-type(2) {
    fill: #29b6f6;
  }

  .card:nth-child(8):hover .telegram > path:nth-of-type(3) {
    fill: #29b6f6;
  }

  .card:nth-child(9):hover {
    background-color: rgb(255, 69, 0);
  }

  .card:nth-child(9) .reddit > g circle {
    fill: rgb(255, 69, 0);
  }

  .card:nth-child(9) .reddit > g path {
    fill: white;
  }

  .text {
    position: absolute;
    font-size: 0.7em;
    transition: 0.4s ease-in-out;
    color: black;
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.33em;
    z-index: 3;
  }
`;

export default Button;

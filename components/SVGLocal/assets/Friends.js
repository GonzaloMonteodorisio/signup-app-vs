import * as React from 'react';
import Svg, {
  Defs,
  ClipPath,
  Path,
  G,
  Circle,
} from 'react-native-svg';

function Friends(props) {
  const {
    size = 42,
  } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 42"
      width={size}
      height={size}
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path
            data-name="Rectangle 9956"
            transform="translate(2194 2271)"
            fill="#fcfcfc"
            stroke="#707070"
            strokeWidth={1}
            d="M0 0H26V26H0z"
          />
        </ClipPath>
      </Defs>
      <G data-name="Group 6172" transform="translate(-20 -92)">
        <Circle
          data-name="Ellipse 902"
          cx={21}
          cy={21}
          r={21}
          transform="translate(20 92)"
          fill="#0b1626"
        />
        <Circle
          data-name="Ellipse 903"
          cx={19}
          cy={19}
          r={19}
          transform="translate(22 94)"
          fill="#2167d1"
        />
        <G
          data-name="Mask Group 5887"
          transform="translate(-2166 -2171)"
          clipPath="url(#a)"
        >
          <G data-name="Group 6174">
            <G data-name="Group 6173">
              <Path
                data-name="Path 16656"
                d="M22.191 231.579h-2.545a3.9 3.9 0 00-1 .131 3.825 3.825 0 00-3.4-2.03h-4.5a3.825 3.825 0 00-3.4 2.03 3.9 3.9 0 00-1-.131H3.809A3.761 3.761 0 000 235.282v3.956a2.257 2.257 0 002.285 2.222h21.43A2.257 2.257 0 0026 239.238v-3.956a3.761 3.761 0 00-3.809-3.703zm-15.249 1.8v6.6H2.285a.752.752 0 01-.762-.741v-3.956a2.257 2.257 0 012.285-2.222h2.546a2.338 2.338 0 01.6.078 2.481 2.481 0 00-.012.245zm10.592 6.6H8.465v-6.6a2.257 2.257 0 012.285-2.222h4.5a2.257 2.257 0 012.285 2.222zm6.942-.741a.752.752 0 01-.762.741h-4.656v-6.6c0-.082 0-.164-.009-.245a2.341 2.341 0 01.6-.078h2.545a2.257 2.257 0 012.285 2.222z"
                transform="translate(2194 2229.271) translate(0 53.949) translate(0 -229.68)"
                fill="#fcfcfc"
              />
            </G>
          </G>
          <G data-name="Group 6176">
            <G data-name="Group 6175">
              <Path
                data-name="Path 16657"
                d="M36.7 126.5a3.29 3.29 0 103.29 3.29 3.294 3.294 0 00-3.29-3.29zm0 5.1a1.809 1.809 0 111.809-1.809A1.811 1.811 0 0136.7 131.6z"
                transform="translate(2194 2229.271) translate(1.65 48.111) translate(-33.414 -126.504)"
                fill="#fcfcfc"
              />
            </G>
          </G>
          <G data-name="Group 6178">
            <G data-name="Group 6177">
              <Path
                data-name="Path 16658"
                d="M171.358 43.729a4.4 4.4 0 104.4 4.4 4.4 4.4 0 00-4.4-4.4zm0 7.311a2.915 2.915 0 112.915-2.915 2.918 2.918 0 01-2.915 2.915z"
                transform="translate(2194 2229.271) translate(8.604 43.729) translate(-166.962 -43.729)"
                fill="#fcfcfc"
              />
            </G>
          </G>
          <G data-name="Group 6180">
            <G data-name="Group 6179">
              <Path
                data-name="Path 16659"
                d="M348.584 126.5a3.29 3.29 0 103.29 3.29 3.294 3.294 0 00-3.29-3.29zm0 5.1a1.809 1.809 0 111.809-1.809 1.811 1.811 0 01-1.809 1.809z"
                transform="translate(2194 2229.271) translate(17.769 48.111) translate(-345.294 -126.504)"
                fill="#fcfcfc"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default Friends;

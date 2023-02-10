import * as React from 'react';
import Svg, {
  Defs,
  ClipPath,
  Path,
  G,
  Circle,
} from 'react-native-svg';

function CheckList(props) {
  const {
    size = 24,
    style,
  } = props;
  return (
    <Svg
      data-name="header buttons"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 42 42"
      style={style}
    >
      <Defs>
        <ClipPath id="a">
          <Path
            data-name="Rectangle 9955"
            transform="translate(28 100)"
            fill="#fff"
            stroke="#707070"
            strokeWidth={1}
            d="M0 0H26V26H0z"
          />
        </ClipPath>
      </Defs>
      <G transform="translate(-20 -92)">
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
        <G data-name="Mask Group 5886">
          <G data-name="Group 6164" clipPath="url(#a)">
            <Path
              data-name="Path 16647"
              d="M24.582 2.471a.484.484 0 00-.682 0 .477.477 0 000 .682l1.151 1.159a.483.483 0 00.343.142.481.481 0 00.339-.142l3.5-3.484a.481.481 0 10-.678-.682l-1.06 1.052a3.021 3.021 0 10.725 2.979.484.484 0 10-.926-.28 2.063 2.063 0 11-.485-2.014l-1.416 1.404z"
              transform="translate(28 103) translate(-22.3)"
              fill="#00e189"
            />
            <Path
              data-name="Path 16648"
              d="M25.322 170.6a3.022 3.022 0 103.022 3.022 3.026 3.026 0 00-3.022-3.022zm0 5.08a2.057 2.057 0 112.057-2.057 2.059 2.059 0 01-2.057 2.057z"
              transform="translate(28 103) translate(-22.3 -163.478)"
              fill="#fcfcfc"
            />
            <Path
              data-name="Path 16649"
              d="M28.345 337.322a3.022 3.022 0 10-3.022 3.022 3.026 3.026 0 003.022-3.022zm-3.022 2.061a2.057 2.057 0 112.057-2.057 2.058 2.058 0 01-2.058 2.057z"
              transform="translate(28 103) translate(-22.3 -320.345)"
              fill="#fcfcfc"
            />
            <Path
              data-name="Path 16651"
              d="M219.072 71.5h-15.759a.7.7 0 100 1.381h15.759a.7.7 0 100-1.381z"
              transform="translate(28 103) translate(-193.886 -68.888)"
              fill="#fcfcfc"
            />
            <Path
              data-name="Path 16653"
              d="M219.072 71.5h-15.759a.7.7 0 100 1.381h15.759a.7.7 0 100-1.381z"
              transform="translate(28 103) translate(-193.886 -62.045)"
              fill="#fcfcfc"
            />
            <Path
              data-name="Path 16654"
              d="M219.072 71.5h-15.759a.7.7 0 100 1.381h15.759a.7.7 0 100-1.381z"
              transform="translate(28 103) translate(-193.886 -55.193)"
              fill="#fcfcfc"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default CheckList;

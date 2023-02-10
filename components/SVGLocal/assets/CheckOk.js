import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CheckOk(props) {
  const {
    size = 24,
  } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 42 42"
    >
      <Defs>
        <LinearGradient
          id="b"
          x1={0.215}
          y1={0.885}
          x2={0.774}
          y2={0.438}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#00cb57" />
          <Stop offset={1} stopColor="#0098b7" />
        </LinearGradient>
      </Defs>
      <G
        transform="translate(9 6) translate(-9 -6)"
        filter="url(#a)"
        data-name="Group 6217"
      >
        <Circle
          data-name="Ellipse 909"
          cx={12}
          cy={12}
          r={12}
          transform="translate(9 6)"
          fill="url(#b)"
        />
      </G>
      <G data-name="Group 5985">
        <Path
          data-name="Path 16587"
          d="M13.006 72.1a1.056 1.056 0 00-1.494 0L4.79 78.82 1.8 75.832a1.056 1.056 0 00-1.491 1.494l3.734 3.734a1.056 1.056 0 001.494 0l7.469-7.469a1.056 1.056 0 000-1.491z"
          transform="translate(9 6) translate(5.342 8.119) translate(.001 -71.788)"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default CheckOk;

import * as React from 'react';

import Svg, {
  Defs,
  G,
  Circle,
  Path,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Check2disabled(props) {
  const {
    size = 134,
  } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 134 134"
      {...props}
    >
      <Defs />
      <G data-name="Desafio-no realizado">
        <G
          data-type="innerShadowGroup"
          transform="translate(-36 -5307) translate(36 5307)"
        >
          <Circle
            data-name="background"
            cx={67}
            cy={67}
            r={67}
            fill="#0d1926"
          />
          <G filter="url(#a)">
            <Circle data-name="background" cx={67} cy={67} r={67} fill="#fff" />
          </G>
        </G>
        <G transform="translate(-36 -5307) translate(53 5324)">
          <Circle
            data-name="Ellipse 909"
            cx={50}
            cy={50}
            r={50}
            fill="#060a10"
          />
          <G data-name="Group 5985">
            <Path
              data-name="Path 16587"
              d="M54.194 73.077a4.4 4.4 0 00-6.223 0l-28.009 28.01L7.513 88.638a4.4 4.4 0 00-6.224 6.224l15.56 15.56a4.4 4.4 0 006.224 0L54.194 79.3a4.4 4.4 0 000-6.223z"
              transform="translate(22.257 33.83) translate(.001 -71.788)"
              fill="#455770"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default Check2disabled;

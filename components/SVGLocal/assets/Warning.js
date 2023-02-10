/* eslint-disable react/style-prop-object */
/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Path,
  G,
} from 'react-native-svg';

function WarningIcon(props) {
  const {
    color = '#4B4B54',
    size = 30,
  } = props;

  return (
    <Svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 488.451 488.451"
      style="enable-background:new 0 0 488.451 488.451;"
      fill={color}
    >
      <G>
        <Path
          d="M484.125,412.013l-212.2-367.6c-12.3-21.3-43.1-21.3-55.4,0l-212.2,367.6c-12.3,21.3,3.1,48,27.7,48h424.4
       C481.025,460.013,496.425,433.313,484.125,412.013z M244.525,157.613c13.6,0,24.6,11.3,24.2,24.9l-4,139.6
       c-0.3,11-9.3,19.7-20.3,19.7s-20-8.8-20.3-19.7l-3.9-139.6C219.925,168.913,230.825,157.613,244.525,157.613z M244.225,410.113
       c-13.9,0-25.2-11.3-25.2-25.2c0-13.9,11.3-25.2,25.2-25.2s25.2,11.3,25.2,25.2S258.125,410.113,244.225,410.113z"
          fill={color}
          stroke={color}
        />
      </G>
    </Svg>
  );
}

export default WarningIcon;

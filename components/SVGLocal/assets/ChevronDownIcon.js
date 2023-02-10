/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Path,
} from 'react-native-svg';

function CarIcon(props) {
  const {
    color = '#4B4B54',
    size = 30,
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <Path
        d="M12,17.17a5,5,0,0,1-3.54-1.46L.29,7.54A1,1,0,0,1,1.71,6.12l8.17,8.17a3,3,0,0,0,4.24,0l8.17-8.17a1,1,0,1,1,1.42,1.42l-8.17,8.17A5,5,0,0,1,12,17.17Z"
        fill={color}
      />
    </Svg>
  );
}

export default CarIcon;
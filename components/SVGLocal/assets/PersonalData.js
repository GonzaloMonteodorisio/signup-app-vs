/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Path,
  G,
} from 'react-native-svg';

function OfflineIcon(props) {
  const {
    size = 30,
    fill = '#8C8C98',
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 670 739"
    >
      <G id="assignment_ind_black_24dp" transform="translate(0 273.896)">
        <Path id="Trazado_14652" data-name="Trazado 14652" d="M0,0H41.348V41.365H0Z" transform="translate(0 198.177)" fill="none" />
        <Path id="Trazado_14653" data-name="Trazado 14653" d="M593.961,74.9H439.573C424.06,32.038,383.431,1,335.416,1S246.772,32.038,231.259,74.9H76.87A74.1,74.1,0,0,0,3,148.8V666.1A74.1,74.1,0,0,0,76.87,740H593.961a74.1,74.1,0,0,0,73.87-73.9V148.8A74.1,74.1,0,0,0,593.961,74.9Zm-258.545,0a36.95,36.95,0,1,1-36.935,36.95A37.051,37.051,0,0,1,335.416,74.9Zm0,147.8A110.85,110.85,0,1,1,224.61,333.55,110.679,110.679,0,0,1,335.416,222.7ZM557.026,666.1H113.805V614.37c0-73.9,147.74-114.545,221.61-114.545S557.026,540.47,557.026,614.37Z" transform="translate(2.169 -274.896)" fill={fill} />
      </G>
    </Svg>
  );
}

export default OfflineIcon;

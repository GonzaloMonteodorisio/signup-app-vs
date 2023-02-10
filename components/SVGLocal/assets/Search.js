/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Path,
} from 'react-native-svg';

function ShareIcon(props) {
  const {
    size = 30,
    // fill = '#8C8C98',
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <Path id="search-inactive" d="M15.89,15.049l-4.031-4.031a.371.371,0,0,0-.266-.109h-.322a6.434,6.434,0,1,0-.362.366v.319a.384.384,0,0,0,.109.266l4.031,4.031a.375.375,0,0,0,.531,0l.309-.309A.375.375,0,0,0,15.89,15.049ZM6.5,12A5.5,5.5,0,1,1,12,6.5,5.5,5.5,0,0,1,6.5,12Z" fill="#73737d" />
    </Svg>
  );
}

export default ShareIcon;

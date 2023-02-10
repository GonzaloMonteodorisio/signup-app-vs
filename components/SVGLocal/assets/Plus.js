/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Path,
} from 'react-native-svg';

function PlusIcon(props) {
  const {
    fill = '#fff',
    size = 30,
  } = props;

  return (
    <Svg
      id="plus"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
    >
      <Path id="close" d="M14.568,639.364a49.641,49.641,0,0,0,70.208,70.2l277.256-277.3L639.31,709.537a49.64,49.64,0,0,0,70.2-70.2L432.228,362.051,709.492,84.739a49.642,49.642,0,0,0-70.212-70.2L362.022,291.849,84.742,14.566a49.641,49.641,0,0,0-70.2,70.2l277.29,277.287Z" transform="translate(512.019 0) rotate(45)" fill={fill} />
    </Svg>

  );
}

export default PlusIcon;

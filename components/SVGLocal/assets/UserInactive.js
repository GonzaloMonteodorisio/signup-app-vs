/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Defs,
  Rect,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

function UserInactiveIcon(props) {
  const {
    size = 30,
    fill = '#f26c08',
  } = props;

  return (
    <Svg
      id="user"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 22 22"
    >
      <Defs>
        <ClipPath id="clip-path">
          <Rect id="Rectángulo_10258" data-name="Rectángulo 10258" width="22" height="22" fill={fill} stroke="#717171" stroke-width="1" />
        </ClipPath>
        <ClipPath id="clip-path-2">
          <Rect id="Rectángulo_10019" data-name="Rectángulo 10019" width="20" height="20" fill="#4b4b54" stroke="#717171" stroke-width="1" />
        </ClipPath>
      </Defs>
      <G id="Enmascarar_grupo_6386" data-name="Enmascarar grupo 6386" clip-path="url(#clip-path)">
        <G id="Enmascarar_grupo_6086" data-name="Enmascarar grupo 6086" transform="translate(1 1)" clip-path="url(#clip-path-2)">
          <Path id="user-2" data-name="user" d="M9,10a5.073,5.073,0,0,0,5.143-5A5.073,5.073,0,0,0,9,0,5.073,5.073,0,0,0,3.857,5,5.073,5.073,0,0,0,9,10Zm3.6,1.25h-.671a7.176,7.176,0,0,1-5.858,0H5.4A5.328,5.328,0,0,0,0,16.5v1.625A1.9,1.9,0,0,0,1.929,20H16.071A1.9,1.9,0,0,0,18,18.125V16.5A5.328,5.328,0,0,0,12.6,11.25Z" transform="translate(1)" fill="#4b4b54" />
        </G>
      </G>
    </Svg>
  );
}

export default UserInactiveIcon;

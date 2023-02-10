/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Defs,
  Rect,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

function ShareIcon(props) {
  const {
    size = 30,
    fill = '#8C8C98',
  } = props;

  return (
    <Svg
      id="share"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 48 48"
    >
      <Defs>
        <ClipPath id="clip-path">
          <Rect id="Rectángulo_10410" data-name="Rectángulo 10410" width="48" height="48" fill={fill} />
        </ClipPath>
      </Defs>
      <G id="Enmascarar_grupo_6441" data-name="Enmascarar grupo 6441" clip-path="url(#clip-path)">
        <G id="share-2" data-name="share" transform="translate(1 1)">
          <G id="Grupo_5357" data-name="Grupo 5357">
            <Path id="Trazado_1166" data-name="Trazado 1166" d="M59.647,33.245a8.033,8.033,0,0,0-5.131,1.817l-18.6-9.8a5.921,5.921,0,0,0,0-3.3L54.32,12.247a8.238,8.238,0,0,0,5.327,1.911c4.321,0,7.833-3.173,7.833-7.078S63.968,0,59.647,0s-7.833,3.173-7.833,7.078a6.332,6.332,0,0,0,.235,1.652L33.64,18.44a8.238,8.238,0,0,0-5.327-1.911c-4.321,0-7.833,3.173-7.833,7.078s3.512,7.078,7.833,7.078a8.238,8.238,0,0,0,5.327-1.911l18.6,9.8a6.067,6.067,0,0,0-.209,1.545c0,3.8,3.407,6.878,7.611,6.878s7.611-3.079,7.611-6.878S63.851,33.245,59.647,33.245Z" transform="translate(-20.48 -0.001)" fill={fill} />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default ShareIcon;

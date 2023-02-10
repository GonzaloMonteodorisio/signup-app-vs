/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Defs,
  Rect,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

function SettingsIcon(props) {
  const {
    size = 30,
    fill = '#8C8C98',
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 48 48"
    >
      <Defs>
        <ClipPath id="clip-path">
          <Rect id="Rectángulo_10468" data-name="Rectángulo 10468" width="48" height="48" transform="translate(2617 519)" fill={fill} stroke="#717171" stroke-width="1" />
        </ClipPath>
      </Defs>
      <G id="Enmascarar_grupo_6462" data-name="Enmascarar grupo 6462" transform="translate(-2617 -519)" clip-path="url(#clip-path)">
        <Path id="cog" d="M62.117,36.188l-3.142-1.822a18.971,18.971,0,0,0,0-4.732l3.142-1.822a2.321,2.321,0,0,0,1.064-2.661,23.984,23.984,0,0,0-5.543-9.638A2.305,2.305,0,0,0,54.8,15.1l-3.137,1.819a18.683,18.683,0,0,0-4.079-2.369v-3.64A2.322,2.322,0,0,0,45.8,8.647a23.958,23.958,0,0,0-11.058,0,2.322,2.322,0,0,0-1.781,2.261v3.64a18.681,18.681,0,0,0-4.079,2.369L25.75,15.1a2.305,2.305,0,0,0-2.836.414A23.985,23.985,0,0,0,17.37,25.15a2.321,2.321,0,0,0,1.064,2.661l3.142,1.822a18.971,18.971,0,0,0,0,4.732l-3.142,1.822a2.321,2.321,0,0,0-1.064,2.661,23.985,23.985,0,0,0,5.543,9.638,2.305,2.305,0,0,0,2.836.414l3.137-1.819a18.679,18.679,0,0,0,4.079,2.369v3.64a2.322,2.322,0,0,0,1.781,2.261,23.958,23.958,0,0,0,11.058,0,2.322,2.322,0,0,0,1.781-2.261v-3.64a18.684,18.684,0,0,0,4.079-2.369L54.8,48.9a2.305,2.305,0,0,0,2.836-.414,23.985,23.985,0,0,0,5.543-9.638,2.321,2.321,0,0,0-1.064-2.661ZM40.276,38.193A6.194,6.194,0,1,1,46.442,32,6.187,6.187,0,0,1,40.276,38.193Z" transform="translate(2600.724 511)" fill={fill} />
      </G>
    </Svg>
  );
}

export default SettingsIcon;

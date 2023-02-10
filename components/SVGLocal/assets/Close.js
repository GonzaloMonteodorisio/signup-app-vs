/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Path,
  G,
  Rect,
  Circle,
} from 'react-native-svg';

function CloseIcon(props) {
  const {
    size = 30,
    color = '#202020',
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
    >
      <G id="Grupo_6993" data-name="Grupo 6993" transform="translate(23282 -4070)">
        <G id="Grupo_6991" data-name="Grupo 6991" transform="translate(-1921 -40)">
          <Rect id="Rectángulo_10527" data-name="Rectángulo 10527" width="1024" height="1024" transform="translate(-21361 4110)" fill="transparent" />
        </G>
        <G id="Grupo_6989" data-name="Grupo 6989" transform="translate(-1642 5437)">
          <Circle id="Elipse_80" data-name="Elipse 80" cx="424.5" cy="424.5" r="424.5" transform="translate(-21552 -1279)" fill={color} />
          <Path id="Trazado_1149" data-name="Trazado 1149" d="M348.142,323.75,200.988,176.6,348.142,29.441A17.248,17.248,0,1,0,323.75,5.049L176.6,152.2,29.441,5.049A17.248,17.248,0,1,0,5.049,29.441L152.2,176.6,5.049,323.75a17.248,17.248,0,1,0,24.392,24.392L176.6,200.988,323.75,348.142a17.248,17.248,0,0,0,24.392-24.392Z" transform="translate(-21304.75 -1031.775)" fill="#000" />
        </G>
      </G>
    </Svg>
  );
}

export default CloseIcon;

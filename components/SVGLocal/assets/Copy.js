/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Path,
  G,
} from 'react-native-svg';

function Copy(props) {
  const {
    size = 30,
    fill = '#fcfcfc',
  } = props;

  return (
    <Svg
      id="copy_1"
      data-name="copy (1)"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 1024 1023.998"
    >
      <G id="Grupo_6607" data-name="Grupo 6607" transform="translate(0 182.856)">
        <G id="Grupo_6606" data-name="Grupo 6606">
          <Path id="Trazado_14339" data-name="Trazado 14339" d="M731.427,85.333H109.714A109.714,109.714,0,0,0,0,195.047V816.76A109.714,109.714,0,0,0,109.714,926.475H731.427A109.714,109.714,0,0,0,841.141,816.76V195.047A109.714,109.714,0,0,0,731.427,85.333Z" transform="translate(0 -85.333)" fill={fill} />
        </G>
      </G>
      <G id="Grupo_6609" data-name="Grupo 6609" transform="translate(146.286 0)">
        <G id="Grupo_6608" data-name="Grupo 6608">
          <Path id="Trazado_14340" data-name="Trazado 14340" d="M836.266,0H177.981A109.716,109.716,0,0,0,68.267,108.872v.842H653.41A183.073,183.073,0,0,1,836.266,292.57V877.713h.842A109.714,109.714,0,0,0,945.981,768V109.714A109.714,109.714,0,0,0,836.266,0Z" transform="translate(-68.267 0)" fill={fill} />
        </G>
      </G>
    </Svg>

  );
}

export default Copy;

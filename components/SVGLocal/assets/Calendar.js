/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Defs,
  Path,
  Rect,
  ClipPath,
  G,
} from 'react-native-svg';

function CameraIcon(props) {
  const {
    size = 30,
    fill = '#F26C08',
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
    >
      <Defs>
        <ClipPath id="clip-path">
          <Rect id="Rectángulo_10554" data-name="Rectángulo 10554" width="813" height="813" transform="translate(0 -0.36)" fill="#302e37" stroke="#717171" stroke-width="1" />
        </ClipPath>
      </Defs>
      <G id="Grupo_7007" data-name="Grupo 7007" transform="translate(21640 142)">
        <G id="Rectángulo_10555" data-name="Rectángulo 10555" transform="translate(-21640 -142)" fill="transparent" stroke="#707070" stroke-width="1">
          <Rect width="1024" height="1024" stroke="none" />
          <Rect x="0.5" y="0.5" width="1023" height="1023" fill="none" />
        </G>
        <G id="Enmascarar_grupo_6490" data-name="Enmascarar grupo 6490" transform="translate(-21534 -35.64)" clip-path="url(#clip-path)">
          <G id="Enmascarar_grupo_6489" data-name="Enmascarar grupo 6489" transform="translate(81.592 40.795)">
            <Path id="calendar-day" d="M163.178,527.779H303.045a23.2,23.2,0,0,0,23.311-22.947V367.151A23.2,23.2,0,0,0,303.045,344.2H163.178a23.2,23.2,0,0,0-23.311,22.947V504.832A23.2,23.2,0,0,0,163.178,527.779Zm419.6-435.991H512.846V22.947A23.2,23.2,0,0,0,489.535,0H442.912A23.2,23.2,0,0,0,419.6,22.947V91.788H233.112V22.947A23.2,23.2,0,0,0,209.8,0H163.178a23.2,23.2,0,0,0-23.311,22.947V91.788H69.934C31.324,91.788,0,122.623,0,160.628V665.46C0,703.466,31.324,734.3,69.934,734.3H582.779c38.609,0,69.934-30.835,69.934-68.841V160.628C652.713,122.623,621.389,91.788,582.779,91.788Zm0,565.068a8.7,8.7,0,0,1-8.742,8.605H78.675a8.7,8.7,0,0,1-8.742-8.605V229.469H582.779Z" fill={fill} />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default CameraIcon;

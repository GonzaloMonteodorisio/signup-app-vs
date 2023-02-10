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
    fill = '#FCFCFC',
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
    >
      <Defs>
        <ClipPath id="clip-path">
          <Rect id="Rectángulo_10540" data-name="Rectángulo 10540" width="783" height="783" transform="translate(28 204)" fill={fill} />
        </ClipPath>
      </Defs>
      <G id="Grupo_6982" data-name="Grupo 6982" transform="translate(17960 -864)">
        <Rect id="Rectángulo_10541" data-name="Rectángulo 10541" width="1024" height="1024" transform="translate(-17960 864)" fill="transparent" />
        <G id="Enmascarar_grupo_6485" data-name="Enmascarar grupo 6485" transform="translate(-17867 781)" clip-path="url(#clip-path)">
          <Path id="camera" d="M471.2,76.748a11.788,11.788,0,0,1,10.9,7.271l32.111,82.224H674.186c12.786,0,23.248,10.068,23.248,22.374V591.345c0,12.306-10.461,22.374-23.248,22.374H69.743c-12.786,0-23.248-10.068-23.248-22.374V188.617c0-12.306,10.461-22.374,23.248-22.374H229.862l29.205-74.952a23.281,23.281,0,0,1,21.795-14.543H471.2M471.2,32H280.862c-29.06,0-55.068,17.339-65.239,43.489L197.606,121.5H69.743C31.239,121.5,0,151.56,0,188.617V591.345c0,37.057,31.239,67.121,69.743,67.121H674.186c38.5,0,69.743-30.064,69.743-67.121V188.617c0-37.057-31.239-67.122-69.743-67.122H546.323L525.545,68.358C517.118,46.4,495.468,32,471.2,32ZM371.965,557.785c-96.188,0-174.358-75.232-174.358-167.8s78.171-167.8,174.358-167.8,174.358,75.232,174.358,167.8S468.152,557.785,371.965,557.785Zm0-290.86c-70.47,0-127.863,55.236-127.863,123.057s57.393,123.056,127.863,123.056S499.827,457.8,499.827,389.981,442.434,266.925,371.965,266.925Z" transform="translate(47.577 250.31)" fill={fill} />
        </G>
      </G>
    </Svg>
  );
}

export default CameraIcon;

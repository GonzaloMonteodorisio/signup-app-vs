/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Defs,
  Rect,
  ClipPath,
  Path,
  G,
  Ellipse,
} from 'react-native-svg';

function UserManualIcon(props) {
  const {
    color = '#4B4B54',
    size = 30,
    fill = '#f26c08',
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
          <Rect id="Rectángulo_10470" data-name="Rectángulo 10470" width="48" height="48" transform="translate(16 15)" fill={fill} stroke="#717171" stroke-width="1" />
        </ClipPath>
      </Defs>
      <G key={1} id="Enmascarar_grupo_6464" data-name="Enmascarar grupo 6464" transform="translate(-16 -15)" clip-path="url(#clip-path)">
        <G key={2} id="manual" transform="translate(22.053 15)">
          <G key={3} id="Grupo_6918" data-name="Grupo 6918" transform="translate(0)">
            <G key={4} id="Grupo_6917" data-name="Grupo 6917" transform="translate(0)">
              <Path id="Trazado_14529" data-name="Trazado 14529" d="M65.4,5.678v31.56a5.7,5.7,0,0,0,5.719,5.678h2.429v5.508l5.243-2.342,5.243,2.342V42.915h17.683V0h-30.6A5.7,5.7,0,0,0,65.4,5.678ZM81.178,44.035,78.794,42.97l-2.385,1.065V40.076h4.769Zm17.683-3.957H84.036V37.239H73.551v2.839H71.121a2.841,2.841,0,1,1,0-5.681h27.74Zm0-8.518H71.121a5.714,5.714,0,0,0-2.861.765V5.678a2.854,2.854,0,0,1,2.861-2.84h27.74Z" transform="translate(-65.402)" fill={color} />
            </G>
          </G>
          <G key={5} id="exclamation-mark" transform="translate(16.704 8.02)">
            <G key={6} id="Layer_18" transform="translate(0)">
              <Path id="Trazado_14530" data-name="Trazado 14530" d="M59.494,63.828V55.167a1.454,1.454,0,0,0-2.908,0v8.661a1.454,1.454,0,0,0,2.908,0Z" transform="translate(-56.586 -53.724)" fill={color} />
            </G>
            <Ellipse id="Elipse_943" data-name="Elipse 943" cx="1.455" cy="1.444" rx="1.455" ry="1.444" transform="translate(0 14.421)" fill={color} />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default UserManualIcon;

/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Rect,
  Path,
  G,
} from 'react-native-svg';

function Geofence(props) {
  const {
    color = '#717171',
    size = 30,
  } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
    >
      <G id="Grupo_7034" data-name="Grupo 7034" transform="translate(10123 -3288)">
        <G id="Grupo_7033" data-name="Grupo 7033" transform="translate(0 1130)">
          <Rect id="Rectángulo_10587" data-name="Rectángulo 10587" width="1024" height="1024" transform="translate(-10123 2158)" />
        </G>
        <Path id="ellipsis-v" d="M93.337,435.591c51.627,0,93.337,39.515,93.337,88.424s-41.71,88.424-93.337,88.424S0,572.925,0,524.015,41.71,435.591,93.337,435.591ZM0,192.425c0,48.91,41.71,88.424,93.337,88.424s93.337-39.514,93.337-88.424S144.963,104,93.337,104,0,143.515,0,192.425ZM0,855.605c0,48.909,41.71,88.425,93.337,88.425s93.337-39.515,93.337-88.425-41.71-88.425-93.337-88.425S0,806.7,0,855.605Z" transform="translate(-9704.336 3275.985)" fill={color} />
      </G>
    </Svg>
  );
}

export default Geofence;

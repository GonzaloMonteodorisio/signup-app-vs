/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Path,
  G,
} from 'react-native-svg';

function QuestionIcon(props) {
  const {
    color = '#4B4B54',
    size = 30,
    style = {},
    onPress = () => {},
  } = props;

  return (
    <Svg
      id="question"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      style={style}
      onPress={() => onPress()}
    >
      <G key={1} id="Grupo_6592" data-name="Grupo 6592">
        <G id="Grupo_6591" data-name="Grupo 6591">
          <Path id="Trazado_14331" data-name="Trazado 14331" d="M24,0A24,24,0,1,0,48,24,23.986,23.986,0,0,0,24,0Zm0,44.651A20.651,20.651,0,1,1,44.651,24,20.675,20.675,0,0,1,24,44.651Z" fill={color} />
        </G>
      </G>
      <G key={2} id="Grupo_6594" data-name="Grupo 6594" transform="translate(20.889 30.368)">
        <G id="Grupo_6593" data-name="Grupo 6593">
          <Path id="Trazado_14332" data-name="Trazado 14332" d="M225.216,323.924a2.433,2.433,0,0,0,0,4.865,2.433,2.433,0,0,0,0-4.865Z" transform="translate(-222.815 -323.924)" fill={color} />
        </G>
      </G>
      <G key={3} id="Grupo_6596" data-name="Grupo 6596" transform="translate(17.477 11.95)">
        <G id="Grupo_6595" data-name="Grupo 6595">
          <Path id="Trazado_14333" data-name="Trazado 14333" d="M192.645,127.469c-4.265,0-6.223,2.527-6.223,4.233a1.812,1.812,0,0,0,1.9,1.8c1.706,0,1.011-2.433,4.233-2.433,1.579,0,2.843.7,2.843,2.148,0,1.706-1.769,2.685-2.812,3.57a5.782,5.782,0,0,0-2.117,4.8c0,1.643.442,2.117,1.738,2.117,1.548,0,1.864-.7,1.864-1.3,0-1.643.032-2.59,1.769-3.949.853-.663,3.538-2.812,3.538-5.781S196.688,127.469,192.645,127.469Z" transform="translate(-186.421 -127.469)" fill={color} />
        </G>
      </G>
    </Svg>

  );
}

export default QuestionIcon;

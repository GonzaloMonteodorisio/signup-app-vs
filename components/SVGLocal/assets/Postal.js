import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Postal(props) {
  const {
    width = 214.003,
    height = 130.78,
  } = props;
  return (
    <Svg
      data-name="Group 5106"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 214.003 130.78"
      {...props}
    >
      <Path
        data-name="Path 14010"
        d="M9 34h214v130.78H9z"
        transform="translate(-9 -34)"
        fill="#b9b9cc"
      />
      <Path
        data-name="Path 14011"
        d="M9 102.38L116 42l107 60.38z"
        transform="translate(-9 28.399)"
        fill="#8992aa"
      />
      <Path
        data-name="Path 14012"
        d="M9 34l107 83.224L223 34z"
        transform="translate(-9 -34)"
        fill="#686878"
      />
    </Svg>
  );
}

export default Postal;

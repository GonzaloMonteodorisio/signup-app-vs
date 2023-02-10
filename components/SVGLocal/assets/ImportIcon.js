/* eslint-disable max-len */
import * as React from 'react';

import Svg, {
  Path,
} from 'react-native-svg';

function Import(props) {
  const {
    size = 30,
    color = '#141517',
  } = props;

  return (
    <Svg
      id="import"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 1023.998 1024"
    >
      <Path
        id="import-2"
        data-name="import"
        d="M86.743,85.333H292.759c35.93,0,65.057-3.748,65.057-39.094S328.688,0,292.759,0H65.058C29.127,0,0,28.654,0,64V960c0,35.346,29.127,64,65.058,64h227.7c35.93,0,65.057-5.612,65.057-40.958s-29.127-44.375-65.057-44.375H86.743ZM569.562,478.812H959.744c35.93,0,64.256,5.052,64.256,40.4s-28.326,44.935-64.256,44.935H570.778L586,672.791c2.905,20.734-24.968,35.53-43.879,23.6L268.5,540.244c-17.454-11.012-17.454-17.252,0-28.266L542.118,346.56c18.946-11.956,46.992,3.022,43.879,23.6Z"
        transform="translate(0 1024) rotate(-90)"
        fill={color}
      />
    </Svg>
  );
}

export default Import;

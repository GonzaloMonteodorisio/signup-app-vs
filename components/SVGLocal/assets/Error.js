import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Error(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      {...props}
    >
      <Path
        d="M36 22A14 14 0 1122 8a14 14 0 0114 14zm-14 2.823a2.6 2.6 0 102.6 2.6 2.6 2.6 0 00-2.6-2.6zm-2.465-9.334l.419 7.677a.677.677 0 00.676.641h2.74a.677.677 0 00.676-.641l.419-7.677a.677.677 0 00-.676-.714h-3.578a.677.677 0 00-.676.714z"
        transform="translate(-8 -8)"
        fill="#ad0019"
      />
    </Svg>
  );
}

export default Error;

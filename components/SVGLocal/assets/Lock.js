import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      data-name="12-Lock"
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={42}
      viewBox="0 0 30 42"
      {...props}
    >
      <Path
        data-name="Path 14279"
        d="M31.5 17v-4.935A10.08 10.08 0 0021.435 2h-.87A10.08 10.08 0 0010.5 12.065V17A4.5 4.5 0 006 21.5v13.95A8.565 8.565 0 0014.55 44h12.9A8.565 8.565 0 0036 35.45V21.5a4.5 4.5 0 00-4.5-4.5zm-18-4.935A7.065 7.065 0 0120.565 5h.87a7.065 7.065 0 017.065 7.065V17h-15zM33 35.45A5.55 5.55 0 0127.45 41h-12.9A5.55 5.55 0 019 35.45V21.5a1.5 1.5 0 011.5-1.5h21a1.5 1.5 0 011.5 1.5z"
        transform="translate(-6 -2)"
        fill="#616177"
      />
      <Path
        data-name="Path 14280"
        d="M18.516 22.606v4.938a1.505 1.505 0 01-3.011 0v-4.938a3.011 3.011 0 113.011 0z"
        transform="translate(-2.011 5.462)"
        fill="#616177"
      />
    </Svg>
  );
}

export default SvgComponent;

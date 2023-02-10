import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Heart(props) {
  return (
    <Svg
      data-name="heart (1)"
      xmlns="http://www.w3.org/2000/svg"
      width={34.695}
      height={29.738}
      viewBox="0 0 34.695 29.738"
      {...props}
    >
      <Path
        data-name="Path 13825"
        d="M25.423 0a9.383 9.383 0 00-8.075 4.433A9.379 9.379 0 000 9.258c0 12.064 17.347 20.48 17.347 20.48s17.347-8.416 17.347-20.48A9.47 9.47 0 0025.423 0zm0 0"
        fill="#fe1739"
      />
      <Path
        data-name="Path 13826"
        d="M2.389 9.258A9.5 9.5 0 0110.519.08 9.8 9.8 0 009.258 0 9.463 9.463 0 000 9.258c0 12.064 17.32 20.48 17.32 20.48s.448-.218 1.194-.631C14.6 26.945 2.389 19.389 2.389 9.258zm0 0"
        transform="translate(0 .001)"
        fill="#e10021"
      />
    </Svg>
  );
}

export default Heart;

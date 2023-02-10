import React from 'react';

import * as Icons from './assets';

function AssetSummoner(props) {
  const {
    name,
    ...rest
  } = props;

  let Result = Icons[name];
  if (!Result) {
    Result = Icons.Close;
  }

  return <Result {...rest} />;
}

export default AssetSummoner;

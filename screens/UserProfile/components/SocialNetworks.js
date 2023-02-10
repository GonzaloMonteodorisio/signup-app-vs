import React from 'react';

import { View } from 'react-native';
// import InteractiveField from '../../../components/InteractiveField';

function SocialNetworks({
  github = '',
  twitter = '',
  telegram = '',
  onConfirm = () => {},
  editable = false,
}) {
  function handleConfirm(sn, value) {
    onConfirm(sn, value);
  }

  return (
    <View>
      {/* <InteractiveField editableMode={editable} initialValue={github} type="github" onConfirm={(value) => handleConfirm('github', value)} />
      <InteractiveField editableMode={editable} initialValue={twitter} type="twitter" onConfirm={(value) => handleConfirm('twitter', value)} />
      <InteractiveField editableMode={editable} initialValue={telegram} type="telegram" onConfirm={(value) => handleConfirm('telegram', value)} /> */}
    </View>
  );
}

export default SocialNetworks;

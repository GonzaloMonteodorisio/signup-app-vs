import React from 'react';

import {
  View,
} from 'react-native';

import InteractiveField from '../../../components/InteractiveField';

function UserBasicInformation({
  editable,
  firstName,
  lastName,
  onConfirm,
}) {
  function handleConfirm(sn, value) {
    onConfirm(sn, value);
  }

  return (
    <View>
      <InteractiveField editableMode={editable} initialValue={firstName} type="info" onConfirm={(value) => handleConfirm('firstName', value)} />
      <InteractiveField editableMode={editable} initialValue={lastName} type="info" onConfirm={(value) => handleConfirm('lastName', value)} />
    </View>
  );
}

export default UserBasicInformation;

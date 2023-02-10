import React, {
  useState,
  useEffect,
} from 'react';

import { View } from 'react-native';
import {
  FontAwesome,
} from '@expo/vector-icons';

import Input from '../Input';
import Text from '../Text';

import styles from './styles';

function SocialField({
  type = 'github',
  initialValue = '',
  onConfirm = () => {},
  editableMode = true,
}) {
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  return (
    <View style={styles.container}>
      <View style={styles.snIcon}>
        <FontAwesome name={type} size={36} color="white" />
      </View>
      <View style={styles.text}>
        {editable && (
          <Input
            style={styles.input}
            value={value}
            onChange={setValue}
          />
        )}
        {!editable && (
          <Text style={styles.input}>
            {`${value}`}
          </Text>
        )}
      </View>

      {editableMode && (
        <View style={styles.icons}>
          {editable && (
            <>
              <FontAwesome
                onPress={() => setEditable(!editable)}
                name="close"
                size={24}
                color="white"
              />
              <FontAwesome
                name="check"
                size={24}
                color="white"
                onPress={() => {
                  setEditable(!editable);
                  onConfirm(value);
                }}
              />
            </>
          )}
          {!editable && (
            <FontAwesome
              name="edit"
              size={24}
              color="white"
              onPress={() => setEditable(!editable)}
            />
          )}
        </View>
      )}
    </View>
  );
}

export default SocialField;

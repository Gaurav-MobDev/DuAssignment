import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Colors} from '../utils';

type ButtonType = {
  label: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress: () => void;
};
function Button(props: ButtonType) {
  const {label, style, labelStyle, disabled, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, style, disabled && styles.disableColor]}>
      <Text
        style={[
          styles.label,
          labelStyle,
          disabled && styles.disableLabelColor,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: Colors.lightBlue,
    justifyContent: 'center',
    borderRadius: 4,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    color: Colors.black,
  },
  disableColor: {
    backgroundColor: Colors.extraLightBlue,
  },
  disableLabelColor: {
    color: Colors.grey,
  },
});
export {Button};

import React from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputEndEditingEventData,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import {Colors} from '../utils';

type MyTextInputType = {
  label?: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  onEndEditing: (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => void;
  value: string;
  labelStyle?: object;
  textInputStyle?: StyleProp<TextStyle>;
  error?: string;
  locale?: string;
  maxLength?: number;
  secureTextEntry?: boolean;
};

function MyTextInput(props: MyTextInputType) {
  const {
    placeholder,
    label,
    onChangeText,
    value,
    textInputStyle,
    labelStyle,
    onEndEditing,
    error,
    locale,
    maxLength,
    secureTextEntry,
  } = props;
  return (
    <>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        value={value}
        placeholderTextColor={Colors.black}
        style={[
          textInputStyle,
          styles.defaultTextInputStyle,
          error ? styles.errorBorder : styles.border,
        ]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
      />
      {error && (
        <Text style={[styles.errorLabel, locale === 'ar' && styles.rightText]}>
          {error}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  errorLabel: {
    color: 'red',
    textAlign: 'left',
  },
  errorBorder: {
    borderColor: Colors.red,
  },
  border: {
    borderColor: Colors.black,
  },
  defaultTextInputStyle: {
    padding: 8,
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    color: Colors.black,
  },
  rightText: {
    textAlign: 'right',
  },
});
export {MyTextInput};

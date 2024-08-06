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

type MyTextInputType = {
  label?: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  onEndEditing: (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => void;
  value: string;
  labelStyle?: object;
  textInputStyle: StyleProp<TextStyle>;
  error?: string;
  locale?: string;
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
  } = props;
  return (
    <>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        placeholderTextColor={'#000'}
        style={textInputStyle}
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
  rightText: {
    textAlign: 'right',
  },
});
export {MyTextInput};

import React from 'react';
import {Text, TextInput} from 'react-native';

type MyTextInputType = {
  label?: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  value: string;
  labelStyle?: object;
  textInputStyle: object;
};

function MyTextInput(props: MyTextInputType) {
  const {placeholder, label, onChangeText, value, textInputStyle, labelStyle} =
    props;
  return (
    <>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        style={textInputStyle}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </>
  );
}

export {MyTextInput};

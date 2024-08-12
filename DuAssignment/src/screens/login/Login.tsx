import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {MyTextInput, Button} from '../../components';
import {TRANSLATION_STRINGS} from '../../utils';
import {i18n} from '../../localization';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {saveUserDetails, setLanguage} from '../../redux/login/actions';
import {validateEmail, validatePassword} from '../../utils/Validations';
import {RootState} from '../../redux/reducers';
import {styles} from './style';

function Login() {
  const dispatch = useAppDispatch();
  const {
    loginScreen,
    English,
    Arabic,
    enterUserName,
    enterPassword,
    emailError,
    passwordError,
  } = TRANSLATION_STRINGS;
  let {language: stateLanguage} = useAppSelector(
    (state: RootState) => state.login,
  );

  const [username, setUsername] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [locale, setLocale] = useState(stateLanguage);

  useEffect(() => {
    setLocale(stateLanguage);
  }, [stateLanguage]);

  const changeLanguage = (language: string) => {
    i18n.locale = language;
    setLocale(language);
    dispatch(setLanguage({language}));
  };

  const setEnglishButton = () => {
    changeLanguage('en');
  };

  const setArabicButton = () => {
    changeLanguage('ar');
  };
  const updateUserName = (value: string) => {
    setUsername(value);
    checkEmailValidation();
  };

  const checkEmailValidation = () => {
    let isValid = validateEmail(username);
    if (!isValid) {
      setEmailErrorMessage(emailError);
    } else {
      setEmailErrorMessage('');
    }
  };

  const checkPasswordValidation = () => {
    let isValid = validatePassword(password);
    if (!isValid) {
      setPasswordErrorMessage(passwordError);
    } else {
      setPasswordErrorMessage('');
    }
  };

  const updatePassword = (value: string) => {
    setPassword(value);
    checkPasswordValidation();
  };

  const loginAction = () => {
    dispatch(saveUserDetails({isLoggedIn: true}));
  };

  const checkLoginButtonDisabledOrNot = () => {
    let shouldDisable =
      username === '' ||
      emailErrorMessage !== '' ||
      password === '' ||
      passwordErrorMessage !== '';
    return shouldDisable;
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <View style={styles.loginTitleView}>
            <Text style={styles.loginTitle}>{i18n.t(loginScreen)}</Text>
          </View>
          <View style={styles.buttonsView}>
            <Button
              onPress={setEnglishButton}
              label={English}
              style={styles.englishButton}
            />
            <Button
              label={Arabic}
              onPress={setArabicButton}
              style={styles.arabicButton}
            />
          </View>
          <View style={styles.inputView}>
            <MyTextInput
              textInputStyle={[locale === 'ar' && styles.rightText]}
              value={username}
              placeholder={i18n.t(enterUserName)}
              onChangeText={updateUserName}
              onEndEditing={checkEmailValidation}
              error={emailErrorMessage && i18n.t(emailError)}
              locale={locale}
            />
            <MyTextInput
              maxLength={15}
              textInputStyle={[locale === 'ar' && styles.rightText]}
              value={password}
              placeholder={i18n.t(enterPassword)}
              onChangeText={updatePassword}
              onEndEditing={checkPasswordValidation}
              error={passwordErrorMessage && i18n.t(passwordError)}
              locale={locale}
              secureTextEntry={true}
            />
            <Button
              disabled={checkLoginButtonDisabledOrNot()}
              onPress={loginAction}
              label={i18n.t(loginScreen)}
              style={styles.loginButton}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;

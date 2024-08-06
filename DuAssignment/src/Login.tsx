import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {MyTextInput} from './components';
import {TRANSLATION_STRINGS} from './utils';
import {i18n} from './localization';
import {useAppDispatch, useAppSelector} from './redux/hooks';
import {saveUserDetails, setLanguage} from './redux/login/actions';
import {validateEmail, validatePassword} from './utils/Validations';
import {RootState} from './redux/reducers';
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
  let {language} = useAppSelector((state: RootState) => state.login);

  const [username, setUsername] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [locale, setLocale] = useState(language);

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
      <View style={styles.container}>
        <View style={styles.buttonsView}>
          <TouchableOpacity
            onPress={setEnglishButton}
            style={styles.englishButton}>
            <Text>{English}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={setArabicButton}
            style={styles.arabicButton}>
            <Text>{Arabic}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <MyTextInput
            textInputStyle={[
              styles.textInputStyle,
              locale === 'ar' && styles.rightText,
            ]}
            value={username}
            placeholder={i18n.t(enterUserName)}
            onChangeText={updateUserName}
            onEndEditing={checkEmailValidation}
            error={emailErrorMessage && i18n.t(emailError)}
            locale={locale}
          />
          <MyTextInput
            textInputStyle={[
              styles.textInputStyle,
              locale === 'ar' && styles.rightText,
            ]}
            value={password}
            placeholder={i18n.t(enterPassword)}
            onChangeText={updatePassword}
            onEndEditing={checkPasswordValidation}
            error={passwordErrorMessage && i18n.t(passwordError)}
            locale={locale}
          />
          <TouchableOpacity
            disabled={checkLoginButtonDisabledOrNot()}
            onPress={loginAction}
            style={styles.loginButton}>
            <Text>{i18n.t(loginScreen)}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  buttonsView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  rightText: {
    textAlign: 'right',
  },
  englishButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 44,
    width: 100,
  },
  arabicButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 44,
    width: 100,
  },
  inputView: {
    flex: 5,
  },
  textInputStyle: {
    padding: 8,
    height: 44,
    borderWidth: 1,
  },
  loginButton: {
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
});
export default Login;

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
import {useAppDispatch} from './redux/hooks';
import {saveUserDetails} from './redux/login/actions';
function Login() {
  const dispatch = useAppDispatch();
  const {loginScreen, English, Arabic, enterUserName, enterPassword} =
    TRANSLATION_STRINGS;

  const [username, setUsername] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [locale, setLocale] = useState(i18n.locale);

  const changeLanguage = (language: string) => {
    i18n.locale = language;
    setLocale(language);
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

  const loginAction = () => {
    dispatch(saveUserDetails({isLoggedIn: true}));
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
            textInputStyle={styles.textInputStyle}
            value={username}
            placeholder={i18n.t(enterUserName)}
            onChangeText={updateUserName}
          />
          <MyTextInput
            textInputStyle={styles.textInputStyle}
            value={username}
            placeholder={i18n.t(enterPassword)}
            onChangeText={updateUserName}
          />
          <TouchableOpacity onPress={loginAction} style={styles.loginButton}>
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

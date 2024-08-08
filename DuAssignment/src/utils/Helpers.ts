import {Alert} from 'react-native';
import {TRANSLATION_STRINGS} from '.';
import {i18n} from '../localization';
const {noInternet, ok, logout, logoutAlert, cancel} = TRANSLATION_STRINGS;

export const okAlert = () => {
  Alert.alert(i18n.t(noInternet), '', [{text: i18n.t(ok)}]);
};

export const showLogoutAlert = (action: () => void) => {
  Alert.alert(
    i18n.t(logout),
    i18n.t(logoutAlert),
    [
      {
        text: i18n.t(cancel),
        onPress: () => {},
        style: 'cancel',
      },
      {text: i18n.t(ok), onPress: () => action()},
    ],
    {cancelable: false},
  );
};

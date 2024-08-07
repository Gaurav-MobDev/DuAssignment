import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

const {offWhite, lightBlue, black} = Colors;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: offWhite,
  },
  keyboardView: {
    flex: 1,
    marginHorizontal: 12,
  },
  buttonsView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightText: {
    textAlign: 'right',
  },
  englishButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    width: 100,
    borderRadius: 4,
    backgroundColor: lightBlue,
  },
  arabicButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    width: 100,
    borderRadius: 4,
    backgroundColor: lightBlue,
  },
  inputView: {
    flex: 5,
  },
  textInputStyle: {
    padding: 8,
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    color: black,
  },
  loginButton: {
    height: 44,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    backgroundColor: lightBlue,
  },
});

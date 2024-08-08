import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

const {offWhite, lightBlue, black} = Colors;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: offWhite,
  },
  loginTitleView: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: black,
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
  loginButton: {
    marginTop: 24,
  },
});

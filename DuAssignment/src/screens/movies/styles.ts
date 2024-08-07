import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../utils/Constants';
import {Colors} from '../../utils';

const {offWhite, black} = Colors;
export const styles = StyleSheet.create({
  fullView: {
    flex: 1,
    backgroundColor: offWhite,
  },
  mainTitleContainer: {flex: 4, justifyContent: 'center', alignItems: 'center'},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: offWhite,
  },
  header: {
    flexDirection: 'row',
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    color: black,
  },
  renderItemView: {
    height: 240,
    width: (SCREEN_WIDTH - 16) / 2,
    padding: 4,
    justifyContent: 'center',
  },
  logoutTitle: {
    fontSize: 12,
    color: black,
  },
  logoutButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 8,
    height: 44,
  },
  shadowView: {
    backgroundColor: offWhite,
    shadowColor: black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    flex: 1,
  },
  moviewImageContainer: {
    flex: 8,
    padding: 4,
  },
  movieImage: {
    flex: 1,
  },
  movieTitle: {
    fontWeight: '600',
    textAlign: 'center',
    color: black,
  },
  movieTitleContainer: {
    flex: 2,
  },
  listView: {flex: 9},
});

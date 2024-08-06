import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {fetchMovies, resetStore} from './redux/movies/actions';
import {useAppDispatch, useAppSelector} from './redux/hooks';
import {IMAGE_URL} from './utils/Endpoints';
import {RootState} from './redux/reducers';
import {Error} from './components/Error';
import {SCREEN_WIDTH} from './utils/Constants';
import {i18n} from './localization';

function Movies() {
  let dispatch = useAppDispatch();
  let {movies, error, loading} = useAppSelector(
    (state: RootState) => state.movies,
  );

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    dispatch(fetchMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (movies?.length > 0) {
      setMoviesList(JSON.parse(JSON.stringify(movies)));
    }
  }, [movies]);

  const logoutAction = () => {
    dispatch(resetStore());
  };
  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles.renderItemView}>
        <View style={styles.shadowView}>
          <View style={styles.moviewImageContainer}>
            <FastImage
              style={styles.movieImage}
              source={{
                uri: `${IMAGE_URL}${item.poster_path}`,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={styles.movieTitleContainer}>
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        </View>
      </View>
    );
  };
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size={'large'} color={'#000'} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <>
          <Error error={error} />
        </>
      ) : (
        <>
          <View style={styles.header}>
            <View style={styles.fullView} />
            <View style={styles.mainTitleContainer}>
              <Text style={styles.heading}>{i18n.t('movies')}</Text>
            </View>
            <TouchableOpacity
              onPress={logoutAction}
              style={styles.logoutButton}>
              <Text style={styles.logoutTitle}>{i18n.t('logout')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listView}>
            <FlatList
              keyExtractor={item => item.id}
              numColumns={2}
              data={moviesList}
              renderItem={renderItem}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullView: {
    flex: 1,
    backgroundColor: '#fffff2',
  },
  mainTitleContainer: {flex: 4, justifyContent: 'center', alignItems: 'center'},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffff2',
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
    color: '#000',
  },
  renderItemView: {
    height: 240,
    width: (SCREEN_WIDTH - 16) / 2,
    padding: 4,
    justifyContent: 'center',
  },
  logoutTitle: {
    fontSize: 12,
    color: '#000',
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
    backgroundColor: '#fffff2',
    shadowColor: '#000',
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
    color: '#000',
  },
  movieTitleContainer: {
    flex: 2,
  },
  listView: {flex: 9},
});
export default Movies;

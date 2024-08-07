import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {fetchMovies, resetStore} from '../../redux/movies/actions';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {IMAGE_URL} from '../../utils/Endpoints';
import {RootState} from '../../redux/reducers';
import {Error} from '../../components/Error';
import {i18n} from '../../localization';
import {styles} from './styles';
import {Colors, TRANSLATION_STRINGS} from '../../utils';

function Movies() {
  const {moviesLabel, logout} = TRANSLATION_STRINGS;
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
        <ActivityIndicator size={'large'} color={Colors.black} />
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
              <Text style={styles.heading}>{i18n.t(moviesLabel)}</Text>
            </View>
            <TouchableOpacity
              onPress={logoutAction}
              style={styles.logoutButton}>
              <Text style={styles.logoutTitle}>{i18n.t(logout)}</Text>
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

export default Movies;

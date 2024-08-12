import React, {useCallback, useEffect, useState} from 'react';
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
import {styles, ITEM_HEIGHT} from './styles';
import {Colors, showLogoutAlert, TRANSLATION_STRINGS} from '../../utils';
import {okAlert as showAlert} from '../../utils';
import useNetworkStatus from '../../hooks/netinfoHook';
import {MOVIES_PLACEHOLDER} from '../../utils/Images';

function Movies() {
  const {moviesLabel, logout} = TRANSLATION_STRINGS;
  const isConnected = useNetworkStatus();

  let dispatch = useAppDispatch();

  let {movies, error, loading, totalPagesCount} = useAppSelector(
    (state: RootState) => state.movies,
  );

  const [moviesList, setMoviesList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [totalPages, setTotalPages] = useState(45502);

  useEffect(() => {
    dispatch(fetchMovies(pageNumber));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  useEffect(() => {
    if (movies?.length > 0) {
      setMoviesList(JSON.parse(JSON.stringify(movies)));
    }
  }, [movies]);

  useEffect(() => {
    if (!isConnected) {
      showAlert();
    }
  }, [isConnected]);

  useEffect(() => {
    setTotalPages(totalPagesCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logoutAction = () => {
    showLogoutAlert(resetState);
  };

  const resetState = () => {
    dispatch(resetStore());
  };

  const handleLoadMore = () => {
    if (!loading && pageNumber < totalPages) {
      setPageNumber(prevPage => prevPage + 1);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPageNumber(1);
    setMoviesList([]);
    setRefreshing(false);
  };

  const renderItem = useCallback(({item}: {item: any}) => {
    return (
      <View style={styles.renderItemView}>
        <View style={styles.shadowView}>
          <View style={styles.moviewImageContainer}>
            <FastImage
              defaultSource={MOVIES_PLACEHOLDER}
              style={styles.movieImage}
              source={{
                uri: `${IMAGE_URL}${item.poster_path}`,
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
  }, []);
  const getItemLayout = (data: any, index: number) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });
  const footer = () => {
    if (!loading) {
      return null;
    }
    return (
      <ActivityIndicator
        size={'large'}
        color={Colors.black}
        style={styles.footer}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.header}>
          <View style={styles.fullView} />
          <View style={styles.mainTitleContainer}>
            <Text style={styles.heading}>{i18n.t(moviesLabel)}</Text>
          </View>
          <TouchableOpacity onPress={logoutAction} style={styles.logoutButton}>
            <Text style={styles.logoutTitle}>{i18n.t(logout)}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listView}>
          {error && <Error error={error} />}
          <FlatList
            keyExtractor={(item, index) => `${item.id}-${index}`}
            numColumns={2}
            data={moviesList}
            renderItem={renderItem}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.2}
            refreshing={refreshing}
            onRefresh={onRefresh}
            getItemLayout={getItemLayout}
            ListFooterComponent={footer}
          />
        </View>
      </>
    </SafeAreaView>
  );
}

export default Movies;

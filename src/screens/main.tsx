import React, {useCallback} from 'react';
import {ScrollView, Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';
import {View, Carousel} from 'react-native-ui-lib';
import {observer} from 'mobx-react';

import {useServices} from '../services';
import {useStores} from '../stores';
import {Section} from '../components/section';
import {MovieCardItem} from '../components/movie-card-item';
import LoadingScreen from '../components/LoadingScreen';
import RefreshControl from '../components/RefreshControl';

export const Main: React.FC = observer(() => {
  const {nav, t, api} = useServices();
  const {movies} = useStores();

  const getCarousels = useCallback(async () => {
    try {
      await api.movies.getCarousels();
    } catch (e) {
      Alert.alert(t.do('general.error'), t.do('general.errors.fetchError'));
    }
  }, [api.movies, t]);

  // use it if u want to refresh the data every time the screen is focused
  //
  // useFocusEffect(
  //   useCallback(() => {
  //     getCarousels();
  //   }, [getCarousels]),
  // );

  if (movies.loading) {
    return <LoadingScreen />;
  }

  /*****************************************************************************
   *
   * Info: if there was more data to display (for example list of all movies), i would use a Flatlist
   * instead of a Carousel and map function, because Flatlist is more efficient
   *
   ****************************************************************************/
  return (
    <View flex bg-bgColor>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={<RefreshControl refreshing={movies.loading} onRefresh={getCarousels} />}
      >
        <View padding-s4>
          {movies.carousels.map((carousel, index) => (
            <Section key={`${carousel.title}${index}`} title={carousel.title}>
              <Carousel pageWidth={150}>
                {carousel.items.map(movie => (
                  <MovieCardItem
                    key={`movieId-${movie.id}`}
                    movie={movie}
                    onPress={() => nav.push('MovieDetail', {movieId: movie.id})}
                  />
                ))}
              </Carousel>
            </Section>
          ))}
        </View>
      </ScrollView>
    </View>
  );
});

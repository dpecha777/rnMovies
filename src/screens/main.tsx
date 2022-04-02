import React, {useCallback} from 'react';
import {ScrollView, Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';
import {View, Carousel} from 'react-native-ui-lib';
import {observer} from 'mobx-react';

import {useServices} from '../services';
import {useStores} from '../stores';
import {Section} from '../components/section';
import {MovieCardItem} from '../components/movie-card-item';

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

  useFocusEffect(
    useCallback(() => {
      getCarousels();
    }, [getCarousels]),
  );

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
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

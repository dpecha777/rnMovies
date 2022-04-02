import React, {useCallback, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScreenProps} from '.';
import {observer} from 'mobx-react';
import {Colors, Image, LoaderScreen, Text, View} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';
import {useServices} from '../services';
import {useStores} from '../stores';

type Props = NativeStackScreenProps<ScreenProps, 'MovieDetail'>;

export const MovieDetail: React.FC<Props> = observer(({route}) => {
  const {t, api} = useServices();
  const {movies} = useStores();
  const {currentMovieDetail} = movies;

  const {params} = route;
  const {movieId} = params;

  const getData = useCallback(async () => {
    await api.movies.getMovieDetail(movieId);
  }, [movieId, api.movies]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (movies.loading) {
    return <LoaderScreen color={Colors.primary} />;
  }

  if (!currentMovieDetail) {
    return (
      <View flex bg-bgColor>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View padding-s4>
            <Text textColor>{t.do('movieDetail.emptyDetail')}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View padding-s4>
          <Image style={{height: 350}} source={{uri: currentMovieDetail.posterUrl}} resizeMode="contain" />
          <View paddingV-s4>
            <Text textColor text30>
              {currentMovieDetail.title}
            </Text>
            <Text textColor text65>
              {`${currentMovieDetail.year}, ${currentMovieDetail.duration} ${t.do('movieDetail.durationUnit')}`}
            </Text>
            <InfoItem label={t.do('movieDetail.genres')} value={currentMovieDetail.genres?.join(' / ')} />
            <InfoItem label={t.do('movieDetail.directing')} value={currentMovieDetail.director} />
            <InfoItem label={t.do('movieDetail.actors')} value={currentMovieDetail.actors} />
            <InfoItem label={t.do('movieDetail.plot')} value={currentMovieDetail.plot} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
});

const InfoItem = ({label, value}: {label: string; value: string}) => (
  <View flex paddingV-3>
    <Text color={Colors.primary} marginR-10>
      {label}:
    </Text>
    <Text textColor>{value}</Text>
  </View>
);

import React, {useCallback} from 'react';
import {ScrollView, Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';
import {View, Text} from 'react-native-ui-lib';
import {observer} from 'mobx-react';

import {useServices} from '../services';
import {useStores} from '../stores';

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
          <Text textColor>{t.do('helloWorld')}</Text>
        </View>
      </ScrollView>
    </View>
  );
});

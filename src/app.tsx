import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {RootNavigator} from './screens';
import {getNavigationTheme, getThemeStatusBarStyle} from './utils/designSystem';
import {useServices} from './services';

export const AppNavigator = (): JSX.Element => {
  useColorScheme();
  const {nav} = useServices();

  console.log('nav :>> ', nav);

  useEffect(() => {
    (async () => {
      const neco = await fetch('https://jsonplaceholder.typicode.com/users');
      console.log('neco', await neco.json());
    })();
  }, []);
  return (
    <>
      <StatusBar barStyle={getThemeStatusBarStyle()} />
      <NavigationContainer
        ref={nav.n}
        onReady={nav.onReady}
        onStateChange={nav.onStateChange}
        theme={getNavigationTheme()}
      >
        <RootNavigator />
      </NavigationContainer>
    </>
  );
};

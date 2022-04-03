import React from 'react';
import {Colors, LoaderScreen, LoaderScreenProps} from 'react-native-ui-lib';

const LoadingScreen: React.FC<LoaderScreenProps> = props => {
  return <LoaderScreen color={Colors.primary} {...props} />;
};

export default LoadingScreen;

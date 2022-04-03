import React from 'react';
import {RefreshControl as RC, RefreshControlProps} from 'react-native';
import {Colors} from 'react-native-ui-lib';

const RefreshControl: React.FC<RefreshControlProps> = props => {
  return <RC tintColor={Colors.primary} colors={[Colors.primary]} {...props} />;
};

export default RefreshControl;

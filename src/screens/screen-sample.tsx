import React from 'react';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ScreenProps} from '.';
import {useServices} from '../services';
// import { useStores } from '../stores';
// import { useConstants } from '../utils/constants';

type Props = NativeStackScreenProps<ScreenProps, 'Example'>;

export const Example: React.FC<Props> = observer(({route}) => {
  const {t} = useServices();
  // const {} = useStores();
  // const {} = useConstants();

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View padding-s4>
          <Text textColor center>
            {t.do('helloWorld')}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
});

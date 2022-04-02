import React from 'react';
import {Card, Text, View} from 'react-native-ui-lib';

interface MovieCardItemProps {
  movie: Movie;
  onPress?: () => void;
}

export const MovieCardItem = ({movie, onPress}: MovieCardItemProps) => {
  return (
    <Card
      enableShadow={false}
      borderRadius={0}
      height={150}
      flex
      backgroundColor="bgColor"
      onPress={() => onPress?.()}
      activeOpacity={1}
      marginR-10
      marginB-30
    >
      <Card.Section imageSource={{uri: movie.posterUrl}} imageStyle={{height: '100%', resizeMode: 'cover'}} />

      <View bg-bg2Color padding-s2 center absH absB>
        <Text textAlign="center" textColor>
          {movie.title}
        </Text>
      </View>
    </Card>
  );
};

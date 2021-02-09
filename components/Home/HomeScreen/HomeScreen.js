import React from 'react';
import { Text, View, Image } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={{ padding: 24 }}>
      <Image
        style={{width: '100%'}}
        source={require('../../../assets/logo.jpeg')}
      />
      <View style={{ border: 'solid 1px black', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Text>
          Bem-vindas de volta!
        </Text>
      </View>
    </View>
  );
};

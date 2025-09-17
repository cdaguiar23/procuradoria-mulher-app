import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../App';

type Props = BottomTabScreenProps<RootTabParamList, 'B.O.'>;

const BOScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>B.O. Screen</Text>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
});

export default BOScreen;

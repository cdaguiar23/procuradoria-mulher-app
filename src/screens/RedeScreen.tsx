import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../App';

type Props = BottomTabScreenProps<RootTabParamList, 'Rede'>;

const RedeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Rede Screen</Text>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },

});

export default RedeScreen;

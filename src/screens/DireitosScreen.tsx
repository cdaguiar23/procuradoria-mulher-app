import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../App';

type Props = BottomTabScreenProps<RootTabParamList, 'Direitos'>;

const DireitosScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Direitos Screen</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DireitosScreen;

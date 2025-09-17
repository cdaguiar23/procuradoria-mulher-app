import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';


import { Shield } from 'lucide-react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../App';


type Props = BottomTabScreenProps<RootTabParamList, 'Início'>;

const HomeScreen = ({ navigation }: Props) => {

  const primaryColor = '#8B1B42';
  const backgroundColor = '#FFF9FB';
  const cardBackgroundColor = '#FFFFFF';
  const textColor = '#333333';
  const lightTextColor = '#555555';

  return (
    <ScrollView style={[styles.container, { backgroundColor: backgroundColor }]}>


      <View style={styles.header}>
        <Image source={require('../../assets/logo_procuradoria.png')} style={styles.logo} />
        <Text style={[styles.title, { color: primaryColor }]}>
          Procuradoria Especial da Mulher de Canelinha
        </Text>
        <Text style={[styles.subtitle, { color: lightTextColor }]}>
          Um espaço seguro de apoio, informação e proteção para todas as mulheres de Canelinha. Estamos aqui para ajudar.
        </Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: primaryColor }]} onPress={() => navigation.navigate('Denúncia')}>
          <Text style={styles.buttonText}>Precisa de Ajuda? Fale Conosco</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
        <Shield color={primaryColor} size={40} />
        <Text style={[styles.cardTitle, { color: primaryColor }]}>Denúncia Anônima</Text>
        <Text style={[styles.cardDescription, { color: lightTextColor }]}>
          Faça uma denúncia de forma segura e anônima. Sua identidade será protegida.
        </Text>
        <TouchableOpacity style={[styles.cardButton, { borderColor: primaryColor }]} onPress={() => navigation.navigate('Denúncia')}>
          <Text style={[styles.cardButtonText, { color: primaryColor }]}>Fazer Denúncia</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },

  header: {
    padding: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    margin: 20,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },

  cardButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1,
  },
  cardButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

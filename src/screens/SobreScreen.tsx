import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Info, MapPin, Phone, Mail } from 'lucide-react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../App';

type Props = BottomTabScreenProps<RootTabParamList, 'Sobre'>;

const SobreScreen = ({ navigation }: Props) => {
  const primaryColor = '#8B1B42';
  const backgroundColor = '#FFF9FB';
  const cardBackgroundColor = '#FFFFFF';
  const textColor = '#333333';
  const lightTextColor = '#555555';

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo_procuradoria.png')} style={styles.logo} />
        <Text style={[styles.title, { color: primaryColor }]}>
          Procuradoria Especial da Mulher de Canelinha
        </Text>
        <Text style={[styles.subtitle, { color: lightTextColor }]}>
          Um espaço seguro de apoio, informação e proteção para todas as mulheres de Canelinha. Estamos aqui para ajudar.
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={[styles.section, { backgroundColor: cardBackgroundColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Equipe</Text>
          <View style={styles.teamContainer}>
            <View style={styles.teamMember}>
              <Image source={require('../../assets/vereadora_janaira.jpg')} style={styles.teamPhoto} />
              <Text style={[styles.teamName, { color: textColor }]}>Janaira Reis</Text>
              <Text style={[styles.teamRole, { color: lightTextColor }]}>Presidente</Text>
            </View>
            <View style={styles.teamMember}>
              <Image source={require('../../assets/vereadora_fabricia.jpg')} style={styles.teamPhoto} />
              <Text style={[styles.teamName, { color: textColor }]}>Fabrícia Betinelli</Text>
              <Text style={[styles.teamRole, { color: lightTextColor }]}>Vice-Presidente</Text>
            </View>
            <View style={styles.teamMember}>
              <Image source={require('../../assets/vereador_jackson.jpg')} style={styles.teamPhoto} />
              <Text style={[styles.teamName, { color: textColor }]}>Jackson Miguel Machado</Text>
              <Text style={[styles.teamRole, { color: lightTextColor }]}>Membro</Text>
            </View>
          </View>
        </View>

        <View style={[styles.section, { backgroundColor: cardBackgroundColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Contato e Localização</Text>
          <View style={styles.contactItem}>
            <MapPin color={primaryColor} size={24} />
            <Text style={[styles.contactText, { color: textColor }]}>
              Rua Manoel Francisco Correa, 417 CEP: 88230-000 Centro Canelinha/SC
            </Text>
          </View>
          <View style={styles.contactItem}>
            <Phone color={primaryColor} size={24} />
            <Text style={[styles.contactText, { color: textColor }]}>
              (48) 3264-0033
            </Text>
          </View>
          <View style={styles.contactItem}>
            <Mail color={primaryColor} size={24} />
            <Text style={[styles.contactText, { color: textColor }]}>
              procuradoriadamulher@camaracanelinha.sc.gov.br
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
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
  scrollView: {
    flex: 1,
  },
  section: {
    margin: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  teamContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  teamMember: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  teamPhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  teamRole: {
    fontSize: 16,
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SobreScreen;

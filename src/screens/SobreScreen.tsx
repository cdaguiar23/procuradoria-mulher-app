import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';
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
      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: primaryColor }]}>
          Sobre a Procuradoria
        </Text>
        <Text style={[styles.subtitle, { color: lightTextColor }]}>
          Conheça a equipe e informações de contato da Procuradoria Especial da Mulher de Canelinha.
        </Text>

        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
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
            <Text style={[styles.sectionDescription, { color: lightTextColor }]}>
              Clique nos itens abaixo para abrir os aplicativos correspondentes (mapas, telefone ou email).
            </Text>
            <TouchableOpacity
              style={styles.contactItem}
              onPress={async () => {
                const url = 'https://www.google.com/maps/search/?api=1&query=Rua+Manoel+Francisco+Correa+417+Canelinha+SC';
                try {
                  const supported = await Linking.canOpenURL(url);
                  if (supported) {
                    await Linking.openURL(url);
                  } else {
                    console.log("Don't know how to open URI: " + url);
                  }
                } catch (error) {
                  console.error('Error opening URL:', error);
                }
              }}
            >
              <MapPin color={primaryColor} size={24} />
              <Text style={[styles.contactText, { color: textColor }]}>
                Rua Manoel Francisco Correa, 417 CEP: 88230-000 Centro Canelinha/SC
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => {
                Linking.openURL('tel:+554832640033');
              }}
            >
              <Phone color={primaryColor} size={24} />
              <Text style={[styles.contactText, { color: textColor }]}>
                (48) 3264-0033
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contactItem}
              onPress={async () => {
                const url = 'mailto:procuradoriadamulher@camaracanelinha.sc.gov.br';
                try {
                  const supported = await Linking.canOpenURL(url);
                  if (supported) {
                    await Linking.openURL(url);
                  } else {
                    console.log("Don't know how to open URI: " + url);
                  }
                } catch (error) {
                  console.error('Error opening URL:', error);
                }
              }}
            >
              <Mail color={primaryColor} size={24} />
              <Text style={[styles.contactText, { color: textColor }]}>
                procuradoriadamulher@camaracanelinha.sc.gov.br
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  section: {
    marginHorizontal: 10,
    marginVertical: 10,
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
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
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

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert, ScrollView } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../App';

type Props = BottomTabScreenProps<RootTabParamList, 'B.O.'>;

const BOScreen = (props: Props) => {
  const primaryColor = '#8B1B42';
  const backgroundColor = '#FFF9FB';
  const cardBackgroundColor = '#FFFFFF';
  const textColor = '#333333';
  const lightTextColor = '#555555';

  const handleDelegaciaVirtualPress = () => {
    const url = 'https://www.delegaciavirtual.sc.gov.br/';
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert('Erro', 'Não foi possível abrir o navegador');
      }
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: primaryColor }]}>
          Boletim de Ocorrência Online
        </Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
            <Text style={[styles.description, { color: lightTextColor }]}>
              A Delegacia Virtual da Polícia Civil de Santa Catarina (Delegacia Virtual de SC) é um serviço para o registro de ocorrências policiais pela internet, 24 horas por dia, todos os dias da semana.
            </Text>

            <Text style={[styles.description, { color: lightTextColor }]}>
              Este canal permite o registro de crimes como ameaça, calúnia, injúria, difamação, furto, estelionato, danos, desaparecimento de pessoas, entre outros.
            </Text>

            <Text style={[styles.warning, { color: primaryColor }]}>
              Em casos de emergência, como violência doméstica em andamento ou qualquer crime que esteja acontecendo, ligue imediatamente para o 190 (Polícia Militar).
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: primaryColor }]}
                onPress={handleDelegaciaVirtualPress}
              >
                <Text style={styles.buttonText}>
                  Ir para a Delegacia Virtual
                </Text>
                <ArrowRight color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.card, { backgroundColor: cardBackgroundColor, marginTop: 20 }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>Botão do Pânico</Text>
            <Text style={[styles.description, { color: lightTextColor }]}>O Botão do Pânico é um serviço utilizado no combate à violência contra mulher, disponível através do aplicativo PMSC Cidadão (Android e iOS). Em situações de emergência, ative o botão para solicitar ajuda imediata.</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: primaryColor }]}
                onPress={() => {
                  const androidUrl = 'market://details?id=br.gov.sc.pm.pmsccidadao';
                  const webUrl = 'https://play.google.com/store/apps/details?id=br.gov.sc.pm.pmsccidadao&hl=pt_BR';
                  Linking.canOpenURL(androidUrl).then(supported => {
                    if (supported) {
                      Linking.openURL(androidUrl);
                    } else {
                      Linking.openURL(webUrl);
                    }
                  });
                }}
              >
                <Text style={styles.buttonText}>
                  Baixar PMSC Cidadão (Android)
                </Text>
                <ArrowRight color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: primaryColor, marginTop: 10 }]}
                onPress={() => {
                  const iosUrl = 'itms-apps://itunes.apple.com/app/id1481519067';
                  const webUrl = 'https://apps.apple.com/br/app/pmsc-cidad%C3%A3o/id1481519067';
                  Linking.canOpenURL(iosUrl).then(supported => {
                    if (supported) {
                      Linking.openURL(iosUrl);
                    } else {
                      Linking.openURL(webUrl);
                    }
                  });
                }}
              >
                <Text style={[styles.buttonText, { fontSize: 14 }]}>
                  Baixar PMSC Cidadão (iOS)
                </Text>
                <ArrowRight color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 66,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#FFF9FB',
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 36,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  warning: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 24,
    lineHeight: 24,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 200,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
});

export default BOScreen;

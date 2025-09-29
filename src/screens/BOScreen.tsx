import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
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
      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: primaryColor }]}>
          Boletim de Ocorrência Online
        </Text>

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
              <ArrowRight />
            </TouchableOpacity>
          </View>
        </View>
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
    marginBottom: 32,
    lineHeight: 36,
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

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Linking } from 'react-native';
import { Phone } from 'lucide-react-native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../App';

type Props = BottomTabScreenProps<RootTabParamList, 'Rede'>;

const RedeScreen = (props: Props) => {
  const primaryColor = '#8B1B42';
  const backgroundColor = '#FFF9FB';
  const cardBackgroundColor = '#FFFFFF';
  const textColor = '#333333';
  const lightTextColor = '#555555';

  const handlePhonePress = (number: string) => {
    Linking.openURL(`tel:${number}`).catch(() => {
      Alert.alert('Erro', 'Não foi possível abrir o discador.');
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: primaryColor }]}>
          Rede de Proteção
        </Text>
        <Text style={[styles.subtitle, { color: lightTextColor }]}>
          Você não está sozinha. Canelinha tem uma Rede de Proteção para apoio e atendimento às mulheres em situação de violência.
        </Text>

        <ScrollView style={styles.scrollContainer}>
          {/* Disque 180 Card - Added as key contact */}
          <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>
              Disque 180
            </Text>
            <Text style={[styles.description, { color: lightTextColor }]}>
              Central de Atendimento à Mulher. Ligue 180 (gratuito, 24 horas, anônimo) para denúncias, orientação e apoio.
            </Text>
            <TouchableOpacity
              style={styles.phoneButton}
              onPress={() => handlePhonePress('180')}
            >
              <Phone size={20} color={primaryColor} />
              <Text style={[styles.phoneText, { color: primaryColor }]}>180</Text>
            </TouchableOpacity>
          </View>

          {/* Procuradoria Card */}
          <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>
              Procuradoria Especial da Mulher de Canelinha
            </Text>
            <Text style={[styles.description, { color: lightTextColor }]}>
              Serviços oferecidos pela Procuradoria Especial da Mulher de Canelinha.
            </Text>
            <TouchableOpacity
              style={styles.phoneButton}
              onPress={() => handlePhonePress('4834330000')}
            >
              <Phone size={20} color={primaryColor} />
              <Text style={[styles.phoneText, { color: primaryColor }]}>(48) 3433-0000</Text>
            </TouchableOpacity>
            <Text style={[styles.address, { color: lightTextColor }]}>
              Rua Manoel José Pedroso, 200 - Centro, Canelinha/SC
            </Text>
          </View>

          {/* Polícia Civil Card */}
          <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>
              Polícia Civil
            </Text>
            <Text style={[styles.description, { color: lightTextColor }]}>
              Delegacia de Polícia Civil de Canelinha para registro de ocorrências e investigações.
            </Text>
            <TouchableOpacity
              style={styles.phoneButton}
              onPress={() => handlePhonePress('4834330000')}
            >
              <Phone size={20} color={primaryColor} />
              <Text style={[styles.phoneText, { color: primaryColor }]}>(48) 3433-0000</Text>
            </TouchableOpacity>
          </View>

          {/* Serviços Oferecidos Card */}
          <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>
              Serviços Oferecidos
            </Text>
            <View style={styles.bulletList}>
              <Text style={[styles.bulletItem, { color: lightTextColor }]}>• Acolhimento</Text>
              <Text style={[styles.bulletItem, { color: lightTextColor }]}>• Apoio psicológico</Text>
              <Text style={[styles.bulletItem, { color: lightTextColor }]}>• Apoio jurídico</Text>
              <Text style={[styles.bulletItem, { color: lightTextColor }]}>• Apoio local</Text>
            </View>
          </View>

          {/* Centro de Referência Card */}
          <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>
              Centro de Referência
            </Text>
            <Text style={[styles.description, { color: lightTextColor }]}>
              Centro de Referência da Mulher em Canelinha.
            </Text>
            <TouchableOpacity
              style={styles.phoneButton}
              onPress={() => handlePhonePress('4834330000')}
            >
              <Phone size={20} color={primaryColor} />
              <Text style={[styles.phoneText, { color: primaryColor }]}>(48) 3433-0000</Text>
            </TouchableOpacity>
            <Text style={[styles.address, { color: lightTextColor }]}>
              Rua Manoel José Pedroso, 200 - Centro, Canelinha/SC
            </Text>
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
  card: {
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 8,
  },
  phoneText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  address: {
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  bulletList: {
    marginTop: 8,
  },
  bulletItem: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  },
});

export default RedeScreen;

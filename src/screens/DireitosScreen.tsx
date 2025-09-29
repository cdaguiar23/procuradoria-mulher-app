import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
import { ChevronDown, ChevronUp, User, BookOpen, FileText } from 'lucide-react-native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../App';

type Props = BottomTabScreenProps<RootTabParamList, 'Direitos'>;

const DireitosScreen = (props: Props) => {
  const primaryColor = '#8B1B42';
  const backgroundColor = '#FFF9FB';
  const cardBackgroundColor = '#FFFFFF';
  const textColor = '#333333';
  const lightTextColor = '#555555';

  const [expandedSections, setExpandedSections] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sectionContent = {
    section1: 'A violência doméstica e familiar é qualquer ação ou omissão baseada no gênero que cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial à mulher, no âmbito da unidade doméstica, da família ou em qualquer relação íntima de afeto, nos termos da Lei nº 11.340/2006 (Lei Maria da Penha).',
    section2: 'A Lei Maria da Penha prevê quatro tipos principais de violência: física (agressões corporais), psicológica (humilhações, ameaças), sexual (forçar atos sexuais) e patrimonial (destruir bens ou impedir acesso a recursos).',
    section3: 'Medidas Protetivas de Urgência são ações judiciais imediatas para proteger a mulher em situação de violência, como afastamento do agressor do lar, proibição de contato e suspensão de porte de arma.',
    section4: 'Você pode pedir ajuda ligando para o Disque 180 (Central de Atendimento à Mulher), 190 (Polícia Militar) ou buscando apoio em Centros de Referência da Mulher, Delegacias Especializadas ou Defensorias Públicas.',
    section5: 'Não. Você pode fazer a denúncia diretamente na Delegacia de Polícia. O acompanhamento por um advogado se torna necessário durante o processo judicial. Caso não possa pagar, você tem direito à assistência jurídica gratuita através da Defensoria Pública.',
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: primaryColor }]}>
          Conheça seus Direitos
        </Text>
        <Text style={[styles.subtitle, { color: lightTextColor }]}>
          Informação e um ferramental poderoso para proteger seus direitos como mulher e enfrentar a violência doméstica, além de buscar seus direitos.
        </Text>

        <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
          {/* Expandable Sections */}
          <TouchableOpacity
            style={styles.section}
            onPress={() => toggleSection('section1')}
          >
            <Text style={[styles.sectionTitle, { color: textColor }]}>
              O que é violência doméstica e familiar?
            </Text>
            {expandedSections.section1 ? <ChevronUp size={20} color={primaryColor} /> : <ChevronDown size={20} color={primaryColor} />}
          </TouchableOpacity>
          {expandedSections.section1 && (
            <Text style={[styles.sectionContent, { color: lightTextColor }]}>
              {sectionContent.section1}
            </Text>
          )}

          <TouchableOpacity
            style={styles.section}
            onPress={() => toggleSection('section2')}
          >
            <Text style={[styles.sectionTitle, { color: textColor }]}>
              Quais são os tipos de violência previstos na Lei Maria da Penha?
            </Text>
            {expandedSections.section2 ? <ChevronUp size={20} color={primaryColor} /> : <ChevronDown size={20} color={primaryColor} />}
          </TouchableOpacity>
          {expandedSections.section2 && (
            <Text style={[styles.sectionContent, { color: lightTextColor }]}>
              {sectionContent.section2}
            </Text>
          )}

          <TouchableOpacity
            style={styles.section}
            onPress={() => toggleSection('section3')}
          >
            <Text style={[styles.sectionTitle, { color: textColor }]}>
              O que são as Medidas Protetivas de Urgência?
            </Text>
            {expandedSections.section3 ? <ChevronUp size={20} color={primaryColor} /> : <ChevronDown size={20} color={primaryColor} />}
          </TouchableOpacity>
          {expandedSections.section3 && (
            <Text style={[styles.sectionContent, { color: lightTextColor }]}>
              {sectionContent.section3}
            </Text>
          )}

          <TouchableOpacity
            style={styles.section}
            onPress={() => toggleSection('section4')}
          >
            <Text style={[styles.sectionTitle, { color: textColor }]}>
              Como posso pedir ajuda?
            </Text>
            {expandedSections.section4 ? <ChevronUp size={20} color={primaryColor} /> : <ChevronDown size={20} color={primaryColor} />}
          </TouchableOpacity>
          {expandedSections.section4 && (
            <Text style={[styles.sectionContent, { color: lightTextColor }]}>
              {sectionContent.section4}
            </Text>
          )}

          <TouchableOpacity
            style={styles.section}
            onPress={() => toggleSection('section5')}
          >
            <Text style={[styles.sectionTitle, { color: textColor }]}>
              Precisa de um advogado para denunciar?
            </Text>
            {expandedSections.section5 ? <ChevronUp size={20} color={primaryColor} /> : <ChevronDown size={20} color={primaryColor} />}
          </TouchableOpacity>
          {expandedSections.section5 && (
            <Text style={[styles.sectionContent, { color: lightTextColor }]}>
              {sectionContent.section5}
            </Text>
          )}
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
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  sectionContent: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default DireitosScreen;

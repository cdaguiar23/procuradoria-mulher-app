import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking, ScrollView } from 'react-native';
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
    section6: false,
    section7: false,
    section8: false,
    section9: false,
    section10: false,
    section11: false,
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
    section6: 'Leis Federais: Lei Maria da Penha (Lei nº 11.340/2006) - combate à violência doméstica e familiar contra a mulher; Lei do Feminicídio (Lei nº 13.104/2015) - tipifica o feminicídio como crime hediondo; Lei nº 10.778/2003 - cria o Conselho Nacional dos Direitos da Mulher.\n\nLeis Estaduais em Santa Catarina: Lei Estadual nº 17.110/2017 - institui a Política Estadual de Enfrentamento à Violência contra a Mulher; Lei nº 16.840/2016 - cria o Programa Catarina Mulher; Lei nº 15.133/2010 - institui o Dia Estadual de Combate à Violência contra a Mulher.',
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: backgroundColor }]}>
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

        <View style={[styles.card, { backgroundColor: cardBackgroundColor, marginTop: 16 }]}>
          <Text style={[styles.cardTitle, { color: primaryColor }]}>
            Leis Federais e Estaduais
          </Text>
          <TouchableOpacity
            style={styles.section}
            onPress={() => toggleSection('section6')}
          >
            <Text style={[styles.sectionTitle, { color: textColor }]}>
              Lei Maria da Penha (Lei nº 11.340/2006)
            </Text>
            {expandedSections.section6 ? <ChevronUp size={20} color={primaryColor} /> : <ChevronDown size={20} color={primaryColor} />}
          </TouchableOpacity>
          {expandedSections.section6 && (
            <Text style={[styles.sectionContent, { color: lightTextColor }]}>
              O que é a Lei Maria da Penha? É a lei que combate a violência doméstica e familiar contra a mulher, estabelecendo medidas de proteção e punições para agressores. {' '}
              <Text style={[styles.link, { color: primaryColor }]} onPress={() => Linking.openURL('https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm')}>
                Ver lei completa
              </Text>
            </Text>
          )}

          <TouchableOpacity
            style={styles.section}
            onPress={() => toggleSection('section7')}
          >
            <Text style={[styles.sectionTitle, { color: textColor }]}>
              Lei do Feminicídio (Lei nº 13.104/2015)
            </Text>
            {expandedSections.section7 ? <ChevronUp size={20} color={primaryColor} /> : <ChevronDown size={20} color={primaryColor} />}
          </TouchableOpacity>
          {expandedSections.section7 && (
            <Text style={[styles.sectionContent, { color: lightTextColor }]}>
              O que é feminicídio? É o assassinato de uma mulher por razões de gênero, considerado crime hediondo com pena aumentada. {' '}
              <Text style={[styles.link, { color: primaryColor }]} onPress={() => Linking.openURL('https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13104.htm')}>
                Ver lei completa
              </Text>
            </Text>
          )}

          <TouchableOpacity
            style={styles.section}
            onPress={() => toggleSection('section8')}
          >
            <Text style={[styles.sectionTitle, { color: textColor }]}>
              Lei do Conselho Nacional dos Direitos da Mulher (Lei nº 10.778/2003)
            </Text>
            {expandedSections.section8 ? <ChevronUp size={20} color={primaryColor} /> : <ChevronDown size={20} color={primaryColor} />}
          </TouchableOpacity>
          {expandedSections.section8 && (
            <Text style={[styles.sectionContent, { color: lightTextColor }]}>
              O que cria essa lei? Cria o Conselho Nacional dos Direitos da Mulher, órgão responsável por políticas públicas de combate à violência contra a mulher. {' '}
              <Text style={[styles.link, { color: primaryColor }]} onPress={() => Linking.openURL('https://www.planalto.gov.br/ccivil_03/Leis/2003/L10.778.htm')}>
                Ver lei completa
              </Text>
            </Text>
          )}

          <TouchableOpacity
            style={styles.section}
            onPress={() => toggleSection('section9')}
          >
            <Text style={[styles.sectionTitle, { color: textColor }]}>
              Lei da Política Estadual de Enfrentamento à Violência contra a Mulher (Lei nº 17.110/2017 - SC)
            </Text>
            {expandedSections.section9 ? <ChevronUp size={20} color={primaryColor} /> : <ChevronDown size={20} color={primaryColor} />}
          </TouchableOpacity>
          {expandedSections.section9 && (
            <Text style={[styles.sectionContent, { color: lightTextColor }]}>
              O que institui essa lei? Institui a Política Estadual de Enfrentamento à Violência contra a Mulher em Santa Catarina. {' '}
              <Text style={[styles.link, { color: primaryColor }]} onPress={() => Linking.openURL('https://leis.alesc.sc.gov.br/html/2017/17110.html')}>
                Ver lei completa
              </Text>
            </Text>
          )}

          <TouchableOpacity
            style={styles.section}
            onPress={() => toggleSection('section10')}
          >
            <Text style={[styles.sectionTitle, { color: textColor }]}>
              Lei do Programa Catarina Mulher (Lei nº 16.945/2016 - SC)
            </Text>
            {expandedSections.section10 ? <ChevronUp size={20} color={primaryColor} /> : <ChevronDown size={20} color={primaryColor} />}
          </TouchableOpacity>
          {expandedSections.section10 && (
            <Text style={[styles.sectionContent, { color: lightTextColor }]}>
              O que cria essa lei? Cria o Programa Catarina Mulher, que oferece apoio e proteção às vítimas de violência doméstica. {' '}
              <Text style={[styles.link, { color: primaryColor }]} onPress={() => Linking.openURL('https://leis.alesc.sc.gov.br/ato-normativo/19509')}>
                Ver lei completa
              </Text>
            </Text>
          )}

          <TouchableOpacity
            style={styles.section}
            onPress={() => toggleSection('section11')}
          >
            <Text style={[styles.sectionTitle, { color: textColor }]}>
              Lei do Dia Estadual de Combate à Violência contra a Mulher (Lei nº 15.133/2010 - SC)
            </Text>
            {expandedSections.section11 ? <ChevronUp size={20} color={primaryColor} /> : <ChevronDown size={20} color={primaryColor} />}
          </TouchableOpacity>
          {expandedSections.section11 && (
            <Text style={[styles.sectionContent, { color: lightTextColor }]}>
              O que institui essa lei? Institui o Dia Estadual de Combate à Violência contra a Mulher em Santa Catarina. {' '}
              <Text style={[styles.link, { color: primaryColor }]} onPress={() => Linking.openURL('https://leis.alesc.sc.gov.br/html/2010/15133.html')}>
                Ver lei completa
              </Text>
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
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
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  link: {
    textDecorationLine: 'underline',
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

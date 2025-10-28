import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../App';
import * as ImagePicker from 'expo-image-picker';
import { getInfoAsync, readAsStringAsync } from 'expo-file-system/legacy';
import emailjs from '@emailjs/react-native';
import ModalComponent from 'react-native-modal';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera, Mic, Trash2, Upload, Video } from 'lucide-react-native';

type Props = BottomTabScreenProps<RootTabParamList, 'Denúncia'>;

const abuseTypes = [
  { id: 'psicologica', label: 'Psicológica' },
  { id: 'moral', label: 'Moral' },
  { id: 'patrimonial', label: 'Patrimonial' },
  { id: 'fisica', label: 'Física' },
  { id: 'sexual', label: 'Sexual' },
];

const firstColumn = abuseTypes.slice(0, 3);
const secondColumn = abuseTypes.slice(3);

const DenunciaScreen = (props: Props) => {
  const primaryColor = '#8B1B42';
  const backgroundColor = '#FFF9FB';
  const cardBackgroundColor = '#FFFFFF';
  const textColor = '#333333';
  const lightTextColor = '#555555';

  const [abuseType, setAbuseType] = useState('');
  const [complaintDetails, setComplaintDetails] = useState('');
  const [mediaUri, setMediaUri] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'audio' | 'video' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [recommendations, setRecommendations] = useState('');

  const radioButtons = abuseTypes.map((type) => ({
    id: type.id,
    label: type.label,
    value: type.id,
  }));

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de permissão para acessar a galeria.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setMediaUri(result.assets[0].uri);
      if (result.assets[0].type === 'image') setMediaType('image');
      else if (result.assets[0].type === 'video') setMediaType('video');
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de permissão para acessar a câmera.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setMediaUri(result.assets[0].uri);
      setMediaType('image');
    }
  };

  const recordVideo = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de permissão para acessar a câmera.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setMediaUri(result.assets[0].uri);
      setMediaType('video');
    }
  };

  // Note: Audio recording is more complex in RN, simplified for now
  const recordAudio = () => {
    Alert.alert('Funcionalidade', 'Gravação de áudio não implementada ainda.');
  };

  const clearMedia = () => {
    setMediaUri(null);
    setMediaType(null);
  };

  const handleSubmit = async () => {
    if (!abuseType || !complaintDetails) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Preencha todos os campos obrigatórios.',
      });
      return;
    }
    setIsSubmitting(true);

    try {
      const emailBody = `
Tipo de Violência: ${abuseTypes.find(type => type.id === abuseType)?.label}
Relato: ${complaintDetails}
      `.trim();

      // Generate protocol number
      const protocol = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

      let attachmentBase64 = null;
      if (mediaUri && Platform.OS !== 'web') {
        const fileInfo = await getInfoAsync(mediaUri);
        if (fileInfo.exists) {
          attachmentBase64 = await readAsStringAsync(mediaUri, {
            encoding: 'base64',
          });
        }
      }

      const templateParams = {
        to_email: 'cdaguiar23@gmail.com',
        subject: 'Denúncia - Procuradoria da Mulher',
        message: emailBody,
        attachment: attachmentBase64 ? `data:${mediaType === 'image' ? 'image/jpeg' : mediaType === 'video' ? 'video/mp4' : 'audio/mpeg'};base64,${attachmentBase64}` : null,
      };

      // Note: Replace with your actual EmailJS service ID, template ID, and public key
      await emailjs.send(
        'service_fupehjx',
        'template_xlepue8',
        templateParams,
        {
          publicKey: '2IWzzSj591-UZ11lD',
        }
      );

      // Save protocol to local storage
      const protocolData = {
        id: protocol,
        abuseType: abuseTypes.find(type => type.id === abuseType)?.label,
        complaintDetails,
        mediaType,
        date: new Date().toISOString(),
        status: 'Enviado',
      };

      const existingProtocols = await AsyncStorage.getItem('protocols');
      const protocols = existingProtocols ? JSON.parse(existingProtocols) : [];
      protocols.push(protocolData);
      await AsyncStorage.setItem('protocols', JSON.stringify(protocols));

      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: `Protocolo ${protocol} criado com sucesso`,
      });

      // Reset form
      setAbuseType('');
      setComplaintDetails('');
      clearMedia();
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Falha ao enviar denúncia. Tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setRecommendations('');
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: primaryColor }]}>
          Formulário de Denúncia
        </Text>
        <Text style={[styles.subtitle, { color: lightTextColor }]}>
          Preencha os campos abaixo. Todas as informações são confidenciais.
        </Text>

        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
          <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>
              Tipo de Violência (selecione uma)
            </Text>
            <View style={styles.radioColumns}>
              <View style={styles.radioColumn}>
                {firstColumn.map((type) => (
                  <TouchableOpacity
                    key={type.id}
                    style={styles.radioButton}
                    onPress={() => setAbuseType(type.id)}
                  >
                    <View style={styles.radioCircle}>
                      {abuseType === type.id && <View style={styles.radioSelected} />}
                    </View>
                    <Text style={styles.radioLabel}>{type.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.radioColumn}>
                {secondColumn.map((type) => (
                  <TouchableOpacity
                    key={type.id}
                    style={styles.radioButton}
                    onPress={() => setAbuseType(type.id)}
                  >
                    <View style={styles.radioCircle}>
                      {abuseType === type.id && <View style={styles.radioSelected} />}
                    </View>
                    <Text style={styles.radioLabel}>{type.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>
              Relato
            </Text>
            <TextInput
              style={styles.textArea}
              placeholder="Descreva a situação com o máximo de detalhes possível. Não inclua informações que possam te identificar."
              multiline
              numberOfLines={8}
              value={complaintDetails}
              onChangeText={setComplaintDetails}
            />
          </View>

          <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>
              Anexos (Opcional)
            </Text>
            <View style={styles.mediaContainer}>
              {!mediaUri ? (
                <View style={styles.mediaButtons}>
                  <TouchableOpacity style={styles.button} onPress={pickImage}>
                    <Upload size={20} />
                    <Text style={styles.buttonText}>Anexar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={takePhoto}>
                    <Camera size={20} />
                    <Text style={styles.buttonText}>Foto</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={recordVideo}>
                    <Video size={20} />
                    <Text style={styles.buttonText}>Vídeo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={recordAudio}>
                    <Mic size={20} />
                    <Text style={styles.buttonText}>Áudio</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.mediaPreview}>
                  {mediaType === 'image' && <Image source={{ uri: mediaUri }} style={styles.image} />}
                  {mediaType === 'video' && <Text style={[styles.mediaText, { color: lightTextColor }]}>Vídeo anexado</Text>}
                  {mediaType === 'audio' && <Text style={[styles.mediaText, { color: lightTextColor }]}>Áudio anexado</Text>}
                  <TouchableOpacity style={styles.clearButton} onPress={clearMedia}>
                    <Trash2 size={20} color="red" />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.submitButton, { backgroundColor: primaryColor }]}
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <>
                <Text style={styles.submitText}>Enviar Denúncia e Ver Recomendações</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        <ModalComponent isVisible={isModalVisible} onBackdropPress={closeModal}>
          <View style={[styles.modalContent, { backgroundColor: cardBackgroundColor }]}>
            <Text style={[styles.modalTitle, { color: primaryColor }]}>Recomendações</Text>
            <Text style={[styles.modalDescription, { color: lightTextColor }]}>
              Com base no seu relato, aqui estão algumas sugestões e recursos que podem te ajudar.
            </Text>
            <ScrollView style={styles.recommendations}>
              <Text style={[styles.recommendationsText, { color: textColor }]}>{recommendations}</Text>
            </ScrollView>
            <TouchableOpacity style={[styles.closeButton, { backgroundColor: primaryColor }]} onPress={closeModal}>
              <Text style={styles.closeText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </ModalComponent>

        <Toast />
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
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  mediaContainer: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  mediaButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
  },
  mediaPreview: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  mediaText: {
    fontSize: 16,
    marginTop: 10,
  },
  clearButton: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  submitButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  submitText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContent: {
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  recommendations: {
    maxHeight: 200,
  },
  recommendationsText: {
    fontSize: 16,
    lineHeight: 24,
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
  },
  radioGroup: {
    marginTop: 10,
    paddingLeft: 10,
  },
  radioColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  radioColumn: {
    flex: 1,
    paddingHorizontal: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8B1B42',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#8B1B42',
  },
  radioLabel: {
    fontSize: 16,
    color: '#333333',
  },
});

export default DenunciaScreen;

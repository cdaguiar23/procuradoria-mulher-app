import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Main: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const primaryColor = '#8B1B42';
  const backgroundColor = '#FFF9FB';
  const cardBackgroundColor = '#FFFFFF';
  const textColor = '#333333';
  const lightTextColor = '#555555';

  const handleLogin = async () => {
    if (!login.trim() || !senha.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        if (userData.email === login.trim() && userData.senha === senha) {
          navigation.replace('Main');
        } else {
          Alert.alert('Erro', 'Credenciais inválidas.');
        }
      } else {
        Alert.alert('Erro', 'Nenhum usuário cadastrado. Faça o cadastro primeiro.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao verificar as credenciais.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo_procuradoria.png')} style={styles.logo} />
        <Text style={[styles.title, { color: primaryColor }]}>
          Procuradoria Especial da Mulher de Canelinha
        </Text>
        <Text style={[styles.subtitle, { color: lightTextColor }]}>
          Um espaço seguro de apoio, informação e proteção para todas as mulheres de Canelinha. Faça login para acessar o aplicativo.
        </Text>
      </View>

      <View style={[styles.loginForm, { backgroundColor: cardBackgroundColor }]}>
        <TextInput
          style={[styles.input, { borderColor: primaryColor }]}
          placeholder="Login"
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, { borderColor: primaryColor }]}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          autoCapitalize="none"
        />
        <TouchableOpacity style={[styles.button, { backgroundColor: primaryColor }]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.registerButtonText, { color: primaryColor }]}>Não tem cadastro? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  loginForm: {
    width: '100%',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;

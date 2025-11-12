# Procuradoria Especial da Mulher de Canelinha - App

Este é um aplicativo móvel desenvolvido em React Native com Expo para a Procuradoria Especial da Mulher de Canelinha. O app oferece um espaço seguro para apoio, informação e proteção às mulheres da cidade, permitindo denúncias anônimas, acesso a direitos, rede de apoio e informações sobre boletim de ocorrência.

## 📱 Funcionalidades

- **Login e Cadastro**: Sistema de autenticação simples com armazenamento local
- **Denúncia Anônima**: Formulário para denúncias seguras com anexos opcionais (fotos, áudios, vídeos)
- **Rede de Apoio**: Conexão com serviços e organizações de apoio
- **Direitos da Mulher**: Informações sobre direitos e como exercê-los
- **Boletim de Ocorrência**: Orientações sobre como registrar ocorrências
- **Sobre**: Informações sobre a Procuradoria e equipe

## 🚀 Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma para desenvolvimento e build de apps React Native
- **TypeScript**: Superset do JavaScript com tipagem estática
- **React Navigation**: Navegação entre telas
- **AsyncStorage**: Armazenamento local de dados
- **Expo AV**: Para funcionalidades de áudio e vídeo
- **Expo File System**: Gerenciamento de arquivos
- **Expo Image Picker**: Seleção de imagens da galeria
- **Expo Mail Composer**: Envio de emails
- **Lucide React Native**: Ícones vetoriais

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI
- Android Studio (para emulador Android) ou Xcode (para iOS)

### Passos para Instalação

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd procuradoria-mulher-app
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   # ou
   expo start
   ```

4. **Execute no dispositivo/emulador:**
   - Para Android: `npm run android`
   - Para iOS: `npm run ios`
   - Para web: `npm run web`

## 📁 Estrutura do Projeto

```
procuradoria-mulher-app/
├── assets/                    # Imagens e recursos estáticos
│   ├── logo_procuradoria.png
│   ├── icon.png
│   └── ...
├── src/
│   ├── screens/               # Telas do aplicativo
│   │   ├── LoginScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── DenunciaScreen.tsx
│   │   ├── RedeScreen.tsx
│   │   ├── DireitosScreen.tsx
│   │   ├── BOScreen.tsx
│   │   ├── SobreScreen.tsx
│   │   └── RegisterScreen.tsx
│   └── types/                 # Definições de tipos TypeScript
├── App.tsx                    # Componente principal da navegação
├── index.ts                   # Ponto de entrada
├── package.json               # Dependências e scripts
├── app.json                   # Configurações do Expo
├── tsconfig.json              # Configurações do TypeScript
└── README.md                  # Este arquivo
```

## 🎨 Design e UX

O aplicativo segue um design consistente com:
- Paleta de cores: Rosa escuro (#8B1B42) como cor primária, fundo claro (#FFF9FB)
- Interface intuitiva e acessível
- Navegação por abas na tela principal
- Formulários simples e diretos

## 🔒 Privacidade e Segurança

- Denúncias completamente anônimas
- Dados armazenados localmente no dispositivo
- Sem coleta de dados pessoais sem consentimento
- Comunicação segura com serviços externos

## 📞 Contato de Emergência

Em caso de emergência, ligue para: **(48) 3264-0033**

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da Procuradoria Especial da Mulher de Canelinha.

## 🏗️ Build e Distribuição

Para build de produção:

```bash
# Build para EAS (Expo Application Services)
npx eas build --platform android
npx eas build --platform ios
```

Certifique-se de configurar o arquivo `eas.json` com as credenciais apropriadas.

## 📋 Requisitos Funcionais e Não Funcionais

Consulte o documento `REQUSITOS FUNCIONAIS E NÃO FUNCIONAIS.docx` para detalhes completos sobre os requisitos do sistema.

---

Desenvolvido com ❤️ para proteger e apoiar as mulheres de Canelinha.

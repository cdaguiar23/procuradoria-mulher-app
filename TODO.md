# TODO: Implement User Registration and Authentication for Procuradoria Mulher App

## Steps to Complete

- [x] Create RegisterScreen.tsx component in src/screens/ with fields for name, email, phone, password, and confirm password, saving to AsyncStorage and redirecting to LoginScreen.
- [x] Update LoginScreen.tsx to authenticate against stored user data in AsyncStorage, with a "Não tem cadastro? Cadastre-se" button linking to RegisterScreen.
- [x] Update App.tsx to include Register screen in stack navigation.
- [x] Test the registration and login flow: Register -> Login -> Main tabs.

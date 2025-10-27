# FinControl (Expo) — CP3 Mobile

**Aluno:** Miguel Parrado — **RM:** 554007

Protótipo didático em **React Native (Expo)** demonstrando **navegação híbrida** (Drawer + Tabs + Stack) e os componentes básicos exigidos no checkpoint.

---

## ✨ Funcionalidades

- **Navegação híbrida**
  - **Drawer**: “App”, “Sobre o App” e “Termos”
  - **Tabs**: “Lançar”, “Histórico” e “Config”
  - **Stack**: “Histórico” → “DetalheDespesa”
- **Formulário Lançar**
  - `TextInput` (descrição, valor)
  - `Picker` (categoria)
  - `TouchableOpacity` + `Button`
  - `Alert` de validação
  - `Image` (ícone no topo)
- **Histórico**
  - `FlatList` com navegação para detalhe
- **Telas adicionais**
  - `Config` (stub), `Sobre`, `Termos`

---

## 🧩 Componentes utilizados (checklist do checkpoint)

`View`, `ScrollView`, `Text`, `TextInput`, `Button`, `StyleSheet`,  
`TouchableOpacity`, `Alert`, `Picker`, **`Image`**, `FlatList`.

> Todos presentes nas telas do app (principalmente em **Lançar** e **Histórico**).

---

## 🗂️ Estrutura do projeto

```

FinControl/
App.tsx
index.ts
babel.config.js
package.json
tsconfig.json
assets/
icon.png
src/
navigation/
RootNavigator.tsx      # Drawer (envolve Tabs) + Stack (em Histórico)
screens/
LancamentoScreen.tsx   # Formulário: Image, Inputs, Picker, Alert e botões
HistoricoScreen.tsx    # FlatList -> Detalhe
DetalheDespesaScreen.tsx
ConfigScreen.tsx
SobreScreen.tsx
TermosScreen.tsx
styles/
theme.ts

````

---

## ⚙️ Requisitos

- Node.js 18+
- Android Studio com AVD (x86_64, Google APIs) **ou** dispositivo físico com Expo Go
- Expo CLI

---

## 🚀 Como rodar

1. Instale dependências:
   ```bash
   npm install
   npx expo install

2. Inicie o bundler (modo estável para emulador Android):

   ```bash
   npx expo start --localhost
   ```
3. Pressione **`a`** para abrir no Android (emulador).

> Dica: se mudar de rede ou o emulador não baixar o bundle, use:
>
> ```bash
> adb reverse --remove-all
> adb reverse tcp:8081 tcp:8081
> adb reverse tcp:19000 tcp:19000
> adb reverse tcp:19001 tcp:19001
> npx expo start --localhost -c
> ```

---

## 🛠️ Notas de implementação

* `import 'react-native-gesture-handler';` no **topo** do `App.tsx`
* `babel.config.js`:

  ```js
  module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: ['react-native-reanimated/plugin'], // precisa ser o último
    };
  };
  ```
* `index.ts` registra o App:

  ```ts
  import { registerRootComponent } from 'expo';
  import App from './App';
  registerRootComponent(App);
  ```

---

## 🧯 Solução de problemas (rápidas)

* **Ficou preso no splash do Expo Go**
  Feche o bundler (`Ctrl+C`), depois:

  ```bash
  adb reverse --remove-all
  adb reverse tcp:8081 tcp:8081
  adb reverse tcp:19000 tcp:19000
  adb reverse tcp:19001 tcp:19001
  npx expo start --localhost -c
  ```
* **Peer deps reclamadas pelo `expo-doctor`**

  ```bash
  npx expo install expo-font react-native-worklets
  ```
* **Mudou o `babel.config.js` e quebrou**
  Sempre reinicie com `npx expo start -c`.


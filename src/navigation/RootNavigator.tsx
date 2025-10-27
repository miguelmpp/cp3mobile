import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import LancamentoScreen from '../screens/LancamentoScreen';
import HistoricoScreen from '../screens/HistoricoScreen';
import DetalheDespesaScreen from '../screens/DetalheDespesaScreen';
import ConfigScreen from '../screens/ConfigScreen';
import SobreScreen from '../screens/SobreScreen';
import TermosScreen from '../screens/TermosScreen';

type HistoricoStackParamList = {
  Historico: undefined;
  DetalheDespesa: { id: string };
};

const Stack = createNativeStackNavigator<HistoricoStackParamList>();
function HistoricoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Historico" component={HistoricoScreen} options={{ title: 'Histórico' }} />
      <Stack.Screen name="DetalheDespesa" component={DetalheDespesaScreen} options={{ title: 'Detalhe' }} />
    </Stack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let icon = 'ellipsis-horizontal';
          if (route.name === 'Lançar') icon = focused ? 'add-circle' : 'add-circle-outline';
          if (route.name === 'Histórico') icon = focused ? 'list' : 'list-outline';
          if (route.name === 'Config') icon = focused ? 'settings' : 'settings-outline';
          return <Ionicons name={icon as any} size={size} />;
        },
        headerTitleAlign: 'center',
      })}
    >
      <Tabs.Screen name="Lançar" component={LancamentoScreen} />
      <Tabs.Screen name="Histórico" component={HistoricoStack} options={{ headerShown: false }} />
      <Tabs.Screen name="Config" component={ConfigScreen} />
    </Tabs.Navigator>
  );
}

const Drawer = createDrawerNavigator();
export default function RootNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="App" component={TabsNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Sobre o App" component={SobreScreen} />
      <Drawer.Screen name="Termos" component={TermosScreen} />
    </Drawer.Navigator>
  );
}

import React from 'react';
import { View, Text } from 'react-native';
export default function SobreScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: '700', fontSize: 18, marginBottom: 6 }}>Sobre o App</Text>
      <Text>FinControl — exemplo para checkpoint com navegação híbrida (Drawer + Tabs + Stack).</Text>
    </View>
  );
}

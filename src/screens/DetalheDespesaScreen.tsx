import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Root = { DetalheDespesa: { id: string } };
type Props = NativeStackScreenProps<Root, 'DetalheDespesa'>;

export default function DetalheDespesaScreen({ route }: Props) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: '700', fontSize: 18, marginBottom: 6 }}>Detalhe da Despesa</Text>
      <Text>ID: {route.params.id}</Text>
      <Text>Descrição: Exemplo</Text>
      <Text>Valor: R$ 00,00</Text>
      <Text>Categoria: -</Text>
    </View>
  );
}

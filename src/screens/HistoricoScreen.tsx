import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Root = { Historico: undefined; DetalheDespesa: { id: string } };
type Props = NativeStackScreenProps<Root, 'Historico'>;

export default function HistoricoScreen({ navigation }: Props) {
  const data = [
    { id: '1', desc: 'Almoço R$ 35,00' },
    { id: '2', desc: 'Uber R$ 18,50' },
  ];

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: '700', fontSize: 18, marginBottom: 8 }}>Histórico</Text>
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetalheDespesa', { id: item.id })}>
            <Text style={{ paddingVertical: 10 }}>{item.desc}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

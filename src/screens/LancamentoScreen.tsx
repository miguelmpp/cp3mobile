import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { theme } from '../styles/theme';

export default function LancamentoScreen() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState<string>('Alimentação');

  function salvar() {
    const v = Number(valor.replace(',', '.'));
    if (!descricao.trim()) return Alert.alert('Atenção', 'Descrição é obrigatória.');
    if (isNaN(v) || v <= 0) return Alert.alert('Atenção', 'Informe um valor numérico maior que zero.');
    Alert.alert('Sucesso', `Lançado: ${descricao} - R$ ${v.toFixed(2)} (${categoria})`);
    setDescricao(''); setValor('');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/icon.png')}
        style={{ width: 72, height: 72, alignSelf: 'center', marginBottom: 8 }}
      />
      <Text style={styles.titulo}>Novo Lançamento</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Ex.: Almoço"
          style={styles.input}
          returnKeyType="next"
        />

        <Text style={styles.label}>Valor (R$)</Text>
        <TextInput
          value={valor}
          onChangeText={setValor}
          placeholder="0,00"
          keyboardType="numeric"
          inputMode="decimal"
          style={styles.input}
        />

        <Text style={styles.label}>Categoria</Text>
        <View style={styles.pickerBox}>
          <Picker selectedValue={categoria} onValueChange={setCategoria}>
            <Picker.Item label="Alimentação" value="Alimentação" />
            <Picker.Item label="Transporte" value="Transporte" />
            <Picker.Item label="Saúde" value="Saúde" />
            <Picker.Item label="Lazer" value="Lazer" />
          </Picker>
        </View>

        <TouchableOpacity onPress={salvar} style={styles.btn}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>

        <View style={{ marginTop: theme.spacing(1) }}>
          <Button title="Salvar (Button nativo)" onPress={salvar} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: theme.spacing(2) },
  titulo: { fontSize: 20, fontWeight: '700', marginBottom: theme.spacing(1) },
  card: { backgroundColor: theme.colors.bg, borderRadius: theme.radius.md, padding: theme.spacing(2), gap: 10, elevation: 2 },
  label: { fontSize: 14, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: theme.colors.border, borderRadius: theme.radius.sm, padding: 10 },
  pickerBox: { borderWidth: 1, borderColor: theme.colors.border, borderRadius: theme.radius.sm, overflow: 'hidden' },
  btn: { backgroundColor: theme.colors.primary, padding: 12, borderRadius: theme.radius.sm, alignItems: 'center', marginTop: 6 },
  btnText: { color: '#fff', fontWeight: '700' },
});

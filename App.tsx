import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Home from './src/screens/Home';
import Form from './src/components/Form/Form';

export default function App() {
  const [showForm,  setShowForm] = useState(false);

  const activateBatSignal = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData: any) => {
    console.log('Dados do Formulario:', formData);
    alert('Sinal da Liga da Justiça ativadp! A ajuda esta a caminho.');
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <View style={styles.container}>
      {!showForm ? (
        <Home onActivate={activateBatSignal} />
      ) : (
        <Form onSubmit={handleFormSubmit} onCancel={handleCancel} />
      )}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

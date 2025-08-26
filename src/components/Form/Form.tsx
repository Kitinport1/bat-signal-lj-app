import React, { useState } from "react";
import{
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { styles } from "./FormStyles";
import { FormData} from "../../services/FormData";

interface FormProps{
  onSubmit:(data: FormData) => void;
  onCancel:() => void;
}

const Form = ({onSubmit, onCancel}: FormProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [observation, setObservation] = useState('');
  const [emergencyType, setEmergencyType]= useState('');

  const handleSubmit =() => {
    if(!name || !phone || !location || !emergencyType){
      Alert.alert('Atenção', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const FormData = {
      name,
      phone,
      location,
      emergencyType,
      observation,
      timestamp: new Date().toISOString()
    };

    onSubmit(FormData);
  };

  return(
     <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
        <Text style={styles.title}>SINAL DE EMERGENCIA ATIVADO</Text>
        <Text style={styles.subtitle}>Preencha os dados para acionar a Liga da Justiça</Text>

        <View style={styles.form}>
          <Text style={styles.label}> Nome do mini heroi:</Text>
          <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome de heroi completo!"
          placeholderTextColor={'#888'}
          />

          <Text style={styles.label}> Telefone do mini heroi: </Text>
          <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="(00) 00000-000)"
          placeholderTextColor={'#888'}
          keyboardType="phone-pad"
          />

          <Text style={styles.label}> Localização do heroi</Text>
          <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Digite a sua locakização"
          placeholderTextColor={'#888'}
          />

          <Text style={styles.label}> Tipo de emergência:</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={[styles.radioOption, emergencyType === 'Invasão' && styles.radioSelected]}
              onPress={() => setEmergencyType('Invasão')}
              >
                <Text style={styles.radioText}>Invasão alienígena</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.radioOption, emergencyType === 'Supervilao' && styles.radioSelected]}
              onPress={() => setEmergencyType('Supervilao')}
              >
                <Text style={styles.radioText}>Ataque de supervilão</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.radioOption, emergencyType === 'Desastre' && styles.radioSelected]}
              onPress={() => setEmergencyType('Desastre')}
              >
                <Text style={styles.radioText}>Desastre natural</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.radioOption, emergencyType === 'Outro' && styles.radioSelected]}
              onPress={() => setEmergencyType('Outro')}
              >
                <Text style={styles.radioText}>Outra emergência</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Observações</Text>
          <TextInput 
            style={[styles.input, styles.textArea]}
            value={observation}
            onChangeText={setObservation}
            placeholder="Conte seu realto de heroi"
            placeholderTextColor={'#888'}
            multiline
            numberOfLines={4}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity 
            style={[styles.button, styles.cancelButton]}
            onPress={onCancel}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={[styles.button, styles.submitButton]}
            onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Enviar Alerta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Form
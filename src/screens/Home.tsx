import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { styles } from './HomeStyles';
import { LeagueLogo } from '../components/LogoLeague';

interface HomeProps {
  onActivate: () => void;
}

const Home: React.FC<HomeProps> = ({ onActivate }) =>{
  return (
    <View>
      <LeagueLogo/>
      <Text style={styles.title}>SINAL DA LIGA DA JUSTIÇA</Text>
      <Text style={styles.subtitle}>by Lua</Text>

      <TouchableOpacity style={styles.button} onPress={onActivate}>
        <Text style={styles.buttonText}>ATIVAR SINAL DE EMERGÊNCIA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home
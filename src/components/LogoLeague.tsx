import React from 'react';
import { Image } from 'react-native';
import { styles } from './LogoLeague/LeagueLogoStyles';
import  leagueLogo from '../../assets/leagueLogo.png'

export function LeagueLogo() {
  return (
    <>
      <Image 
        source={leagueLogo} 
        style={styles.logo}
        accessibilityLabel="Logo da Liga da Justiça"
      />
    </>
  );
}
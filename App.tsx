import React from 'react';
 
import { ThemeProvider } from 'styled-components';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

import theme  from './src/global/theme';
import { Dashboard } from './src/screens/Dashboard';

import { Details } from './src/screens/Details';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });
  
  if(!fontsLoaded)
    <AppLoading/>

  return (
    <ThemeProvider theme={theme}>
      <Details/>
    </ThemeProvider>
  );
}
import React from 'react';
 
import { ThemeProvider } from 'styled-components';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

import theme  from './src/global/theme';

const [fontsLoaded] = useFonts({
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
});

if(!fontsLoaded)
  <AppLoading/>

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </ThemeProvider>
  );
}
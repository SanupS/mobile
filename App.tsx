// App.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import  Home  from './src/containers/views/Screens/welcomePage';
import WelcomePage from './src/containers/views/Screens/welcomePage';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;

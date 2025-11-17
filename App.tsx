/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StatusBar, useColorScheme, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './src/i18n/config'; // Initialize i18n
import SplashScreen from './src/screens/Splash';
import OnboardingScreen from './src/screens/Onboarding';
import HomeScreen from './src/screens/Home';

type AppState = 'splash' | 'onboarding' | 'main';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [appState, setAppState] = useState<AppState>('splash');

  const handleSplashComplete = () => {
    setAppState('onboarding');
  };

  const handleOnboardingComplete = () => {
    setAppState('main');
  };

  const handleOnboardingSkip = () => {
    setAppState('main');
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {appState === 'splash' && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      {appState === 'onboarding' && (
        <OnboardingScreen
          onComplete={handleOnboardingComplete}
          onSkip={handleOnboardingSkip}
        />
      )}
      {appState === 'main' && <HomeScreen />}
    </SafeAreaProvider>
  );
}

export default App;

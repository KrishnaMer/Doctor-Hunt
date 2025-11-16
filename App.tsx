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
import SplashScreen from './src/components/SplashScreen';
import OnboardingScreen from './src/components/OnboardingScreen';

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
      {appState === 'main' && (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Main App Screen (Coming Soon)</Text>
        </View>
      )}
    </SafeAreaProvider>
  );
}

export default App;

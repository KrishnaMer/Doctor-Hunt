import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Main content */}
      <View style={styles.content}>
        {/* Medical Cross Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/splash_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* App Name */}
        <Text style={styles.appName}>Doctor Hunt</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 24,
  },
  logo: {
    width: 70,
    height: 70,
  },
  appName: {
    fontSize: 25,
    fontWeight: '700',
    color: '#222222',
    fontFamily: 'system',
    letterSpacing: 0.5,
  },
});

export default SplashScreen;

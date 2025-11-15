import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n/languages';

const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang =
    SUPPORTED_LANGUAGES[i18n.language as keyof typeof SUPPORTED_LANGUAGES] ||
    SUPPORTED_LANGUAGES.en;
  const isRTL = currentLang.isRTL;

  // Uncomment the line below to test Hindi language
  // useEffect(() => { i18n.changeLanguage('hi'); }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Main content */}
      <View style={[styles.content, isRTL && styles.contentRTL]}>
        {/* Medical Cross Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/splash_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* App Name */}
        <Text style={[styles.appName, isRTL && styles.appNameRTL]}>
          {t('splash.appName')}
        </Text>
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
  contentRTL: {
    direction: 'rtl',
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
    fontFamily: 'Rubik-Bold',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  appNameRTL: {
    textAlign: 'right',
  },
});

export default SplashScreen;

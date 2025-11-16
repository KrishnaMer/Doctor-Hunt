import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../../i18n/languages';

const { width, height } = Dimensions.get('window');
const scale = width / 375; // Base design width (iPhone X)

// Responsive size helper
const responsiveSize = (size: number) => size * Math.min(scale, 1.2);
const responsiveFontSize = (size: number) => size * Math.min(scale, 1.2);

interface OnboardingScreen1Props {
  onGetStarted: () => void;
  onSkip: () => void;
}

const OnboardingScreen1: React.FC<OnboardingScreen1Props> = ({
  onGetStarted,
  onSkip,
}) => {
  const { t, i18n } = useTranslation();
  const currentLang =
    SUPPORTED_LANGUAGES[i18n.language as keyof typeof SUPPORTED_LANGUAGES] ||
    SUPPORTED_LANGUAGES.en;
  const isRTL = currentLang.isRTL;

  // Onboarding image
  const onboardingImage = require('../../../../assets/images/onboarging_first.png');

  return (
    <ImageBackground
      source={require('../../../../assets/images/bg.png')}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Screen Content */}
      <View style={styles.screen}>
        {/* Circular Image Container */}
        <View style={styles.imageContainer}>
          {/* Teal Quarter Circle Overlay */}
          <LinearGradient
            colors={['#0EBE7E', '#07D9AD']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.quarterCircle}
          />
          {/* Circular Image Mask */}
          <View style={styles.circleMask}>
            <Image
              source={onboardingImage}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Title */}
        <Text style={[styles.title, isRTL && styles.titleRTL]}>
          {t('onboarding.screen1.title')}
        </Text>

        <View style={styles.descriptionContainer}>
          <Text style={[styles.description, isRTL && styles.descriptionRTL]}>
            {t('onboarding.screen1.description')}
          </Text>
        </View>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={onGetStarted}
        activeOpacity={0.8}
      >
        <Text style={styles.getStartedText}>{t('onboarding.getStarted')}</Text>
      </TouchableOpacity>

      {/* Skip Link */}
      <TouchableOpacity
        style={styles.skipLink}
        onPress={onSkip}
        activeOpacity={0.7}
      >
        <Text style={styles.skipLinkText}>{t('onboarding.skip')}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: height * 0.1,
    paddingHorizontal: width * 0.05,
    zIndex: 1,
  },
  imageContainer: {
    width: width * 0.9,
    aspectRatio: 1,
    marginBottom: height * 0.04,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: width * 0.9,
  },
  quarterCircle: {
    position: 'absolute',
    top: -(width * 0.5) / 2,
    left: -(width * 0.5) / 2,
    width: width * 0.8,
    height: width * 0.8,
    aspectRatio: 1,
    borderRadius: (width * 0.9) / 2,
    zIndex: 1,
  },
  circleMask: {
    width: width * 0.9,
    height: width * 0.9,
    aspectRatio: 1,
    borderRadius: (width * 0.9) / 2,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    zIndex: 2,
    elevation: 5,
    shadowColor: '#000',
    marginTop: width * 0.02,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: responsiveFontSize(28),
    fontWeight: '500',
    color: '#222222',
    fontFamily: 'Rubik-Medium',
    textAlign: 'center',
    marginBottom: height * 0.01,
    letterSpacing: -0.3,
    flexShrink: 1,
  },
  titleRTL: {
    textAlign: 'right',
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.04,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
  },
  description: {
    fontSize: responsiveFontSize(14),
    color: '#677294E5',
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
    lineHeight: responsiveFontSize(24),
    maxWidth: width,
    flexShrink: 1,
  },
  descriptionRTL: {
    textAlign: 'right',
  },
  getStartedButton: {
    backgroundColor: '#0EBE7F',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.07,
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: height * 0.012,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: width * 0.845,
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(18),
    fontWeight: '500',
    fontFamily: 'Rubik-Medium',
    letterSpacing: 0.5,
  },
  skipLink: {
    alignItems: 'center',
    marginBottom: height * 0.07,
    padding: height * 0.01,
  },
  skipLinkText: {
    fontSize: responsiveFontSize(15),
    color: '#677294',
    fontFamily: 'Rubik-Regular',
  },
});

export default OnboardingScreen1;

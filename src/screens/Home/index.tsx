import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LiveDoctorsSection, {
  LiveDoctorItem,
} from '../../components/home/LiveDoctorsSection';
import CategoryRowSection, {
  CategoryItem,
} from '../../components/home/CategoryRowSection';
import PopularDoctorsSection, {
  PopularDoctorItem,
} from '../../components/home/PopularDoctorsSection';
import FeatureDoctorsSection, {
  FeatureDoctorItem,
} from '../../components/home/FeatureDoctorsSection';

const { width, height } = Dimensions.get('window');
const scale = width / 375; // base width

const responsiveSize = (size: number) => size * Math.min(scale, 1.2);
const responsiveFontSize = (size: number) => size * Math.min(scale, 1.2);

const HomeScreen: React.FC = () => {
  const liveDoctors: LiveDoctorItem[] = [
    {
      id: 1,
      image: require('../../../assets/images/live_doctor.png'),
      isLive: true,
    },
    {
      id: 2,
      image: require('../../../assets/images/live_doctor.png'),
      isLive: true,
    },
    {
      id: 3,
      image: require('../../../assets/images/live_doctor.png'),
      isLive: true,
    },
  ];

  const categories: CategoryItem[] = [
    {
      id: 'tooth',
      colors: ['#4F46E5', '#6366F1'],
      icon: <Ionicons name="eye" size={30} color="#FFFFFF" />,
    },
    {
      id: 'heart',
      colors: ['#0EBE7E', '#34D399'],
      icon: <Ionicons name="eye" size={30} color="#FFFFFF" />,
    },
    {
      id: 'eye',
      colors: ['#F97316', '#FDBA74'],
      icon: <Ionicons name="eye" size={30} color="#FFFFFF" />,
    },
    {
      id: 'brain',
      colors: ['#EF4444', '#F97373'],
      icon: <Ionicons name="eye" size={30} color="#FFFFFF" />,
    },
  ];

  const popularDoctors: PopularDoctorItem[] = [
    {
      id: 1,
      name: 'Dr. Fillerup Grab',
      speciality: 'Medicine Specialist',
      rating: '4.9',
      image: require('../../../assets/images/popular_doctor.png'),
    },
    {
      id: 2,
      name: 'Dr. Blessing',
      speciality: 'Dentist Specialist',
      rating: '4.7',
      image: require('../../../assets/images/popular_doctor.png'),
    },
  ];

  const featureDoctors: FeatureDoctorItem[] = [
    {
      id: 1,
      name: 'Dr. Crick',
      price: '25.00 / hours',
      rating: 3.7,
      image: require('../../../assets/images/popular_doctor.png'),
      isFavorite: false,
    },
    {
      id: 2,
      name: 'Dr. Strain',
      price: '22.00 / hours',
      rating: 3.0,
      image: require('../../../assets/images/onboarging_third.png'),
      isFavorite: true,
    },
    {
      id: 3,
      name: 'Dr. Lachinet',
      price: '29.00 / hours',
      rating: 2.9,
      image: require('../../../assets/images/onboarging_second.png'),
      isFavorite: true,
    },
  ];

  const bottomTabs = [
    { id: 'home', icon: 'home', active: true },
    { id: 'favorite', icon: 'heart', active: false },
    { id: 'articles', icon: 'book', active: false },
    { id: 'chat', icon: 'chatbubble-ellipses', active: false },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Green header with search */}
      <LinearGradient
        colors={['#0EBE7E', '#07D9AD']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greetingText}>Hi Handwerker!</Text>
            <Text style={styles.headerTitle}>
              <Text style={styles.headerTitleBold}>Find Your Doctor</Text>
            </Text>
          </View>
          <View style={styles.headerAvatarContainer}>
            <Image
              source={require('../../../assets/images/splash_logo.png')}
              style={styles.headerAvatar}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Search bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Ionicons
              name="search"
              size={18}
              color="#A0A4A8"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search....."
              placeholderTextColor="#A0A4A8"
              style={styles.searchInput}
            />
            <View style={styles.searchClearButton}>
              <View style={styles.clearLine} />
              <View style={[styles.clearLine, styles.clearLineRotated]} />
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* Background + content start after search bar */}
      <ImageBackground
        source={require('../../../assets/images/bg.png')}
        style={styles.bg}
        resizeMode="cover"
      >
        {/* Main scrollable content */}
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Live Doctors */}
          <LiveDoctorsSection doctors={liveDoctors} />

          {/* Category cards */}
          <CategoryRowSection categories={categories} />

          {/* Popular Doctor */}
          <PopularDoctorsSection doctors={popularDoctors} />

          {/* Feature Doctor */}
          <FeatureDoctorsSection doctors={featureDoctors} />
        </ScrollView>

        {/* Bottom tab bar */}
        <View style={styles.bottomBarWrapper}>
          <View style={styles.bottomBar}>
            {bottomTabs.map(tab => (
              <TouchableOpacity key={tab.id} style={styles.tabItem}>
                <View
                  style={[
                    styles.tabIconWrapper,
                    tab.active && styles.tabIconWrapperActive,
                  ]}
                >
                  <Ionicons
                    name={tab.icon}
                    size={tab.active ? 25 : 25}
                    color={tab.active ? '#FFFFFF' : '#7C8194'}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    marginTop: -height * 0.02,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  headerGradient: {
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.06,
    paddingBottom: height * 0.04,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingText: {
    color: '#FAFAFA',
    fontSize: responsiveFontSize(20),
    fontFamily: 'Rubik-Regular',
    marginBottom: 6,
    marginTop: 18,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontFamily: 'Rubik-Bold',
    fontSize: responsiveFontSize(25),
  },
  headerTitleBold: {
    fontWeight: '700',
  },
  headerAvatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  searchContainer: {
    zIndex: 2,
    marginTop: height * 0.03,
    marginBottom: -height * 0.07,
  },
  searchBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    fontSize: responsiveFontSize(14),
    color: '#222222',
    flex: 1,
  },
  searchClearButton: {
    width: 20,
    height: 20,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearLine: {
    position: 'absolute',
    width: 14,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#A0A4A8',
    transform: [{ rotate: '45deg' }],
  },
  clearLineRotated: {
    transform: [{ rotate: '-45deg' }],
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.07,
    paddingBottom: height * 0.12,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: responsiveFontSize(18),
    fontWeight: '700',
    fontFamily: 'rubik-medium',
    color: '#333333',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: responsiveFontSize(12),
    fontWeight: '300',
    fontFamily: 'rubik-regular',
    color: '#677294',
    marginRight: 4,
  },
  horizontalList: {
    paddingBottom: 12,
  },
  liveCard: {
    width: width * 0.32,
    height: width * 0.45,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 12,
    backgroundColor: '#FFFFFF',
  },
  liveCardImage: {
    width: '100%',
    height: '100%',
  },
  livePlayCircle: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    marginLeft: -18,
    marginTop: -18,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  livePlayIcon: {
    width: 16,
    height: 16,
  },
  liveBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  liveBadgeText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(10),
    fontWeight: '700',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 20,
  },
  categoryCard: {
    width: (width * 0.88 - 24) / 4,
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
  },
  popularCard: {
    width: width * 0.52,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    marginRight: 12,
    overflow: 'hidden',
  },
  popularImage: {
    width: '100%',
    height: width * 0.4,
  },
  popularInfo: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  popularName: {
    fontSize: responsiveFontSize(14),
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  popularSpeciality: {
    fontSize: responsiveFontSize(11),
    color: '#6B7280',
    marginBottom: 6,
  },
  popularRating: {
    fontSize: responsiveFontSize(11),
    color: '#F59E0B',
  },
  bottomBarWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 32,
    backgroundColor: '#FFFFFF',
    elevation: 8,
    shadowColor: '#00000012',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIconWrapperActive: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0EBE7E',
  },
});

export default HomeScreen;

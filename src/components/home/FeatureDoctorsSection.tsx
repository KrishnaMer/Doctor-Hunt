import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const scale = width / 375;

const responsiveFontSize = (size: number) => size * Math.min(scale, 1.2);

export interface FeatureDoctorItem {
  id: string | number;
  name: string;
  price: string;
  rating: number;
  image: ImageSourcePropType;
  cardAccent?: string;
  isFavorite?: boolean;
}

interface FeatureDoctorsSectionProps {
  title?: string;
  doctors: FeatureDoctorItem[];
}

const FeatureDoctorsSection: React.FC<FeatureDoctorsSectionProps> = ({
  title = 'Feature Doctor',
  doctors,
}) => {
  return (
    <>
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
          <Ionicons name="chevron-forward" size={14} color="#677294" />
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {doctors.map(doctor => (
            <View key={doctor.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons
                  name={doctor.isFavorite ? 'heart' : 'heart-outline'}
                  size={10}
                  color={doctor.isFavorite ? '#FF4D58' : '#D2D5F9'}
                />
                <View style={styles.ratingBadge}>
                  <Ionicons name="star" size={9} color="#F6D060" />
                  <Text style={styles.ratingText}>
                    {doctor.rating.toFixed(1)}
                  </Text>
                </View>
              </View>
              <Image source={doctor.image} style={styles.avatar} />
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <View style={styles.priceRow}>
                <Text style={styles.priceCurrency}>$</Text>
                <Text style={styles.priceText}>{doctor.price}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: responsiveFontSize(18),
    fontFamily: 'rubik-medium',
    fontWeight: '700',
    color: '#333333',
  },
  scrollContainer: {
    marginHorizontal: -width * 0.06,
  },
  horizontalList: {
    paddingBottom: 12,
    paddingLeft: width * 0.06,
    paddingRight: width * 0.06,
  },
  card: {
    width: width * 0.28,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginRight: 12,
    shadowColor: '#0000000F',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  ratingText: {
    fontSize: responsiveFontSize(9),
    color: '#000',
    marginLeft: 4,
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    alignSelf: 'center',
    marginBottom: 12,
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
  },
  doctorName: {
    fontSize: responsiveFontSize(14),
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  priceCurrency: {
    fontSize: responsiveFontSize(9),
    color: '#0EBE7E',
    fontWeight: '500',
  },
  priceText: {
    fontSize: responsiveFontSize(9),
    color: '#677294',
    textAlign: 'center',
  },
});

export default FeatureDoctorsSection;

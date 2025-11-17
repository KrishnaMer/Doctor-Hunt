import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const scale = width / 375; // base width

const responsiveFontSize = (size: number) => size * Math.min(scale, 1.2);

export interface PopularDoctorItem {
  id: string | number;
  name: string;
  speciality: string;
  rating: number | string;
  image: ImageSourcePropType;
}

interface PopularDoctorsSectionProps {
  title?: string;
  doctors: PopularDoctorItem[];
}

const PopularDoctorsSection: React.FC<PopularDoctorsSectionProps> = ({
  title = 'Popular Doctor',
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
          {doctors.map(item => (
            <View key={item.id} style={styles.popularCard}>
              <Image source={item.image} style={styles.popularImage} />
              <View style={styles.popularInfo}>
                <Text style={styles.popularName}>{item.name}</Text>
                <Text style={styles.popularSpeciality}>{item.speciality}</Text>
                <View style={styles.ratingRow}>
                  {[1, 2, 3, 4, 5].map(star => (
                    <Ionicons
                      key={star}
                      name={'star'}
                      size={12}
                      color={
                        Number(item.rating) >= star ? '#F6D060' : '#D1D5DB'
                      }
                      style={styles.starIcon}
                    />
                  ))}
                </View>
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
    marginBottom: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: responsiveFontSize(18),
    fontFamily: 'rubik-medium',
    fontWeight: '700',
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
  },
  scrollContainer: {
    marginHorizontal: -width * 0.06,
  },
  horizontalList: {
    paddingBottom: 12,
    columnGap: 15,
    paddingLeft: width * 0.06,
    paddingRight: width * 0.06,
  },
  popularCard: {
    width: width * 0.52,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#00000014',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 40,
  },
  popularImage: {
    width: '100%',
    height: width * 0.56,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  popularInfo: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: 'center',
  },
  popularName: {
    fontSize: responsiveFontSize(18),
    fontWeight: '500',
    color: '#333333',
    marginBottom: 2,
    textAlign: 'center',
  },
  popularSpeciality: {
    fontSize: responsiveFontSize(12),
    color: '#677294CC',
    marginBottom: 6,
    textAlign: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starIcon: {
    marginHorizontal: 1,
  },
});

export default PopularDoctorsSection;

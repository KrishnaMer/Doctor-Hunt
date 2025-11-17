import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 375; // base width

const responsiveFontSize = (size: number) => size * Math.min(scale, 1.2);

export interface LiveDoctorItem {
  id: string | number;
  image: ImageSourcePropType;
  isLive?: boolean;
}

interface LiveDoctorsSectionProps {
  title?: string;
  doctors: LiveDoctorItem[];
}

const LiveDoctorsSection: React.FC<LiveDoctorsSectionProps> = ({
  title = 'Live Doctors',
  doctors,
}) => {
  return (
    <>
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {doctors.map(item => (
            <View key={item.id} style={styles.liveCard}>
              <Image
                source={item.image}
                style={styles.liveCardImage}
                resizeMode="cover"
              />
              <View style={styles.livePlayCircle}>
                <Image
                  source={require('../../../assets/images/video_icon.png')}
                  style={styles.livePlayIcon}
                  resizeMode="contain"
                />
              </View>
              {item.isLive !== false && (
                <View style={styles.liveBadge}>
                  <View style={styles.liveDot} />
                  <Text style={styles.liveBadgeText}>LIVE</Text>
                </View>
              )}
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
    fontWeight: '500',
    color: '#111827',
  },
  scrollContainer: {
    marginHorizontal: -width * 0.06,
  },
  horizontalList: {
    paddingLeft: width * 0.06,
    paddingRight: width * 0.06,
  },
  liveCard: {
    width: width * 0.34,
    height: width * 0.48,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 16,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  livePlayIcon: {
    width: 36,
    height: 36,
  },
  liveBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FA002F',
    borderRadius: 3,
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    marginRight: 4,
  },
  liveBadgeText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(10),
    fontWeight: '700',
  },
});

export default LiveDoctorsSection;

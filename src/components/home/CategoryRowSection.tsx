import React, { ReactNode } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export interface CategoryItem {
  id: string | number;
  colors: [string, string];
  icon: ReactNode;
}

interface CategoryRowSectionProps {
  categories: CategoryItem[];
}

const CategoryRowSection: React.FC<CategoryRowSectionProps> = ({
  categories,
}) => {
  return (
    <View style={styles.categoryRow}>
      {categories.map(category => (
        <LinearGradient
          key={category.id}
          colors={category.colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.categoryCard}
        >
          <View style={styles.categoryIcon}>{category.icon}</View>
        </LinearGradient>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 30,
    marginBottom: 20,
  },
  categoryCard: {
    // width: (width * 0.88 - 24) / 4,
    width: 80,
    height: 90,
    aspectRatio: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryRowSection;

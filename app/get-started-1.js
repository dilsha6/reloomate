import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

export default function GetStarted1() {
  return (
      <View style={styles.content}>
        <Image
          source={require('../assets/images/illustration.png')} 
          style={styles.image}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.skipButton} onPress={() => router.replace('/sign-in')}
>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.title}>"Explore Verified Listings"</Text>
        <Text style={styles.subtitle}>
          Easily discover safe and verified student accommodations tailored to your preferences.
        </Text>
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 150,
  },
  image: {
    width: 300,
    height: 250,
    marginTop: 20,
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#F5F6FA',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  skipText: {
    color: '#3A3A3A',
    fontWeight: '500',
    fontSize: 16,
  },
  title: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: '700',
    color: '#2B3A67',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 12,
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#2B3A67',
    width: 18,
  },
});
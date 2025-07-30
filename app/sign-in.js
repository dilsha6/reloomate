import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.introText}>
        Let’s Get You Started With <Text style={styles.brand}>RelooMate.</Text>
      </Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/google.png')} 
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Sign In Using Google Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/facebook.png')} 
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Sign In Using Facebook Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/apple.png')} 
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Sign In Using Apple Account</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.passwordButton}>
        <Text style={styles.passwordButtonText}>Sign In Using Password</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        New To <Text style={styles.brand}>RelooMate?</Text>
        <Text style={styles.registerNow} onPress={() => { /* navigation to register */ }}> Register Now</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#988b8bff',
    alignItems: 'center',
    paddingTop: 80,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 30,
  },
  introText: {
    fontSize: 16,
    color: '#222',
    marginBottom: 30,
    textAlign: 'center',
  },
  brand: {
    color: '#2B3A67',
    fontWeight: '700',
  },
  socialButtons: {
    width: '90%',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 14,
    backgroundColor: '#fff',
  },
  socialIcon: {
    width: 28,
    height: 28,
    marginRight: 16,
  },
  socialText: {
    fontSize: 15,
    color: '#222',
  },
  passwordButton: {
    width: '90%',
    backgroundColor: '#2B3A67',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  passwordButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  footerText: {
    fontSize: 15,
    color: '#222',
    textAlign: 'center',
  },
  registerNow: {
    color: '#2B3A67',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
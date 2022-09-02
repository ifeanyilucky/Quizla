import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Title from '../components/Title';

function HomeScreen({ navigation }) {
  const categories = ['All', 'Popular', 'Top Rated', 'Featured'];
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={require('../assets/quiz-banner.png')}
          resizeMode='contain'
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.startBtn}
      >
        <Text style={styles.startNow}>Start now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  banner: {
    width: 300,
    height: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  startBtn: {
    backgroundColor: '#407BFF',
    width: '100%',
    padding: 20,
    borderRadius: 18,
    marginBottom: 30,
  },
  startNow: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default HomeScreen;

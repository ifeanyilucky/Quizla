import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Result({ navigation }) {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={{
            uri: 'https://res.cloudinary.com/thebrickng/image/upload/v1662070237/Thinking_face-cuate_ywqysd.svg',
          }}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Go back </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 300,
    width: 300,
  },
});

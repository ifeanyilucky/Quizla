import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function Quiz({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text>Imagine this is a really cool question?</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cta}>
        <TouchableOpacity onPress={() => navigation.navigate('Result')}>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate('Result')}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
  },

  question: {
    paddingBottom: 10,
    marginVertical: 15,
  },
  options: {
    flex: 1,
  },
  cta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
});

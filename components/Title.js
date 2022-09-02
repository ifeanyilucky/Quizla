import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Title() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Quizla</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '400',
  },
});

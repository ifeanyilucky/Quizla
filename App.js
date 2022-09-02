import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import MyStack from './navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './App/Screen/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <Text>Welcome Akshay!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
    padding:20,
    marginTop:7
  },
});

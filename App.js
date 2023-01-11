import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import Form from './src/componets/form';
import Title from './src/componets/title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(80,200,90)',
    paddingTop:80,
  },
});

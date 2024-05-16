import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.segundoContainer}></View>
     <View style={styles.terceiroContainer}></View>
     <View style={styles.quartoContainer}></View>

      <Text>Estudando sobre tamanhos fixos e dinâmicos</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
   
  },
  segundoContainer:{
    backgroundColor: 'red',
    flex: 1,
  },

  terceiroContainer:{
    backgroundColor: 'green',
    flex: 1,
   

  },
  quartoContainer:{
    backgroundColor: 'yellow',
    flex: 1,
  }

});

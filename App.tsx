import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>My transactions</Text>    
          <Text>Enter the shaman</Text>
          <Text>Total Spent: $6000 </Text>
        </View>
        <View>
          <View>
            <Text>Startbucks </Text>
            <Text>$10.12</Text>
          </View>
          <View>
            <Text>Givenchy  </Text>
            <Text>$12.12</Text>
          </View>
          <View>
            <Text>Target  </Text>
            <Text>$6.99</Text>
          </View>
          <View>
            <Text>Bolt  </Text>
            <Text>$16.12</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

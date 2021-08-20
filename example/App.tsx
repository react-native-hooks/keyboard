import * as React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useKeyboard} from '@rnhooks/keyboard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  welcome: {
    color: 'black',
  },
  textInput: {
    backgroundColor: 'cyan',
  },
});

function App() {
  const [visible, dismiss] = useKeyboard();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>@rnhooks/keyboard</Text>
      <Text style={styles.instructions}>
        {visible ? 'Keyboard Visible' : 'Keyboard Not Visible'}
      </Text>
      <Button title="Dismiss Keyboard" onPress={dismiss} />
      <TextInput
        style={styles.textInput}
        placeholder="Tap to show keyboard"
        placeholderTextColor="black"
      />
    </View>
  );
}

export default App;

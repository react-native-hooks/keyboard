/* eslint-disable no-useless-concat, no-unused-vars, import/no-unresolved */
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import useKeyboard from '@rnhooks/keyboard';

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
});

function App() {
  const [visible, dismiss] = useKeyboard();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>@rnhook/keyboard</Text>
      <Text style={styles.instructions}>
        {visible ? 'Keyboard Visible' : 'Keyboard Not Visible'}
      </Text>
      <Button title="Dismiss Keyboard" onPress={dismiss} />
    </View>
  );
}

export default App;

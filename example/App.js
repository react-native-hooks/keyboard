/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
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
  input: {
    height: 40,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    marginHorizontal: 24,
    color: '#333',
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [visible, dismiss] = useKeyboard();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View style={styles.container}>
          <Text style={styles.instructions}>@rnhook/keyboard</Text>
          <TextInput style={styles.input} defaultValue="hi" />
          <Text style={styles.instructions}>
            {visible ? 'Keyboard Visible' : 'Keyboard Not Visible'}
          </Text>
          <Button title="Dismiss Keyboard" onPress={dismiss} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

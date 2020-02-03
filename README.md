# @rnhooks/keyboard [![Build Status](https://travis-ci.com/react-native-hooks/keyboard.svg?branch=master)](https://travis-ci.com/react-native-hooks/keyboard) [![Maintainability](https://api.codeclimate.com/v1/badges/6f1a6ac06d2cbb972cdd/maintainability)](https://codeclimate.com/github/react-native-hooks/keyboard/maintainability)

> React Native hook for [keyboard](https://facebook.github.io/react-native/docs/keyboard#docsNav)

### Installation

```bash
yarn add @rnhooks/keyboard
```

### Usage

```js
import useKeyboard from '@rnhooks/keyboard';

function App() {
  const [visible, dismiss] = useKeyboard();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>@rnhook/keyboard</Text>
      <Text style={styles.instructions}>{visible ? 'Keyboard Visible' : 'Keyboard Not Visible'}</Text>
      <Button title="Dismiss Keyboard" onPress={dismiss} />
    </View>
  );
}

```

### Configuration

If you like, you can configure the hook to use the `will` events instead of the
`did` events (by default, it uses the `did` events). This is useful in cases
where you want to trigger an animation before the keyboard begins dismissing:

```js
useKeyboard({
  useWillShow: true,
  useWillHide: true,
})
```

| Name        | Default | Type    | Description                               |
| ----------- | ------- | -------:| ----------------------------------------- |
| useWillShow | `false` | boolean | Use the `keyboardWillShow` event instead. |
| useWillHide | `false` | boolean | Use the `keyboardWillHide` event instead. |

### Output

| Name    | Default             | Type     | Description         |
| ------- | ------------------- | --------:| ------------------- |
| visible | `false`             | boolean  | Keyboard Visibility |
| dismiss | `Keyboard.dismiss`  | function | Dismiss Keyboard    |

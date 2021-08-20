import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { UseKeyboardProps } from './types';
const ReactNativeVersion = require('react-native/Libraries/Core/ReactNativeVersion');

const useKeyboard = (config: UseKeyboardProps = {}) => {
  const { useWillShow = false, useWillHide = false } = config;
  const [visible, setVisible] = useState(false);
  const showEvent = useWillShow ? 'keyboardWillShow' : 'keyboardDidShow';
  const hideEvent = useWillHide ? 'keyboardWillHide' : 'keyboardDidHide';

  function dismiss(): void {
    Keyboard.dismiss();
    return setVisible(false);
  }

  useEffect(() => {
    const v = parseInt(
      ReactNativeVersion.version.major + ReactNativeVersion.version.minor,
      10
    );

    function onKeyboardShow() {
      setVisible(true);
    }

    function onKeyboardHide() {
      setVisible(false);
    }

    if (v >= 65) {
      const showSubscription = Keyboard.addListener(showEvent, () =>
        onKeyboardShow()
      );
      const hideSubscription = Keyboard.addListener(hideEvent, () =>
        onKeyboardHide()
      );

      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    } else {
      Keyboard.addListener(showEvent, onKeyboardShow);
      Keyboard.addListener(hideEvent, onKeyboardHide);

      return () => {
        Keyboard.removeListener(showEvent, onKeyboardShow);
        Keyboard.removeListener(hideEvent, onKeyboardHide);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useWillShow, useWillHide]);

  return [visible, dismiss] as const;
};

export default useKeyboard;

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export default () => {
  const [visible, setVisible] = useState(false);

  function dismiss() {
    Keyboard.dismiss();
    setVisible(false);
  }

  useEffect(() => {
    function onKeyboardDidShow() {
      setVisible(true);
    }

    function onKeyboardDidHide() {
      setVisible(false);
    }

    Keyboard.addEventListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addEventListener('keyboardDidHide', onKeyboardDidHide);

    return () => {
      Keyboard.removeEventListener('keyboardDidShow', onKeyboardDidShow);
      Keyboard.removeEventListener('keyboardDidHide', onKeyboardDidHide);
    };
  }, []);

  return [visible, dismiss];
};

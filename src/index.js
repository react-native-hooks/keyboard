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

    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow');
      Keyboard.removeListener('keyboardDidHide');
    };
  }, []);

  return [visible, dismiss];
};

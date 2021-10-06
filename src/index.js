/* eslint-disable no-unused-vars  */
/* eslint-disable no-unused-expressions  */
import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export default (config = {}) => {
  const { useWillShow = false, useWillHide = false } = config;
  const [visible, setVisible] = useState(false);
  const showEvent = useWillShow ? 'keyboardWillShow' : 'keyboardDidShow';
  const hideEvent = useWillHide ? 'keyboardWillHide' : 'keyboardDidHide';

  function dismiss() {
    Keyboard.dismiss();
    setVisible(false);
  }

  useEffect(() => {
    function onKeyboardShow() {
      setVisible(true);
    }

    function onKeyboardHide() {
      setVisible(false);
    }

    if (Keyboard.removeListener) {
      Keyboard.addListener(showEvent, onKeyboardShow);
      Keyboard.addListener(hideEvent, onKeyboardHide);

      return () => {
        Keyboard.removeListener(showEvent, onKeyboardShow);
        Keyboard.removeListener(hideEvent, onKeyboardHide);
      };
    }

    const showSubscription = Keyboard.addListener(showEvent, onKeyboardShow);
    const hideSubscription = Keyboard.addListener(hideEvent, onKeyboardHide);

    return () => {
      showSubscription?.remove();
      hideSubscription?.remove();
    };
  }, [useWillShow, useWillHide]);

  return [visible, dismiss];
};

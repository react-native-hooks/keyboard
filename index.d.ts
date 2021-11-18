export interface UseKeyboardOptions {
    /**
     * @default false
     */
    useWillShow?: boolean
    /**
     * @default false
     */
    useWillHide?: boolean
}

/**
 * Hook that listens to keyboard events and tell whether the keyboard is currently
 * visible or not.
 * Returns [isVisible, a dismiss function]
 */
declare const useKeyboard: (options?: UseKeyboardOptions) => [boolean, () => void];
export default useKeyboard;

/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0A0A0A'
const tintColorDark = '#fff'
const black = '#000000'
const grey = '#1F1F1F'
const white = '#FFFFFF'
const offWhite = '#F7F7F7'
const moreOffWhite= '#C9C9C9'

export const Colors = {
  light: {
    deepColor: white,
    lighterColor: offWhite,
    invertColor: black,
    lighterInvert: grey,
    mainColor: '#f7b72c',
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    deepColor: black,
    lighterColor: grey,
    invertColor: white,
    lighterInvert: moreOffWhite,
    mainColor: '#f7b72c',
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

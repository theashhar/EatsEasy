/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#141414'
const tintColorDark = '#fff'
const black = '#000000'
const grey = '#1F1F1F'
const white = '#FFFFFF'
const offWhite = '#F7F7F7'
const moreOffWhite= '#A19F9F'

export const Colors = {
  light: {
    boxColor: white,
    deepColor: white,
    lighterColor: offWhite,
    invertColor: black,
    lighterInvert: grey,
    mainColor: '#f7b72c',
    mainLight: '#FFE3A6',
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    boxColor: grey,
    deepColor: black,
    lighterColor: grey,
    invertColor: white,
    lighterInvert: moreOffWhite,
    mainColor: '#f7b72c',
    mainLight: '#6B5527',
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

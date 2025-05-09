import '../global.css'
import { Slot } from "expo-router";
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
export default function RootLayout() {
  const myTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "white",
      card: '#101010',

    }
  }
  return (
    <ThemeProvider value={myTheme}>
      <Slot />
    </ThemeProvider>
  );
}
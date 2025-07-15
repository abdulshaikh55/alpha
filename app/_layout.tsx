import { Stack, SplashScreen } from "expo-router";
import { useFonts } from 'expo-font';
import { useCallback } from "react";
import { View } from "react-native";
import './globals.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('@/assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('@/assets/fonts/Lato-Bold.ttf'),
    'Lato-BoldItalic': require('@/assets/fonts/Lato-BoldItalic.ttf'),
    'Lato-Black': require('@/assets/fonts/Lato-Black.ttf'),
    'Lato-BlackItalic': require('@/assets/fonts/Lato-BlackItalic.ttf'),
    'Lato-Light': require('@/assets/fonts/Lato-Light.ttf'),
    'Lato-LightItalic': require('@/assets/fonts/Lato-LightItalic.ttf'),
    'Lato-Thin': require('@/assets/fonts/Lato-Thin.ttf'),
    'Lato-ThinItalic': require('@/assets/fonts/Lato-ThinItalic.ttf'),
    'Lato-Italic': require('@/assets/fonts/Lato-Italic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // or <SplashScreen />
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}

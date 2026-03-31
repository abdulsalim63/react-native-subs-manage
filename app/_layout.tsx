import "@/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // <SafeAreaView>
    //   <SafeAreaProvider>
    <Stack screenOptions={{ headerShown: false }} />
    //   </SafeAreaProvider>
    // </SafeAreaView>
  );
}

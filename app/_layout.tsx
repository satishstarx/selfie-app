import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { UserProvider } from "@/contexts/UserContext";
import { BooksProvider } from "@/contexts/BooksContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.navBackground,
            },
            headerTintColor: theme.title,
          }}
        >
          <Stack.Screen name="index" options={{ title: "Shelfie App" }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(dashboard)"
            options={{ headerShown: false, title: "Dashboard" }}
          />
        </Stack>
      </BooksProvider>
    </UserProvider>
  );
}

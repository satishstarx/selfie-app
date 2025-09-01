import { Colors } from "@/constants/Colors";
import { ActivityIndicator, useColorScheme } from "react-native";
import ThemedView from "./ThemedView";

export default function ThemedLoader() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator size="large" color={theme.text} />
    </ThemedView>
  );
}

import { Colors } from "@/constants/Colors";
import { View, useColorScheme } from "react-native";
import {
  useSafeAreaInsets
} from "react-native-safe-area-context";

export default function ThemedView({ style, safe = false, ...props }: any) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  if (!safe) {
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );
  }

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
}

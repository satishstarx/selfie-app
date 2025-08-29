import { StyleSheet, View, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

export default function ThemedCard({ style, ...props }: any) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});

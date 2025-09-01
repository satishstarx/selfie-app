import { Colors } from "@/constants/Colors";
import { TextInput, useColorScheme } from "react-native";

export default function ThemedTextInput({ style, ...props }: any) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <TextInput
      placeholderTextColor={theme.text}
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 10,
        },
        style,
      ]}
      {...props}
    />
  );
}

import { Colors } from "@/constants/Colors";
import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  useColorScheme,
} from "react-native";

type ThemedTextProps = TextProps & {
  style?: StyleProp<TextStyle>;
  title?: boolean;
};

export default function ThemedText({
  style,
  title = false,
  ...props
}: ThemedTextProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  const textColor = title ? theme.title : theme.text;

  return <Text style={[{ color: textColor }, style]} {...props} />;
}

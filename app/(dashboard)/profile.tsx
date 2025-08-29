import { StyleSheet } from "react-native";

import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import Spacer from "@/components/Spacer";

export default function Profile() {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText style={styles.heading} title={true}>
        Your Email
      </ThemedText>
      <ThemedText>Time to read some books...</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

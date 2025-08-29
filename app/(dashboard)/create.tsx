import { StyleSheet } from "react-native";

import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import Spacer from "@/components/Spacer";

export default function Create() {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText style={styles.heading} title={true}>
        Add a New Book
      </ThemedText>

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

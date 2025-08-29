import { StyleSheet } from "react-native";

import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import Spacer from "@/components/Spacer";

export default function Books() {
  return (
    <ThemedView style={styles.container} safe={true}>
      {/* <Spacer /> */}
      <ThemedText style={styles.heading} title={true}>
        Your Reading List
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

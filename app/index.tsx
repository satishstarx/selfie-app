import { Link } from "expo-router";
import { StyleSheet } from "react-native";

// Themed Components
import Spacer from "@/components/Spacer";
import ThemedLogo from "@/components/ThemedLogo";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.image} />
      <Spacer height={20} />

      <ThemedText title={true} style={styles.title}>
        Shelfie App
      </ThemedText>
      <ThemedText>Reading list app</ThemedText>

      <Link href="/login" style={styles.link}>
        <ThemedText>Go to login</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Go to register</ThemedText>
      </Link>
      <Link href="/(dashboard)/create" style={styles.link}>
        <ThemedText>Go to dashboard</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    fontSize: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
  },
});

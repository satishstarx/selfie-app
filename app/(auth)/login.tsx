import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

import ThemedView from "@/components/ThemedView";
import Spacer from "@/components/Spacer";
import ThemedText from "@/components/ThemedText";
import ThemedButton from "@/components/ThemedButton";

export default function Login() {
  const handlePress = () => {
    console.log("Login button pressed");
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to your account
      </ThemedText>

      <ThemedButton onPress={handlePress}>
        <Text style={{ color: "#fff" }}>Login</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/register">
        <ThemedText style={{ textAlign: "center" }}>
          Register instead
        </ThemedText>
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
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});

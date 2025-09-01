import { StyleSheet, Text } from "react-native";
import useUser from "@/hooks/useUser";

import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import Spacer from "@/components/Spacer";
import ThemedButton from "@/components/ThemedButton";

export default function Profile() {
  const { logout, user } = useUser() as {
    logout: () => Promise<void>;
    user: { email: string };
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText style={styles.heading} title={true}>
        {user.email}
      </ThemedText>
      <ThemedText>Time to read some books...</ThemedText>

      <ThemedButton onPress={logout}>
        <Text style={{ color: "#f2f2f2", fontWeight: "bold" }}>Logout</Text>
      </ThemedButton>
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

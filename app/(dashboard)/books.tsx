import { Colors } from "@/constants/Colors";
import { useBooks } from "@/hooks/useBooks";
import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet } from "react-native";

import Spacer from "@/components/Spacer";
import ThemedCard from "@/components/ThemedCard";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";

export default function Books() {
  const { books } = useBooks();
  const router = useRouter();

  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer height={20} />
      <ThemedText style={styles.heading} title={true}>
        Your Reading List
      </ThemedText>

      <Spacer height={20} />
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/(dashboard)/books/[id]",
                params: { id: item.$id },
              })
            }
          >
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.title}</ThemedText>
              <ThemedText>by {item.author}</ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    paddingLeft: 15,
    borderLeftWidth: 5,
    borderLeftColor: Colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  list: {
    marginVertical: 10,
  },
});

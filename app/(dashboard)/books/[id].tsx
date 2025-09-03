import Spacer from "@/components/Spacer";
import ThemedButton from "@/components/ThemedButton";
import ThemedCard from "@/components/ThemedCard";
import ThemedLoader from "@/components/ThemedLoader";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useBooks } from "@/hooks/useBooks";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

export default function BookDetails() {
  const [book, setBook] = useState<any>(null);
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { fetchBooksById, deleteBook } = useBooks();

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBooksById(id);
      setBook(bookData);
    }

    loadBook();
  }, [id]);

  async function handleDelete() {
    await deleteBook(id);
    setBook(null);
    router.replace("/(dashboard)/books");
  }

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.back}>
        <Ionicons
          name="arrow-back"
          size={24}
          onPress={() => router.replace("/(dashboard)/books")}
        />
      </ThemedCard>

      <ThemedCard style={styles.card}>
        <ThemedText title={true} style={styles.title}>
          {book.title}
        </ThemedText>
        <ThemedText>by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true} style={styles.description}>
          Book description
        </ThemedText>
        <Spacer height={10} />
        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>

      <ThemedButton style={styles.delete} onPress={handleDelete}>
        <Text style={{ color: "#f2f2f2", fontWeight: "bold", fontSize: 16 }}>
          Delete
        </Text>
      </ThemedButton>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    margin: 20,
  },
  delete: {
    marginTop: 40,
    backgroundColor: "#ff4d4d",
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
  },
  back: {
    width: 40,
    margin: 20,
    padding: 8,
    borderRadius: 8,
    backgroundColor: Colors.light.background,
  },
});

import useUser from "@/hooks/useUser";
import { client, tablesDB } from "@/lib/appwrite";
import { createContext, useEffect, useState } from "react";
import { ID, Permission, Query, Role } from "react-native-appwrite";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await tablesDB.listRows({
        databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
        tableId: "books",
        queries: [Query.equal("userId", [user.$id])],
      });
      setBooks(response.rows);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchBooksById(id) {
    try {
      const response = await tablesDB.getRow({
        databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
        tableId: "books",
        rowId: id,
      });

      return response;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function createBook(bookData) {
    try {
      const newBook = tablesDB.createRow({
        databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
        tableId: "books",
        rowId: ID.unique(),
        data: { ...bookData, userId: user.$id },
        permissions: [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ],
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  async function deleteBook(id) {
    try {
      await tablesDB.deleteRow({
        databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
        tableId: "books",
        rowId: id,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    let unsubscribe;

    const channel = `databases.${process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID}.tables.books.rows`;

    if (user) {
      fetchBooks();

      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response;

        if (events.includes("databases.*.tables.*.rows.create")) {
          setBooks((prevBooks) => [...prevBooks, payload]);
        }

        if (events.includes("databases.*.tables.*.rows.delete")) {
          setBooks((prevBooks) =>
            prevBooks.filter((b) => b.$id !== payload.$id)
          );
        }
      });
    } else {
      setBooks([]);
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBooksById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}

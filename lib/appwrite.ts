import { Account, Avatars, Client, TablesDB } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
  .setPlatform("dev.starx.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const tablesDB = new TablesDB(client);

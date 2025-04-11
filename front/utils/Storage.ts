import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

const isWeb = Platform.OS === "web";

export const Storage = {
  getItem(key: string): Promise<string | null> {
    return isWeb
      ? Promise.resolve(localStorage.getItem(key))
      : SecureStore.getItemAsync(key);
  },

  setItem(key: string, value: string): Promise<void> {
    return isWeb
      ? Promise.resolve(localStorage.setItem(key, value))
      : SecureStore.setItemAsync(key, value);
  },

  deleteItem(key: string): Promise<void> {
    if (isWeb) {
      localStorage.removeItem(key);
      return Promise.resolve();
    } else {
      return SecureStore.deleteItemAsync(key);
    }
  },
};

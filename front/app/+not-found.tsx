import React from "react";
import { Link, Stack } from "expo-router";
import { Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";

export default function NotFoundScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white p-4">
      <StatusBar style="dark" />

      <Text className="text-4xl font-bold text-gray-800 mb-4">404</Text>
      <Text className="text-xl text-gray-600 mb-8">Page not found</Text>
      <Link href="/" asChild>
        <Pressable className="bg-black px-6 py-3 rounded-lg">
          <Text className="text-white font-semibold">Go back</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

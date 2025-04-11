import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { isSignedIn, isLoading } = useAuth();

  return (
    <View className="flex-row justify-between items-center mb-6">
      <Text className="text-2xl font-bold text-black">RideEase</Text>
      <View className="flex flex-row items-center gap-4 min-h-[44px]">
        {isLoading ? (
          <View className="opacity-0">
            <View className="px-4 py-2">
              <Text className="text-black font-medium">Sign In</Text>
            </View>
          </View>
        ) : (
          <>
            {!isSignedIn ? (
              <View className="flex flex-row">
                <Link href="/sign-in" asChild>
                  <TouchableOpacity className="px-4 py-2">
                    <Text className="text-black font-medium">Sign In</Text>
                  </TouchableOpacity>
                </Link>
                <Link href="/sign-up" asChild>
                  <TouchableOpacity className="bg-black px-4 py-2 rounded-full">
                    <Text className="text-white font-medium">Sign Up</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            ) : (
              <Link href="/account" asChild>
                <TouchableOpacity className="bg-black px-4 py-2 rounded-full">
                  <Text className="text-white font-medium">Your Account</Text>
                </TouchableOpacity>
              </Link>
            )}
          </>
        )}
      </View>
    </View>
  );
}

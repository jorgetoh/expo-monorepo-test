import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "@/context/AuthContext";

export default function Hero() {
  const { isSignedIn, isLoading } = useAuth();

  return (
    <>
      <Text className="text-5xl font-bold text-black leading-tight mb-6 text-left md:text-center mt-6">
        Your Journey,{"\n"}Our Priority
      </Text>
      <Text className="text-xl max-w-[500px] mx-auto text-gray-600 mb-10 text-balance text-left  md:text-center ">
        Experience seamless rides with our premium service. Quick, safe, and
        reliable transportation at your fingertips.
      </Text>

      <View className="flex flex-row justify-center gap-4 mb-12 min-h-[64px]">
        {isLoading ? (
          <></>
        ) : (
          <>
            {isSignedIn ? (
              <Link href="/" asChild>
                <TouchableOpacity className="bg-black px-8 py-4 rounded-full flex-row items-center justify-center min-w-[200px]">
                  <Ionicons name="car" size={20} color="white" />
                  <Text className="text-white text-lg font-semibold">
                    Start Riding
                  </Text>
                </TouchableOpacity>
              </Link>
            ) : (
              <>
                <Link href="/sign-up" asChild>
                  <TouchableOpacity className="bg-black px-8 py-4 rounded-full items-center justify-center">
                    <Text className="text-white text-lg font-semibold text-center">
                      Get Started
                    </Text>
                  </TouchableOpacity>
                </Link>
                <Link href="/sign-in" asChild>
                  <TouchableOpacity className="border border-black px-8 py-4 rounded-full items-center justify-center">
                    <Text className="text-black text-lg font-semibold text-center">
                      Learn More
                    </Text>
                  </TouchableOpacity>
                </Link>
              </>
            )}
          </>
        )}
      </View>
    </>
  );
}

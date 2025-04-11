import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/dashboard/Navbar";
import Features from "@/components/dashboard/Features";
import Stats from "@/components/dashboard/Stats";
import Hero from "@/components/dashboard/Hero";
import { useAuth } from "@/context/AuthContext";

export default function LandingPage() {
  const { isSignedIn, user } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="flex-1">
        <View className="min-h-screen px-6 pt-8">
          <Navbar />
          <Hero />
          <Stats />
          <Features />
        </View>

        {isSignedIn && user && (
          <View className="p-6 bg-gray-50 rounded-t-3xl">
            <Text className="text-lg text-black mb-4 text-center">
              Welcome back, {user.email}
            </Text>
            <Link href="/" asChild>
              <TouchableOpacity className="bg-black p-4 rounded-xl items-center w-full mb-4">
                <Text className="text-white text-lg font-semibold">
                  Continue to App
                </Text>
              </TouchableOpacity>
            </Link>
            <Link href="/account" asChild>
              <TouchableOpacity className="p-4 rounded-xl items-center w-full bg-gray-200 border border-gray-300">
                <Text className="text-black text-base font-semibold">
                  Your Account
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

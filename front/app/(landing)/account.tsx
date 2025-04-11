import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import BackTitle from "@/components/ui/BackTitle";
import { useAuth } from "@/context/AuthContext";

export default function AccountPage() {
  const { isLoading, isSignedIn, user, signOut } = useAuth();
  const { navigate } = useRouter();

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar style="dark" />
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl text-gray-600">Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!isSignedIn) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="pt-12 px-4">
          <Link href={"/"} className="w-10 h-10 items-center justify-center">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Link>
        </View>
        <StatusBar style="dark" />
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl text-gray-600">
            Please sign in to view this page
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <BackTitle title="Your Account" />

      <View className="flex-1 p-6">
        <View className="bg-gray-50 p-6 rounded-xl mb-6">
          <Text className="text-2xl font-bold text-black mb-2">
            Hello, {user?.name}
          </Text>
          <Text className="text-gray-600 mb-2">{user?.email}</Text>
        </View>

        <TouchableOpacity
          className="p-4 rounded-xl items-center w-full bg-red-600 border border-red-700"
          onPress={handleSignOut}
        >
          <Text className="text-white text-base font-semibold">Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

import * as React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  SafeAreaView,
} from "react-native";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import BackTitle from "@/components/ui/BackTitle";
import { useAuth } from "@/context/AuthContext";

export default function SignInScreen() {
  const { signIn } = useAuth();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    try {
      await signIn(emailAddress, password);
      router.replace("/");
    } catch (err: any) {
      Alert.alert("Error", err.message || "Something went wrong");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-4 ">
      <BackTitle title="Sign In" />
      <View className="mt-8">
        <View className="gap-4">
          <View>
            <Text className="text-base mb-2 font-medium text-gray-700">
              Email
            </Text>
            <View className="flex-row border border-gray-300 rounded-xl px-4 py-3">
              <Ionicons name="mail" size={24} color="#6b7280" />
              <TextInput
                autoCapitalize="none"
                placeholder="Email address"
                value={emailAddress}
                onChangeText={setEmailAddress}
                className="flex-1 ml-2"
              />
            </View>
          </View>

          <View>
            <Text className="text-base mb-2 font-medium text-gray-700">
              Password
            </Text>
            <View className="flex-row border border-gray-300 rounded-xl px-4 py-3">
              <Ionicons name="lock-closed" size={24} color="#6b7280" />
              <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
                className="flex-1 ml-2"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          className="py-3 bg-black rounded-xl items-center mt-8"
          onPress={onSignInPress}
        >
          <Text className="text-white font-semibold text-base">Sign In</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-8">
          <Text className="text-gray-600">Don't have an account? </Text>
          <Link href="/sign-up" asChild>
            <TouchableOpacity>
              <Text className="text-black font-medium">Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

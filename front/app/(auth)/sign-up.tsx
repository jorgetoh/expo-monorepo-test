import * as React from "react";
import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import BackTitle from "@/components/ui/BackTitle";
import { useAuth } from "@/context/AuthContext";

export default function SignUpScreen() {
  const { signUp } = useAuth();

  const [name, setName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const onSignUpPress = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      await signUp(name, emailAddress, password);
      router.replace("/");
    } catch (err: any) {
      Alert.alert("Error", err.message || "Something went wrong");
    }
  };

  return (
    <View className="flex-1 bg-white p-4">
      <BackTitle title="Create Account" />
      <View className="mt-8">
        <View className="gap-4">
          <View>
            <Text className="text-base mb-2 font-medium text-gray-700">
              Name
            </Text>
            <View className="flex-row border border-gray-300 rounded-xl px-4 py-3">
              <Ionicons name="person" size={24} color="#6b7280" />
              <TextInput
                placeholder="Full name"
                value={name}
                onChangeText={setName}
                className="flex-1 ml-2"
              />
            </View>
          </View>

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

          <View>
            <Text className="text-base mb-2 font-medium text-gray-700">
              Confirm Password
            </Text>
            <View className="flex-row border border-gray-300 rounded-xl px-4 py-3">
              <Ionicons name="lock-closed" size={24} color="#6b7280" />
              <TextInput
                placeholder="Confirm password"
                value={confirmPassword}
                secureTextEntry
                onChangeText={setConfirmPassword}
                className="flex-1 ml-2"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          className="py-3 bg-black rounded-xl items-center mt-8"
          onPress={onSignUpPress}
        >
          <Text className="text-white font-semibold text-base">Sign Up</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-8">
          <Text className="text-gray-600">Already have an account? </Text>
          <Link href="/sign-in" asChild>
            <TouchableOpacity>
              <Text className="text-black font-medium">Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

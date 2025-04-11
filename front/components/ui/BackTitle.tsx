import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function BackTitle({ title }: { title: string }) {
  return (
    <View className="flex-row items-center mb-6">
      <Link href={"/"} className="w-10 h-10 flex items-center justify-center">
        <Ionicons name="arrow-back" size={24} color="black" />
      </Link>
      <Text className="text-2xl font-bold text-black ml-2">{title}</Text>
    </View>
  );
}

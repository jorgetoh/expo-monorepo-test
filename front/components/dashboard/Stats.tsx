import { Text, View } from "react-native";

export default function Stats() {
  return (
    <View className="flex-row justify-center gap-4 mb-20">
      <View className="items-center">
        <Text className="text-3xl font-bold text-black">10M+</Text>
        <Text className="text-gray-600">Happy Riders</Text>
      </View>
      <View className="items-center">
        <Text className="text-3xl font-bold text-black">50K+</Text>
        <Text className="text-gray-600">Verified Drivers</Text>
      </View>
      <View className="items-center">
        <Text className="text-3xl font-bold text-black">24/7</Text>
        <Text className="text-gray-600">Support</Text>
      </View>
    </View>
  );
}

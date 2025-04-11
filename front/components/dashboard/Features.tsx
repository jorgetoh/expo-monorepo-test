import { Text, View, Platform } from "react-native";

export default function Features() {
  return (
    <View>
      <View
        className={`flex flex-col gap-4 ${
          Platform.OS === "web" ? "mx-auto" : ""
        }`}
      >
        <View className="flex-row items-center gap-2">
          <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center">
            <Text className="text-2xl">🚗</Text>
          </View>
          <View className="flex-1">
            <Text className="text-xl font-semibold text-black">
              Quick Pickup
            </Text>
            <Text className="text-gray-600">
              Get a ride in minutes, not hours
            </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center">
            <Text className="text-2xl">🛡️</Text>
          </View>
          <View className="flex-1">
            <Text className="text-xl font-semibold text-black">Safe Rides</Text>
            <Text className="text-gray-600">
              Verified drivers, secure journeys
            </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center">
            <Text className="text-2xl">💳</Text>
          </View>
          <View className="flex-1">
            <Text className="text-xl font-semibold text-black">
              Easy Payment
            </Text>
            <Text className="text-gray-600">
              Cashless, hassle-free transactions
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

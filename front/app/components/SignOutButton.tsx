import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function SignOutButton() {
  const { navigate } = useRouter();
  return (
    <TouchableOpacity
      className="p-4 rounded-xl items-center w-full bg-red-600 border border-red-700"
      // onPress={() =>
      //   signOut(() => {
      //     navigate("/");
      //   })
      // }
    >
      <Text className="text-white text-base font-semibold">Sign Out</Text>
    </TouchableOpacity>
  );
}

import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
    return (
        <View className="flex-1 justify-center items-center bg-[#25292e]">
            <Text className="text-white">Home screen</Text>
            <Link href={"/About"} className="text-3xl underline text-white">Go to About screen</Link>
        </View>
    );
}


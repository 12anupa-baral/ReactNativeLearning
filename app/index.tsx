import { Text, View } from "react-native";
import "./global.css"
 

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red text-xl font-bold">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

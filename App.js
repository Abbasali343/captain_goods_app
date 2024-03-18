import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddDealer from "./pages/AddDealer";

export default function App() {
  return (
    <>
      {/* <View style={styles.container}>
        <Text>Captain Goods hbr</Text>
        <StatusBar style="auto" />
      </View> */}
      <AddDealer />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

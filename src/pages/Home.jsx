import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/toolbox.png")}
        />
      </View>
      <Text style={styles.text}>MultiTool App 2021-2417</Text>
      <Button title="Open menu" onPress={() => navigation.openDrawer()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    backgroundColor: "#cbb1cb",
    borderRadius: "20%",
    display: "flex",
    alignItems: "center",
    padding: 20,
    height: 210,
    width: 280,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 20,
  },
});

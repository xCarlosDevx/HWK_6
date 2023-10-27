import React from "react";
import { View, Text, StyleSheet, Linking, Image } from "react-native";

export default function AboutMe() {
  return (
    <View style={styles.container}>
      {" "}
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/profilebg.png")}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.name}>Carlos Alejandro La Hoz</Text>
      <Text style={styles.contact}>Email: lahozfrias@gmail.com</Text>
      <Text style={styles.contact}>
        GitHub:{" "}
        <Text
          onPress={() => Linking.openURL("https://github.com/xCarlosDevx")}
          style={styles.link}
        >
          https://github.com/xCarlosDevx
        </Text>
      </Text>
      <Text style={styles.contact}>
        LinkedIn:{" "}
        <Text
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/carlos-alejandro-la-hoz-frias-212924180/"
            )
          }
          style={styles.link}
        >
          https://www.linkedin.com/in/carlos-alejandro-la-hoz-frias-212924180/
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  imgContainer: {
    backgroundColor: "#cbb1cb",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    marginLeft:30,
    height: 250,
    width: 250,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contact: {
    marginBottom: 10,
  },
  link: {
    color: "blue",
  },
});

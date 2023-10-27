import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Image } from "react-native";
import axios from "axios";

export default function Gender() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState(null);

  const predictGender = () => {
    axios
      .get(`https://api.genderize.io/?name=${name}`)
      .then((response) => {
        setGender(response.data.gender);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getBackgroundColor = () => {
    if (gender === "male") {
      return "#1453fe";
    } else if (gender === "female") {
      return "#f0c2d5";
    } else {
      return "white";
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/toolbox.png")}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="What is the Gender?" onPress={predictGender} />
      {gender && (
        <Text style={[styles.text, { backgroundColor: getBackgroundColor() }]}>
          Your gender for {name} is {gender}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  text: {
    padding: 10,
    marginTop: 5,
  },
  imgContainer: {
    backgroundColor: "#cbb1cb",
    borderRadius: "20%",
    display: "flex",
    alignItems: "center",
    padding: 20,
    height: 210,
    width: 280,
    marginVertical: 20,
    marginLeft: 20,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
